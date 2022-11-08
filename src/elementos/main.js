import styled, { css } from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    position: relative;
    top: 90px;

    ${props => props.categorias && css`
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2{
            margin-top: 33px;
            margin-bottom: 33px;
            color: #fff;
        }
        @media screen and (min-width: 800px){
            h2{
                margin-top: 33px;
                margin-bottom: 33px;
                font-size: 40px;
                color: #fff;
            } 
        }
    `}

    @media screen and (min-width: 800px){
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        top: 130px;
    }
`
const ContenedorCatalogos = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    a{
        color: #000;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
`

export {Main, ContenedorCatalogos};