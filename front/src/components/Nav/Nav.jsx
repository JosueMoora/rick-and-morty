import SearchBar from "../SearchBar/SearchBar.jsx";
import Style from "./Nav.module.css"
import { NavLink } from "react-router-dom";
function NavBar (props) {
    return (

        <div className={Style.div}>
            <div className={Style.nav}>
                <NavLink to="/">Sign Out</NavLink>
                <NavLink to="/fav">Fav</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/home">Home</NavLink>
                <SearchBar  onSearch={props.onSearch} />
            </div>
        </div>
    )
}

export default NavBar