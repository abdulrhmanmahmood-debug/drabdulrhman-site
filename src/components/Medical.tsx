import { useState } from "react";
import { useLang } from "../i18n";
import { MEDICAL_COPY, T, VIDEO_COPY } from "../data/content";
import { MEDICAL_VIDEO, videoPoster, videoWatchUrl } from "../data/videos";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import VideoModal from "./VideoModal";

export default function Medical() {
  const { lang } = useLang();
  const c = MEDICAL_COPY;
  const [playing, setPlaying] = useState(false);

  return (
    <section id="medical" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden="true" className="orb left-1/2 top-0 h-[26rem] w-[55rem] -translate-x-1/2 bg-gradient-to-r from-emerald-500/10 via-gold/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={T(c.eyebrow, lang)}
          title={
            <>
              {T(c.titleA, lang)}{" "}
              <em className="font-serif font-normal italic text-gold">{T(c.titleB, lang)}</em>
            </>
          }
          description={T(c.description, lang)}
        />

        {/* Featured medical film */}
        <Reveal className="mt-14">
          <div className="glass relative overflow-hidden rounded-[2rem] p-5 sm:p-8">
            <div className="pointer-events-none absolute -end-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" aria-hidden="true" />

            <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-white/10"
                  aria-label={`${T(VIDEO_COPY.play, lang)}: ${MEDICAL_VIDEO.title[lang]}`}
                >
                  <img
                    src={videoPoster(MEDICAL_VIDEO.id, 1000)}
                    alt={MEDICAL_VIDEO.title[lang]}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="img-zoom aspect-video w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <span className="absolute start-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-gold/90 group-hover:ring-gold rtl:translate-x-1/2">
                    <svg viewBox="0 0 24 24" className="ms-1 h-6 w-6 fill-white rtl:me-1 rtl:ms-0 rtl:-scale-x-100" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="absolute bottom-3 end-3 rounded-lg bg-black/70 px-2 py-1 text-xs font-medium tabular-nums text-white backdrop-blur">
                    {MEDICAL_VIDEO.duration}
                  </span>
                </button>
              </div>

              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">{T(c.featured, lang)}</p>
                <h3 className="mt-3 text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl">
                  {MEDICAL_VIDEO.title[lang]}
                </h3>
                <p className="mt-3 text-sm leading-loose text-zinc-400">{MEDICAL_VIDEO.category[lang]}</p>

                <ul className="mt-7 space-y-3.5">
                  {c.trust.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {T(point, lang)}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold">
                    {T(c.cta, lang)}
                    <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
                  </a>
                  <a
                    href={videoWatchUrl(MEDICAL_VIDEO.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Drive
                    <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Services */}
        <Reveal className="mt-16">
          <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">{T(c.servicesTitle, lang)}</h3>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.services.map((service, i) => (
            <Reveal key={i} delay={(i % 4) * 110}>
              <SpotlightCard className="h-full p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-gradient-to-br from-emerald-400/15 to-white/0 text-emerald-300 transition-all duration-500 group-hover:scale-110 group-hover:border-emerald-300/40">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h4 className="mt-5 text-lg font-semibold text-white">{T(service.title, lang)}</h4>
                <p className="mt-2.5 text-sm leading-loose text-zinc-400">{T(service.description, lang)}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      {playing && <VideoModal video={MEDICAL_VIDEO} onClose={() => setPlaying(false)} />}
    </section>
  );
}
