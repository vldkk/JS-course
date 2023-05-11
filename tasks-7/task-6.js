const container = document.querySelector('p');
container.textContent = `Width: ${window.innerWidth}, height: ${window.innerHeight}.`;

window.addEventListener('resize', () => {
    container.textContent = `Width: ${window.innerWidth}, height: ${window.innerHeight}.`;
})