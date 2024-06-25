import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import "./index.css";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
