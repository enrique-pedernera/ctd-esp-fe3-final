/* eslint-disable react/prop-types */
import Navbar from "../Navbar"
import Footer from "../Footer"
import { useTheme } from "../../Context/ContextTheme";
const Layout = ({ children }) => {
    const { theme } = useTheme();

    return (
        <div className={`App ${theme == 'dark' ? 'dark' : ""}`} >
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout