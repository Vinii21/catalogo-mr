import React from "react";
import Header from "./elementos/header";
import {Main} from "./elementos/main";
import CajasInfo from "./elementos/cajasInfo";
import PrevioCatalogos from "./elementos/previoCatalogos";
import Footer from "./elementos/footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <CajasInfo />
        <PrevioCatalogos />
      </Main>
      <Footer/>
    </>
  );
}

export default App;
