"use client";

import { useState } from "react";

const inputFields = [
  { name: "name", label: "Your name", placeholder: "e.g. Ayesha Khan", required: true },
  { name: "business", label: "Business / brand name", placeholder: "Your business name", required: true },
  { name: "email", label: "Email address", placeholder: "you@company.com", required: true, type: "email" },
  { name: "phone", label: "Your WhatsApp / phone (optional)", placeholder: "+92 ..." }
];

export default function ProjectInquiryForm({ initialService = "" }) {
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", website: "", service: initialService, budget: "", timeline: "", details: "" });
  const [error, setError] = useState("");
  const update = (event) => setForm(current => ({ ...current, [event.target.name]: event.target.value }));

  function submit(event) {
    event.preventDefault();
    if (!form.service) { setError("Please choose the service you'd like to discuss."); return; }
    if (form.details.trim().length < 20) { setError("Please tell us a little more about your project (at least 20 characters)."); return; }
    setError("");
    const lines = [
      "Hello Eizora Labs! I'd like to discuss a project.",
      "", "PROJECT INQUIRY",
      `Name: ${form.name}`, `Business: ${form.business}`, `Email: ${form.email}`,
      `WhatsApp: ${form.phone || "Not provided"}`, `Current website: ${form.website || "Not provided"}`,
      `Service: ${form.service}`, `Budget: ${form.budget || "Not decided"}`,
      `Timeline: ${form.timeline || "Flexible"}`, "", "PROJECT DETAILS:", form.details
    ];
    window.open(`https://wa.me/923099864045?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  return <form className="project-form" onSubmit={submit}>
    <div className="form-heading"><span>PROJECT DETAILS / REQUIRED FIELDS MARKED *</span><p>We&apos;ll use these details to prepare for an initial conversation.</p></div>
    <div className="form-grid">{inputFields.map(field => <label className="form-field" key={field.name}><span>{field.label}{field.required ? " *" : ""}</span><input name={field.name} type={field.type || "text"} placeholder={field.placeholder} value={form[field.name]} onChange={update} required={field.required}/></label>)}</div>
    <label className="form-field"><span>Current website / store (optional)</span><input name="website" type="url" placeholder="https://..." value={form.website} onChange={update}/></label>
    <label className="form-field"><span>Which service are you interested in? *</span><select name="service" value={form.service} onChange={update} required><option value="">Choose a service</option><option>Shopify Store Tune-up</option><option>Shopify Store Upgrade</option><option>Custom Website Development</option><option>Not sure — help me decide</option></select></label>
    <div className="form-grid"><label className="form-field"><span>Approximate budget</span><select name="budget" value={form.budget} onChange={update}><option value="">Select a range</option><option>Under PKR 10,000</option><option>PKR 10,000–25,000</option><option>PKR 25,000–50,000</option><option>PKR 50,000–100,000</option><option>PKR 100,000+</option><option>Not decided yet</option></select></label><label className="form-field"><span>When would you like to start?</span><select name="timeline" value={form.timeline} onChange={update}><option value="">Choose a timeline</option><option>As soon as possible</option><option>Within 2 weeks</option><option>Within a month</option><option>In 1–3 months</option><option>Flexible / exploring</option></select></label></div>
    <label className="form-field"><span>Tell us about your project *</span><textarea name="details" rows="6" minLength="20" placeholder="What does your business do? What would you like to build or improve? Any important features or challenges?" value={form.details} onChange={update} required/></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="form-submit" type="submit">Send project inquiry via WhatsApp <span>↗</span></button>
    <p className="form-privacy">Submitting opens WhatsApp with your project details ready to send. Nothing is sent until you press Send in WhatsApp.</p>
  </form>;
}
