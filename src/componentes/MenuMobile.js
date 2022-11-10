import React, { useEffect } from "react";
import styled from "styled-components";
import theme from './../theme';
import logo from './../assets/logo.svg'
import iconoFacebook from './../assets/003-facebook.png';
import iconoWhatsapp from './../assets/004-whatsapp.png';
import { Link } from "react-router-dom";

const ContenedorMenu = styled.div`
    width: 170px;
    height: 210px;
    border-radius: 0 0 0 20px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colorClaro};
    position: fixed;
    top: 90px;
    right: -300px;
    z-index: 101;
    overflow: hidden;
    transition: .7s all ease;
    .enlaces {
        width: 100%;
        height: 80%;
        padding-top: 40px;
    }
    nav{
        text-align: center;
        a{
            display: block;
            margin-bottom: 10px;
            color: #000;
            text-decoration: none;
            font-size: 20px;
        }
    }
    .redes{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        .icon{
            width: 33px;
            height: 33px;
            margin-right: 9px;
        }
    }
    .img{
        width: 100%;
        position: absolute;
        bottom: -85px;
        left: 8px;
    }
`

const MenuMobile = ({estadoMueble}) => {

    useEffect(()=>{
        if(estadoMueble===true){
            const menu = document.getElementById('contenedorMenu');
            menu.style.right = "0px";
        }
        if(estadoMueble===false){
            const menu = document.getElementById('contenedorMenu');
            menu.style.right = "-300px";
        }
    },[estadoMueble])

    return (
        <ContenedorMenu id="contenedorMenu">
            <div className="enlaces">
                <nav>
                    <Link to={"/sobre-nosotros"}>Sobre Nosotros</Link>
                    <Link to={"/catalogos"} href="#">Cátalogos</Link>
                </nav>
                <span className="redes">
                    <a href="https://www.facebook.com/MramirezSarchi/"><img className="icon" src={iconoFacebook} alt="Facebook Muebles Ramirez"/></a>
                    <a href="https://wa.me/+50687255719"><img className="icon" src={iconoWhatsapp} alt="WhatsApp Muebles Ramirez"/></a>
                </span>
            </div>
            <img className="img" src={logo} alt="logo Muebles Ramirez"/>
        </ContenedorMenu>
    );
}
 
export default MenuMobile;