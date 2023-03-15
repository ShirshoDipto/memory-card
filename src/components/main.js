import "../App.css"
import { useState, useEffect } from "react"
import data from "../data"
import ScoreBoard from "./scoreBoard"
import AllCards from "./allCards"

export default function Main() {

  function shuffleCards(cardList) {
    return cardList.sort(() => Math.random() - 0.5)
  }

  const [cards, setCards] = useState(shuffleCards(data.cards))
  const [score, setScore] = useState(data.score)
  const [bestScore, setBestScore] = useState(data.bestScore)

  
  useEffect(() => {

    function resetAllCards() {
      const newCardList = []
      cards.forEach(card => {
        card.isClicked = false
        newCardList.push(card)
      })
      return newCardList
    }

    function updateCards(index) {
      const updatedCards = cards.map((card, i) => {
        const newCardInfo = {
          id: card.id,
          name: card.name,
          isClicked: card.isClicked,
          image: card.image
        }
        if (i === index) {
          newCardInfo.isClicked = true
          return newCardInfo
        } else {
          return newCardInfo
        }
      })
      return updatedCards
    }

    function handleClicks(e) {
      const index = parseInt(this.getAttribute("index"))
      if (!cards[index].isClicked) {
        const shuffledCards = shuffleCards(updateCards(index))
        setCards(shuffledCards)
        setScore(score + 1)
        if (score === bestScore) {
          setBestScore(score + 1)
        }
      } else {
        const shuffledCards = shuffleCards(resetAllCards())
        setCards(shuffledCards)
        setScore(0)
      }
    }

    const allCards = document.querySelectorAll(".card")
    allCards.forEach(card => {
      card.addEventListener("click", handleClicks)
    })

    return () => {
      allCards.forEach(card => {
        card.removeEventListener("click", handleClicks)
      })
    }
  }, [cards, score, bestScore])

  return (
    <div className="main-container">
      <ScoreBoard 
        score={score} 
        bestScore={bestScore}
      />
      <AllCards
        cards={cards}
      />
    </div>
  )
}