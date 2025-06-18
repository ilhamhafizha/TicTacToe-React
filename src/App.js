import './App.css';
import { useState } from 'react';

const Button = ({ children }) => {
  return (
    <button className="button">
      {children}
    </button>
  );
};

const Square = ({ value, onClick }) => {
  // const [state, setState] = useState(null);
  // const handleClick = () => {
  //   setState("X");
  //   console.log(`Square ${value} clicked`);
  // };
  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  );
};

function calcualateWinner(board) {
  //list down semua kemungkinan

}

function App() {
  const [isXnext, setIsXNext] = useState(false);

  const [board, setBoard] = useState(Array(9).fill(null));

  const handleSquareClick = (value) => {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];

      if (newBoard[value]) {
        return newBoard; // Ignore click if square is already filled
      }

      newBoard[value] = isXnext ? "X" : "O";
      setIsXNext(!isXnext);
      return newBoard;
    });
    console.log(`Square ${value} clicked`);
  }

  return (
    <div className="container">
      <div className="board">
        <div className="row">
          <Square value={board[0]} onClick={() => { handleSquareClick(0) }} />
          <Square value={board[1]} onClick={() => { handleSquareClick(1) }} />
          <Square value={board[2]} onClick={() => { handleSquareClick(2) }} />
        </div>
        <div className="row">
          <Square value={board[3]} onClick={() => { handleSquareClick(3) }} />
          <Square value={board[4]} onClick={() => { handleSquareClick(4) }} />
          <Square value={board[5]} onClick={() => { handleSquareClick(5) }} />
        </div>
        <div className="row">
          <Square value={board[6]} onClick={() => { handleSquareClick(6) }} />
          <Square value={board[7]} onClick={() => { handleSquareClick(7) }} />
          <Square value={board[8]} onClick={() => { handleSquareClick(8) }} />
        </div>
      </div>

      <div className="game-info">
        <h2>Next player: {isXnext ? "X" : "O"}</h2>
        <Button>Start Over</Button>
        <h2>History</h2>
        <Button>Langkah #1</Button>
        <Button>Langkah #2</Button>
        <Button>Langkah #3</Button>
      </div>
    </div>
  );

}

export default App;
