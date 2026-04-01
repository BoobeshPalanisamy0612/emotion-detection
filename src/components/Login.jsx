import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem("user", name);
      onLogin(name);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2>👋 Welcome</h2>
        <input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleLogin}>Start</button>
      </div>
    </div>
  );
};

export default Login;