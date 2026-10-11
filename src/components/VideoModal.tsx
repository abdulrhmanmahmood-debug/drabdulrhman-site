import { useEffect } from "react";
import { useLang } from "../i18n";
import { videoEmbedUrl, videoWatchUrl } from "../data/videos";
import type { VideoItem } from "../data/videos";
import Icon from "./Icon";

interface VideoModalProps {
  video: VideoItem;
  onClose: () => void;
}

/**
 * Plays a Google Drive video inside an iframe. Drive blocks direct <video>
 * hot-linking, so the embed endpoint is the reliable way to stream it while
 * keeping the file in the photographer's own Drive.
 */
export default function VideoModal({ video, onClose }: VideoModalProps) {
  const { lang } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title[lang]}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl sm:p-6"
      onClick={onClose}
    >
      <div className="w-full max-w-5xl animate-[rise_0.6s_cubic-bezier(0.16,1,0.3,1)]" onClick={(e) => e.stopPropagation()}>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black sm:rounded-3xl">
          <div className="relative aspect-video w-full">
            <iframe
              src={videoEmbedUrl(video.id)}
              title={video.title[lang]}
              allow="autoplay; fullscreen"
              allowFullScreen
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{video.category[lang]}</p>
            <p className="mt-1 text-lg font-medium text-white">{video.title[lang]}</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={videoWatchUrl(video.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Drive
              <Icon name="arrow" className="h-4 w-4 rtl:-scale-x-100" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="btn-primary flex h-11 w-11 items-center justify-center rounded-xl"
              aria-label="Close"
            >
              <Icon name="plus" className="h-5 w-5 rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
