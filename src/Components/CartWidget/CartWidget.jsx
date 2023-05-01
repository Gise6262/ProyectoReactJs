import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/2698/2698303.png"

  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="Carrito de compras" />
        <strong> 5 </strong>
    </div>
  )
}

export default CartWidget