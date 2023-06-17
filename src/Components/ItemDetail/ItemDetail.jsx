import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, detalle}) => {
 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }


  return (
    <div className='contenedorItem'>
      <img className='imgDetail' src={img} alt={nombre} />
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: $ {precio}</h3>
      <h3>ID:  {id}</h3>
      <h4>Detalle: {detalle}</h4>
      {
        agregarCantidad > 0 ? (<Link to="/cart"> <button className='terminarCompra'> Terminar Compra</button> </Link>) : (<ItemCount funcionAgregar={manejadorCantidad} />)
      }
    </div>


  )
}



export default ItemDetail