"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("murtazasiddiqui250@gmail.com");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setBusy(true); setError(""); setMessage("");
    try {
      const response = await fetch(mode === "signup" ? "/api/admin/signup" : "/api/admin/login", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Request failed.");
      if (mode === "signup") setMessage(data.message);
      else router.push("/admin/dashboard");
    } catch (err) { setError(err.message); }
    finally { setBusy(false); }
  }

  return <main className="admin-shell">
    <div className="admin-top"><a href="/" className="admin-brand"><span>E</span> EIZORA LABS</a><a href="/">BACK TO WEBSITE ↗</a></div>
    <section className="admin-login">
      <span className="admin-kicker">EIZORA LABS / PRIVATE AREA</span>
      <h1>{mode === "login" ? <>Welcome<br/><em>back.</em></> : <>Create your<br/><em>admin account.</em></>}</h1>
      <p>Private lead management for the Eizora Labs studio.</p>
      <form onSubmit={submit}>
        <label>Email address<input type="email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email"/></label>
        <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={10} autoComplete={mode === "login" ? "current-password" : "new-password"}/></label>
        {error && <p className="admin-error" role="alert">{error}</p>}
        {message && <p className="admin-message" role="status">{message}</p>}
        <button disabled={busy}>{busy ? "PLEASE WAIT…" : mode === "login" ? "SIGN IN ↗" : "CREATE ACCOUNT ↗"}</button>
      </form>
      <button className="admin-mode" type="button" onClick={() => {setMode(mode === "login" ? "signup" : "login");setError("");setMessage("");}}>
        {mode === "login" ? "First time? Create your admin account" : "Already registered? Sign in"}
      </button>
      <small>Access is restricted to the authorized studio email. New accounts may need email confirmation and admin activation.</small>
    </section>
  </main>;
}
