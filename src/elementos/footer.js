import styled from "styled-components";
import theme from "../theme";
import logo from "./../assets/logo.svg";
import iconoFacebook from './../assets/003-facebook.png';
import iconoWhatsapp from './../assets/004-whatsapp.png';

const ContenedorFooter = styled.footer`
    width: 100%;
    height: auto;
    background: url(${theme.fondoTelaOs});
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 90px;
    bottom: 0px;
    padding: 20px 0px 3px 0px;
    .info{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;

        .info_logo{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            img{
                width: 100px;
            }
        }
        .redes{
            width: 100px;
            text-align: center;
            margin-top: 10px;
            a{
                margin-left: 5px;
                margin-right: 5px;
            }
            img{
                width: 30px;
            }
        }
        .name{
            margin-top: 10px;

        }

    }
    .name{
        font-family: ${theme.Fuente1};
        font-weight: 200;
        height: 70%;
        margin-left: 20px;
        /* span{
            color: ${theme.colorTres};
        } */
    }
    div.externos{
        width: 100%;
        text-align: center;
        font-family: ${theme.Fuente2};
        font-size: 13px;
            a{
                color: #fff;
                text-decoration: none;
            }
    }

    @media screen and (min-width: 800px){
        height: 220px;
        top: 80px;
        padding-bottom: 3px;
        .info{
            width: 100%;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            padding-left: 30px;
        }
        .info_logo{
            img{
                width: 120px;
            }
            .redes{
                display: flex;
                text-align: center;
                a{
                    filter: grayscale(60%);
                    &:hover{
                        filter: grayscale(0%);
                    }
                }
                img{
                    width: 33px;
                    margin-left: 10px;
                } 
            }
        }
        .externos{
            width: 50%;
            font-size: 14px;
            font-family: ${theme.Fuente2};
            font-weight: 200;
            a{
                color: #fff;
                text-decoration: none;
            }
        }
    }
`

const Footer = () => {
    const texto = "Hola, me gustaría saber más información de sus productos. Muchas gracias."

    return (
        <ContenedorFooter>
            <div className="info">
                <div className="info_logo">
                    <img src={logo} alt="Logo Muebles Ramirez"/>
                    <div className="redes">
                        <a href="https://www.facebook.com/MramirezSarchi/" target="__blank"><img src={iconoFacebook} alt="Facebook Muebles Ramirez"/></a>
                        <a href={`https://api.whatsapp.com/send?phone=+50687255719&text=${texto}`} target="__blank"><img src={iconoWhatsapp} alt="WhatsApp Muebles Ramirez"/></a>
                    </div>
                </div>
                <div className="name">
                    <h3><span className="eme">M</span>uebles <span className="ere">R</span>amirez</h3>
                    <p>Sarchi hasta su casa</p>
                    <p>Desde 1992</p>
                </div>
            </div>
            <div className="externos">
                Creado por <a href="https://vinii21.github.io/portafolioVinii/" target="__blank">Vinicio Chavarría</a>
            </div>
        </ContenedorFooter>
    );
}
 
export default Footer;
