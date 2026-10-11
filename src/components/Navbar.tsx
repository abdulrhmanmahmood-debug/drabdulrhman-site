import { useEffect, useState } from "react";
import { useLang } from "../i18n";
import { BRAND, COPY, NAV_LINKS, T } from "../data/content";
import Icon from "./Icon";

export default function Navbar() {
  const { lang, isAr, toggle } = useLang();
  const t = (d: Parameters<typeof T>[0]) => T(d, lang);

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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`relative mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled ? "glass shadow-2xl shadow-black/40" : "border border-transparent"
        }`}
      >
        <a href="#top" className="group flex shrink-0 items-center gap-2.5" aria-label={COPY.nav.home[lang]}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white to-gold text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-transform duration-500 group-hover:rotate-[20deg] group-hover:scale-105">
            {BRAND.initials}
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-white">عبدالرحمن حسين</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-lg px-3.5 py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-px after:origin-center after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                {T(link.label, lang)}
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

          <a
            href="#contact"
            className="btn-primary hidden rounded-xl px-4 py-2.5 text-sm font-semibold sm:inline-flex sm:items-center sm:gap-2"
          >
            {t(COPY.nav.book)}
            <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t(COPY.nav.closeMenu) : t(COPY.nav.openMenu)}
            className="glass flex h-10 w-10 items-center justify-center rounded-xl text-white transition-transform duration-300 active:scale-95 lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-white transition-all duration-500 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded bg-white transition-all duration-500 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div aria-hidden="true" className="absolute inset-x-4 bottom-0 h-px overflow-hidden rounded-full bg-white/5">
          <div
            className="progress-bar h-full w-full bg-gradient-to-r from-gold via-ember to-gold"
            style={{ ["--progress" as string]: progress }}
          />
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
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {T(link.label, lang)}
                  <Icon name="arrow" className="h-4 w-4 text-zinc-500 rtl:-scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={close}
            tabIndex={open ? 0 : -1}
            className="btn-primary mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold"
          >
            {t(COPY.nav.book)}
            <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
          </a>
        </div>
      </div>
    </header>
  );
}
