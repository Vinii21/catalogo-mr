import styled, { css } from "styled-components";
import theme from "../theme";
import iconoMadera from './../assets/006-madera.png';
import iconoMDF from './../assets/tabla-de-madera.png';
import iconoCamion from './../assets/005-camion-de-carga.png';

const ContenedorInfo = styled.div`
    width: 50%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-family: ${theme.Fuente1};
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    text-align: center;
    color: ${theme.colorClaro};

    img{
        margin-top: 20px;
        width: 53px;
    }

    ${props => props.colorUno && css`
        background-color: ${theme.colorUno};
        @media screen and (min-width: 800px){
            background-image: url(${theme.fondoClaro});
            box-shadow: 4px 7px 20px 1px #000;
        }
    `}

    ${props => props.colorDos && css`
        background-color: ${theme.colorDos};
        @media screen and (min-width: 800px){
            background-image: url(${theme.fondoClaro});
            box-shadow: 4px 7px 20px 1px #000;
        }
    `}

    ${props => props.cajaTransporte && css`
        flex-direction: row;
        width: 100%;
        height: 65px;
        background: ${theme.colorTres};
        text-align: left;
        padding: 20px;
        color: #000;
        img{
            margin-top: 0px;
            margin-left: 10px;
        }
        @media screen and (min-width: 800px){
            background-image: url(${theme.fondoClaro});
            box-shadow: 4px 7px 20px 1px #000;
        }
    `}

    @media screen and (min-width: 800px){
        width: 300px;
        height: 400px;
        margin: 20px 15px 0px 0px;
        font-size: 18px;
        padding: 20px;
        line-height: 20px;
        transition: .5s ease all;
        img{
            margin-top: 30px;
            width: 70px; 
        }
        &:hover{
            translate: 0px -10px;
        }

        ${props => props.cajaTransporte && css`
            width: 615px;
            height: 200px;
            margin: 0 auto;
            margin: 20px 15px 20px 0px;
            color: #fff;
        `
    }

    @media screen and (min-width: 1260px){
        ${props => props.cajaTransporte && css`
            width: 300px;
            height: 400px;
            margin: 0 auto;
            margin: 20px 15px 0px 0px;
            flex-direction: column;
        `
    }
`
 
const CajasInfo = () => {

    return (
        <>
            <ContenedorInfo colorUno>
                <p>Trabajamos maderas de Cenízaro o Cedro debidamente certificadas.</p>
                <img src={iconoMadera} alt="" />
            </ContenedorInfo>
            <ContenedorInfo colorDos>
                <p>MDF hidrófugo, libre de plagas, no se tuerce, acabado a su gusto, resistencia al agua</p>
                <img src={iconoMDF} alt="" />
            </ContenedorInfo>
            <ContenedorInfo cajaTransporte>
                <p>Transportamos a todo el país a muy bajo costo.</p>
                <img src={iconoCamion} alt="Icono del camion" />
            </ContenedorInfo>
        </>
    );
}
 
export default CajasInfo;