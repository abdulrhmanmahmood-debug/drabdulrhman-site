import type { ReactNode } from "react";
import { useLang } from "../i18n";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const { dir } = useLang();
  const alignment = align === "center" ? "mx-auto text-center items-center" : `text-start items-start ${dir}`;

  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${alignment}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="text-balance text-4xl font-medium leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className="text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
