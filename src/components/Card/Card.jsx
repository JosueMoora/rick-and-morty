import StyleCard from "./Card.module.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFavorite, deleteFavorite } from "../../redux/action";

const Card = (props) => {
  const dispacth = useDispatch()
  const myFavorites =useSelector(state => state.myFavorites)
  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    // isFav && setIsFav(false) && dispacth(deleteFavorite(props.id))
    // !isFav && setIsFav(true) && dispacth(addFavorite(props))
    if(isFav){
      setIsFav(false)
      dispacth(deleteFavorite(props.id))
    } else {
      setIsFav(true)
      dispacth(addFavorite(props))
    }

  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <div className={StyleCard.card}>
      <div className={StyleCard.card2}>
        <div className={StyleCard.contBtn}>
        {isFav ? (<button onClick={handleFavorite} className={StyleCard.boton2}>❤️</button>) : (<button onClick={handleFavorite} className={StyleCard.boton2}>🤍</button>)}
        <button className={StyleCard.boton} onClick={props.onClose}>❌</button>
        </div>
        <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        <img src={props.image} alt={props.name} />
        <div className={StyleCard.info}>
          <h2 className={StyleCard.species}> Species: {props.species}</h2>
          <h2 className={StyleCard.gender}>Gender: {props.gender}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card
