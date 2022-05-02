import { useState, useEffect } from "react";
import Vizallas from "./Vizallas";

function Vizallasok() {
  const [vizallasok, setVizallasok] = useState([]);
  const [varos, setVaros] = useState("");

  const getVizallas = () => {
    fetch(`http://localhost:8000/vizallas/${varos}`)
      .then((res) => res.json())
      .then((adat) => setVizallasok(adat))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 bg-sky-100 justify-items-stretch py-4">
        <div className="justify-self-center">
          <input
            type="text"
            onChange={(e) => setVaros(e.target.value)}
            placeholder="Adjon meg egy várost"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="justify-self-center">
          <button onClick={() => getVizallas()} className="btn btn-primary">
            Lekérdezés
          </button>
        </div>

        
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-sky-100 justify-items-stretch py-4">{vizallasok.map((elem, index) => (
          <Vizallas key={index} elem={elem} />
        ))}</div>
    </div>
  );
}

export default Vizallasok;
