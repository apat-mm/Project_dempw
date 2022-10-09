import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import MainApp from './componentes/Navegacion/MainApp';
import Navbar from './componentes/Navegacion/Navbar';
import Footer from './componentes/Navegacion/Footer';

export const App = () => {
    return ( 
        <div>
            <BrowserRouter>
                <Navbar/>
                <MainApp/>
                <Footer/>
            </BrowserRouter>
        </div>
     );
}