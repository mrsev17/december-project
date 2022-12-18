// Logic for control panel with test buttons

"use strict";

const desktopFirstButton = document.getElementById("desktop-one");
const desktopSecondButton = document.getElementById("desktop-two");
const desktopThirdButton = document.getElementById("desktop-three");

const desktopFirstWrapper = document.querySelector(".banner__desktop-one");
const desktopSecondWrapper = document.querySelector(".banner__desktop-two");
const desktopThirdWrapper = document.querySelector(".banner__desktop-three");

const defaultCondition = () => {
    desktopSecondWrapper.style.display = "none";
    desktopThirdWrapper.style.display = "none";
}

document.addEventListener("DOMContentLoaded", defaultCondition);

const showFirstDesktop = () => {
    desktopFirstWrapper.style.display = "block";
    desktopSecondWrapper.style.display = "none";
    desktopThirdWrapper.style.display = "none";
}

const showSecondDesktop = () => {
    desktopFirstWrapper.style.display = "none";
    desktopSecondWrapper.style.display = "block";
    desktopThirdWrapper.style.display = "none";
}

const showThirdDesktop = () => {
    desktopFirstWrapper.style.display = "none";
    desktopSecondWrapper.style.display = "none";
    desktopThirdWrapper.style.display = "block";
}


desktopFirstButton.addEventListener("click", showFirstDesktop);
desktopSecondButton.addEventListener("click", showSecondDesktop);
desktopThirdButton.addEventListener("click", showThirdDesktop);
