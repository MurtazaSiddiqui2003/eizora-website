"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const labels = { new: "New", contacted: "Contacted", proposal_sent: "Proposal sent", won: "Won", lost: "Lost" };
const dateValue = value => value ? new Date(value).toISOString().slice(0, 10) : "";

export default function AdminDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState([]);
  const [selected, setSelected] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [followUpDate, setFollowUpDate] = useState("");
  const active = leads.find(lead => lead.id === selected);
  const visible = useMemo(() => filter === "all" ? leads : leads.filter(lead => lead.status === filter), [leads, filter]);

  useEffect(() => {
    setFollowUpDate(dateValue(active?.follow_up_at));
  }, [active?.id, active?.follow_up_at]);

  const load = useCallback(async () => {
    const response = await fetch("/api/admin/leads", { cache: "no-store" });
    const data = await response.json();
    if (response.status === 401) { router.replace("/admin"); return; }
    if (!response.ok) throw new Error(data.error || "Unable to load leads.");
    setLeads(data.leads || []);
    setSelected(current => current || data.leads?.[0]?.id || "");
  }, [router]);

  useEffect(() => { load().catch(err => setError(err.message)).finally(() => setLoading(false)); }, [load]);

  async function updateLead(changes) {
    if (!active) return;
    setSaving(true); setError("");
    try {
      const response = await fetch("/api/admin/leads", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: active.id, ...changes }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not save changes.");
      setLeads(current => current.map(item => item.id === active.id ? data.lead : item));
    } catch (err) { setError(err.message); }
    finally { setSaving(false); }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin");
  }

  const counts = Object.keys(labels).map(key => ({ key, count: leads.filter(lead => lead.status === key).length }));
  return <main className="admin-shell admin-dashboard">
    <div className="admin-top"><a href="/" className="admin-brand"><span>E</span> EIZORA LABS</a><div><span>PRIVATE LEAD DESK</span><button onClick={logout}>SIGN OUT ↗</button></div></div>
    <section className="admin-content">
      <div className="admin-dashboard-heading"><div><span className="admin-kicker">STUDIO OPERATIONS / 01</span><h1>Lead <em>desk.</em></h1><p>Every conversation, in one place.</p></div><button onClick={() => load().catch(err => setError(err.message))}>↻ REFRESH</button></div>
      <div className="lead-stats">{counts.map(item => <div key={item.key}><span>{labels[item.key]}</span><strong>{item.count}</strong></div>)}</div>
      {error && <p className="admin-error">{error}</p>}
      <div className="lead-workspace">
        <section className="lead-list"><div className="lead-list-head"><strong>INQUIRIES ({visible.length})</strong><select value={filter} onChange={e => setFilter(e.target.value)}><option value="all">All statuses</option>{Object.entries(labels).map(([key,label]) => <option key={key} value={key}>{label}</option>)}</select></div>
          {loading ? <p className="admin-empty">Loading inquiries…</p> : visible.length ? visible.map(lead => <button className={selected === lead.id ? "lead-item active" : "lead-item"} key={lead.id} onClick={() => setSelected(lead.id)}><span>{new Date(lead.created_at).toLocaleDateString()}</span><strong>{lead.business || lead.name}</strong><small>{lead.service}</small><i>{labels[lead.status]}</i></button>) : <p className="admin-empty">No inquiries here yet.</p>}
        </section>
        <section className="lead-detail">
          {!active ? <p className="admin-empty">Select an inquiry to view its details.</p> : <>
            <div className="lead-detail-head"><div><span>INQUIRY / {active.id.slice(0, 8).toUpperCase()}</span><h2>{active.business || active.name}</h2><p>{active.name} · {new Date(active.created_at).toLocaleString()}</p></div><a href={`https://wa.me/${String(active.phone || "").replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer">WHATSAPP ↗</a></div>
            <div className="lead-facts"><div><span>EMAIL</span><a href={`mailto:${active.email}`}>{active.email}</a></div><div><span>PHONE</span><p>{active.phone || "Not provided"}</p></div><div><span>SERVICE</span><p>{active.service}</p></div><div><span>BUDGET</span><p>{active.budget || "Not decided"}</p></div><div><span>TIMELINE</span><p>{active.timeline || "Flexible"}</p></div><div><span>WEBSITE</span>{active.website ? <a href={active.website} target="_blank" rel="noreferrer">{active.website}</a> : <p>Not provided</p>}</div></div>
            <div className="lead-description"><span>PROJECT DETAILS</span><p>{active.details}</p></div>
            <div className="lead-edit-grid">
              <label>STATUS<select value={active.status} onChange={e => updateLead({ status: e.target.value })}>{Object.entries(labels).map(([key,label]) => <option key={key} value={key}>{label}</option>)}</select></label>
              <label>FOLLOW-UP DATE<input type="date" value={followUpDate} onChange={e => setFollowUpDate(e.target.value)}/><button type="button" disabled={saving || followUpDate === dateValue(active.follow_up_at)} onClick={() => updateLead({ follow_up_at: followUpDate ? new Date(`${followUpDate}T12:00:00`).toISOString() : null })}>{saving ? "SAVING…" : "SAVE DATE ↗"}</button></label>
            </div>
            <label className="lead-notes">INTERNAL NOTES<textarea key={active.id} defaultValue={active.internal_notes || ""} rows="4" placeholder="Add conversation notes, next steps, proposal details…"/><button disabled={saving} onClick={e => updateLead({ internal_notes: e.currentTarget.previousElementSibling.value })}>{saving ? "SAVING…" : "SAVE NOTES ↗"}</button></label>
          </>}
        </section>
      </div>
    </section>
  </main>;
}