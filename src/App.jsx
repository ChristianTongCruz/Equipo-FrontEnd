import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { ExportedCheck1 } from "./components/Encuesta/CuerposEncuesta/bodyP1";
import { ExportedCheck2 } from "./components/Encuesta/CuerposEncuesta/bodyP2";
import { ExportedCheck3 } from "./components/Encuesta/CuerposEncuesta/bodyP3";
import { ExportedCheck4 } from "./components/Encuesta/CuerposEncuesta/bodyP4";
import { ExportedCheck5 } from "./components/Encuesta/CuerposEncuesta/bodyP5";

import Home from "./pages/home";
import Page1 from "./pages/page1";
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
        {ExportedCheck1() ? (
          <Route path="/page1" element={<Page1 />} />
        ) : (
          <Route path="/page1" element={<Loading />} />
        )}

        {/* Pagina 2 */}
        {ExportedCheck2() ? (
          <Route path="/page2" element={<Page2 />} />
        ) : (
          <Route path="/page2" element={<Loading />} />
        )}

        {/* Pagina 3 */}
        {ExportedCheck3() ? (
          <Route path="/page3" element={<Page3 />} />
        ) : (
          <Route path="/page3" element={<Loading />} />
        )}

        {/* Pagina 4 */}
        {ExportedCheck4() ? (
          <Route path="/page4" element={<Page4 />} />
        ) : (
          <Route path="/page4" element={<Loading />} />
        )}

        {/* Pagina 5 */}
        {ExportedCheck5() ? (
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
