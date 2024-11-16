import "./App.css";

function App() {
  return (
    <div className="flex-container">
      <div className="game-header">
        <h2 className="game-title">Welcome to Basketball Guesser!</h2>
      </div>
      <div className="guesser-container">
        <div className="question-container">
          <span id="question">What year was LeBron James drafted?</span>
        </div>
        <div className="guess">
          <ol className="answer-list">
            <li className="answer">1998</li>
            <li className="answer">2004</li>
            <li className="answer">2003</li>
            <li className="answer">2005</li>
          </ol>
        </div>
      </div>
      <div className="score-container" id="scoreboard">
        <div className="player-score">
          <h2 className="score-text">Player</h2>
          <div className="score">
            <p className="points" id="player-points">
              0
            </p>
            <p className="points-shadow">000</p>
          </div>
        </div>
        <div className="possible-score"></div>
      </div>
    </div>
  );
}

export default App;
