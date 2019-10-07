const animatedElements = document.getElementsByClassName("animate");

for (var i = 0; i < animatedElements.length; i++) {
  if (i % 2 == 0) {
    animatedElements[i].classList.add("fadeInFromLeftToRight");
  } else {
    animatedElements[i].classList.add("fadeInFromRightToLeft");
  }
}

// remove all animation
setTimeout(function() {
  for (var i = animatedElements.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
      animatedElements[i].classList.remove("fadeInFromLeftToRight");
    } else {
      animatedElements[i].classList.remove("fadeInFromRightToLeft");
    }
  }
}, 3000);

function addMobile(
  container,
  leftInnerContainer,
  rightInnerContainer,
  hr,
  eachTitle
) {
  // add eachTitleMobile
  for (var i = 0; i < eachTitle.length; i++) {
    eachTitle[i].classList.add("eachTitleMobile");
  }

  // remove eachTitle
  for (var i = eachTitle.length - 1; i >= 0; i--) {
    eachTitle[i].classList.remove("eachTitle");
  }

  // add and then remove
  // add containerMobile
  for (var i = 0; i < container.length; i++) {
    container[i].classList.add("containerMobile");
  }

  // remove container - USE REVERSE LOOP WHEN REMOVING CLASS!!
  for (var i = container.length - 1; i >= 0; i--) {
    container[i].classList.remove("container");
  }

  // debugging - container.length is now empty
  // for (var i = container.length-1; i >= 0; i--) {
  //     console.log(container[i])
  // }

  // add hrWidth
  for (var i = 0; i < hr.length; i++) {
    hr[i].classList.add("hrWidth");
  }

  // add leftInnerContainerMobile
  for (var i = 0; i < leftInnerContainer.length; i++) {
    leftInnerContainer[i].classList.add("leftInnerContainerMobile");
  }

  // remove leftInnerContainer - USE REVERSE LOOP WHEN REMOVING CLASS!!
  for (var i = leftInnerContainer.length - 1; i >= 0; i--) {
    leftInnerContainer[i].classList.remove("leftInnerContainer");
  }

  // add rightInnerContainerMobile
  for (var i = 0; i < rightInnerContainer.length; i++) {
    rightInnerContainer[i].classList.add("rightInnerContainerMobile");
  }

  // remove rightInnerContainer - USE REVERSE LOOP WHEN REMOVING CLASS!!
  for (var i = rightInnerContainer.length - 1; i >= 0; i--) {
    rightInnerContainer[i].classList.remove("rightInnerContainer");
  }
}

function removeMobile(
  container,
  leftInnerContainer,
  rightInnerContainer,
  hr,
  eachTitle
) {
  // add eachTitle
  for (var i = 0; i < eachTitle.length; i++) {
    eachTitle[i].classList.add("eachTitle");
  }

  // remove eachTitleMobile
  for (var i = eachTitle.length - 1; i >= 0; i--) {
    eachTitle[i].classList.remove("eachTitleMobile");
  }

  // add and then remove
  // add container
  for (var i = 0; i < container.length; i++) {
    container[i].classList.add("container");
  }

  // remove containerMobile - USE REVERSE LOOP WHEN REMOVING CLASS!!
  for (var i = container.length - 1; i >= 0; i--) {
    container[i].classList.remove("containerMobile");
  }

  // debugging - container.length is now empty
  // for (var i = container.length-1; i >= 0; i--) {
  //     console.log(container[i])
  // }

  // remove hrWidth
  for (var i = hr.length - 1; i >= 0; i--) {
    hr[i].classList.remove("hrWidth");
  }

  // add leftInnerContainer
  for (var i = 0; i < leftInnerContainer.length; i++) {
    leftInnerContainer[i].classList.add("leftInnerContainer");
  }

  // remove leftInnerContainerMobile - USE REVERSE LOOP WHEN REMOVING CLASS!!
  for (var i = leftInnerContainer.length - 1; i >= 0; i--) {
    leftInnerContainer[i].classList.remove("leftInnerContainerMobile");
  }

  // add rightInnerContainer
  for (var i = 0; i < rightInnerContainer.length; i++) {
    rightInnerContainer[i].classList.add("rightInnerContainer");
  }

  // remove rightInnerContainerMobile - USE REVERSE LOOP WHEN REMOVING CLASS!!
  for (var i = rightInnerContainer.length - 1; i >= 0; i--) {
    rightInnerContainer[i].classList.remove("rightInnerContainerMobile");
  }
}

// change layout upon window's innerWidth
console.log("innerWidth=" + window.innerWidth);
if (window.innerWidth < 575) {
  var container = document.getElementsByClassName("container");
  var leftInnerContainer = document.getElementsByClassName(
    "leftInnerContainer"
  );
  var rightInnerContainer = document.getElementsByClassName(
    "rightInnerContainer"
  );
  var hr = document.getElementsByTagName("hr");
  var eachTitle = document.getElementsByClassName("eachTitle");

  addMobile(container, leftInnerContainer, rightInnerContainer, hr, eachTitle);
}

// change layout upon resizing
var onresize = function(e) {
  width = e.target.outerWidth;
  height = e.target.outerHeight;

  console.log("resizing width=" + width);
  if (width < 575) {
    var container = document.getElementsByClassName("container");
    var leftInnerContainer = document.getElementsByClassName(
      "leftInnerContainer"
    );
    var rightInnerContainer = document.getElementsByClassName(
      "rightInnerContainer"
    );
    var hr = document.getElementsByTagName("hr");
    var eachTitle = document.getElementsByClassName("eachTitle");

    addMobile(
      container,
      leftInnerContainer,
      rightInnerContainer,
      hr,
      eachTitle
    );
  } else if (width >= 575) {
    container = document.getElementsByClassName("containerMobile");
    leftInnerContainer = document.getElementsByClassName(
      "leftInnerContainerMobile"
    );
    rightInnerContainer = document.getElementsByClassName(
      "rightInnerContainerMobile"
    );
    hr = document.getElementsByTagName("hr");
    eachTitle = document.getElementsByClassName("eachTitleMobile");

    removeMobile(
      container,
      leftInnerContainer,
      rightInnerContainer,
      hr,
      eachTitle
    );
  }
};
window.addEventListener("resize", onresize);

// animate element when scroll down
var containerAnimate = document.getElementsByClassName("animateScroll");

window.onscroll = function() {
  for (var i = 0; i < containerAnimate.length; i++) {
    if (isElementInViewport(containerAnimate[i])) {
      if (
        containerAnimate[i].getElementsByClassName("leftInnerContainer")[0] !=
        null
      ) {
        containerAnimate[i]
          .getElementsByClassName("leftInnerContainer")[0]
          .classList.add("fadeInFromLeftToRight");
        containerAnimate[i]
          .getElementsByClassName("rightInnerContainer")[0]
          .classList.add("fadeInFromRightToLeft");
      } else {
        containerAnimate[i]
          .getElementsByClassName("leftInnerContainerMobile")[0]
          .classList.add("fadeInFromLeftToRight");
        containerAnimate[i]
          .getElementsByClassName("rightInnerContainerMobile")[0]
          .classList.add("fadeInFromRightToLeft");
      }
    } else {
      if (
        containerAnimate[i].getElementsByClassName("leftInnerContainer")[0] !=
        null
      ) {
        containerAnimate[i]
          .getElementsByClassName("leftInnerContainer")[0]
          .classList.remove("fadeInFromLeftToRight");
        containerAnimate[i]
          .getElementsByClassName("rightInnerContainer")[0]
          .classList.remove("fadeInFromRightToLeft");
      } else {
        containerAnimate[i]
          .getElementsByClassName("leftInnerContainerMobile")[0]
          .classList.remove("fadeInFromLeftToRight");
        containerAnimate[i]
          .getElementsByClassName("rightInnerContainerMobile")[0]
          .classList.remove("fadeInFromRightToLeft");
      }
    }
  }
};

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // console.log("elemTop=" + elemTop);
  // console.log("elemBottom=" + elemBottom);
  // console.log("window.innerHeight=" + window.innerHeight);

  // Only completely visible elements return true:
  // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

  // elemBottom >= 0 is when the element is scrolled up past the screen
  // elemTop < window.innerHeight is when the element is scrolled down and appears in the screen
  // isVisible = elemTop + 50 < window.innerHeight && elemBottom >= 0;
  isVisible = elemTop + 50 < window.innerHeight;
  return isVisible;
}

// Dark Mode

document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", function() {
    var body = document.getElementsByTagName("body")[0];

    if (checkbox.checked) {
      console.log("Checked");
      // add dark background and white text
      body.id = "darkMode";

      document.getElementById("toggleText").innerHTML =
        "Too Dark? Try Bright Mode!";

      // change button's property
      // var button = document.getElementsByClassName("button");
      // // add buttonBright
      // button[0].classList.add("buttonBright");
      // // remove button
      // button[0].classList.remove("button");

      // change class "effect" to gray container
      var effect = document.getElementsByClassName("effect");
      // add effectDark
      for (var i = 0; i < effect.length; i++) {
        effect[i].classList.add("effectDark");
      }
      // remove effect
      for (var i = effect.length - 1; i >= 0; i--) {
        effect[i].classList.remove("effect");
      }

      // change blue hyperlink to green
      var green = document.getElementsByClassName("green");
      // add green
      for (var i = 0; i < green.length; i++) {
        green[i].style.color = "#00d65f";
      }

      // change proofBox's text from blue to green
      var proofBox = document.getElementsByClassName("proofBox");
      // add proofBoxDark
      for (var i = 0; i < proofBox.length; i++) {
        proofBox[i].classList.add("proofBoxDark");
      }
      // remove proofBox
      for (var i = proofBox.length - 1; i >= 0; i--) {
        proofBox[i].classList.remove("proofBox");
      }

      // change proofBoxBackground to gray in order to hide the class "effect"
      var proofBoxBackground = document.getElementsByClassName(
        "proofBoxBackground"
      );
      // add #3f3f3f
      for (var i = 0; i < proofBoxBackground.length; i++) {
        proofBoxBackground[i].style.backgroundColor = "#3f3f3f";
      }
    } else {
      console.log("Not checked");
      // remove dark background and white text
      body.id = "";

      document.getElementById("toggleText").innerHTML =
        "Too Bright? Try Dark Mode!";

      // change button's property
      // var button = document.getElementsByClassName("buttonBright");
      // // add button
      // button[0].classList.add("button");
      // // remove buttonBright
      // button[0].classList.remove("buttonBright");

      // change the gray container back to class "effect"
      var effect = document.getElementsByClassName("effectDark");
      // add effect
      for (var i = 0; i < effect.length; i++) {
        effect[i].classList.add("effect");
      }
      // remove effectDark
      for (var i = effect.length - 1; i >= 0; i--) {
        effect[i].classList.remove("effectDark");
      }

      // change proofBoxDark's text from green to blue
      var proofBox = document.getElementsByClassName("proofBoxDark");
      // add proofBox
      for (var i = 0; i < proofBox.length; i++) {
        proofBox[i].classList.add("proofBox");
      }
      // remove proofBoxDark
      for (var i = proofBox.length - 1; i >= 0; i--) {
        proofBox[i].classList.remove("proofBoxDark");
      }

      // change green hyperlink to blue
      var green = document.getElementsByClassName("green");
      // remove green
      for (var i = 0; i < green.length; i++) {
        green[i].style.color = "blue";
      }

      // change proofBoxBackground to transparent in order to activate the class "effect"
      var proofBoxBackground = document.getElementsByClassName(
        "proofBoxBackground"
      );
      // add transparent
      for (var i = 0; i < proofBoxBackground.length; i++) {
        proofBoxBackground[i].style.backgroundColor = "transparent";
      }
    }
  });
});

// function darkModeFunc() {
//   if (body.id == "") {
//   } else if (body.id == "darkMode") {
//   }
// }
