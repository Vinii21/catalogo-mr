import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../elementos/header";
import {Main, ContenedorCatalogos} from "../elementos/main";
import Categorias from "../elementos/Categoria";
import Footer from "../elementos/footer";
import {db} from './../firebase/firebaseConfing';
import { collection, onSnapshot } from "firebase/firestore";
import cargando from './../assets/ezgif.com-gif-maker.gif';


const Catalogos = () => {

    const [catalogos, cambiarCatalogos] = useState([]);

    useEffect(
        ()=>{
        onSnapshot(collection(db, 'Categorias'),
        (sanpshot)=>{
            const arregloCategorias = sanpshot.docs.map((item)=>{
                return {...item.data(), id: item.id}
            })

            cambiarCatalogos(arregloCategorias);
        },
            (error)=>{
                console.log(error)
            }
        );
    }, [])
    
    return (
        <>
            <Helmet>
                <title>Categorias</title>
            </Helmet>
            <Header/>
            <Main categorias>
                <h2>Categorias</h2>
                <ContenedorCatalogos>
                    {
                        catalogos.length !== 0 ?
                            catalogos.map((catalogo)=>{
                                return(
                                    <Categorias title={catalogo.title} fondo={catalogo.background} index={catalogo.index}/>
                                )
                            })
                        :
                            <img src={cargando} style={{width: "80px", paddingBottom: "33px"}} alt="Cargando"/>
                    }
                </ContenedorCatalogos>
            </Main>
            <Footer/>
        </>
    );
}
 
export default Catalogos;