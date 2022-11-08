import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../theme";
import whatsapp from './../assets/004-whatsapp.png';
import cargando from './../assets/ezgif.com-gif-maker.gif';

const ContenedorImg = styled.div`
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    border-radius: 20px 0 20px 0;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    div.box{
        height: 85%;
    }
`

const ContenedorIcono = styled.div`
    width: 60px;
    height: 65px;
    background-color: ${theme.colorDosAlfa};
    align-self: flex-end;
    margin-right: 10px;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img{
        width: 70%;
        height: 70%;
    }
    &:hover{
        background-color: rgba(0,0,0, .8);
    }
`

const Foto = ({fondo, cambiarMostrarModal, mostrarModal, cambiarFondo}) => {

    const [verificar, cambiarVerificar] = useState(true);

    const establcerData = () => {
        cambiarMostrarModal(!mostrarModal);
        cambiarFondo(fondo);
    }

    useEffect(()=>{
        cambiarVerificar(false);
    }, [])


    setTimeout(()=>{
        cambiarVerificar(true);
    }, 900)
    
    return (
        <>
        {
            verificar ? 
                <ContenedorImg style={{backgroundImage: `url(${fondo})`}}>
                    <div className="box">
                        
                    </div>
                    <ContenedorIcono title="Pedir Info" onClick={()=>establcerData()}>
                        <img src={whatsapp} alt=""/>
                    </ContenedorIcono>
                </ContenedorImg>  
            :
                <ContenedorImg style={{backgroundImage: `url(${cargando})`, backgroundSize: "40%"}}>
                    <div className="box">
                        
                    </div>
                    <ContenedorIcono title="Pedir Info" onClick={()=>establcerData()}>
                        <img src={whatsapp} alt=""/>
                    </ContenedorIcono>
                </ContenedorImg>     
        }
        </>
    );
}
 
export default Foto;