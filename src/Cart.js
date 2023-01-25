import React from "react";
import Dashboard from "./components/Dashboard";

function Cart() {
  let cart = JSON.parse(sessionStorage.getItem("cart"));
  // let a = parseInt(cart.sp);
  // let b = parseInt(cart.qty);
  // let c = a * b;
  // console.log(c);
  // console.log(a);

  let remove = async () => {
    sessionStorage.removeItem("cart");
  };

  return (
    <div>
      <Dashboard />
      {cart === null ? (
        "No Cart Added"
      ) : (
        <table className="center">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Selling price</th>
              <th>Quantity</th>
              <td>Total</td>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr className="data">
              <td id="pn">{cart?.pn}</td>
              <td>
                <img src={cart?.image} style={{ height: "75px" }} />
              </td>
              <td id="sp">{cart?.sp}</td>
              <td id="quantity">{cart?.qty}</td>
              <td id="total">
                {cart.sp}*{cart.qty}
              </td>
              <td>
                <button onClick={() => remove()}>Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
