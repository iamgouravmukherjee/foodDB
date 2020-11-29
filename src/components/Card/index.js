import "./index.css";

export default function Card({
  card: { name, style, ounces, abv, ibu, id } = {},
  index,
  imageLinks,
}) {
  const imageLink = imageLinks?.[index]?.image;

  return (
    <div className="item">
      <div className="left-set">
        <img src={imageLink} alt="" />
      </div>
      <div className="right-set">
        <div className="name">{name}</div>
        <div className="subname">{style}</div>
        <div className="description">
          <p>Description: </p>
          <ul>
            <li className="price">id: {id}</li>
            <li className="price">ounces: {ounces}</li>
            <li className="price">abv: {abv}</li>
            <li className="price">ibu: {ibu || "NA"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
