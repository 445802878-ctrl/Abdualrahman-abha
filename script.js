const EXPERIENCE_STORAGE_KEY = "abhaExplorer.experience.v1";
const FAVORITES_STORAGE_KEY = "abhaExplorer.favorites.v1";
const LANGUAGE_STORAGE_KEY = "abhaExplorer.language.v1";

const translations = {
  en: {
    documentTitle: "Abha, Above the Clouds | Visitor Guide",
    metaDescription: "A curated visitor guide to heritage, mountain views, and culture in Abha, Saudi Arabia.",
    skipLink: "Skip to your Abha experience",
    brandName: "abha",
    brandSubtitle: "VISITOR GUIDE",
    savedLabel: "saved",
    nav: { ariaLabel: "Main navigation", experience: "Your experience", discover: "Discover", about: "About Abha" },
    hero: {
      imageAlt: "Misty mountain landscape representing Abha's highland scenery",
      kicker: "ASIR REGION · SAUDI ARABIA",
      titleFirst: "Where the mountains",
      titleEmphasis: "touch the sky.",
      copy: "Welcome to Abha—a cool, cloud-kissed city of ancient stone villages, forested peaks, and colourful creative spirit.",
      cta: "Find your experience",
      weatherTitle: "Cloudy & cool",
      weatherSubtitle: "Abha highlands",
      scrollCue: "SCROLL TO WANDER"
    },
    experience: { eyebrow: "A LITTLE LOCAL INSPIRATION", titleFirst: "Find Your Abha", titleEmphasis: "Experience.", intro: "Pick everything that sounds like you. We will shape a memorable Abha day around it." },
    quiz: { step: "01 / YOUR INTERESTS", question: "What would you love to explore in Abha?", helper: "Select one or more interests to unlock your personal recommendations.", groupLabel: "Choose your Abha interests", show: "Show My Recommendations", reset: "Start Over" },
    interests: { heritage: "Heritage & History", nature: "Nature & Mountains", art: "Art & Culture", food: "Food & Coffee", photography: "Photography", family: "Family Activities", adventure: "Adventure & Hiking", relaxation: "Relaxation & Scenic Views" },
    recommendations: { eyebrow: "MADE FOR YOUR KIND OF ESCAPE", titleFirst: "Your Perfect Abha", titleEmphasis: "Experience.", viewDetails: "View Details" },
    welcome: { eyebrow: "A DIFFERENT SIDE OF SAUDI", titleFirst: "Slow down. Look", titleEmphasis: "up.", titleSecond: "Feel at home in the heights.", copy: "At nearly 2,200 metres above sea level, Abha surprises at every turn. The capital of Asir is a refreshing escape shaped by a dramatic landscape, layered history, and a living artistic tradition.", link: "Find your kind of Abha" },
    discover: { eyebrow: "CURATED FOR CURIOUS TRAVELLERS", titleFirst: "Find your Abha", titleEmphasis: "moment.", countLabel: "places to discover", filterLabel: "Filter attractions by category", empty: "No places found in this category." },
    filters: { all: "All", heritage: "Heritage", nature: "Nature & views", culture: "Arts & culture" },
    closing: { eyebrow: "MAKE ROOM FOR WONDER", titleFirst: "Abha is waiting", titleSecond: "just", titleEmphasis: "above.", topLabel: "Return to top" },
    footer: { copy: "Curated with care for the curious traveller." },
    reasons: {
      heritageTabab: "Recommended for you because you enjoy heritage and history. Tabab Castle offers a glimpse into the region’s historic architecture and cultural story.",
      heritageMuftaha: "Recommended for you because you enjoy heritage, traditional architecture, and local culture.",
      natureSoudah: "Recommended for you because you enjoy mountain landscapes, cool weather, forests, and panoramic views.",
      natureQuroon: "Recommended for you because you enjoy a mountain hike, fresh air, and sweeping Asir views.",
      art: "Recommended for you because you enjoy creative spaces, local art, colorful murals, and cultural experiences.",
      food: "Recommended for you because you enjoy discovering local flavors, traditional Saudi dishes, and cozy cafés.",
      photography: "Recommended for you because these places offer dramatic mountain views, colorful details, clouds, and memorable photo opportunities.",
      photographyQuroon: "Recommended for you because these places offer dramatic mountain views, clouds, and memorable photo opportunities.",
      family: "Recommended for you because these destinations are suitable for a relaxed family outing with scenery, culture, and space to explore.",
      adventure: "Recommended for you because you enjoy outdoor adventure, high-altitude scenery, walking, and mountain exploration.",
      relaxationQuroon: "Recommended for you because you prefer peaceful mountain views, fresh air, and a slower travel experience.",
      relaxationSoudah: "Recommended for you because you prefer peaceful views, fresh mountain air, and a slower travel experience."
    }
  },
  ar: {
    documentTitle: "أبها، فوق السحاب | دليل الزائر",
    metaDescription: "دليل مختار لاستكشاف التراث والطبيعة والثقافة في أبها، المملكة العربية السعودية.",
    skipLink: "انتقل إلى تجربة أبها الخاصة بك",
    brandName: "أبها",
    brandSubtitle: "دليل الزائر",
    savedLabel: "محفوظة",
    nav: { ariaLabel: "التنقل الرئيسي", experience: "تجربتك", discover: "استكشف", about: "عن أبها" },
    hero: {
      imageAlt: "منظر جبلي ضبابي من مرتفعات أبها",
      kicker: "منطقة عسير · المملكة العربية السعودية",
      titleFirst: "حيث الجبال",
      titleEmphasis: "تلامس السماء.",
      copy: "مرحبًا بك في أبها؛ مدينة باردة تعانق السحاب، تجمع بين القرى الحجرية العريقة والقمم الخضراء وروح الفن النابضة.",
      cta: "اكتشف تجربتك",
      weatherTitle: "غائم ولطيف",
      weatherSubtitle: "مرتفعات أبها",
      scrollCue: "اكتشف المزيد"
    },
    experience: { eyebrow: "إلهام محلي لك", titleFirst: "اكتشف تجربة", titleEmphasis: "أبها الخاصة بك.", intro: "اختر ما يلفت اهتمامك، وسنصمم لك يومًا لا يُنسى في أبها." },
    quiz: { step: "01 / اهتماماتك", question: "ماذا تحب أن تستكشف في أبها؟", helper: "اختر اهتمامًا واحدًا أو أكثر لتحصل على توصياتك الشخصية.", groupLabel: "اختر اهتماماتك في أبها", show: "اعرض توصياتي", reset: "ابدأ من جديد" },
    interests: { heritage: "التراث والتاريخ", nature: "الطبيعة والجبال", art: "الفن والثقافة", food: "الطعام والقهوة", photography: "التصوير", family: "أنشطة عائلية", adventure: "المغامرة والهايكنق", relaxation: "الاسترخاء والمناظر" },
    recommendations: { eyebrow: "صُممت لنوع رحلتك", titleFirst: "تجربتك المثالية في", titleEmphasis: "أبها.", viewDetails: "عرض التفاصيل" },
    welcome: { eyebrow: "وجه مختلف من السعودية", titleFirst: "تمهّل. انظر", titleEmphasis: "إلى الأعلى.", titleSecond: "واشعر بالراحة بين المرتفعات.", copy: "تقع أبها على ارتفاع يقارب 2200 متر فوق سطح البحر، وتفاجئك في كل منعطف. عاصمة عسير ملاذ منعش تشكله الطبيعة الدرامية والتاريخ العريق والتقاليد الفنية الحية.", link: "اكتشف أبها بطريقتك" },
    discover: { eyebrow: "مختار للمسافر الفضولي", titleFirst: "اعثر على لحظتك في", titleEmphasis: "أبها.", countLabel: "أماكن لاستكشافها", filterLabel: "تصفية المعالم حسب الفئة", empty: "لا توجد أماكن في هذه الفئة." },
    filters: { all: "الكل", heritage: "التراث", nature: "الطبيعة والمناظر", culture: "الفن والثقافة" },
    closing: { eyebrow: "اترك مساحة للدهشة", titleFirst: "أبها بانتظارك", titleSecond: "فوق", titleEmphasis: "السحاب." , topLabel: "العودة إلى الأعلى" },
    footer: { copy: "دليل مُعد بعناية للمسافر الفضولي." },
    reasons: {
      heritageTabab: "نرشحها لك لأنك تحب التراث والتاريخ. تمنحك قلعة طبب لمحة عن العمارة التاريخية وقصة المنطقة الثقافية.",
      heritageMuftaha: "نرشحها لك لأنك تحب التراث والعمارة التقليدية والثقافة المحلية.",
      natureSoudah: "نرشحها لك لأنك تحب المناظر الجبلية والطقس البارد والغابات والإطلالات البانورامية.",
      natureQuroon: "نرشحها لك لأنك تحب المشي الجبلي والهواء النقي وإطلالات عسير الواسعة.",
      art: "نرشحها لك لأنك تحب المساحات الإبداعية والفن المحلي والجداريات الملونة والتجارب الثقافية.",
      food: "نرشحها لك لأنك تحب اكتشاف النكهات المحلية والأطباق السعودية التقليدية والمقاهي الدافئة.",
      photography: "نرشحها لك لأن هذه الأماكن تمنحك مناظر جبلية درامية وتفاصيل ملونة وسحبًا وفرصًا لا تُنسى للتصوير.",
      photographyQuroon: "نرشحها لك لأن هذه الأماكن تمنحك مناظر جبلية درامية وسحبًا وفرصًا لا تُنسى للتصوير.",
      family: "نرشحها لك لأن هذه الوجهات مناسبة لنزهة عائلية هادئة تجمع المناظر والثقافة ومساحة للاستكشاف.",
      adventure: "نرشحها لك لأنك تحب المغامرة في الهواء الطلق والمناظر المرتفعة والمشي واستكشاف الجبال.",
      relaxationQuroon: "نرشحها لك لأنك تفضل المناظر الجبلية الهادئة والهواء النقي وتجربة سفر أكثر هدوءًا.",
      relaxationSoudah: "نرشحها لك لأنك تفضل الإطلالات الهادئة وهواء الجبال النقي وتجربة سفر أكثر هدوءًا."
    }
  }
};

const places = {
  "tabab-castle": {
    image: "assets/tabab-castle.webp", detailHref: "#place-tabab", filterCategory: "heritage",
    copy: {
      en: { title: "Tabab Castle", category: "Heritage", alt: "Stone-built Tabab Castle in the Abha highlands", location: "Tabab", description: "Explore historic stone towers that share the cultural story of Abha’s mountain routes.", link: "Discover the story" },
      ar: { title: "قلعة طبب", category: "التراث والتاريخ", alt: "قلعة طبب الحجرية في مرتفعات أبها", location: "طبب", description: "استكشف أبراجًا حجرية تاريخية تروي القصة الثقافية لطرق أبها الجبلية.", link: "اكتشف القصة" }
    }
  },
  "rijal-almaa": {
    image: "assets/rijal-almaa.webp", detailHref: "#place-rijal", filterCategory: "heritage",
    copy: {
      en: { title: "Rijal Almaa Heritage Village", category: "Heritage", alt: "Historic stone village representing Rijal Almaa Heritage Village", location: "Rijal Almaa", description: "Wander through tall, colourful stone homes set dramatically among the mountains.", link: "Discover the story" },
      ar: { title: "قرية رجال ألمع التراثية", category: "التراث والتاريخ", alt: "قرية رجال ألمع التراثية الحجرية", location: "رجال ألمع", description: "تجوّل بين المنازل الحجرية الملونة الشاهقة وسط مشهد جبلي أخّاذ.", link: "اكتشف القصة" }
    }
  },
  "aqabat-al-quroon-hiking": {
    image: "assets/aqabat-al-quroon.webp", detailHref: "#place-aqabat-al-quroon", filterCategory: "nature",
    copy: {
      en: { title: "Aqabat Al Quroon Hiking Experience", category: "Adventure & Hiking", alt: "Mountain landscape at the Aqabat Al Quroon hiking route", location: "Aqabat Al Quroon", description: "Take a rewarding mountain hike with open views, fresh air, and a true Asir adventure.", link: "Explore the trail" },
      ar: { title: "تجربة الهايكنق في عقبة القرون", category: "المغامرة والهايكنق", alt: "منظر جبلي لمسار الهايكنق في عقبة القرون", location: "عقبة القرون", description: "استمتع برحلة هايكنق جبلية مميزة مع إطلالات مفتوحة وهواء نقي ومغامرة عسيرية أصيلة.", link: "استكشف المسار" }
    }
  },
  "al-soudah-park": {
    image: "assets/al-soudah-park.jpeg", detailHref: "#place-soudah", filterCategory: "nature",
    copy: {
      en: { title: "Al Soudah Park", category: "Nature & Adventure", alt: "Forest-covered mountain landscape representing Al Soudah Park", location: "Al Soudah", description: "Cool mountain air, forest paths, and a dramatic high-altitude view of the Asir landscape.", link: "Discover the park" },
      ar: { title: "حديقة السودة", category: "الطبيعة والمغامرة", alt: "منظر جبلي مكسو بالغابات في حديقة السودة", location: "السودة", description: "هواء جبلي بارد ومسارات غابات وإطلالة مرتفعة مبهرة على طبيعة عسير.", link: "استكشف الحديقة" }
    }
  },
  "al-muftaha-village": {
    image: "assets/al-muftaha-village.jpg", detailHref: "#place-muftaha", filterCategory: "culture",
    copy: {
      en: { title: "Al Muftaha Village", category: "Arts & Culture", alt: "Al Muftaha Village in Abha", location: "Al Muftaha", description: "Step into a creative quarter of traditional architecture, galleries, workshops, and local expression.", link: "Discover the art" },
      ar: { title: "قرية المفتاحة", category: "الفن والثقافة", alt: "قرية المفتاحة في أبها", location: "المفتاحة", description: "ادخل إلى حي إبداعي يجمع العمارة التقليدية والمعارض والورش والتعبير المحلي.", link: "اكتشف الفن" }
    }
  },
  "art-street": {
    image: "assets/art-street.jpg", detailHref: "#place-art-street", filterCategory: "culture",
    copy: {
      en: { title: "Art Street", category: "Arts & Culture", alt: "Art Street in Abha", location: "Abha", description: "Follow the colour along a beloved open-air route where artists and everyday life meet.", link: "Discover the art" },
      ar: { title: "شارع الفن", category: "الفن والثقافة", alt: "شارع الفن في أبها", location: "أبها", description: "اتبع الألوان في طريق مفتوح محبوب، يلتقي فيه الفنانون والحياة اليومية.", link: "اكتشف الفن" }
    }
  },
  "food-coffee-experience": {
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", detailHref: "#discover", filterCategory: "food",
    copy: {
      en: { title: "Food & Coffee Experience", category: "Food & Coffee", alt: "A coffee served beside a local breakfast spread", location: "Abha", description: "Taste local flavours, traditional Saudi dishes, and welcoming cafés around Abha.", link: "Explore flavours" },
      ar: { title: "تجربة الطعام والقهوة", category: "الطعام والقهوة", alt: "قهوة تقدم بجوار مائدة إفطار محلية", location: "أبها", description: "تذوق النكهات المحلية والأطباق السعودية التقليدية والمقاهي الترحيبية في أبها.", link: "استكشف النكهات" }
    }
  }
};

const recommendationDefinitions = {
  heritage: [{ placeId: "tabab-castle", reasonKey: "heritageTabab" }, { placeId: "al-muftaha-village", reasonKey: "heritageMuftaha" }],
  nature: [{ placeId: "al-soudah-park", reasonKey: "natureSoudah" }, { placeId: "aqabat-al-quroon-hiking", reasonKey: "natureQuroon" }],
  art: [{ placeId: "art-street", reasonKey: "art" }, { placeId: "al-muftaha-village", reasonKey: "art" }],
  food: [{ placeId: "food-coffee-experience", reasonKey: "food" }],
  photography: [{ placeId: "al-soudah-park", reasonKey: "photography" }, { placeId: "aqabat-al-quroon-hiking", reasonKey: "photographyQuroon" }, { placeId: "art-street", reasonKey: "photography" }],
  family: [{ placeId: "al-soudah-park", reasonKey: "family" }, { placeId: "al-muftaha-village", reasonKey: "family" }],
  adventure: [{ placeId: "al-soudah-park", reasonKey: "adventure" }, { placeId: "aqabat-al-quroon-hiking", reasonKey: "adventure" }],
  relaxation: [{ placeId: "aqabat-al-quroon-hiking", reasonKey: "relaxationQuroon" }, { placeId: "al-soudah-park", reasonKey: "relaxationSoudah" }]
};

const root = document.documentElement;
const languageToggle = document.querySelector("#language-toggle");
const languageToggleLabel = document.querySelector("#language-toggle-label");
const languageStatus = document.querySelector("#language-status");
const metaDescription = document.querySelector('meta[name="description"]');
const interestButtons = [...document.querySelectorAll(".interest-chip")];
const showRecommendationsButton = document.querySelector("#show-recommendations");
const resetExperienceButton = document.querySelector("#reset-experience");
const selectionStatus = document.querySelector("#selection-status");
const results = document.querySelector("#experience-results");
const recommendationGrid = document.querySelector("#recommendation-grid");
const recommendationCount = document.querySelector("#recommendation-count");
const recommendationsTitle = document.querySelector("#recommendations-title");
const favoritesCount = document.querySelector("#favorites-count");
const savedPlaces = document.querySelector(".saved-places");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const placeCards = [...document.querySelectorAll("#heritage > .place-card")];
const count = document.querySelector("#count");
const emptyState = document.querySelector("#empty-state");

let currentLanguage = readStoredLanguage();
let selectedInterests = new Set(readStoredArray(EXPERIENCE_STORAGE_KEY).filter((interest) => recommendationDefinitions[interest]));
let favorites = new Set(readStoredArray(FAVORITES_STORAGE_KEY).filter((placeId) => places[placeId]));
let activeFilter = "all";

function getByPath(object, path) {
  return path.split(".").reduce((value, key) => value?.[key], object);
}

function t(path) {
  return getByPath(translations[currentLanguage], path) ?? "";
}

function getPlaceCopy(placeId) {
  return places[placeId].copy[currentLanguage];
}

function readStoredArray(key) {
  try {
    const storedValue = JSON.parse(localStorage.getItem(key));
    return Array.isArray(storedValue) ? storedValue : [];
  } catch {
    return [];
  }
}

function saveStoredArray(key, values) {
  try {
    localStorage.setItem(key, JSON.stringify([...values]));
  } catch {
    // The page remains functional if browser storage is unavailable.
  }
}

function removeStoredValue(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // The in-memory state has already been reset.
  }
}

function readStoredLanguage() {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return translations[storedLanguage] ? storedLanguage : "en";
  } catch {
    return "en";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Language remains active for this visit if storage is unavailable.
  }
}

function formatNumber(number) {
  return new Intl.NumberFormat(currentLanguage === "ar" ? "ar-SA" : "en").format(number);
}

function selectedStatusMessage(selectedCount) {
  if (!selectedCount) return currentLanguage === "ar" ? "اختر اهتمامًا واحدًا على الأقل للبدء." : "Select at least one interest to begin.";
  if (currentLanguage === "ar") return `تم اختيار ${formatNumber(selectedCount)} من الاهتمامات. توصياتك جاهزة عندما تكون مستعدًا.`;
  return `${selectedCount} ${selectedCount === 1 ? "interest" : "interests"} selected. Your recommendations are ready when you are.`;
}

function recommendationCountMessage(matchesCount) {
  if (currentLanguage === "ar") return `${formatNumber(matchesCount)} ${matchesCount === 1 ? "وجهة مختارة لك" : "وجهات مختارة لك"}`;
  return `${matchesCount} ${matchesCount === 1 ? "place" : "places"} chosen for you`;
}

function resultsReadyMessage(matchesCount) {
  if (currentLanguage === "ar") return `أصبحت ${formatNumber(matchesCount)} ${matchesCount === 1 ? "وجهة" : "وجهات"} جاهزة لتجربتك في أبها.`;
  return `${matchesCount} ${matchesCount === 1 ? "place is" : "places are"} ready for your Abha experience.`;
}

function savedPlacesMessage(savedCount) {
  if (currentLanguage === "ar") return `${formatNumber(savedCount)} ${savedCount === 1 ? "وجهة محفوظة" : "وجهات محفوظة"}`;
  return `${savedCount} ${savedCount === 1 ? "saved place" : "saved places"}`;
}

function updateStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });
}

function updateStaticPlaceCards() {
  placeCards.forEach((card) => {
    const placeId = card.dataset.placeId;
    const place = places[placeId];
    const copy = getPlaceCopy(placeId);
    const imageLink = card.querySelector(".image-link");
    const image = card.querySelector("img");

    imageLink.setAttribute("aria-label", currentLanguage === "ar" ? `اقرأ عن ${copy.title}` : `Read about ${copy.title}`);
    image.alt = copy.alt;
    card.querySelector("[data-place-location]").textContent = copy.location;
    card.querySelector("[data-place-category]").textContent = copy.category;
    card.querySelector("[data-place-title]").textContent = copy.title;
    card.querySelector("[data-place-description]").textContent = copy.description;
    card.querySelector("[data-place-link]").textContent = copy.link;
  });
}

function updateLanguageToggle() {
  const nextLanguage = currentLanguage === "en" ? "ar" : "en";
  languageToggleLabel.textContent = nextLanguage === "ar" ? "العربية" : "English";
  languageToggleLabel.lang = nextLanguage;
  languageToggleLabel.dir = nextLanguage === "ar" ? "rtl" : "ltr";
  languageToggle.setAttribute("aria-label", currentLanguage === "ar"
    ? "تغيير اللغة. اللغة الحالية: العربية. التبديل إلى الإنجليزية."
    : "Change language. Current language: English. Switch to Arabic.");
}

function applyLanguage(language, { announce = false } = {}) {
  if (!translations[language]) return;

  currentLanguage = language;
  root.lang = language;
  root.dir = language === "ar" ? "rtl" : "ltr";
  document.title = t("documentTitle");
  metaDescription.content = t("metaDescription");
  updateStaticTranslations();
  updateStaticPlaceCards();
  updateLanguageToggle();
  updateSelectionUI();
  filterPlaces(activeFilter);
  syncFavoriteUI();

  if (!results.hidden) {
    renderRecommendations();
  }

  if (announce) {
    languageStatus.textContent = currentLanguage === "ar" ? "تم تغيير اللغة إلى العربية." : "Language changed to English.";
  }
}

function updateSelectionUI() {
  interestButtons.forEach((button) => {
    const isSelected = selectedInterests.has(button.dataset.interest);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  const selectedCount = selectedInterests.size;
  showRecommendationsButton.disabled = selectedCount === 0;
  resetExperienceButton.hidden = selectedCount === 0 && results.hidden;
  selectionStatus.textContent = selectedStatusMessage(selectedCount);
}

function getRecommendations() {
  const rankedPlaces = new Map();

  selectedInterests.forEach((interest) => {
    recommendationDefinitions[interest].forEach((recommendation, index) => {
      const current = rankedPlaces.get(recommendation.placeId);

      if (current) {
        current.score += 1;
        current.reasonKeys.push(recommendation.reasonKey);
      } else {
        rankedPlaces.set(recommendation.placeId, { ...recommendation, score: 1, order: rankedPlaces.size + index, reasonKeys: [recommendation.reasonKey] });
      }
    });
  });

  return [...rankedPlaces.values()].sort((first, second) => second.score - first.score || first.order - second.order);
}

function createHeartIcon() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M20.8 8.3c0 5.2-8.8 10.5-8.8 10.5S3.2 13.5 3.2 8.3A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.8 1.9Z");
  path.setAttribute("stroke", "currentColor");
  path.setAttribute("stroke-width", "1.8");
  path.setAttribute("stroke-linejoin", "round");
  svg.append(path);
  return svg;
}

function createRecommendationCard(recommendation) {
  const place = places[recommendation.placeId];
  const copy = getPlaceCopy(recommendation.placeId);
  const card = document.createElement("article");
  card.className = "recommendation-card";
  card.dataset.placeId = recommendation.placeId;

  const imageLink = document.createElement("a");
  imageLink.className = "recommendation-image";
  imageLink.href = place.detailHref;
  imageLink.setAttribute("aria-label", currentLanguage === "ar" ? `عرض تفاصيل ${copy.title}` : `View details for ${copy.title}`);

  const image = document.createElement("img");
  image.src = place.image;
  image.alt = copy.alt;
  image.loading = "lazy";
  image.width = 800;
  image.height = 600;
  imageLink.append(image);

  const favoriteButton = document.createElement("button");
  favoriteButton.type = "button";
  favoriteButton.className = "favorite-button";
  favoriteButton.dataset.placeId = recommendation.placeId;
  favoriteButton.append(createHeartIcon());

  const body = document.createElement("div");
  body.className = "recommendation-body";
  const category = document.createElement("p");
  category.className = "category";
  category.textContent = copy.category;
  const title = document.createElement("h3");
  title.textContent = copy.title;
  const reason = document.createElement("p");
  reason.className = "recommendation-reason";
  reason.textContent = t(`reasons.${recommendation.reasonKeys[0]}`);
  const detailsLink = document.createElement("a");
  detailsLink.className = "view-details";
  detailsLink.href = place.detailHref;
  detailsLink.append(`${t("recommendations.viewDetails")} `);
  const arrow = document.createElement("span");
  arrow.className = "directional-icon";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "→";
  detailsLink.append(arrow);
  body.append(category, title, reason, detailsLink);
  card.append(imageLink, favoriteButton, body);
  return card;
}

function renderRecommendations({ moveFocus = false } = {}) {
  const matches = getRecommendations();
  recommendationGrid.replaceChildren();

  if (!matches.length) {
    results.hidden = true;
    updateSelectionUI();
    return;
  }

  const fragment = document.createDocumentFragment();
  matches.forEach((recommendation) => fragment.append(createRecommendationCard(recommendation)));
  recommendationGrid.append(fragment);
  recommendationCount.textContent = recommendationCountMessage(matches.length);
  results.hidden = false;
  resetExperienceButton.hidden = false;
  selectionStatus.textContent = resultsReadyMessage(matches.length);
  syncFavoriteUI();

  if (moveFocus) recommendationsTitle.focus({ preventScroll: true });
}

function getPlaceTitle(placeId) {
  return places[placeId] ? getPlaceCopy(placeId).title : (currentLanguage === "ar" ? "هذه الوجهة" : "this place");
}

function syncFavoriteUI() {
  document.querySelectorAll(".favorite-button").forEach((button) => {
    const placeId = button.dataset.placeId;
    const isFavorite = favorites.has(placeId);
    const title = getPlaceTitle(placeId);
    button.setAttribute("aria-pressed", String(isFavorite));
    button.setAttribute("aria-label", isFavorite
      ? (currentLanguage === "ar" ? `إزالة ${title} من الأماكن المحفوظة` : `Remove ${title} from saved places`)
      : (currentLanguage === "ar" ? `حفظ ${title}` : `Save ${title}`));
  });

  favoritesCount.textContent = formatNumber(favorites.size);
  savedPlaces.setAttribute("aria-label", savedPlacesMessage(favorites.size));
}

function toggleFavorite(placeId) {
  if (!places[placeId]) return;
  favorites.has(placeId) ? favorites.delete(placeId) : favorites.add(placeId);
  saveStoredArray(FAVORITES_STORAGE_KEY, favorites);
  syncFavoriteUI();
}

function resetExperience() {
  selectedInterests.clear();
  removeStoredValue(EXPERIENCE_STORAGE_KEY);
  recommendationGrid.replaceChildren();
  results.hidden = true;
  updateSelectionUI();
  selectionStatus.textContent = currentLanguage === "ar" ? "تم مسح اهتماماتك وتوصياتك. اختر تجربة جديدة في أبها." : "Your interests and recommendations have been cleared. Choose a new kind of Abha experience.";
  interestButtons[0]?.focus();
}

function filterPlaces(category) {
  activeFilter = category;
  let visibleCards = 0;

  placeCards.forEach((card) => {
    const shouldShow = category === "all" || card.dataset.category === category;
    card.classList.toggle("is-filtered", !shouldShow);
    if (shouldShow) visibleCards += 1;
  });

  filterButtons.forEach((button) => {
    const isSelected = button.dataset.filter === category;
    button.classList.toggle("active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  count.textContent = formatNumber(visibleCards);
  emptyState.hidden = visibleCards !== 0;
}

interestButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { interest } = button.dataset;
    selectedInterests.has(interest) ? selectedInterests.delete(interest) : selectedInterests.add(interest);
    saveStoredArray(EXPERIENCE_STORAGE_KEY, selectedInterests);
    updateSelectionUI();
  });
});

showRecommendationsButton.addEventListener("click", () => renderRecommendations({ moveFocus: true }));
resetExperienceButton.addEventListener("click", resetExperience);
languageToggle.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "en" ? "ar" : "en";
  saveLanguage(nextLanguage);
  applyLanguage(nextLanguage, { announce: true });
});

document.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest(".favorite-button");
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.placeId);
});

filterButtons.forEach((button) => button.addEventListener("click", () => filterPlaces(button.dataset.filter)));

applyLanguage(currentLanguage);
