import "./Scoreboard.css";

const Scoreboard = ({ bestScore, currentScore }) => {
  return (
    <div className="scoreboard">
      <p>Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
};

export { Scoreboard };
