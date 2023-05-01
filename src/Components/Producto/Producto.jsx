import React from 'react'

const Producto = ({nombre, precio}) => {
  return (
    <div>
        <h2>Producto</h2>
        <p>Nombre: {nombre}</p>
        <p>Precio: {precio}</p>
        <button> Agregar al Carrito </button>

    </div>
  )
}

export default Producto