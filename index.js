const animatedElements = document.getElementsByClassName("animate");

for (var i = 0; i < animatedElements.length; i++) {
    if (i % 2 == 0) {
        animatedElements[i].classList.add("fadeInFromLeftToRight")
    } else {
        animatedElements[i].classList.add("fadeInFromRightToLeft")
    }
}