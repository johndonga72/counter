import { useState } from "react";
import "./App.css";
import ScoreCard from "./components/scorecard/ScoreCard";
import ScoreCardOperations from "./components/scoreCardOperations/ScoreCardOperations";
function App() {
  let [score, scoreFun] = useState(100);
  console.log("app component rendering", score);

  // function incrementCounter() {
  //   console.log("I am incrementing");
  //   score = score + 1;
  //   scoreFun(score);
  //   console.log("updated score", score);
  // }

  function incrementCounter(value) {
    console.log("I am incrementing");
    score = score + value;
    scoreFun(score);
    console.log("updated score", score);
  }

  // function incrementBy5Counter() {
  //   console.log("I am incrementing");
  //   score = score + 5;
  //   scoreFun(score);
  //   console.log("updated score", score);
  // }

  // function normalTestFun() {
  //   console.log("hi hi hi");
  // }

  //useCall, useMemo, React.memo
  return (
    <div>
      <ScoreCard score={score} />
      <ScoreCardOperations
        incrementScore={incrementCounter}
      // incrementScoreBy5={incrementBy5Counter}
      />
    </div>
  );
}

export default App;
