import React from "react";
import Header from "../components/Encuesta/cabeza";
import BodyP2 from "../components/Encuesta/CuerposEncuesta/bodyP2";
import Footer from "../components/Encuesta/pie";

export default function Page2() {
  return (
    <div div className="contenedorPrincipal">
      <Header />
      <BodyP2 />
      <Footer />
    </div>
  );
}
