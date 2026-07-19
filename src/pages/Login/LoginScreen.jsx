import { useState } from "react";
import "./LoginScreen.css";

export default function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-page">

      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>

      <div className="login-card">

        <div className="ai-logo">
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="core"></div>
        </div>

        <h1>NEXUS AI</h1>

        <p>Neural Intelligence Operating System</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          ACCESS SYSTEM
        </button>

      </div>

    </div>
  );
}