import "./App.css";
import { useState } from "react";

function App() {
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
  return (
    <div>
      <div className="main-table">
        <div className="even-grid">
          {even.map(({ id, number }) => (
            <h2 key={id}>{number}</h2>
          ))}
        </div>

        <div className="odd-grid">
          {odd.map(({ id, number }) => (
            <h2 key={id}>{number}</h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
