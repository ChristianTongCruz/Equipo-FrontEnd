import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Encuesta from "./pages/encuesta";
import ErrorPage from "./pages/error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encuesta" element={<Encuesta />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
