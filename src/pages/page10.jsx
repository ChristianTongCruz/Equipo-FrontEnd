import React from "react";
import Header from "../components/Encuesta/cabeza";
import BodyP10 from "../components/Encuesta/CuerposEncuesta/bodyP10";
import Footer from "../components/Encuesta/pie";
import "../styles/pages.css"

export default function Page10() {
  return (
    <div className='contenedorPrincipal'>
      <Header />
      <BodyP10 />
      <Footer />
    </div>
  );
}