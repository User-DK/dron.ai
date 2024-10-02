import React from 'react';
import { auth, provider, signInWithPopup } from './firebase';

const LoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User signed in:', user);
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <button onClick={handleGoogleLogin} style={buttonStyle}>
      Login with Google
    </button>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  // backgroundColor: "#f29900",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  border: "1px ridge #ff6b6b",
};

export default LoginButton;
