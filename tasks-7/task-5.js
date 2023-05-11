const button = document.querySelector('button');
const container = document.createElement('div');
button.after(container);

button.addEventListener('click', () => addMessage('I was pressed!'));
button.addEventListener('mouseover', () => addMessage('Mouse on me!'));
button.addEventListener('mouseout', () => addMessage('Mouse is not on me!'));

function addMessage(message) {
    container.insertAdjacentHTML('beforeend', `<p>${message}</p>`);
}