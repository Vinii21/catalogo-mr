import React from "react";
import Header from "./elementos/header";
import {Main} from "./elementos/main";
import CajasInfo from "./elementos/cajasInfo";
import PrevioCatalogos from "./elementos/previoCatalogos";
import Footer from "./elementos/footer";
import styled from "styled-components";
import Separador from "./elementos/separador";

function App() {
  return (
    <ContenedorTotal>
      <Header />
      <Main>
        <Separador/>
        <CajasInfo />
        <Separador/>
        <PrevioCatalogos />
      </Main>
      <Footer/>
    </ContenedorTotal>
  );
}

const ContenedorTotal = styled.div`
  height: auto;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`

export default App;
