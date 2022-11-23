import React from "react";
import AuthService from "../Services/auth-service";


const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div id="four">
      .
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
    
      <p>
        <strong>Id:</strong> {currentUser.id}
        </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
     

    </div>
    </div>
  );
};

export default Profile;