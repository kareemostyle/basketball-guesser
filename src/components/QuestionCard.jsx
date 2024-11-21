const QuestionCard = ({ question, listOfAnswers }) => {
  return (
    <>
      <div className="guesser-container">
        <div className="question-container">
          <span id="question">{question}</span>
        </div>
        <div className="guess">
          <ol className="answer-list">
            {listOfAnswers.map((answer) => (
              <li>
                <span className="answer">{answer}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
