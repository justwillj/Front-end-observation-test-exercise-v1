import "./App.css";
import { useState, useEffect } from "react";
import Button from "../button/Button.js";
import Modal from "../modal/Modal";

function App() {
  const [count, setCount] = useState(0);
  const evenArray = new Set();
  const evenArray2 = [];
  const oddArray = new Set();
  const oddArray2 = [];
  /**generates an array of even numbers consecutivly 1-25 */
  const makeAnEvenArray = () => {
    for (let i = 0; i < 25; i++) {
      if (evenArray.size < 13 && i % 2 == 0 && i != 0) {
        evenArray.add(i);
      }
    }
    let j = 0;
    evenArray.forEach((e) => {
      if (evenArray2.length < 12) {
        evenArray2.push({ id: j++, number: e });
      }
    });
    return evenArray2;
  };
  /**generates an array of odd numbers consecutivly 1-25 */
  const makeAnOddArray = () => {
    for (let i = 1; i < 26; i++) {
      if (oddArray.size < 13 && i % 2 != 0 && i != 0) {
        oddArray.add(i);
      }
    }
    let j = 0;
    oddArray.forEach((o) => {
      if (oddArray2.length < 13) {
        oddArray2.push({ id: j++, number: o });
      }
    });
    return oddArray2;
  };
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
    makeAnEvenArray();
    makeAnOddArray();
    gameTime == 0 &&
      setInterval(() => {
        setGameTime((time) => time + 0.5);
      }, 1000);
  }, []);

  const [even, setEven] = useState(evenArray2);
  const [odd, setOdd] = useState(oddArray2);

  const shuffleButton = (list, setList) => {
    const shuffle = list.sort(() => Math.random() - 0.5);
    setList((oldArray) => [...oldArray, shuffle]);
    setList(list.filter((num) => num != ""));
  };

  //Shuffles the buttons on page load
  useEffect(() => {
    makeAnEvenArray();
    makeAnOddArray();
    shuffleButton(even, setEven);
    shuffleButton(odd, setOdd);
  }, []);

  const buttonCheck = (number, list, setList, click, setClicks) => {
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
      {winMessage ? (
        <Modal finishedTime={finishedTime} totalClicks={totalClicks} />
      ) : null}
      <button className="new-game" onClick={newGame}>
        New game
      </button>
      <div className="main-table">
        <div className="even-grid">
          <h1>Even clicks: {evenClicks}</h1>
          {even.map(({ id, number }) => (
            <Button
              key={id}
              type="button"
              value={number}
              className={number <= count ? "active" : "test"}
              onClick={() =>
                buttonCheck(number, even, setEven, evenClicks, setEvenClicks)
              }
            />
          ))}
        </div>
        <div className="odd-grid">
          <h1>Odd clicks: {oddClicks}</h1>
          {odd.map(({ id, number }) => (
            <Button
              key={id}
              type="button"
              value={number}
              className={number <= count ? "active" : "test"}
              onClick={() =>
                buttonCheck(number, odd, setOdd, oddClicks, setOddClicks)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
