document.addEventListener('DOMContentLoaded', () => {
    // Selection of board element
    const board = document.getElementById('board');
  
    // Get all div elements within the board and add the 'square' class
    const squares = board.querySelectorAll('div');
    squares.forEach(square => {
      square.classList.add('square');
    });
  });


  // tic-tac-toe.js
document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const squares = board.querySelectorAll('div');
  
  // Initialize game variables
  let currentTurn = 'X';
  let gameState = Array(9).fill(null); // Array to keep track of the game state

  // Add event listener to each square
  squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      // Only allow marking empty squares
      if (!gameState[index]) {
        // Update the game state and display X or O
        gameState[index] = currentTurn;
        square.textContent = currentTurn;
        square.classList.add(currentTurn);

        // Alternate the turn
        currentTurn = currentTurn === 'X' ? 'O' : 'X';
      }
    });
  });
});
