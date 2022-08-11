import { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
    const [changeNav, setChangeNav] =useState(true);

    return ( 
        <Context.Provider value={{changeNav, setChangeNav}}>
            {children}
        </Context.Provider>
     );
}

export default ContextProvider;