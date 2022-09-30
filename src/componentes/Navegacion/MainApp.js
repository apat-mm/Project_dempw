import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Paginas/Home';
import { Registro } from '../Paginas/Registro';
import { Formulario } from '../Paginas/Registro_c';

const MainApp = () => {
    return (  
        <>        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/inicio' element={<Registro/>}/>
            <Route path='/registro' element={<Formulario/>}/>
        </Routes>
        </>
    );
}
 
export default MainApp;