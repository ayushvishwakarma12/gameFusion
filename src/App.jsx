import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import Navbar from "./screen/Navbar";
import Footer from "./screen/Footer";
import FindGame from "./screen/FindGame";
import GameDetails from "./screen/GameDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/game" Component={FindGame} />
        <Route path="/game/:id" Component={GameDetails} />
      </Routes>
    </>
  );
}

export default App;
