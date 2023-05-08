import React from "react";
import Header from "../components/Encuesta/cabeza";
import BodyP1 from "../components/Encuesta/CuerposEncuesta/bodyP1";
import Footer from "../components/Encuesta/pie";

export default function Page1() {
  return (
    <div className="contenedorPrincipal">
      <Header />
      <BodyP1 />
      <Footer />
    </div>
  );
}
