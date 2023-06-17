import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/5087/5087847.png"

    return (
      <div>
        <Link to='/cart'>
          <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
          {
            cantidadTotal > 0 && <span className='numCarrito'> {cantidadTotal} </span>
          }
        </Link>
      </div>
    )
  }
  
  export default CartWidget