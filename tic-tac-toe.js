document.addEventListener('DOMContentLoaded', () => {
    // Selection of board element
    const board = document.getElementById('board');
  
    // Get all div elements within the board and add the 'square' class
    const squares = board.querySelectorAll('div');
    squares.forEach(square => {
      square.classList.add('square');
    });
  });
