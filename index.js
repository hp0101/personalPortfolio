const animatedElements = document.getElementsByClassName("animate");

for (var i = 0; i < animatedElements.length; i++) {
    if (i % 2 == 0) {
        animatedElements[i].classList.add("fadeInFromLeftToRight")
    } else {
        animatedElements[i].classList.add("fadeInFromRightToLeft")
    }
}

function addMobile(container, leftInnerContainer, rightInnerContainer, hr) {
    // add and then remove
    // add containerMobile
    for (var i = 0; i < container.length; i++) {
        container[i].classList.add("containerMobile")
    }

    // remove container - USE REVERSE LOOP WHEN REMOVING CLASS!!
    for (var i = container.length - 1; i >= 0; i--) {
        container[i].classList.remove("container")
    }

    // debugging - container.length is now empty
    // for (var i = container.length-1; i >= 0; i--) {
    //     console.log(container[i])
    // }

    // add hrWidth
    for (var i = 0; i < hr.length; i++) {
        hr[i].classList.add("hrWidth")
    }

    // add leftInnerContainerMobile
    for (var i = 0; i < leftInnerContainer.length; i++) {
        leftInnerContainer[i].classList.add("leftInnerContainerMobile")
    }

    // remove leftInnerContainer - USE REVERSE LOOP WHEN REMOVING CLASS!!
    for (var i = leftInnerContainer.length - 1; i >= 0; i--) {
        leftInnerContainer[i].classList.remove("leftInnerContainer")
    }

    // add rightInnerContainerMobile
    for (var i = 0; i < rightInnerContainer.length; i++) {
        rightInnerContainer[i].classList.add("rightInnerContainerMobile")
    }

    // remove rightInnerContainer - USE REVERSE LOOP WHEN REMOVING CLASS!!
    for (var i = rightInnerContainer.length - 1; i >= 0; i--) {
        rightInnerContainer[i].classList.remove("rightInnerContainer")
    }
}

function removeMobile(container, leftInnerContainer, rightInnerContainer, hr) {
    // add and then remove
    // add container
    for (var i = 0; i < container.length; i++) {
        container[i].classList.add("container")
    }

    // remove containerMobile - USE REVERSE LOOP WHEN REMOVING CLASS!!
    for (var i = container.length - 1; i >= 0; i--) {
        container[i].classList.remove("containerMobile")
    }

    // debugging - container.length is now empty
    // for (var i = container.length-1; i >= 0; i--) {
    //     console.log(container[i])
    // }

    // remove hrWidth
    for (var i = hr.length - 1; i >= 0; i--) {
        hr[i].classList.remove("hrWidth")
    }

    // add leftInnerContainer
    for (var i = 0; i < leftInnerContainer.length; i++) {
        leftInnerContainer[i].classList.add("leftInnerContainer")
    }

    // remove leftInnerContainerMobile - USE REVERSE LOOP WHEN REMOVING CLASS!!
    for (var i = leftInnerContainer.length - 1; i >= 0; i--) {
        leftInnerContainer[i].classList.remove("leftInnerContainerMobile")
    }

    // add rightInnerContainer
    for (var i = 0; i < rightInnerContainer.length; i++) {
        rightInnerContainer[i].classList.add("rightInnerContainer")
    }

    // remove rightInnerContainerMobile - USE REVERSE LOOP WHEN REMOVING CLASS!!
    for (var i = rightInnerContainer.length - 1; i >= 0; i--) {
        rightInnerContainer[i].classList.remove("rightInnerContainerMobile")
    }
}

// change layout upon window's innerWidth
console.log(window.innerWidth)
if (window.innerWidth < 575) {
    var container = document.getElementsByClassName("container");
    var leftInnerContainer = document.getElementsByClassName("leftInnerContainer");
    var rightInnerContainer = document.getElementsByClassName("rightInnerContainer");
    var hr = document.getElementsByTagName("hr")

    addMobile(container, leftInnerContainer, rightInnerContainer, hr)
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
        var hr = document.getElementsByTagName("hr")

        addMobile(container, leftInnerContainer, rightInnerContainer, hr)
    }
    else if (width >= 575) {
        container = document.getElementsByClassName("containerMobile");
        leftInnerContainer = document.getElementsByClassName("leftInnerContainerMobile");
        rightInnerContainer = document.getElementsByClassName("rightInnerContainerMobile");
        hr = document.getElementsByTagName("hr")

        removeMobile(container, leftInnerContainer, rightInnerContainer, hr)
    }
}
window.addEventListener("resize", onresize);

