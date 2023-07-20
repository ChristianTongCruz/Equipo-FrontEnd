import React from "react";
import Header from "../components/Encuesta/cabeza";
import BodyP5 from "../components/Encuesta/CuerposEncuesta/bodyP5";
import Footer from "../components/Encuesta/pie";
import "../styles/pages.css"

export default function Page5() {
  return (
    <div className='contenedorPrincipal'>
      <Header />
      <BodyP5 />
      <Footer />
    </div>
  );
}

 //JUM