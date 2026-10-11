import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n";
import { COPY, T } from "../data/content";
import { formatNumber } from "../i18n";
import Reveal from "./Reveal";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
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
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 4);
          setValue(Math.round(target * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
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
      {formatNumber(value)}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  const { lang } = useLang();
  const c = COPY.proof;

  return (
    <section aria-label="Social proof" className="relative border-y border-white/5 bg-white/[0.015] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">{T(c.title, lang)}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {c.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 120} className="bg-[#09090b] p-6 text-center sm:p-10">
              <div className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-zinc-400">{T(stat.label, lang)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
