import React from "react";
import styled from "styled-components";
import theme from "../theme";
import {ReactComponent as logo } from './../assets/logo.svg'

const ContenedorCargando = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    overflow-y: hidden;
    z-index: 200;
    width: 100vw;
    height: 100vh;
    color: #fff;
    font-family: ${theme.Fuente1};

    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`

const SVG = styled(logo)`
    width: 200px;
    height: auto;
`

const Cargando = () => {
    return (
        <ContenedorCargando>
            <SVG />
            <span>Página en construcción</span>
        </ContenedorCargando>
    );
}
 
export default Cargando;