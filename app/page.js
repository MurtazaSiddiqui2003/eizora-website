const services = [
  {
    number: "01",
    title: "Shopify Development",
    description: "Thoughtful storefronts built to make shopping clearer, easier, and more effective.",
  },
  {
    number: "02",
    title: "Custom Websites",
    description: "Fast, responsive websites that give growing businesses a confident digital home.",
  },
  {
    number: "03",
    title: "E-commerce Improvements",
    description: "Practical upgrades to product pages, navigation, mobile experience, and conversion flow.",
  },
  {
    number: "04",
    title: "Landing Pages",
    description: "Focused pages that communicate your offer and help turn attention into action.",
  },
];

const process = [
  {
    number: "01 / Understand",
    title: "Start with the why",
    description: "We learn about your business, customers, goals, and the problem the project needs to solve.",
  },
  {
    number: "02 / Build",
    title: "Make it purposeful",
    description: "We shape the experience, develop the details, and keep you involved as the work takes form.",
  },
  {
    number: "03 / Improve",
    title: "Launch with clarity",
    description: "We test the important details, hand everything over clearly, and identify what to improve next.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Eizora Labs home">
            <span className="brand-mark">e.</span>
            <span>EIZORA <small>LABS</small></span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#work">Selected work</a>
            <a href="#approach">Our approach</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Digital commerce & technology studio</span>
            <h1>We build digital experiences that <em>move business forward.</em></h1>
            <p className="hero-copy">
              Eizora Labs helps growing brands create better websites and e-commerce
              experiences — combining thoughtful design, practical technology, and a
              focus on what matters to customers.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#contact">Start a project <span>↗</span></a>
              <a className="button-secondary" href="#services">Explore what we do <span>↓</span></a>
            </div>
            <div className="hero-note"><span className="status-dot" /> Independent studio. Built around your next step.</div>
          </div>
          <div className="visual-stage" aria-label="Abstract Eizora Labs brand composition">
            <div className="float-tag one"><b>Digital, with intention.</b>Strategy meets craft</div>
            <div className="visual-card">
              <div className="visual-card-top"><span>EL / 001</span><span>Studio notes</span></div>
              <div className="visual-monogram">e.</div>
              <div className="visual-card-bottom">
                <strong>Make it matter.</strong>
                <span>Design / Build / Grow</span>
              </div>
            </div>
            <div className="float-tag two"><b>Thoughtful by design</b>Useful by default</div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">What we do</span>
              <h2>Digital foundations for ambitious businesses.</h2>
            </div>
            <p>From a sharper storefront to a brand-new website, we focus on useful work that helps your business take its next step.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2>Good work starts with a clear point of view.</h2>
            </div>
            <p>A glimpse into the kinds of digital experiences we love shaping. These are illustrative directions, not client case studies.</p>
          </div>
          <div className="work-grid">
            <article className="work-card">
              <div className="work-art">form & function</div>
              <div className="work-meta">
                <div><h3>Commerce, considered.</h3><p>Illustrative storefront direction</p></div>
                <span className="work-label">Concept  /  01</span>
              </div>
            </article>
            <article className="work-card">
              <div className="work-art">the daily edit</div>
              <div className="work-meta">
                <div><h3>A more focused digital home.</h3><p>Illustrative brand website direction</p></div>
                <span className="work-label">Concept  /  02</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">How we work</span>
              <h2>Small steps. Clear thinking. Work that works.</h2>
            </div>
            <p>No unnecessary complexity. Just a collaborative process that keeps the goal in sight from the first conversation to launch.</p>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <article className="process-item" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-band" id="about">
        <div className="container about-grid">
          <div className="about-mark">e.</div>
          <div>
            <span className="eyebrow">A little about the studio</span>
            <h2>Independent thinking. Hands-on building.</h2>
            <p>
              Eizora Labs is an independent digital studio founded by Murtaza Siddiqui.
              We bring design thinking and practical development together to help
              businesses make their online experiences more useful, more considered,
              and easier to grow.
            </p>
            <div className="about-signoff">Murtaza Siddiqui <span>— Founder</span></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <div>
            <span className="eyebrow">Have something in mind?</span>
            <h2>Let&apos;s make your next digital move a good one.</h2>
          </div>
          <div>
            <p>Tell us a little about your business and what you want to improve. We&apos;ll take it from there.</p>
            <div className="contact-actions">
              <a className="button-primary" href="mailto:">Start a conversation <span>↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Eizora Labs. Built with intention.</span>
          <div className="footer-links">
            <a href="#top">Back to top ↑</a>
            <a href="https://github.com/MurtazaSiddiqui2003" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
