// https://codepen.io/misha_klymenko/pen/abzLvqo
const circles = document.querySelectorAll('.circle');

circles.forEach(element => {
    let dataAnim = element.getAttribute('data-anim');
    element.classList.add(dataAnim);
});