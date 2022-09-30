import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import MainApp from './componentes/Navegacion/MainApp';
import Navbar from './componentes/Navegacion/Navbar';

export const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <Navbar/>
                <MainApp/>
            </BrowserRouter>
        </div>
     );
}
