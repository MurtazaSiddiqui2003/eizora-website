import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const adminEmail = process.env.EIZORA_ADMIN_EMAIL;
    if (!adminEmail || String(email || "").trim().toLowerCase() !== adminEmail.toLowerCase()) {
      return NextResponse.json({ error: "This email is not authorized for the Eizora Labs admin account." }, { status: 403 });
    }
    if (typeof password !== "string" || password.length < 10) {
      return NextResponse.json({ error: "Use a password with at least 10 characters." }, { status: 400 });
    }
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    const response = await fetch(`${url}/auth/v1/signup`, {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json" },
      body: JSON.stringify({ email: adminEmail, password }),
      cache: "no-store",
    });
    const data = await response.json();
    if (!response.ok) return NextResponse.json({ error: data.msg || data.message || data.error_description || "Account registration failed." }, { status: response.status });
    return NextResponse.json({ ok: true, message: data.session ? "Account created. You can now sign in." : "Account created. Check your inbox and confirm your email before signing in." });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 400 });
  }
}
