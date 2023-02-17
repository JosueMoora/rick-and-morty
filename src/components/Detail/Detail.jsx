import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({})
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            setCharacter(char);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((err) => {
          window.alert("No hay personajes con ese ID");
        });
      return setCharacter({});
    }, [detailId]);

      return (
        <div className={style.detail}>
            <div className={style.info}>
              <h1>NOMBRE: {character.name}</h1>
              <h1>ESTADO: {character?.status}</h1>
              <h1>ESPECIE: {character?.species}</h1>
              <h1>GENERO: {character?.gender}</h1>
              <h1>ORIGEN: {character?.origin?.name}</h1>
            </div>
            <div className={style?.imagen}><img src={character.image} alt={character.name} /></div>
        </div>
      )

}

export default Detail