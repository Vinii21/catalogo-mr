import styled from "styled-components";

const ContenedorLinea = styled.div`
    display: none;
    @media screen and (min-width: 800px){
        width: 100%;
        height: 50px;
    
        display: flex;
        justify-content: center;
        align-items: center;
    
        background: transparent;
    }
`

const Separador = () => {
    return (
        <ContenedorLinea>
            <hr/>
        </ContenedorLinea>
    );
}
 
export default Separador;