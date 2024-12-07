/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect, useContext } from "react";

const CallApiContext = createContext();

const ApiContext = ({ children }) => {
    const [odontologos, setOdontologos] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOdontologos(data))
            .catch((err) => console.log("Hubo un error al llamar la api " + err))
    }, [])

    return (
        <CallApiContext.Provider value={{ odontologos }}>
            {children}
        </CallApiContext.Provider>
    )
}

export default ApiContext;

export const useApi = () => {
    const context = useContext(CallApiContext);
    if (context === undefined) {
        throw new Error("envuelve la el contexto");
    }
    return context;
};