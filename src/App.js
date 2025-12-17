import { useState } from "react";
import "./App.css";
import ScoreCard from "./components/scorecard/ScoreCard";
import ScoreCardOperations from "./components/scoreCardOperations/ScoreCardOperations";
function App() {
  let [score, scoreFun] = useState(100);
  console.log("app component rendering", score);
  function incrementCounter(value) {
    console.log("I am incrementing");
    score = score + value;
    scoreFun(score);
    console.log("updated score", score);
  }
  return (
    <div>
      <ScoreCard score={score} />
      <ScoreCardOperations
        incrementScore={incrementCounter}
      />
    </div>
  );
}
export default App;
