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
            text-transform: uppercase;
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

    @media screen and (min-width: 600px){
        h2{
                font-size: 40px;
            } 
    }
`
const ContenedorCatalogos = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px 0px 30px 0px;
    a{
        color: #000;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }

    @media screen and (min-width: 800px){
        width: 60%;
    }
`

export {Main, ContenedorCatalogos};