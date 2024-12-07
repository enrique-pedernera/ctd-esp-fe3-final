import Card from '../Components/Card'
import { useApi } from '../Context/ContextApi'
import { useTheme } from "../Context/ContextTheme";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
    const { odontologos } = useApi()
    const { theme } = useTheme();

    return (
        <main className={`${theme == 'dark' ? 'dark' : ""}`}>
            <h1>Home</h1>
            <div className='card-grid'>
                {odontologos.map(dentista => (
                    <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id} />
                ))}
            </div>
        </main>
    )
}

export default Home