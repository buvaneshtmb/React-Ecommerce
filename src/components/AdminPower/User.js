import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Admin from "../Admin";
import { Link } from "react-router-dom";

function User() {
  let [data, setData] = useState([]);
  let [search, setSearch] = useState("");

  let navigate = useNavigate();

  let handleDelete = async (id) => {
    try {
      let res = await axios.delete(
        `https://63cd1d210f1d5967f02a1431.mockapi.io/Users/${id}`
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
        "https://63cd1d210f1d5967f02a1431.mockapi.io/Users"
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
      <Admin />
      <div>
        <Link to="/adduser">
          <Button style={{ marginLeft: "120px", marginTop: "20px" }}>
            Add User
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
              <th>FullName</th>
              <th>UserName</th>
              <th>MobileNumber</th>
              <th>Gmail</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((e) => {
                return search.toLowerCase() === ""
                  ? e
                  : e.fullName.toLowerCase().includes(search);
              })
              .map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.fullName}</td>
                    <td>{e.userName}</td>
                    <td>{e.mobileNumber}</td>
                    <td>{e.gmail}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/edituser/${e.id}`)}
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
  );
}

export default User;
