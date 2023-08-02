console.log ('this file is working');

hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    navBar = document.querySelector('.nav_bar');
    navBar.classList.toggle('active');
}
