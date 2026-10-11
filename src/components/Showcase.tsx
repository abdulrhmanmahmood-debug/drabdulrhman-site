import { useEffect, useState } from "react";
import { useLang } from "../i18n";
import { COPY, DRIVE_FOLDER_URL, T } from "../data/content";
import { PORTFOLIO, galleryImage } from "../data/portfolio";
import type { PortfolioItem } from "../data/portfolio";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Filter = "all" | "sessions" | "recent";

function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: PortfolioItem[];
  index: number;
  onClose: () => void;
  onNavigate: (n: number) => void;
}) {
  const { lang } = useLang();
  const c = COPY.portfolio;
  const item = items[index];
  const total = items.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % total);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + total) % total);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, total, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.file}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl animate-[rise_0.6s_cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black">
          <img
            src={galleryImage(item, 1600)}
            alt={item.file}
            referrerPolicy="no-referrer"
            className="max-h-[72svh] w-full object-contain"
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              {index + 1} / {total}
            </p>
            <p className="mt-1 text-lg font-medium text-white">{item.file}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigate((index - 1 + total) % total)}
              aria-label={T(c.prev, lang)}
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform hover:-translate-x-0.5 active:scale-95"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180 rtl:rotate-0" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate((index + 1) % total)}
              aria-label={T(c.next, lang)}
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform hover:translate-x-0.5 active:scale-95 rtl:-scale-x-100"
            >
              <Icon name="arrow" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={T(c.close, lang)}
              className="btn-primary flex h-11 w-11 items-center justify-center rounded-xl"
            >
              <Icon name="plus" className="h-5 w-5 rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  const { lang } = useLang();
  const c = COPY.portfolio;
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);
  const close = () => setActive(null);

  const items = filter === "all" ? PORTFOLIO : PORTFOLIO.filter((p) => p.tag === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: T(c.all, lang) },
    { key: "sessions", label: T(c.sessions, lang) },
    { key: "recent", label: T(c.recent, lang) },
  ];

  return (
    <section id="portfolio" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow={T(c.eyebrow, lang)}
            title={
              <>
                {T(c.titleA, lang)}{" "}
                <em className="font-serif font-normal italic text-gold">{T(c.titleB, lang)}</em>
              </>
            }
          />
          <Reveal delay={200}>
            <a
              href={DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost glass group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              {T(c.archive, lang)}
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                filter === f.key
                  ? "border-gold/40 bg-gold/15 text-gold"
                  : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 columns-2 gap-4 sm:gap-5 lg:columns-3 xl:columns-4">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 90} className="mb-4 break-inside-avoid sm:mb-5">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${T(c.open, lang)}: ${item.file}`}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-xl shadow-black/40 transition-[border-color,box-shadow] duration-500 hover:border-gold/30 hover:shadow-gold/10"
              >
                <img
                  src={galleryImage(item, 700)}
                  alt={item.file}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="img-zoom w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between gap-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="truncate text-xs font-medium text-white">{item.file}</p>
                  <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white">
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <p className="text-sm text-zinc-500">{T(c.archiveHint, lang)}</p>
        </Reveal>

        <Reveal className="mt-20 sm:mt-28">
          <div className="glass relative overflow-hidden rounded-[2rem] p-5 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">{T(c.galleryTitle, lang)}</p>
                <h3 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">{T(c.galleryIntro, lang)}</h3>
                <ul className="mt-6 space-y-4 text-zinc-300">
                  {c.galleryPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      <span className="text-[15px] leading-loose">{T(point, lang)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-white/10 bg-[#0c0c0f]/80 p-4 shadow-2xl shadow-black/50 sm:p-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>
                    <p className="hidden text-xs text-zinc-500 sm:block">{T(c.galleryTag, lang)}</p>
                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                      {T(c.gallerySelected, lang)}
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {PORTFOLIO.slice(0, 3).map((item, i) => (
                      <div key={item.id} className="group relative aspect-square overflow-hidden rounded-xl border border-white/5">
                        <img
                          src={galleryImage(item, 400)}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="img-zoom h-full w-full object-cover"
                        />
                        <span
                          className={`absolute end-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-500 ${
                            i !== 1 ? "border-gold bg-gold text-ink" : "border-white/40 bg-black/30 text-transparent"
                          }`}
                          aria-hidden="true"
                        >
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3">
                    <p className="text-sm text-zinc-300">{T(c.galleryBar, lang)}</p>
                    <span className="text-xs font-medium text-gold">{T(c.galleryDownload, lang)} →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {active !== null && <Lightbox items={items} index={active} onClose={close} onNavigate={setActive} />}
    </section>
  );
}
