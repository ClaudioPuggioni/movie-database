import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserInterface from "./components/UserInterface.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div id="container">
    <Router>
      <Routes>
        <Route path="*" element={<UserInterface />} />
      </Routes>
    </Router>
  </div>
);
