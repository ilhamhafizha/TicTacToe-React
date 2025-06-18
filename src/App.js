import './App.css';

const Button = ({ children }) => {
  return (
    <button className="button">
      {children}
    </button>
  );
}

function App() {
  return (
    <div className="container">
      <div className="board">
        <div className="row">
          <div className="square">1</div>
          <div className="square">2</div>
          <div className="square">3</div>
        </div>
        <div className="row">
          <div className="square">4</div>
          <div className="square">5</div>
          <div className="square">6</div>
        </div>
        <div className="row">
          <div className="square">7</div>
          <div className="square">8</div>
          <div className="square">9</div>
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
