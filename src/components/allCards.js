import Card from "./card"

export default function AllCards({ cards }) {

  const allCards = cards.map((card, index) => {
    console.log(card.image)
    return (
      <Card key={card.id} card={card} index={index} />
    )
  })

  return(
    <div className="all-cards-container">
      {allCards}
    </div>
  )
}