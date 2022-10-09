import React from 'react'
import ShoppingCart from '../ItemCart/shoppingCart'
import Navbar from '../Navegacion/Navbar'
import { Repartidor } from './Registro_rep'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Repartidor/>
        {/* <ShoppingCart/> */}
    </div>
  )
}

export default Home