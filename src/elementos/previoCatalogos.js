import styled from "styled-components";
import theme from "../theme";
import {ReactComponent as iconoCatalogos} from "./../assets/iconoCatalogo.svg"
import cama from './../assets/cama1.jpg'
import { Link } from "react-router-dom";

const ContenedorCarrusel = styled.div`
    width: 100%;
    height: 250px;
    background-image: url("${cama}");
    background-repeat: no-repeat;
    background-position-y: 0px;
    background-size: cover;
    div.filtro{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.2);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn{
        display: flex;
        justify-content: center;
        position: relative;
        cursor: pointer;
        button{
                width: 200px;
                height: 50px;
                text-align: left;
                padding-left: 10px;
                background-color: ${theme.colorUno};
                border: 2px solid ${theme.colorClaro};
                border-radius: 6px;
                font-family: ${theme.Fuente2};
                font-size: 18px;
                font-weight: 600;
                cursor: pointer;
                transition: 1s ease-out all;
                &:hover{
                    background-color: ${theme.colorDos};
                }
            }
        a{
            color: ${theme.colorClaro};
            text-decoration: none;
        }
    }

    @media screen and (min-width: 800px){
        width: 100%;
        height: 400px;
        margin-top: 50px;
        div.filtro{
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        }
    }
`

const Svg = styled(iconoCatalogos)`
    width: 45px;
    height: 50px;
    position: absolute;
    right: 0;
    background-color: ${theme.colorClaro};
    padding: 4px;
    border: 2px solid ${theme.colorClaro};
    border-radius: 0 6px 6px 0;
`

const PrevioCatalogos = () => {
    return (
        <ContenedorCarrusel>
            <div className="filtro">
                <div className="btn">
                    <button type="button" className="btnCatalogos"><Link to={"/catalogos"}>Ver Cátalogos</Link></button>
                    <Svg/>
                </div>
            </div>
        </ContenedorCarrusel>
    );
}
 
export default PrevioCatalogos;