let row = document.createElement('div');
row.classList.add('flex-row');

let mainContainer = document.querySelector('.main-container');

for (let index = 0; index < 16; index++) {
    let square = document.createElement('div');
    square.classList.add('square');
    row.appendChild(square);
};

mainContainer.appendChild(row);