//Exercise 1&2 -->
document.addEventListener('DOMContentLoaded', () => {
      // Selection of board element
  const board = document.getElementById('board');
    // Get all div elements within the board and add the 'square' class
  const squares = board.querySelectorAll('div');
  squares.forEach(square => {
    square.classList.add('square');
  });
 




  // game variables
  let currentTurn = 'X';
  let gameState = Array(9).fill(null); // Array to keep track of the game state
  //winner variables
  const statusDiv = document.getElementById('status');
  let gameActive  = true;
  //new game button
  const newGameButton = document.querySelector('.btn');

    //Exercise 4
    //First check all winning combinations
    const winningCombinations = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Top-left to bottom-right diagonal
      [2, 4, 6]  // Top-right to bottom-left diagonal
    ];
    
    function checkWinner() {
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          return gameState[a]; //X or O is winner
        }
      }
      return null;
    }


  // Add event listener to each square
  squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      // to validate marking on empty squares
      if (gameActive && !gameState[index]) {
        gameState[index] = currentTurn;
        square.textContent = currentTurn;
        square.classList.add(currentTurn);

        const winner = checkWinner();
        if (winner) {
          gameActive = false;
          statusDiv.textContent = `Congrats! ${winner} is the Winner!`;
          statusDiv.classList.add('you-won');
        } else {
        // Alternate the turn
        currentTurn = currentTurn === 'X' ? 'O' : 'X';
        }
      }
    });

    //Exercise 3
    //Mouse enter event
    square.addEventListener('mouseenter', () => {
      if (!gameState[index]){
        square.classList.add('hover');
      }
    });

    //Mouse leave event
    square.addEventListener('mouseleave', () => {
        square.classList.remove('hover');
    });
  });

  // Function to reset the game
  function resetGame() {
  gameState = Array(9).fill(null);
  gameActive = true;
  currentTurn = 'X';
  statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
  statusDiv.classList.remove('you-won');
    
  squares.forEach(square => {
    square.textContent = ''; // Clear X or O from each square
    square.classList.remove('X', 'O'); // Remove X or O class for styling
  });
  }

  // new game button to reset the game 
  newGameButton.addEventListener('click', resetGame);
});



