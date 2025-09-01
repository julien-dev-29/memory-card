import { useEffect, useState } from "react";
import { Scoreboard } from "../ScoreBoard/Scoreboard";
import { Board } from "../Board/Board";
import "./Game.css";

const Game = ({
  setScreen,
  bestScore,
  setBestScore,
  currentScore,
  setCurrentScore,
}) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let randomID = [];
  for (let index = 0; index < 20; index++) {
    randomID.push(Math.floor(Math.random() * 20));
  }
  useEffect(() => {
    setIsLoading(true);
    fetch("https://rickandmortyapi.com/api/character/" + randomID)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="game">
      <div className="flex">
        <h1 onClick={() => setScreen("home")}>Home</h1>
        <Scoreboard
          bestScore={bestScore}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
      </div>
      <Board
        characters={characters}
        setCharacters={setCharacters}
        setScreen={setScreen}
        setCurrentScore={setCurrentScore}
        currentScore={currentScore}
        setBestScore={setBestScore}
        bestScore={bestScore}
        isLoading={isLoading}
      />
    </div>
  );
};

export { Game };
