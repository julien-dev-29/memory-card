import "./Home.css";

const Home = ({ setScreen, bestScore }) => {
  return (
    <div className="home">
      <img id="rick" src="/rick.png" alt="rick" height="350" />
      <img id="morty" src="/morty.png" alt="rick" height="350" />
      <h1>
        Rick & Morty'<span>s</span> <span>Memory Card</span>
      </h1>
      <p>Best Score: {bestScore}</p>
      <button className="btn btn-primary" onClick={() => setScreen("game")}>
        Start
      </button>
    </div>
  );
};

export { Home };
