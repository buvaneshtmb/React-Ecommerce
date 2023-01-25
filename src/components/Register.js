import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./Dashboard";

function Register() {
  let [fullName, setFullName] = useState("");
  let [userName, setUserName] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  let [gmail, setGmail] = useState("");
  let [password, setPassword] = useState("");
  let [datas, setData] = useState([]);

  // let a = data.filter(person => person.gmail === gmail)

  let navigate = useNavigate();
  let handle = async () => {
    let a = datas.filter((person) => person.gmail === gmail);
    console.log(a);

    if (fullName.length < 3) {
      console.log(fullName.length);
      console.log("your fullName is too short");
      alert("your fullName is too short");
      return navigate("/register");
    } else if (userName.length < 4) {
      console.log(userName.length);
      console.log("your userName is too short");
      alert("your userName is too short");
      return navigate("/register");
    } else if (mobileNumber.length < 10) {
      console.log(mobileNumber.length);
      console.log("your mobileNumber is too short");
      alert("your mobileNumber is too short");
      return navigate("/register");
    } else if (gmail.length < 12) {
      console.log(gmail.length);
      console.log("your gmail is too short");
      alert("your gmail is too short");
      return navigate("/register");
    } else if (password.length < 8) {
      console.log(password.length);
      console.log("your password is too short");
      alert("your password is too short");
      return navigate("/register");
    } else if (a.length > 0) {
      alert("User Already exists");
      console.log(a.length);
      return navigate("/register");
    } else {
      let data = {
        fullName,
        userName,
        mobileNumber,
        gmail,
        password,
      };
      registerData(data);
    }
    console.log(fullName);
    console.log(userName);
    console.log(mobileNumber);
    console.log(gmail);
    console.log(password);
  };
  const registerData = async (data) => {
    try {
      let res = await axios.post(
        "https://63cd1d210f1d5967f02a1431.mockapi.io/Users",
        data
      );
      console.log(res.data);
      if (res.status === 201) {
        console.log(res.data);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  let getData = async () => {
    let thee = await axios.get(
      "https://63cd1d210f1d5967f02a1431.mockapi.io/Users"
    );
    if (thee.status === 200) {
      console.log(thee.data);
      setData(thee.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Dashboard />
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <h3 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Register
                </h3>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="FullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="UserName"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="phone me-3" size="lg" />
                  <MDBInput
                    label="Mobile Number"
                    type="number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    value={gmail}
                    onChange={(e) => setGmail(e.target.value)}
                    type="email"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </div>

                <MDBBtn className="mb-4" size="lg" onClick={() => handle()}>
                  Register
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default Register;
