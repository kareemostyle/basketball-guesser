import "./App.css";
import QuestionCard from "./components/QuestionCard";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="flex-container">
      <div className="game-header">
        <h2 className="game-title">Welcome to Basketball Guesser!</h2>
      </div>
      <QuestionCard
        question="What year was LeBron Drafted?"
        listOfAnswers={["1998", "2003", "2004", "2005"]}
      />
      <Scoreboard />
    </div>
  );
}

export default App;
