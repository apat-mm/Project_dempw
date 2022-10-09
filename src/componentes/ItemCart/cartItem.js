import React from 'react'

const CartItem = ({data,delFromCart}) => {
    let {id,name,price,img, quantity} = data;

  return (
    <div style={{borderBottom:'thin solid gray'}}>
        <img style={{width:'250px', height:'auto'}} src={img}/>
        <h4>{name}</h4>
        <h5>${price} x {quantity}</h5>
        <h6>Total: ${price * quantity}</h6>
        <button onClick={()=> delFromCart(id)} >Eliminar producto</button>
        <br/>
        <button onClick={()=> delFromCart(id,true)}>Eliminar todo</button>
    </div>
  )
}

export default CartItem 