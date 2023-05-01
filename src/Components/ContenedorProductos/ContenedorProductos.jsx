import Producto from "../Producto/Producto"
import './ContenedorProductos.css'

const ContenedorProductos = () => {
  return (
    <div className="cards">
        <Producto nombre="Scum" precio={3500}/>
        <Producto nombre="League of Legends" precio={500}/>
        <Producto nombre="Hell Let Loose" precio={2200}/>
        <Producto nombre="Counter Strike Global Offensive" precio={1300}/>
        <Producto nombre="War Seleccion" precio={560}/>
        

    </div>
  )
}

export default ContenedorProductos