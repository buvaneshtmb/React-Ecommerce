import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
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

function EditUser() {
  let [fullName, setFullName] = useState("");
  let [userName, setUserName] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  let [gmail, setGmail] = useState("");
  let [password, setPassword] = useState("");

  let [data, setData] = useState([]);
  let navigate = useNavigate();

  let params = useParams();
  let handle = async () => {
    data = {
      fullName,
      userName,
      mobileNumber,
      gmail,
      password,
    };
    try {
      let res = await axios.put(
        `https://63cd1d210f1d5967f02a1431.mockapi.io/Users/${params.id}`,
        data
      );
      if (res.status === 200) {
        console.log(res.data);
        navigate("/admin");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  let getData = async () => {
    try {
      let res = await axios.get(
        `https://63cd1d210f1d5967f02a1431.mockapi.io/Users/${params.id}`
      );
      if (res.status === 200) {
        setFullName(res.data.fullName);
        setUserName(res.data.userName);
        setMobileNumber(res.data.mobileNumber);
        setGmail(res.data.gmail);
        setPassword(res.data.password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getData();
    }
  }, []);

  return (
    <>
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
                  Edit user
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
                  Edit User
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

export default EditUser;
