import React from "react";
import Header from "../components/Encuesta/cabeza";
import BodyP3 from "../components/Encuesta/CuerposEncuesta/bodyP3";
import Footer from "../components/Encuesta/pie";
import "../styles/pages.css"

export default function Page3() {
  return (
    <div className="contenedorPrincipal">
      <Header />
      <BodyP3 />
      <Footer />
    </div>
  );
}
