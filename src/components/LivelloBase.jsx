import { useState } from "react";

export default function LivelloBase() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => {
        if (response.ok) {
          console.log("chiamata ricevuta");
          return response.json();
        } else {
          throw new Error("chiamata non ricevuta");
        }
      })
      .then((data) => {
        console.log("dati ricevuti");
        setData(data);
      })
      .catch((err) => {
        console.log("errore:", err.message);
        setError(err.message);
      });
  };
}
