window.onload = init

function init() {
    initButtons()
}
function initButtons() {
    let allButons = document.querySelectorAll('.rent-sale button')
    for (button of allButons) {
        button.setAttribute('onClick', 'handleButtonSwitch(this)')
    }
}
function handleButtonSwitch(button) {
    let allButons = document.querySelectorAll('.rent-sale button')
    if (!button.classList.contains('active')) {
        for (otherButtons of allButons) {
            otherButtons.classList.remove('active')
        }
        button.classList.add('active')
    }
}



$(document).ready(function(){

    if($('.brands_slider').length)
    {
    var brandsSlider = $('.brands_slider');
    
    brandsSlider.owlCarousel(
    {
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    nav:false,
    dots:false,
    autoWidth:true,
    items:8,
    margin:42
    });
    
    if($('.brands_prev').length)
    {
    var prev = $('.brands_prev');
    prev.on('click', function()
    {
    brandsSlider.trigger('prev.owl.carousel');
    });
    }
    
    if($('.brands_next').length)
    {
    var next = $('.brands_next');
    next.on('click', function()
    {
    brandsSlider.trigger('next.owl.carousel');
    });
    }
    }
    
    
    });