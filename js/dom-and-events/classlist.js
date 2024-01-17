const magicBtn = document.querySelector(".js-magic-btn");

const navEl = document.querySelector(".site-nav");
console.log("🚀  navEl:", navEl.classList);

navEl.classList.add("super-cool", "sfsfsfs");
navEl.classList.remove("super-cool", "sfsfsfs");
navEl.classList.replace("site-nav", "qwerty");
console.log("🚀 contains qwerty:", navEl.classList.contains("qwerty"));

magicBtn.addEventListener("click", () => {
  navEl.classList.toggle("super-cool");
});

const currentPageUrl = "/about";
const linkEl = document.querySelector(
  `.site-nav-link[href='${currentPageUrl}']`
);
console.log("🚀  linkEl:", linkEl);

linkEl.classList.add("site-nav-link-current");
