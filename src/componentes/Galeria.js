import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import favicon from './../assets/logo.svg';
import styled from "styled-components";
import theme from './../theme';
import ModalFormularioWhatsapp from './../componentes/ModalFormularioWhatsapp';
import Header from './../elementos/header';
import Footer from './../elementos/footer';
import Foto from "../elementos/foto";
import { useParams } from "react-router-dom";
import {db} from './../firebase/firebaseConfing';
import { collection, onSnapshot} from "firebase/firestore";
import cargando from './../assets/ezgif.com-gif-maker.gif';
import fondo from './../assets/interlaced.png';

const Galeria = () => {
    const [mostrarModal, cambiarMostrarModal] = useState(false);
    const [fondo, cambiarFondo] = useState('');
    const [nombre, cambiarNombre] = useState('');
    const [albun, cambiarAlbun] = useState([]);
    const parametro = useParams();

    useEffect(()=>{
        onSnapshot(collection(db, `${parametro.id}`),
        (sanpshot) => {
            const arregloAlbunes = sanpshot.docs.map((item)=>{
                return {...item.data(), id: item.id}
            })

            cambiarAlbun(arregloAlbunes);
        },
            (error)=>{
                console.log(error)
            }
        );
    }, [])

    return (
        <>
            <Helmet>
                <title>Galeria</title>
                <link rel='shortcut icon' href={favicon} type='image/x-icon'/>
            </Helmet>
            {
                mostrarModal && 
                <ModalFormularioWhatsapp nombre={nombre} cambiarMostrarModal={cambiarMostrarModal} mostrarModal={mostrarModal} fondo={fondo}/>
            }
            <Header/>
            <ContendorGaleria>
                <ContenedorTitulo>
                    <h2>{parametro.id}</h2>
                    {/* <span>datos</span> */}
                </ContenedorTitulo>
                <Contenedorfotos>
                {
                    albun.length !== 0 ? 
                        albun.map((item)=>{
                            return(
                                <Foto cambiarNombre={cambiarNombre} cambiarFondo={cambiarFondo} fondo={item.background} cambiarMostrarModal={cambiarMostrarModal} mostrarModal={mostrarModal}/>
                            )
                        })
                    :
                        <img src={cargando} style={{width: "80px", paddingBottom: "33px"}} alt="Cargando"/>
                }
                </Contenedorfotos>
            </ContendorGaleria>
            <Footer />
        </>
    );
}

const ContendorGaleria = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 90px;
    width: 100%;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    background-image: url(${fondo});
`

const ContenedorTitulo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        width: 100%;
        text-align: center;
        font-family: ${theme.Fuente1};
        font-weight: 600;
        font-size: 50px;
        color: #000;
    }
    span{
        text-align: center;
        font-family: ${theme.Fuente2};
        font-weight: 400;
        font-size: 14px;
    }
    @media screen and (min-width: 800px){
        margin-top: 33px;
        margin-bottom: 33px;
        color: #fff;
    }
`

const Contenedorfotos = styled.div`
    width: 100%;
    height: auto;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
 
export default Galeria;