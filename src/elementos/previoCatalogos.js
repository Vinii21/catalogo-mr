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
                width: 140px;
                height: 30px;
                text-align: left;
                padding-left: 5px;
                background-color: ${theme.colorUno};
                border: 2px solid ${theme.colorClaro};
                border-radius: 6px;
                font-family: ${theme.Fuente2};
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
        margin-top: 60px;
        margin-bottom: 60px;
        width: 1000px;
        height: 400px;
        border: 5px solid #fff;
        border-radius: 10px 0px 10px 0px;
        div.filtro{
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
            border-radius: 10px 0px 10px 0px;
        }
    }
`

const Svg = styled(iconoCatalogos)`
    width: 30px;
    height: 30px;
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