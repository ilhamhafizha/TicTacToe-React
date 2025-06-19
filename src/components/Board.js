import Square from "./Square";

const Board = ({ board, onAction }) => {

  const handleSquareClick = (index) => {
    onAction(index);
  }
  return (
    <div className="board">
      <div className="row">
        <Square index={1} value={board[0]} onClick={() => { handleSquareClick(0) }} />
        <Square index={2} value={board[1]} onClick={() => { handleSquareClick(1) }} />
        <Square index={3} value={board[2]} onClick={() => { handleSquareClick(2) }} />
      </div>
      <div className="row">
        <Square index={4} value={board[3]} onClick={() => { handleSquareClick(3) }} />
        <Square index={5} value={board[4]} onClick={() => { handleSquareClick(4) }} />
        <Square index={6} value={board[5]} onClick={() => { handleSquareClick(5) }} />
      </div>
      <div className="row">
        <Square index={7} value={board[6]} onClick={() => { handleSquareClick(6) }} />
        <Square index={8} value={board[7]} onClick={() => { handleSquareClick(7) }} />
        <Square index={9} value={board[8]} onClick={() => { handleSquareClick(8) }} />
      </div>
    </div>
  );
}

export default Board;