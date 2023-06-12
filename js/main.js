var mainNav = document.getElementById('mainNav');
var mobDownNav = document.getElementById('mobDownNav');
var mobUpNav = document.getElementById('mobUpNav');
var mnItems = document.getElementsByClassName('mn-text');

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
})

var typed = new Typed('#typedtext', {
    strings: ['^200 I code in .Net'],
    typeSpeed: 70,
});

AOS.init();