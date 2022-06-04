import '../../styles/main.css';
import {getCatalogo} from '../../asyncmock'
import {useState, useEffect} from 'react'
import ItemList from '../itemList/itemList';

const ItemListContainer = (props) => {

    const [catalogo, setCatalogo] = useState([])

    useEffect(() =>{
        getCatalogo().then(respuesta=>{
            setCatalogo(respuesta)
        })
    })
    
    return(
        <div>
            <div className="divSaludo"><h1>{props.saludo}&nbsp;{props.nombre}</h1></div>
            <div className="container">
               <ItemList catalogo={catalogo}/>

            </div>
        </div>
        

    )
}
export default ItemListContainer;