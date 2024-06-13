import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [fruits, setFruits] = useState([]);
  const [totalprice, setTotalprice] = useState(0);
  function handleSubmit() {
    const obj = {
      name: name,
      price: price,
    };

    setFruits([...fruits, obj]);
    const p = parseInt(price);
    setTotalprice(totalprice + p);
    console.log(fruits);
  }
  return (
    <div className="App">
      <div className="expense-form">
        <div>
          <h3 style={{ marginRight: 10 }}> Name:</h3>
          <input
            type="text"
            style={{ padding: 10 }}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h3 style={{ marginRight: 17 }}>Price:</h3>
          <input
            type="text"
            style={{ padding: 10 }}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#1abb9c",
            border: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={handleSubmit}
        >
          ADD
        </button>
        <div style={{ flexDirection: "column", marginTop: 10 }}>
          <div>Total price: {totalprice}</div>
          {fruits.length > 0 && (
            <div style={{ maxWidth: "600px", margin: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  border: "1px solid black",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        border: "1px solid black",
                        padding: "8px",
                        textAlign: "left",
                      }}
                    >
                      Name
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        padding: "8px",
                        textAlign: "left",
                      }}
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fruits.map((fruit, index) => (
                    <tr key={index} style={{ border: "1px solid black" }}>
                      <td style={{ border: "1px solid black", padding: "8px" }}>
                        {fruit.name}
                      </td>
                      <td style={{ border: "1px solid black", padding: "8px" }}>
                        ₹{fruit.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
