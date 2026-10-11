import { useLang } from "../i18n";
import { COPY, T } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
  const { lang } = useLang();
  const c = COPY.pricing;

  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden="true" className="orb left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 bg-gradient-to-r from-gold/15 via-ember/15 to-transparent" />

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

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
          {c.tiers.map((tier, i) => {
            const featured = "featured" in tier && tier.featured;

            return (
              <Reveal key={i} delay={i * 130} className={featured ? "lg:-my-4" : ""}>
                <article
                  className={`group relative flex h-full flex-col rounded-[2rem] p-7 transition-all duration-500 hover:-translate-y-1.5 sm:p-9 ${
                    featured
                      ? "bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent shadow-2xl shadow-gold/10 ring-1 ring-gold/40"
                      : "glass hover:border-white/20"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3.5 start-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-ember px-4 py-1 text-xs font-semibold text-ink shadow-lg shadow-gold/30 rtl:translate-x-1/2">
                      {T(c.mostBooked, lang)}
                    </span>
                  )}

                  <h3 className="text-xl font-semibold text-white">{T(tier.name, lang)}</h3>
                  <p className="mt-2 min-h-[3.5rem] text-sm leading-loose text-zinc-400">{T(tier.description, lang)}</p>

                  {/* No fixed price — a tailored quote instead */}
                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{T(c.scopeLabel, lang)}</p>
                    <p className="mt-2 text-lg font-medium text-white">{T(tier.scope, lang)}</p>
                  </div>

                  <div className="mt-5 flex items-center gap-3 rounded-2xl border border-gold/25 bg-gold/[0.08] px-4 py-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-ember text-ink">
                      <Icon name="mail" className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{T(c.custom, lang)}</p>
                      <p className="text-xs text-zinc-400">{T(c.customNote, lang)}</p>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      featured ? "btn-primary" : "border border-white/10 bg-white/5 text-white hover:border-white/25 hover:bg-white/10"
                    }`}
                  >
                    {T(tier.cta, lang)}
                    <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
                  </a>

                  <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <ul className="space-y-3.5">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featured ? "bg-gold text-ink" : "bg-white/10 text-gold"}`}>
                          <Icon name="check" className="h-3 w-3" />
                        </span>
                        {T(feature, lang)}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-loose text-zinc-500">{T(c.footnote, lang)}</p>
        </Reveal>
      </div>
    </section>
  );
}
