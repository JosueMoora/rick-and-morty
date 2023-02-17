import { useState } from "react";
import Style from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [character, setCharacter] = useState("");
  const handleChange = (event) => {
    setCharacter(event.target.value);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setCharacter("")
  }

  return (
    <div className={Style.form__group}>
      {/* <div className={Style.fila}> */}
        {/* <form onSubmit={handleSubmit}> */}
        <input placeholder="Search" className={Style["form__field"]} type="text" value={character} onChange={handleChange}/>
          <button className={`${Style.learnmore}`} onClick={() => {
            props.onSearch(character);
            setCharacter("")
            }}>
               <span className={`${Style.arrow}`}></span>
          </button>
          {/* </form> */}
      {/* </div> */}
    </div>
  );
};

export default SearchBar;
