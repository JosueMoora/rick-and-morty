import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import {useState, useEffect} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites.jsx'
const App = () => {

  const [characters, setCharacters] = useState([]);
  const location = useLocation()
  const navigate = useNavigate()
  const [access, setAccess] = useState(false);
  const username = "josuedavidmora99@gmail.com"
  const password = "1qazxsw2"

  const login = (userData) => {
    if (userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const onSearch = (character) => {
    const id = character
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
            for (let i = 0; i < characters.length; i++){
              if(characters[i].id === parseInt(id)){
                return window.alert(`${data.name} ya se encuentra en pantalla`);
              }
            }
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
    
        
    });

      
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== id)
    )
  }

  return (
    <div className='App'>
      {location.pathname === '/' ? <Form login={login} /> : <div className='navBar'> <Nav onSearch={onSearch}/> </div> }
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose = {onClose} />}></Route>
        <Route path='/about'element= {<About />}></Route>
        <Route path='/fav' element = {<Favorites />} ></Route>
        <Route path='/detail/:detailId' element = {<Detail />}></Route>
      </Routes>
        
    </div>
  )
}

export default App
