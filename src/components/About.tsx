import { useLang } from "../i18n";
import { ABOUT_COPY, T } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const SIGNATURE = "Abdulrhman Hussien";

const CREDENTIALS = [
  { value: "12+", label: { ar: "سنة خبرة", en: "Years of experience" } },
  { value: "340+", label: { ar: "مشروع منفّذ", en: "Projects delivered" } },
  { value: "27", label: { ar: "موقع تصوير", en: "Locations shot" } },
];

export default function About() {
  const { lang } = useLang();
  const c = ABOUT_COPY;

  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="orb -left-40 top-1/4 h-[30rem] w-[30rem] bg-gradient-to-br from-gold/20 to-ember/15" style={{ animationDelay: "-6s" }} />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_left,black_20%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="group relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-gold/25 via-ember/15 to-transparent opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/60">
                  <img
                    src="/images/portrait.jpg"
                    alt={T(c.portraitAlt, lang)}
                    width={1000}
                    height={1400}
                    loading="lazy"
                    decoding="async"
                    className="img-zoom aspect-[4/5] w-full object-cover grayscale-[20%] contrast-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-ember/10 mix-blend-soft-light" />

                  {/* Caption plate */}
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">{T(c.portraitLabel, lang)}</p>
                    <p className="mt-1.5 text-lg font-semibold text-white">{T(c.portraitName, lang)}</p>
                  </div>
                </div>

                {/* Floating accent */}
                <div className="glass bob absolute -end-4 top-8 hidden items-center gap-3 rounded-2xl p-3.5 pe-5 sm:flex" style={{ animationDelay: "-2.5s" }}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-ember text-ink">
                    <Icon name="camera" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{T(c.floatTitle, lang)}</p>
                    <p className="text-xs text-zinc-400">{T(c.floatSub, lang)}</p>
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
                {T(c.eyebrow, lang)}
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {T(c.titleA, lang)}{" "}
                <em className="text-gradient font-serif font-normal italic">{T(c.titleB, lang)}</em>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-2xl text-pretty text-base leading-loose text-zinc-400 sm:text-lg">
                {T(c.bio, lang)}
              </p>
            </Reveal>

            {/* Signature quote */}
            <Reveal delay={280}>
              <blockquote className="relative mt-9 max-w-2xl border-s-2 border-gold/40 ps-6">
                <p className="text-pretty font-serif text-2xl italic leading-relaxed text-zinc-200 sm:text-3xl">
                  &ldquo;{T(c.quote, lang)}&rdquo;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-gold" aria-hidden="true" />
                  <span className="font-serif text-lg italic tracking-wide text-gold">{SIGNATURE}</span>
                </footer>
              </blockquote>
            </Reveal>

            {/* Credentials */}
            <div className="mt-11 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {CREDENTIALS.map((item, i) => (
                <Reveal key={i} delay={360 + i * 100} className="bg-[#09090b] p-5 text-center">
                  <div className="text-2xl font-medium tracking-tight text-white tabular-nums sm:text-3xl">{item.value}</div>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-400 sm:text-sm">{T(item.label, lang)}</p>
                </Reveal>
              ))}
            </div>

            {/* Approach */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {c.approach.map((item, i) => (
                <Reveal key={i} delay={420 + i * 110}>
                  <SpotlightCard className="h-full p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 text-gold transition-transform duration-500 group-hover:scale-110">
                      <Icon name={item.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-white">{T(item.title, lang)}</h3>
                    <p className="mt-2 text-xs leading-loose text-zinc-400">{T(item.description, lang)}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>

            <Reveal delay={700} className="mt-9">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold sm:text-base"
              >
                {T(c.cta, lang)}
                <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
