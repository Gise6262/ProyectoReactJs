import './ItemDetail.css'


const ItemDetail = ({id, nombre, precio, img, detalle}) => {
  return (
    <div className='contenedorItem'>
        <img className='imgDetail' src={img} alt={nombre} />
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: $ {precio}</h3>
        <h3>ID:  {id}</h3>
        <h4>Detalle: {detalle}</h4>
    </div>
    
  )
}

export default ItemDetail