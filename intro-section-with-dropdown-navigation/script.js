let featuresA = document.getElementById('features');

let featuresA2 = document.getElementById('features2');

let companyA = document.getElementById('company');

let companyA2 = document.getElementById('company2');

let featuresL = document.getElementById('features-list');

let featuresL2 = document.getElementById('features-list2');

let companyL = document.getElementById('company-list');

let companyL2 = document.getElementById('company-list2');

let featuresI = document.getElementById('features-image');

let featuresI2 = document.getElementById('features-image2');

let companyI = document.getElementById('company-image');

let companyI2 = document.getElementById('company-image2');

let menuB = document.getElementById('menu');

let menuN = document.getElementById('menu-nav');

let menuI = document.getElementById('menu-image');

let body = document.querySelector('body');

featuresA.addEventListener("click", () => {
    featuresL.classList.toggle("ativo");
    if (featuresL.classList.contains("ativo")) {
        featuresI.src = 'images/icon-arrow-up.svg';
    } else {
        featuresI.src = 'images/icon-arrow-down.svg';
    }
});

featuresA2.addEventListener("click", () => {
    featuresL2.classList.toggle("ativo");
    if (featuresL2.classList.contains("ativo")) {
        featuresI2.src = 'images/icon-arrow-up.svg';
    } else {
        featuresI2.src = 'images/icon-arrow-down.svg';
    }
});

companyA.addEventListener("click", () => {
    companyL.classList.toggle("ativo");
    if (companyL.classList.contains("ativo")) {
        companyI.src = 'images/icon-arrow-up.svg';
    } else {
        companyI.src = 'images/icon-arrow-down.svg';
    }
});

companyA2.addEventListener("click", () => {
    companyL2.classList.toggle("ativo");
    if (companyL2.classList.contains("ativo")) {
        companyI2.src = 'images/icon-arrow-up.svg';
    } else {
        companyI2.src = 'images/icon-arrow-down.svg';
    }
});

menuB.addEventListener("click", () => {
    menuN.classList.toggle("ativo");
    if (menuN.classList.contains("ativo")) {
        menuI.src = 'images/icon-close-menu.svg';
        body.style.backgroundColor = 'lightgray';
    } else {
        menuI.src = 'images/icon-menu.svg';
        body.style.backgroundColor = 'white';
    }
});