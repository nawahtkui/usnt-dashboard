import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import TokenDocumentation from "./pages/TokenDocumentation";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/token-docs" element={<TokenDocumentation />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
