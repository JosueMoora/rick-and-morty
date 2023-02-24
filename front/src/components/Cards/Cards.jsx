import Card from '../Card/Card';
import Styles from './Cards.module.css'
const Cards = (props) => {
   return (
      <div className={Styles.div}>
         {
         props.characters.map(({id, name, species, gender, image})=> {
            return <Card 
               key = {id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               id={id}
               onClose={() => props.onClose(id)} 
            
            />
         })
         
         }
      </div>)
}


export default Cards
