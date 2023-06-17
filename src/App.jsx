import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';


function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting="¡Bienvenido Jugador!" />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='*' element={<h2> Sitio en Construcción </h2>} />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/checkout' element={ <Checkout/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>



    </>
  );
}

export default App;
