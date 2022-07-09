import '../../styles/main.css';
import {getCatalogo, getCatalogoByCategoria} from '../../asyncmock'
import {useState, useEffect} from 'react'
import ItemList from '../itemList/itemList';
import {useParams} from 'react-router-dom'
import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../Services/Firebase/index'

const ItemListContainer = (props) => {

    const [catalogo, setCatalogo] = useState([])
    const {CategoriaId} = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(() =>{
        setCargando(true)
        const coleccionRef = CategoriaId ? (query(collection(db, 'Catalogo'), where('Categoria','==',CategoriaId))) : (collection(db, 'Catalogo'))

        getDocs(coleccionRef).then(response =>{
            const catalogoFirestore = response.docs.map(doc =>{
                return{id:doc.id, ...doc.data()}
            })
            
            setCatalogo(catalogoFirestore)
            
        }).catch(error =>{console.error(error)}).finally(()=>{setCargando(false)})
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