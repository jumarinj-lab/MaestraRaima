const WHATSAPP_NUMBER = "573177459831";
const pageLanguage = document.documentElement.lang === "en" ? "en" : "es";
const pageSlug = document.body.dataset.page || "seo_page";
const messages = {
  es: "Hola Maestra Raima, visité su página y quisiera una orientación espiritual privada sobre mi situación.",
  en: "Hello Maestra Raima, I visited your website and would like a private spiritual guidance consultation about my situation.",
};

function whatsappUrl() {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(messages[pageLanguage]);
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = whatsappUrl();
  link.addEventListener("click", () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        method: "WhatsApp",
        language: pageLanguage,
        page_slug: pageSlug,
        contact_location: link.dataset.location || "page",
      });
    }
  });
});

const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
menuButton?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menu.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
