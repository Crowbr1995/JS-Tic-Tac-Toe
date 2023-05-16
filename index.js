const cells = document.querySelectorAll('.cell');
const currentTurn = document.querySelector('#currentTurn');
const restartBtn = document.querySelector('#restartBtn');

let roundWon = false;
let currentPlayer = 'x';
let options = [];

const winningCoord = [
    [0,1,2],
    [3,4,5], 
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

initializeGame = () => {
    for (let i = 0; i < cells.length; i++) {
        options[i] = '';
        cells[i].addEventListener('click', () => {
            cells[i].innerHTML = currentPlayer;
            cells[i].classList.add('taken');
            options[i] = currentPlayer;
            if (currentPlayer == 'x') {
                cells[i].style.color = 'red';
            } else {
                cells[i].style.color = 'blue';
            }
            checkWinner();
            currentPlayer = (currentPlayer == 'x') ? 'o' : 'x';
            if (roundWon == false) {
                currentTurn.innerHTML = "Player " + currentPlayer.toUpperCase() + "'s Turn";
            }
            if (!options.includes('') && roundWon == false) {
                currentTurn.innerHTML = 'Draw';
            }
        });
        restartBtn.addEventListener('click', () => {
            options[i] = '';
            currentPlayer = 'x';
            cells.forEach(cell => cell.textContent='');
            cells.forEach(cell => cell.classList.remove('taken'));
            currentTurn.innerHTML = "Player " + currentPlayer.toUpperCase() + "'s Turn";
            roundWon = false;
        })
    } 
   
}

checkWinner = () => {
    for (let y = 0; y < winningCoord.length; y++) {
        const coord = winningCoord[y];
        const cellA = options[coord[0]];
        const cellB = options[coord[1]];
        const cellC = options[coord[2]];
     
        if (cellA == '' || cellB == '' || cellC == '') {
             continue;
        }
        if(cellA == cellB && cellB == cellC){
             roundWon = true;
             break;
        }
     }

    if (roundWon) {
        currentTurn.innerHTML = 'Player ' + currentPlayer.toUpperCase() + ' Won!';
        cells.forEach(cell => cell.classList.add('taken'));
    } 
}

initializeGame();





