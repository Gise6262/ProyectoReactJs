import './App.css';
import ContenedorProductos from './Components/ContenedorProductos/ContenedorProductos';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido Jugador!" />
      <ContenedorProductos/>
      
    </>
  );
}

export default App;
