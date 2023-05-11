const select = document.querySelector('select');
const removeBtn = document.querySelector('button');

removeBtn.addEventListener('click', () => {
    const selectedOptionIndex = select.selectedIndex;
    if (selectedOptionIndex !== -1) {
        select.options[selectedOptionIndex].remove();
    }
});
