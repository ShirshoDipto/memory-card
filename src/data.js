import { v4 as uuidv4 } from "uuid"
import greenCoconut from "./images/greenCoconut.jpg"
import banana from "./images/banana.jpg"
import blackberry from "./images/blackberry.jpg"
import sugarcane from "./images/sugarcane.jpg"
import litchi from "./images/litchi.jpg"
import mango from "./images/mango.jpg"
import palm from "./images/palm.jpg"
import jackfruit from "./images/jackfruit.jpg"
import apple from "./images/apple.jpg"
import guava from "./images/guava.jpg"
import watermelon from "./images/watermelon.jpg"
import nuts from "./images/nuts.jpg"

const data = {
  cards: [
    {
      id: uuidv4(),
      isClicked: false,
      name: "Litchi",
      image: litchi
    },
    {
      id: uuidv4(),
      isClicked: false,
      name: "Mango",
      image: mango
    },
    {
      id: uuidv4(),
      isClicked: false,
      name: "Apple",
      image: apple
    },
    {
      id: uuidv4(),
      isClicked: false,
      name: "Jackfruit",
      image: jackfruit
    },
    {
      id: uuidv4(),
      isClicked: false,
      name: "Sugarcane",
      image: sugarcane
    },
    {
      id: uuidv4(),
      isClicked: false,
      name: "Guava",
      image: guava
    },
    {
      id: uuidv4(),
      isClicked: false,
      name: "Watermelon",
      image: watermelon
    },
    {
      id: uuidv4(),
      isClicked: false,
      name: "Banana",
      image: banana
    },
    {
      id: uuidv4(),
      isClicked: false,
      name: "Nuts",
      image: nuts
    },
    {
      id: uuidv4(),
      isClicked: false,
      name: "Palm",
      image: palm
    },
    {
      id: uuidv4(),
      isClicked: false,
      name: "Green Coconut",
      image: greenCoconut
    },
    {
      id: uuidv4(),
      isClicked: false,
      name: "Blackberry",
      image: blackberry
    }
  ],
  score: 0,
  bestScore: 0,
} 

export default data