import '../../styles/main.css';
import {getCatalogo} from '../../asyncmocj'
import {useState, useEffect} from 'react'

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
            <div className="card">

            </div>
        </div>
        

    )
}
export default ItemListContainer;