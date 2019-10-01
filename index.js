const animatedElements = document.getElementsByClassName("animate");

for (var i = 0; i < animatedElements.length; i++) {
    if (i % 2 == 0) {
        animatedElements[i].classList.add("fadeInFromLeftToRight")
    } else {
        animatedElements[i].classList.add("fadeInFromRightToLeft")
    }
}

console.log("initial screen width=" + screen.width)
if (screen.width < 600) {
    
}

var onresize = function(e) {
    width = e.target.outerWidth;
    height = e.target.outerHeight;

    console.log("resizing width=" + width)
 }
 window.addEventListener("resize", onresize);

