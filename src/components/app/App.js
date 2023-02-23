import "./App.css";
import { useState, useEffect } from "react";
import Button from "../button/Button.js";
import { clear } from "@testing-library/user-event/dist/clear";

function App() {
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState("");
  const [isActive, setIsActive] = useState(false);

  //Win messages
  const [winMessage, setWinMessage] = useState(false);

  //Even clicks
  const [evenClicks, setEvenClicks] = useState(0);

  //Odd clicks
  const [oddClicks, setOddClicks] = useState(0);

  //Total Clicks
  const [totalClicks, setTotalClicks] = useState(0);

  //Finished time
  const [finishedTime, setFinishedTime] = useState(0);
  //Timer
  const [gameTime, setGameTime] = useState(0);
  useEffect(() => {
    gameTime == 0 &&
      setInterval(() => {
        setGameTime((time) => time + 0.5);
      }, 1000);
  }, []);

  const [even, setEven] = useState([
    { id: 1, number: 2 },
    { id: 2, number: 4 },
    { id: 3, number: 6 },
    { id: 4, number: 8 },
    { id: 5, number: 10 },
    { id: 6, number: 12 },
    { id: 7, number: 14 },
    { id: 8, number: 16 },
    { id: 9, number: 18 },
    { id: 10, number: 20 },
    { id: 11, number: 22 },
    { id: 12, number: 24 },
  ]);
  const [odd, setOdd] = useState([
    { id: 1, number: 1 },
    { id: 2, number: 3 },
    { id: 3, number: 5 },
    { id: 4, number: 7 },
    { id: 5, number: 9 },
    { id: 6, number: 11 },
    { id: 7, number: 13 },
    { id: 8, number: 15 },
    { id: 9, number: 17 },
    { id: 10, number: 19 },
    { id: 11, number: 21 },
    { id: 12, number: 23 },
    { id: 13, number: 25 },
  ]);

  const shuffleButton = (list, setList) => {
    const shuffle = list.sort(() => Math.random() - 0.5);
    setList((oldArray) => [...oldArray, shuffle]);
    setList(list.filter((num) => num != ""));
  };

  //Shuffles the buttons on page load
  useEffect(() => {
    shuffleButton(even, setEven);
    shuffleButton(odd, setOdd);
  }, []);

  const buttonCheck = (id, number, list, setList, click, setClicks) => {
    if (count == 24) {
      setFinishedTime(gameTime);
      setWinMessage(true);
      setTotalClicks(oddClicks + evenClicks + 1);
    }
    if (number == count + 1) {
      console.log(odd);

      setCount(count + 1);
      setClicks(click + 1);
    } else {
      setClicks(click + 1);
      shuffleButton(list, setList);
    }
  
  };

  //Starts new game
  const newGame = () => {
    shuffleButton(even, setEven);
    shuffleButton(odd, setOdd);
    setWinMessage(false);
    setFinishedTime(0);
    setEvenClicks(0);
    setOddClicks(0);
    setCount(0);
    setGameTime(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={newGame}>New game</button>
      <div className="main-table">
        <div className="even-grid">
          <h1>Even clicks:{evenClicks}</h1>
          {even.map(({ id, number, isActive }) => (
            <Button
              key={id}
              type="button"
              value={number}
              className={number <= count ? "active" : "test"}
              onClick={() =>
                buttonCheck(
                  id,
                  number,
                  even,
                  setEven,
                  evenClicks,
                  setEvenClicks
                )
              }
            />
          ))}
        </div>
        <div className="odd-grid">
          <h1>Odd clicks:{oddClicks}</h1>
          {odd.map(({ id, number, isActive }) => (
            <Button
              key={id}
              type="button"
              value={number}
              className={number <= count ? "active" : "test"}
              onClick={() =>
                buttonCheck(id, number, odd, setOdd, oddClicks, setOddClicks)
              }
            />
          ))}
        </div>
        <h1>{winMessage ? <h1>YOU WIN!</h1> : null}</h1>
        <h1>{winMessage ? <h1>Time:{finishedTime}s</h1> : null}</h1>
        <h1>
          {winMessage ? (
            <h1>Clicks:{((25 / totalClicks) * 100).toFixed(2)}%</h1>
          ) : null}
        </h1>
      </div>
    </div>
  );
}
// buttonOnClick={shuffleButton}
export default App;
