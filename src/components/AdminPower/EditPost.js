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

function EditPost() {
  let [name, setName] = useState("");
  let [image, setImage] = useState("");
  let [quantity, setQuantity] = useState("");
  let [originalPrice, setOriginalPrice] = useState("");
  let [sellingPrice, setSellingPrice] = useState("");
  let [description, setDescription] = useState("");

  let [data, setData] = useState([]);
  let navigate = useNavigate();

  let params = useParams();
  let handle = async () => {
    data = {
      name,
      image,
      quantity,
      originalPrice,
      sellingPrice,
      description,
    };
    try {
      let res = await axios.put(
        `https://63cd1d210f1d5967f02a1431.mockapi.io/Products/${params.id}`,
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
        `https://63cd1d210f1d5967f02a1431.mockapi.io/Products/${params.id}`
      );
      if (res.status === 200) {
        setName(res.data.name);
        setImage(res.data.image);
        setQuantity(res.data.quantity);
        setOriginalPrice(res.data.originalPrice);
        setSellingPrice(res.data.sellingPrice);
        setDescription(res.data.description);
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
                  Edit Post
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
                    label="Product Image"
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="phone me-3" size="lg" />
                  <MDBInput
                    label="Original Price"
                    type="number"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
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
                    type="text"
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

export default EditPost;
