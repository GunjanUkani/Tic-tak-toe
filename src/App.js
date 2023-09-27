import React, { useState } from 'react';
import './Tictaktoe.css'; // Import your custom CSS for styling

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    if (winner || board[i]) return;

    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => (
    <button
      className={`btn square ${board[i] ? 'filled' : ''}`} // Apply custom CSS classes
      onClick={() => handleClick(i)}
    >
      {board[i]}
    </button>
  );

  const getStatus = () => {
    if (winner) {
      return (
        <div className="status">
          Winner: {winner}
        </div>
      );
    } else if (board.every((square) => square)) {
      return (
        <div className="status">
          Draw! No one wins.
        </div>
      );
    } else {
      return (
        <div className="status">
          Next Player: {xIsNext ? 'X' : 'O'}
        </div>
      );
    }
  };

  return (
    <div className="center-container"> {/* Center the game on the page */}
      {getStatus()}
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
