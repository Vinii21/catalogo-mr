import React, { useState } from "react";

const ContextoCargando = React.createContext();

const ProveedorCargando = ({children}) => {

    const [cargando, cambiarCargando] = useState(true);

    return(
        <ContextoCargando.Provider value={{cargando, cambiarCargando}}>
            {children}
        </ContextoCargando.Provider>
    )
}

export {ContextoCargando, ProveedorCargando};