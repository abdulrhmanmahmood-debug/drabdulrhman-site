import { useEffect, useRef, useState } from "react";
import type { PointerEvent, FormEvent } from "react";
import { LanguageProvider, useLang } from "../i18n";
import { PSY_BRAND, PSY_COPY, PSY_NAV, T_PSY } from "./data/psychology";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SpotlightCard from "../components/SpotlightCard";

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */

function Navbar() {
  const { lang, isAr, toggle } = useLang();
  const t = (d: Parameters<typeof T_PSY>[0]) => T_PSY(d, lang);

  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 24);
        setProgress(max > 0 ? y / max : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`relative mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled ? "glass shadow-2xl shadow-black/40" : "border border-transparent"
        }`}
      >
        <a href="#top" className="group flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white to-gold text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-105">
            {PSY_BRAND.initials}
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-white">{T_PSY(PSY_BRAND.name, lang)}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {PSY_NAV.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-lg px-3.5 py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-px after:origin-center after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
            className="glass flex h-10 items-center gap-1.5 rounded-xl px-3 text-xs font-semibold text-white transition-colors hover:text-gold"
          >
            <Icon name="globe" className="h-4 w-4" />
            {isAr ? "EN" : "ع"}
          </button>

          <a href="#contact" className="btn-primary hidden rounded-xl px-4 py-2.5 text-sm font-semibold sm:inline-flex sm:items-center sm:gap-2">
            {isAr ? "احجز جلسة" : "Book a session"}
            <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? (isAr ? "إغلاق القائمة" : "Close menu") : isAr ? "فتح القائمة" : "Open menu"}
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-white transition-transform duration-300 active:scale-95 lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-white transition-all duration-500 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-5 rounded bg-white transition-all duration-500 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        <div aria-hidden="true" className="absolute inset-x-4 bottom-0 h-px overflow-hidden rounded-full bg-white/5">
          <div className="progress-bar h-full w-full bg-gradient-to-r from-gold via-ember to-gold" style={{ ["--progress" as string]: progress }} />
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-7xl overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[36rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="glass rounded-2xl p-3">
          <ul className="flex flex-col">
            {PSY_NAV.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {t(link.label)}
                  <Icon name="arrow" className="h-4 w-4 text-zinc-500 rtl:-scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="btn-primary mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold"
          >
            {isAr ? "احجز جلسة" : "Book a session"}
            <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Portrait with graceful fallback                                     */
/* ------------------------------------------------------------------ */

/**
 * Shows a tasteful monogram panel if the photo file is missing, so the page
 * never renders a broken image before the real portrait is added.
 */
function Portrait({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const { lang } = useLang();
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-[#09090b] ${className ?? ""}`}>
        <div className="text-center">
          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-ember text-2xl font-semibold text-ink">
            {PSY_BRAND.initials}
          </span>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold">{T_PSY(PSY_BRAND.name, lang)}</p>
          <p className="mt-1 text-[11px] text-zinc-500">{T_PSY(PSY_BRAND.title, lang)}</p>
        </div>
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} className={className} />;
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const { lang } = useLang();
  const c = PSY_COPY.hero;
  const t = (d: Parameters<typeof T_PSY>[0]) => T_PSY(d, lang);
  const frameRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: PointerEvent<HTMLElement>) => {
    const el = frameRef.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1400px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
  };

  const resetTilt = () => {
    if (frameRef.current) frameRef.current.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg)";
  };

  const AVATARS = ["ع", "ن", "ف", "ر"];

  return (
    <section id="top" onPointerMove={handleMove} onPointerLeave={resetTilt} className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="orb -left-32 top-10 h-[28rem] w-[28rem] bg-gradient-to-br from-gold/50 to-ember/40" />
        <div className="orb right-[-8rem] top-1/3 h-[32rem] w-[32rem] bg-gradient-to-tr from-ember/35 to-indigo-500/30" style={{ animationDelay: "-7s" }} />
        <div className="orb bottom-0 left-1/3 h-72 w-72 bg-white/10" style={{ animationDelay: "-12s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#09090b_75%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-6">
          <div className="rise" style={{ ["--d" as string]: "0ms" }}>
            <a href="#contact" className="glass group inline-flex items-center gap-3 rounded-full py-1.5 pl-3.5 pr-4 text-sm text-zinc-200 transition-colors hover:text-white">
              <span className="relative flex h-6 w-6 items-center justify-center">
                <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden="true" />
                <span className="relative h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
              </span>
              {t(c.badge)}
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </a>
          </div>

          {/* Opening statement — the identity of the page */}
          <h1 className="mt-7 max-w-2xl">
            <span className="sr-only">{T_PSY(c.manifestoNote, lang)}</span>
            {c.manifesto[lang].map((line, i) => (
              <span
                key={i}
                className="rise block font-serif text-[2.15rem] font-normal leading-[1.35] text-white sm:text-5xl sm:leading-[1.3] lg:text-6xl lg:leading-[1.25]"
                style={{ ["--d" as string]: `${120 + i * 110}ms` }}
              >
                {i === c.manifesto[lang].length - 1 ? (
                  <em className="text-gradient font-serif font-normal italic not-italic">{line}</em>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p className="rise mt-7 max-w-xl text-pretty text-base leading-loose text-zinc-400 sm:text-lg" style={{ ["--d" as string]: "380ms" }}>
            {t(c.subtitle)}
          </p>

          <div className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ ["--d" as string]: "500ms" }}>
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold sm:text-base">
              {t(c.ctaPrimary)}
              <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
            </a>
            <a href="#about" className="btn-ghost glass inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white hover:border-white/25 hover:bg-white/10 sm:text-base">
              {t(c.ctaSecondary)}
            </a>
          </div>

          <div className="rise mt-10 flex items-center gap-4" style={{ ["--d" as string]: "620ms" }}>
            <div className="flex -space-x-3 rtl:space-x-reverse" aria-hidden="true">
              {AVATARS.map((a) => (
                <span key={a} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#09090b] bg-gradient-to-br from-zinc-600 to-zinc-800 text-xs font-semibold text-white">
                  {a}
                </span>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-gold" aria-label={t(c.ratingLabel)}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-0.5 text-zinc-400">
                <span className="font-semibold text-white">4.9/5</span> {t(c.rating)}
              </p>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="rise relative mx-auto w-full max-w-md lg:max-w-none" style={{ ["--d" as string]: "300ms" }}>
            <div ref={frameRef} className="relative aspect-[4/5] w-full transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d]">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl shadow-black/60 ring-1 ring-white/10">
                <img
                  src="/psych/portrait.jpg"
                  alt={t(c.imgAlt)}
                  width={1000}
                  height={1250}
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-ember/10 mix-blend-soft-light" />
              </div>

              <div className="glass bob absolute -start-4 top-10 hidden rounded-2xl p-4 sm:block sm:-start-8" style={{ animationDelay: "0s" }}>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">{t(c.cardLabel)}</p>
                <p className="mt-1 text-sm font-semibold text-white">{t(c.cardValue)}</p>
              </div>

              <div className="glass bob absolute -end-3 bottom-24 flex items-center gap-3 rounded-2xl p-3.5 pe-5 sm:-end-6" style={{ animationDelay: "-3s" }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-ember text-ink">
                  <Icon name="brain" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t(c.statTitle)}</p>
                  <p className="text-xs text-zinc-400">{t(c.statSub)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#services" aria-label={t(c.scroll)} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-white md:flex">
        {t(c.scroll)}
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-white/20">
          <span className="mt-2 h-2 w-1 animate-bounce rounded-full bg-gold" />
        </span>
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") {
      setValue(target);
      return;
    }
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setValue(Math.round(target * (1 - Math.pow(1 - p, 4))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

function Stats() {
  const { lang } = useLang();
  const c = PSY_COPY.proof;

  return (
    <section aria-label="Social proof" className="relative border-y border-white/5 bg-white/[0.015] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">{T_PSY(c.title, lang)}</p>
        </Reveal>
      </div>
      <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {c.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 120} className="bg-[#09090b] p-6 text-center sm:p-10">
              <div className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-zinc-400">{T_PSY(stat.label, lang)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

function Services() {
  const { lang } = useLang();
  const c = PSY_COPY.services;

  const Column = ({ label, items, accent }: { label: string; items: readonly { icon: Parameters<typeof Icon>[0]["name"]; title: Parameters<typeof T_PSY>[0]; description: Parameters<typeof T_PSY>[0] }[]; accent: string }) => (
    <div>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className={`h-px w-8 ${accent}`} aria-hidden="true" />
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">{label}</h3>
        </div>
      </Reveal>
      <div className="mt-6 space-y-4">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 110}>
            <SpotlightCard className="h-full p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 text-gold transition-all duration-500 group-hover:scale-110 group-hover:border-gold/40">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h4 className="mt-5 text-lg font-semibold text-white">{T_PSY(item.title, lang)}</h4>
              <p className="mt-2.5 text-sm leading-loose text-zinc-400">{T_PSY(item.description, lang)}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </div>
  );

  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={T_PSY(c.eyebrow, lang)}
          title={
            <>
              {T_PSY(c.titleA, lang)}{" "}
              <em className="font-serif font-normal italic text-gold">{T_PSY(c.titleB, lang)}</em>
            </>
          }
          description={T_PSY(c.description, lang)}
        />

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          <Column label={T_PSY(c.clinicalLabel, lang)} items={c.clinical} accent="bg-gold" />
          <Column label={T_PSY(c.forensicLabel, lang)} items={c.forensic} accent="bg-ember" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

function About() {
  const { lang } = useLang();
  const c = PSY_COPY.about;

  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="orb -left-40 top-1/4 h-[30rem] w-[30rem] bg-gradient-to-br from-gold/20 to-ember/15" style={{ animationDelay: "-6s" }} />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_left,black_20%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Photo collage */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="group relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-gold/25 via-ember/15 to-transparent opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative grid grid-cols-2 gap-3">
                  {/* Main portrait */}
                  <div className="relative row-span-2 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
                    <Portrait
                      src="/psych/portrait.jpg"
                      alt={T_PSY(c.portraitAlt, lang)}
                      className="img-zoom aspect-[3/4] h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-4 bottom-4">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gold">{T_PSY(c.portraitLabel, lang)}</p>
                      <p className="mt-1 text-sm font-semibold leading-tight text-white">{T_PSY(c.portraitName, lang)}</p>
                    </div>
                  </div>

                  {/* Secondary portrait */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/50">
                    <img src="/psych/portrait-2.jpg" alt="" aria-hidden="true" loading="lazy" decoding="async" className="img-zoom aspect-[4/3] w-full object-cover" />
                  </div>

                  {/* Office */}
                  <div className="glass relative flex flex-col justify-end overflow-hidden rounded-2xl p-3">
                    <img src="/psych/office.jpg" alt="" aria-hidden="true" loading="lazy" decoding="async" className="img-zoom absolute inset-0 h-full w-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent" />
                    <div className="relative">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-gold">{T_PSY(c.floatLabel, lang)}</p>
                      <p className="mt-1 text-xs font-medium leading-snug text-white">{T_PSY(c.floatValue, lang)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Story */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                {T_PSY(c.eyebrow, lang)}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {T_PSY(c.titleA, lang)}{" "}
                <em className="text-gradient font-serif font-normal italic">{T_PSY(c.titleB, lang)}</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-2xl text-pretty text-base leading-loose text-zinc-400 sm:text-lg">{T_PSY(c.bio, lang)}</p>
            </Reveal>

            {/* Credentials */}
            <Reveal delay={280}>
              <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{T_PSY(c.credentialsLabel, lang)}</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {c.credentials.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {T_PSY(item, lang)}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Signature quote */}
            <Reveal delay={340}>
              <blockquote className="relative mt-9 max-w-2xl border-s-2 border-gold/40 ps-6">
                <p className="text-pretty font-serif text-2xl italic leading-relaxed text-zinc-200 sm:text-3xl">
                  &ldquo;{T_PSY(c.quote, lang)}&rdquo;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-gold" aria-hidden="true" />
                  <span className="font-serif text-lg italic tracking-wide text-gold">{T_PSY(PSY_BRAND.name, lang)}</span>
                </footer>
              </blockquote>
            </Reveal>

            {/* Approach */}
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {c.approach.map((item, i) => (
                <Reveal key={i} delay={420 + i * 110}>
                  <SpotlightCard className="h-full p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 text-gold transition-transform duration-500 group-hover:scale-110">
                      <Icon name={item.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-white">{T_PSY(item.title, lang)}</h3>
                    <p className="mt-2 text-xs leading-loose text-zinc-400">{T_PSY(item.description, lang)}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>

            <Reveal delay={700} className="mt-9">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold sm:text-base">
                {T_PSY(c.cta, lang)}
                <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

function Process() {
  const { lang } = useLang();
  const c = PSY_COPY.process;

  return (
    <section id="process" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="orb -right-40 top-20 h-[30rem] w-[30rem] bg-gradient-to-br from-ember/25 to-gold/20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={T_PSY(c.eyebrow, lang)}
          title={
            <>
              {T_PSY(c.titleA, lang)}{" "}
              <em className="font-serif font-normal italic text-gold">{T_PSY(c.titleB, lang)}</em>
            </>
          }
          description={T_PSY(c.description, lang)}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Steps */}
          <Reveal>
            <div className="glass relative h-full overflow-hidden rounded-[2rem] p-6 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{T_PSY(c.stepsLabel, lang)}</p>
                  <p className="mt-2 text-xl font-medium text-white sm:text-2xl">{T_PSY(c.stepsTitle, lang)}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">{T_PSY(c.stepsTag, lang)}</span>
              </div>

              <ol className="relative mt-10 space-y-8 before:absolute before:bottom-2 before:top-2 before:start-[19px] before:w-px before:content-[''] before:bg-gradient-to-b before:from-gold before:via-ember/50 before:to-transparent">
                {c.steps.map((step, i) => (
                  <Reveal key={i} as="li" delay={i * 160} className="relative flex gap-6">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-[#0c0c0f] text-xs font-semibold tabular-nums text-gold shadow-lg shadow-gold/10">
                      {step.step}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="text-lg font-semibold text-white">{T_PSY(step.title, lang)}</h3>
                      <p className="mt-1.5 text-pretty text-sm leading-loose text-zinc-400 sm:text-[15px]">{T_PSY(step.description, lang)}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* What to expect */}
          <Reveal delay={160}>
            <div className="glass relative h-full overflow-hidden rounded-[2rem]">
              <img src="/psych/office.jpg" alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-[#0c0c0f]/70 to-transparent" />

              <div className="relative flex h-full flex-col p-6 sm:p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">{T_PSY(c.trustTitle, lang)}</p>
                <ul className="mt-8 space-y-5">
                  {c.trust.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-ember/10 text-gold ring-1 ring-inset ring-gold/20">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <span className="text-[15px] leading-relaxed text-zinc-200">{T_PSY(point, lang)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold">
                    {T_PSY(c.cta, lang)}
                    <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

function Testimonials() {
  const { lang } = useLang();
  const c = PSY_COPY.testimonials;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = c.items.length;
  const current = c.items[index];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden="true" className="orb left-[-10rem] top-1/4 h-[26rem] w-[26rem] bg-gradient-to-br from-indigo-500/20 to-gold/15" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={T_PSY(c.eyebrow, lang)}
          title={
            <>
              {T_PSY(c.titleA, lang)}{" "}
              <em className="font-serif font-normal italic text-gold">{T_PSY(c.titleB, lang)}</em>
            </>
          }
        />

        <Reveal className="mt-16">
          <div
            className="glass relative overflow-hidden rounded-[2rem] p-7 sm:p-12 lg:p-16"
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            <span aria-hidden="true" className="pointer-events-none absolute -top-6 end-6 select-none font-serif text-[12rem] leading-none text-white/[0.04] sm:end-12">
              &rdquo;
            </span>

            <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-1 text-gold" aria-label="5/5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <div key={index} aria-live="polite" className="rise mt-6 min-h-[15rem] sm:min-h-[13rem]">
                  <blockquote className="text-pretty font-serif text-2xl leading-[1.6] text-white sm:text-3xl lg:text-[2.25rem] lg:leading-[1.5]">
                    &rdquo;{T_PSY(current.quote, lang)}&ldquo;
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-ember text-sm font-semibold text-ink">
                      {current.initials}
                    </span>
                    <span>
                      <span className="block font-semibold text-white">{T_PSY(current.name, lang)}</span>
                      <span className="block text-sm text-zinc-400">{T_PSY(current.role, lang)}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-8 lg:col-span-4 lg:border-s lg:border-white/10 lg:ps-12">
                <ul className="space-y-2" aria-label="Choose testimonial">
                  {c.items.map((item, i) => (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-current={i === index}
                        className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start transition-all duration-500 ${
                          i === index ? "bg-white/[0.07] text-white" : "text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-200"
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-500 ${i === index ? "scale-150 bg-gold" : "bg-zinc-700"}`} aria-hidden="true" />
                        <span className="text-sm font-medium">{T_PSY(item.name, lang)}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2" aria-hidden="true">
                    {c.items.map((_, i) => (
                      <span key={i} className={`h-1 rounded-full transition-all duration-700 ${i === index ? "w-10 bg-gold" : "w-4 bg-white/15"}`} />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIndex((i) => (i - 1 + total) % total)}
                      aria-label="Previous testimonial"
                      className="glass flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform hover:-translate-x-0.5 active:scale-95"
                    >
                      <Icon name="arrow" className="h-4 w-4 rotate-180 rtl:rotate-0" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIndex((i) => (i + 1) % total)}
                      aria-label="Next testimonial"
                      className="glass flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform hover:translate-x-0.5 active:scale-95 rtl:-scale-x-100"
                    >
                      <Icon name="arrow" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

function FAQItem({ q, a, open, onToggle, index }: { q: string; a: string; open: boolean; onToggle: () => void; index: number }) {
  const id = `faq-${index}`;
  return (
    <div className={`group rounded-2xl border transition-all duration-500 ${open ? "border-gold/30 bg-white/[0.05] shadow-xl shadow-black/30" : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"}`}>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 px-5 py-5 text-start sm:px-7 sm:py-6"
        >
          <span className="flex items-start gap-4">
            <span className="mt-1 hidden font-serif text-sm italic text-zinc-500 tabular-nums sm:inline">0{index + 1}</span>
            <span className={`text-base font-medium transition-colors duration-300 sm:text-lg ${open ? "text-white" : "text-zinc-200"}`}>{q}</span>
          </span>
          <span aria-hidden="true" className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${open ? "rotate-45 border-gold/50 bg-gold text-ink" : "border-white/15 text-zinc-300 group-hover:border-white/30"}`}>
            <Icon name="plus" className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-btn`} className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-6 text-pretty text-[15px] leading-loose text-zinc-400 sm:px-7 sm:ps-[4.25rem]">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const { lang } = useLang();
  const c = PSY_COPY.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow={T_PSY(c.eyebrow, lang)}
            title={
              <>
                {T_PSY(c.titleA, lang)}{" "}
                <em className="font-serif font-normal italic text-gold">{T_PSY(c.titleB, lang)}</em>
              </>
            }
            description={T_PSY(c.description, lang)}
          />
          <Reveal delay={300} className="mt-8">
            <a href={`mailto:${PSY_BRAND.email}`} className="glass group inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10">
              <Icon name="mail" className="h-4 w-4 text-gold" />
              {T_PSY(c.emailCta, lang)}
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="space-y-3 lg:col-span-7">
          {c.items.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <FAQItem index={i} q={T_PSY(item.q, lang)} a={T_PSY(item.a, lang)} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
  const { lang, isAr } = useLang();
  const c = PSY_COPY.cta;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();

    if (!name) {
      setStatus("error");
      setError(T_PSY(c.errorName, lang));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError(T_PSY(c.errorEmail, lang));
      return;
    }

    const phone = String(data.get("phone") ?? "").trim();
    const project = String(data.get("project") ?? "");
    const message = String(data.get("message") ?? "").trim();

    setError("");
    setStatus("submitting");

    const subject = isAr ? `رسالة من ${name} — ${project}` : `Message from ${name} — ${project}`;
    const body = isAr
      ? `الاسم: ${name}\nالبريد: ${email}\nالجوال: ${phone || "—"}\nنوع الاستشارة: ${project}\n\nالموضوع:\n${message || "—"}`
      : `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nConsultation type: ${project}\n\nTopic:\n${message || "—"}`;

    window.location.href = `mailto:${PSY_BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => setStatus("success"), 400);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder:text-zinc-500 transition-all duration-300 hover:border-white/20 focus:border-gold/50 focus:bg-white/[0.07] focus:outline-none focus:ring-4 focus:ring-gold/10";

  return (
    <section id="contact" className="relative scroll-mt-24 px-3 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-[#0c0c0f] to-zinc-900 px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
        <div aria-hidden="true" className="orb -left-24 -top-24 h-96 w-96 bg-gradient-to-br from-gold/40 to-ember/30" />
        <div aria-hidden="true" className="orb -bottom-32 right-0 h-96 w-96 bg-gradient-to-tl from-ember/30 to-indigo-500/20" style={{ animationDelay: "-9s" }} />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="relative grid items-start gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                <span className="relative flex h-2 w-2">
                  <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden="true" />
                  <span className="relative h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                </span>
                {T_PSY(c.badge, lang)}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {T_PSY(c.titleA, lang)}{" "}
                <em className="text-gradient font-serif font-normal italic">{T_PSY(c.titleB, lang)}</em>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-lg text-pretty text-base leading-loose text-zinc-400 sm:text-lg">{T_PSY(c.description, lang)}</p>
            </Reveal>
            <Reveal delay={360}>
              <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                {c.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-gold" />
                    {T_PSY(point, lang)}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={440} className="mt-9">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{T_PSY(c.direct, lang)}</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:max-w-lg">
                {PSY_BRAND.socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target={s.key === "mail" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:bg-white/[0.06]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-ember/10 text-gold ring-1 ring-inset ring-gold/20 transition-transform duration-500 group-hover:scale-110">
                      <Icon name={s.key} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs uppercase tracking-[0.16em] text-zinc-500">{T_PSY(s.label, lang)}</span>
                      <span className="block truncate text-sm font-medium text-white" dir={s.key === "mail" ? "ltr" : "auto"}>
                        {s.key === "mail" ? PSY_BRAND.email : T_PSY(s.label, lang)}
                      </span>
                    </span>
                    <Icon name="arrow" className="h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={200}>
              <form onSubmit={handleSubmit} noValidate aria-describedby="form-status" className="glass rounded-3xl p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">{T_PSY(c.name, lang)}</label>
                    <input id="name" name="name" type="text" autoComplete="name" placeholder={T_PSY(c.namePlaceholder, lang)} className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">{T_PSY(c.email, lang)}</label>
                    <input id="email" name="email" type="email" autoComplete="email" dir="ltr" placeholder={T_PSY(c.emailPlaceholder, lang)} className={inputClass} />
                  </div>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-zinc-300">{T_PSY(c.phone, lang)}</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" dir="ltr" inputMode="tel" placeholder={T_PSY(c.phonePlaceholder, lang)} className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project" className="text-sm font-medium text-zinc-300">{T_PSY(c.projectType, lang)}</label>
                    <select
                      id="project"
                      name="project"
                      defaultValue={isAr ? c.projectOptions[0].ar : c.projectOptions[0].en}
                      className={`${inputClass} appearance-none bg-[length:1rem] bg-[position:right_1rem_center] bg-no-repeat pe-10 rtl:bg-[position:left_1rem_center]`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2'><path d='m6 9 6 6 6-6'/></svg>\")",
                      }}
                    >
                      {c.projectOptions.map((option, i) => (
                        <option key={i} value={T_PSY(option, lang)} className="bg-zinc-900">
                          {T_PSY(option, lang)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    {T_PSY(c.message, lang)} <span className="text-zinc-500">{T_PSY(c.messageOptional, lang)}</span>
                  </label>
                  <textarea id="message" name="message" rows={4} placeholder={T_PSY(c.messagePlaceholder, lang)} className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold disabled:cursor-wait disabled:opacity-70 sm:text-base"
                >
                  {status === "submitting" ? T_PSY(c.submitting, lang) : T_PSY(c.submit, lang)}
                  {status !== "submitting" && <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />}
                </button>

                <p
                  id="form-status"
                  role="status"
                  aria-live="polite"
                  className={`mt-4 min-h-[1.5rem] text-center text-sm leading-relaxed transition-colors duration-300 ${
                    status === "error" ? "text-rose-300" : status === "success" ? "text-emerald-300" : "text-zinc-500"
                  }`}
                >
                  {status === "success" ? T_PSY(c.success, lang) : status === "error" ? error : T_PSY(c.privacy, lang)}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  const { lang } = useLang();
  const c = PSY_COPY.footer;
  const year = new Date().getFullYear();

  const columns = [
    { title: T_PSY(c.studio, lang), links: PSY_NAV.slice(0, 2) },
    { title: T_PSY(c.explore, lang), links: PSY_NAV.slice(2, 4) },
    { title: T_PSY(c.more, lang), links: PSY_NAV.slice(4) },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070709] pt-20 pb-10">
      <div aria-hidden="true" className="orb -bottom-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 bg-gradient-to-r from-gold/15 via-ember/15 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white to-gold text-sm font-semibold text-ink">{PSY_BRAND.initials}</span>
              <span className="text-[15px] font-semibold tracking-tight text-white">{T_PSY(PSY_BRAND.name, lang)}</span>
            </a>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-gold">{T_PSY(PSY_BRAND.title, lang)}</p>
            <p className="mt-5 max-w-sm text-pretty font-serif text-2xl italic leading-snug text-zinc-300">{T_PSY(c.tagline, lang)}</p>
            <p className="mt-4 max-w-sm text-sm leading-loose text-zinc-500">{T_PSY(c.about, lang)}</p>

            <div className="mt-8 flex items-center gap-3">
              {PSY_BRAND.socials.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target={s.key === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={T_PSY(s.label, lang)}
                  className="glass flex h-11 w-11 items-center justify-center rounded-xl text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:text-gold hover:shadow-lg hover:shadow-gold/10"
                >
                  <Icon name={s.key} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5 lg:col-start-6">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="group inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white">
                        <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-3" aria-hidden="true" />
                        {T_PSY(link.label, lang)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{T_PSY(c.bookings, lang)}</h3>
            <a href={`mailto:${PSY_BRAND.email}`} dir="ltr" className="mt-5 block break-all text-sm text-zinc-300 transition-colors hover:text-white">
              {PSY_BRAND.email}
            </a>
            <a href="#contact" className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold">
              {T_PSY(c.start, lang)}
              <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
            </a>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-xs leading-loose text-zinc-500">{T_PSY(c.disclaimer, lang)}</p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {T_PSY(PSY_BRAND.name, lang)}. {T_PSY(c.rights, lang)}
          </p>
          <div className="flex items-center gap-6">
            {c.legal.map((item, i) => (
              <a key={i} href="#top" className="transition-colors hover:text-white">
                {T_PSY(item, lang)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function PsychologyPage() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-[#09090b] font-sans text-zinc-100 selection:bg-gold/30">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink"
      >
        تخطَّ إلى المحتوى
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function Psychology() {
  return (
    <LanguageProvider>
      <PsychologyPage />
    </LanguageProvider>
  );
}
