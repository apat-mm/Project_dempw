import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import MainApp from './componentes/Navegacion/MainApp';
import Navbar from './componentes/Navegacion/Navbar';
import { Repartidor } from './componentes/Paginas/Registro_rep';

export const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                
                {/* <Navbar/> */}
                <MainApp/>
                {/* <Repartidor/> */}
            </BrowserRouter>
        </div>
     );
}
