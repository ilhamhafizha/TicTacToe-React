import Button from "./Button";
import Timeline from "./Timeline";

const GameInfo = ({ winner, isXnext, onReset, timeLine, onTimelineClick }) => {

  const handlerResetGameClick = () => {
    onReset();
  }
  return (
    <div className="game-info">
      {
        winner ? <h2>Winner: {winner}</h2> : <h2>No Winner Yet</h2>
      }
      <h2>Next player: {isXnext ? "X" : "O"}</h2>
      <Button onClick={handlerResetGameClick}>Start Over</Button>
      <Timeline
        timeLine={timeLine}
        onTimeLineItemClick={onTimelineClick}
      />
    </div>
  );
}

export default GameInfo;