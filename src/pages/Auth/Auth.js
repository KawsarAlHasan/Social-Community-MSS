import React from "react";
import "./Auth.css";
import Logo from "../../assets/images/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>KMN Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <Signup></Signup>
    </div>
  );
  function Signup() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Sign up</h3>
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="User Name"
              className="infoInput"
              name="username"
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              className="infoInput"
              placeholder="Password"
            />
            <input
              className="infoInput"
              type="text"
              name="confirmpass"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <span>Already have an account. Login!</span>
          </div>
          <button className="button info-button" type="submit">
            Signup
          </button>
        </form>
      </div>
    );
  }
};

export default Auth;
