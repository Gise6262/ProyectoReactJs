import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);
  return (
    <div className="cartItem">
        <h4> {item.nombre} </h4>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio} </p>
        <button className="elimProd" onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
    </div>
  )
}

export default CartItem