# دليل تعديل موقع عبدالرحمن حسين

هذا الدليل يشرح مكان كل جزء من الموقع لتعديله بسهولة.
كل النصوص العربية والإنجليزية موجودة في ملف واحد أساسي.

---

## 1. ملف النصوص الرئيسي

**`src/data/content.ts`** — يحتوي على **كل** نصوص الموقع بالعربية والإنجليزية معاً.

الصيغة المستخدمة هي:

```ts
bi("النص العربي", "English text")
```

> عدّل النص العربي فقط واتح ENGLISH كما هو، أو العكس.

### محتويات الملف بالترتيب

| القسم في الموقع | اسم المتغير في الملف |
|---|---|
| روابط القائمة العلوية | `NAV_LINKS` |
| روابط التذييل الإضافية | `FOOTER_LINKS` |
| الاسم وروابط التواصل | `BRAND` |
| القسم الرئيسي (Hero) | `COPY.hero` |
| شريط الإحصائيات | `COPY.proof` |
| قسم «عن المصوّر» | `ABOUT_COPY` |
| بطاقات الخدمات | `COPY.services` |
| قسم الأعمال | `COPY.portfolio` |
| قسم الفيديوهات | `VIDEO_COPY` |
| قسم البودكاست | `PODCAST_COPY` |
| قسم التصوير الطبي | `MEDICAL_COPY` |
| طريقة العمل + المزايا | `COPY.process` |
| آراء العملاء | `COPY.testimonials` |
| الباقات والأسعار | `COPY.pricing` |
| الأسئلة الشائعة | `FAQ_ITEMS` + `FAQ_HEADING` |
| نموذج الحجز | `CTA_COPY` |
| التذييل | `FOOTER_COPY` |

---

## 2. روابط التواصل الاجتماعية

في `BRAND` داخل `src/data/content.ts`:

```ts
export const BRAND = {
  initials: "AH",
  socials: [
    { key: "instagram", href: "https://instagram.com/" },   // ← ضع حسابك
    { key: "youtube",   href: "https://youtube.com/" },     // ← ضع قناتك
    { key: "whatsapp",  href: "https://wa.me/966500000000" }, // ← ضع رقمك
    { key: "mail",      href: "mailto:info@abdulrhmanhussien.com" }, // ← ضع بريدك
  ],
};
```

---

## 3. الصور

ضع صورك في مجلد `public/images/` بهذه الأسماء بالضبط:

| الملف | مكان ظهوره |
|---|---|
| `portrait.jpg` | القسم الرئيسي + قسم «عن المصوّر» |
| `podcast-1.jpg` | الحلقة المميزة في البودكاست |
| `podcast-2.jpg` | حلقة الإعلام الطبي |
| `podcast-3.jpg` | حلقة من الهواية إلى الاحتراف |
| `hero.jpg` | صورة احتياطية للقسم الرئيسي |

**المقاسات المفضلة:**
- `portrait.jpg` → عمودي (نسبة 4:5)، عرض 1000px على الأقل
- `podcast-*.jpg` → مربع أو أفقي، عرض 800px على الأقل

---

## 4. الصور والفيديوهات من Google Drive

### صور الأعمال — `src/data/portfolio.ts`
```ts
const RAW: { id: string; file: string; recent?: boolean }[] = [
  { id: "1hWbB7hnfcrYNcJZ6-JRsnmuPfIV9akwC", file: "7S3A0109.jpeg" },
  // ↑ id = معرّف الملف من Drive
  // ↑ file = اسم الملف (يظهر كتعليق تحت الصورة)
];
```

### الفيديوهات — `src/data/videos.ts`
```ts
{
  id: "19qCcng5PBw77zftbf633c_C1KOlaznkA",
  title: { ar: "جلسة تصوير كاملة", en: "A full shoot session" },
  category: { ar: "تصوير شخصي", en: "Personal film" },
  duration: "0:45",
  date: "2025-10-18",
  tag: "reel",
}
```

### الفيديو الطبي — `MEDICAL_VIDEO` في نفس الملف.

> **كيف تجد معرّف الملف؟** افتح الملف في Drive، الرابط سيكون:
> `https://drive.google.com/file/d/`**`1AbCdEf...`**`/view`
> انسخ الجزء الملوّن وضعه في `id`.

### رابط المجلد الرئيسي — `DRIVE_FOLDER_ID` في `src/data/content.ts`

---

## 5. حلقات البودكاست — `src/data/podcast.ts`

```ts
{
  image: "/images/podcast-1.jpg",
  title:   { ar: "بناء علامة شخصية تُرى", en: "..." },
  guest:   { ar: "ضيف الحلقة", en: "..." },   // ← ضع اسم الضيف
  role:    { ar: "رجل أعمال", en: "..." },    // ← ضع صفته
  duration: "42:18",
  featured: true,   // ← حلقة واحدة فقط تكون مميزة
}
```

### روابط منصات الاستماع — `PLATFORMS` في `src/components/Podcast.tsx`
```ts
const PLATFORMS = [
  { key: "spotify", label: "Spotify", href: "#" },  // ← ضع رابطك
  ...
];
```

---

## 6. الإعدادات العامة

### عنوان الصفحة والوصف — `index.html`
```html
<title>عبدالرحمن حسين · مصور فوتوغرافي محترف</title>
<meta name="description" content="..." />
<meta property="og:image" content="/images/portrait.jpg" />
```

### اللغة الافتراضية — `src/i18n.tsx`
```ts
const [lang, setLang] = useState<Lang>("ar");   // "ar" أو "en"
```

### الألوان والخطوط — `src/index.css`
```css
@theme {
  --font-sans: "Tajawal", ...;   /* الخط العربي */
  --font-serif: "Amiri", ...;    /* خط العبارات المميزة */
  --color-gold: #f5c77e;         /* اللون الذهبي */
  --color-ember: #e8865a;        /* اللون البرتقالي */
}
```

---

## 7. نموذج الحجز — `src/components/CTA.tsx`

النموذج حالياً **لا يرسل بريداً فعلياً**، يعرض رسالة نجاح فقط.

لربطه بخدمة حقيقية، ابحث عن هذا الجزء:

```ts
setStatus("submitting");
// Replace this timeout with a real request (e.g. fetch to your form endpoint).
window.setTimeout(() => {
  setStatus("success");
  form.reset();
}, 900);
```

**خدمات مجانية مقترحة:**
- [Formspree](https://formspree.io) — أسهل خيار
- [Web3Forms](https://web3forms.com) — بدون تسجيل
- [Getform](https://getform.io)

---

## 8. قائمة ما يجب استبداله إلزامياً

| # | المهمة | المكان |
|---|---|---|
| 1 | صورتك الشخصية | `public/images/portrait.jpg` |
| 2 | صور البودكاست | `public/images/podcast-1/2/3.jpg` |
| 3 | **آراء العملاء** (وهمية) | `COPY.testimonials` |
| 4 | **الاقتباس في «عن المصوّر»** (من تأليفي) | `ABOUT_COPY.quote` |
| 5 | **القصة التعريفية** | `ABOUT_COPY.bio` |
| 6 | روابط التواصل | `BRAND.socials` |
| 7 | روابط منصات البودكاست | `PLATFORMS` في `Podcast.tsx` |
| 8 | أسماء ضيوف البودكاست | `src/data/podcast.ts` |
| 9 | ربط نموذج الحجز | `src/components/CTA.tsx` |

---

## 9. النشر والحصول على الرابط

المشروع يُنتج ملفاً واحداً: **`dist/index.html`**

### أسهل طريقة (بدون أوامر):

1. اذهب إلى [app.netlify.com/drop](https://app.netlify.com/drop)
2. اسحب مجلد `dist` وأفلته في الصفحة
3. ستحصل فوراً على رابط قصير مثل:
   `https://your-site.netlify.app`

### بدائل:
- **Vercel** — [vercel.com](https://vercel.com) → اسحب مجلد `dist`
- **GitHub Pages** — ارفع محتوى `dist` إلى فرع `gh-pages`
- **Cloudflare Pages** — [pages.cloudflare.com](https://pages.cloudflare.com)

### لنطاق مخصص (اختياري):
اشترِ نطاقاً مثل `abdulrhmanhussien.com` من Namecheap أو GoDaddy،
واربطه من إعدادات الموقع في Netlify/Vercel.

---

## 10. بنية المشروع

```
public/images/          ← كل الصور
src/
  App.tsx               ← ترتيب أقسام الصفحة
  i18n.tsx              ← اللغتان + الاتجاه RTL
  index.css             ← الألوان والخطوط والحركات
  data/
    content.ts          ← ★ كل النصوص (الأهم)
    portfolio.ts        ← صور الأعمال
    videos.ts           ← الفيديوهات
    podcast.ts          ← حلقات البودكاست
  components/           ← 18 مكوّناً (كل قسم صفحة)
```

---

**ملاحظة:** بعد أي تعديل، شغّل `npm run build` لإنتاج النسخة النهائية في مجلد `dist`.
