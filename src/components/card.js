export default function Card({ card, index }) {
  return (
    <div index={index} className="card">
      <img className="card-picture" src={card.image} alt="A Card" />
      <div className="card-name">{card.name}</div>
    </div>
  )
}