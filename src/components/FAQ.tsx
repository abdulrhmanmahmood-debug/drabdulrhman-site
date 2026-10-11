import { useId, useState } from "react";
import { useLang } from "../i18n";
import { BRAND, FAQ_HEADING, FAQ_ITEMS, T } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function FAQItem({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const id = useId();
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div
      className={`group rounded-2xl border transition-all duration-500 ${
        open
          ? "border-gold/30 bg-white/[0.05] shadow-xl shadow-black/30"
          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 px-5 py-5 text-start sm:px-7 sm:py-6"
        >
          <span className="flex items-start gap-4">
            <span className="mt-1 hidden font-serif text-sm italic text-zinc-500 tabular-nums sm:inline">
              0{index + 1}
            </span>
            <span className={`text-base font-medium transition-colors duration-300 sm:text-lg ${open ? "text-white" : "text-zinc-200"}`}>
              {q}
            </span>
          </span>
          <span
            aria-hidden="true"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
              open ? "rotate-45 border-gold/50 bg-gold text-ink" : "border-white/15 text-zinc-300 group-hover:border-white/30"
            }`}
          >
            <Icon name="plus" className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-6 text-pretty text-[15px] leading-loose text-zinc-400 sm:px-7 sm:ps-[4.25rem]">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow={T(FAQ_HEADING.eyebrow, lang)}
            title={
              <>
                {T(FAQ_HEADING.titleA, lang)}{" "}
                <em className="font-serif font-normal italic text-gold">{T(FAQ_HEADING.titleB, lang)}</em>
              </>
            }
            description={T(FAQ_HEADING.description, lang)}
          />
          <Reveal delay={300} className="mt-8">
            <a
              href={BRAND.socials.find((s) => s.key === "mail")?.href}
              className="glass group inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Icon name="mail" className="h-4 w-4 text-gold" />
              {T(FAQ_HEADING.emailCta, lang)}
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="space-y-3 lg:col-span-7">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <FAQItem
                index={i}
                q={T(item.q, lang)}
                a={T(item.a, lang)}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
