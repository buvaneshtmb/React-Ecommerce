import "./App.css";
import Dashboard from "./components/Dashboard";
import Collections from "./components/Collections";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./Cart";
import Favourite from "./Favourite";
import Admin from "./components/Admin";
import AddUser from "./components/AdminPower/AddUser";
import EditPost from "./components/AdminPower/EditPost";
import EditUser from "./components/AdminPower/EditUser";
import Notification from "./components/AdminPower/Notification";
import AddPost from "./components/AdminPower/AddPost";
import User from "./components/AdminPower/User";
import Post from "./components/AdminPower/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/collections" element={<Collections />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            {/* <Route path='*' element={<Navigate to={'/collections'} />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </div>
        <div>
          {/* <Admin /> */}
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/post" element={<Post />} />
            <Route path="/editpost/:id" element={<EditPost />} />
            <Route path="/user" element={<User />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/edituser/:id" element={<EditUser />} />
            <Route path="/editpost" element={<EditPost />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
