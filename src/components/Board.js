import Square from "./Square";

const Board = ({ board, onAction }) => {

  const handleSquareClick = (index) => {
    onAction(index);
  }
  return (
    <div className="board">
      <Square value={board[0]} onClick={() => handleSquareClick(0)} />
      <Square value={board[1]} onClick={() => handleSquareClick(1)} />
      <Square value={board[2]} onClick={() => handleSquareClick(2)} />
      <Square value={board[3]} onClick={() => handleSquareClick(3)} />
      <Square value={board[4]} onClick={() => handleSquareClick(4)} />
      <Square value={board[5]} onClick={() => handleSquareClick(5)} />
      <Square value={board[6]} onClick={() => handleSquareClick(6)} />
      <Square value={board[7]} onClick={() => handleSquareClick(7)} />
      <Square value={board[8]} onClick={() => handleSquareClick(8)} />
    </div>
  );
}

export default Board;