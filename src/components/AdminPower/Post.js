import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Admin from "../Admin";
import { Link } from "react-router-dom";

function Post() {
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  let [search, setSearch] = useState("");
  console.log(search);

  let handleDelete = async (id) => {
    try {
      let res = await axios.delete(
        `https://63cd1d210f1d5967f02a1431.mockapi.io/Products/${id}`
      );
      if (res.status === 200) {
        console.log(res.data);
        pullData();
        // window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <>
        <Admin />
        <div>
          <Link to="/addpost">
            <Button style={{ marginLeft: "120px", marginTop: "20px" }}>
              Add Post
            </Button>
          </Link>
          <div style={{ marginLeft: "800px", marginRight: "80px" }}>
            <input
              className="form-control me-2"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <Table className="center">
            <thead>
              <tr>
                <th>ID</th>
                <th>ProductName</th>
                <th>Product Image</th>
                <th>Quantity</th>
                <th>Original Price</th>
                <th>Selling Price</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((e) => {
                  return search.toLowerCase() === ""
                    ? e
                    : e.name.toLowerCase().includes(search);
                })
                .map((e) => {
                  return (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>
                        <img src={e.image} style={{ height: "75px" }}></img>
                      </td>
                      <td>{e.quantity}</td>
                      <td>{e.originalPrice}</td>
                      <td>{e.sellingPrice}</td>
                      <td>{e.description}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => navigate(`/editpost/${e.id}`)}
                        >
                          <i className="fa-solid fa-user-pen"></i>Edit
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(e.id)}
                        >
                          <i className="fa-solid fa-trash"></i>Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </>
    </>
  );
}

export default Post;
