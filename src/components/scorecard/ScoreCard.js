import "./ScoreCard.css";
function ScoreCard(props) {
  console.log("score card component");
  const { score } = props;
  return (
    <div className="scoreboard-container flex-center">
      <h1 className="score">{score}</h1>
    </div>
  );
}
export default ScoreCard;
