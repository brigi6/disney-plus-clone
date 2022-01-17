import React from "react";
import "./Header.css";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOut,
} from "../features/user/userSlice";

import { useEffect } from "react";

const HeaderLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })

      .onAuthStateChanged((user) => {
        setUser(user);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    userName ? navigate("/home", { replace: "true" }) : console.log("no user");
  }, [userName]);

  console.log(userName);

  return (
    <div className="header">
      <img
        src="/images/logo.svg"
        alt="logo"
        style={{ width: "80px", objectFit: "contain" }}
      />
      <div className="header__navmenu"></div>

      <button className="loginbutton " onClick={handleAuth}>
        LOGIN
      </button>
    </div>
  );
};
export default HeaderLogin;
