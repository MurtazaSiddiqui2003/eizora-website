import { NextResponse } from "next/server";

const allowedServices = new Set([
  "Shopify Store Tune-up",
  "Shopify Store Upgrade",
  "Custom Website Development",
  "Not sure — help me decide",
]);

export async function POST(request) {
  try {
    const body = await request.json();
    const required = ["name", "business", "email", "service", "details"];
    if (required.some((key) => typeof body[key] !== "string" || !body[key].trim())) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }
    if (!allowedServices.has(body.service) || body.details.trim().length < 20) {
      return NextResponse.json({ error: "Please check your service and project details." }, { status: 400 });
    }
    if (body.name.length > 120 || body.business.length > 160 || body.email.length > 254 || body.details.length > 5000) {
      return NextResponse.json({ error: "Some fields are too long." }, { status: 400 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) return NextResponse.json({ error: "Inquiry service is temporarily unavailable." }, { status: 503 });

    const response = await fetch(`${url}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name: body.name.trim(),
        business: body.business.trim(),
        email: body.email.trim().toLowerCase(),
        phone: (body.phone || "").trim() || null,
        website: (body.website || "").trim() || null,
        service: body.service,
        budget: (body.budget || "").trim() || null,
        timeline: (body.timeline || "").trim() || null,
        details: body.details.trim(),
      }),
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("Lead insert failed:", response.status, await response.text());
      return NextResponse.json({ error: "We couldn't save your inquiry. Please try again or contact us on WhatsApp." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 400 });
  }
}
