import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import NewIntroductions from "./pages/new-introductions";
import Login from "./pages/login";
import Introductions from "./pages/introductions";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/new-introductions" element={<NewIntroductions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/introductions" element={<Introductions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
