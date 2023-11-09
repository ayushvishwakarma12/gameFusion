import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/screen/Home";
import FindGame from "../components/screen/FindGame";
import GameDetails from "../components/screen/GameDetails";

import Navbar from "../components/screen/Navbar";
import Footer from "../components/Common/Footer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<FindGame />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
