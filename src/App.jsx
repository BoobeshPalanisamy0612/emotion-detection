import { useState } from "react";
import EmotionDetector from "./components/EmotionDetector";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  return user ? (
    <EmotionDetector user={user} />
  ) : (
    <Login onLogin={setUser} />
  );
}

export default App;