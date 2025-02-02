import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import NewIntroductions from "./pages/new-introductions";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/new-introductions" element={<NewIntroductions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
