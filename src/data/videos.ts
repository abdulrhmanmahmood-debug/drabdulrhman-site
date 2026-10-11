import { driveImage } from "./content";

/**
 * Real videos pulled from the "Personal videographer" folder of the
 * photographer's Google Drive archive.
 *
 * Drive blocks direct <video> hot-linking, so playback uses Google's own
 * embed endpoint (`/file/d/{id}/preview`) inside an iframe, and posters use
 * the thumbnail proxy. Each card links back to Drive as a fallback.
 */
export interface VideoItem {
  id: string;
  title: { ar: string; en: string };
  category: { ar: string; en: string };
  duration: string;
  date: string;
  /** Medical work is surfaced in its own dedicated section. */
  tag: "reel" | "intro" | "medical";
}

const RAW: VideoItem[] = [
  {
    id: "19qCcng5PBw77zftbf633c_C1KOlaznkA",
    title: { ar: "جلسة تصوير كاملة", en: "A full shoot session" },
    category: { ar: "تصوير شخصي", en: "Personal film" },
    duration: "0:45",
    date: "2025-10-18",
    tag: "reel",
  },
  {
    id: "1jZD5nnrn-61wrlsgNNmknY9z4imxc0Q0",
    title: { ar: "لحظات من الجلسات", en: "Moments on set" },
    category: { ar: "تصوير شخصي", en: "Personal film" },
    duration: "0:38",
    date: "2025-10-16",
    tag: "reel",
  },
  {
    id: "1lo-dmmRkXFKGAt_JixiGU-eR__b5VaEr",
    title: { ar: "كواليس التصوير", en: "Behind the camera" },
    category: { ar: "تصوير شخصي", en: "Personal film" },
    duration: "0:52",
    date: "2025-10-16",
    tag: "reel",
  },
  {
    id: "1V5kfWopsMWtptcn78EnYkd5keKRKqbCl",
    title: { ar: "جلسة سابقة", en: "An earlier session" },
    category: { ar: "تصوير شخصي", en: "Personal film" },
    duration: "0:41",
    date: "2025-04-12",
    tag: "reel",
  },
  {
    id: "1A1Pc4UhDqVQBcGhoQACWJvVGwHKI-jSP",
    title: { ar: "فيديو تعريفي", en: "Introduction film" },
    category: { ar: "تعريفي", en: "Introduction" },
    duration: "1:12",
    date: "2025-04-12",
    tag: "intro",
  },
];

export const VIDEOS: VideoItem[] = RAW;

/** The single medical film in the archive — a dental patient-education piece. */
export const MEDICAL_VIDEO: VideoItem = {
  id: "1KOdWxBCLFGdeYYDqyju4M3_4lYBo5xSf",
  title: { ar: "هل معجون الأسنان يضر بأسنان طفلي؟", en: "Does toothpaste harm my child's teeth?" },
  category: { ar: "محتوى طبي · عيادة أسنان", en: "Medical content · Dental clinic" },
  duration: "1:30",
  date: "2025-04-12",
  tag: "medical",
};

export const videoPoster = (id: string, width = 800) => driveImage(id, width);
export const videoEmbedUrl = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
export const videoWatchUrl = (id: string) => `https://drive.google.com/file/d/${id}/view`;
