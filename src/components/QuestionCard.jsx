const QuestionCard = ({
  question,
  listOfAnswers,
  answerIndex,
  updateScore,
}) => {
  return (
    <>
      <div className="guesser-container">
        <div className="question-container">
          <span id="question">{question}</span>
        </div>
        <div className="guess">
          <ol className="answer-list">
            {listOfAnswers.map((answer, index) => (
              <li key={index}>
                <span
                  className="answer"
                  onClick={() => {
                    index === answerIndex && updateScore();
                  }}
                >
                  {answer}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
