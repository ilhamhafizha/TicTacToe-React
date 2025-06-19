import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Square from './components/Square';
import Board from './components/Board';
import GameInfo from './components/GameInfo';
import calcualateWinner from './utils/calcualateWinner';
import Timeline from './components/Timeline';
import Swal from 'sweetalert2';

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

  // Show winner popup
  const showWinnerAlert = (winner) => {
    const playerColor = winner === 'X' ? '#4CAF50' : '#2196F3';

    Swal.fire({
      title: 'Winner!',
      html: `
        <div class="winner-popup">
          <div class="winner-trophy">🏆</div>
          <div class="winner-text">
            Player <span style="color: ${playerColor}; font-weight: bold;">${winner}</span> has won!
          </div>
        </div>
      `,
      icon: 'success',
      confirmButtonText: 'Play Again',
      showCancelButton: true,
      cancelButtonText: 'Review Game',
      background: '#fff',
      customClass: {
        popup: 'game-popup',
        confirmButton: 'game-confirm-btn',
        cancelButton: 'game-cancel-btn'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Reset game
        setTimeLine([{
          isXnext: false,
          board: Array(9).fill(null)
        }]);
        setCurrentState(0);
      }
    });
  };

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

    // Check for winner after move
    const newWinner = calcualateWinner(newBoard);
    if (newWinner) {
      setTimeout(() => showWinnerAlert(newWinner), 100);
    } else if (newBoard.every(square => square !== null)) {
      // Show draw popup
      Swal.fire({
        title: 'Draw!',
        html: `
          <div class="winner-popup">
            <div class="winner-trophy">🤝</div>
            <div class="winner-text">It's a tie! Well played both!</div>
          </div>
        `,
        icon: 'info',
        confirmButtonText: 'Play Again',
        background: '#fff',
        customClass: {
          popup: 'game-popup',
          confirmButton: 'game-confirm-btn'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeLine([{
            isXnext: false,
            board: Array(9).fill(null)
          }]);
          setCurrentState(0);
        }
      });
    }
  }

  const handleTimelineClick = (index) => {
    setCurrentState(index);
  }

  return (
    <div className="game-container">
      <h1 className="game-title">Tic Tac Toe</h1>
      <div className="game-content">
        <div className="board-container">
          <Board board={board} onAction={handleSquareClick} />
        </div>

        <div className="game-info">
          <div className="next-player">
            {winner ? `Winner: ${winner}` : `Next player: ${isXnext ? 'X' : 'O'}`}
          </div>

          <div className="game-history">
            <h2 className="history-title">Game History</h2>
            <Timeline
              timeLine={timeLine}
              onTimeLineItemClick={handleTimelineClick}
              currentState={currentState}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
