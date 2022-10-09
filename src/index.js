import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import {Registro} from './componentes/Registro'
import { Search } from './componentes/Search';
import { Formulario } from './componentes/Registro_c';
import { Local } from './componentes/Registro_local';
import { Address } from './componentes/Direccion';
import { Repartidor } from './componentes/Registro_rep';
import {Calification} from './componentes/calification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Registro/>
    <Formulario/>
    <Search/>
    <Local/>
    <Address/>
    <Repartidor/>
    <Calification/>
  </>
);