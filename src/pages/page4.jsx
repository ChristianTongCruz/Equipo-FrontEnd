import React from "react";
import Header from "../components/Encuesta/cabeza";
import BodyP4 from "../components/Encuesta/CuerposEncuesta/bodyP4";
import Footer from "../components/Encuesta/pie";
import "../styles/pages.css"

export default function Page3() {
  return (
    <div className="contenedorPrincipal">
      <Header />
      <BodyP4 />
      <Footer />
    </div>
  );
}
