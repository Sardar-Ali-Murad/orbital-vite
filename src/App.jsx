import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import NewIntroductions from "./pages/new-introductions";
import Introduction from "./pages/introduction";
import Login from "./pages/login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/new-introductions" element={<NewIntroductions />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
