import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cargando from './../assets/ezgif.com-gif-maker.gif';

const ContenedorCategorias = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    margin-left: 10px;

    div.caja{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        border-radius: 20px 0px 20px 0px;
        border: 2px solid #000;
        margin-bottom: 33px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }
    h3{
        width: 100%;
        text-align: center;
        background-color: rgba(255,255,255,0.5);
        padding: 5px;
    }
`

const Categorias = ({title, fondo, index}) => {

    const [verificar, cambiarVerificar] = useState(true);

    useEffect(()=>{
        cambiarVerificar(false);
    }, [])


    setTimeout(()=>{
        cambiarVerificar(true);
    }, 1000)
    

    return (
        <>
            {
                verificar ? 
                    <Link to={`/catalogos/${title}/${index}`}>
                        <ContenedorCategorias>
                                <div className="caja" style={{backgroundImage: `url(${fondo})` }}>
                                    <h3>{title}</h3>
                                </div>
                        </ContenedorCategorias>
                    </Link>
                :
                        <ContenedorCategorias>
                                <div className="caja" style={{backgroundImage: `url(${cargando})`, backgroundSize: "30%" }}>
                                    
                                </div>
                        </ContenedorCategorias>
            }
        </>
    );
}
 
export default Categorias;