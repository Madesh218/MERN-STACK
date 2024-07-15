let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const message = document.getElementById('message');

function placeMarker(index) {
    if (gameState[index] === '' && gameActive) {
        gameState[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        
        if (checkWin()) {
            message.innerText = `${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
        
        if (checkDraw()) {
            message.innerText = 'It\'s a draw!';
            gameActive = false;
            return;
        }
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.innerText = `${currentPlayer}'s turn`;
    }
}

function checkWin() {
    for (let condition of winningConditions) {
        let a = gameState[condition[0]];
        let b = gameState[condition[1]];
        let c = gameState[condition[2]];
        
        if (a !== '' && a === b && b === c) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return !gameState.includes('');
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    message.innerText = `${currentPlayer}'s turn`;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
