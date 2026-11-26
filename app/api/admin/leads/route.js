import { cookies } from "next/headers";
import { NextResponse } from "next/server";

async function getAdminContext() {
  const token = (await cookies()).get("eizora_admin_token")?.value;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!token || !url || !key) return null;
  const userResponse = await fetch(`${url}/auth/v1/user`, {
    headers: { apikey: key, Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!userResponse.ok) return null;
  const user = await userResponse.json();
  if (String(user.email || "").toLowerCase() !== String(process.env.EIZORA_ADMIN_EMAIL || "").toLowerCase()) return null;
  return { token, url, key };
}

export async function GET() {
  const context = await getAdminContext();
  if (!context) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  const response = await fetch(`${context.url}/rest/v1/leads?select=*&order=created_at.desc&limit=200`, {
    headers: { apikey: context.key, Authorization: `Bearer ${context.token}` },
    cache: "no-store",
  });
  const data = await response.json();
  if (!response.ok) return NextResponse.json({ error: "Unable to load leads. Your admin access may still need activation." }, { status: response.status });
  return NextResponse.json({ leads: data });
}

export async function PATCH(request) {
  const context = await getAdminContext();
  if (!context) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  try {
    const { id, status, follow_up_at, internal_notes } = await request.json();
    const allowed = ["new", "contacted", "proposal_sent", "won", "lost"];
    if (!id || (status && !allowed.includes(status))) return NextResponse.json({ error: "Invalid lead update." }, { status: 400 });
    const update = {};
    if (status) update.status = status;
    if (follow_up_at !== undefined) update.follow_up_at = follow_up_at || null;
    if (internal_notes !== undefined) update.internal_notes = String(internal_notes).slice(0, 5000);
    const response = await fetch(`${context.url}/rest/v1/leads?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: {
        apikey: context.key,
        Authorization: `Bearer ${context.token}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(update),
      cache: "no-store",
    });
    const data = await response.json();
    if (!response.ok) return NextResponse.json({ error: "Unable to update lead. Check that your admin access is activated." }, { status: response.status });
    if (!data.length) return NextResponse.json({ error: "No lead updated. Admin access may not be activated yet." }, { status: 403 });
    return NextResponse.json({ lead: data[0] });
  } catch {
    return NextResponse.json({ error: "Invalid update request." }, { status: 400 });
  }
}
