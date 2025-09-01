import "./GameOver.css";

const GameOver = ({ setScreen, bestScore, currentScore, setCurrentScore }) => {
  return (
    <div className="game-hover">
      <img src="/rick_jump.png" alt="rick_jump" />
      <h1>Game Over</h1>
      <p>Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCurrentScore(0);
          setScreen("home");
        }}
      >
        Home
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCurrentScore(0);
          setScreen("game");
        }}
      >
        Restart
      </button>
    </div>
  );
};

export { GameOver };
