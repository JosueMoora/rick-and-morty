import { useSelector, useDispatch } from "react-redux";
import StyleCard from './Favorites.module.css'
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/action";
const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch()
  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value))
  }
  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }
  
  return (
    <div className={StyleCard.cont}>
      <div>
        <select onChange={handlerOrder}>
          <option value="order" disabled="disable">Order by</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
        <option value="filter" disabled="disable">Filter by</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      {
      myFavorites.map((character) => {
        return (
          <div className={StyleCard.card}>
            <div className={StyleCard.card2}>
              <Link to={`/detail/${character.id}`}>
                <h2>{character.name}</h2>
              </Link>
              <img src={character.image} alt={character.name} />
              <div className={StyleCard.info}>
                <h2 className={StyleCard.species}> Species: {character.species}</h2>
                <h2 className={StyleCard.gender}>Gender: {character.gender}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
