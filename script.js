let mainContainer = document.querySelector('.main-container');
let gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

let button = document.createElement('button');
button.textContent = "Click Me";
mainContainer.appendChild(button);

mainContainer.appendChild(gridContainer);

for (let index = 1; index <= 16; index++) {
    let row = document.createElement('div');
    row.classList.add(`flex-row`);
    gridContainer.appendChild(row);
    for (let index = 1; index <= 16; index++) {
        let square = document.createElement('div');
        square.classList.add(`square`);
        row.appendChild(square);
    };
};

let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
    });
});

button.addEventListener('click', () => {
    let newSquares = prompt("How many squares would you like per side?");

    let rows = document.querySelectorAll('.flex-row');
    rows.forEach((row) => {
        row.remove();
    });

    for (let index = 1; index <= newSquares; index++) {
        let row = document.createElement('div');
        row.classList.add(`flex-row`);
        gridContainer.appendChild(row);
        for (let index = 1; index <= newSquares; index++) {
            let square = document.createElement('div');
            square.classList.add(`square`);
            row.appendChild(square);
        };
    };

    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.background = 'black';
        });
    });
});