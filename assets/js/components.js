/* WeWillDev — shared header & footer
   Injected into #site-header / #site-footer on every page.
   Pass the active nav key via <body data-nav="services"> etc. */

function renderHeader() {
  const active = document.body.getAttribute('data-nav') || '';
  const isActive = (key) => (active === key ? 'is-active' : '');

  const navItems = [
    ['services', '/services/', 'Services'],
    ['work', '/work/', 'Work'],
    ['process', '/process/', 'Process'],
    ['about', '/about/', 'About'],
  ];

  const navHtml = navItems
    .map(([key, href, label]) => `<li><a href="${href}" class="${isActive(key)}">${label}</a></li>`)
    .join('');

  const header = document.getElementById('site-header');
  if (!header) return;

  header.innerHTML = `
    <div class="container">
      <a href="/" class="logo">wewilldev<span>.</span></a>
      <nav class="main-nav" aria-label="Primary">
        <ul>${navHtml}</ul>
        <a href="/contact/" class="btn btn-primary">Start a project ↗</a>
      </nav>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-nav" id="mobileNav">
      <ul>${navHtml}</ul>
      <a href="/contact/" class="btn btn-primary">Start a project ↗</a>
    </div>
  `;

  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('is-open');
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  mobileNav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="logo">wewilldev<span>.</span></div>
          <p>You bring the idea. We build the technology behind it — websites, apps, software, AI and the systems that keep them running.</p>
        </div>
        <div class="footer-col">
          <h4>Studio</h4>
          <ul>
            <li><a href="/about/">About</a></li>
            <li><a href="/work/">Work</a></li>
            <li><a href="/process/">Process</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="/services/web-development/">Web &amp; Software</a></li>
            <li><a href="/services/mobile-app-development/">Mobile &amp; Apps</a></li>
            <li><a href="/services/ai-automation/">AI &amp; Automation</a></li>
            <li><a href="/services/seo/">SEO &amp; Growth</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:wewilldev.connect@gmail.com">wewilldev.connect@gmail.com</a></li>
            <li>Based in Jammu</li>
            <li>Serving businesses across India</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${year} WeWillDev. All rights reserved.</span>
        <span class="mono-tag">STATUS: ACCEPTING NEW PROJECTS</span>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});
