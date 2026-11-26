import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const adminEmail = process.env.EIZORA_ADMIN_EMAIL;
    if (!adminEmail || String(email || "").trim().toLowerCase() !== adminEmail.toLowerCase()) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    const response = await fetch(`${url}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json" },
      body: JSON.stringify({ email: adminEmail, password }),
      cache: "no-store",
    });
    const data = await response.json();
    if (!response.ok || !data.access_token) {
      return NextResponse.json({ error: data.msg || data.message || data.error_description || "Invalid email or password. If you just registered, confirm your email first." }, { status: 401 });
    }
    const result = NextResponse.json({ ok: true });
    result.cookies.set("eizora_admin_token", data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: Math.min(data.expires_in || 28800, 28800),
    });
    return result;
  } catch {
    return NextResponse.json({ error: "Unable to sign in right now." }, { status: 400 });
  }
}
