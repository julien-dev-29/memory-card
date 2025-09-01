import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Loading } from "../Components/Loading/Loading";
import "./Board.css";

const Board = ({
  characters,
  setScreen,
  setCurrentScore,
  currentScore,
  setBestScore,
  bestScore,
  isLoading,
}) => {
  const [clickedCards, setClickedCards] = useState([]);
  const [randomCards, setRandomCards] = useState([]);

  /**
   *
   * @returns
   */
  const generateRandomCards = () => {
    let randomNumbers = [];
    while (randomNumbers.length < 3) {
      const number = Math.floor(Math.random() * characters.length);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    return randomNumbers.map((num) => characters[num]);
  };

  /**
   *
   * @param {Number} id
   */
  function handleClick(id) {
    if (clickedCards.includes(id)) {
      setScreen("game-over");
      setClickedCards([]);
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setClickedCards([...clickedCards, id]);
      if (currentScore >= bestScore) {
        setBestScore(newScore);
      }
      setRandomCards(generateRandomCards());
    }
  }

  useEffect(() => {
    if (characters.length > 0) {
      setRandomCards(generateRandomCards());
    }
  }, [characters]);

  return (
    <div className="board">
      {isLoading ? (
        <Loading />
      ) : (
        randomCards.map((c) => (
          <Card key={c.id} card={c} handleClick={handleClick} />
        ))
      )}
    </div>
  );
};

export { Board };
