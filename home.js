(() => {
  "use strict";

  const translations = {
    en: {
      pageTitle: "OneTrip — The world, planned around you.",
      description: "Plan a U.S. road trip with OneTrip. Explore as a guest, or create an account to keep your saved trips together across devices.",
      skip: "Skip to content",
      home: "OneTrip home",
      navigation: "Main navigation",
      mobileNavigation: "Mobile navigation",
      footerNavigation: "Footer navigation",
      language: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageChanged: "Language changed to English.",
      navDestinations: "Destinations",
      navPlan: "Plan a trip",
      navHow: "How it works",
      navSupport: "Support",
      signUp: "Sign up",
      logIn: "Log in",
      eyebrow: "Tailor-made journeys",
      heroTitle: "The world, planned around you.",
      heroDescription: "Your route, inspiring stops and a trip plan shaped around you.",
      startPlanning: "Start planning",
      exploreDestinations: "Explore destinations",
      destinationsTitle: "Featured escapes",
      viewAll: "View all",
      bigSurRegion: "California",
      bigSurTitle: "Big Sur",
      bigSurDescription: "Rugged cliffs, redwood forests and Pacific views. Leave room for a slower stretch along the coast.",
      planBigSur: "Plan a Big Sur trip",
      grandCanyonRegion: "Arizona",
      grandCanyonTitle: "Grand Canyon",
      grandCanyonDescription: "Layered stone, vast horizons and unforgettable viewpoints. Build a desert journey around the canyon.",
      planGrandCanyon: "Plan a Grand Canyon trip",
      zionRegion: "Utah",
      zionTitle: "Zion",
      zionDescription: "Soaring sandstone walls and winding canyon trails. Find a place for Utah’s striking scenery in your plan.",
      planZion: "Plan a Zion trip",
      stepOneTitle: "Choose your stops",
      stepOneDescription: "Explore U.S. destinations and add the places you want to see. Start with a little inspiration or a route of your own.",
      stepTwoTitle: "Shape your route",
      stepTwoDescription: "Arrange your stops, choose your dates and explore illustrative lodging estimates as you put your itinerary together.",
      stepThreeTitle: "Save your plan",
      stepThreeDescription: "Save locally as a guest, or sign in to keep your saved plans together across devices. Bookings are made separately.",
      accountTitle: "Your plans, wherever you go.",
      accountDescription: "Create an account to return to your saved trips on another device. Guest plans stay on this device until you choose to import them.",
      accountLanguageNote: "The trip planner and account pages are currently in English.",
      createAccount: "Create an account",
      expediaTitle: "Ready for the next step?",
      expediaDescription: "Search flights and stays on Expedia. Live prices, availability, reservations and payment are handled by Expedia and its travel providers.",
      expediaButton: "Search on Expedia",
      expediaLinkLabel: "Search on Expedia (opens a new tab)",
      expediaNote: "Provider websites open in a new tab. Your saved trip and profile details are not added to these links.",
      bookingTitle: "Hotels and flights on Booking.com.",
      bookingDescription: "Find a place to stay or search flights for your next trip. Live prices, availability, reservations and payment are handled by Booking.com and its travel providers.",
      bookingHotelsButton: "Find hotels",
      bookingHotelsLabel: "Find hotels on Booking.com (opens a new tab)",
      bookingFlightsButton: "Search flights",
      bookingFlightsLabel: "Search flights on Booking.com (opens a new tab)",
      carsTitle: "A car for the open road.",
      carsDescription: "Compare rental cars on DiscoverCars. Live prices, availability, reservations and payment are handled by DiscoverCars and its rental providers.",
      carsButton: "Find rental cars",
      carsLinkLabel: "Find rental cars on DiscoverCars (opens a new tab)",
      copyright: "© 2026 OneTrip. All rights reserved.",
      privacy: "Privacy"
    },
    zh: {
      pageTitle: "OneTrip — 世界之旅，为你而定。",
      description: "用 OneTrip 规划美国公路旅行。以访客身份探索，或创建账户，在不同设备上查看保存的行程。",
      skip: "跳到主要内容",
      home: "OneTrip 首页",
      navigation: "主导航",
      mobileNavigation: "移动端导航",
      footerNavigation: "页脚导航",
      language: "语言",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      languageChanged: "已切换为中文。",
      navDestinations: "目的地",
      navPlan: "规划旅行",
      navHow: "使用方法",
      navSupport: "帮助与支持",
      signUp: "注册",
      logIn: "登录",
      eyebrow: "为你定制的旅程",
      heroTitle: "世界之旅，为你而定。",
      heroDescription: "你的路线、心动的目的地，还有一份为你而定的旅行计划。",
      startPlanning: "开始规划",
      exploreDestinations: "探索目的地",
      destinationsTitle: "精选目的地",
      viewAll: "查看全部",
      bigSurRegion: "加利福尼亚州",
      bigSurTitle: "大苏尔",
      bigSurDescription: "陡峭海崖、红杉森林与太平洋风光。在沿海路途中慢下来，留一点时间给风景。",
      planBigSur: "规划大苏尔之旅",
      grandCanyonRegion: "亚利桑那州",
      grandCanyonTitle: "大峡谷",
      grandCanyonDescription: "层叠岩壁、辽阔天际和难忘的观景点。以大峡谷为中心，规划一段沙漠之旅。",
      planGrandCanyon: "规划大峡谷之旅",
      zionRegion: "犹他州",
      zionTitle: "锡安国家公园",
      zionDescription: "高耸的砂岩峭壁与蜿蜒的峡谷步道。将犹他州的壮丽风景加入你的旅行计划。",
      planZion: "规划锡安之旅",
      stepOneTitle: "选择目的地",
      stepOneDescription: "探索美国目的地，添加你想去的地方。可以从旅行灵感开始，也可以规划自己的路线。",
      stepTwoTitle: "安排旅行路线",
      stepTwoDescription: "调整停靠顺序、选择日期，并参考示例住宿费用估算，逐步完善你的行程。",
      stepThreeTitle: "保存旅行计划",
      stepThreeDescription: "以访客身份将计划保存在本机，或登录账户，在不同设备上查看保存的行程。预订需另行安排。",
      accountTitle: "你的行程，随时相伴。",
      accountDescription: "创建账户，即可在其他设备上继续查看保存的行程。访客行程会保留在当前设备上，只有在你选择导入后才会保存到账户。",
      accountLanguageNote: "行程规划器与账户页面目前仅提供英文。",
      createAccount: "创建账户",
      expediaTitle: "准备好下一步了吗？",
      expediaDescription: "前往 Expedia 搜索航班与住宿。实时价格、可订情况、预订与付款均由 Expedia 及其旅游服务商处理。",
      expediaButton: "在 Expedia 搜索",
      expediaLinkLabel: "在 Expedia 搜索（在新标签页中打开）",
      expediaNote: "服务商网站将在新标签页中打开。链接不会附带你保存的行程或个人资料。",
      bookingTitle: "在 Booking.com 查找住宿与航班。",
      bookingDescription: "为下一段旅程寻找住宿或搜索航班。实时价格、可订情况、预订与付款均由 Booking.com 及其旅游服务商处理。",
      bookingHotelsButton: "查找酒店",
      bookingHotelsLabel: "在 Booking.com 查找酒店（在新标签页中打开）",
      bookingFlightsButton: "搜索航班",
      bookingFlightsLabel: "在 Booking.com 搜索航班（在新标签页中打开）",
      carsTitle: "自驾出发，探索远方。",
      carsDescription: "前往 DiscoverCars 比较租车选择。实时价格、可订情况、预订与付款均由 DiscoverCars 及其租车服务商处理。",
      carsButton: "查找租车",
      carsLinkLabel: "在 DiscoverCars 查找租车（在新标签页中打开）",
      copyright: "© 2026 OneTrip。保留所有权利。",
      privacy: "隐私政策"
    }
  };

  const menuButton = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.getElementById("mobile-menu");
  const languageButtons = document.querySelectorAll("[data-language]");
  const desktopQuery = window.matchMedia("(min-width: 1024px)");
  let currentLanguage = "en";

  function setMenuOpen(open) {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", translations[currentLanguage][open ? "closeMenu" : "openMenu"]);
    mobileMenu.hidden = !open;
  }

  function setLanguage(language, announce = false) {
    currentLanguage = translations[language] ? language : "en";
    const copy = translations[currentLanguage];
    document.documentElement.lang = currentLanguage === "zh" ? "zh-Hans" : "en";
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", copy.description);
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = copy[element.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      element.setAttribute("aria-label", copy[element.dataset.i18nAria]);
    });
    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
    });
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-label", copy[open ? "closeMenu" : "openMenu"]);
    if (announce) document.querySelector("[data-language-status]").textContent = copy.languageChanged;
    try { window.localStorage.setItem("onetrip-site-language", currentLanguage); } catch (_) { /* Language switching also works when storage is unavailable. */ }
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language, true));
  });

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setMenuOpen(false);
  });
  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) setMenuOpen(false);
  });

  let savedLanguage;
  try { savedLanguage = window.localStorage.getItem("onetrip-site-language"); } catch (_) { /* Use the default language when storage is unavailable. */ }
  setLanguage(savedLanguage === "zh" ? "zh" : "en");
})();
