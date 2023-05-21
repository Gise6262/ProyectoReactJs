import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
      <img className="logoSquad" src="./Squad.png" alt="Squad Gamer Latam" />
      </Link>
        <h2 className="tituloPrincipal">Squad Gamer</h2>
        <nav>
            <ul>
                <li>
                  <NavLink to={`/categoria/1`}> Supervivencia </NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/2`}> Estrategia </NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/3`}> MOBA </NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/4`}> Simulacion </NavLink>
                </li>
                <li>
                  <NavLink to={`/categoria/5`}> Arcade </NavLink>
                </li>

            </ul>
        </nav>

        <CartWidget />


    </header>
  )
}

export default NavBar