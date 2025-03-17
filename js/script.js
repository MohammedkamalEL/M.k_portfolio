// "use strict";

const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
// console.log(isDark);

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
    // sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changTheme = () => {

    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme)
}

$themeBtn.addEventListener("click", changTheme);





const $tabBtn = document.querySelectorAll("[data-tab-btn]");

let [lastActiveTab] = document.querySelectorAll("[data-tab-content]");

let [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
    item.addEventListener("click", function () {

        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
        console.log(tabContent);

    });
});


let preloder = document.querySelector('[data-preloader]')
let content = document.getElementById("content");
let topBar = document.getElementById("topbar");
let loading_p = document.getElementById("loading_p");


setTimeout(() => {
    preloder.style.opacity = '0'
    setTimeout(() => {
        preloder.remove()
    }, 100);
    content.style.display = "block";
    topBar.style.display = "flex"
}, 4000)
