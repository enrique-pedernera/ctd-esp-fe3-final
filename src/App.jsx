import { Route, Routes } from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Layout from "./Components/Layout/Layout";
function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dentist/:id" element={<Detail />} />
                <Route path="/favs" element={<Favs />} />
            </Routes>
        </Layout>
    );
}

export default App;
