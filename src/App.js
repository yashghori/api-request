import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const result = await axios.get(`https://fakestoreapi.com/products`);
      setData(result.data);
    }
    getData();
  });
  return (
    <>
      {data.length !== 0 ? (
        <div className="App">
          <h1 style={{ color: "royalblue" }}>Let's Shope</h1>
          <div className="box">
            {data.map((item, index) => {
              return (
                <div key={index} className="item">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;
