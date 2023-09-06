import React from "react";
import ReactDOM from "react-dom/client";
import { Message, Boton, Card } from "./Components";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Message name="Damian" />
    {/* <Boton name="save" info="guardaste un dato" />{" "}
    <Boton name="send" info="acabas de hacer un click" /> */}
    <Card name="Damian Valle" role="Ingeniero IIOT" />
    <Card name="Peregina Lares" role="Ingeniero Industrial" />
    <Card name="Paulita Valle" role="Estudiante" />
    <Card name="Paulita Valle" role="Estudiante" />
    <Boton />
  </>
);
