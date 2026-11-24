import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "../case-studies";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = caseStudies[slug];
  if (!project) return { title: "Project not found | Eizora Labs" };
  return { title: `${project.title} — Selected Work | Eizora Labs`, description: project.summary };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = caseStudies[slug];
  if (!project) notFound();
  const sections = [["THE BRIEF", project.brief], ["THE APPROACH", project.approach], ["THE OUTCOME", project.outcome]];
  return (
    <main className="case-page">
      <header className="case-nav"><Link className="wordmark" href="/"><span className="mark">E</span><span>EIZORA<span className="wordmark-light"> LABS</span></span></Link><Link href="/#work" className="case-back">← ALL WORK</Link></header>
      <section className="case-hero">
        <div className="case-hero-kicker"><span>SELECTED WORK / {project.number}</span><span>{project.category}</span></div>
        <p className="case-status">{project.status}</p><h1>{project.title}<span>.</span></h1>
        <p className="case-summary">{project.summary}</p>
        <div className="case-meta"><div><span>ROLE</span><strong>{project.role}</strong></div><div><span>PLATFORM</span><strong>{project.platform}</strong></div><div><span>PROJECT TYPE</span><strong>{project.category}</strong></div></div>
        {project.url && <a className="case-live" href={project.url} target="_blank" rel="noreferrer">EXPLORE LIVE PROJECT ↗</a>}
      </section>
      <section className="case-content">
        {sections.map(([label, body], index) => <article className="case-content-row" key={label}><span>0{index+1} / {label}</span><div><h2>{["A clear purpose.","Thought through.","Made to move things forward."][index]}</h2><p>{body}</p></div></article>)}
        <article className="case-content-row"><span>04 / DELIVERABLES</span><div><h2>What went into it.</h2><ul>{project.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div></article>
      </section>
      <section className="case-end"><p>HAVE A PROJECT IN MIND?</p><h2>Let's make<br /><em>it mean something.</em></h2><Link href="/#contact" className="case-live">START A CONVERSATION ↗</Link><Link href="/#work" className="case-back-bottom">BACK TO SELECTED WORK ↑</Link></section>
      <footer className="footer"><Link className="footer-brand" href="/">EIZORA LABS<span>®</span></Link><span>INDEPENDENT DIGITAL COMMERCE STUDIO</span><small>© {new Date().getFullYear()} EIZORA LABS. MADE WITH INTENTION.</small></footer>
    </main>
  );
}