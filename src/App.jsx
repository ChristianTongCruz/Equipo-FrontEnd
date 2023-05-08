import "./App.css";
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import ErrorPage from "./pages/error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
