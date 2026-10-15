import type { Lang } from "../../i18n";

type Dict = { ar: string; en: string };
const bi = (ar: string, en: string): Dict => ({ ar, en });

export const PSY_BRAND = {
  initials: "AH",
  name: { ar: "عبدالرحمن حسين", en: "Abdulrhman Hussien" },
  title: { ar: "أخصائي نفسي إكلينيكي وجنائي", en: "Clinical & Forensic Psychologist" },
  email: "abdulrhman.mahmood@gmail.com",
  socials: [
    {
      key: "instagram" as const,
      label: { ar: "إنستقرام", en: "Instagram" },
      href: "https://www.instagram.com/kpqqq?vrfl=ank3ZHQ5Z3UxbzMw",
    },
    {
      key: "whatsapp" as const,
      label: { ar: "واتساب", en: "WhatsApp" },
      href: "https://wa.me/qr/N3LCEFEMCRGED1?s=r",
    },
    {
      key: "mail" as const,
      label: { ar: "البريد الإلكتروني", en: "Email" },
      href: "mailto:abdulrhman.mahmood@gmail.com",
    },
  ],
};

export const PSY_NAV = [
  { href: "#services", label: bi("الخدمات", "Services") },
  { href: "#about", label: bi("عن الأخصائي", "About") },
  { href: "#process", label: bi("طريقة العمل", "Process") },
  { href: "#testimonials", label: bi("تجارب العملاء", "Experiences") },
  { href: "#faq", label: bi("الأسئلة", "FAQ") },
];

export const PSY_COPY = {
  hero: {
    badge: bi("يقبل حالات جديدة هذا الشهر", "Accepting new clients this month"),
    manifesto: {
      ar: ["ولنفسك عليك حق،", "ومثلما جسدك يطلب العلاج،", "فنفسيتك تطلب العناية."],
      en: ["For you have a right to yourself.", "And just as your body seeks treatment,", "so your mind seeks care."],
    },
    manifestoNote: bi("هويتي في مهنة العناية بالنفس", "My credo in the art of mental care"),
    subtitle: bi(
      "أخصائي نفسي إكلينيكي وجنائي معتمد. أقدّم علاجاً نفسياً فردياً وتقييماً وتشخيصاً دقيقاً وتقارير جنائية موثوقة — بسرّية تامة وأسلوب إنساني راقٍ.",
      "A certified clinical and forensic psychologist offering individual therapy, precise assessment and trusted forensic reports — with absolute confidentiality and a refined, human approach.",
    ),
    ctaPrimary: bi("احجز جلسة استشارية", "Book a consultation"),
    ctaSecondary: bi("تعرّف عليّ أكثر", "Learn more about me"),
    imgAlt: bi(
      "صورة الأخصائي النفسي عبدالرحمن حسين",
      "Portrait of psychologist Abdulrhman Hussien",
    ),
    cardLabel: bi("خبرة موثّقة", "Verified experience"),
    cardValue: bi("إكلينيكي + جنائي", "Clinical + Forensic"),
    statTitle: bi("+300 حالة", "300+ cases"),
    statSub: bi("تشخيص ومتابعة", "assessed and supported"),
    ratingLabel: bi("تقييم 5 من 5", "Rated 5 out of 5"),
    rating: bi("من عملاء موثوقين", "from verified clients"),
    scroll: bi("تابع النزول", "Scroll"),
  },

  proof: {
    title: bi(
      "بيئة آمنة · سرّية تامة · منهج قائم على الدليل",
      "A safe space · full confidentiality · evidence-based practice",
    ),
    stats: [
      { value: 300, suffix: "+", label: bi("حالة مُقيَّمة", "Cases assessed") },
      { value: 10, suffix: "+", label: bi("سنة خبرة", "Years of practice") },
      { value: 40, suffix: "+", label: bi("تقرير جنائي", "Forensic reports") },
      { value: 100, suffix: "%", label: bi("سرّية مضمونة", "Confidentiality") },
    ],
  },

  services: {
    eyebrow: bi("مجالات التخصص", "Areas of expertise"),
    titleA: bi("رعاية نفسية", "Psychological care"),
    titleB: bi("بدقة علمية.", "with scientific precision."),
    description: bi(
      "أعمل في المسارين الإكلينيكي والجنائي، فأجمع بين الفهم العميق للسلوك الإنساني والدقة المطلوبة في السياق القانوني.",
      "I work across both clinical and forensic tracks, combining a deep understanding of human behaviour with the precision required in legal contexts.",
    ),
    clinicalLabel: bi("العيادي الإكلينيكي", "Clinical practice"),
    forensicLabel: bi("الجنائي", "Forensic practice"),
    clinical: [
      {
        icon: "brain" as const,
        title: bi("العلاج النفسي الفردي", "Individual psychotherapy"),
        description: bi(
          "جلسات منظمة للقلق والوسواس القهري والاكتئاب والصدمات، بمنهج معرفي سلوكي مُثبت علمياً.",
          "Structured sessions for anxiety, OCD, depression and trauma, using evidence-based CBT.",
        ),
      },
      {
        icon: "clipboard" as const,
        title: bi("التقييم والتشخيص النفسي", "Psychological assessment"),
        description: bi(
          "اختبارات ومقابلات سريرية معيارية للوصول إلى تشخيص دقيق وخطة علاج واضحة.",
          "Standardised tests and clinical interviews to reach an accurate diagnosis and a clear treatment plan.",
        ),
      },
      {
        icon: "users" as const,
        title: bi("الاستشارات الزوجية والأسرية", "Couples & family counselling"),
        description: bi(
          "تحسين التواصل وحل النزاعات وبناء علاقات healthier داخل الأسرة.",
          "Improving communication, resolving conflict and building healthier family relationships.",
        ),
      },
      {
        icon: "heart" as const,
        title: bi("الدعم النفسي للضغوط", "Stress & burnout support"),
        description: bi(
          "برامج للعاملين وروّاد الأعمال للتعامل مع ضغوط العمل واستعادة التوازن.",
          "Programmes for professionals and entrepreneurs to manage work pressure and restore balance.",
        ),
      },
    ],
    forensic: [
      {
        icon: "scale" as const,
        title: bi("التقارير النفسية الجنائية", "Forensic psychological reports"),
        description: bi(
          "تقارير فنية مفصّلة تُقدَّم للمحاكم والجهات القضائية بأسلوب علمي محايد.",
          "Detailed technical reports prepared for courts and judicial bodies in a neutral, scientific manner.",
        ),
      },
      {
        icon: "gavel" as const,
        title: bi("تقييم الأهلية الجنائية", "Criminal responsibility"),
        description: bi(
          "تقييم الحالة العقلية وقت الواقعة وأثر الاضطرابات النفسية على المسؤولية.",
          "Assessing mental state at the time of the offence and the impact of disorders on responsibility.",
        ),
      },
      {
        icon: "shield" as const,
        title: bi("الشهادات الخبرية", "Expert testimony"),
        description: bi(
          "المثولة كخبير أمام الجهات القضائية وشرح النتائج النفسية بلغة واضحة.",
          "Appearing as an expert before judicial bodies and explaining psychological findings in clear language.",
        ),
      },
      {
        icon: "file" as const,
        title: bi("تقييم الحضانة والأهلية", "Custody & fitness evaluation"),
        description: bi(
          "تقييمات نفسية لقضايا الحضانة والوصاية والأهلية القانونية.",
          "Psychological evaluations for custody, guardianship and legal fitness matters.",
        ),
      },
    ],
    included: bi("مشمول في كل جلسة", "Included in every session"),
    cta: bi("اطلب استشارة", "Request a consultation"),
  },

  about: {
    eyebrow: bi("عن الأخصائي", "About the specialist"),
    titleA: bi("خبرة إكلينيكية", "Clinical depth"),
    titleB: bi("ودقة جنائية.", "forensic precision."),
    bio: bi(
      "أخصائي نفسي إكلينيكي وجنائي، أعمل على تقييم وعلاج الاضطرابات النفسية لدى البالغين والمراهقين، وأُعدّ التقارير الفنية للجهات القضائية. أجمع بين المنهج العلمي المُثبت والتعامل الإنساني الدافئ، لأن كل حالة تستحق فهماً عميقاً لا حكماً سطحياً.",
      "A clinical and forensic psychologist working with adults and adolescents on assessment and treatment of psychological disorders, and preparing technical reports for judicial bodies. I combine proven scientific method with warm, human care — because every case deserves deep understanding, not surface judgement.",
    ),
    quote: bi(
      "الصحة النفسية ليست ترفاً، بل أساس يستحق العناية والدقة نفسها التي نمنحها للجسد.",
      "Mental health is not a luxury — it deserves the same care and precision we give the body.",
    ),
    credentialsLabel: bi("المؤهلات والخبرة", "Credentials & experience"),
    credentials: [
      bi("ماجستير علم النفس الإكلينيكي", "M.Sc. Clinical Psychology"),
      bi("دبلوم علم النفس الجنائي والقضائي", "Diploma in Forensic Psychology"),
      bi("عضو جمعية النفسيين المهنية", "Member of the professional psychologists' association"),
      bi("معتمد في العلاج المعرفي السلوكي", "Certified in Cognitive Behavioural Therapy"),
    ],
    portraitLabel: bi("الأخصائي", "The specialist"),
    portraitName: bi("عبدالرحمن حسين · أخصائي نفسي", "Abdulrhman Hussien · Psychologist"),
    portraitAlt: bi(
      "صورة الأخصائي النفسي عبدالرحمن حسين في مكتبه",
      "Portrait of psychologist Abdulrhman Hussien in his office",
    ),
    floatLabel: bi("البيئة", "The setting"),
    floatValue: bi("غرفة استشارة هادئة وآمنة", "A calm, safe consultation room"),
    approach: [
      {
        icon: "lock" as const,
        title: bi("سرّية مطلقة", "Absolute confidentiality"),
        description: bi("كل ما يُقال في الجلسة يبقى داخل الغرفة، ضمن حدود المهنة.", "Everything said in session stays in the room, within professional boundaries."),
      },
      {
        icon: "brain" as const,
        title: bi("منهج مبني على الدليل", "Evidence-based method"),
        description: bi("تدخّلات مُثبتة علمياً ومقاييس معيارية معتمدة.", "Scientifically proven interventions and validated standardised measures."),
      },
      {
        icon: "heart" as const,
        title: bi("تعامل إنساني", "A human approach"),
        description: bi("بدون أحكام مسبقة — فقط فهم واحترام لقصتك.", "No judgement — only understanding and respect for your story."),
      },
    ],
    cta: bi("ابدأ رحلتك معي", "Start your journey with me"),
  },

  process: {
    eyebrow: bi("كيف نبدأ", "How we begin"),
    titleA: bi("رحلتك العلاجية", "Your therapeutic journey"),
    titleB: bi("خطوة بخطوة.", "step by step."),
    description: bi(
      "عملية واضحة ومريحة من أول رسالة حتى المتابعة، تعرف فيها دائماً ما يحدث ولماذا.",
      "A clear, comfortable process from your first message to follow-up — you always know what is happening and why.",
    ),
    stepsLabel: bi("مراحل العمل", "The process"),
    stepsTitle: bi("من أول تواصل إلى التحسّن", "From first contact to progress"),
    stepsTag: bi("المتوسط 6–12 جلسة", "Typically 6–12 sessions"),
    steps: [
      { step: "01", title: bi("التواصل الأول", "First contact"), description: bi("رسالة أو مكالمة قصيرة نفهم فيها احتياجك العام ونطاق الاستشارة.", "A message or short call to understand your general need and the scope of the consultation.") },
      { step: "02", title: bi("الجلسة الأولى", "The first session"), description: bi("مقابلة سريرية شاملة وتاريخ الحالة، وبناء خطة علاج مبدئية.", "A comprehensive clinical interview and history-taking, and an initial treatment plan.") },
      { step: "03", title: bi("التقييم والتشخيص", "Assessment & diagnosis"), description: bi("اختبارات معيارية عند الحاجة للوصول إلى صورة دقيقة.", "Standardised testing where needed to reach an accurate picture.") },
      { step: "04", title: bi("المتابعة والتحسّن", "Follow-up & progress"), description: bi("جلسات منتظمة مع مراجعة دورية للأهداف وقياس التحسّن.", "Regular sessions with periodic review of goals and measured progress.") },
    ],
    trustTitle: bi("ما يمكنك توقعه", "What you can expect"),
    trust: [
      bi("جلسة مدتها 50 دقيقة", "50-minute sessions"),
      bi("جدول مرن صباحي ومسائي", "Flexible morning and evening slots"),
      bi("جلسات حضورية وعن بُعد", "In-person and online sessions"),
      bi("خطة علاج مكتوبة وواضحة", "A written, clear treatment plan"),
    ],
    cta: bi("احجز جلستك الأولى", "Book your first session"),
  },

  testimonials: {
    eyebrow: bi("تجارب العملاء", "Client experiences"),
    titleA: bi("ثقة تُبنى بـ", "Trust built with"),
    titleB: bi("احترام وسرّية.", "respect and confidentiality."),
    items: [
      {
        quote: bi("أول مرة أحس بأن أحداً يفهمني فعلاً بدون حكم. الجلسات غيّرت طريقة تعاملي مع قلقي بشكل جذري.", "For the first time I felt truly understood without judgement. The sessions changed how I deal with my anxiety completely."),
        name: bi("عبدالعزيز الدوسري", "Abdulaziz Al-Dosari"),
        role: bi("مدير تنفيذي", "Executive"),
        initials: "ع",
      },
      {
        quote: bi("تقريره الجنائي كان دقيقاً ومهنياً للغاية، وشرح النتائج للجهة القضائية بلغة واضحة لا لبس فيها.", "His forensic report was extremely precise and professional, and he explained the findings to the court in unmistakably clear language."),
        name: bi("نورة الشمري", "Noura Al-Shammari"),
        role: bi("محامية", "Lawyer"),
        initials: "ن",
      },
      {
        quote: bi("التقييم النفسي ساعدنا على فهم حالة ابننا فعلاً، وخطة العلاج كانت واضحة وقابلة للتطبيق.", "The assessment helped us truly understand our son, and the treatment plan was clear and practical."),
        name: bi("فيصل القحطاني", "Faisal Al-Qahtani"),
        role: bi("ولي أمر", "Parent"),
        initials: "ف",
      },
      {
        quote: bi("احترافية عالية وسرّية تامة. أنصح بالتعامل معه لكل من يحتاج دعماً نفسياً حقيقياً.", "High professionalism and absolute confidentiality. I recommend him to anyone who needs genuine psychological support."),
        name: bi("ريم السبيعي", "Reem Al-Subaie"),
        role: bi("طبيبة", "Physician"),
        initials: "ر",
      },
    ],
  },

  faq: {
    eyebrow: bi("أسئلة شائعة", "Common questions"),
    titleA: bi("أسئلة يسألها", "Questions clients"),
    titleB: bi("الكثيرون.", "often ask."),
    description: bi(
      "لم تجد سؤالك؟ راسلني مباشرة وسأجيبك بسرّية تامة.",
      "Can't find your question? Message me directly and I'll answer in complete confidence.",
    ),
    emailCta: bi("راسلني مباشرة", "Message me directly"),
    items: [
      {
        q: bi("هل ما أقوله في الجلسة يبقى سرّياً؟", "Is what I say in session confidential?"),
        a: bi("نعم، السرّية التامة هي أساس عملي، ولا تُكسر إلا في الحالات التي يفرضها القانون والواجب المهني كخطر على السلامة، وأُخبرك بذلك مسبقاً.", "Yes. Absolute confidentiality is the foundation of my practice. It is only broken where law and professional duty require it, such as risk to safety — and I inform you of this in advance."),
      },
      {
        q: bi("كم عدد الجلسات التي أحتاجها؟", "How many sessions will I need?"),
        a: bi("يختلف لكل حالة. بعد الجلسة الأولى أُقدّم تقديراً أوّلياً، ونراجع الخطة دورياً. المتوسط يتراوح بين 6 و12 جلسة لمعظم الحالات.", "It varies by case. After the first session I give an initial estimate, and we review the plan periodically. Most cases average between 6 and 12 sessions."),
      },
      {
        q: bi("هل تقدّم جلسات عن بُعد؟", "Do you offer online sessions?"),
        a: bi("نعم، تتوفر جلسات عن بُعد بالفيديو بنفس مستوى السرّية والجودة، مناسبة لغير القادرين على الحضور أو خارج المدينة.", "Yes. Video sessions are available with the same level of confidentiality and quality — suitable for those who cannot attend in person or live outside the city."),
      },
      {
        q: bi("ما الفرق بين التقرير الإكلينيكي والجنائي؟", "What is the difference between a clinical and a forensic report?"),
        a: bi("التقرير الإكلينيكي يخدم التشخيص وخطة العلاج. أما التقرير الجنائي فأُعدّه للجهات القضائية بأسلوب محايد وموضوعي answering سؤالاً قانونياً محدداً.", "A clinical report serves diagnosis and treatment planning. A forensic report is prepared for judicial bodies in a neutral, objective manner, answering a specific legal question."),
      },
      {
        q: bi("هل تعمل مع المراهقين؟", "Do you work with adolescents?"),
        a: bi("نعم، أعمل مع البالغين والمراهقين، وبمشاركة ولي الأمر وفق ما يتطلبه الوضع السريري وأخلاقيات المهنة.", "Yes. I work with adults and adolescents, involving the guardian as the clinical situation and professional ethics require."),
      },
      {
        q: bi("كيف أحجز موعداً؟", "How do I book an appointment?"),
        a: bi("عبر واتساب أو البريد الإلكتروني أو نموذج التواصل في الموقع. أرد عادةً خلال يوم عمل واحد مع المواعيد المتاحة.", "Via WhatsApp, email or the contact form on this site. I usually reply within one business day with available times."),
      },
    ],
  },

  cta: {
    badge: bi("يقبل حالات جديدة", "Accepting new clients"),
    titleA: bi("الخطوة الأولى", "The first step"),
    titleB: bi("تبدأ برسالة.", "starts with a message."),
    description: bi(
      "لا تحتاج أن تعرف كل شيء الآن. اكتب لي باختصار ما تمرّ به، وسأرد عليك شخصياً خلال يوم عمل واحد بالمواعيد المتاحة والخطوة التالية.",
      "You don't need to have everything figured out. Tell me briefly what you're going through, and I'll reply personally within one business day with available times and the next step.",
    ),
    points: [
      bi("رد شخصي خلال يوم عمل واحد", "A personal reply within one business day"),
      bi("سرّية تامة من أول رسالة", "Complete confidentiality from the first message"),
      bi("جلسات حضورية وعن بُعد", "In-person and online sessions"),
    ],
    direct: bi("تواصل مباشر", "Direct contact"),
    name: bi("الاسم الكامل", "Full name"),
    namePlaceholder: bi("اكتب اسمك", "Your name"),
    email: bi("البريد الإلكتروني", "Email"),
    emailPlaceholder: bi("name@example.com", "name@example.com"),
    phone: bi("رقم الجوال", "Mobile number"),
    phonePlaceholder: bi("05xxxxxxxx", "05xxxxxxxx"),
    projectType: bi("نوع الاستشارة", "Type of consultation"),
    projectOptions: [
      bi("جلسة علاج فردي", "Individual therapy"),
      bi("تقييم وتشخيص نفسي", "Psychological assessment"),
      bi("استشارة زوجية أو أسرية", "Couples or family counselling"),
      bi("تقرير جنائي / خبرة", "Forensic report / expertise"),
      bi("استفسار آخر", "Another enquiry"),
    ],
    message: bi("ما الذي تريد التحدث عنه؟", "What would you like to talk about?"),
    messageOptional: bi("(اختياري)", "(optional)"),
    messagePlaceholder: bi("اكتب باختصار ما تمرّ به…", "Briefly describe what you're going through…"),
    submit: bi("أرسل رسالتي", "Send my message"),
    submitting: bi("جارٍ الإرسال…", "Sending…"),
    success: bi(
      "شكراً لثقتك! فُتحت نافذة البريد مع رسالتك — أرسلها وسأرد عليك خلال يوم عمل واحد.",
      "Thank you for your trust! Your mail app opened with your message — send it and I'll reply within one business day.",
    ),
    errorName: bi("يرجى كتابة اسمك حتى أتمكن من الرد عليك.", "Please add your name so I can reply."),
    errorEmail: bi("يرجى إدخال بريد إلكتروني صحيح.", "Please enter a valid email address."),
    privacy: bi("سرّية تامة — بياناتك تُستخدم للرد على رسالتك فقط.", "Fully confidential — your details are used only to reply."),
  },

  footer: {
    tagline: bi("الصحة النفسية تبدأ بفهم.", "Mental health begins with understanding."),
    about: bi(
      "أخصائي نفسي إكلينيكي وجنائي. تقييم وعلاج وتقارير فنية، بسرّية تامة ومعايير مهنية عالية.",
      "A clinical and forensic psychologist. Assessment, treatment and technical reports — with complete confidentiality and high professional standards.",
    ),
    studio: bi("الخدمات", "Services"),
    explore: bi("استكشف", "Explore"),
    more: bi("المزيد", "More"),
    bookings: bi("للتواصل", "Contact"),
    start: bi("احجز جلسة", "Book a session"),
    rights: bi("جميع الحقوق محفوظة.", "All rights reserved."),
    legal: [bi("سياسة الخصوصية", "Privacy"), bi("الشروط والأحكام", "Terms"), bi("أخلاقيات المهنة", "Professional ethics")],
    disclaimer: bi(
      "المحتوى في هذا الموقع لأغراض تعريفية ولا يُغني عن الاستشارة المتخصصة. في الحالات الطارئة يُرجى التواصل بالطوارئ فوراً.",
      "Content on this site is informational and does not replace professional consultation. In emergencies, please contact emergency services immediately.",
    ),
  },
};

export const T_PSY = (d: Dict, lang: Lang) => d[lang];
