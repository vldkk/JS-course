const mainUnit = document.getElementById('myDiv');
const list = document.getElementById('myList');

document.getElementsByTagName('h1')[0].style.backgroundColor = '#8FF57A';
mainUnit.firstElementChild.style.fontWeight = 'bold';
mainUnit.children[1].style.color = 'red';
mainUnit.children[2].style.textDecoration = 'underline';
mainUnit.lastElementChild.style.fontStyle = 'italic';
list.nextElementSibling.style.display = 'none';
list.style = 'display: flex; list-style: none';
