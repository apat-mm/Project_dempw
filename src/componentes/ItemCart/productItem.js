import React from 'react'

const ProductItem = ({data,addToCart}) => {
    let {id,price,name,img} = data
  return (
    <div style={{border:'thin solid gray', padding:'5px'}}>
        <img style={{width:'250px', height:'auto'}} src={img}/>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <button onClick={() => addToCart(id)} >Añadir</button>
    </div>
  )
}

export default ProductItem