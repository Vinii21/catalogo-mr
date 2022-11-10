import React from "react";
import styled from "styled-components";
import whatsapp from './../assets/004-whatsapp.png';

const ContenedorImg = styled.div`
    width: 250px;
    height: 250px;
    max-width: 300px;
    max-height: 300px;
    border-radius: 20px 20px 20px 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all .5s ease;
    div.box{
        height: 85%;
    }
    
    @media screen and (min-width: 800px){
            &:hover{
            translate: 0px -10px;
        }
    }
`

const ContenedorIcono = styled.div`
    width: 60px;
    height: 65px;
    background-color: transparent;
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
        opacity: .8;
    }
    @media screen and (min-width: 800px){
        opacity: .5;
    }

`

const Foto = ({fondo, cambiarMostrarModal, mostrarModal, cambiarFondo}) => {

    const establcerData = () => {
        cambiarMostrarModal(!mostrarModal);
        cambiarFondo(fondo);
    }
    
    return (
        <ContenedorImg style={{backgroundImage: `url(${fondo})`}}>
            <div className="box"></div>
            <ContenedorIcono title="Pedir Info" onClick={()=>establcerData()}>
                {

                }
                <img src={whatsapp} alt=""/>
            </ContenedorIcono>
        </ContenedorImg>  
    );
}
 
export default Foto;