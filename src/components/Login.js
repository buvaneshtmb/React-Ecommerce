import React, { useEffect } from "react";
import { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function Login() {
  let navigate = useNavigate();
  // ------------User-----------------
  let [data, setData] = useState([]);
  console.log(data);
  let [email, setEmail] = useState("");
  let [pwd, setPassword] = useState("");

  let myFuction = async () => {
    let one = data.filter((th) => th.gmail === email);
    console.log(one);
    wan(one);
  };

  const wan = async (one) => {
    console.log(one);
    if (one.length === 0) {
      console.log(one.length);
      alert("Gmail was not found");
      return navigate("/login");
    } else if (one[0].password === pwd) {
      console.log("password gud");
      sessionStorage.setItem("userName", one[0].userName);
      sessionStorage.setItem("fullName", one[0].fullName);
      return navigate("/collections");
    } else {
      console.log("password wrong");
      alert("Wrong Password");
      return navigate("/login");
    }
  };

  // -------------Admin--------------------------------
  let [admail, setAdMail] = useState("");
  let [adpwd, setAdPwd] = useState("");

  let admin = async () => {
    let adData = data.filter((th) => th.gmail === admail);
    console.log(adData);
    waste(adData);
  };
  let waste = async (adData) => {
    if (adData.length === 0) {
      console.log(adData.length);
      alert("Gmail was not found");
      return navigate("/login");
    } else if (adData[0].password === adpwd) {
      console.log("password gud");
      sessionStorage.setItem("adminName", adData[0].userName);
      sessionStorage.setItem("fullName", adData[0].fullName);
      return navigate("/admin");
    } else {
      console.log("Admin Password Wrong");
      alert("Admin Password Wrong");
      return navigate("/login");
    }
  };

  let getData = async () => {
    let arr = await axios.get(
      "https://63cd1d210f1d5967f02a1431.mockapi.io/Users"
    );
    if (arr.status === 200) {
      console.log(arr.data);
      setData(arr.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Dashboard />
      <div style={{ display: "flex" }}>
        <MDBCol md="5" style={{ marginLeft: "50px" }}>
          <MDBCard>
            <MDBRow className="g-0">
              {/* <MDBCol md='6'>
                        <MDBCardImage src='https://res.cloudinary.com/dqkxxkdnq/image/upload/v1674469951/vadivelu-comedy_byjvpu.gif' alt="login form" className='rounded-start w-100' />
                    </MDBCol> */}
              {/* ----------------------------------------------------User Login------------------------------------------- */}
              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column">
                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    User Login
                  </h5>

                  <label>Email adress</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    id="email"
                    value={email}
                    type="email"
                    size="lg"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Password</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    id="password"
                    value={pwd}
                    type="password"
                    size="lg"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* <div onClick={() => myFuction()}>hlo</div> */}
                  <Button type="submit" onClick={() => myFuction()}>
                    Login
                  </Button>

                  <a className="small text-muted" href="#!">
                    Forgot password?
                  </a>
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <Link to="/register" style={{ color: "#393f81" }}>
                      Register here
                    </Link>
                  </p>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
        <div className="full">
          <h2 className="header">Admin Login</h2>
          <div id="form">
            <div className="lab">
              <div className="lab1">
                <label htmlFor="id">Email</label>
                <input
                  type="text"
                  id="id"
                  value={admail}
                  onChange={(e) => setAdMail(e.target.value)}
                  placeholder="Enter the Email"
                  autoFocus
                />
              </div>
              <div className="lab2">
                <label htmlFor="adpwd">Password</label>
                <input
                  type="password"
                  id="adpwd"
                  value={adpwd}
                  onChange={(e) => setAdPwd(e.target.value)}
                  placeholder="Enter the Password"
                />
              </div>
            </div>
            <div className="log">
              <input
                type="submit"
                value="Login"
                onClick={() => {
                  admin();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
