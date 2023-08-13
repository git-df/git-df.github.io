var mainNav = document.getElementById('mainNav');
var mobDownNav = document.getElementById('mobDownNav');
var mobUpNav = document.getElementById('mobUpNav');
var mnItems = document.getElementsByClassName('mn-text');
var banner = document.getElementById('banner');

var i = 1;
var slideTime = 8000;
var currentImage = new Image();

var images = [
    '../img/tlo/2-cut-min.jpg',
    '../img/tlo/13-cut-min.jpg',
    '../img/tlo/3-cut-min.jpg',
    '../img/tlo/7-cut-min.jpg',
    '../img/tlo/4-cut-min.jpg',
    '../img/tlo/8-cut-min.jpg',
    '../img/tlo/9-cut-min.jpg',
    '../img/tlo/11-cut-min.jpg'
];

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
        mainNav.classList.add('bg-dark', 'shadow', 'text-light');
        mobDownNav.classList.remove('d-none');
        mobUpNav.classList.add('d-none');

        Array.from(mnItems).forEach(e => {
            e.classList.add('text-light')
        })

    } else {
        mainNav.classList.remove('bg-dark', 'shadow', 'text-light');
        Array.from(mnItems).forEach(e => {
          e.classList.remove('text-light')
        })

        mobDownNav.classList.add('d-none');
        mobUpNav.classList.remove('d-none');
    }
});

function changePicture() {
    currentImage.onload = function(){
        banner.style.backgroundImage = "url(" + this.src + ")";
    }
    currentImage.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changePicture, slideTime);
}

var typed = new Typed('#typedtext', {
    strings: ['^500 I code in .Net ^1000', 'I drink coffee^500.^500.^500. when I code ;)'],
    typeSpeed: 70,
});

AOS.init();
setTimeout(changePicture, slideTime);