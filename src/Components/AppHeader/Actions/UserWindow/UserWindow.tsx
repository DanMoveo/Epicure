// Actions.tsx
import React, { useRef, useState } from "react";
import "./UserWindow.scss";
import * as Images from "../../../../Services/Images";
import axios from "axios";

interface Props {
  closeWindow: () => void;
}

const UserWindow: React.FC<Props> = ({ closeWindow }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email: email,
        password: password,
      });

      if (response.data) {
        console.log("Login successful");
      } else {
        console.log("Login failed. Check your email and password.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users/register",
        {
          email: email,
          password: password,
        }
      );

      if (response.data) {
        // If the response contains data, it means registration was successful
        console.log("Registration successful");
      } else {
        // If the response does not contain data, it means registration failed
        console.log("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div ref={containerRef} className="userWindowContainer">
      <img src={Images.x} alt="x" className="icon" onClick={closeWindow} />
      <div className="userWindowTextContainer">
        <span className="signInTitle">SIGN IN</span>
        <span className="continerLabel">
          To continue the order, please sign in
        </span>
        <input
          type="text"
          id="textInput"
          className="detailsInput"
          placeholder="Email adress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="passwordInput"
          className="detailsInput"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" onClick={handleLogin}>
          LOGIN
        </button>
        <button className="forgetButton">Forget password?</button>
        <div className="orContainer">
          <img src={Images.line} alt="line" className="line" />
          <span className="orText"> or</span>
          <img src={Images.line} alt="line" className="line" />
        </div>
        <button className="signUpButton" onClick={handleRegister}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default UserWindow;
