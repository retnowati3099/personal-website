let slideIndex = 1;
showSlide(slideIndex);

function shift(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slide = document.getElementsByClassName("slide");
    if (n > slide.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slide.length }
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[slideIndex - 1].style.display = "block";
}

let isDarkMode = false;

function changeMode() {
    isDarkMode = !isDarkMode;
    let body = document.querySelector("body")
    let mode = document.querySelector("#mode")
    let header = document.querySelector("header")
    if (isDarkMode) {
        body.style.backgroundColor = "#353535";
        body.style.color = "white";
        mode.src = "assets/light_mode.svg";
        header.style.backgroundColor = "#353535";
    } else {
        body.style.backgroundColor = "white";
        mode.src = "assets/dark_mode.svg";
        header.style.backgroundColor = "white";
    }
}