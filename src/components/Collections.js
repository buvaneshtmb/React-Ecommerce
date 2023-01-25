import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "./Dashboard";

function Collections() {
  let navigate = useNavigate();
  let [data, setData] = useState([]);
  let [search, setSearch] = useState("");
  console.log(search);

  // let navigate = useNavigate()

  let pullData = async () => {
    try {
      let result = await axios.get(
        "https://63cd1d210f1d5967f02a1431.mockapi.io/Products"
      );
      if (result.status === 200) {
        setData(result.data);
        console.log(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pullData();
  }, []);

  return (
    <>
      <Dashboard />
      <div className="container">
        <form
          className="d-flex"
          role="search"
          style={{ marginLeft: "800px", marginTop: "10px" }}
        >
          <input
            className="form-control me-2"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
        <div className="row">
          {data
            .filter((e) => {
              return search.toLowerCase() === ""
                ? e
                : e.name.toLowerCase().includes(search);
            })
            .map((e) => {
              return (
                <div
                  className="col-md-4 col-lg-3"
                  key={e.id}
                  onClick={() => navigate(`/productdetails/${e.id}`)}
                >
                  <div className="card my-3">
                    <img
                      src={e.image}
                      className="card-image-top buvi"
                      alt="Categories"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-primary">{e.name}</h5>
                      <p className="card-text">
                        <span className="float-start old_price">
                          <s>Rs.{e.originalPrice}</s>
                        </span>
                        <span className="float-end new_price">
                          Rs.{e.sellingPrice}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Collections;
