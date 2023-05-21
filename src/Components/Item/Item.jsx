import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, precio, img, detalle,}) => {
  return (
    <div className='cards'>
      <img className='imgProducto' src={img} alt={nombre} />
        
        <p className='nameCard'> Nombre: {nombre}</p>
        <p>Precio: $ {precio}</p>
        <p>ID: {id}</p>
        <Link className='boton' to={`/item/${id}`} > Ver Detalles </Link>

    </div>
  )
}

export default Item