import { useEffect, useState } from "react";
import { useLang } from "../i18n";
import { COPY, T } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const INTERVAL = 7000;

export default function Testimonials() {
  const { lang } = useLang();
  const c = COPY.testimonials;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = c.items.length;
  const current = c.items[index];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden="true" className="orb left-[-10rem] top-1/4 h-[26rem] w-[26rem] bg-gradient-to-br from-indigo-500/20 to-gold/15" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={T(c.eyebrow, lang)}
          title={
            <>
              {T(c.titleA, lang)}{" "}
              <em className="font-serif font-normal italic text-gold">{T(c.titleB, lang)}</em>
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
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 end-6 select-none font-serif text-[12rem] leading-none text-white/[0.04] sm:end-12"
            >
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
                    &rdquo;{T(current.quote, lang)}&ldquo;
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-ember text-sm font-semibold text-ink">
                      {current.initials}
                    </span>
                    <span>
                      <span className="block font-semibold text-white">{T(current.name, lang)}</span>
                      <span className="block text-sm text-zinc-400">{T(current.role, lang)}</span>
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
                          i === index
                            ? "bg-white/[0.07] text-white"
                            : "text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-200"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-500 ${
                            i === index ? "scale-150 bg-gold" : "bg-zinc-700"
                          }`}
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium">{T(item.name, lang)}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2" aria-hidden="true">
                    {c.items.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1 rounded-full transition-all duration-700 ${
                          i === index ? "w-10 bg-gold" : "w-4 bg-white/15"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="glass flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform hover:-translate-x-0.5 active:scale-95"
                    >
                      <Icon name="arrow" className="h-4 w-4 rotate-180 rtl:rotate-0" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
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
