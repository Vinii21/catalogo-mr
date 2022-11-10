import styled, { css } from "styled-components";
import fondo from './../assets/interlaced.png';

const Main = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    position: relative;
    top: 90px;
    background-image: url(${fondo});

    ${props => props.categorias && css`
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2{
            margin-top: 33px;
            margin-bottom: 33px;
            color: #000;
        }
        @media screen and (min-width: 800px){
            h2{
                margin-top: 33px;
                margin-bottom: 33px;
                font-size: 40px;
                color: #000;
            } 
        }
    `}

    @media screen and (min-width: 800px){
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        top: 80px;
    }
`
const ContenedorCatalogos = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 30px;
    a{
        color: #000;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
`

export {Main, ContenedorCatalogos};