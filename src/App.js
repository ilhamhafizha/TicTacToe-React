import './App.css';
import { useState } from 'react';

const Button = ({ children }) => {
  return (
    <button className="button">
      {children}
    </button>
  );
};

const Square = ({ value }) => {
  const [state, setState] = useState(null);
  const handleClick = () => {
    setState("X");
    console.log(`Square ${value} clicked`);
  };
  return (
    <div className="square" onClick={handleClick}>
      {state}
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <div className="board">
        <div className="row">
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
        </div>
        <div className="row">
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
        </div>
        <div className="row">
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </div>
      </div>

      <div className="game-info">
        <h2>Next player: X</h2>
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
