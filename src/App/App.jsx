import { useState } from "react";
import { Home } from "../Home/Home";
import { Game } from "../Game/Game";
import { GameOver } from "../GameOver/GameOver";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  let content;
  switch (screen) {
    case "home":
      content = <Home setScreen={setScreen} bestScore={bestScore} />;
      break;
    case "game":
      content = (
        <Game
          setScreen={setScreen}
          bestScore={bestScore}
          setBestScore={setBestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
      );
      break;
    case "game-over":
      content = (
        <GameOver
          setScreen={setScreen}
          bestScore={bestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
      );
      break;
    default:
      break;
  }
  return <div className="app">{content}</div>;
}

export default App;
