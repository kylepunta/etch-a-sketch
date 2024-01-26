let row = document.createElement('div');
row.classList.add('flex-row');

let square = document.createElement('div');
square.classList.add('square');

let mainContainer = document.querySelector('.main-container');

row.appendChild(square);
mainContainer.appendChild(row);