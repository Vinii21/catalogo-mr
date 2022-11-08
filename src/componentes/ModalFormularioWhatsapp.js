import React, {useState, useEffect} from "react";
import styled from "styled-components";
import theme from './../theme';
import {db} from './../firebase/firebaseConfing';
import { collection, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import cargando from './../assets/ezgif.com-gif-maker.gif';

const ModalFormularioWhatsapp = ({cambiarMostrarModal, mostrarModal, fondo}) => {
    const [detalles, cambiarDetalles] = useState([]);
    const [datos, cambiarDatos] = useState([]);
    const [texto, cambiarTexto] = useState(`Quiero información sobre este producto ${fondo}`);
    const parametro = useParams() 

    useEffect(()=>{
        onSnapshot(collection(db, 'detalles'),
        (sanpshot)=>{
            const arregloDetalles = sanpshot.docs.map((item)=>{
                return {...item.data(), id: item.id}
            })

            cambiarDetalles(arregloDetalles);
        },
            (error)=>{
                console.log(error)
            }
        );
    }, [])

    

    setTimeout(()=>{
        cambiarDatos(detalles[parametro.index].file);
    },1000)

    const onSubmit = (e) => {
        e.preventDefault();
        const whatsappApi = `https://api.whatsapp.com/send?phone=+50670571009&text=${texto}`;
        
        window.open(whatsappApi)
    }

    const establecer = () => {
        const input = document.querySelectorAll('.input');
        let ConstruirMensaje = `Quiero información sobre este producto código ${fondo} `;
        for(let i = 0; i < input.length; i++){
            if(input[i].checked ){
                ConstruirMensaje += input[i].value + " ";
            }
        }
        
        cambiarTexto(ConstruirMensaje)
    }
    return (
        <ContenedorCentral>
            <ContenedorFormulario>
                <div title="Cancelar" className="iconClose" onClick={()=>cambiarMostrarModal(!mostrarModal)}>X</div>
                <form onSubmit={onSubmit}>
                    <h3>Solicitar Información</h3>
                    
                    {
                        datos.length !== 0 ?
                            datos.map((dato)=>{
                                return(
                                    <>
                                    <input onChange={establecer} id={dato} type="checkbox" className="input" value={dato}/><Label>{dato}</Label> <br/>
                                    </>
                                )
                            })
                        :
                            <>
                                <img src={cargando} style={{width: "50px"}} alt="Espere"/>
                                <p>Cargando ...</p> 
                            </>
                    }
                    <ContenedorImg className="cont-img">
                        <img src={fondo} alt="Mueble elegido"/>
                    </ContenedorImg>
                    <textarea value={texto}>

                    </textarea>
                    {
                        datos.length !== 0 ?
                            <Btn type="submit">Enviar whatsapp</Btn>
                        :
                            <p>Por favor espere...</p>
                    }
                    
                    {/* <span className="aclaracion"><strong>*</strong>Al dar click en Enviar, se generará un mensaje automatico para saber el precio del producto. Seleccione las casillas para obtener información especifica a demás del precio. Muchas gracias.</span> */}
                </form>
            </ContenedorFormulario>
        </ContenedorCentral>
    );
}

const ContenedorCentral = styled.div`
    position: fixed;
    z-index: 1010;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
`

const ContenedorFormulario = styled.div`
    position: relative;
    z-index: 200;
    padding: 20px;
    width: 90%;
    max-width: 350px;
    height: auto;
    border-radius: 4px;
    background-color: ${theme.colorBase};
    h3{
        font-family: ${theme.Fuente2};
        text-transform: uppercase;
        font-size: 18px;
        padding-bottom: 10px;
    }
    div.iconClose{
        position: absolute;
        right: 0px;
        top: 0;
        margin-top: 5px;
        margin-right: 10px;
        width: 100%;
        text-align: right;
        font-size: 25px;
        font-weight: 700;
        font-family: ${theme.Fuente1};
        cursor: pointer;
        &:hover{
            color: red;
        }
    }
    input{
        margin-bottom: 5px;
    }
    textarea{
        opacity: 0;
        position: absolute;
        z-index: -100;
    }
    p{
        text-align: center;
        margin-top: 20px;
        font-size: 18px;
    }
`

const Label = styled.label`
    padding-bottom: 5px;
    margin-left: 5px;
    font-size: 20px;
    font-family: ${theme.Fuente2};
    font-weight: 400;
`
const ContenedorImg = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-top: 5px;
    img{
        width: 100px;
        border-radius: 10px 0 10px 0;
        border: 2px solid #000;
    }
`

const Btn = styled.button`
    width: 100%;
    text-align: center;
    margin: 0 auto;
    border: 2px solid #fff;
    padding: 5px;
    background-color: #03c100;
    font-size: 18px;
    font-family: ${theme.Fuente2};
    font-weight: 400;
    color: #fff;
    border-radius: 15px;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
        background-color: #0a5109;  
    }
`
 
export default ModalFormularioWhatsapp;