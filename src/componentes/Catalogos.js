import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import Header from "../elementos/header";
import {Main, ContenedorCatalogos} from "../elementos/main";
import Categorias from "../elementos/Categoria";
import Footer from "../elementos/footer";
import {db} from './../firebase/firebaseConfing';
import { collection, onSnapshot } from "firebase/firestore";
import Cargando from "./Cargando";
import { ContextoCargando } from "../contexto/contextoCargando";


const Catalogos = () => {

    const [catalogos, cambiarCatalogos] = useState([]);
    const {cargando, cambiarCargando} = useContext(ContextoCargando);
    const [seleccionado, cambiarSeleccionado] = useState(false);

    setTimeout(()=>{
        cambiarCargando(false)
    },5000)

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
            {
                cargando &&
                    <Cargando />
            }
            <Helmet>
                <title>Categorias</title>
            </Helmet>
            <Header selccionado={seleccionado} cambiarSeleccionado={cambiarSeleccionado}/>
            <Main categorias>
                <h2>Categorias</h2>
                <ContenedorCatalogos>
                    {
                        catalogos.length !== 0 &&
                            catalogos.map((catalogo)=>{
                                return(
                                    <Categorias key={catalogo.title} title={catalogo.title} fondo={catalogo.background} index={catalogo.index}/>
                                )
                            })
                    }
                </ContenedorCatalogos>
            </Main>
            <Footer/>
        </>
    );
}
 
export default Catalogos;