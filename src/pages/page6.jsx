import React from "react";
import Header from "../components/Encuesta/cabeza";
import BodyP6 from "../components/Encuesta/CuerposEncuesta/bodyP6";
import Footer from "../components/Encuesta/pie";
import "../styles/pages.css"

export default function Page6() {
  return (
    <div className='contenedorPrincipal'>
      <Header />
      <BodyP6 />
      <Footer />
    </div>
  );
}