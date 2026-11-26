import Link from "next/link";
import ProjectInquiryForm from "../components/ProjectInquiryForm";

export const metadata = {
  title: "Start a Project | Eizora Labs",
  description: "Tell Eizora Labs about your website or Shopify project. Share your goals and requirements to start a conversation."
};

export default function StartProjectPage({ searchParams }) {
  return <main className="business-page">
    <header className="business-nav"><Link className="wordmark" href="/"><span className="mark">E</span><span>EIZORA<span className="wordmark-light"> LABS</span></span></Link><nav><Link href="/services">Services</Link><Link href="/#work">Selected work</Link></nav><Link className="business-nav-cta" href="/">Back to home ↗</Link></header>
    <section className="inquiry-hero"><span className="business-kicker">PROJECT INQUIRY / 01</span><h1>Tell us what<br/><em>you're thinking.</em></h1><p>A little context helps us understand what you need and whether we're the right fit. Share as much as you know — it's okay if some details are still taking shape.</p></section>
    <section className="inquiry-layout"><div className="inquiry-aside"><span>THE FIRST STEP</span><h2>Good projects<br/>start with<br/><em>a conversation.</em></h2><p>We'll review your inquiry and follow up to clarify the brief, discuss the best approach and prepare a tailored proposal if it's a fit.</p><div className="inquiry-contact"><b>PREFER WHATSAPP?</b><a href="https://wa.me/923099864045" target="_blank" rel="noreferrer">Message Eizora Labs ↗</a></div></div><ProjectInquiryForm initialService={searchParams?.service || ""}/></section>
    <footer className="business-footer"><Link href="/">EIZORA LABS®</Link><span>WE BUILD. WE IMPROVE. WE GROW.</span><Link href="/services">EXPLORE SERVICES ↗</Link></footer>
  </main>;
}
