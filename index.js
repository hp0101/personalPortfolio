const animatedElements = document.getElementsByClassName("animate");

for (var i = 0; i < animatedElements.length; i++) {
    if (i % 2 == 0) {
        animatedElements[i].classList.add("fadeInFromLeftToRight")
    } else {
        animatedElements[i].classList.add("fadeInFromRightToLeft")
    }
}

// change layout upon window's innerWidth
console.log(window.innerWidth)
if (window.innerWidth < 575) {
    var container = document.getElementsByClassName("container");
    var leftInnerContainer = document.getElementsByClassName("leftInnerContainer");
    var rightInnerContainer = document.getElementsByClassName("rightInnerContainer");

    for (var i = 0; i < container.length; i++) {
        // add before remove
        container[i].classList.add("containerMobile")
        container[i].classList.remove("container")
    }

    for (var i = 0; i < leftInnerContainer.length; i++) {
        leftInnerContainer[i].classList.add("leftInnerContainerMobile")
        leftInnerContainer[i].classList.remove("leftInnerContainer")
    }

    for (var i = 0; i < rightInnerContainer.length; i++) {
        rightInnerContainer[i].classList.add("rightInnerContainerMobile")
        rightInnerContainer[i].classList.remove("rightInnerContainer")
    }
}

// change layout upon resizing
var onresize = function (e) {
    width = e.target.outerWidth;
    height = e.target.outerHeight;

    console.log("resizing width=" + width)
    if (width < 575) {
        var container = document.getElementsByClassName("container");
        var leftInnerContainer = document.getElementsByClassName("leftInnerContainer");
        var rightInnerContainer = document.getElementsByClassName("rightInnerContainer");

        for (var i = 0; i < container.length; i++) {
            // add before remove
            container[i].classList.add("containerMobile")
            container[i].classList.remove("container")
        }

        for (var i = 0; i < leftInnerContainer.length; i++) {
            leftInnerContainer[i].classList.add("leftInnerContainerMobile")
            leftInnerContainer[i].classList.remove("leftInnerContainer")
        }

        for (var i = 0; i < rightInnerContainer.length; i++) {
            rightInnerContainer[i].classList.add("rightInnerContainerMobile")
            rightInnerContainer[i].classList.remove("rightInnerContainer")
        }


    }
    else if (width >= 575) {
        container = document.getElementsByClassName("containerMobile");
        leftInnerContainer = document.getElementsByClassName("leftInnerContainerMobile");
        rightInnerContainer = document.getElementsByClassName("rightInnerContainerMobile");

        for (var i = 0; i < container.length; i++) {
            // add before remove
            container[i].classList.add("container")
            container[i].classList.remove("containerMobile")
        }

        for (var i = 0; i < leftInnerContainer.length; i++) {
            leftInnerContainer[i].classList.add("leftInnerContainer")
            leftInnerContainer[i].classList.remove("leftInnerContainerMobile")
        }

        for (var i = 0; i < rightInnerContainer.length; i++) {
            rightInnerContainer[i].classList.add("rightInnerContainer")
            rightInnerContainer[i].classList.remove("rightInnerContainerMobile")
        }
    }
}
window.addEventListener("resize", onresize);

