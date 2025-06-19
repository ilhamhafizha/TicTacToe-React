import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Square from './components/Square';
import Board from './components/Board';
import GameInfo from './components/GameInfo';
import calcualateWinner from './utils/calcualateWinner';


function App() {
  // const [isXnext, setIsXNext] = useState(false);

  // const [board, setBoard] = useState(Array(9).fill(null));
  const [timeLine, setTimeLine] = useState([{
    isXnext: false,
    board: Array(9).fill(null)
  }]);

  const currentState = timeLine[timeLine.length - 1];
  const board = currentState.board;
  const isXnext = currentState.isXnext;
  const winner = calcualateWinner(board);

  const handlerResetGameClick = () => {
    setTimeLine([{
      isXnext: false,
      board: Array(9).fill(null)
    }]);
  }

  const handleSquareClick = (value) => {
    if (winner) {
      return;
    }

    const newBoard = [...currentState.board];

    if (newBoard[value]) {
      return;
    }

    newBoard[value] = isXnext ? "X" : "O";

    setTimeLine([...timeLine, {
      board: newBoard,
      isXnext: !isXnext
    }]);
  }


  return (
    <div className="container">
      <Board board={board} onAction={handleSquareClick} />
      <GameInfo
        winner={winner}
        isXnext={isXnext}
        onReset={handlerResetGameClick}
        timeLine={timeLine}
      />
    </div>
  );

}

export default App;
