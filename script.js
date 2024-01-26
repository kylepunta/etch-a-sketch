let mainContainer = document.querySelector('.main-container');

for (let index = 1; index <= 16; index++) {
    let row = document.createElement('div');
    row.classList.add(`flex-row-${index}`);
    mainContainer.appendChild(row);
};

for (let index = 1; index <= 16; index++) {
    let square = document.createElement('div');
    square.classList.add(`square-${index}`);
    row.appendChild(square);
};

mainContainer.appendChild(row);