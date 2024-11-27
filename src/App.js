import "./App.css";
import QuestionCard from "./components/QuestionCard";
import Scoreboard from "./components/Scoreboard";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  const handleCorrectAnswer = () => {
    setScore(score + 1);
  };

  return (
    <div className="flex-container">
      <div className="game-header">
        <h2 className="game-title">Welcome to Basketball Guesser!</h2>
      </div>
      <QuestionCard
        question="What year was LeBron Drafted?"
        listOfAnswers={["1998", "2003", "2004", "2005"]}
        answerIndex={1}
        updateScore={handleCorrectAnswer}
      />
      <Scoreboard score={score} />
    </div>
  );
}

export default App;
