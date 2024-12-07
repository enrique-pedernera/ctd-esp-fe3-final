import { Link } from "react-router-dom"
import { useTheme } from "../Context/ContextTheme"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const {dispatch, theme} = useTheme();

    const toggleTheme = () => {
        dispatch({type: "TOGGLE_THEME"})
    }
    return (
        <nav>
            <Link to={"/"}>HOME</Link>
            <Link to={"/favs"}>FAVS</Link>
            <Link to={"/contact"}>CONTACTO</Link>
            <button onClick={toggleTheme}>Cambiar a {theme === "dark" ? "Light" : "Dark"}</button>
        </nav>
    )
}

export default Navbar