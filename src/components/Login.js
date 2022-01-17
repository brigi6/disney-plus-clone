import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__contentbox">
        <div className="login__CTAone">
          <img src="/images/cta-logo-one.svg" alt="ctalogo" />
        </div>
        <button className="login__signup">GET ALL THERE</button>
      </div>
    </div>
  );
};

export default Login;
