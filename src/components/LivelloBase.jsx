import { useState, useEffect } from "react";
import SinglePoke from "./SinglePoke";

export default function LivelloBase() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
        console.log("dati ricevuti", data);
        setData(data);
      })
      .catch((err) => {
        console.log("errore:", err.message);
        setError(err.message);
      });
  }, []);

  if (error) return <p>errore:{error}</p>;
  if (!data) return <p>Caricamento...</p>;

  return (
    <SinglePoke
      title={data.species.name}
      image={data.sprites.back_default}
      location={data.location_area_encounters}
      moves={data.moves}
    />
  );
}
