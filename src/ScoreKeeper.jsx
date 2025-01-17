import { useState } from "react";
export default function ScoreKeeper({ numPlayers , target  }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
//   const incrementScore = (idx) => {
//     setScores((prevScores) => {
//       const copy = [...prevScores];
//       copy[idx]+=1;
//       return copy;
//     });
//   };
const hasWinner = scores.some((score) => score >= target);
const incrementScore = (idx) => {
    setScores((prevScores) => {
      return prevScores.map((score, i)=>{
        if(i===idx) return score+1;
        return score
      })
    });
  };
  const reset = ()=>{
    setScores(new Array(numPlayers).fill(0))
  }
  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              Player{idx + 1}: {score}
              <button 
                onClick={() => incrementScore(idx)} 
                disabled={hasWinner} // Disable all buttons if any player meets or exceeds target
              >
                +1
              </button>
              {score>=target && "Winner"}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>reset</button>
    </div>
  );
}
