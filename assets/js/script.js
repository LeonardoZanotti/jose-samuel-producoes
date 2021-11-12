window.onload = init;

function init() {
  initButtons();
}

function initButtons() {
  let allButons = document.querySelectorAll('.rent-sale button');
  for (button of allButons) {
    button.setAttribute('onClick', 'handleButtonSwitch(this)');
  }
}

function handleButtonSwitch(button) {
  let allButons = document.querySelectorAll('.rent-sale button');
  if (!button.classList.contains('active')) {
    for (otherButtons of allButons) {
      otherButtons.classList.remove('active');
    }
    button.classList.add('active');
  }
}

// brands carousel
$(document).ready(function () {
  if ($('.brands_slider').length) {
    var brandsSlider = $('.brands_slider');
    brandsSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      nav: false,
      dots: false,
      autoWidth: true,
      items: 8,
      margin: 42,
    });
  }
});

function changeContent(content) {
  if (content === 'videos') {
    $('.videos-content').css('display', 'flex');
    $('.poetry-content').css('display', 'none');
  } else if (content === 'poetry') {
    $('.videos-content').css('display', 'none');
    $('.poetry-content').css('display', 'flex');
  }
}
