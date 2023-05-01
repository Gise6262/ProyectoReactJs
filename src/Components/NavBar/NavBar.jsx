import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h2>Juegos Multiplayers</h2>
        <nav>
            <ul>
                <li>Juegos Supervivencia</li>
                <li>Juegos de Estrategia</li>
                <li>Juegos MOBA</li>
            </ul>
        </nav>

        <CartWidget />


    </header>
  )
}

export default NavBar