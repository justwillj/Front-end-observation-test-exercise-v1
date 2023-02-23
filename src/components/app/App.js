import "./App.css";
import { useState, useEffect } from "react";
// import Button from "../button/Button.js";
import List from "../list/List";
import ListItem from "../listItem/ListItem.js"
import Button from "../button/Button";


function App() {
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState("");
  const [isActive, setIsActive] = useState(false);

  //Even clicks
  const [evenClicks, setEvenClicks] = useState(0);

  //Odd clicks
  const [oddClicks, setOddClicks] = useState(0);

  const [even, setEven] = useState([
    { id: 1, number: 2, isActive },
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
    { id: 1, number: 1, isActive },
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
    console.log(shuffle);
  };

  //Shuffles the buttons on page load
  useEffect(() => {
    shuffleButton(even, setEven);
    shuffleButton(odd, setOdd);
  }, []);

  const buttonCheck = (id, number, list, setList, click, setClicks) => {
    if (number == count + 1) {
      // setStyle("correctNumber");
      setCount(count + 1);
      setClicks(click + 1);
      setIsActive(true)
    } else {
      setClicks(click + 1);
      shuffleButton(list, setList);
    }
  };
  console.log(isActive)
      console.log(odd)
  console.log(even);
  return (
    <div>
      <div className="main-table">
        <div className="even-grid">
          <h1>Even clicks:{evenClicks}</h1>
          <List>
          {even.map(({ id, number}) => (
            <ListItem
              key={id}
              type="button"
              value={number}
              className={isActive ? "active" : "test"}
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
            ><Button></Button></ListItem>
          ))}
          </List>
        </div>
        <div className="odd-grid">
          <h1>Odd clicks:{oddClicks}</h1>
          <List>
          {odd.map(({ id, number}) => (
            <ListItem
              key={id}
              type="button"
              value={number}
              className={isActive ? "active" : "test"}
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
          </List>
        </div>
      </div>
    </div>
  );
}
// buttonOnClick={shuffleButton}
export default App;
