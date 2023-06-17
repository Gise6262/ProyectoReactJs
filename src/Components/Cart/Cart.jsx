import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="prodCarrito"> No hay productos en el carrito</h2>
                <Link to='/'> <button className="verProd"> Ver Productos </button></Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3 className="total">Total: ${total} </h3>
            <h3 className="total">Cantidad total: {cantidadTotal} </h3>
            <button className="total" onClick={() => vaciarCarrito()}> Vaciar carrito </button>
            <Link to='/checkout'> <button className="total" >Finalizar Compra</button> </Link>

        </div>
    )
}

export default Cart