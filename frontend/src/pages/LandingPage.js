import { useEffect, useRef, useState } from "react";
import { LANDING } from "@/constants/testIds";

/**
 * Zorka Holding — institutional real estate landing page
 * Colors: navy #0F2742, charcoal #30343B, gold #B38B45, white
 * Font: Inter
 */

const ASSETS = {
  video: "/media/hero.mp4",
  videoMobile: "/media/hero-720.mp4",
  poster: "/media/hero-poster.jpg",
  logo:
    "https://customer-assets.emergentagent.com/job_c5ae29dc-299d-4495-889b-3765e728b236/artifacts/lpxgupq0_WhatsApp%20Image%202026-03-09%20at%205.04.18%20PM.jpg",
  founder:
    "https://customer-assets.emergentagent.com/job_c5ae29dc-299d-4495-889b-3765e728b236/artifacts/dd6erigy_ChatGPT%20Image%20Jul%2013%2C%202026%2C%2012_28_50%20PM.png",
};

const NAV_ITEMS = [
  { id: "criteria", label: "Investment Criteria", testId: LANDING.navCriteria },
  { id: "about", label: "About", testId: LANDING.navAbout },
  { id: "mission", label: "Our Mission", testId: LANDING.navMission },
  { id: "portfolio", label: "Portfolio", testId: LANDING.navPortfolio },
  { id: "contact", label: "Contact", testId: LANDING.navContact },
];

const CRITERIA = [
  { id: "industrial", label: "Industrial", group: "Asset Type" },
  { id: "retail", label: "Retail", group: "Asset Type" },
  { id: "mixed", label: "Mixed Commercial Assets", group: "Asset Type" },
  { id: "size", label: "5,000 – 50,000 SF", group: "Size Range" },
  { id: "multitenant", label: "Multi-tenant", group: "Structure" },
  { id: "value-add", label: "Value-Add", group: "Strategy" },
  { id: "vacancy", label: "20%+ Vacancy", group: "Opportunity" },
  { id: "maintenance", label: "Deferred Maintenance", group: "Opportunity" },
  { id: "management", label: "Management Challenges", group: "Opportunity" },
  { id: "redevelopment", label: "Redevelopment Potential", group: "Opportunity" },
  { id: "geography", label: "Greater Philadelphia — within one hour", group: "Geography" },
];

const PORTFOLIO = [
  {
    id: "project-01",
    number: "01",
    title: "Project Placeholder One",
    subtitle: "Industrial · Greater Philadelphia",
  },
  {
    id: "project-02",
    number: "02",
    title: "Project Placeholder Two",
    subtitle: "Retail · Greater Philadelphia",
  },
];

/* -------------------------- Reveal-on-scroll hook -------------------------- */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* --------------------------------- Navbar --------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const smoothTo = (id) => (e) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid={LANDING.nav}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a
            href="#top"
            onClick={smoothTo("top")}
            data-testid={LANDING.navLogo}
            className="flex items-center gap-3 group"
            aria-label="Zorka Holding"
          >
            {scrolled ? (
              <div className="h-9 md:h-10 flex items-center overflow-hidden">
                <img
                  src={ASSETS.logo}
                  alt="Zorka Holding"
                  className="h-full w-auto object-contain"
                  draggable={false}
                />
              </div>
            ) : (
              <div className="flex items-baseline gap-2 select-none">
                <span
                  className="text-white text-xl md:text-2xl font-light tracking-[0.22em]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  ZORKA
                </span>
                <span className="h-4 w-px bg-white/40" />
                <span className="text-white/70 text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase">
                  Holding
                </span>
              </div>
            )}
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={smoothTo(item.id)}
                data-testid={item.testId}
                className={`nav-link text-[13px] tracking-[0.14em] uppercase font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[#0F2742] hover:text-[#0F2742]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            data-testid={LANDING.navMobileToggle}
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 items-center transition-colors ${
              scrolled ? "text-[#0F2742]" : "text-white"
            }`}
          >
            <span
              className={`block h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-current transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          data-testid={LANDING.navMobileMenu}
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
            mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 py-6 bg-white border-t border-[#E5E7EB]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={smoothTo(item.id)}
                data-testid={`${item.testId}-mobile`}
                className="py-3 text-[13px] tracking-[0.14em] uppercase font-medium text-[#0F2742] hover:text-[#B38B45] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section
      id="top"
      data-testid={LANDING.hero}
      className="relative min-h-screen w-full overflow-hidden grain bg-[#0F2742]"
    >
      {/* Fallback gradient behind video (shown while video loads) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, #1a3a5f 0%, #0F2742 55%, #081729 100%)",
        }}
      />
      <video
        data-testid={LANDING.heroVideo}
        className="hero-video absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={ASSETS.poster}
      >
        <source src={ASSETS.videoMobile} type="video/mp4" media="(max-width: 768px)" />
        <source src={ASSETS.video} type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0F2742]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 md:px-12 text-center">
        <div className="max-w-5xl">
          <p className="eyebrow text-white/80 mb-8 md:mb-10">
            Zorka Holding · Philadelphia
          </p>
          <h1
            data-testid={LANDING.heroHeadline}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Creating Value Through
            <br />
            <span className="italic text-[#E4C68A] font-extralight">
              Commercial Real Estate
            </span>
          </h1>

          <div className="mx-auto mt-10 mb-8 h-px w-16 bg-[#B38B45]" />

          <p
            data-testid={LANDING.heroSubheadline}
            className="mx-auto max-w-3xl text-white/85 text-base md:text-lg font-light leading-relaxed"
          >
            Philadelphia-based commercial real estate investment and development
            company specializing in value-add industrial, retail, and multifamily
            opportunities.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-testid={LANDING.heroScrollIndicator}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
          Scroll
        </span>
        <div className="h-12 w-px bg-white/20 relative overflow-hidden">
          <div className="scroll-line absolute inset-0 bg-[#B38B45]" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Investment Criteria ---------------------------- */
function InvestmentCriteria() {
  const ref = useReveal();
  return (
    <section
      id="criteria"
      data-testid={LANDING.criteria}
      className="relative bg-white py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="fade-in-section grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <p data-testid={LANDING.criteriaEyebrow} className="eyebrow mb-6">
              01 · Investment Criteria
            </p>
            <h2
              data-testid={LANDING.criteriaHeading}
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#0F2742] leading-[1.1]"
            >
              A disciplined focus on
              <br />
              <span className="italic">value-add opportunities.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-base md:text-lg text-[#30343B]/80 font-light leading-relaxed max-w-xl">
              We pursue overlooked commercial assets across the Greater
              Philadelphia region — properties where operational, physical, and
              structural repositioning can generate durable, long-term returns
              for our partners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#E5E7EB]">
          {CRITERIA.map((c, i) => (
            <CriteriaCard key={c.id} item={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CriteriaCard({ item, index }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      data-testid={LANDING.criteriaCard(item.id)}
      className="criteria-card fade-in-section bg-white border border-transparent p-8 md:p-10 min-h-[180px] flex flex-col justify-between overflow-hidden cursor-default"
      style={{ transitionDelay: `${Math.min(index * 40, 240)}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#B38B45] font-medium">
          {item.group}
        </span>
        <span className="text-xs font-mono text-[#30343B]/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-10 text-lg md:text-xl font-normal text-[#0F2742] leading-snug tracking-tight">
        {item.label}
      </h3>
    </div>
  );
}

/* ---------------------------------- About --------------------------------- */
function About() {
  const ref = useReveal();
  return (
    <section
      id="about"
      data-testid={LANDING.about}
      className="relative bg-[#F9FAFB] py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className="fade-in-section grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-[#B38B45]/60 hidden md:block" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-[#B38B45]/60 hidden md:block" />
              <div
                data-testid={LANDING.aboutFounderPhoto}
                className="relative overflow-hidden bg-[#E5E7EB] aspect-[3/4]"
              >
                <img
                  src={ASSETS.founder}
                  alt="Paul Skapets — Founder of Zorka Holding"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="mt-6">
                <p className="text-sm font-medium text-[#0F2742] tracking-tight">
                  Paul Skapets
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#30343B]/60 mt-1">
                  Founder
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <p data-testid={LANDING.aboutEyebrow} className="eyebrow mb-6">
              02 · About
            </p>
            <h2
              data-testid={LANDING.aboutHeading}
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#0F2742] leading-[1.1] mb-10 md:mb-12"
            >
              A boutique investment platform
              <br />
              <span className="italic">rooted in Philadelphia.</span>
            </h2>

            <div
              data-testid={LANDING.aboutBody}
              className="space-y-6 text-base md:text-lg text-[#30343B]/85 font-light leading-relaxed"
            >
              <p>
                Zorka Holding is a Philadelphia-based commercial real estate
                investment and development company founded by{" "}
                <span className="text-[#0F2742] font-normal">Paul Skapets</span>.
                The firm acquires industrial and retail properties and develops
                multifamily communities across the Greater Philadelphia region.
              </p>
              <p>
                We have built strong, long-standing partnerships with investors,
                lenders, brokers, contractors, and operating partners across
                multiple states — enabling us to source, capitalize, and execute
                with speed and conviction.
              </p>
              <p>
                Extensive construction and manufacturing experience is at the
                core of our approach. It gives us the ability to evaluate
                properties accurately, execute renovations efficiently, and
                deliver institutional-quality outcomes on complex, value-add
                assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Mission -------------------------------- */
function Mission() {
  const ref = useReveal();
  return (
    <section
      id="mission"
      data-testid={LANDING.mission}
      className="relative bg-[#0F2742] py-28 md:py-36 lg:py-44 overflow-hidden"
    >
      {/* Decorative subtle gold vertical line */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className="fade-in-section grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
        >
          <div className="lg:col-span-5">
            <p className="eyebrow text-[#B38B45] mb-6">03 · Our Mission</p>
            <h2
              data-testid={LANDING.missionHeading}
              className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-[1.05]"
            >
              Value
              <br />
              <span className="italic text-[#E4C68A]">First.</span>
            </h2>
            <div className="mt-10 h-px w-20 bg-[#B38B45]" />
          </div>

          <div
            data-testid={LANDING.missionBody}
            className="lg:col-span-7 lg:pt-4 space-y-6 text-base md:text-lg text-white/80 font-light leading-relaxed"
          >
            <p>
              We help owners solve vacancy, deferred maintenance, management
              friction, and operational challenges — transforming underperforming
              properties into stabilized, income-producing assets.
            </p>
            <p>
              Our work is built on a simple principle: every transaction should
              create measurable value for everyone involved. We pursue
              win-win outcomes for{" "}
              <span className="text-white">sellers</span>,{" "}
              <span className="text-white">tenants</span>,{" "}
              <span className="text-white">investors</span>,{" "}
              <span className="text-white">lenders</span>,{" "}
              <span className="text-white">brokers</span>, and the{" "}
              <span className="text-white">local communities</span> we invest
              in.
            </p>
            <p className="text-[#B38B45] italic font-light">
              Long-term thinking. Disciplined execution. Aligned outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Portfolio ------------------------------- */
function Portfolio() {
  const ref = useReveal();
  return (
    <section
      id="portfolio"
      data-testid={LANDING.portfolio}
      className="relative bg-white py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className="fade-in-section flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24"
        >
          <div>
            <p data-testid={LANDING.portfolioEyebrow} className="eyebrow mb-6">
              04 · Portfolio
            </p>
            <h2
              data-testid={LANDING.portfolioHeading}
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#0F2742] leading-[1.1]"
            >
              Selected projects.
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base font-light text-[#30343B]/70 leading-relaxed">
            A curated look at recent investments. Additional projects will be
            published as they close and stabilize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {PORTFOLIO.map((p, i) => (
            <PortfolioItem key={p.id} item={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioItem({ item, index }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      data-testid={LANDING.portfolioItem(item.id)}
      className="portfolio-item fade-in-section group"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#E5E7EB] via-[#D8DCE0] to-[#C7CCD1]">
        <div className="portfolio-placeholder absolute inset-0 w-full h-full flex items-center justify-center">
          {/* Subtle abstract architectural mark */}
          <svg
            viewBox="0 0 200 150"
            className="w-2/3 h-2/3 opacity-30"
            fill="none"
            stroke="#30343B"
            strokeWidth="0.6"
          >
            <rect x="30" y="60" width="140" height="70" />
            <rect x="50" y="40" width="40" height="90" />
            <rect x="110" y="30" width="50" height="100" />
            <line x1="30" y1="130" x2="170" y2="130" strokeWidth="1" />
            <line x1="20" y1="130" x2="180" y2="130" strokeWidth="0.4" />
          </svg>
        </div>
        <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] text-[#30343B]/70 font-medium">
          {item.number}
        </div>
        <div className="absolute inset-0 border border-[#0F2742]/5" />
      </div>
      <div className="mt-6 md:mt-8 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-light text-[#0F2742] tracking-tight">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-[#30343B]/70 font-light tracking-wide">
            {item.subtitle}
          </p>
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#B38B45] font-medium whitespace-nowrap">
          Coming Soon
        </span>
      </div>
    </article>
  );
}

/* --------------------------------- Contact -------------------------------- */
function Contact() {
  const ref = useReveal();
  return (
    <section
      id="contact"
      data-testid={LANDING.contact}
      className="relative bg-[#F9FAFB] py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div ref={ref} className="fade-in-section text-center">
          <p data-testid={LANDING.contactEyebrow} className="eyebrow mb-6">
            05 · Contact
          </p>
          <h2
            data-testid={LANDING.contactHeading}
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#0F2742] leading-[1.1] mb-16 md:mb-20"
          >
            Let&apos;s discuss an opportunity.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <ContactCard
              testId={LANDING.contactPhone}
              label="Phone"
              value="+1 (917) 293-7621"
              href="tel:+19172937621"
            />
            <ContactCard
              testId={LANDING.contactEmail}
              label="Email"
              value="acquisitions@zorkaholding.com"
              href="mailto:acquisitions@zorkaholding.com"
            />
            <ContactCard
              testId={LANDING.contactLocation}
              label="Location"
              value="Philadelphia, PA"
            />
          </div>

          <div className="mt-20 md:mt-24 mx-auto h-px w-24 bg-[#B38B45]/60" />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href, testId }) {
  const inner = (
    <>
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#B38B45] font-medium mb-4">
        {label}
      </p>
      <p className="text-lg md:text-xl font-light text-[#0F2742] tracking-tight break-words">
        {value}
      </p>
    </>
  );
  return (
    <div data-testid={testId} className="text-center group">
      {href ? (
        <a
          href={href}
          className="block transition-colors duration-300 hover:text-[#B38B45]"
        >
          {inner}
        </a>
      ) : (
        <div>{inner}</div>
      )}
    </div>
  );
}

/* ---------------------------------- Footer -------------------------------- */
function Footer() {
  return (
    <footer
      data-testid={LANDING.footer}
      className="relative bg-[#0F2742] text-white/70"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div
            data-testid={LANDING.footerLogo}
            className="flex items-baseline gap-2 select-none"
          >
            <span
              className="text-white text-xl md:text-2xl font-light tracking-[0.22em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              ZORKA
            </span>
            <span className="h-4 w-px bg-white/30" />
            <span className="text-white/70 text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase">
              Holding
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/60">
            Commercial Real Estate Investments
          </p>
          <p
            data-testid={LANDING.footerCopyright}
            className="text-xs text-white/50 font-light tracking-wide"
          >
            © {new Date().getFullYear()} Zorka Holding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- Page ---------------------------------- */
export default function LandingPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-white text-[#30343B] antialiased" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <InvestmentCriteria />
        <About />
        <Mission />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
