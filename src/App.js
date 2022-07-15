import './App.css';
import './styles/main.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CarListContainer from './components/CarListContainer/CarListContainer'
import OrdenCompra from './components/OrdenCompra/OrdenCompra'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CarProvider } from './context/CartContext/CartContext'
import {NotificacionProvider} from './Notification/Notification'

function App() {
  
  return (
    <div className="App">
      <NotificacionProvider>
      <CarProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/Categoria/:CategoriaId' element={<ItemListContainer />}/>
            <Route path='/Detalle/:CatalogoId' element={<ItemDetailContainer />}/>
            <Route path='/Carrito/' element={<CarListContainer />}/>
            <Route path='/Carrito/Generarcompra/' element={<OrdenCompra />}/>
          </Routes>
        </BrowserRouter>
      </CarProvider>
      </NotificacionProvider>
    </div>
  );
}

export default App;
