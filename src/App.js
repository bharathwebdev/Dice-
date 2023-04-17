import { useState } from "react";
import "./App.css";
import React from "react";


const  diceobj = {
  1 :"../public/assets/dice-six-faces-five.png"
}

function App() {
  const [num, Setnum] = useState(0);
  const [p1, setp1] = useState([]);
  const [p2, setp2] = useState([]);

  const [active, setActive] = useState(true);

  const handleclick = () => {
    const a = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    if (a == 1 || a == 6) {
      Setnum(0);
      setActive((pre) => !pre);
    }
    // console.log(num);
    if (active) {
      setp1((pre) => [...pre, a]);
    } else {
      setp2((pre) => [...pre, a]);
    }

    // if (a === 1 || a === 6) {
   
    // }else{
    //   console.log(a);
      Setnum(a);
    // }
  };

  return (
    <div>
      <div className="Root_1">
        Dice
        <div
          className="players"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div>
            <div className="Player1">Player One{active && "🟢"}</div>
            <div style={{ display: "flex", gap: "5px" ,}}>
              {p1.map((data) => {
                return <p> {data} </p>;
              })}
            </div>
            <p>Player One got : {active && num}</p>
          </div>

          <div>
            <div className="Player2">Player Two{!active && "🟢"}</div>
            <div style={{ display: "flex", gap: "10px" }}>
              {p2.map((data) => {
                return <p> {data} </p>;
              })}
            </div>
            <p> Player Two got : {!active && num}</p>
          </div>
        </div>
      </div>
      <img style={{
        width:'100px'
      }} src={`assets/dice-six-faces-${num}.png`}/>
      
      <button className="Roll_btn" onClick={handleclick}>
        ROLL
      </button>
    </div>
  );
}

export default App;
