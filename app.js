// Menu
console.log ('this file is working');
hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    navBar = document.querySelector('.nav_bar');
    navBar.classList.toggle('active');
}

// Highlight section

let sections = document.querySelectorAll('section');
 console.log(sections);

 let navLikns = document.querySelectorAll('header nav li a');
 console.log(navLikns);

 window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLikns.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav li a [href*=' + id + ']').classList.add('active');
            });
        };
    });
 };