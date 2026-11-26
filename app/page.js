import { caseStudies } from "./work/case-studies";

const services = [
  ["01", "Shopify development", "Storefronts with a clear point of view, built around the way your customers actually shop."],
  ["02", "Custom websites", "Fast, considered websites that give growing businesses a stronger digital home."],
  ["03", "E-commerce refinement", "Sharper product pages, smoother journeys, and practical improvements to the details that matter."],
  ["04", "Landing pages", "Focused pages that make your offer easier to understand — and easier to act on."],
];

const steps = [
  ["01", "Listen first", "We get to know the business, the people it serves, and what needs to change."],
  ["02", "Make with intent", "We design and build around the real brief. No unnecessary layers, no mystery."],
  ["03", "Leave it better", "We test, refine, and hand over work you can confidently move forward with."],
];

export default function Home() {
  return (
    <main id="top">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Eizora Labs home"><span className="mark">E</span><span>EIZORA<span className="wordmark-light"> LABS</span></span></a>
        <nav aria-label="Main navigation"><a href="/services">Services</a><a href="#work">Selected work</a><a href="#studio">Studio</a></nav>
        <a className="masthead-cta" href="/start-project">Start a project <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-kicker"><span className="kicker-line" /> INDEPENDENT DIGITAL COMMERCE STUDIO <span className="hero-location">KARACHI · WORKING EVERYWHERE</span></div>
        <div className="hero-title-wrap">
          <h1>Make digital<br /><em>mean</em> business<span className="hero-period">.</span></h1>
          <div className="hero-aside"><span className="aside-index">[ E / 001 ]</span><p>We turn good ideas into useful digital experiences — built with clarity, craft, and a healthy respect for the details.</p><a href="#services">Explore our capabilities <span>↓</span></a></div>
        </div>
        <div className="hero-bottom">
          <span>STRATEGY / DESIGN / DEVELOPMENT</span>
          <span className="hero-stamp">BUILT TO BE USEFUL<span>®</span></span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="art-ring ring-a" /><div className="art-ring ring-b" /><div className="art-cross">+</div><div className="art-caption">FORM FOLLOWS<br />FUNCTION.</div><div className="art-number">001—026</div></div>
      </section>

      <section className="intro-band">
        <div className="section-index">01 / THE POINT OF VIEW</div>
        <div className="intro-copy"><p>Good digital work is not decoration. It should make things <em>clearer, easier, faster</em> — for the people using it and the people running the business.</p><span>That’s the standard we work towards.</span></div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-topline"><span>02 / WHAT WE DO</span><a href="/services">EXPLORE SERVICES ↗</a></div>
        <div className="section-heading-row"><h2>Build the<br /><em>right thing.</em></h2><p>From the first click to the final checkout, we make digital touchpoints work harder for the brands behind them.</p></div>
        <div className="service-list">{services.map(([n, title, desc]) => <a className="service-row" href="/services" key={n}><span className="row-number">{n}</span><h3>{title}</h3><p>{desc}</p><span className="row-arrow">↗</span></a>)}</div>
      </section>

      <section className="work-section" id="work">
        <div className="section-topline"><span>03 / SELECTED WORK</span><span>BUILT, NOT JUST IMAGINED</span></div>
        <div className="work-heading"><h2>Work with<br /><em>a point of view.</em></h2><p>A mix of live builds and visual explorations. Every project is clearly identified — because good work deserves honest context.</p></div>
        <div className="work-grid">
          {Object.entries(caseStudies).map(([slug, project]) => (
            <a className="work-card" href={`/work/${slug}`} key={slug}>
              <div className="work-card-art"><span>{project.number}</span><strong>{project.title}</strong><i>{project.category}</i><b>↗</b></div>
              <div className="work-card-info"><div><span className="project-type">{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p></div><span className="work-card-status">{project.status}</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="approach-section">
        <div className="section-topline"><span>04 / THE METHOD</span><span>NO SMOKE. NO MIRRORS.</span></div>
        <div className="approach-layout"><h2>Clear heads.<br /><em>Good work.</em></h2><div className="steps">{steps.map(([n, title, desc]) => <article className="step" key={n}><span>{n} /</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}</div></div>
      </section>

      <section className="studio-section" id="studio">
        <div className="studio-graphic"><span className="studio-e">E</span><span className="studio-graphic-note">INDEPENDENT BY NATURE<br />INTENTIONAL BY DESIGN</span></div>
        <div className="studio-copy"><div className="section-index">05 / THE STUDIO</div><h2>Small studio.<br /><em>Wide lens.</em></h2><p>Eizora Labs is an independent digital studio founded by Murtaza Siddiqui. We bring design thinking and hands-on development together to help growing businesses build a stronger presence online.</p><p>We believe in useful ideas, honest collaboration, and making every detail earn its place.</p><div className="founder-line"><span>MURTAZA SIDDIQUI</span><span>FOUNDER / BUILDER</span></div></div>
      </section>

      <section className="contact-section" id="contact"><div className="section-topline"><span>06 / YOUR NEXT MOVE</span><span>GOOD THINGS START WITH A CONVERSATION</span></div><div className="contact-main"><h2>Have a good<br />one in <em>mind?</em></h2><div className="contact-right"><p>Tell us what you’re building, fixing, or figuring out. We’ll bring curiosity and a practical point of view.</p><a className="contact-link" href="/start-project">Tell us about your project <span>↗</span></a><a className="contact-whatsapp" href="https://wa.me/923099864045" target="_blank" rel="noreferrer">Or message us on WhatsApp ↗</a></div></div></section>

      <footer className="footer"><a className="footer-brand" href="#top">EIZORA LABS<span>®</span></a><span>INDEPENDENT DIGITAL COMMERCE STUDIO</span><div><a href="/services">SERVICES ↗</a><a href="/start-project">START A PROJECT ↗</a></div><small>© {new Date().getFullYear()} EIZORA LABS. MADE WITH INTENTION.</small></footer>
    </main>
  );
}
