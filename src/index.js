import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import favicon from './assets/logo.svg';
import Catalogos from './componentes/Catalogos';
import Galeria from './componentes/Galeria';
import Error404 from './componentes/Error404';
import { ProveedorCargando } from './contexto/contextoCargando';
import Cargando from './componentes/Cargando';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <title>Muebles Ramirez</title>
      <link rel='shortcut icon' href={favicon} type='image/x-icon'/>
    </Helmet>
      <BrowserRouter>
        <ProveedorCargando>
          <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/:condicion' element={<Catalogos />}/>
            <Route path='/catalogos/:id/:index' element={<Galeria />}/>
            <Route path='/sobre-nosotros' element={<Cargando />}/>
            <Route path='/*' element={<Error404 />}/>
          </Routes>
        </ProveedorCargando>
      </BrowserRouter>
  </React.StrictMode>
);
