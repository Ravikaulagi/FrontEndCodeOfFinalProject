import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./Services/auth-service";

import Login from "./Components/Login";
//import Register from "./components/Register";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import BoardUser from "./Components/BoardUser";
import AdminBoard from "./Components/AdminBoard";
import Advertise from "./Components/Advertise";
import AboutUs from  "./Components/AboutUs";
import Protected from "./Components/Protected";
import Education from "./Components/Education";
import Hospitals from "./Components/Hospitals";
import Update from "./Components/Update";
const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand navbar-red bg-primary">
        <Link to={"/"} className="navbar-brand">
          <div className="one">
          <img src="https://static4.depositphotos.com/1000765/378/i/950/depositphotos_3789625-stock-photo-3d-small-telephone.jpg" width="40px" height="40px" ></img>
          </div>
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
         
          {showAdminBoard && (
            <>
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
             </li>
             <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Update
              </Link>
              </li>

            </>
          )} 

          {currentUser && (
           <>
            <li className="nav-item">
              <Link to={"/Advertise"} className="nav-link">
                Advertise
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/AboutUs"} className="nav-link">
                AboutUs
              </Link>
              
            </li>
            </>
          )}
          </div>
          
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
               
                Login
              </Link>
            </li>

          </div>
        )}
      </nav>
      <div className="container mt-3">
        <Routes>
        <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Protected Component={Home}/> }/>
          <Route path="/home" element={<Protected Component={Home}/>} />
          <Route path="/profile" element={<Protected Component={Profile} />}/>
          <Route path="/user" element={<Protected Component={BoardUser} />}/>
          <Route path="/admin" element={<Protected Component={AdminBoard} />}/>
          <Route path="/Advertise" element={<Protected Component={Advertise} />}/>
          <Route path="/AboutUs" element={<Protected Component={AboutUs}/>}/>
          <Route path="/Education" element={<Education/>} />
          <Route path="/Hospitals" element={<Hospitals/>}/>
          <Route path="/Update" element={<Update/>}/>

        </Routes>
      </div>
    </div>
  );
};

export default App;