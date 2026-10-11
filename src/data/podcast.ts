/**
 * Podcast episode artwork. Replace these files in `public/images/` with your
 * own stills to use the real frames from your show.
 */
export interface PodcastEpisode {
  image: string;
  title: { ar: string; en: string };
  guest: { ar: string; en: string };
  role: { ar: string; en: string };
  duration: string;
  featured?: boolean;
}

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    image: "/images/podcast-1.jpg",
    title: { ar: "بناء علامة شخصية تُرى", en: "Building a personal brand that gets seen" },
    guest: { ar: "ضيف الحلقة", en: "Episode guest" },
    role: { ar: "رجل أعمال", en: "Business leader" },
    duration: "42:18",
    featured: true,
  },
  {
    image: "/images/podcast-2.jpg",
    title: { ar: "الإعلام الطبي والثقة", en: "Medical media and trust" },
    guest: { ar: "ضيف الحلقة", en: "Episode guest" },
    role: { ar: "أخصائي طبي", en: "Medical specialist" },
    duration: "38:05",
  },
  {
    image: "/images/podcast-3.jpg",
    title: { ar: "من الهواية إلى الاحتراف", en: "From hobby to profession" },
    guest: { ar: "ضيف الحلقة", en: "Episode guest" },
    role: { ar: "مصوّر فوتوغرافي", en: "Photographer" },
    duration: "51:32",
  },
];
