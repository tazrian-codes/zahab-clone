import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Account.css";

const Account = () => {
  return (
    <div className="account-page">
      <div className="login">
        <h4>Login</h4>
        <p>
          Username or email address <span className="star">*</span>
        </p>
        <p>
          Password <span className="star">*</span>
        </p>
        <div className="login-div">
          <div className="login-text">
            <p>Remember me</p>
            <p className="lost-pass">Lost your password?</p>
          </div>
          <button className="login-btn">Log in</button>
        </div>
      </div>

      <div className="register">
        <h4>Register</h4>
        <p>
          Email address <span className="star">*</span>
        </p>
        <p>
          A link to set a new password will be sent to your email address. Your
          personal data will be used to support your experience throughout this
          website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
};

export default Account;
