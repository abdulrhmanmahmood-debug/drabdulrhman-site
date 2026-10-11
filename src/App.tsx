import { useEffect, useState } from "react";
import Psychology from "./sites/Psychology";
import Photography from "./sites/Photography";
import Icon from "./components/Icon";

type Site = "psychology" | "photography";

/** Hash router so both landing pages live in one deployed file. */
function useHashRoute(): [Site, (s: Site) => void] {
  const read = (): Site => (window.location.hash.replace("#/", "") === "photography" ? "photography" : "psychology");

  const [site, setSite] = useState<Site>(read);

  useEffect(() => {
    const onHash = () => setSite(read());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (next: Site) => {
    window.location.hash = next === "photography" ? "#/photography" : "#/";
  };

  return [site, navigate];
}

/** Small floating switcher between the two landing pages. */
function SiteSwitcher({ site, onSwitch }: { site: Site; onSwitch: (s: Site) => void }) {
  const other = site === "psychology" ? "photography" : "psychology";
  const isAr = document.documentElement.lang === "ar";
  const label = isAr ? (other === "photography" ? "موقع التصوير" : "موقع علم النفس") : other === "photography" ? "Photography site" : "Psychology site";

  return (
    <button
      type="button"
      onClick={() => onSwitch(other)}
      className="glass fixed bottom-4 start-4 z-40 hidden items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-gold md:flex"
    >
      <Icon name="layers" className="h-4 w-4" />
      {label}
    </button>
  );
}

export default function App() {
  const [site, setSite] = useHashRoute();

  useEffect(() => {
    document.title =
      site === "psychology"
        ? "عبدالرحمن حسين · أخصائي نفسي إكلينيكي وجنائي"
        : "عبدالرحمن حسين · مصور فوتوغرافي محترف";
    window.scrollTo(0, 0);
  }, [site]);

  return (
    <>
      {site === "psychology" ? <Psychology /> : <Photography />}
      <SiteSwitcher site={site} onSwitch={setSite} />
    </>
  );
}
