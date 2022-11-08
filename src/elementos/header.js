import React, { useState } from "react";
import styled from "styled-components";
import theme from "../theme";
import logo from "./../assets/logo.svg";
import iconoMueble from "./../assets/001-gabinete.png";
import MenuMobile from "../componentes/MenuMobile";
import { Link, useNavigate } from "react-router-dom";
import fondoHedaer from './../assets/triangles_pattern.png';

const Header = () => {
    const [num, cambiarNum] = useState(false);
    const navigate = useNavigate();

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
                    <nav className="menu">
                        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
                        <Link to="/catalogos">Catalogos</Link>
                    </nav>
                </ContendorIconoNav>
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
    background-image: url(${fondoHedaer});
    box-shadow: 0px 6px 30px #000;
    @media screen and (min-width: 800px){
        height: 130px;
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
        width: 130px; 
    }
`

const ContendorIconoNav = styled.div`
    width: 70px;
    height: 40px;
    margin-right: 30px;
    border-bottom: 1px solid #000;
    position: relative;

    img{
        width: 34px;
        height: 32px;
        position: absolute;
        top: 8px;
        right: 0px;
        left: auto;
    }

    .menu{
        display: none;
    }

    @media screen and (min-width: 800px){
        width: 25%;
        height: auto;
        margin-right: 30px;
        border-bottom: none;
        img{
            display: none;
        }
        .menu{
            display: flex;
            justify-content: space-around;
            align-items: center;
            a{
                color: #000;
                text-decoration: underline;
                font-family: ${theme.Fuente1};
                font-size: 18px;
                font-weight: 500;
            }
            a:hover{
                text-decoration: none;
                color: ${theme.colorUno};
            }
        }
    }

`
 
export default Header;