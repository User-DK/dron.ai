import React from "react";
import { useUser } from "../auth/UserContext";
import "./Home.css";

function Home() {
  const { user } = useUser();

  return (
    <div className="home">
      {user ? (
        <h1>Welcome Back, {user.displayName || user.email}</h1> // Fallback to email if displayName is not available
      ) : (
        <h1>Welcome to the App</h1>
      )}
    </div>
  );
}

export default Home;
