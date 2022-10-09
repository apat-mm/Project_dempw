import React from 'react'
import Cart from '../Cart'
import Products from '../Products'
import styles from'./styles.module.scss'

const HomeQbano = () => {
  return (
    <div className={styles.pagina}>
       <Cart/>
       <Products/> 
    </div>
  )
}

export default HomeQbano