export async function getCards() {
  try {
    const response = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json"
    );
    const data = await response.json();
    // setCards(data.splice(0, 5));
    return data;
  } catch (error) {
    console.error("failed to get cards", error);
  }
}

export async function getImages() {
  try {
    const response = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json"
    );
    const data = await response.json();
    // setImages(data);
    return data;
  } catch (error) {
    console.error("failed to get images", error);
  }
}
