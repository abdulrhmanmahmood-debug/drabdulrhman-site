import { useLang } from "../i18n";
import { COPY, T } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Benefits() {
  const { lang } = useLang();
  const c = COPY.process;

  return (
    <section id="process" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="orb -right-40 top-20 h-[30rem] w-[30rem] bg-gradient-to-br from-ember/25 to-gold/20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
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

            <ul className="mt-12 space-y-4">
              {c.benefits.map((benefit, i) => (
                <Reveal key={i} as="li" delay={i * 110}>
                  <div className="group flex gap-5 rounded-2xl border border-transparent p-4 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.03]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-ember/10 text-gold ring-1 ring-inset ring-gold/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon name={benefit.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{T(benefit.title, lang)}</h3>
                      <p className="mt-1.5 text-sm leading-loose text-zinc-400">{T(benefit.description, lang)}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">{T(c.stepsLabel, lang)}</p>
                    <p className="mt-2 text-xl font-medium text-white sm:text-2xl">{T(c.stepsTitle, lang)}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
                    {T(c.stepsTag, lang)}
                  </span>
                </div>

                <ol className="relative mt-10 space-y-8 before:absolute before:bottom-2 before:top-2 before:start-[19px] before:w-px before:content-[''] before:bg-gradient-to-b before:from-gold before:via-ember/50 before:to-transparent">
                  {c.steps.map((step, i) => (
                    <Reveal key={i} as="li" delay={i * 160} className="relative flex gap-6">
                      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-[#0c0c0f] text-xs font-semibold tabular-nums text-gold shadow-lg shadow-gold/10">
                        {step.step}
                      </span>
                      <div className="pt-1.5">
                        <h3 className="text-lg font-semibold text-white">{T(step.title, lang)}</h3>
                        <p className="mt-1.5 text-pretty text-sm leading-loose text-zinc-400 sm:text-[15px]">
                          {T(step.description, lang)}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
