import Button from "./Button";
import Timeline from "./Timeline";

const GameInfo = ({ winner, isXnext }) => {


  return (
    <div className="game-info">

      <h2>Winner: {winner}</h2>

      <h2>Next player: {isXnext ? "X" : "O"}</h2>

    </div>
  );
}

export default GameInfo;