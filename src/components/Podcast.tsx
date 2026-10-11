import { useState } from "react";
import type { FormEvent } from "react";
import { useLang } from "../i18n";
import { PODCAST_COPY, T } from "../data/content";
import { PODCAST_EPISODES } from "../data/podcast";
import Icon from "./Icon";
import Reveal from "./Reveal";

const PLATFORMS = [
  { key: "spotify", label: "Spotify", href: "#" },
  { key: "apple", label: "Apple Podcasts", href: "#" },
  { key: "anghami", label: "Anghami", href: "#" },
  { key: "youtube", label: "YouTube", href: "#" },
];

export default function Podcast() {
  const { lang } = useLang();
  const c = PODCAST_COPY;
  const [subscribed, setSubscribed] = useState(false);

  const featured = PODCAST_EPISODES.find((e) => e.featured) ?? PODCAST_EPISODES[0];
  const rest = PODCAST_EPISODES.filter((e) => e !== featured);

  const handleNotify = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("podcast-email") as HTMLInputElement | null;
    if (!input?.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) return;
    setSubscribed(true);
    e.currentTarget.reset();
  };

  return (
    <section id="podcast" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="orb right-[-8rem] top-10 h-[28rem] w-[28rem] bg-gradient-to-br from-indigo-500/20 to-gold/20" style={{ animationDelay: "-4s" }} />
      <div aria-hidden="true" className="orb -left-24 bottom-0 h-72 w-72 bg-gradient-to-tr from-ember/20 to-transparent" style={{ animationDelay: "-11s" }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                <span className="flex items-end gap-0.5" aria-hidden="true">
                  <span className="h-3 w-0.5 rounded-full bg-gold" />
                  <span className="h-4 w-0.5 rounded-full bg-gold" />
                  <span className="h-2 w-0.5 rounded-full bg-gold" />
                </span>
                {T(c.eyebrow, lang)}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {T(c.titleA, lang)}{" "}
                <em className="text-gradient font-serif font-normal italic">{T(c.titleB, lang)}</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-lg text-pretty text-base leading-loose text-zinc-400 sm:text-lg">
                {T(c.description, lang)}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold">
                  {T(c.guestCta, lang)}
                  <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
                </a>
                <span className="text-sm text-zinc-500">{T(c.platforms, lang)}</span>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-4 flex flex-wrap gap-2">
                {PLATFORMS.map((p) => (
                  <a
                    key={p.key}
                    href={p.href}
                    aria-label={p.label}
                    className="glass rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                  >
                    {p.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Featured episode */}
          <div className="lg:col-span-7">
            <Reveal delay={160}>
              <article className="glass group relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
                <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />

                <p className="relative mb-4 text-xs uppercase tracking-[0.2em] text-gold">{T(c.featured, lang)}</p>

                <div className="relative grid gap-5 sm:grid-cols-5">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 sm:col-span-3">
                    <img
                      src={featured.image}
                      alt={T(featured.title, lang)}
                      loading="lazy"
                      decoding="async"
                      className="img-zoom aspect-[4/5] w-full object-cover sm:aspect-auto sm:h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 end-3 rounded-lg bg-black/70 px-2.5 py-1 text-xs font-medium tabular-nums text-white backdrop-blur">
                      {featured.duration}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between gap-4 sm:col-span-2">
                    <div>
                      <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                        {T(featured.title, lang)}
                      </h3>
                      <p className="mt-3 text-sm text-zinc-400">{T(featured.role, lang)}</p>
                    </div>

                    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-ember text-ink">
                        <Icon name="users" className="h-5 w-5" />
                      </span>
                      <span className="text-sm text-zinc-300">{T(featured.guest, lang)}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>

        {/* Episode grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {rest.map((episode, i) => (
            <Reveal key={i} delay={i * 130}>
              <article className="group glass flex h-full gap-4 overflow-hidden rounded-3xl p-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 sm:gap-5 sm:p-4">
                <div className="relative w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:w-36">
                  <img
                    src={episode.image}
                    alt={T(episode.title, lang)}
                    loading="lazy"
                    decoding="async"
                    className="img-zoom aspect-square h-full w-full object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-between gap-3 py-1">
                  <div>
                    <span className="inline-block rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gold">
                      {episode.duration}
                    </span>
                    <h3 className="mt-2.5 text-base font-semibold leading-snug text-white sm:text-lg">
                      {T(episode.title, lang)}
                    </h3>
                    <p className="mt-1.5 truncate text-sm text-zinc-400">{T(episode.role, lang)}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors group-hover:text-gold">
                    {T(c.listen, lang)}
                    <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Notify form */}
        <Reveal delay={120} className="mt-8">
          <div className="glass rounded-3xl p-6 sm:p-7">
            <h3 className="text-base font-semibold text-white">{T(c.notify, lang)}</h3>
            {subscribed ? (
              <p role="status" className="mt-4 flex items-center gap-2 text-sm text-emerald-300">
                <Icon name="check" className="h-4 w-4" />
                {T(c.notifyDone, lang)}
              </p>
            ) : (
              <form onSubmit={handleNotify} noValidate className="mt-4 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="podcast-email" className="sr-only">
                  {T(c.emailPlaceholder, lang)}
                </label>
                <input
                  id="podcast-email"
                  name="podcast-email"
                  type="email"
                  dir="ltr"
                  placeholder={T(c.emailPlaceholder, lang)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-zinc-500 transition-all duration-300 hover:border-white/20 focus:border-gold/50 focus:bg-white/[0.07] focus:outline-none focus:ring-4 focus:ring-gold/10"
                />
                <button type="submit" className="btn-primary shrink-0 rounded-xl px-6 py-3 text-sm font-semibold">
                  {T(c.notifyCta, lang)}
                </button>
              </form>
            )}
            <p className="mt-3 text-xs text-zinc-500">{T(c.notifyPrivacy, lang)}</p>
          </div>
        </Reveal>

        {/* Coming up */}
        <Reveal delay={120} className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">{T(c.coming, lang)}</h3>
            <p className="max-w-md text-sm leading-loose text-zinc-500">{T(c.comingNote, lang)}</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {c.comingItems.map((item, i) => (
            <Reveal key={i} delay={i * 110}>
              <div className="group glass flex h-full items-start gap-4 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-ember/10 text-gold ring-1 ring-inset ring-gold/20 transition-transform duration-500 group-hover:scale-110">
                  <Icon name="bolt" className="h-5 w-5" />
                </span>
                <div>
                  <span className="inline-block rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-zinc-400">
                    {T(item.tag, lang)}
                  </span>
                  <h4 className="mt-2.5 text-base font-semibold leading-snug text-white">{T(item.title, lang)}</h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
