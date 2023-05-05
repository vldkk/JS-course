const mainUnit = document.createElement('main');
mainUnit.classList.add('mainClass', 'check', 'item');
document.body.appendChild(mainUnit);

const mainDiv = document.createElement('div');
mainDiv.id = 'myDiv';
mainUnit.appendChild(mainDiv);

const text = document.createElement('p');
text.textContent = 'First paragraph';
mainDiv.appendChild(text);
