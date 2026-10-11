import { useState } from "react";
import { useLang } from "../i18n";
import { DRIVE_FOLDER_URL, T, VIDEO_COPY } from "../data/content";
import { VIDEOS, videoPoster, videoWatchUrl } from "../data/videos";
import type { VideoItem } from "../data/videos";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import VideoModal from "./VideoModal";

type Filter = "all" | "reel" | "intro";

export default function Videos() {
  const { lang } = useLang();
  const c = VIDEO_COPY;
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<VideoItem | null>(null);

  const items = filter === "all" ? VIDEOS : VIDEOS.filter((v) => v.tag === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: T(c.all, lang) },
    { key: "reel", label: T(c.reels, lang) },
    { key: "intro", label: T(c.intro, lang) },
  ];

  return (
    <section id="videos" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="orb -left-32 top-1/3 h-[26rem] w-[26rem] bg-gradient-to-br from-gold/20 to-ember/20" style={{ animationDelay: "-5s" }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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
            description={T(c.description, lang)}
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

        <Reveal delay={100} className="mt-10 flex flex-wrap items-center gap-2">
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
          <span className="ms-2 text-xs text-zinc-500">
            {items.length} {T(c.count, lang)}
          </span>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((video, i) => (
            <Reveal key={video.id} delay={(i % 3) * 120}>
              <div className="group glass overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1.5">
                <button
                  type="button"
                  onClick={() => setActive(video)}
                  aria-label={`${T(c.play, lang)}: ${video.title[lang]}`}
                  className="relative block aspect-video w-full overflow-hidden"
                >
                  <img
                    src={videoPoster(video.id, 640)}
                    alt={video.title[lang]}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="img-zoom h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <span className="absolute start-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold/90 group-hover:ring-gold rtl:translate-x-1/2">
                    <svg viewBox="0 0 24 24" className="ms-1 h-6 w-6 fill-white rtl:me-1 rtl:ms-0 rtl:-scale-x-100" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>

                  <span className="absolute bottom-3 end-3 rounded-lg bg-black/70 px-2 py-1 text-xs font-medium tabular-nums text-white backdrop-blur">
                    {video.duration}
                  </span>
                </button>

                <div className="flex items-start justify-between gap-3 p-5">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">{video.category[lang]}</p>
                    <h3 className="mt-1.5 truncate text-base font-semibold text-white">{video.title[lang]}</h3>
                  </div>
                  <a
                    href={videoWatchUrl(video.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in Drive"
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <VideoModal video={active} onClose={() => setActive(null)} />}
    </section>
  );
}
