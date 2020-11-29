import "./index.css";
// const { default: Card } = require("../Card");
import { default as Card } from "../Card";

function CardList({ cards = [], images = [] }) {
  return (
    <div className="grid">
      {cards.map((card, index) => (
        <Card key={card.id} card={card} index={index % 5} imageLinks={images} />
      ))}
    </div>
  );
}

export default CardList;
