import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function ProductDetails() {
  let params = useParams();
  // let use = params.id
  let navigate = useNavigate();
  console.log(params.id);

  let [name, setName] = useState();
  let [image, setImage] = useState();
  let [quantity, setQuantity] = useState();
  let [originalPrice, setOriginalPrice] = useState();
  let [sellingPrice, setSellingPrice] = useState();
  let [description, setDescription] = useState();
  let [qty, setQty] = useState(0);

  let minus = async () => {
    if (qty > 0) {
      qty--;
      setQty(qty);
    }
  };

  let plus = async () => {
    if (qty < 10) {
      qty++;
      setQty(qty);
    }
  };

  let btnCart = async () => {
    if (qty > 0) {
      // sessionStorage.setItem("pn", name);
      // sessionStorage.setItem("qty", qty);
      // sessionStorage.setItem("sp", sellingPrice);
      // sessionStorage.setItem("image", image);
      let cart = {
        pn: name,
        qty: qty,
        sp: sellingPrice,
        image: image,
      };
      sessionStorage.setItem("cart", JSON.stringify(cart));

      alert(`${name} addded in Cart`);
    } else {
      alert("Please add Quantity");
    }
  };

  let btnFav = async () => {
    if (qty > 0) {
      // sessionStorage.setItem("pn", name)
      // sessionStorage.setItem("qty", qty)
      // sessionStorage.setItem("sp", sellingPrice)
      // sessionStorage.setItem("image", image)
      let fav = {
        pn: name,
        qty: qty,
        image: image,
        sp: sellingPrice,
      };
      sessionStorage.setItem("fav", JSON.stringify(fav));
      alert(`${name} addded in Favourite`);
    } else {
      alert("Please add Quantity");
    }
  };

  let getDeta = async () => {
    let res = await axios.get(
      `https://63cd1d210f1d5967f02a1431.mockapi.io/Products/${params.id}`
    );
    if (res.status === 200) {
      setName(res.data.name);
      setImage(res.data.image);
      setQuantity(res.data.quantity);
      setOriginalPrice(res.data.originalPrice);
      setSellingPrice(res.data.sellingPrice);
      setDescription(res.data.description);
      console.log(res.data);
    }
  };

  useEffect(() => {
    getDeta();
  }, []);

  return (
    <>
      <Dashboard />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="mb-3">{name} Details</h4>
            <hr style={{ borderColor: "#b8bfc2" }} />
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li
                  className="breadcrumb-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/collections")}
                >
                  Home
                </li>
                {/* <li className="breadcrumb-item"><a href="{% url 'Collections' products.category.name %}">Collections</a></li> */}
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{ cursor: "pointer" }}
                >
                  {name}
                </li>
              </ol>
            </nav>
          </div>

          <div className="col-4 my-3 pic-box">
            {/* {% if products.trending %} */}
            <div className="hot">Hot</div>
            {/* {% endif %} */}
            <img
              src={image}
              className="card-image-top buvi"
              alt="{{products}}"
            />
          </div>
          <div className="col-8 my-3">
            <h5 className="text-success">{name}</h5>
            <p>{description}</p>
            <h6 className="my-2 text-danger">
              Current Price : Rs. <s>{originalPrice}</s>
            </h6>
            <h5 className="my-2 text-primary">
              Offer Price : Rs.{sellingPrice}
            </h5>
            <div className="my-3">
              {/* {% if products.quantity > 0 %} */}
              <div>
                <div className="input-group" style={{ width: "150px" }}>
                  <button
                    className="input-group-text bg-success text-light"
                    id="btnMinus"
                    onClick={() => minus()}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  &nbsp;&nbsp;{qty}&nbsp;&nbsp;
                  <button
                    className="input-group-text bg-success text-light"
                    id="btnPlus"
                    onClick={() => plus()}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>

              {quantity > 0 ? (
                <div>
                  <button
                    className="btn btn-primary"
                    id="btnCart"
                    onClick={() => btnCart()}
                    style={{ margin: "20px" }}
                  >
                    <i className="fa fa-shopping-cart"></i>Add to Cart
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    id="btnFav"
                    onClick={() => btnFav()}
                    style={{ margin: "20px" }}
                  >
                    <i className="fa fa-heart"></i>Add to Favourite
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-secondary"
                  style={{ margin: "20px" }}
                >
                  <i className="fa fa-minus"></i>Out of Stock
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
