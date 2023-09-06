export function Message({ name }) {
  return <h1 id="msg">Hola {name}</h1>;
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
      <div className="card">
        <img src="logo192.png" alt="Avatar" width={"30%"}></img>
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
