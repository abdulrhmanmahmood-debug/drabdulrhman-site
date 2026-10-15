import type { Lang } from "../i18n";
import type { IconName } from "../components/Icon";

/** Google Drive root folder that holds all of the photographer's work. */
export const DRIVE_FOLDER_ID = "1-163zijQmQmZxUzOS5tukjGJRZlFL2oC";
export const DRIVE_FOLDER_URL = `https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}`;

/** Google Drive blocks direct hot-linking of originals, so we use its thumbnail proxy. */
export const driveImage = (fileId: string, width = 1200) =>
  `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;

export const BRAND: {
  name: { ar: string; en: string };
  initials: string;
  email: string;
  socials: { key: IconName; label: { ar: string; en: string }; href: string }[];
} = {
  name: { ar: "عبدالرحمن حسين", en: "Abdulrhman Hussien" },
  initials: "AH",
  email: "abdulrhman.mahmood@gmail.com",
  socials: [
    {
      key: "instagram",
      label: { ar: "إنستقرام", en: "Instagram" },
      href: "https://www.instagram.com/kpqqq?vrfl=ank3ZHQ5Z3UxbzMw",
    },
    {
      key: "whatsapp",
      label: { ar: "واتساب", en: "WhatsApp" },
      href: "https://wa.me/qr/N3LCEFEMCRGED1?s=r",
    },
    {
      key: "mail",
      label: { ar: "البريد الإلكتروني", en: "Email" },
      href: "mailto:abdulrhman.mahmood@gmail.com",
    },
  ],
};

type Dict = Record<Lang, string>;
const bi = (ar: string, en: string): Dict => ({ ar, en });

/** Links shown in the sticky navbar (kept short for legibility). */
export const NAV_LINKS: { href: string; label: Dict }[] = [
  { href: "#about", label: bi("عن المصوّر", "About") },
  { href: "#services", label: bi("الخدمات", "Services") },
  { href: "#portfolio", label: bi("الأعمال", "Portfolio") },
  { href: "#videos", label: bi("الفيديوهات", "Videos") },
  { href: "#podcast", label: bi("البودكاست", "Podcast") },
  { href: "#medical", label: bi("التصوير الطبي", "Medical") },
  { href: "#pricing", label: bi("الأسعار", "Pricing") },
];

/** Secondary links surfaced in the footer only. */
export const FOOTER_LINKS: { href: string; label: Dict }[] = [
  { href: "#process", label: bi("طريقة العمل", "Process") },
  { href: "#testimonials", label: bi("آراء العملاء", "Reviews") },
  { href: "#faq", label: bi("الأسئلة الشائعة", "FAQ") },
];

export const COPY = {
  nav: {
    book: bi("احجز جلستك", "Book a session"),
    openMenu: bi("فتح القائمة", "Open menu"),
    closeMenu: bi("إغلاق القائمة", "Close menu"),
    home: bi("الصفحة الرئيسية", "Home"),
  },
  hero: {
    badge: bi("الحجوزات متاحة الآن لموسم الشتاء", "Winter season bookings now open"),
    titleTop: bi("صور تُوقف", "Frames that make"),
    titleBottomA: bi("النظر.", "the world"),
    titleBottomB: bi("مرتين", "look twice."),
    subtitle: bi(
      "عبدالرحمن حسين — مصور فوتوغرافي محترف متخصص في البورتريه، الحملات الإعلانية وجلسات المنتجات. أحوّل فكرتك إلى صور تُروى بها الحكاية.",
      "Abdulrhman Hussien — a professional photographer specialising in portraiture, campaigns and product sessions. I turn your idea into images that tell the story.",
    ),
    ctaPrimary: bi("احجز جلستك الآن", "Book your session"),
    ctaSecondary: bi("استعرض أعمالي", "View my work"),
    ratingLabel: bi("تقييم 5 من 5", "Rated 5 out of 5"),
    rating: bi("من أكثر من 180 عميل", "from 180+ clients"),
    cardAwardLabel: bi("أحدث إنجاز", "Latest milestone"),
    cardAwardValue: bi("جلسات احترافية بالكاميرا", "Professional camera sessions"),
    cardStatTitle: bi("أكثر من 340 مشروع", "340+ projects"),
    cardStatSub: bi("منفّذة داخل وخارج المملكة", "delivered in and beyond Saudi"),
    scroll: bi("تابع النزول", "Scroll"),
    imgAlt: bi("بورتريه للمصور عبدالرحمن حسين أثناء العمل", "Portrait of photographer Abdulrhman Hussien at work"),
  },
  proof: {
    title: bi("مُوصَل إليّ من قِبل فرق إبداعية وعلامات تجارية", "Trusted by creative teams and brands"),
    stats: [
      { value: 340, suffix: "+", label: bi("مشروع منفّذ", "Projects delivered") },
      { value: 27, suffix: "", label: bi("مدينة وموقع تصوير", "Cities & locations") },
      { value: 12, suffix: "", label: bi("سنة خلف العدسة", "Years behind the lens") },
      { value: 9, suffix: "M+", label: bi("وصول جمهور", "Audience reach") },
    ],
  },
  services: {
    eyebrow: bi("الخدمات وأقسام الأعمال", "Services & work categories"),
    titleA: bi("كل ما تحتاجه", "Everything you need"),
    titleB: bi("لتصوير احترافي.", "shot professionally."),
    description: bi(
      "أقسام مبنية على أعمالي الفعلية — اختر ما يناسب مشروعك، أو اطلب باقة مخصصة تجمع أكثر من خدمة.",
      "Categories built from my real body of work — pick what fits your project, or request a custom package.",
    ),
    items: [
      {
        icon: "camera" as const,
        title: bi("جلسات تصوير بالكاميرا", "Cam photo sessions"),
        description: bi(
          "جلسات بورتريه وعائلية وشخصية بكاميرا احترافية، مع توجيه كامل للوقفات والإضاءة.",
          "Portrait, family and personal sessions shot on professional camera with full posing and lighting direction.",
        ),
      },
      {
        icon: "sparkle" as const,
        title: bi("صور فنية بالجوال", "Artistic phone photography"),
        description: bi(
          "لمسة فنية بإضاءة سينمائية وألوان مميزة، مناسبة للمحتوى اليومي وحسابات التواصل.",
          "An artistic touch with cinematic light and distinctive colour, ideal for daily content and social feeds.",
        ),
      },
      {
        icon: "megaphone" as const,
        title: bi("الإعلانات التجارية", "Commercials"),
        description: bi(
          "حملات إعلانية للعلامات والمتاجر: مفهوم إبداعي، تنفيذ منظم، وصور جاهزة للنشر والإعلانات الممولة.",
          "Campaigns for brands and stores: creative concept, organised production, and assets ready for publishing and paid ads.",
        ),
      },
      {
        icon: "video" as const,
        title: bi("مصور شخصي وفيديو", "Personal videographer"),
        description: bi(
          "مصور وفيديوغرافر خاص يرافقك في فعالياتك ورحلاتك ويوثّق يومك بمحتوى احترافي.",
          "A personal photo and video companion for your events and trips, documenting your day professionally.",
        ),
      },
      {
        icon: "layers" as const,
        title: bi("تصوير المنتجات", "Product photography"),
        description: bi(
          "صور منتجات نظيفة وجذابة للمتاجر الإلكترونية والقوائم، بخلفيات وإضاءات متعددة.",
          "Clean, appealing product imagery for e-commerce and catalogues, with varied backdrops and lighting.",
        ),
      },
      {
        icon: "pen" as const,
        title: bi("دورات وتدريب", "Courses & training"),
        description: bi(
          "ورش عملية في التصوير والإضاءة والمونتاج، ومن أساسيات الجوال إلى الاحتراف بالكاميرا.",
          "Hands-on workshops in photography, lighting and editing — from phone basics to professional camera work.",
        ),
      },
    ],
    included: bi("مشمول في كل جلسة", "Included in every session"),
  },
  portfolio: {
    eyebrow: bi("أعمال مختارة", "Selected work"),
    titleA: bi("معرض من", "A portfolio in"),
    titleB: bi("أعمالي الحقيقية.", "quiet motion."),
    all: bi("كل الأعمال", "All work"),
    sessions: bi("جلسات الكاميرا", "Camera sessions"),
    recent: bi("أحدث الإضافات", "Latest"),
    open: bi("عرض الصورة", "Open image"),
    close: bi("إغلاق", "Close"),
    prev: bi("السابق", "Previous"),
    next: bi("التالي", "Next"),
    archive: bi("تصفّح الأرشيف الكامل على Google Drive", "Browse the full archive on Google Drive"),
    archiveHint: bi("الأرشيف مقسّم إلى: جلسات، صور فنية بالجوال، إعلانات، فيديو، ودورات.", "The archive is split into: sessions, artistic phone work, commercials, video and courses."),
    galleryTitle: bi("معرض العميل الخاص", "Private client gallery"),
    galleryIntro: bi("استعرض، اختر، وحمّل صورك في مكان واحد أنيق.", "Review, select and download your images in one elegant place."),
    galleryPoints: [
      bi("معرض محمي بكلمة مرور مع غلاف مخصص", "Password-protected gallery with a custom cover"),
      bi("اختر صورك وعلّق عليها ووافق عليها مباشرة", "Favourite, comment and approve frames in real time"),
      bi("تحميل بالدقة الكاملة وبمقاسات لكل منصة", "Full-resolution downloads sized for every channel"),
    ],
    galleryBar: bi("جاهزة للتحميل · 3 صور", "Ready for download · 3 frames"),
    galleryDownload: bi("تحميل الكل", "Download all"),
    galleryTag: bi("حملة · النسخة الشتوية", "Campaign · Winter edit"),
    gallerySelected: bi("3 مختارة", "3 selected"),
  },
  process: {
    eyebrow: bi("لماذا يبقى العملاء", "Why clients stay"),
    titleA: bi("جلسة هادئة.", "Calm sets."),
    titleB: bi("نتائج واضحة.", "Unmistakable results."),
    description: bi(
      "العمل مع مصور يجب أن يكون بنفس جودة الصور. هذه رحلتك من أول رسالة إلى آخر صورة.",
      "Working with a photographer should feel as considered as the images. Here's your journey from first message to final frame.",
    ),
    benefits: [
      {
        icon: "sparkle" as const,
        title: bi("بصمة بصرية ثابتة", "A consistent visual signature"),
        description: bi("كل صورة تخرج بنفس التدريج اللوني، فتبدو حملتك متناسقة على كل المنصات.", "Every image carries the same colour grade, so your campaign looks cohesive everywhere."),
      },
      {
        icon: "users" as const,
        title: bi("جلسة مريحة ومريحة للجميع", "A set everyone enjoys"),
        description: bi("أوجّهك بالوقفات والتعابير، فتخرج الصور طبيعية دون توتر أو تصرّف.", "I direct posing and expression so the results feel natural, never forced."),
      },
      {
        icon: "calendar" as const,
        title: bi("التزام بالمواعيد", "Built around your timeline"),
        description: bi("مواعيد الإطلاق والمواسم والتعديلات الطارئة تُدار بتواصل واضح وهادئ.", "Launch dates, seasons and last-minute pivots are handled with calm, clear communication."),
      },
      {
        icon: "shield" as const,
        title: bi("حقوق استخدام واضحة", "Clear usage rights"),
        description: bi("عقود وإخلاء جهة ونماذج موثقة في كل مشروع، بدون شروط مخفية.", "Contracts and model releases documented on every project, with no hidden terms."),
      },
    ],
    stepsLabel: bi("طريقة العمل", "The process"),
    stepsTitle: bi("من أول مكالمة إلى آخر صورة", "From first call to final frame"),
    stepsTag: bi("المتوسط 2–4 أسابيع", "Typically 2–4 weeks"),
    steps: [
      { step: "01", title: bi("مكالمة تعارف", "Discovery call"), description: bi("نصف ساعة نفهم فيها هدفك، جمهورك، والإحساس الذي تريده من الصور.", "Thirty minutes to understand your goal, audience and the feeling you want.") },
      { step: "02", title: bi("الخطة الإبداعية", "Creative plan"), description: bi("تستلم لوحة مزاجية، قائمة لقطات، جدولاً زمنياً، وعرض سعر واضح.", "You receive a moodboard, shot list, schedule and a transparent quote.") },
      { step: "03", title: bi("يوم التصوير", "The shoot day"), description: bi("جلسة منظمة بهدوء وتركيز، إضاءة مضبوطة وطاقة إيجابية.", "An organised, focused session with controlled light and positive energy.") },
      { step: "04", title: bi("التدريج والتسليم", "Grade & delivery"), description: bi("الصور المختارة تُسلَّم في معرض خاص جاهزة للنشر والطباعة.", "Hand-graded selects arrive in a private gallery, ready to publish and print.") },
    ],
  },
  testimonials: {
    eyebrow: bi("آراء العملاء", "Client stories"),
    titleA: bi("يثقون بي في اللحظات", "Trusted with the moments"),
    titleB: bi("المهمة.", "that matter."),
    items: [
      {
        quote: bi("عبدالرحمن لا يلتقط صور فقط، بل يبني أجواءً كاملة. حملتنا الشتوية بدت كفيلم، وتضاعف التفاعل في الأسبوع الأول.", "Abdulrhman doesn't just take photographs — he builds an atmosphere. Our winter campaign felt like a film, and engagement doubled in the first week."),
        name: bi("عبدالعزيز الدوسري", "Abdulaziz Al-Dosari"),
        role: bi("المدير الإبداعي · دار الأصيل", "Creative Director · Dar Al-Aseel"),
        initials: "ع",
      },
      {
        quote: bi("أكثر مصور منظم ودقيق وتعاملُه راقٍ. جلسة طويلة مرّت بسهولة، وسلّم العمل قبل الموعد.", "The most composed, precise and genuinely kind photographer we've worked with. A long shoot felt effortless and he delivered early."),
        name: bi("نورة الشمري", "Noura Al-Shammari"),
        role: bi("مديرة العلامة · ساعات هلا", "Head of Brand · Hala Watches"),
        initials: "ن",
      },
      {
        quote: bi("كل صورة مختارة تحكي قصة. حسّه للإضاءة والتكوين نادر — يرى الصورة قبل أن يراها الجميع.", "Every selection told a story. His eye for light and composition is rare — he sees the picture before the room does."),
        name: bi("فيصل القحطاني", "Faisal Al-Qahtani"),
        role: bi("رئيس التحرير · مجلة لوحات", "Editor-in-Chief · Lawhat Magazine"),
        initials: "ف",
      },
      {
        quote: bi("من المكالمة الأولى إلى التدريج النهائي كانت التجربة سلسة. صورة الغلاف ما زالت الأكثر مشاركة في أرشيفنا.", "From the discovery call to the final grade, the process was seamless. Our cover image is still the most-shared in our archive."),
        name: bi("ريم السبيعي", "Reem Al-Subaie"),
        role: bi("المؤسِّسة · نبات", "Founder · Nabatat"),
        initials: "ر",
      },
    ],
  },
  pricing: {
    eyebrow: bi("الأسعار", "Investment"),
    titleA: bi("أسعار على القياس.", "Pricing tailored"),
    titleB: bi("بدون مفاجآت.", "to your project."),
    description: bi(
      "كل مشروع مختلف، لذلك أُعدّ عرض سعر مخصصاً بعد مكالمة تعارف قصيرة نفهم فيها نطاق العمل والاستخدام المطلوب.",
      "Every project is different, so I prepare a custom quote after a short discovery call to understand the scope and usage you need.",
    ),
    custom: bi("حسب الطلب", "Custom quote"),
    customNote: bi("يُحدَّد بعد مكالمة التعارف", "Determined after the discovery call"),
    scopeLabel: bi("نطاق الباقة", "Package scope"),
    mostBooked: bi("الأكثر طلباً", "Most booked"),
    footnote: bi(
      "لا أُنشر أسعاراً ثابتة لأن كل مشروع يختلف في المدة والمواقع وحقوق الاستخدام. تصلك تفاصيل التكلفة كاملة وشفافة قبل أي التزام.",
      "I don't publish fixed rates because every project differs in duration, locations and usage rights. You receive the full cost breakdown transparently before any commitment.",
    ),
    tiers: [
      {
        name: bi("باقة البورتريه", "Portrait Edition"),
        description: bi("جلسة مركزة للأفراد والشخصيات والبورتريه التحريري.", "A focused session for individuals, founders and editorial portraits."),
        scope: bi("جلسة واحدة · نصف يوم", "Single session · half day"),
        cta: bi("اطلب عرض سعر", "Request a quote"),
        features: [
          bi("جلسة تصوير 3 ساعات في الاستوديو أو الموقع", "3-hour studio or location shoot"),
          bi("حتى 25 صورة نهائية مع تعديل احترافي", "Up to 25 retouched final images"),
          bi("تدريج لوني ببصمة خاصة", "Signature colour grade"),
          bi("رخصة استخدام شخصية", "Personal usage licence"),
          bi("معرض مسبق خلال 48 ساعة", "48-hour preview gallery"),
        ],
      },
      {
        name: bi("باقة الحملة الإعلانية", "Campaign Studio"),
        description: bi("إنتاج كامل ليوم واحد لعلامات تحتاج قصة بصرية جاهزة للإطلاق.", "A full-day production for brands that need a launch-ready visual story."),
        scope: bi("يوم إنتاج كامل", "Full production day"),
        featured: true,
        cta: bi("اطلب عرض سعر", "Request a quote"),
        features: [
          bi("يوم إنتاج كامل مع فريق العمل", "Full-day production with crew"),
          bi("توجيه إبداعي ولوحة مزاجية", "Creative direction & moodboard"),
          bi("حتى 80 صورة نهائية معدّلة", "Up to 80 retouched final images"),
          bi("رخصة تجارية لمدة 12 شهراً", "Commercial licence (12 months)"),
          bi("تنسيق الأزياء والمواقع", "Art-directed styling & locations"),
          bi("تسليم سريع خلال 72 ساعة", "Priority 72-hour rush delivery"),
        ],
      },
      {
        name: bi("شراكة الأتيليه", "Atelier Partnership"),
        description: bi("وصول سنوي حصري للعلامات والاستوديوهات التي تريد شريكاً إبداعياً.", "Exclusive annual access for brands and studios that want a creative partner."),
        scope: bi("شراكة سنوية", "Annual partnership"),
        cta: bi("اطلب عرضاً مخصصاً", "Request a proposal"),
        features: [
          bi("أولوية حجز في كل المواسم", "Priority booking across all seasons"),
          bi("ترتيب السفر والإنتاج بالكامل", "Travel & production handled"),
          bi("تطوير مفاهيم غير محدود", "Unlimited concept development"),
          bi("رخص استخدام موسّعة عالمياً", "Extended worldwide licensing"),
          bi("منسّق ومعدّل صور مخصص", "Dedicated producer & retoucher"),
        ],
      },
    ],
  },
} as const;

export const FAQ_ITEMS: { q: Dict; a: Dict }[] = [
  {
    q: bi("هل تسافر للتصوير خارج المدينة؟", "Do you travel for commissions?"),
    a: bi("نعم. أصوّر في مختلف مناطق المملكة ودول الخليج، وأراتش أيضاً خارج المنطقة. تكاليف السفر والإقامة والتصاريح تُذكر بوضوح في عرض السعر قبل أي تأكيد.", "Yes. I shoot across Saudi Arabia and the Gulf, and travel further on request. Travel, accommodation and permits are quoted transparently in your proposal before anything is confirmed."),
  },
  {
    q: bi("قبل كم مدة يجب أن أحجز؟", "How far in advance should I book?"),
    a: bi("الجلسات الشخصية تُحجز عادة قبل 2 إلى 3 أسابيع. أما الحملات الإعلانية فتحتاج 4 إلى 8 أسابيع لترتيب الكاستنق والمواقع والتنسيق. الطلبات العاجلة تُدرس حالة بحالة.", "Portrait sessions are typically booked 2–3 weeks out. Campaign productions need 4–8 weeks for casting, locations and styling. Urgent requests are considered case by case."),
  },
  {
    q: bi("ماذا تشمل رخصة الاستخدام؟", "What does the usage licence cover?"),
    a: bi("كل رخصة تُحدَّد بنوع الوسيلة والمدة والنطاق الجغرافي. الباقات القياسية تشمل النشر على الويب ووسائل التواصل والطباعة لمدة 12 شهراً. الرخص الموسّعة للإعلانات الممولة أو الاستخدام العالمي متاحة عند الطلب.", "Every licence is scoped by media type, territory and duration. Standard packages cover web, social and print for 12 months. Extended licences for paid advertising or global use are available on request."),
  },
  {
    q: bi("هل التعديل والريتاتش مشمول؟", "Is retouching included?"),
    a: bi("نعم. كل صورة نهائية تمر بتدريج لوني خاص وتعديل دقيق داخل الاستوديو. أعمال التركيب الثقيلة أو الدمج تُحسب كإضافة منفصلة حتى لا تدفع إلا لما تحتاجه.", "Yes. Every final image receives a signature colour grade and detailed retouching in-house. Heavy composite work is scoped as an add-on so you only pay for what you need."),
  },
  {
    q: bi("متى أستلم صوري النهائية؟", "When will I receive my final images?"),
    a: bi("يصلك معرض مسبق خلال 48 ساعة من الجلسة، والصور النهائية المعدّلة خلال 10 أيام عمل. تتوفر خدمة التسليم السريع خلال 72 ساعة في باقة الحملة الإعلانية.", "A preview gallery arrives within 48 hours of your shoot, with fully retouched finals delivered within 10 business days. A 72-hour rush option is available on Campaign Studio."),
  },
  {
    q: bi("هل تقدّم دورات تدريبية؟", "Do you offer workshops or mentoring?"),
    a: bi("نعم. أقيم ورشاً بمجموعات صغيرة في الإضاءة، سرد القصة بالصورة، وبناء مسار مهني في التصوير. راسل الاستوديو للانضمام للدفعة القادمة أو لطلب دورة خاصة.", "Yes. I run small-group workshops on lighting, visual storytelling and building a photography career. Email the studio to join the next intake or to request a private session."),
  },
];

export const ABOUT_COPY = {
  eyebrow: bi("عن المصوّر", "About the photographer"),
  titleA: bi("أنا عبدالرحمن،", "I'm Abdulrhman,"),
  titleB: bi("وأروي القصة بالضوء.", "and I tell stories with light."),
  bio: bi(
    "بدأت رحلتي بالكاميرا قبل أكثر من اثني عشر عاماً، وما زال كل مشروع يعلّمني شيئاً جديداً عن الضوء والإنسان واللحظة المناسبة. أصوّر البورتريه والحملات الإعلانية والمحتوى الطبي، وأعمل بأسلوب هادئ ومنظّم يجعل الجلسة مريحة والنتيجة استثنائية.",
    "I started with a camera more than twelve years ago, and every project still teaches me something new about light, people and the right moment. I shoot portraiture, campaigns and medical content, working in a calm, structured way that makes the session comfortable and the result exceptional.",
  ),
  quote: bi(
    "لا أصوّر الوجوه فقط — أصوّر الثقة والإحساس الذي يسبق اللحظة.",
    "I don't just photograph faces — I photograph the confidence and the feeling that comes before the moment.",
  ),
  portraitLabel: bi("صورة شخصية", "Portrait"),
  portraitName: bi("عبدالرحمن حسين · مصوّر فوتوغرافي", "Abdulrhman Hussien · Photographer"),
  portraitAlt: bi(
    "بورتريه أبيض وأسود للمصور عبدالرحمن حسين ممسكاً بكاميرا كانون R6",
    "Black and white portrait of photographer Abdulrhman Hussien holding a Canon R6 camera",
  ),
  floatTitle: bi("خلف العدسة", "Behind the lens"),
  floatSub: bi("كل صورة تبدأ بلحظة صادقة", "Every frame starts with an honest moment"),
  approach: [
    {
      icon: "sun" as const,
      title: bi("ضوء طبيعي أولاً", "Natural light first"),
      description: bi("أبدأ بالإضاءة المتاحة ثم أضيف ما يلزم فقط.", "I start with available light and add only what's needed."),
    },
    {
      icon: "users" as const,
      title: bi("توجيه هادئ", "Calm direction"),
      description: bi("أوجّهك بوقفات طبيعية بدلاً من التصرّف المصطنع.", "I guide you into natural poses, never forced ones."),
    },
    {
      icon: "sparkle" as const,
      title: bi("بصمة مميزة", "A distinct signature"),
      description: bi("تدريج لوني ثابت يجمع كل صورك بروح واحدة.", "A consistent grade that unifies your imagery."),
    },
  ],
  cta: bi("لنعمل معاً", "Let's work together"),
};

export const VIDEO_COPY = {
  eyebrow: bi("فيديوهات من أعمالي", "Video work"),
  titleA: bi("صور تتحرك،", "Motion that carries"),
  titleB: bi("وقصص تُروى.", "the same story."),
  description: bi(
    "لقطات فيديو حقيقية من جلسات التصوير والفعاليات، جاهزة للنشر على منصات التواصل والإعلانات.",
    "Real footage from shoots and events, ready to publish across social platforms and paid campaigns.",
  ),
  all: bi("كل الفيديوهات", "All videos"),
  reels: bi("جلسات التصوير", "Shoot sessions"),
  intro: bi("فيديو تعريفي", "Introduction"),
  play: bi("تشغيل الفيديو", "Play video"),
  close: bi("إغلاق", "Close"),
  watch: bi("شاهد على Drive", "Watch on Drive"),
  archive: bi("تصفّح مجلد الفيديو كاملاً", "Browse the full video folder"),
  count: bi("فيديو من أرشيفي", "films from my archive"),
};

export const PODCAST_COPY = {
  eyebrow: bi("بودكاست", "Podcast"),
  titleA: bi("حديث عن", "Conversations about"),
  titleB: bi("الصورة والقصة.", "light and story."),
  description: bi(
    "بودكاست أتحدث فيه عن التصوير، بناء العلامة الشخصية، وتجارب العمل مع العلامات والفعاليات. استمع للحلقات على منصتك المفضلة.",
    "A show about photography, personal branding, and working with brands and events. Listen to the episodes on your favourite platform.",
  ),
  featured: bi("الحلقة المميزة", "Featured episode"),
  listen: bi("استمع للحلقة", "Listen to episode"),
  guestCta: bi("كن ضيفاً في الحلقة القادمة", "Be a guest on the next episode"),
  platforms: bi("متوفر على", "Available on"),
  notify: bi("أبلغني عند نزول حلقة جديدة", "Notify me about new episodes"),
  notifyCta: bi("اشترك في التنبيهات", "Subscribe for alerts"),
  notifyDone: bi("تم! سنراسلك عند نزول الحلقة القادمة.", "Done! We'll email you when the next episode drops."),
  notifyPrivacy: bi("بدون رسائل مزعجة — فقط عند نزول حلقة جديدة.", "No spam — only when a new episode goes live."),
  emailPlaceholder: bi("بريدك الإلكتروني", "Your email"),
  coming: bi("الحلقات القادمة", "Coming up"),
  comingNote: bi(
    "أعمل حالياً على أول دفعة من الحلقات مع ضيوف من عالم التصوير والإبداع.",
    "I'm currently producing the first batch of episodes with guests from the photography and creative world.",
  ),
  comingItems: [
    { title: bi("كيف تبدأ في التصوير الاحترافي؟", "How to start shooting professionally"), tag: bi("قريباً", "Coming soon") },
    { title: bi("الإضاءة الطبيعية خطوة بخطوة", "Natural light, step by step"), tag: bi("قريباً", "Coming soon") },
    { title: bi("بناء علامة شخصية بالصور", "Building a personal brand with images"), tag: bi("قريباً", "Coming soon") },
  ],
};

export const MEDICAL_COPY = {
  eyebrow: bi("التصوير الطبي", "Medical photography"),
  titleA: bi("تصوير طبي", "Medical imagery"),
  titleB: bi("موثوق ودقيق.", "clinics can trust."),
  description: bi(
    "أصوّر العيادات والمراكز الطبية بمحتوى تعليمي وترويجي احترافي، يحافظ على خصوصية المريض ويعكس مصداقية المنشأة.",
    "I photograph clinics and medical centres with educational and promotional content that protects patient privacy and reflects the credibility of your practice.",
  ),
  featured: bi("مشروع من أعمالي", "From my work"),
  servicesTitle: bi("ما أقدمه للعيادات والمراكز الطبية", "What I offer clinics and medical centres"),
  services: [
    {
      icon: "video" as const,
      title: bi("محتوى تعليمي للمرضى", "Patient education content"),
      description: bi("فيديوهات قصيرة تجيب على أسئلة المرضى الشائعة بأسلوب واضح ومطمئن.", "Short films answering common patient questions in a clear, reassuring style."),
    },
    {
      icon: "camera" as const,
      title: bi("توثيق الإجراءات", "Procedure documentation"),
      description: bi("تصوير الإجراءات داخل العيادة بمعدات آمنة ومعقّمة وبدون إزعاج الفريق الطبي.", "In-clinic procedure filming with safe, sterilised equipment that never disrupts the medical team."),
    },
    {
      icon: "users" as const,
      title: bi("صور الفريق والمرافق", "Team & facility portraits"),
      description: bi("صور احترافية للفريق الطبي والمرافق، تُستخدم في الموقع الإلكتروني والحسابات.", "Professional imagery of your medical team and facilities, for your website and social channels."),
    },
    {
      icon: "license" as const,
      title: bi("خصوصية والتزام", "Privacy & compliance"),
      description: bi("نماذج موافقة موقّعة، وحجب الوجه عند الطلب، والالتزام بسياسات المنشأة الصحية.", "Signed consent forms, face blurring on request, and full compliance with your facility's health policies."),
    },
  ],
  trustTitle: bi("كيف أعمل داخل المنشأة الطبية", "How I work inside a medical facility"),
  trust: [
    bi("لا أستخدم فلاش أو إضاءة مزعجة للمريض", "No flash or disruptive lighting near patients"),
    bi("أتعامل مع معدات معقّمة وملابس مناسبة", "Sterilised gear and appropriate attire"),
    bi("موافقة خطية قبل أي لقطة تُنشر", "Written consent before any frame is published"),
    bi("تسليم سريع ليناسب حملاتك الموسمية", "Fast turnaround to match your campaigns"),
  ],
  cta: bi("اطلب عرضاً لمنشأتك الطبية", "Request a quote for your facility"),
};

export const FAQ_HEADING = {
  eyebrow: bi("الأسئلة الشائعة", "Questions"),
  titleA: bi("كل ما تحتاج", "Everything you"),
  titleB: bi("معرفته.", "need to know."),
  description: bi("لم تجد سؤالك؟ راسل الاستوديو وستصلك الإجابة خلال يوم عمل واحد.", "Can't find your answer? Message the studio and you'll hear back within one business day."),
  emailCta: bi("راسل الاستوديو", "Email the studio"),
};

export const CTA_COPY = {
  badge: bi("أماكن محدودة هذا الموسم", "Limited availability this season"),
  titleA: bi("لنصنع شيئاً", "Let's make something"),
  titleB: bi("لا يُنسى.", "unforgettable."),
  description: bi(
    "أخبرني عن فكرتك. أرد شخصياً خلال يوم عمل واحد مع التوفر وعرض سعر واضح ولوحة مزاجية لبدء العمل.",
    "Tell me about your vision. I reply personally within one business day with availability, a clear quote and a moodboard to start.",
  ),
  points: [
    bi("رد خلال يوم عمل واحد", "Reply within one business day"),
    bi("عرض سعر شفاف وبدون أي التزام", "A transparent quote with no obligation"),
    bi("عقود ورخص استخدام موثقة", "Contracts & usage rights documented"),
  ],
  direct: bi("تواصل مباشر", "Direct contact"),
  name: bi("الاسم الكامل", "Full name"),
  namePlaceholder: bi("اكتب اسمك", "Your name"),
  email: bi("البريد الإلكتروني", "Email"),
  emailPlaceholder: bi("name@example.com", "name@example.com"),
  phone: bi("رقم الجوال", "Mobile number"),
  phonePlaceholder: bi("05xxxxxxxx", "05xxxxxxxx"),
  projectType: bi("نوع المشروع", "Project type"),
  projectOptions: [
    bi("جلسة بورتريه", "Portrait session"),
    bi("حملة إعلانية", "Campaign production"),
    bi("تصوير منتجات", "Product photography"),
    bi("مصور شخصي / فيديو", "Personal photo & video"),
    bi("دورة تدريبية", "Training workshop"),
    bi("شيء آخر", "Something else"),
  ],
  message: bi("تفاصيل المشروع", "Project details"),
  messageOptional: bi("(اختياري)", "(optional)"),
  messagePlaceholder: bi("التواريخ، المدينة، الهدف، والإحساس الذي تريده…", "Dates, city, goals, and the feeling you want…"),
  submit: bi("أرسل طلب الحجز", "Send my request"),
  submitting: bi("جارٍ إرسال طلبك…", "Sending your request…"),
  success: bi(
    "شكراً لك! فُتحت نافذة البريد مع تفاصيل طلبك — أرسلها وسأرد عليك خلال يوم عمل واحد.",
    "Thank you! Your mail app opened with your request details — just send it and I'll reply within one business day.",
  ),
  errorName: bi("يرجى كتابة اسمك حتى نتمكن من الرد عليك.", "Please add your name so we can reply."),
  errorEmail: bi("يرجى إدخال بريد إلكتروني صحيح.", "Please enter a valid email address."),
  privacy: bi("لا رسائل مزعجة. بياناتك تُستخدم للرد على طلبك فقط.", "No spam, ever. Your details are only used to reply to your enquiry."),
};

export const FOOTER_COPY = {
  tagline: bi("صور تُوقف النظر.", "Frames that make the world look twice."),
  about: bi(
    "تصوير بورتريه وحملات إعلانية للعلامات والمجلات وصنّاع المحتوى. أعمل في مختلف مدن المملكة والخليج.",
    "Portrait and campaign photography for brands, publications and creators. Working across Saudi Arabia and the Gulf.",
  ),
  studio: bi("الاستوديو", "Studio"),
  explore: bi("استكشف", "Explore"),
  more: bi("المزيد", "More"),
  bookings: bi("الحجوزات", "Bookings"),
  start: bi("ابدأ مشروعك", "Start a project"),
  rights: bi("جميع الحقوق محفوظة.", "All rights reserved."),
  legal: [bi("سياسة الخصوصية", "Privacy"), bi("الشروط والأحكام", "Terms"), bi("رخص الاستخدام", "Licensing")],
};

export const T = (d: Dict, lang: Lang) => d[lang];
export type { Dict };
