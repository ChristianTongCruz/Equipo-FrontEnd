import React from "react";
import Header from "../components/Encuesta/cabeza";
import BodyP8 from "../components/Encuesta/CuerposEncuesta/bodyP8";
import Footer from "../components/Encuesta/pie";
import "../styles/pages.css"

export default function Page8() {
  return (
    <div className='contenedorPrincipal'>
      <Header />
      <BodyP8 />
      <Footer />
    </div>
  );
}