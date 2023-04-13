import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Level Up Lounge</h1>
    </div>
  );
}

export default App;
