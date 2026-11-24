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
        <nav aria-label="Main navigation"><a href="#services">Capabilities</a><a href="#work">Selected directions</a><a href="#studio">Studio</a></nav>
        <a className="masthead-cta" href="#contact">Start a conversation <span>↗</span></a>
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
        <div className="section-topline"><span>02 / WHAT WE DO</span><span>CAPABILITIES — 04</span></div>
        <div className="section-heading-row"><h2>Build the<br /><em>right thing.</em></h2><p>From the first click to the final checkout, we make digital touchpoints work harder for the brands behind them.</p></div>
        <div className="service-list">{services.map(([n, title, desc]) => <article className="service-row" key={n}><span className="row-number">{n}</span><h3>{title}</h3><p>{desc}</p><span className="row-arrow">↗</span></article>)}</div>
      </section>

      <section className="work-section" id="work">
        <div className="section-topline"><span>03 / SELECTED WORK</span><span>BUILT, NOT JUST IMAGINED</span></div>
        <div className="work-heading"><h2>Work with<br /><em>a point of view.</em></h2><p>A mix of live builds and visual explorations. Every project is clearly identified — because good work deserves honest context.</p></div>
        <article className="featured-project">
          <a className="portfolio-preview" href="https://murtazasiddiqui.vercel.app/" target="_blank" rel="noreferrer" aria-label="Visit Murtaza Siddiqui portfolio">
            <div className="preview-browser"><span /><span /><span /><i>murtazasiddiqui.vercel.app</i></div>
            <div className="preview-screen"><span className="preview-kicker">INDEPENDENT WEB DEVELOPER</span><strong>Digital experiences<br />made <em>to move</em><br />business forward.</strong><span className="preview-footer">MURTAZA SIDDIQUI — SELECTED WORK ↗</span></div>
            <span className="preview-open">VIEW LIVE PROJECT ↗</span>
          </a>
          <div className="featured-project-info">
            <div><span className="project-type">IN-HOUSE PROJECT / 01</span><h3>Murtaza Siddiqui — Personal Portfolio</h3><p>A personal portfolio designed and developed to present web projects, case studies, services and a growing body of work. Includes a project archive and a private project-management workflow.</p><div className="project-tags"><span>Next.js</span><span>JavaScript</span><span>Responsive design</span><span>Content management</span></div></div>
            <a className="project-visit" href="https://murtazasiddiqui.vercel.app/" target="_blank" rel="noreferrer">EXPLORE PROJECT <span>↗</span></a>
          </div>
        </article>
        <div className="concept-grid">
          <article className="concept concept-one"><div className="concept-top"><span>CONCEPT STUDY / 02</span><span>COMMERCE</span></div><div className="concept-visual"><div className="concept-circle" /><span className="concept-serif">Objects<br />of <i>everyday</i><br />wonder.</span><span className="concept-mini">CURATED GOODS · EST. 2026</span></div><div className="concept-caption"><h3>Commerce, with character.</h3><span>STOREFRONT DIRECTION</span></div></article>
          <article className="concept concept-two"><div className="concept-top"><span>CONCEPT STUDY / 03</span><span>IDENTITY</span></div><div className="concept-visual"><span className="daily-word">THE<br /><i>DAILY</i><br />EDIT<span className="daily-star">✳</span></span><div className="daily-bar">A GOOD THING, EVERY DAY. <span>↗</span></div></div><div className="concept-caption"><h3>A digital home with a voice.</h3><span>BRAND WEBSITE DIRECTION</span></div></article>
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

      <section className="contact-section" id="contact"><div className="section-topline"><span>06 / YOUR NEXT MOVE</span><span>GOOD THINGS START WITH A CONVERSATION</span></div><div className="contact-main"><h2>Have a good<br />one in <em>mind?</em></h2><div className="contact-right"><p>Tell us what you’re building, fixing, or figuring out. We’ll bring curiosity and a practical point of view.</p><a className="contact-link" href="https://github.com/MurtazaSiddiqui2003" target="_blank" rel="noreferrer">Connect with the founder <span>↗</span></a><span className="contact-note">EMAIL CONTACT COMING SOON</span></div></div></section>

      <footer className="footer"><a className="footer-brand" href="#top">EIZORA LABS<span>®</span></a><span>INDEPENDENT DIGITAL COMMERCE STUDIO</span><div><a href="#top">BACK TO TOP ↑</a><a href="https://github.com/MurtazaSiddiqui2003" target="_blank" rel="noreferrer">GITHUB ↗</a></div><small>© {new Date().getFullYear()} EIZORA LABS. MADE WITH INTENTION.</small></footer>
    </main>
  );
}
