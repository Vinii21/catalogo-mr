import styled from "styled-components";
import theme from "../theme";
import logoTexto from './../assets/textoMR.png';
import iconoFacebook from './../assets/003-facebook.png';
import iconoWhatsapp from './../assets/004-whatsapp.png';
import fondoFooter from './../assets/triangles_pattern.png';

const ContenedorFooter = styled.footer`
    width: 100%;
    height: 200px;
    background-image: url(${fondoFooter});
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 90px;
    .info{
        width: 60%;
        height: 200px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .logoImg{
        width: 170px;
        height: 40px;
        margin-top: 33px;
    }
    .redes{
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        img{
            width: 23px;
            height: 23px;
            margin-right: 9px;
        }
    }
    .fecha{
        font-size: 12px;
        font-family: ${theme.Fuente2};
        font-weight: 700;
        cursor: default;
    }
    .author{
        font-size: 10px;
        font-family: ${theme.Fuente2};
        font-weight: 700;
        cursor: default;
        a{
            color: #000;
        }
    }

    @media screen and (min-width: 800px){
        height: 300px;
        top: 130px;
        .logoImg{
            width: 250px;
            height: 70px;
        }
        .redes{
            margin-top: 20px;
            margin-bottom: 20px;
            img{
                width: 43px;
                height: 43px;
            }
        }
        .fecha{
            font-size: 15px;
            margin-right: 9px;
            cursor: default;
        }
        .author{
            position: absolute;
            bottom: 0;
            font-size: 13px;
        }
    }
`

const Footer = () => {
    return (
        <ContenedorFooter>
            <div className="info">
                <img className="logoImg" src={logoTexto} alt="Muebles Ramirez, sarchi hasta su casa"/>
                <span className="redes">
                    <a href="https://www.facebook.com/MramirezSarchi/" target="__blank"><img src={iconoFacebook} alt="Facebook Muebles Ramirez"/></a>
                    <a href="https://wa.me/+50687255719" target="__blank"><img src={iconoWhatsapp} alt="WhatsApp Muebles Ramirez"/></a>
                </span>
                <p className="fecha">1992 - 2022</p>
            </div>
            <span className="author">Creado por <a href="#" target="__blank">Vinicio Chavarría</a></span>
        </ContenedorFooter>
    );
}
 
export default Footer;