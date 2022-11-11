import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../theme";

const ContenedorCategoria = styled.div`
display: flex;
        justify-content: center;
        align-items: center;
        width: 99vw;
        height: 100px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        overflow: hidden;
    h3{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        padding: 5px;
        background-color: rgba(0,0,0,.7);
        backdrop-filter: saturate(100%);
        height: 100%;
        color: #fff;
        font-family: ${theme.Fuente1};
        font-weight: 400;
        font-size: 50px;
    }

    @media screen and (min-width: 600px){
        height: 130px;
    }

    @media screen and (min-width: 800px){
        width: 300px;
        height: 120px;
        border-radius: 25px;
        margin: 10px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position:center;
        h3{
            font-size: 24px;
            background-color: rgba(0,0,0,.5);
            backdrop-filter: saturate(100%);
        }
    }
`

const Categorias = ({title, fondo, index}) => {
    return (
            <Link to={`/catalogo/${title}/${index}`}>
                <ContenedorCategoria className="caja" style={{backgroundImage: `url(${fondo})` }}>
                    <h3>{title}</h3>
                </ContenedorCategoria>
            </Link>
    );
}
 
export default Categorias;