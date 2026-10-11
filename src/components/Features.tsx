import { useLang } from "../i18n";
import { COPY, T } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

export default function Features() {
  const { lang } = useLang();
  const c = COPY.services;

  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {c.items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 120}>
              <SpotlightCard className="h-full p-7 sm:p-8">
                <div className="flex h-full flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 text-gold transition-all duration-500 group-hover:scale-110 group-hover:border-gold/40 group-hover:shadow-lg group-hover:shadow-gold/20">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{T(item.title, lang)}</h3>
                  <p className="mt-3 text-pretty text-[15px] leading-loose text-zinc-400">{T(item.description, lang)}</p>
                  <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-zinc-500 transition-colors group-hover:text-gold">
                    {T(c.included, lang)}
                    <Icon name="check" className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
