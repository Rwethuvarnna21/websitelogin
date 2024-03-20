// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login"; // Update the path as per your file structure and extension
import Home from "./pages/home/Home"; // Update the path to match your file structure
import Profile from "./pages/profile/Profile"; // Update the path to match your file structure
import Register from "./pages/register/Register"; // Update the path to match your file structure

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
