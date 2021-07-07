const tabs = document.querySelectorAll(".nav-tabs-link");
const contentPanes = document.querySelectorAll(".tab-pane");
const faq = document.querySelectorAll(".nav-faq-link");
const faqPanes = document.querySelectorAll(".faq-pane");
const headerBurger = document.querySelector(".header_burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
});

for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        const previousItem = document.querySelector(".is-active");
        const activeItem = this.parentNode;
        activeItem.classList.toggle("is-active");
        previousItem.classList.remove("is-active");
    });
}

function tabClicks(tabClickEvent) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    const clickedTab = tabClickEvent.currentTarget;

    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();

    for (i = 0; i < contentPanes.length; i++) {
        contentPanes[i].classList.remove("active");
    }

    const anchorReference = tabClickEvent.target;
    const activePaneId = anchorReference.getAttribute("href");
    const activePane = document.querySelector(activePaneId);

    activePane.classList.add("active");
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", tabClicks);
}

function faqClicks(faqClickEvent) {
    for (let i = 0; i < faq.length; i++) {
        faq[i].classList.remove("is-active");
    }

    const clickedFaq = faqClickEvent.currentTarget;

    clickedFaq.classList.add("is-active");
    faqClickEvent.preventDefault();

    for (i = 0; i < faqPanes.length; i++) {
        faqPanes[i].classList.remove("is-active");
    }

    const anchorReference = faqClickEvent.target;
    const activePaneId = anchorReference.getAttribute("href");
    const activePane = document.querySelector(activePaneId);

    activePane.classList.add("is-active");
}

for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", faqClicks);
}

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});