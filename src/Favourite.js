import React from "react";
import Dashboard from "./components/Dashboard";

function Favourite() {
  let fav = JSON.parse(sessionStorage.getItem("fav"));
  console.log("fav:::", fav);

  return (
    <div>
      <Dashboard />
      {fav === null ? (
        "No Favourites Added"
      ) : (
        <table className="center">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Selling price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {}
            <tr className="data">
              <td id="pn">{fav?.pn}</td>
              <td>
                <img src={fav?.image} style={{ height: "75px" }} />
              </td>
              <td id="sp">{fav?.sp}</td>
              <td id="quantity">{fav?.qty}</td>
              <td>
                <button onclick="remove()">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Favourite;
