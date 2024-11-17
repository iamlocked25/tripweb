import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
