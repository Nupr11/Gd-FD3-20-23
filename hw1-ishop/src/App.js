function App({ myShop, myProducts }) {
  return (
    <div className="App">
      <h2 className="title">{myShop}</h2>

      {myProducts.map((item, index) => (
        <div className="container">
          <figure className="item">
            <img
              className="item-img"
              src={item.image}
              title={item.name}
              alt={item.name}
              width="150px"
              height="100px"
            ></img>
            <figcaption className="item-sign">{item.name}</figcaption>
          </figure>

          <ul key={index} className="item-list">
            {Object.entries(item).map(
              ([key, value]) =>
                key !== "name" &&
                key !== "image" && (
                  <li key={key}>
                    {key} : {value}
                  </li>
                )
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;

// имена классов в каком регистре?
