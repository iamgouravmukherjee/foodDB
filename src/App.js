import CardList from "./components/CardList";
import GetData from "./hooks/GetData";

function App() {
  const [cards, images] = GetData();
  // console.log("cards", cards);
  return (
    <div className="App">
      <CardList cards={cards} images={images} />
    </div>
  );
}

export default App;
