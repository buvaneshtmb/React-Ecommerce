import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  let [userName, setUserName] = useState("");
  let navigate = useNavigate();

  let car = async () => {
    if (userName) {
      navigate("/cart");
    } else {
      alert("Please Login First");
    }
  };

  let fav = async () => {
    if (userName) {
      navigate("/favourite");
    } else {
      alert("Please Login First");
    }
  };

  let getSelect = async () => {
    let user = sessionStorage.getItem("userName");
    if (user) {
      setUserName(user);
      console.log(userName);
    }
  };

  useEffect(() => {
    getSelect();
  });

  let func = async () => {
    sessionStorage.clear();
    navigate("/collections");
    window.location.reload();
  };

  // setUserName(user)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h2 className="navbar-brand" style={{ margin: "10px 60px" }}>
            THEECODE
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/collections">
                <li style={{ margin: "10px 60px" }}>Home</li>
              </Link>

              <Link to="/collections">
                <li style={{ margin: "10px 60px" }}>{userName}</li>
              </Link>

              {userName === "" ? (
                <>
                  <Link to="/login">
                    <li style={{ margin: "10px 60px" }}>Login</li>
                  </Link>

                  <Link to="/register">
                    <li style={{ margin: "10px 60px" }}>Register</li>
                  </Link>
                </>
              ) : (
                <li
                  style={{ margin: "10px 60px", cursor: "pointer" }}
                  onClick={() => func()}
                >
                  Logout
                </li>
              )}

              <li
                style={{ margin: "10px 60px", cursor: "pointer" }}
                onClick={() => car()}
              >
                Cart
              </li>
              <li
                style={{ margin: "10px 60px", cursor: "pointer" }}
                onClick={() => fav()}
              >
                Favourite
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Dashboard;
