import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Square from './components/Square';
import Board from './components/Board';
import GameInfo from './components/GameInfo';
import calcualateWinner from './utils/calcualateWinner';
import Timeline from './components/Timeline';

function App() {
  const [timeLine, setTimeLine] = useState([{
    isXnext: false,
    board: Array(9).fill(null)
  }]);

  const [currentState, setCurrentState] = useState(0);

  // Make sure currentState is within bounds
  const safeCurrentState = Math.min(currentState, timeLine.length - 1);
  const board = timeLine[safeCurrentState].board;
  const isXnext = timeLine[safeCurrentState].isXnext;
  const winner = calcualateWinner(board);



  const handleSquareClick = (value) => {
    if (winner) {
      return;
    }

    const newBoard = [...board];

    if (newBoard[value]) {
      return;
    }

    newBoard[value] = isXnext ? "X" : "O";

    // Remove future moves if we're not at the end
    const newTimeLine = timeLine.slice(0, safeCurrentState + 1);

    setTimeLine([...newTimeLine, {
      board: newBoard,
      isXnext: !isXnext
    }]);

    setCurrentState(safeCurrentState + 1);
  }

  const handleTimelineClick = (index) => {
    setCurrentState(index);
  }

  return (
    <div className="container">
      <Board board={board} onAction={handleSquareClick} />
      <div>
        <GameInfo
          winner={winner}
          isXnext={isXnext}
        />
        <Timeline timeLine={timeLine} onTimeLineItemClick={handleTimelineClick} currentState={currentState} />
      </div>
    </div>
  );
}

export default App;
