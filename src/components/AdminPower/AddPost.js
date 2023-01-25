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
import { Button } from "react-bootstrap";
import Admin from "../Admin";
function AddPost() {
  let [name, setName] = useState("");
  let [image, setImage] = useState("");
  let [quantity, setQuantity] = useState("");
  let [originalPrice, setOriginalPrice] = useState("");
  let [sellingPrice, setSellingPrice] = useState("");
  let [description, setDescription] = useState("");
  // let [data,setData]=useState("[])

  let navigate = useNavigate();

  let hitting = async () => {
    let data = {
      name,
      image,
      quantity,
      originalPrice,
      sellingPrice,
      description,
    };
    try {
      let res = await axios.post(
        "https://63cd1d210f1d5967f02a1431.mockapi.io/Products",
        data
      );
      if (res.status === 201) {
        console.log(res.data);
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Admin />

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
                    label="Product Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Image"
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="phone me-3" size="lg" />
                  <MDBInput
                    label="Quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Original Price"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    type="number"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Selling Price"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(e.target.value)}
                    type="number"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="textarea"
                  />
                </div>

                <Button className="mb-4" size="lg" onClick={() => hitting()}>
                  Add Post
                </Button>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default AddPost;
