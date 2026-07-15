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
  { id: "industrial", title: "Industrial", roman: "I" },
  { id: "retail", title: "Retail", roman: "II" },
  { id: "flex", title: "Flex Buildings", roman: "III" },
];

const CRITERIA_ATTRIBUTES = [
  "Multi-Tenant",
  "Value-Add",
  "20%+ Vacancy",
  "5,000 – 50,000 Square Feet",
];

const PARTNERS = [
  { id: "owners", label: "Property Owners" },
  { id: "brokers", label: "Brokers" },
  { id: "banks", label: "Banks" },
  { id: "investors", label: "Investors" },
  { id: "developers", label: "Developers" },
  { id: "tenants", label: "Tenants" },
];

const WHY_ZORKA = [
  {
    id: "construction",
    title: "Construction Expertise",
    body:
      "Our extensive construction and manufacturing background allows us to recognize value beyond financial statements and execute projects efficiently.",
  },
  {
    id: "execution",
    title: "Fast Execution",
    body:
      "Disciplined underwriting, efficient decision-making, and reliable execution throughout the acquisition process.",
  },
  {
    id: "creative",
    title: "Creative Solutions",
    body:
      "Flexible acquisition structures tailored to the needs of sellers, brokers, lenders, and investment partners.",
  },
  {
    id: "relationships",
    title: "Long-Term Relationships",
    body:
      "We believe lasting partnerships are built on integrity, transparency, responsiveness, and consistently delivering value.",
  },
];

const PORTFOLIO = [
  {
    id: "project-01",
    number: "01",
    title: "Multi-Family Apartments",
    subtitle: "North Philadelphia · Developed 2025",
    image: "/media/portfolio-1.webp",
    orientation: "landscape",
  },
  {
    id: "project-02",
    number: "02",
    title: "Multi-Family",
    subtitle: "North Philadelphia · Developed 2026",
    image: "/media/portfolio-2.webp",
    orientation: "portrait",
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
              <div className="flex items-baseline gap-2 select-none">
                <span
                  className="text-[#0F2742] text-xl md:text-2xl font-light tracking-[0.22em]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  ZORKA
                </span>
                <span className="h-4 w-px bg-[#0F2742]/30" />
                <span className="text-[#30343B]/70 text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase">
                  Holding
                </span>
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
      {/* Dark overlay — reduced ~18% for skyline visibility */}
      <div className="absolute inset-0 bg-[#0F2742]/38" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/45" />

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
            Commercial Real Estate Investments
            <br />
            <span className="italic text-[#E4C68A] font-extralight">
              Built on Value Creation
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
              We focus on three asset classes across the Greater Philadelphia
              region — pursuing multi-tenant properties where operational,
              physical, and structural repositioning can generate durable,
              long-term returns for our partners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
      className="criteria-card fade-in-section bg-white border border-[#E5E7EB] p-8 md:p-10 lg:p-12 flex flex-col cursor-default"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-10 md:mb-12">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#B38B45] font-medium">
          Asset Type
        </span>
        <span className="text-xs font-mono text-[#30343B]/40 tracking-widest">
          {item.roman}
        </span>
      </div>
      <h3 className="text-2xl md:text-3xl font-light text-[#0F2742] leading-tight tracking-tight mb-8 md:mb-10">
        {item.title}
      </h3>
      <div className="h-px w-10 bg-[#B38B45] mb-8" />
      <ul className="space-y-4">
        {CRITERIA_ATTRIBUTES.map((attr) => (
          <li
            key={attr}
            className="flex items-baseline gap-3 text-[#30343B]/85 font-light"
          >
            <span className="text-[#B38B45] text-xs mt-1">—</span>
            <span className="text-sm md:text-base tracking-tight">{attr}</span>
          </li>
        ))}
      </ul>
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

/* ---------------------------- Who We Work With ---------------------------- */
function WhoWeWorkWith() {
  const ref = useReveal();
  return (
    <section
      id="partners"
      data-testid={LANDING.partners}
      className="relative bg-white py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className="fade-in-section grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20"
        >
          <div className="lg:col-span-5">
            <p data-testid={LANDING.partnersEyebrow} className="eyebrow mb-6">
              04 · Who We Work With
            </p>
            <h2
              data-testid={LANDING.partnersHeading}
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#0F2742] leading-[1.1]"
            >
              Aligned across the
              <br />
              <span className="italic">entire ecosystem.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p
              data-testid={LANDING.partnersBody}
              className="text-base md:text-lg text-[#30343B]/80 font-light leading-relaxed max-w-xl"
            >
              Zorka Holding works closely with every participant in the
              commercial real estate ecosystem — collaborating with owners,
              brokers, lenders, investors, developers, and tenants to create
              long-term value and successful outcomes for all sides.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
          {PARTNERS.map((p, i) => (
            <PartnerCard key={p.id} item={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ item, index }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      data-testid={LANDING.partnerCard(item.id)}
      className="criteria-card fade-in-section bg-white p-6 md:p-8 min-h-[140px] flex flex-col justify-between cursor-default"
      style={{ transitionDelay: `${Math.min(index * 60, 300)}ms` }}
    >
      <span className="text-xs font-mono text-[#30343B]/40 tracking-widest">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-6 text-base md:text-lg font-normal text-[#0F2742] leading-snug tracking-tight">
        {item.label}
      </h3>
    </div>
  );
}

/* --------------------------- Why Zorka Holding ---------------------------- */
function WhyZorka() {
  const ref = useReveal();
  return (
    <section
      id="why"
      data-testid={LANDING.why}
      className="relative bg-[#F9FAFB] py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={ref}
          className="fade-in-section grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20"
        >
          <div className="lg:col-span-6">
            <p data-testid={LANDING.whyEyebrow} className="eyebrow mb-6">
              05 · Why Zorka Holding
            </p>
            <h2
              data-testid={LANDING.whyHeading}
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#0F2742] leading-[1.1]"
            >
              A disciplined edge in
              <br />
              <span className="italic">complex opportunities.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {WHY_ZORKA.map((item, i) => (
            <WhyCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ item, index }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      data-testid={LANDING.whyCard(item.id)}
      className="criteria-card fade-in-section bg-white border border-[#E5E7EB] p-8 md:p-10 lg:p-12 flex flex-col cursor-default"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="text-xs font-mono text-[#30343B]/40 tracking-widest">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-8 md:mt-10 text-xl md:text-2xl font-light text-[#0F2742] leading-tight tracking-tight">
        {item.title}
      </h3>
      <div className="h-px w-10 bg-[#B38B45] my-6 md:my-8" />
      <p className="text-sm md:text-base text-[#30343B]/85 font-light leading-relaxed">
        {item.body}
      </p>
    </div>
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
              06 · Portfolio
            </p>
            <h2
              data-testid={LANDING.portfolioHeading}
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#0F2742] leading-[1.1]"
            >
              Selected projects.
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base font-light text-[#30343B]/70 leading-relaxed">
            A curated look at recent multifamily developments in North
            Philadelphia. Additional projects will be added as acquisitions and
            developments are completed.
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
      <div className="relative overflow-hidden aspect-[4/3] bg-[#0F2742]">
        <img
          src={item.image}
          alt={`${item.title} — ${item.subtitle}`}
          loading="lazy"
          className="portfolio-placeholder absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
        />
        {/* Subtle dark bottom vignette for label readability */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] text-white/85 font-medium">
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
          Developed
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
            07 · Contact
          </p>
          <h2
            data-testid={LANDING.contactHeading}
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#0F2742] leading-[1.1] mb-16 md:mb-20"
          >
            Let&apos;s Discuss an Opportunity.
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
        <WhoWeWorkWith />
        <WhyZorka />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
