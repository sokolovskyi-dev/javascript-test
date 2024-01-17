const titleEl = document.createElement("h1");
titleEl.classList.add("page-title");
titleEl.textContent = "Это заголовок страницы";

document.body.appendChild(titleEl);

const imageEl = document.createElement("img");
imageEl.src = "https://tagil.masmotors.ru/colors/peugeot-5008-old/2.png";
imageEl.alt = "peugeot-5008";
imageEl.width = 440;

document.body.appendChild(imageEl);

const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav-iitem");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-navlink");
navLinkEl.textContent = "Личный кабинет";
navLinkEl.href = "/profile";

navItemEl.appendChild(navLinkEl);

const navEl = document.querySelector(".site-nav");

navEl.insertBefore(navItemEl, navEl.firstElementChild);

const heroEl = document.querySelector(".hero");
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
heroEl.append(titleEl, imageEl);
