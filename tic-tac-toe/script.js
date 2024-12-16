document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    const gameStatus = document.getElementById('gameStatus');
    const restartBtn = document.getElementById('restartBtn');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
  
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
  
    const checkWin = () => {
      for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          gameActive = false;
          gameStatus.textContent = `${currentPlayer} wins!`;
          break;
        }
      }
      if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        gameStatus.textContent = 'It\'s a tie!';
      }
    };
  
    const handleCellClick = (event) => {
      const cellIndex = event.target.dataset.cellIndex;
      if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    };
  
    const handleRestart = () => {
      gameBoard = ['', '', '', '', '', '', '', '', ''];
      gameActive = true;
      currentPlayer = 'X';
      gameStatus.textContent = '';
      cells.forEach(cell => {
        cell.textContent = '';
      });
    };
  
    cells.forEach(cell => {
      cell.addEventListener('click', handleCellClick);
    });
  
    restartBtn.addEventListener('click', handleRestart);
  });
  