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

// $(document).ready(function(){
//     $('.carousel__iner').slick({
//         // dots: true,
//         // infinite: true,
//         // speed: 300,
//         // slidesToShow: 1,
//         // adaptiveHeight: true
//     });
// });

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
.tiPause(90)
.tiType(']')
.tiPause(90)
.tiDelete(1)
.tiType('т')
.tiPause(90)
.tiType('#')
.tiPause(90)
.tiDelete(1)
.tiType('а')
.tiPause(90)
.tiType('%')
.tiPause(90)
.tiDelete(1)
.tiType('п')
.tiPause(90)
.tiType('&')
.tiPause(90)
.tiDelete(1)
.tiType(' ')
.tiPause(90)
.tiType('@')
.tiPause(90)
.tiDelete(1)
.tiType('1');

$('.info_header_two').typeIt({
    speed: 100,
    autoStart: false
})
.tiPause(90)
.tiType('#')
.tiPause(90)
.tiDelete(1)
.tiType('т')
.tiPause(90)
.tiType('/')
.tiPause(90)
.tiDelete(1)
.tiType('а')
.tiPause(90)
.tiType('^')
.tiPause(90)
.tiDelete(1)
.tiType('п')
.tiPause(90)
.tiType('{')
.tiPause(90)
.tiDelete(1)
.tiType(' ')
.tiPause(90)
.tiType('}')
.tiPause(90)
.tiDelete(1)
.tiType('2');

$('.smart_string_one').typeIt({
    speed: 100,
    autoStart: false
})
.tiPause(90)
.tiType(']')
.tiPause(90)
.tiDelete(1)
.tiType('т')
.tiPause(90)
.tiType('#')
.tiPause(90)
.tiDelete(1)
.tiType('а')
.tiPause(90)
.tiType('%')
.tiPause(90)
.tiDelete(1)
.tiType('п')
.tiPause(90)
.tiType('&')
.tiPause(90)
.tiDelete(1)
.tiType(' ')
.tiPause(90)
.tiType('@')
.tiPause(90)
.tiDelete(1)
.tiType('1');

$('.smart_string_two').typeIt({
    speed: 100,
    autoStart: false
})
.tiPause(90)
.tiType('#')
.tiPause(90)
.tiDelete(1)
.tiType('т')
.tiPause(90)
.tiType('/')
.tiPause(90)
.tiDelete(1)
.tiType('а')
.tiPause(90)
.tiType('^')
.tiPause(90)
.tiDelete(1)
.tiType('п')
.tiPause(90)
.tiType('{')
.tiPause(90)
.tiDelete(1)
.tiType(' ')
.tiPause(90)
.tiType('}')
.tiPause(90)
.tiDelete(1)
.tiType('2');