const projects = {
  madinaty: {
    location: { ar: "مدينتي", en: "Madinaty" },
    title: { ar: "مطبخ مودرن فاخر بجزيرة مركزية", en: "Luxury modern kitchen with island" },
    description: {
      ar: "تصميم معاصر يجمع الواجهات اللامعة والأسطح بنقشة رخامية مع جزيرة مركزية بواجهة مضلعة، ووحدات أجهزة مدمجة ووحدة عرض زجاجية مضاءة.",
      en: "A contemporary composition of high-gloss cabinetry, marble-effect surfaces and a fluted central island, completed with integrated appliances and an illuminated glass display."
    },
    images: ["madinaty-01.webp", "madinaty-02.webp", "madinaty-03.webp"]
  },
  mansoura: {
    location: { ar: "المنصورة", en: "Mansoura" },
    title: { ar: "مطبخ مودرن بتوزيع حرف U", en: "Modern U-shaped kitchen" },
    description: {
      ar: "توزيع يستثمر المساحة ويوفر أسطح عمل وتخزين واسعة، مع مزيج متوازن بين دفء الخشب والوحدات العلوية اللامعة وتفاصيل معدنية ذهبية.",
      en: "A space-efficient U-shaped layout with generous work surfaces and storage, balancing warm wood tones, glossy upper cabinets and subtle gold accents."
    },
    images: ["mansoura-01.webp", "mansoura-02.webp", "mansoura-03.webp"]
  },
  mashreq: {
    location: { ar: "التجمع الخامس", en: "New Cairo" },
    title: { ar: "تأثيث وتجهيز مقر شركة المشرق", en: "Al Mashreq corporate interior fit-out" },
    description: {
      ar: "تجهيز متكامل لمساحات الاستقبال والانتظار والاجتماعات، مع وحدات خشبية مخصصة وتجاليد حائط وإضاءة معمارية موحدة الهوية.",
      en: "A complete reception, lounge and meeting-room fit-out with custom joinery, wall cladding and a cohesive architectural lighting language."
    },
    images: ["mashreq-01.webp", "mashreq-02.webp", "mashreq-03.webp", "mashreq-04.webp"]
  },
  shorouk: {
    location: { ar: "مدينة الشروق", en: "El Shorouk" },
    title: { ar: "تجهيز مطابخ وحدات سكنية", en: "Multi-unit residential kitchen fit-out" },
    description: {
      ar: "مجموعة مطابخ لوحدات سكنية بتوزيعات وتشطيبات متنوعة تراعي مساحة كل وحدة، مع الحفاظ على اتساق جودة التصنيع ودقة التنفيذ.",
      en: "A multi-unit residential fit-out with layouts and finishes tailored to each home while maintaining consistent build quality and execution."
    },
    images: ["shorouk-01.webp", "shorouk-02.webp", "shorouk-03.webp", "shorouk-04.webp"]
  },
  obour: {
    location: { ar: "مدينة العبور", en: "El Obour" },
    title: { ar: "مطبخ مفتوح مع بار ووحدات عرض", en: "Open-plan kitchen with breakfast bar" },
    description: {
      ar: "تصميم يجمع مساحة التحضير والضيافة، مع بار مكسو بالحجر وإضاءة دافئة ووحدات عرض زجاجية ممتدة تمنح المشروع حضورًا مميزًا.",
      en: "An open-plan kitchen uniting preparation and hosting, with a stone-clad breakfast bar and illuminated full-height glass displays."
    },
    images: ["obour-01.webp", "obour-02.webp"]
  },
  rehab: {
    location: { ar: "الرحاب", en: "Al Rehab" },
    title: { ar: "مطبخ مودرن بتخطيط متوازٍ", en: "Modern galley kitchen" },
    description: {
      ar: "تصميم متوازٍ يستثمر امتداد المساحة بكفاءة ويوفر مسارين للعمل والتخزين، بواجهات عاجية لامعة وأسقف داكنة وإضاءة سفلية.",
      en: "An efficient galley layout with two generous work and storage runs, ivory gloss cabinetry, dark surfaces and integrated plinth lighting."
    },
    images: ["rehab-01.webp", "rehab-02.webp"]
  },
  ahmed: {
    location: { ar: "دمياط الجديدة", en: "New Damietta" },
    title: { ar: "مطبخ مودرن مخصص", en: "Custom modern kitchen" },
    description: {
      ar: "واجهات فاتحة لامعة مع وحدات عرض زجاجية بإضاءة دافئة، وأسقف داكنة بنقشة رخامية وبار مفتوح يربط المطبخ بمساحة المعيشة.",
      en: "Light high-gloss cabinetry with warm illuminated glass displays, dark marble-effect worktops and an open bar connecting the kitchen to the living space."
    },
    images: ["ahmed-01.webp", "ahmed-02.webp"]
  },
  wardrobes: {
    location: { ar: "مختارات من أعمالنا", en: "Selected work" },
    title: { ar: "وحدات وخزائن مصممة حسب الطلب", en: "Bespoke wardrobes and storage" },
    description: {
      ar: "دواليب وغرف ملابس ووحدات عرض تجمع بين التقسيم العملي وجودة التشطيب والإضاءة المدروسة، مع حلول تناسب كل مساحة.",
      en: "Wardrobes, dressing rooms and display units combining practical organization, refined finishes and considered lighting for every space."
    },
    images: ["wardrobe-01.webp", "wardrobe-02.webp", "wardrobe-03.webp", "wardrobe-04.webp"]
  },
  vanities: {
    location: { ar: "مختارات من أعمالنا", en: "Selected work" },
    title: { ar: "وحدات حمامات مصممة حسب الطلب", en: "Bespoke bathroom vanities" },
    description: {
      ar: "وحدات حمامات تجمع بين الأناقة والاستخدام العملي، بتقسيمات ذكية وتشطيبات متنوعة تناسب كل مساحة وأسلوب.",
      en: "Tailor-made bathroom vanities combining refined design, practical storage and finishes selected to complement every space."
    },
    images: ["vanity-01.webp", "vanity-02.webp", "vanity-03.webp", "vanity-04.webp"]
  }
};

const root = document.documentElement;
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const languageToggle = document.querySelector(".language-toggle");
const dialog = document.querySelector("#project-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogTitle = document.querySelector("#dialog-title");
const dialogLocation = document.querySelector("#dialog-location");
const dialogDescription = document.querySelector("#dialog-description");
const dialogCounter = document.querySelector("#dialog-counter");
const thumbnails = document.querySelector("#dialog-thumbnails");
let activeProject = null;
let activeImage = 0;

function currentLanguage() {
  return root.dataset.lang === "en" ? "en" : "ar";
}

function updateSelectOptions() {
  const lang = currentLanguage();
  document.querySelectorAll("#project-type option[data-ar]").forEach((option) => {
    option.textContent = option.dataset[lang];
    option.value = option.dataset[lang];
  });
}

function setLanguage(lang) {
  root.dataset.lang = lang;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = lang === "ar"
    ? "MM FRATELLI INTERIORS | مطابخ ودواليب وحلول داخلية حسب الطلب"
    : "MM FRATELLI INTERIORS | Custom Interior Solutions";
  updateSelectOptions();
  if (activeProject) renderDialog();
  try { localStorage.setItem("fratelli-language", lang); } catch (_) {}
}

languageToggle.addEventListener("click", () => setLanguage(currentLanguage() === "ar" ? "en" : "ar"));

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.classList.toggle("open", open);
  nav.classList.toggle("open", open);
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.classList.remove("open");
  nav.classList.remove("open");
}));

window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 32), { passive: true });

function renderDialog() {
  const lang = currentLanguage();
  const project = projects[activeProject];
  if (!project) return;
  dialogImage.src = `${project.images[activeImage]}`;
  dialogImage.alt = `${project.title[lang]} — ${activeImage + 1}`;
  dialogTitle.textContent = project.title[lang];
  dialogLocation.textContent = project.location[lang];
  dialogDescription.textContent = project.description[lang];
  dialogCounter.textContent = `${String(activeImage + 1).padStart(2, "0")} / ${String(project.images.length).padStart(2, "0")}`;
  thumbnails.innerHTML = "";
  project.images.forEach((image, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === activeImage ? "active" : "";
    button.setAttribute("aria-label", `${lang === "ar" ? "عرض الصورة" : "Show image"} ${index + 1}`);
    const thumbnail = document.createElement("img");
    thumbnail.src = `${image}`;
    thumbnail.alt = "";
    thumbnail.loading = "lazy";
    button.appendChild(thumbnail);
    button.addEventListener("click", () => { activeImage = index; renderDialog(); });
    thumbnails.appendChild(button);
  });
}

function openProject(projectId) {
  activeProject = projectId;
  activeImage = 0;
  renderDialog();
  dialog.showModal();
  document.body.style.overflow = "hidden";
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
document.querySelector(".dialog-prev").addEventListener("click", () => {
  const count = projects[activeProject].images.length;
  activeImage = (activeImage - 1 + count) % count;
  renderDialog();
});
document.querySelector(".dialog-next").addEventListener("click", () => {
  const count = projects[activeProject].images.length;
  activeImage = (activeImage + 1) % count;
  renderDialog();
});
document.querySelector("#dialog-cta").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => { document.body.style.overflow = ""; activeProject = null; });
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const inside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
  if (!inside) dialog.close();
});

document.querySelector("#quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const lang = currentLanguage();
  const name = document.querySelector("#client-name").value.trim();
  const phone = document.querySelector("#client-phone").value.trim();
  const city = document.querySelector("#client-city").value.trim();
  const type = document.querySelector("#project-type").value;
  const details = document.querySelector("#project-details").value.trim();
  const message = lang === "ar"
    ? `مرحبًا FRATELLI، أرغب في طلب عرض سعر.\n\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالمدينة: ${city}\nنوع المشروع: ${type}\nالتفاصيل: ${details || "لم تُذكر"}`
    : `Hello FRATELLI, I would like to request a quotation.\n\nName: ${name}\nPhone: ${phone}\nCity: ${city}\nProject type: ${type}\nDetails: ${details || "Not provided"}`;
  window.open(`https://wa.me/201002400999?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .08, rootMargin: "0px 0px -35px" });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();

let savedLanguage = "ar";
try { savedLanguage = localStorage.getItem("fratelli-language") || "ar"; } catch (_) {}
setLanguage(savedLanguage === "en" ? "en" : "ar");
