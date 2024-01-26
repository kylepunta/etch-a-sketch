let mainContainer = document.querySelector('.main-container');

for (let index = 1; index <= 16; index++) {
    let row = document.createElement('div');
    row.classList.add(`flex-row`);
    mainContainer.appendChild(row);
    for (let index = 1; index <= 16; index++) {
        let square = document.createElement('div');
        square.classList.add(`square`);
        row.appendChild(square);
    };
};

let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        e.target.style.background = 'yellow';
    });
});