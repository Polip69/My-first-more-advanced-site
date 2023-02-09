const nav = document.querySelector('nav');
let previousScrollTop;
let isScrolling;

const hasScrolled = () => {

const scrollTop = window.scrollY;

if (scrollTop > previousScrollTop){
    nav.classList.add('nav--up');
    nav.classList.remove('nav--down');
    nav.classList.add('nav--border');
} else if(scrollTop == previousScrollTop){
    nav.classList.remove('nav--border');
} else {
    nav.classList.remove('nav--up');
    nav.classList.add('nav--down');
}
    
previousScrollTop = scrollTop;

}

document.addEventListener('scroll', () => isScrolling = true);

setInterval(() => {
if (isScrolling) {
    hasScrolled();
    isScrolling = false;
}
}, 100);


// Funkcja pozycja - do poprawki pojawiające się menu podczas najechania na górną część dokumentu  
function pozycja() {
    let zdarzenie = window.event;
    let pozycja = zdarzenie.clientY;
    if(pozycja<130) {
        nav.classList.remove('nav--up');
    } 
}

// Najechanie i zjechanie
    let kwadrat1 = document.querySelector('.kwadrat1');
    let kwadrat2 = document.querySelector('.kwadrat2');
    let box2 = document.querySelector('.box2');
    let box4 = document.querySelector('.box4');

    function najechanie(e) {
        if(e == 2) {
            box2.style.animation = 'na 1.5s forwards';
        } else if(e == 4) {
            box4.style.animation = 'na 1.5s forwards';
        }
    };
    function zjechanie(e) {
        if(e == 2) {
            box2.style.animation = 'z 1.5s forwards';
        } else if(e == 4) {
            box4.style.animation = 'z 1.5s forwards';
        }
    };