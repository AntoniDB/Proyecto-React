import { useState, useEffect } from 'react'
import {getCatalogoById} from '../../asyncmock'
import ItemDetail from '../ItemDetail/itemDetail'
import {useParams} from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../Services/Firebase/index'

const ItemDetailContainer = () => {

    const [catalogo, setCatalogo] = useState('')
    const {CatalogoId} = useParams()
    
    const [cargando, setCargando] = useState(true)
       
    useEffect(() =>{
        setCargando(true)
        const DocRef = doc(db, 'Catalogo', CatalogoId)
        getDoc(DocRef).then(response =>{
            
            const catalogoResponse = {id: response.id, ...response.data()}
            
            setCatalogo(catalogoResponse)
        }).catch(error =>{console.log(error)}).finally(()=>{setCargando(false)})
    },[CatalogoId])
    
    
    if(cargando){
        return(
            <div className="container"><div className="spin-preloader"></div></div>
        )
    }
    

    return(
        <>
            <h3 className="tituloComponente">Detalle de Producto</h3>
            <ItemDetail {...catalogo}/>       
        </>
    )
}

export default ItemDetailContainer