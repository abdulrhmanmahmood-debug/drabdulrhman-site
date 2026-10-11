import { useState } from "react";
import type { FormEvent } from "react";
import { useLang } from "../i18n";
import { BRAND, CTA_COPY, T } from "../data/content";
import Icon from "./Icon";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export default function CTA() {
  const { lang, isAr } = useLang();
  const c = CTA_COPY;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();

    if (!name) {
      setStatus("error");
      setError(T(c.errorName, lang));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError(T(c.errorEmail, lang));
      return;
    }

    const phone = String(data.get("phone") ?? "").trim();
    const project = String(data.get("project") ?? "");
    const message = String(data.get("message") ?? "").trim();

    setError("");
    setStatus("submitting");

    // Opens the visitor's mail app with every field pre-filled, addressed to you.
    const subject = isAr ? `طلب تصوير جديد من ${name} — ${project}` : `New photography request from ${name} — ${project}`;
    const body = isAr
      ? `الاسم: ${name}\nالبريد: ${email}\nالجوال: ${phone || "—"}\nنوع المشروع: ${project}\n\nتفاصيل المشروع:\n${message || "—"}`
      : `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nProject type: ${project}\n\nProject details:\n${message || "—"}`;

    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => setStatus("success"), 400);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder:text-zinc-500 transition-all duration-300 hover:border-white/20 focus:border-gold/50 focus:bg-white/[0.07] focus:outline-none focus:ring-4 focus:ring-gold/10";

  const contact = (s: (typeof BRAND.socials)[number]) => (
    <a
      key={s.key}
      href={s.href}
      target={s.key === "mail" ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:bg-white/[0.06]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-ember/10 text-gold ring-1 ring-inset ring-gold/20 transition-transform duration-500 group-hover:scale-110">
        <Icon name={s.key} className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs uppercase tracking-[0.16em] text-zinc-500">{T(s.label, lang)}</span>
        <span className="block truncate text-sm font-medium text-white" dir={s.key === "mail" ? "ltr" : "auto"}>
          {s.key === "mail" ? BRAND.email : T(s.label, lang)}
        </span>
      </span>
      <Icon name="arrow" className="h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
    </a>
  );

  return (
    <section id="contact" className="relative scroll-mt-24 px-3 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-[#0c0c0f] to-zinc-900 px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
        <div aria-hidden="true" className="orb -left-24 -top-24 h-96 w-96 bg-gradient-to-br from-gold/40 to-ember/30" />
        <div aria-hidden="true" className="orb -bottom-32 right-0 h-96 w-96 bg-gradient-to-tl from-ember/30 to-indigo-500/20" style={{ animationDelay: "-9s" }} />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="relative grid items-start gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                <span className="relative flex h-2 w-2">
                  <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden="true" />
                  <span className="relative h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                </span>
                {T(c.badge, lang)}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {T(c.titleA, lang)}{" "}
                <em className="text-gradient font-serif font-normal italic">{T(c.titleB, lang)}</em>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-lg text-pretty text-base leading-loose text-zinc-400 sm:text-lg">
                {T(c.description, lang)}
              </p>
            </Reveal>
            <Reveal delay={360}>
              <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                {c.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-gold" />
                    {T(point, lang)}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Direct contact details */}
            <Reveal delay={440} className="mt-9">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{T(c.direct, lang)}</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:max-w-lg">
                {BRAND.socials.map((s) => contact(s))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={200}>
              <form onSubmit={handleSubmit} noValidate aria-describedby="form-status" className="glass rounded-3xl p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                      {T(c.name, lang)}
                    </label>
                    <input id="name" name="name" type="text" autoComplete="name" placeholder={T(c.namePlaceholder, lang)} className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                      {T(c.email, lang)}
                    </label>
                    <input id="email" name="email" type="email" autoComplete="email" dir="ltr" placeholder={T(c.emailPlaceholder, lang)} className={inputClass} />
                  </div>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-zinc-300">
                      {T(c.phone, lang)}
                    </label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" dir="ltr" inputMode="tel" placeholder={T(c.phonePlaceholder, lang)} className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project" className="text-sm font-medium text-zinc-300">
                      {T(c.projectType, lang)}
                    </label>
                    <select
                      id="project"
                      name="project"
                      defaultValue={isAr ? c.projectOptions[0].ar : c.projectOptions[0].en}
                      className={`${inputClass} appearance-none bg-[length:1rem] bg-[position:right_1rem_center] bg-no-repeat pe-10 rtl:bg-[position:left_1rem_center]`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2'><path d='m6 9 6 6 6-6'/></svg>\")",
                      }}
                    >
                      {c.projectOptions.map((option, i) => (
                        <option key={i} value={T(option, lang)} className="bg-zinc-900">
                          {T(option, lang)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    {T(c.message, lang)} <span className="text-zinc-500">{T(c.messageOptional, lang)}</span>
                  </label>
                  <textarea id="message" name="message" rows={4} placeholder={T(c.messagePlaceholder, lang)} className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold disabled:cursor-wait disabled:opacity-70 sm:text-base"
                >
                  {status === "submitting" ? T(c.submitting, lang) : T(c.submit, lang)}
                  {status !== "submitting" && <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />}
                </button>

                <p
                  id="form-status"
                  role="status"
                  aria-live="polite"
                  className={`mt-4 min-h-[1.5rem] text-center text-sm leading-relaxed transition-colors duration-300 ${
                    status === "error" ? "text-rose-300" : status === "success" ? "text-emerald-300" : "text-zinc-500"
                  }`}
                >
                  {status === "success" ? T(c.success, lang) : status === "error" ? error : T(c.privacy, lang)}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
