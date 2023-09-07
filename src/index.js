import React from "react";
import ReactDOM from "react-dom/client";
import { Message, Boton, Card, Counter } from "./Components";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <h1 style={{ textAlign: "center", color: "blue", fontFamily: "Arial" }}>
      Produccion Planta ACME
    </h1>
    <div className="flex-container">
      <Card name="Linea 1" role="Area Moldeo" />
      <Card name="Linea Cocedores" role="Horno" />
      <Card name="Linea Empaque" role="Area Embarques" />
    </div>
  </>
);
