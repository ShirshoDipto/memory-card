export default function ScoreBoard({ score, bestScore }) {
  return(
    <div className="score-board-container">
      <div className="game-rule">Click on the card to gain points. If you click on a card for more than once before you click every card, game over.</div>
      <div className="score-board">
        <div className="current-score">Score: {score}</div>
        <div className="best-score">Best Score: {bestScore}</div>
      </div>
    </div>
  )
}