

import { useEffect, useState } from 'react';
import './TenziesGame.css'; // Import your custom CSS file for styling
import { nanoid } from 'nanoid';

function TenziesGame() {
  const [random, setRandom] = useState([]);
  const [isWin, setIsWin] = useState(false);

  function initializeRandomState() {
    const initialRandomState = Array(10).fill(null).map(() => ({
      id: nanoid(),
      one: 0,
  
      isHeld: false,
    }));
    setRandom(initialRandomState);
  }

  useEffect(() => {
    initializeRandomState();
  }, []);

  function DiceRolled() {
    if (isWin) {
      // Reset the game if you won
      setIsWin(false);
      initializeRandomState();
    } else {
      // Roll the dice if you haven't won
      setRandom((o) =>
        o.map((od) => (od.isHeld ? od : { ...od, one: Math.floor(Math.random() * 6) }))
      );
    }
  }

  function hold(id) {
    setRandom(function (o) {
      return o.map(function (od) {
        return od.id === id ? { ...od, isHeld: !od.isHeld } : od;
      });
    });
  }

  useEffect(function () {
    const isWin = random.every((od) => od.isHeld && od.one === random[0].one);
    setIsWin(isWin);
  }, [random]);

  return (
    <div className="tenzies-game-container">
      <h1 className="game-title">Tenzies Game</h1>
      <button className="roll-button" onClick={DiceRolled}>
        {isWin ? 'Start New Game' : 'Roll Dice'}
      </button>
      <div className="dice-container">
        {random.map((o) => (
          <div key={o.id} className="dice">
            <button
              onClick={() => hold(o.id)}
              className={`dice-button ${o.isHeld ? 'held' : ''}`}
            >
              {o.one}
            </button>
          </div>
        ))}
      </div>
      <p className="result-message">{isWin ? 'You Won!' : 'You Lost'}</p>
    </div>
  );
}

export default TenziesGame;
