import '../../styles/main.css';
import {getCatalogo, getCatalogoByCategoria} from '../../asyncmock'
import {useState, useEffect} from 'react'
import ItemList from '../itemList/itemList';
import {useParams} from 'react-router-dom'  

const ItemListContainer = (props) => {

    const [catalogo, setCatalogo] = useState([])
    const {CategoriaId} = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(() =>{
        setCargando(true)

        if(!CategoriaId) {
            getCatalogo().then(respuesta=>{
                setCatalogo(respuesta)
            }).finally(() => {setCargando(false)})
        }else{
            getCatalogoByCategoria(CategoriaId).then(respuesta=>{
                setCatalogo(respuesta)
            }).finally(() => {setCargando(false)})
        }
        
    },[CategoriaId])

    if(cargando){
        return(
            <div className="container"><div className="spin-preloader"></div></div>
        )
    }
    
    console.log(catalogo)
    return(
        <div>
            <div className="divSaludo"></div>
            <div className="container">
               {catalogo.length > 0 ? <ItemList catalogo={catalogo}/> : <div className="error-catal-vacio">No hay productos</div>}
               

            </div>
        </div>
        

    )
}
export default ItemListContainer;