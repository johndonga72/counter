import "./ScoreCardOperations.css";
function ScoreCardOperations(props) {
  console.log("score card operations component", props);
  const { incrementScore } = props;
  //onClick={incrementCounter}
  //   function incremenByOne() {
  //     incrementScore(1);
  //   }
  function checking() { }
  //functions expressions
  //   const checkingFunExpress = function(){
  //     console.log('asfasfdsaf')
  //   }
  //   checkingFunExpress()
  //   const checkingFunExpress = () => {
  //     console.log("asfasfdsaf");
  //   };
  return (
    <div className="flex-center">
      <button className="scoreButton" onClick={() => incrementScore(1)}>
        +1
      </button>

      <button
        className="scoreButton"
        onClick={function () {
          incrementScore(5);
        }}
      >
        +5
      </button>

      <button
        className="scoreButton"
        onClick={function () {
          incrementScore(-5);
        }}
      >
        -5
      </button>
    </div>
  );
}

export default ScoreCardOperations;
