const changeBtns = document.querySelectorAll('.changeBtn');
const link = document.querySelector('a');

changeBtns.forEach(btn => {
    if (btn.classList.contains('blue')) {
        btn.addEventListener('click', () => {
            document.body.style.backgroundColor = 'blue';
        });
    } else if (btn.classList.contains('pink')) {
        btn.addEventListener('dblclick', () => {
            document.body.style.backgroundColor = 'pink';
        });
    }
    else {
        btn.addEventListener('mousedown', () => {
            document.body.style.backgroundColor = '#663300';
        });
        btn.addEventListener('mouseup', () => {
            document.body.style.backgroundColor = 'white';
        });
    }
});

link.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white';
});