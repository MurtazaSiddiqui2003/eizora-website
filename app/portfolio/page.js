import Link from "next/link";
import ProjectPreview from "../components/ProjectPreview";
import { caseStudies } from "../work/case-studies";

const featured = ["sterling-bloom", "crc-core", "eishas-collection", "junaids-portfolio"];

export const metadata = {
  title: "Portfolio — Selected Work | Eizora Labs",
  description: "Explore selected websites, storefronts, portfolios, and digital experiences by Eizora Labs.",
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <header className="case-nav">
        <Link className="wordmark" href="/"><span className="mark">E</span><span>EIZORA<span className="wordmark-light"> LABS</span></span></Link>
        <nav className="portfolio-nav"><Link href="/services">SERVICES</Link><Link href="/start-project">START A PROJECT ↗</Link></nav>
      </header>
      <section className="portfolio-hero">
        <span>SELECTED WORK / THE ARCHIVE</span>
        <h1>Good work.<br /><em>Clear intent.</em></h1>
        <p>A collection of live projects, in-progress work, and creative explorations. Each project is labelled honestly, so you can see what was built and what is still taking shape.</p>
        <div className="portfolio-hero-meta"><span>01—10 / PROJECTS & EXPLORATIONS</span><span>DESIGN · DEVELOPMENT · DIGITAL COMMERCE</span></div>
      </section>
      <section className="portfolio-archive">
        <div className="section-topline"><span>THE PROJECT INDEX</span><span>{Object.keys(caseStudies).length} ENTRIES</span></div>
        <div className="portfolio-live-grid">
          {Object.entries(caseStudies).map(([slug, project]) => (
            <article className="portfolio-live-card" key={slug}>
              <ProjectPreview url={project.url} title={project.title} />
              <div className="work-card-info">
                <div>
                  <span className="project-type">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="portfolio-card-actions">
                  <span className="work-card-status">{project.status}</span>
                  <Link className="portfolio-case-link" href={`/work/${slug}`}>VIEW CASE STUDY ↗</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="portfolio-end">
        <span>HAVE SOMETHING IN MIND?</span>
        <h2>Let&apos;s build<br /><em>what&apos;s next.</em></h2>
        <Link href="/start-project">START A PROJECT ↗</Link>
      </section>
      <footer className="footer"><Link className="footer-brand" href="/">EIZORA LABS<span>®</span></Link><span>INDEPENDENT DIGITAL COMMERCE STUDIO</span><div><Link href="/services">SERVICES ↗</Link><Link href="/start-project">START A PROJECT ↗</Link></div><small>© {new Date().getFullYear()} EIZORA LABS. MADE WITH INTENTION.</small></footer>
    </main>
  );
}
