import { driveImage } from "./content";

/**
 * Real photographs taken from the "Cam photo sessions" folder of the
 * photographer's Google Drive archive. File IDs point at the original
 * uploads and are served through Google's thumbnail proxy.
 */
export interface PortfolioItem {
  id: string;
  /** Source file name in Drive, used as a natural caption. */
  file: string;
  tag: "sessions" | "recent";
}

const RAW: { id: string; file: string; recent?: boolean }[] = [
  { id: "1hWbB7hnfcrYNcJZ6-JRsnmuPfIV9akwC", file: "7S3A0109.jpeg" },
  { id: "1YVPH6w5cBfCx8hBdMvIg0ebxGgZdCPeM", file: "7S3A0124.jpeg" },
  { id: "1Ap4XqzIqHO8YGZAJrmArYJV8DDT2Wuig", file: "7S3A0128.jpeg" },
  { id: "1QEqLQUySH8b_3p9Dh36FBxfFLlnxRBnB", file: "7S3A0155.jpeg" },
  { id: "1zMSQy-vrdwYQFB_T-OD1WSCLhm6Yy1Wz", file: "7S3A0590.jpeg", recent: true },
  { id: "1VgolmeqlclXYaDrXwdQB_tqKsqgV4hnZ", file: "7S3A0594.jpeg" },
  { id: "1BJP_K_03bXg0ds0DkUTklQlJwEh7bzjb", file: "7S3A0595.jpeg" },
  { id: "1QUiBdxwX0SrT7ofHMkRir__BQe9iInII", file: "7S3A0600.jpeg" },
  { id: "1ST6AJJu2E79f0PohQdyHDX8qv-CtqnkT", file: "7S3A0606.jpeg" },
  { id: "1G50Vbgr9-IV-cngDE8bOm_GeJSiYwPDe", file: "7S3A0614.jpeg" },
  { id: "1J053drN7zUauXECGUlSRUcxe49l0jHQP", file: "7S3A2221.jpeg", recent: true },
  { id: "1KDQ-bIC_w7LDMegIKFk4XYgI33HDqbXP", file: "7S3A2230.jpeg" },
  { id: "1I0NQCLC38pBJ4rGfOV3mg0q2Pzz8UqGA", file: "7S3A9893.jpeg" },
  { id: "13t2VwuA-yXQ6GNxA6IEZmFPuRednQy5H", file: "7S3A9897.jpeg" },
  { id: "1opBX1qkAzWijw3w8OX-g1kCVAEDkHtTL", file: "7S3A9943.jpeg", recent: true },
  { id: "1Ucc_QgaB3aNmPN0T9viRjelmJzOFk4LP", file: "7S3A9952.jpeg" },
  { id: "1l3_OgEHtHYhT8tdK-SOGD0T8pz41154_", file: "IMG_0261.JPG", recent: true },
  { id: "1vJtBZwb5FBCZP1JgdH0Jw_DiuLHLHXm6", file: "IMG_0262.JPG" },
  { id: "1jisL8qlLgCpa639eF77bMnvXVYWv9z_p", file: "IMG_0263.JPG" },
  { id: "1hNniDtGf5Y22YseqfHl-nACNe3_H6IdL", file: "IMG_0265.JPG" },
  { id: "1iv5FcWeZhoojyIHnOku6w0RUw9__zges", file: "IMG_0267.JPG", recent: true },
  { id: "1FFu9aqjAPtmQwprr65B9UG7ke61bO58R", file: "IMG_0268.JPG" },
  { id: "1f3O2nBnWT65bd2zyzPZFhBGXFDO10TzX", file: "IMG_0269.JPG" },
  { id: "1-mTUHAw7DOTZR8Ap0EnMMlFR0pwDkvct", file: "7S3A0143.jpeg" },
];

export const PORTFOLIO: PortfolioItem[] = RAW.map(({ id, file, recent }) => ({
  id,
  file,
  tag: recent ? "recent" : "sessions",
}));

export const HERO_IMAGE_ID = "1hWbB7hnfcrYNcJZ6-JRsnmuPfIV9akwC";
export const HERO_IMAGE = driveImage(HERO_IMAGE_ID, 1000);
/** Local fallback shown if Google Drive is unreachable. */
export const HERO_FALLBACK = "/images/hero.jpg";

export const galleryImage = (item: PortfolioItem, width = 800) => driveImage(item.id, width);
