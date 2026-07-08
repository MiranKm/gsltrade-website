// Trilingual content for Golden Sunline Trade.
// en = English, ckb = Central Kurdish (Sorani), ar = Arabic.
// NOTE: Kurdish & Arabic copy is a strong first draft — have a native
// speaker proofread before launch. Numbers/units stay in Latin for clarity.

export type Lang = "en" | "ckb" | "ar";

const en = {
  langName: "English",
  nav: {
    about: "About",
    why: "Why solar",
    services: "Services",
    process: "Process",
    contact: "Contact",
    quote: "Get a quote",
    menu: "Menu",
    close: "Close",
    language: "Language",
  },
  hero: {
    eyebrow: "Solar & storage · Erbil, Kurdistan Region",
    titleLine: "Power that",
    titleAccent: "doesn't cut out.",
    lede: "Golden Sunline Trade designs, supplies, and installs solar-and-battery systems across the Kurdistan Region and Iraq — so your home or business keeps running when the national grid and the neighbourhood generator don't.",
    ctaPrimary: "Get a free quote",
    ctaSecondary: "How it works",
    stats: [
      { value: "3,000+", label: "Sun-hours a year" },
      { value: "24/7", label: "Power with storage" },
      { value: "100%", label: "Off the generator" },
    ],
  },
  why: {
    eyebrow: "Why solar here",
    heading: "Built for Iraq's grid — and its sun.",
    sub: "Few places on earth suit solar better, or need it more.",
    cards: [
      {
        title: "End the outages",
        body: "The national grid runs only a few hours a day in much of Iraq. Solar and batteries keep your lights, fridge, and internet on around the clock.",
      },
      {
        title: "Cut the generator bill",
        body: "Neighbourhood generator subscriptions and diesel eat into every month's budget. Solar shrinks that bill — or ends it for good.",
      },
      {
        title: "Sun when you need it most",
        body: "Peak heat means peak air-conditioning, exactly when the sun is strongest. Your panels produce hardest on the days you use the most.",
      },
      {
        title: "Made for dust and heat",
        body: "We size and mount every system for Iraqi summers — high temperatures, fine dust, and long, bright days.",
      },
    ],
  },
  about: {
    eyebrow: "Who we are",
    heading: "An Erbil company, powering all of Iraq.",
    body1: "Golden Sunline Trade began by importing tier-1 solar hardware into the Kurdistan Region, and grew into a full-service installer. Today we design, supply, and fit complete solar-and-battery systems — then stay on to keep them producing.",
    body2: "From a single home in Erbil to factories and farms across Iraq, we build systems tuned to the local grid, the local sun, and your bill — because here, every kilowatt-hour you make yourself is one you don't buy twice.",
    highlights: [
      "Tier-1 panels, inverters & batteries",
      "In-house engineering and design",
      "Certified, insured installation crews",
      "Local support and maintenance",
    ],
    panelLabel: "Generating now",
    panelValue: "6.4 kW",
  },
  services: {
    eyebrow: "What we do",
    heading: "Everything between the sun and your socket.",
    sub: "One partner for the whole job — importing the hardware, engineering the system, installing it, and keeping it at full output.",
    items: [
      {
        title: "Home solar & backup",
        body: "Rooftop solar with battery backup, sized to keep an Iraqi household running right through the daily cuts.",
      },
      {
        title: "Business & industry",
        body: "Megawatt-scale rooftop and ground-mount systems that slash generator and grid costs for factories, farms, and offices.",
      },
      {
        title: "Batteries & storage",
        body: "Store the day's surplus and run all night — seamless backup the moment the grid drops.",
      },
      {
        title: "Generator-to-solar hybrid",
        body: "Pair solar with your existing generator to cut diesel to a fraction, then phase it out entirely.",
      },
      {
        title: "Equipment supply & trade",
        body: "Tier-1 panels, inverters, and mounting gear imported and delivered across Iraq at trade prices.",
      },
      {
        title: "Service & maintenance",
        body: "Cleaning, inspection, and monitoring built for dusty, high-heat sites — protecting your output for decades.",
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    heading: "From first call to full power in five steps.",
    steps: [
      {
        title: "Consultation",
        body: "We look at your bills, your roof, and your outage hours, then model exactly what solar and storage can do for you.",
      },
      {
        title: "Design & quote",
        body: "Our engineers design the system and hand you a clear, itemised quote in IQD — no surprises.",
      },
      {
        title: "Installation",
        body: "Certified crews mount and wire everything safely — most homes are switched on within a day or two.",
      },
      {
        title: "Switch-on",
        body: "We commission the system and connect your battery backup, and you start running on your own power.",
      },
      {
        title: "Support",
        body: "Monitoring, cleaning, and a local team on call for the entire life of the system.",
      },
    ],
  },
  contact: {
    eyebrow: "Get started",
    headingLine: "Ready to stop paying for",
    headingAccent: "power that cuts out?",
    sub: "Tell us about your home or business. We'll come back within two working days with a system design and a price in IQD — no obligation.",
    details: [
      { label: "Email", value: "info@goldensunline.iq", href: "mailto:info@goldensunline.iq" },
      { label: "Phone", value: "+964 750 000 0000", href: "tel:+9647500000000" },
      { label: "Office", value: "Gulan Street, Erbil, Kurdistan Region" },
      { label: "Hours", value: "Sat–Thu · 9:00–17:00" },
    ],
    form: {
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@email.com",
      phone: "Phone",
      phoneOpt: "(optional)",
      phonePh: "+964 …",
      type: "Property type",
      typeOptions: ["Home", "Business", "Farm / land", "Other"],
      message: "What do you need?",
      messagePh: "e.g. Keep our shop running through the outages with solar and batteries.",
      submit: "Request my quote",
      fineprint: "Demo form — nothing is stored yet. Connect it to your inbox or CRM to go live.",
      successTitle: "Thanks — we've got it.",
      successBody: "A Golden Sunline advisor will call or email within two working days.",
      reset: "Send another",
    },
  },
  footer: {
    tagline: "Clean, reliable solar power for the Kurdistan Region and Iraq — imported, designed, installed, and supported.",
    company: "Company",
    companyLinks: [
      { href: "#about", label: "About" },
      { href: "#why", label: "Why solar" },
      { href: "#contact", label: "Contact" },
    ],
    services: "Services",
    servicesLinks: [
      { href: "#services", label: "Home solar" },
      { href: "#services", label: "Business" },
      { href: "#services", label: "Batteries" },
      { href: "#services", label: "Equipment supply" },
    ],
    serving: "Serving: Erbil · Sulaymaniyah · Duhok · Kirkuk · Baghdad · Basra",
    rights: "© 2026 Golden Sunline Trade. All rights reserved.",
    built: "Built for a brighter grid ☀",
  },
} as const;

const ckb = {
  langName: "کوردی",
  nav: {
    about: "دەربارە",
    why: "بۆچی خۆر",
    services: "خزمەتگوزارییەکان",
    process: "چۆن کار دەکەین",
    contact: "پەیوەندی",
    quote: "داوای نرخ",
    menu: "لیست",
    close: "داخستن",
    language: "زمان",
  },
  hero: {
    eyebrow: "خۆر و پاشەکەوت · هەولێر، هەرێمی کوردستان",
    titleLine: "کارەبایەک کە",
    titleAccent: "نابڕێت.",
    lede: "Golden Sunline Trade سیستەمی خۆر و پاتری دیزاین و دابین و دادەمەزرێنێت لە هەرێمی کوردستان و عێراق — بۆ ئەوەی ماڵ یان کارەکەت کار بکات کاتێک کارەبای نیشتیمانی و مۆلیدە دەبڕێن.",
    ctaPrimary: "داوای نرخی بەخۆڕایی بکە",
    ctaSecondary: "چۆن کار دەکەین",
    stats: [
      { value: "3,000+", label: "کاتژمێر خۆر لە ساڵێکدا" },
      { value: "24/7", label: "کارەبا بە پاشەکەوتەوە" },
      { value: "100%", label: "بەبێ مۆلیدە" },
    ],
  },
  why: {
    eyebrow: "بۆچی لێرە",
    heading: "دروستکراوە بۆ تۆڕی کارەبای عێراق و خۆرەکەی.",
    sub: "کەم شوێن هەیە کە لەمە باشتر بگونجێت بۆ خۆر، یان زیاتری پێویست بێت.",
    cards: [
      {
        title: "کۆتایی بە بڕانەکان بهێنە",
        body: "تۆڕی نیشتیمانی تەنها چەند کاتژمێرێک لە ڕۆژدا کار دەکات لە زۆربەی عێراق. خۆر و پاتری ڕووناکی و بەفرکەر و ئینتەرنێتت بە درێژایی ڕۆژ دەهێڵنەوە.",
      },
      {
        title: "پارەی مۆلیدە کەم بکەرەوە",
        body: "بەشداری مۆلیدە و دیزڵ هەموو مانگێک بودجەت دەخۆن. خۆر ئەم پارەیە کەم دەکاتەوە — یان بۆ هەمیشە کۆتایی پێدەهێنێت.",
      },
      {
        title: "خۆر کاتێک زۆر پێویستە",
        body: "لووتکەی گەرما واتە لووتکەی سازکردنی هەوا، هەر ئەو کاتەی خۆر بەهێزترە. پانێلەکانت لەو ڕۆژانەدا زۆرترین بەرهەم دەهێنن کە زۆرترین بەکاری دەهێنیت.",
      },
      {
        title: "بۆ تۆز و گەرما",
        body: "هەموو سیستەمێک بۆ هاوینی عێراق دەخەینەڕێک: گەرمای بەرز، تۆزی ناسک، و ڕۆژی درێژی ڕووناک.",
      },
    ],
  },
  about: {
    eyebrow: "ئێمە کێین",
    heading: "کۆمپانیایەکی هەولێر، کارەبا بۆ هەموو عێراق.",
    body1: "Golden Sunline Trade بە هاوردەکردنی کەرەستەی خۆری پۆل-یەک بۆ هەرێمی کوردستان دەستی پێکرد، و بوو بە دامەزرێنەرێکی تەواو-خزمەتگوزاری. ئەمڕۆ سیستەمی تەواوی خۆر و پاتری دیزاین و دابین و دادەمەزرێنین — و دەمێنینەوە بۆ دڵنیابوون لە بەرهەمهێنانیان.",
    body2: "لە یەک ماڵی هەولێرەوە تا کارگە و کێڵگە لە سەرانسەری عێراق، سیستەم دروست دەکەین کە لەگەڵ تۆڕی ناوخۆیی و خۆری ناوخۆیی و پسووڵەکەت دەگونجێن — چونکە لێرە، هەر کیلۆواتێک کە خۆت بەرهەمی دەهێنیت، جارێکی تر ناینکڕیتەوە.",
    highlights: [
      "پانێل و ئینڤێرتەر و پاتری پۆل-یەک",
      "ئەندازیاری و دیزاین لە ناوخۆ",
      "تیمی دامەزراندنی پەسەندکراو و دڵنیاکراو",
      "پشتگیری و چاککردنەوەی ناوخۆیی",
    ],
    panelLabel: "ئێستا بەرهەم دەهێنێت",
    panelValue: "6.4 kW",
  },
  services: {
    eyebrow: "چی دەکەین",
    heading: "هەموو شتێک لە نێوان خۆر و پرێزەکەت.",
    sub: "یەک هاوبەش بۆ هەموو کارەکە — هاوردەی کەرەستە، ئەندازیاری سیستەم، دامەزراندن، و هێشتنەوەی بە تەواوی بەرهەم.",
    items: [
      {
        title: "خۆر بۆ ماڵ",
        body: "پانێلی سەربان لەگەڵ پاتری یەدەک، بە قەبارەیەک کە ماڵی عێراقی بە درێژایی بڕانە ڕۆژانەکان کاردەخات.",
      },
      {
        title: "بۆ بازرگانی و پیشەسازی",
        body: "سیستەمی قەبارە-مێگاواتی لەسەر سەربان و زەوی کە تێچووی مۆلیدە و تۆڕ کەم دەکاتەوە بۆ کارگە و کێڵگە و ئۆفیس.",
      },
      {
        title: "پاتری و پاشەکەوت",
        body: "زیادەی ڕۆژ پاشەکەوت بکە و بە درێژایی شەو کاری پێبکە — یەدەکی خێرا لە ساتی بڕانی تۆڕ.",
      },
      {
        title: "تێکەڵی مۆلیدە و خۆر",
        body: "خۆر لەگەڵ مۆلیدەی ئێستات بەیەکبگرە بۆ کەمکردنەوەی دیزڵ بۆ بەشێکی بچووک، پاشان بە تەواوی لای بنێ.",
      },
      {
        title: "دابینکردن و بازرگانی کەرەستە",
        body: "پانێل و ئینڤێرتەر و ستراکچەری پۆل-یەک، هاوردەکراو و گەیەنراو بۆ سەرانسەری عێراق بە نرخی کۆمەڵ.",
      },
      {
        title: "خزمەت و چاککردنەوە",
        body: "پاککردنەوە و پشکنین و چاودێری دروستکراو بۆ شوێنی تۆزاوی و گەرم — بۆ پاراستنی بەرهەمەکەت بۆ چەندین دەیە.",
      },
    ],
  },
  process: {
    eyebrow: "چۆن کار دەکەین",
    heading: "لە یەکەم پەیوەندییەوە تا کارەبای تەواو بە پێنج هەنگاو.",
    steps: [
      {
        title: "ڕاوێژکاری",
        body: "سەیری پسووڵە و سەربان و کاتژمێرەکانی بڕانت دەکەین، پاشان بە وردی هەژمار دەکەین خۆر و پاشەکەوت چی بۆت دەکەن.",
      },
      {
        title: "دیزاین و نرخ",
        body: "ئەندازیارەکانمان سیستەمەکە دیزاین دەکەن و نرخێکی ڕوون و وردی بە دینار پێت دەدەن — بەبێ سەرسوڕمان.",
      },
      {
        title: "دامەزراندن",
        body: "تیمی پەسەندکراو هەموو شتێک بە سەلامەتی دادەمەزرێنن و دەیبەستنەوە — زۆربەی ماڵەکان لە ماوەی ڕۆژێک-دووان کاردەخرێن.",
      },
      {
        title: "کارخستن",
        body: "سیستەمەکە دەخەینەکار و پاتری یەدەک دەبەستینەوە، و دەست بە کارکردن بە کارەبای خۆت دەکەیت.",
      },
      {
        title: "پشتگیری",
        body: "چاودێری و پاککردنەوە و تیمێکی ناوخۆیی ئامادە بە درێژایی تەمەنی سیستەمەکە.",
      },
    ],
  },
  contact: {
    eyebrow: "دەست پێبکە",
    headingLine: "ئامادەیت واز بهێنیت لە پارەدان بۆ",
    headingAccent: "کارەبایەک کە دەبڕێت؟",
    sub: "دەربارەی ماڵ یان کارەکەت پێمان بڵێ. لە ماوەی دوو ڕۆژی کاردا بە دیزاینی سیستەم و نرخ بە دینار دەگەڕێینەوە — بەبێ پابەندبوون.",
    details: [
      { label: "ئیمەیل", value: "info@goldensunline.iq", href: "mailto:info@goldensunline.iq" },
      { label: "تەلەفۆن", value: "+964 750 000 0000", href: "tel:+9647500000000" },
      { label: "ئۆفیس", value: "شەقامی گوڵان، هەولێر، هەرێمی کوردستان" },
      { label: "کاتی کار", value: "شەممە–پێنجشەممە · 9:00–17:00" },
    ],
    form: {
      name: "ناو",
      namePh: "ناوت",
      email: "ئیمەیل",
      emailPh: "you@email.com",
      phone: "تەلەفۆن",
      phoneOpt: "(ئارەزوومەندانە)",
      phonePh: "+964 …",
      type: "جۆری موڵک",
      typeOptions: ["ماڵ", "بازرگانی", "کێڵگە / زەوی", "هیتر"],
      message: "پێویستیت بە چییە؟",
      messagePh: "نموونە: دووکانەکەم بە خۆر و پاتری لە کاتی بڕاندا بەکاربخە.",
      submit: "داوای نرخ بکە",
      fineprint: "فۆرمی تاقیکردنەوە — هێشتا هیچ پاشەکەوت ناکرێت. بۆ چالاککردنی بیبەستەوە بە ئیمەیل یان سیستەمی بەڕێوەبردنی کڕیار.",
      successTitle: "سوپاس — وەرمانگرت.",
      successBody: "ڕاوێژکارێکی Golden Sunline لە ماوەی دوو ڕۆژی کاردا پەیوەندیت پێوە دەکات یان ئیمەیلت بۆ دەنێرێت.",
      reset: "ناردنی داواکارییەکی تر",
    },
  },
  footer: {
    tagline: "کارەبای خۆری پاک و متمانەپێکراو بۆ هەرێمی کوردستان و عێراق — هاوردە و دیزاین و دامەزراندن و پشتگیری.",
    company: "کۆمپانیا",
    companyLinks: [
      { href: "#about", label: "دەربارە" },
      { href: "#why", label: "بۆچی خۆر" },
      { href: "#contact", label: "پەیوەندی" },
    ],
    services: "خزمەتگوزارییەکان",
    servicesLinks: [
      { href: "#services", label: "خۆر بۆ ماڵ" },
      { href: "#services", label: "بازرگانی" },
      { href: "#services", label: "پاتری" },
      { href: "#services", label: "دابینکردنی کەرەستە" },
    ],
    serving: "خزمەت دەکەین: هەولێر · سلێمانی · دهۆک · کەرکووک · بەغدا · بەسرە",
    rights: "© 2026 Golden Sunline Trade. هەموو مافەکان پارێزراون.",
    built: "بۆ تۆڕێکی ڕووناکتر ☀",
  },
} as const;

const ar = {
  langName: "العربية",
  nav: {
    about: "من نحن",
    why: "لماذا الطاقة الشمسية",
    services: "خدماتنا",
    process: "كيف نعمل",
    contact: "اتصل بنا",
    quote: "اطلب عرض سعر",
    menu: "القائمة",
    close: "إغلاق",
    language: "اللغة",
  },
  hero: {
    eyebrow: "طاقة شمسية وتخزين · أربيل، إقليم كردستان",
    titleLine: "طاقة",
    titleAccent: "لا تنقطع.",
    lede: "تُصمّم Golden Sunline Trade وتورّد وتركّب أنظمة طاقة شمسية مع بطاريات في إقليم كردستان والعراق — ليبقى بيتك أو عملك يعمل حين تتوقف الكهرباء الوطنية والمولّدة.",
    ctaPrimary: "احصل على عرض سعر مجاني",
    ctaSecondary: "كيف نعمل",
    stats: [
      { value: "3,000+", label: "ساعة شمس سنويًا" },
      { value: "24/7", label: "طاقة مع التخزين" },
      { value: "100%", label: "استغناء عن المولّدة" },
    ],
  },
  why: {
    eyebrow: "لماذا هنا",
    heading: "مصمَّمة لشبكة العراق وشمسه.",
    sub: "قلّ أن تجد مكانًا يناسب الطاقة الشمسية أو يحتاجها أكثر.",
    cards: [
      {
        title: "أنهِ الانقطاعات",
        body: "الشبكة الوطنية تعمل ساعات قليلة يوميًا في معظم العراق. الطاقة الشمسية والبطاريات تُبقي الإنارة والثلاجة والإنترنت طوال اليوم.",
      },
      {
        title: "قلّل فاتورة المولّدة",
        body: "اشتراك المولّدة والديزل يلتهمان ميزانية كل شهر. الطاقة الشمسية تقلّص هذه الفاتورة — أو تنهيها نهائيًا.",
      },
      {
        title: "الشمس حين تحتاجها",
        body: "ذروة الحر تعني ذروة التبريد، تمامًا حين تكون الشمس أقوى. ألواحك تنتج أكثر في الأيام التي تستهلك فيها أكثر.",
      },
      {
        title: "لأجواء الغبار والحر",
        body: "نصمّم ونثبّت كل نظام لصيف العراق: حرارة عالية وغبار ناعم وأيام طويلة مشرقة.",
      },
    ],
  },
  about: {
    eyebrow: "من نحن",
    heading: "شركة من أربيل، تُنير العراق كله.",
    body1: "بدأت Golden Sunline Trade باستيراد معدّات شمسية من الفئة الأولى إلى إقليم كردستان، ثم صارت مركّبًا متكامل الخدمات. اليوم نصمّم ونورّد ونركّب أنظمة شمسية مع بطاريات — ونبقى لضمان إنتاجها.",
    body2: "من بيت واحد في أربيل إلى مصانع ومزارع في عموم العراق، نبني أنظمة مضبوطة على الشبكة المحلية والشمس المحلية وفاتورتك — فكل كيلوواط تنتجه بنفسك هنا لا تشتريه مرتين.",
    highlights: [
      "ألواح وعاكسات وبطاريات من الفئة الأولى",
      "هندسة وتصميم داخل الشركة",
      "فرق تركيب معتمدة ومؤمّنة",
      "دعم وصيانة محليان",
    ],
    panelLabel: "الإنتاج الآن",
    panelValue: "6.4 kW",
  },
  services: {
    eyebrow: "ماذا نقدّم",
    heading: "كل ما بين الشمس ومقبسك.",
    sub: "شريك واحد للعمل كله — استيراد المعدّات، وهندسة النظام، وتركيبه، وإبقاؤه بكامل إنتاجه.",
    items: [
      {
        title: "طاقة شمسية للمنازل",
        body: "ألواح على السطح مع بطاريات احتياطية، بحجم يُبقي البيت العراقي يعمل خلال الانقطاعات اليومية.",
      },
      {
        title: "للشركات والصناعة",
        body: "أنظمة بحجم الميغاواط على الأسطح والأرض تخفض تكاليف المولّدة والشبكة للمصانع والمزارع والمكاتب.",
      },
      {
        title: "بطاريات وتخزين",
        body: "خزّن فائض النهار وشغّل الليل كله — احتياطي فوري لحظة انقطاع الشبكة.",
      },
      {
        title: "دمج المولّدة بالطاقة الشمسية",
        body: "اجمع الطاقة الشمسية مع مولّدتك الحالية لخفض الديزل إلى جزء يسير، ثم الاستغناء عنه.",
      },
      {
        title: "توريد وتجارة المعدّات",
        body: "ألواح وعاكسات وهياكل من الفئة الأولى، مستوردة وموصّلة في عموم العراق بأسعار الجملة.",
      },
      {
        title: "خدمة وصيانة",
        body: "تنظيف وفحص ومراقبة مصمَّمة للمواقع المغبرّة وشديدة الحرارة — تحمي إنتاجك لعقود.",
      },
    ],
  },
  process: {
    eyebrow: "كيف نعمل",
    heading: "من أول اتصال إلى طاقة كاملة في خمس خطوات.",
    steps: [
      {
        title: "الاستشارة",
        body: "ننظر في فواتيرك وسطحك وساعات انقطاعك، ثم نحسب بدقة ما تستطيع الطاقة الشمسية والتخزين تقديمه لك.",
      },
      {
        title: "التصميم والعرض",
        body: "يصمّم مهندسونا النظام ويسلّمونك عرضًا واضحًا مفصّلًا بالدينار — دون مفاجآت.",
      },
      {
        title: "التركيب",
        body: "فرق معتمدة تركّب وتوصّل كل شيء بأمان — معظم البيوت تُشغَّل خلال يوم أو يومين.",
      },
      {
        title: "التشغيل",
        body: "نشغّل النظام ونربط بطارية الاحتياط، فتبدأ العمل على طاقتك الخاصة.",
      },
      {
        title: "الدعم",
        body: "مراقبة وتنظيف وفريق محلي جاهز طوال عمر النظام.",
      },
    ],
  },
  contact: {
    eyebrow: "لنبدأ",
    headingLine: "جاهز لتتوقّف عن دفع ثمن",
    headingAccent: "كهرباء تنقطع؟",
    sub: "أخبرنا عن بيتك أو عملك. سنعود إليك خلال يومَي عمل بتصميم نظام وسعر بالدينار — دون التزام.",
    details: [
      { label: "البريد", value: "info@goldensunline.iq", href: "mailto:info@goldensunline.iq" },
      { label: "الهاتف", value: "+964 750 000 0000", href: "tel:+9647500000000" },
      { label: "المكتب", value: "شارع كولان، أربيل، إقليم كردستان" },
      { label: "الدوام", value: "السبت–الخميس · 9:00–17:00" },
    ],
    form: {
      name: "الاسم",
      namePh: "اسمك",
      email: "البريد الإلكتروني",
      emailPh: "you@email.com",
      phone: "الهاتف",
      phoneOpt: "(اختياري)",
      phonePh: "+964 …",
      type: "نوع العقار",
      typeOptions: ["منزل", "شركة", "مزرعة / أرض", "أخرى"],
      message: "ما الذي تحتاجه؟",
      messagePh: "مثال: أبقِ محلّي يعمل خلال الانقطاعات بالطاقة الشمسية والبطاريات.",
      submit: "اطلب عرض السعر",
      fineprint: "نموذج تجريبي — لا يُحفظ شيء بعد. اربطه ببريدك أو بنظام إدارة العملاء لتفعيله.",
      successTitle: "شكرًا — وصلنا طلبك.",
      successBody: "سيتصل بك مستشار من Golden Sunline أو يراسلك خلال يومَي عمل.",
      reset: "إرسال طلب آخر",
    },
  },
  footer: {
    tagline: "طاقة شمسية نظيفة وموثوقة لإقليم كردستان والعراق — استيراد وتصميم وتركيب ودعم.",
    company: "الشركة",
    companyLinks: [
      { href: "#about", label: "من نحن" },
      { href: "#why", label: "لماذا الطاقة الشمسية" },
      { href: "#contact", label: "اتصل بنا" },
    ],
    services: "الخدمات",
    servicesLinks: [
      { href: "#services", label: "طاقة المنازل" },
      { href: "#services", label: "الشركات" },
      { href: "#services", label: "البطاريات" },
      { href: "#services", label: "توريد المعدّات" },
    ],
    serving: "نخدم: أربيل · السليمانية · دهوك · كركوك · بغداد · البصرة",
    rights: "© 2026 Golden Sunline Trade. جميع الحقوق محفوظة.",
    built: "من أجل شبكة أكثر إشراقًا ☀",
  },
} as const;

export type Content = typeof en;

export const dict: Record<Lang, Content> = {
  en,
  ckb: ckb as unknown as Content,
  ar: ar as unknown as Content,
};

export const LANGS: { code: Lang; short: string }[] = [
  { code: "en", short: "EN" },
  { code: "ckb", short: "کوردی" },
  { code: "ar", short: "عربی" },
];

export const RTL_LANGS: Lang[] = ["ckb", "ar"];
