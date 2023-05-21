import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({productos}) => {

  return (
    <div className="contenedorProductos"> 
       {productos?.map (producto => <Item {...producto}/>)}
    </div>
  )
}

export default ItemList