import { useState } from "react";

export function Message({ name }) {
  const [msg, setMsg] = useState("hola");

  return (
    <>
      <h1 id="msg"> hola{msg}</h1>
      <button
        onDoubleClick={() => {
          setMsg(name);
        }}
      >
        Saludo
      </button>
    </>
  );
}

export function Boton({ name }) {
  return (
    <div id="section">
      <button
        id="bot"
        onClick={() => {
          console.log("hiciste click");
          alert(name + " hiciste click en mi!");
        }}
      >
        Send
      </button>
    </div>
  );
}

export function Card({ name, role }) {
  return (
    <>
      <div className="card ">
        <img src="logo192.png" alt="Avatar" width={"10%"}></img>
        <Counter />
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{role}</p>
          <Boton name="hola" />
        </div>
      </div>
    </>
  );
}

export function Counter() {
  const [counter, setCounter] = useState(10);

  return (
    <>
      <h1> Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 10);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 10);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCounter(10);
        }}
      >
        Reset
      </button>
    </>
  );
}
