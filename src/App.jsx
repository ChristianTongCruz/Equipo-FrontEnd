import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Page1 from "./pages/page1";
import { ExportedCheck } from "./components/Encuesta/CuerposEncuesta/bodyP1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import ErrorPage from "./pages/error";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Pagina 1 */}
        {ExportedCheck() ? (
          <Route path="/page1" element={<Page1 />} />
        ) : (
          <Route path="/page1" element={<Loading />} />
        )}

        {/* Pagina 2 */}
        {ExportedCheck() ? (
          <Route path="/page2" element={<Page2 />} />
        ) : (
          <Route path="/page2" element={<Loading />} />
        )}

        {/* Pagina 3 */}
        {ExportedCheck() ? (
          <Route path="/page3" element={<Page3 />} />
        ) : (
          <Route path="/page3" element={<Loading />} />
        )}

        {/* Pagina 4 */}
        {ExportedCheck() ? (
          <Route path="/page4" element={<Page4 />} />
        ) : (
          <Route path="/page4" element={<Loading />} />
        )}

        {/* Pagina 5 */}
        {ExportedCheck() ? (
          <Route path="/page5" element={<Page5 />} />
        ) : (
          <Route path="/page5" element={<Loading />} />
        )}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
