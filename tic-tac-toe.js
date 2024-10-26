//Exercise 1 -->
document.addEventListener('DOMContentLoaded', () => {
    // Selection of board element
    const board = document.getElementById('board');
  
    // Get all div elements within the board and add the 'square' class
    const squares = board.querySelectorAll('div');
    squares.forEach(square => {
      square.classList.add('square');
    });
  });

//Exercise 2 -->
document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const squares = board.querySelectorAll('div');
  
  // game variables
  let currentTurn = 'X';
  let gameState = Array(9).fill(null); // Array to keep track of the game state

  // Add event listener to each square
  squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      // to validate marking on empty squares
      if (!gameState[index]) {
        gameState[index] = currentTurn;
        square.textContent = currentTurn;
        square.classList.add(currentTurn);
        // Alternate the turn
        currentTurn = currentTurn === 'X' ? 'O' : 'X';
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
});
