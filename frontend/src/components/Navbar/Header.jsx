import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import "../../App.css";
import LoginButton from "../../auth/LoginButton";
import { auth } from "../../auth/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../auth/UserContext";
import logo from "../../assets/logo.png";
// import { Avatar } from "@mui/core";

const Header = () => {
  const { user } = useUser();

  return (
    <div className="header">
      <img src={logo} alt="logo" height={"50px"} width={"50px"} />
      <header>
        <h1>DRON.AI</h1>
      </header>
      <nav className="nav">
        {user ? (
          <div className="user-tile">
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{ color: "#B197FC", marginRight: "10px" }}
            />
            <span>{user.displayName}</span>
          </div>
        ) : (
          <LoginButton />
        )}
      </nav>
    </div>
  );
};

export default Header;
