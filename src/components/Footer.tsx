import { useLang } from "../i18n";
import { BRAND, FOOTER_COPY, FOOTER_LINKS, NAV_LINKS, T } from "../data/content";
import Icon from "./Icon";
import type { IconName } from "./Icon";

const SOCIAL_ICONS: Record<string, IconName> = {
  instagram: "instagram",
  whatsapp: "whatsapp",
  mail: "mail",
};

export default function Footer() {
  const { lang } = useLang();
  const c = FOOTER_COPY;
  const year = new Date().getFullYear();

  const columns = [
    { title: T(c.studio, lang), links: NAV_LINKS.slice(0, 3) },
    { title: T(c.explore, lang), links: NAV_LINKS.slice(3, 6) },
    { title: T(c.more, lang), links: [...NAV_LINKS.slice(6), ...FOOTER_LINKS] },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070709] pt-20 pb-10">
      <div aria-hidden="true" className="orb -bottom-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 bg-gradient-to-r from-gold/15 via-ember/15 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Back to top">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white to-gold text-sm font-semibold text-ink">
                {BRAND.initials}
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-white">عبدالرحمن حسين</span>
            </a>
            <p className="mt-5 max-w-sm text-pretty font-serif text-2xl italic leading-snug text-zinc-300">
              {T(c.tagline, lang)}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-loose text-zinc-500">{T(c.about, lang)}</p>

            <div className="mt-8 flex items-center gap-3">
              {BRAND.socials.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target={s.key === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={T(s.label, lang)}
                  className="glass flex h-11 w-11 items-center justify-center rounded-xl text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:text-gold hover:shadow-lg hover:shadow-gold/10"
                >
                  <Icon name={SOCIAL_ICONS[s.key]} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5 lg:col-start-6">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
                      >
                        <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-3" aria-hidden="true" />
                        {T(link.label, lang)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{T(c.bookings, lang)}</h3>
            <a
              href={`mailto:${BRAND.email}`}
              dir="ltr"
              className="mt-5 block break-all text-sm text-zinc-300 transition-colors hover:text-white"
            >
              {BRAND.email}
            </a>
            <div className="mt-4 flex flex-wrap gap-2">
              {BRAND.socials
                .filter((s) => s.key !== "mail")
                .map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-gold"
                  >
                    <Icon name={s.key} className="h-4 w-4" />
                    {T(s.label, lang)}
                  </a>
                ))}
            </div>
            <a
              href="#contact"
              className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              {T(c.start, lang)}
              <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} عبدالرحمن حسين. {T(c.rights, lang)}
          </p>
          <div className="flex items-center gap-6">
            {c.legal.map((item, i) => (
              <a key={i} href="#top" className="transition-colors hover:text-white">
                {T(item, lang)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
