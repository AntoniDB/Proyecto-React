import './App.css';
import './styles/main.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo='Hola Coders' nombre='Antonio'/>
      
    </div>
  );
}

export default App;
