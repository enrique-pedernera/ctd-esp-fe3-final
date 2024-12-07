/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return state === "light" ? "dark" : "light";
        default:
            return state;
    }
};
const initialTheme = "light";

export const ThemeProvider = ({ children }) => {
    const [theme, dispatch] = useReducer(themeReducer, initialTheme);

    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("envuelve la el contexto");
    }
    return context;
};