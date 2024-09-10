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
            <li id="first-answer">1998</li>
            <li id="second-answer">2004</li>
            <li id="third-answer">2003</li>
            <li id="fourth-answer">2005</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
