import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Admin() {
  let navigate = useNavigate();

  let adminName = sessionStorage.getItem("adminName");

  let func = async () => {
    sessionStorage.clear();
    navigate("/collections");
    window.location.reload();
  };

  return (
    <>
      <div className="navbar">
        <h5 className="home">Admin Page</h5>
        <ul className="ul">
          <Link to="/post">
            <li>Post</li>
          </Link>
          <Link to="/user">
            <li>User</li>
          </Link>
          <Link to="/notification">
            <li>Notification</li>
          </Link>
          <li id="/logout" onClick={() => func()}>
            Logout
          </li>
          <li>{adminName}</li>
        </ul>
      </div>
      <div>
        {/* <img
          style={{ height: "500px", width: "700px" }}
          src={
            "https://res.cloudinary.com/dqkxxkdnq/image/upload/v1674469951/vadivelu-comedy_byjvpu.gif"
          }
        ></img> */}
      </div>
    </>
  );
}

export default Admin;
