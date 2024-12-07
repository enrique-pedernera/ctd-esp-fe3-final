import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { useTheme } from "../Context/ContextTheme";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const { theme } = useTheme();
    const [dentist, setDentists] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('favs')) return
        const arrayDentistas = localStorage.getItem('favs')
        setDentists(JSON.parse(arrayDentistas))
    }, [])



    return (
        <div className={`${theme == 'dark' ? 'dark' : ""}`}>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                {dentist.map(dentista => (
                    <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}/>
                ))}
            </div>
            </div>
    );
};

export default Favs;
