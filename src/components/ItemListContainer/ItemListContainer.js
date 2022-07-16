import '../../styles/main.css';
import {useState, useEffect} from 'react'
import {getCatalogo} from '../../Services/Firebase/firestore'
import ItemList from '../itemList/itemList';
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) => {

    const [catalogo, setCatalogo] = useState([])
    const {CategoriaId} = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(() =>{
        setCargando(true)
        getCatalogo(CategoriaId).then(response =>{setCatalogo(response)}).catch(error =>{console.error(error)}).finally(()=>{setCargando(false)})
    },[CategoriaId])

    if(cargando){
        return(
            <div className="container"><div className="spin-preloader"></div></div>
        )
    }
    
    
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