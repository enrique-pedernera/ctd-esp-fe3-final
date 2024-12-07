/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Card = ({ name, username, id }) => {
    const [fav, setFav] = useState(false)

    useEffect(() => {
        const favoritos = localStorage.getItem("favs")
        setFav(favoritos && favoritos.includes(id))
    }, [id])

    const addFav = (id, name, username) => {
        if (!localStorage.getItem('favs')) localStorage.setItem('favs', JSON.stringify([]))
        localStorage.setItem('favs', JSON.stringify([...JSON.parse(localStorage.getItem('favs')), { id, name, username }]))
        setFav(true)
    }
    const removeFav = (id) => {
        if (!localStorage.getItem('favs')) return
        const arrayDentistas = JSON.parse(localStorage.getItem('favs'))
        const newArrayDentistas = arrayDentistas.filter(dentista => dentista.id !== id)
        localStorage.setItem('favs', JSON.stringify(newArrayDentistas))
        setFav(false)
    }

    return (
        <div className="card">
            <h3>{name}</h3>
            <h4>{username}</h4>
            <Link to={`/dentist/${id}`}>Detalle</Link>
            {
                fav ? (
                    <button className="deleteButton" onClick={() => removeFav(id)}>Quitar de favoritos</button>
                ) : (<button className="favButton" onClick={() => addFav(id, name, username)}>Favorito</button>)
            }
        </div>
    );
};

export default Card;
