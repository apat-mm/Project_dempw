import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Paginas/Home';
import { Registro } from '../Paginas/Registro';
import { Formulario } from '../Paginas/Registro_c';
/* import Qbano from '../Paginas/Qbano'; */
import HomeQbano from '../HomeQbano';
import {Bbc} from '../Paginas/Paginas_Home/Bbc';
import { Alkosto } from '../Paginas/Paginas_Home/Alkosto';
import { Rebaja } from '../Paginas/Paginas_Home/Rebaja';
/* import AppQbano from '../AppQbano'; */
import { CartProvider } from '../../Context/CartContext';
import Local_register from '../Paginas/Local_register';
import Registro_productos from '../Paginas/Registro_productos';
import Soporte from '../Paginas/Soporte';

const MainApp = () => {
    return (  
        <>        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/inicio' element={<Registro/>}/>
            <Route path='/soporte' element={<Soporte/>}/>
            <Route path='/registro_local' element={<Local_register/>}/>
            <Route path='/registro_producto' element={<Registro_productos/>}/>
            <Route path='/registro' element={<Formulario/>}/>
            <Route path='/qbano' element={<><HomeQbano/></>}/>
            <Route path='/bbc' element={<Bbc/>}/>
            <Route path='/alkosto' element={<Alkosto/>}/>
            <Route path='/laRebaja' element={<Rebaja/>}/>
        </Routes>
        </>
    );
}
 
export default MainApp;