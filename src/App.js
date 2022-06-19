import './App.css';
import './styles/main.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CarProvider } from './context/CartContext/CartContext'

function App() {
  

  
  return (
    <div className="App">
      <CarProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/Categoria/:CategoriaId' element={<ItemListContainer />}/>
            <Route path='/Detalle/:CatalogoId' element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
      </CarProvider>
    </div>
  );
}

export default App;
