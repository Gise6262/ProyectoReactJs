import React from 'react'
import './ItemCount.css'

const ItemCount = ({ funcionAgregar}) => {

  return (
    <>
        <button className='btnAgregarCarrito' onClick={()=> funcionAgregar(1)}> Agregar al Carrito </button>
    </>
  )
}


export default ItemCount