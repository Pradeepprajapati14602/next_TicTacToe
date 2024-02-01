import React, { useState } from 'react';
import { XIcon } from './XIcon';
import { OIcon } from './OIcon';

const TicTacTao = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = [...board];

    if (calculateWinner(newBoard) || newBoard[index]) {
      return;
    }

    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    console.log('newBoard')
  };

  const renderSquare = (index) => {
    return (
      <button className="square border border-black h-12 w-12 flex items-center justify-center" onClick={() => handleClick(index)}>
        {renderSquareContent(board[index])}
      </button>
    );
  };

  const renderSquareContent = (value) => {
    if (value === 'X') {
      return <XIcon />;
    } else if (value === 'O') {
      return <OIcon />;
    }
    return null;
  };


  const PlayAgain = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  console.log('winner',winner);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;
    console.log("status",status);

  return (
    // <div className="text-center mt-8">
    //   <div className="mb-4 font-bold text-xl">{status}</div>
    //   <div className="grid grid-cols-3">
    //     {renderSquare(0)}
    //     {renderSquare(1)}
    //     {renderSquare(2)}
    //   </div>
    //   <div className="grid grid-cols-3">
    //     {renderSquare(3)}
    //     {renderSquare(4)}
    //     {renderSquare(5)}
    //   </div>
    //   <div className="grid grid-cols-3">
    //     {renderSquare(6)}
    //     {renderSquare(7)}
    //     {renderSquare(8)}
    //   </div>
    // </div>
    <div className="text-center mt-8">
      <div className="mb-4 font-bold text-xl">{status}</div>
      <div className="flex flex-wrap justify-center">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="flex flex-wrap justify-center">
        
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        
      </div>
      <div className="flex flex-wrap justify-center">
      {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
        {winner && (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={PlayAgain}
        >
          Play Again
        </button>
      )}
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

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

TicTacTao.isClientSafe = true;

export default TicTacTao;