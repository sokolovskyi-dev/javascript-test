const magicBtn = document.querySelector(".magic-btn");
const heroTitleEl = document.querySelector(".hero-title");
const imageEl = document.querySelector(".hero-image");
console.log("🚀  imageEl:", imageEl);
console.log(imageEl.src);

magicBtn.addEventListener("click", () => {
  const inputEl = document.querySelector(".js-input");
  console.log(inputEl.value);
  inputEl.value = "fgeiufheikufheuiofheiu";
  imageEl.src =
    "https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg";
  imageEl.alt = "it is bird";
  heroTitleEl.textContent = "BIRD";
});

const actions = document.querySelectorAll(".js-actions button");
console.log("🚀  actions:", actions[2].dataset.action);
