import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
// import {Registro} from './componentes/Paginas/Registro'
// import { Search } from './componentes/Paginas/Search';
// import { Formulario } from './componentes/Paginas/Registro_c';
// import { Local } from './componentes/Paginas/Registro_local';
// import { Address } from './componentes/Paginas/Direccion';
// import { Repartidor } from './componentes/Paginas/Registro_rep';
// import {Calification} from './componentes/Paginas/calification';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
    {/* <Registro/>
    <Formulario/>
    <Search/>
    <Local/>
    <Address/>
    <Repartidor/>
    <Calification/> */}
  </>
);