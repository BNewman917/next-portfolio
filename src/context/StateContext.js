import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [show, setShow] = useState(false);

    return (
        <Context.Provider value={{ show, setShow }}>
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
