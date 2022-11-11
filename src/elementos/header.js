import React, {useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../theme";
import logo from "./../assets/logo.svg";
import iconoMueble from "./../assets/001-gabinete.png";
import MenuMobile from "../componentes/MenuMobile";
import { Link, useParams, useNavigate } from "react-router-dom";

const Header = () => {
    const [activarCatalogos, cambiarActivarCatalogos] = useState(false);
    const [num, cambiarNum] = useState(false);
    const {catalogos} = useParams();
    const navigate = useNavigate();

    console.log(catalogos)

    useEffect(()=>{
        if(catalogos === 'catalogos'){
            cambiarActivarCatalogos(true)
        } else{
            cambiarActivarCatalogos(false)
        }/* else if (parametro.sobrenosotros === 'sobre-nosotros'){
            console.log('existo')
        } */
    },[])

    const comprobarSeleccionadoPositivo = () => {
        if(catalogos) {
            if(activarCatalogos === true){
                cambiarActivarCatalogos(false);
                console.log('sirvo false')
            }
        }
    }

    const comprobarSeleccionadoNegativo = () => {
        if(catalogos){
            if(activarCatalogos === false){
                cambiarActivarCatalogos(true);
                console.log('sirvo true')
            }
        }
    }

    const handlePosition = (x) => {
        if(x === false){
            left()
        }
        if(x === true){
            right()
        }
    }

    const left = () => {
        const mueble = document.getElementById('iconMueble');
        mueble.style.right = "auto";
        mueble.style.left = "0px";
        cambiarNum(true)
    }
    const right = () => {
        const mueble = document.getElementById('iconMueble');
        mueble.style.left = "auto";
        mueble.style.right = "0px";
        cambiarNum(false)
    }
    const volverHome = () => {
        navigate('/');
    }

    return (
        <>
            <ContenedorHeader>
                <ContenedorLogo onClick={volverHome}/>
                <ContendorIconoNav>
                    <img onClick={()=>handlePosition(num)} id="iconMueble" src={iconoMueble} alt="Icono menu"/>
                </ContendorIconoNav>
                <ContenedorMenu>
                    <Link to="/MR/sobre-nosotros" onMouseOver={()=>comprobarSeleccionadoPositivo()} onMouseOut={()=>comprobarSeleccionadoNegativo()}>Sobre Nosotros</Link>
                    {
                        activarCatalogos ?
                         <Link to="/catalogos" className="activate">Catalogos</Link>
                        :
                         <Link to="/catalogos">Catalogos</Link>
                    }
                </ContenedorMenu>
            </ContenedorHeader>
            <MenuMobile estadoMueble={num}/>
        </>
    );
}

const ContenedorHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 90px;
    background: url(${theme.fondoTelaOs});
    box-shadow: 0px -1px 10px #000;
    padding: 5px;
    @media screen and (min-width: 800px){
        height: 80px;
        justify-content: flex-start;
        padding: 0px;
    }
`

const ContenedorLogo = styled.div`
    width: 90px;
    height: 100%;
    margin-left: 30px;
    cursor: pointer;

    background-image: url("${logo}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
    @media screen and (min-width: 800px){
        width: 110px;
        height: 80%;
    }
`

const ContendorIconoNav = styled.div`
    width: 60px;
    height: 42px;
    margin-right: 30px;
    border-bottom: 1px solid #000;
    position: relative;

    img{
        width: 34px;
        height: 32px;
        position: absolute;
        top: 10px;
        right: 0px;
        left: auto;
    }
    @media screen and (min-width: 800px){
        display: none;
    }
`

const ContenedorMenu = styled.div`
    display: none;
    @media screen and (min-width: 800px){
        display: flex;
        justify-content: center;
        height: 100%;
        width: 40%;
        a{  
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 60px 10px 0px 10px;
            color: #fff;
            font-family: ${theme.Fuente1};
            text-transform: uppercase;
            font-weight: 400;
            text-decoration: none;
            height: 100%;
            border-bottom: 4px solid transparent;
            padding: 0px;
            padding-left: 10px;
            padding-right: 10px;
        }
        a:hover{
            border-bottom: 3px solid ${theme.colorUno};
            background-color: ${theme.colorDosAlfa};
        }
        .activate{
            border-bottom: 3px solid ${theme.colorUno};
            background-color: ${theme.colorDosAlfa};
        }
    }
`
 
export default Header;