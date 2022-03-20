window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});

$('#card-text-id-first').typeIt({
    speed: 70, //скорость анимации
    autoStart: false /*если true то анимация начнется сразу после загрузки страницы, если false, то только когда блок будет в зоне видимости*/
}); 

$('#card-text-id-second').typeIt({
    speed: 70, //скорость анимации
    autoStart: false /*если true то анимация начнется сразу после загрузки страницы, если false, то только когда блок будет в зоне видимости*/
}); 

$('#card-text-id-third').typeIt({
    speed: 70, //скорость анимации
    autoStart: false /*если true то анимация начнется сразу после загрузки страницы, если false, то только когда блок будет в зоне видимости*/
}); 





$('.info_header_one').typeIt({
    speed: 100,
    autoStart: false,
    
})
.tiPause(70)
.tiType(']')
.tiPause(70)
.tiDelete(1)
.tiType('т')
.tiPause(70)
.tiType('#')
.tiPause(70)
.tiDelete(1)
.tiType('а')
.tiPause(70)
.tiType('%')
.tiPause(70)
.tiDelete(1)
.tiType('п')
.tiPause(70)
.tiType('&')
.tiPause(70)
.tiDelete(1)
.tiType(' ')
.tiPause(70)
.tiType('@')
.tiPause(70)
.tiDelete(1)
.tiType('1');

$('.info_header_two').typeIt({
    speed: 100,
    autoStart: false
})
.tiPause(70)
.tiType('#')
.tiPause(70)
.tiDelete(1)
.tiType('т')
.tiPause(7)
.tiType('/')
.tiPause(7)
.tiDelete(1)
.tiType('а')
.tiPause(70)
.tiType('^')
.tiPause(7)
.tiDelete(1)
.tiType('п')
.tiPause(70)
.tiType('{')
.tiPause(7)
.tiDelete(1)
.tiType(' ')
.tiPause(70)
.tiType('}')
.tiPause(70)
.tiDelete(1)
.tiType('2');

$('.smart_string_one').typeIt({
    speed: 100,
    autoStart: false
})
.tiPause(70)
.tiType(']')
.tiPause(70)
.tiDelete(1)
.tiType('т')
.tiPause(70)
.tiType('#')
.tiPause(70)
.tiDelete(1)
.tiType('а')
.tiPause(70)
.tiType('%')
.tiPause(70)
.tiDelete(1)
.tiType('п')
.tiPause(70)
.tiType('&')
.tiPause(70)
.tiDelete(1)
.tiType(' ')
.tiPause(70)
.tiType('@')
.tiPause(70)
.tiDelete(1)
.tiType('1');

$('.smart_string_two').typeIt({
    speed: 100,
    autoStart: false
})
.tiPause(70)
.tiType('#')
.tiPause(70)
.tiDelete(1)
.tiType('т')
.tiPause(70)
.tiType('/')
.tiPause(70)
.tiDelete(1)
.tiType('а')
.tiPause(70)
.tiType('^')
.tiPause(70)
.tiDelete(1)
.tiType('п')
.tiPause(70)
.tiType('{')
.tiPause(70)
.tiDelete(1)
.tiType(' ')
.tiPause(70)
.tiType('}')
.tiPause(70)
.tiDelete(1)
.tiType('2');

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

if(!localStorage.theme) localStorage.theme = "dark"
document.body.className = localStorage.theme
changeThemBtn.innerText = document.body.classList.contains("white") ? "Светлая тема" : "Тёмная тема"

changeThemBtn.onclick = () => {
    document.body.classList.toggle("white")
    changeThemBtn.innerText = document.body.classList.contains("white") ? "Светлая тема" : "Тёмная тема"
    localStorage.theme = document.body.className || "dark"
};