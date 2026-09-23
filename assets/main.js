/**
 * Ideamart Store - Main Interactive Script
 * Zero build step, vanilla JS for GitHub Pages & Android WebView
 */

// Global product database
const PRODUCTS_DATA = [
  {
    id: "prompt-pro",
    code: "IDM-101",
    title: "پکیج پرامپت حرفه‌ای",
    category: "ai",
    categoryName: "هوش مصنوعی",
    badge: "دیجیتال",
    badgeColor: "bg-electric-blue/90 text-on-primary",
    price: 2000000,
    priceFormatted: "۲,۰۰۰,۰۰۰ تومان",
    rating: 4.9,
    reviewsCount: 128,
    description: "مجموعه بیش از ۱۰۰ پرامپت بهینه‌شده برای ChatGPT، Midjourney و Claude جهت افزایش چشمگیر بهره‌وری و خروجی باکیفیت.",
    fullDescription: "این پکیج شامل جامع‌ترین دستورالعمل‌ها و الگوهای مهندسی پرامپت در حوزه‌های تولید محتوا، کدنویسی، طراحی گرافیک، بازاریابی و تحلیل داده است. به همراه آپدیت‌های ماهانه رایگان.",
    features: [
      "بیش از ۱۰۰ پرامپت تست‌شده و دقیق",
      "سازگار با ChatGPT-4o، Midjourney v6 و Claude 3.5",
      "راهنمای گام‌به‌گام شخصی‌سازی متغیرها",
      "دسترسی نامحدود و آپدیت‌های دائمی"
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC52C2wglT5ng3RM25w8M-47Kfuvg-i28v7dSsB5J4zleOBlyifsX1Jx1MtJ49v59gw1FFfTNDjzuflrnpnsJhiTi6r_7Qyi1a-jfqI8lARqtcV57XAiJgU7ke2STjd1HgAXgtgAOQeLtkVfAcB0zGmucvmo1TUrP4g3LdPm1gk2KMeybQNnTS_PhKtNiwiAhdfGlQIKjHVadDQzlNMYzHbVJAkQk3AZrNm6kOZ3kL_uL6O2RHdiuQcGw"
  },
  {
    id: "content-packs",
    code: "IDM-102",
    title: "بسته‌های تولید محتوا",
    category: "content",
    categoryName: "تولید محتوا",
    badge: "تولید محتوا",
    badgeColor: "bg-neon-purple/90 text-on-primary",
    price: 500000,
    priceFormatted: "۵۰۰,۰۰۰ تومان",
    rating: 4.8,
    reviewsCount: 94,
    description: "عکس‌ها با موضوعات مختلف و ارائه در بسته‌های ۱۰ تایی جهت درج در شبکه‌های اجتماعی و ویژه ادمین‌های محترم.",
    fullDescription: "مجموعه‌ای نفیس از تصاویر با کیفیت فوق‌العاده 4K، استوک‌های اختصاصی و تم‌های مدرن نئونی و مینیمال برای ارتقای پیج‌های اینستاگرام و کانال‌های تلگرام.",
    features: [
      "پک‌های تم‌بندی شده و هماهنگ",
      "فرمت‌های PNG و JPG با رزولوشن بالا",
      "شامل فایل‌های خام بدون واترمارک",
      "ایده‌آل برای کاور پست، استوری و ریلز"
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWcILxCXzUNxpur1xvWy5TNFED-lKrPNmKd2Ro47iQ7lT1GMObzChSKA6fkFyRDO61W_GJPz4pB6iobhg5GpkigL_JyJf7jc9Sm7AT9Ruh1is4-zbO4BWJlbylJrhVfUhUV5dOO0UUFmpsDtuyCIw2LsdK-cKU1JXvTnmwTnj50M9h3NjTpf6gcNsioUH15i_fniapk4a0pQS3iMEOU7trNo8uO_K-zaK9GRUT3shPDyX2PTdWcNtKvAgxYICLbfMLcileqawxNXr3wU8"
  },
  {
    id: "ai-video-course",
    code: "IDM-103",
    title: "آموزش ویدیویی ابزارهای کاربردی هوش مصنوعی",
    category: "ai",
    categoryName: "هوش مصنوعی",
    badge: "هوش مصنوعی",
    badgeColor: "bg-bright-cyan/90 text-on-primary",
    price: 2000000,
    priceFormatted: "۲,۰۰۰,۰۰۰ تومان",
    rating: 5.0,
    reviewsCount: 210,
    description: "جعبه ابزار همراه با آموزش کاربردی ابزارهای گرافیکی و پژوهشی، مناسب برای دانشجویان، اساتید، معلمان و دانش‌آموزان (هر پک شامل ۱۰ ابزار).",
    fullDescription: "دوره جامع و پروژه محور آموزش جدیدترین هوش‌های مصنوعی کاربردی روز دنیا برای ساخت محتوای ویدیویی، خلاصه‌سازی اسناد علمی، ساخت پاورپوینت خودکار و تولید صدا.",
    features: [
      "بیش از ۱۰ ساعت ویدیوی آموزشی با کیفیت عالی",
      "آموزش گام‌به‌گام از مبتدی تا پیشرفته",
      "معرفی ابزارهای رایگان و جایگزین‌های اشتراکی",
      "پروژه‌های عملی و فایل‌های تمرینی همراه"
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIcvuI65dz16TkNWxmaXwu1BXxP22Q3R9PZ7GGKbNBfBNWwWohzudGCdeCICaHfaIzcq8EDEs-bPncnIrfHON0I-XnZV5aEqBXxzw0eV85ZU0eqYoyt95cNwatC1uAou3g5Petu7UhGY7zY4usRAPzIY1t137LdaAY9b-B-tb114r8BnXq2Ml_A7FZ0yfw4-8CpmGl0pej0jiuM3aKMnyS1ggAgoKB9bW8r8JPq1R-j6wT21i8sgGfJQ"
  },
  {
    id: "youtube-summarizer",
    code: "IDM-104",
    title: "خلاصه نویسی و پیاده‌سازی متنی فیلم‌های یوتیوب",
    category: "script",
    categoryName: "اسکریپت و وب",
    badge: "اسکریپت",
    badgeColor: "bg-electric-blue/95 text-on-primary",
    price: 2500000,
    priceFormatted: "۲,۵۰۰,۰۰۰ تومان",
    rating: 4.7,
    reviewsCount: 76,
    description: "پس از ارسال لینک یوتیوب، متن ویدیو، خلاصه ساختار یافته، اینفوگرافی نکات برجسته و پاورپوینت اسلایدی آن را دریافت کنید.",
    fullDescription: "ابزار خودکار و سرویس سریع برای پیاده‌سازی زیرنویس دقیق، تبدیل گفتار به متن به همراه تحلیل و استخراج بخش‌های کلیدی ویدیوهای طولانی یوتیوب در چند دقیقه.",
    features: [
      "خلاصه‌سازی ویدیوها به زبان فارسی روان",
      "استخراج نکات کلیدی به همراه تایم‌استمپ",
      "تولید فایل اسلایدی و پاورپوینت خلاصه",
      "تحویل سریع از طریق ربات تلگرام"
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpCpyl0NFHUEJHTbESNC1jm-IiD08nfaVkqORN6VA0eQFUZMiAPkTuMs2OXDECY439p4SA8Pg-P9KzfzgPrFRa8xd3hzMlLNcWs15x6Kw71UPWVB24pMNLSVMbNS18ZY6xloVEHhQDgV9KP96SORIP42H0EOh3guDD8-x-bAyk5zoyoSUSZVvdBSoxFrbpjvrWxzXU-WuxfJYfdDDMQWVoZrkGC2Noc_9FbjQXFpH0SOeZB6ROR9oFALGgf5UrUeziNNYOekslkZDnj7I"
  },
  {
    id: "topic-presentation",
    code: "IDM-105",
    title: "پاورپوینت‌های موضوعی و شرکتی",
    category: "branding",
    categoryName: "فایل‌ها و آموزش‌ها",
    badge: "برندینگ",
    badgeColor: "bg-neon-purple/95 text-on-primary",
    price: 750000,
    priceFormatted: "۷۵۰,۰۰۰ تومان",
    rating: 4.9,
    reviewsCount: 112,
    description: "ارسال موضوع از شما و آماده‌سازی پاورپوینت حرفه‌ای از ما، هر ۱۵ اسلاید همراه با تولید محتوای تخصصی موضوع سفارش‌شده.",
    fullDescription: "طراحی اسلایدهای شرکتی، دانشجویی و استارتاپی با گرافیک‌های اختصاصی برداری، چارت‌های تعاملی و رعایت اصول بصری برای ارائه بی‌نقص شما در جلسات.",
    features: [
      "۱۵ اسلاید اختصاصی و انیمیشن‌دار",
      "تولید متن و سرفصل‌های تخصصی با هوش مصنوعی",
      "ارائه فرمت PPTX قابل ویرایش + PDF",
      "یک مرحله بازبینی و ویرایش رایگان"
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFfGkas6xTJl5bHqR7_2O7UCaIDtUi_Ch_x6WQAmyQSYeBAM737FJSzOh6yD31meQMDs5aQ9H0NYVNIWb-B8FjoERp3_edngcCT7-r5vm0PAEpXRqZkh-thtqSmJRpt8aMQUZLINP_GOexWJYbWtaceA_2A2WKKUvkrQGvPnFzNZO3FCQoUTGDfxQ95B1GQQGCfdF8i9dkMv-FVmtp9HWMTPoQqRLp2RmmGFydGcMnJ_hkwKb2kquuyQ"
  },
  {
    id: "telegram-bot-source",
    code: "IDM-106",
    title: "سورس ربات تلگرام فروشگاهی هوشمند",
    category: "script",
    categoryName: "اسکریپت و وب",
    badge: "اسکریپت",
    badgeColor: "bg-electric-blue/90 text-on-primary",
    price: 1800000,
    priceFormatted: "۱,۸۰۰,۰۰۰ تومان",
    rating: 5.0,
    reviewsCount: 85,
    description: "کد منبع کامل ربات تلگرام متصل به درگاه پرداخت و پنل مدیریت جهت فروش اتوماتیک فایل‌ها و محصولات دیجیتال بدون نیاز به سایت.",
    fullDescription: "سورس آماده با پایتون و پایگاه داده سبک، قابلیت تعریف محصولات نامحدود، اتصال به درگاه‌های پرداخت شتاب، صدور آنی لینک دانلود و پنل آمار پیشرفته ادمین.",
    features: [
      "پشتیبانی از Python ۳.۱۰+ و کتابخانه Telebot/Aiogram",
      "اتصال مستقیم به درگاه زرین‌پال یا نکست‌پی",
      "تحویل خودکار فایل پس از تراکنش موفق",
      "راهنمای جامع راه‌اندازی روی سرور مجازی"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "instagram-templates",
    code: "IDM-107",
    title: "پک جامع قالب‌های اینستاگرام و موشن گرافیک",
    category: "content",
    categoryName: "تولید محتوا",
    badge: "تولید محتوا",
    badgeColor: "bg-magenta/90 text-on-primary",
    price: 650000,
    priceFormatted: "۶۵۰,۰۰۰ تومان",
    rating: 4.8,
    reviewsCount: 143,
    description: "بیش از ۵۰ قالب لایه‌باز فتوشاپ، اینشات و پریمیر برای ساخت پست‌های اسلایدی و استوری‌های تعاملی با تم جذاب دارک و نئونی.",
    fullDescription: "قالب‌های مدرن طراحی شده بر اساس روانشناسی تعامل شبکه‌های اجتماعی برای افزایش نرخ کلیک، کامنت و اشتراک‌گذاری محتوای پیج شما.",
    features: [
      "فایل‌های PSD لایه‌باز با گروه‌بندی منظم",
      "قالب‌های آماده کانوا (Canva) برای ویرایش موبایلی",
      "فونت‌های پرمیوم فارسی همراه پکیج",
      "موشن‌های آماده برای قلاب ویدیو (Hooks)"
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ai-enterprise-consulting",
    code: "IDM-108",
    title: "مشاوره تخصصی و پیاده‌سازی هوش مصنوعی سازمانی",
    category: "business",
    categoryName: "خدمات شرکتی",
    badge: "خدمات شرکتی",
    badgeColor: "bg-neon-purple/90 text-on-primary",
    price: 4500000,
    priceFormatted: "۴,۵۰۰,۰۰۰ تومان",
    rating: 5.0,
    reviewsCount: 52,
    description: "اتوماسیون فرآیندهای کسب‌وکار، یکپارچه‌سازی ربات‌های پشتیبانی هوشمند بر پایه مدل‌های زبانی و افزایش بهره‌وری تیم.",
    fullDescription: "طراحی نقشه راه هوش مصنوعی برای شرکت‌ها، اتوماسیون پاسخگویی مشتریان با هوش مصنوعی و آموزش کارکنان برای استفاده اثربخش از ابزارهای هوش مصنوعی.",
    features: [
      "جلسه مشاوره اختصاصی ۲ ساعته آنلاین",
      "ارزیابی پتانسیل‌های اتوماسیون شرکت",
      "تنظیم دستیار هوشمند اختصاصی با داده‌های سازمانی",
      "پشتیبانی فنی و مانیتورینگ یک‌ماهه"
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
  }
];

// Document Ready Initializer
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initFaqAccordion();
  initSimulatedBotChat();
  initModals();
  initSearchAndFilter();
  initContactForm();
});

/* ----------------------------------------------------
   1. Mobile Navigation Menu Toggle
   ---------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-mobile-menu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  });

  const closeMenu = () => {
    mobileMenu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMenu();
  });
}

/* ----------------------------------------------------
   2. FAQ Accordion Interaction
   ---------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    if (!trigger || !content) return;

    trigger.addEventListener("click", () => {
      const isExpanded = content.classList.contains("hidden");
      
      // Optional: Close others
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherContent = otherItem.querySelector(".faq-content");
          const otherIcon = otherItem.querySelector(".faq-icon");
          if (otherContent) otherContent.classList.add("hidden");
          if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
        }
      });

      if (isExpanded) {
        content.classList.remove("hidden");
        if (icon) icon.style.transform = "rotate(180deg)";
      } else {
        content.classList.add("hidden");
        if (icon) icon.style.transform = "rotate(0deg)";
      }
    });
  });
}

/* ----------------------------------------------------
   3. Simulated Interactive Telegram Bot Chat on Home
   ---------------------------------------------------- */
function initSimulatedBotChat() {
  const chatContainer = document.getElementById("simulated-chat-messages");
  const chips = document.querySelectorAll(".bot-prompt-chip");
  if (!chatContainer || !chips.length) return;

  const responses = {
    "پکیج پرامپت حرفه‌ای می‌خوام": {
      user: "پکیج پرامپت حرفه‌ای می‌خوام",
      bot: "عالیه! پکیج پرامپت حرفه‌ای (IDM-101) شامل بیش از ۱۰۰ پرامپت تست شده برای چت‌جی‌پی‌تی و میدجرنی هست. قیمت: ۲,۰۰۰,۰۰۰ تومان. لینک پرداخت و دریافت آنی آماده‌ست!",
      actionText: "دریافت آنی پکیج",
      actionId: "prompt-pro"
    },
    "لیست بسته‌های تولید محتوا چیه؟": {
      user: "لیست بسته‌های تولید محتوا چیه؟",
      bot: "بسته‌های تولید محتوا (IDM-102) شامل تصاویر شکیل در پکیج‌های ۱۰ تایی برای استوری و پست با کیفیت 4K ارائه شده‌اند. قیمت هر بسته فقط ۵۰۰,۰۰۰ تومان.",
      actionText: "مشاهده بسته",
      actionId: "content-packs"
    },
    "چطور فایل‌ها رو دریافت کنم؟": {
      user: "چطور فایل‌ها رو دریافت کنم؟",
      bot: "تحویل تمامی محصولات کاملاً آنی و سیستمی انجام میشه. بلافاصله بعد از پرداخت، لینک دانلود دائمی اختصاصی در همین چت براتون ارسال خواهد شد! ⚡",
      actionText: "ورود به ربات اصلی",
      actionId: "prompt-pro"
    }
  };

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const text = chip.dataset.prompt || chip.innerText.trim();
      const replyData = responses[text] || {
        user: text,
        bot: `درخواست "${text}" دریافت شد. هم‌اکنون می‌توانید مستقیماً از ربات @Ideamartbot خرید خود را با تحویل آنی تکمیل فرمایید.`,
        actionText: "ورود به ربات",
        actionId: "prompt-pro"
      };

      // Add user message
      const userBubble = document.createElement("div");
      userBubble.className = "p-space-md rounded-xl bg-electric-blue/20 border border-electric-blue/30 text-body-sm text-bright-cyan rounded-bl-none max-w-[85%] mr-auto animate-fade-in";
      userBubble.textContent = replyData.user;
      chatContainer.appendChild(userBubble);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      // Simulate bot typing & reply
      setTimeout(() => {
        const botBubble = document.createElement("div");
        botBubble.className = "p-space-md rounded-xl bg-surface-container text-body-sm text-on-surface rounded-br-none max-w-[85%] animate-fade-in border border-glass-border";
        botBubble.innerHTML = `
          <div>${replyData.bot}</div>
          <div class="mt-2 pt-2 border-t border-glass-border flex items-center justify-between">
            <button onclick="openTelegramOrderModal('${replyData.actionId}')" class="text-label-sm text-electric-blue hover:underline flex items-center gap-1 font-bold">
              <span>${replyData.actionText}</span>
              <span class="material-symbols-outlined text-[14px]">arrow_back</span>
            </button>
            <span class="text-[11px] text-on-surface-variant font-mono">آنلاین</span>
          </div>
        `;
        chatContainer.appendChild(botBubble);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 500);
    });
  });
}

/* ----------------------------------------------------
   4. Telegram Ordering & Product Modal Logic
   ---------------------------------------------------- */
function initModals() {
  const modal = document.getElementById("product-modal");
  const modalClose = document.getElementById("close-product-modal");
  if (!modal) return;

  if (modalClose) {
    modalClose.addEventListener("click", () => closeModal());
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

// Global function to trigger telegram purchase modal
window.openTelegramOrderModal = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];
  const modal = document.getElementById("product-modal");
  if (!modal) {
    // Fallback directly to Telegram
    const telegramUrl = `https://t.me/Ideamartbot?start=buy_${product.code}`;
    window.open(telegramUrl, "_blank");
    return;
  }

  document.getElementById("modal-product-title").innerText = product.title;
  document.getElementById("modal-product-code").innerText = product.code;
  document.getElementById("modal-product-price").innerText = product.priceFormatted;
  document.getElementById("modal-product-badge").innerText = product.categoryName;
  document.getElementById("modal-product-desc").innerText = product.fullDescription || product.description;

  const featuresList = document.getElementById("modal-product-features");
  if (featuresList && product.features) {
    featuresList.innerHTML = product.features.map(f => `
      <li class="flex items-center gap-2 text-body-sm text-on-surface-variant">
        <span class="material-symbols-outlined text-electric-blue text-[18px]">check_circle</span>
        <span>${f}</span>
      </li>
    `).join("");
  }

  const modalImg = document.getElementById("modal-product-img");
  if (modalImg) {
    modalImg.src = product.image;
    modalImg.alt = product.title;
  }

  const tgBtn = document.getElementById("modal-telegram-btn");
  if (tgBtn) {
    tgBtn.onclick = () => {
      const orderMessage = encodeURIComponent(`سلام! قصد خرید محصول "${product.title}" با کد ${product.code} به مبلغ ${product.priceFormatted} را دارم.`);
      const telegramLink = `https://t.me/Ideamartbot?text=${orderMessage}`;
      window.open(telegramLink, "_blank");
      showToast("در حال انتقال به ربات تلگرام ایده مارت...", "info");
    };
  }

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
};

/* ----------------------------------------------------
   5. Search, Filter & Sort on Products Page
   ---------------------------------------------------- */
function initSearchAndFilter() {
  const productsGrid = document.getElementById("catalog-products-grid");
  if (!productsGrid) return;

  const searchInput = document.getElementById("catalog-search-input");
  const categoryButtons = document.querySelectorAll(".filter-cat-btn");
  const sortSelect = document.getElementById("catalog-sort-select");
  const resultCounter = document.getElementById("catalog-results-count");

  let currentCategory = "all";
  let currentSearch = "";
  let currentSort = "popular";

  function renderProducts() {
    let filtered = PRODUCTS_DATA.filter(p => {
      const matchCat = currentCategory === "all" || p.category === currentCategory;
      const matchQuery = !currentSearch || 
        p.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
        p.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
        p.code.toLowerCase().includes(currentSearch.toLowerCase());
      return matchCat && matchQuery;
    });

    // Sorting
    if (currentSort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (resultCounter) {
      resultCounter.innerText = `نمایش ${filtered.length} محصول از ${PRODUCTS_DATA.length} محصول`;
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <span class="material-symbols-outlined text-[64px] text-on-surface-variant/40 mb-3">sentiment_dissatisfied</span>
          <h4 class="text-headline-sm font-bold text-on-surface">محصولی یافت نشد!</h4>
          <p class="text-body-md text-on-surface-variant mt-2">لطفاً عبارت دیگری را جستجو کرده یا فیلتر دسته‌بندی را تغییر دهید.</p>
          <button onclick="resetFilters()" class="mt-4 px-5 py-2 rounded-xl bg-electric-blue text-on-primary font-bold text-sm">
            مشاهده همه محصولات
          </button>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(p => `
      <div class="p-space-lg rounded-xl bg-glass-surface backdrop-blur-xl border border-glass-border flex flex-col justify-between group hover:border-electric-blue/40 transition-all duration-300">
        <div>
          <div class="relative w-full h-48 rounded-lg overflow-hidden mb-space-md bg-surface-container">
            <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <span class="absolute top-space-sm right-space-sm px-space-sm py-space-xs rounded-lg ${p.badgeColor} text-label-md font-bold backdrop-blur-md">
              ${p.badge}
            </span>
            <span class="absolute bottom-space-sm left-space-sm px-space-sm py-space-xs rounded-lg bg-obsidian-dark/80 text-bright-cyan text-[11px] font-mono border border-glass-border">
              ${p.code}
            </span>
          </div>

          <div class="flex items-center gap-space-xs text-bright-cyan text-label-md mb-1">
            <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">star</span>
            <span>${p.rating} (${p.reviewsCount} نظر)</span>
          </div>

          <h3 class="text-headline-sm font-headline-sm text-on-surface group-hover:text-electric-blue transition-colors">
            ${p.title}
          </h3>

          <p class="text-body-sm text-on-surface-variant mt-2 line-clamp-2">
            ${p.description}
          </p>
        </div>

        <div class="pt-space-lg mt-space-lg border-t border-glass-border flex items-center justify-between">
          <div>
            <span class="text-body-sm text-on-surface-variant block">قیمت</span>
            <span class="text-headline-sm text-bright-cyan font-bold">${p.priceFormatted}</span>
          </div>

          <button onclick="openTelegramOrderModal('${p.id}')" class="px-space-md py-space-sm rounded-lg bg-gradient-to-r from-electric-blue to-bright-cyan text-on-primary font-label-md hover:opacity-90 transition-opacity flex items-center gap-space-xs shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <span>خرید فوری</span>
            <span class="material-symbols-outlined text-[16px]">shopping_cart</span>
          </button>
        </div>
      </div>
    `).join("");
  }

  window.resetFilters = function() {
    currentCategory = "all";
    currentSearch = "";
    if (searchInput) searchInput.value = "";
    categoryButtons.forEach(btn => {
      btn.classList.toggle("bg-electric-blue", btn.dataset.category === "all");
      btn.classList.toggle("text-on-primary", btn.dataset.category === "all");
      btn.classList.toggle("bg-glass-surface", btn.dataset.category !== "all");
    });
    renderProducts();
  };

  // Bind category clicks
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => {
        b.classList.remove("bg-electric-blue", "text-on-primary");
        b.classList.add("bg-glass-surface", "text-on-surface");
      });
      btn.classList.remove("bg-glass-surface", "text-on-surface");
      btn.classList.add("bg-electric-blue", "text-on-primary");
      currentCategory = btn.dataset.category || "all";
      renderProducts();
    });
  });

  // Bind search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim();
      renderProducts();
    });
  }

  // Bind sort selector
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Initial render
  renderProducts();
}

/* ----------------------------------------------------
   6. Interactive Contact Form with Validation & TG bridge
   ---------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const phoneOrTg = document.getElementById("contact-telegram").value.trim();
    const topic = document.getElementById("contact-topic").value;
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !phoneOrTg || !message) {
      showToast("لطفاً تمامی فیلدهای الزامی را تکمیل کنید.", "error");
      return;
    }

    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>در حال ثبت...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      contactForm.reset();

      const successModal = document.getElementById("contact-success-modal");
      if (successModal) {
        successModal.classList.remove("hidden");
      } else {
        showToast("پیام شما با موفقیت ثبت شد! پشتیبانی به زودی با شما تماس می‌گیرد.", "success");
      }
    }, 800);
  });
}

/* ----------------------------------------------------
   7. Toast Notification Helper
   ---------------------------------------------------- */
window.showToast = function(message, type = "info") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "fixed bottom-5 right-5 z-[9999] flex flex-col gap-2 max-w-sm w-full px-4 pointer-events-none";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  const colorMap = {
    success: "border-green-500/50 bg-surface-container text-green-400",
    error: "border-red-500/50 bg-surface-container text-red-400",
    info: "border-electric-blue/50 bg-surface-container text-bright-cyan"
  };
  const iconMap = {
    success: "check_circle",
    error: "error",
    info: "info"
  };

  toast.className = `p-4 rounded-xl border backdrop-blur-xl shadow-2xl flex items-center gap-3 pointer-events-auto transition-all duration-300 transform translate-y-2 opacity-0 ${colorMap[type] || colorMap.info}`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px]">${iconMap[type] || "info"}</span>
    <span class="text-sm font-medium text-on-surface flex-1">${message}</span>
  `;

  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("translate-y-2", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};
