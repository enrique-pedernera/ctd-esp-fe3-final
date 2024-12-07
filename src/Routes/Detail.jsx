import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useTheme } from "../Context/ContextTheme";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
    const [dentist, setDentist] = useState({})
    const { id } = useParams();
    const { theme } = useTheme();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setDentist(data))
    }, [id])

    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    return (
        <div className={`${theme == 'dark' ? 'dark' : ""}`}>
            <h1>Detail Dentist {id} </h1>
            <div>
                <h3>{dentist.name}</h3>
                <h4>{dentist.username}</h4>
                <h4>{dentist.email}</h4>
                <h4>{dentist.phone}</h4>
                <h4>{dentist.website}</h4>
            </div>
        </div>
    )
}

export default Detail