import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { useLang } from "../i18n";
import { COPY, T } from "../data/content";
import { HERO_FALLBACK } from "../data/portfolio";import Icon from "./Icon";

const AVATARS = ["ع", "ن", "ف", "ر"];

export default function Hero() {
  const { lang } = useLang();
  const t = (d: Parameters<typeof T>[0]) => T(d, lang);
  const c = COPY.hero;
  const [imgSrc, setImgSrc] = useState("/images/portrait.jpg");

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
    if (frameRef.current) {
      frameRef.current.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <section
      id="top"
      onPointerMove={handleMove}
      onPointerLeave={resetTilt}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40"
    >
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
            <a
              href="#contact"
              className="glass group inline-flex items-center gap-3 rounded-full py-1.5 pl-3.5 pr-4 text-sm text-zinc-200 transition-colors hover:text-white"
            >
              <span className="relative flex h-6 w-6 items-center justify-center">
                <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden="true" />
                <span className="relative h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
              </span>
              {t(c.badge)}
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </a>
          </div>

          <h1 className="mt-7 text-balance text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            <span className="rise block" style={{ ["--d" as string]: "120ms" }}>
              {t(c.titleTop)}
            </span>
            <span className="rise block" style={{ ["--d" as string]: "240ms" }}>
              {t(c.titleBottomA)}{" "}
              <em className="text-gradient font-serif font-normal italic">{t(c.titleBottomB)}</em>
            </span>
          </h1>

          <p className="rise mt-7 max-w-xl text-pretty text-base leading-loose text-zinc-400 sm:text-lg" style={{ ["--d" as string]: "380ms" }}>
            {t(c.subtitle)}
          </p>

          <div className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ ["--d" as string]: "500ms" }}>
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold sm:text-base">
              {t(c.ctaPrimary)}
              <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
            </a>
            <a
              href="#portfolio"
              className="btn-ghost glass inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white hover:border-white/25 hover:bg-white/10 sm:text-base"
            >
              {t(c.ctaSecondary)}
            </a>
          </div>

          <div className="rise mt-10 flex items-center gap-4" style={{ ["--d" as string]: "620ms" }}>
            <div className="flex -space-x-3 rtl:space-x-reverse" aria-hidden="true">
              {AVATARS.map((a) => (
                <span
                  key={a}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#09090b] bg-gradient-to-br from-zinc-600 to-zinc-800 text-xs font-semibold text-white"
                >
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
            <div
              ref={frameRef}
              className="relative aspect-[4/5] w-full transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl shadow-black/60 ring-1 ring-white/10">
                <img
                  src={imgSrc}
                  onError={() => setImgSrc(HERO_FALLBACK)}
                  alt={t(c.imgAlt)}
                  width={1000}
                  height={1250}
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-ember/10 mix-blend-soft-light" />
              </div>

              <div className="glass bob absolute -start-4 top-10 hidden rounded-2xl p-4 sm:block sm:-start-8" style={{ animationDelay: "0s" }}>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">{t(c.cardAwardLabel)}</p>
                <p className="mt-1 text-sm font-semibold text-white">{t(c.cardAwardValue)}</p>
              </div>

              <div className="glass bob absolute -end-3 bottom-24 flex items-center gap-3 rounded-2xl p-3.5 pr-5 sm:-end-6" style={{ animationDelay: "-3s" }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-ember text-ink">
                  <Icon name="camera" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t(c.cardStatTitle)}</p>
                  <p className="text-xs text-zinc-400">{t(c.cardStatSub)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#services"
        aria-label={t(c.scroll)}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-white md:flex"
      >
        {t(c.scroll)}
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-white/20">
          <span className="mt-2 h-2 w-1 animate-bounce rounded-full bg-gold" />
        </span>
      </a>
    </section>
  );
}
