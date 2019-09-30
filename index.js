const animatedElements = document.getElementsByClassName("animate");

for (var i = 0; i < animatedElements.length; i++) {
    animatedElements[i].classList.add("fadeInFromTopToBottom")
    if (i != animatedElements.length - 1) {
        // var style = document.createElement('style');
        // style.type = 'text/css';
        // style.innerHTML = '.delay { opacity: 0; animation-delay: ${i+1}s; animation-fill-mode: forwards;}';
        // animatedElements[i+1].className = "delay"
    }
}