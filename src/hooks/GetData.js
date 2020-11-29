import { useState, useEffect } from "react";
import { getCards, getImages } from "../utils";

export default function GetData() {
  const [cards, setCards] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getData() {
      const [cards, images] = await Promise.all([getCards(), getImages()]);
      setCards(cards.splice(0, 20));
      setImages(images);
    }
    getData();
    // getCards();
    // getimages();
  }, []);

  return [cards, images];
}
