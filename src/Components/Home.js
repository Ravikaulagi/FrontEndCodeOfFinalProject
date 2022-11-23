import React, { useState, useEffect } from "react";
import { Link, Route,BrowserRouter as Routes } from "react-router-dom";
import Educattion from "./Education";
import UserService from "../Services/user-service";

const Home = () => {
  const [content, setContent] = useState("");
  

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
    
        <div id="six">
        <div id="five">
      <Link to={"/Education"} >
        <img src="https://www.educationafter12th.com/wp-content/uploads/2017/04/indian-institute-science-iisc-bangalore.jpg" width="200px" height="200px" ></img><br/>
         <div id="eight">  Education</div>
       </Link>
       </div>
       <div id="seven">
       <Link to={"/Hospitals"}>
       <img src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg"width="200px" height="200px"></img><br/>
       <div id="eight">  Hospitals</div> 
       </Link>
       </div>
       </div>
      </header>
    </div>
  );
};

export default Home;