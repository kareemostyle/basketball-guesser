const Scoreboard = ({ score }) => {
  return (
    <>
      <div className="score-container" id="scoreboard">
        <div className="player-score">
          <h2 className="score-text">Player</h2>
          <div className="score">
            <p className="points" id="player-points">
              {score}
            </p>
            <p className="points-shadow">000</p>
          </div>
        </div>
        <div className="possible-score"></div>
      </div>
    </>
  );
};

export default Scoreboard;
