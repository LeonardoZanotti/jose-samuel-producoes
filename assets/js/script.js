window.onload = init

function init() {
    initButtons()
    slider()
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
