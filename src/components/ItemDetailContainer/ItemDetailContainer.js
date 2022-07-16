import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/itemDetail'
import {getDetailCatalogo} from '../../Services/Firebase/firestore'
import {useParams} from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../Services/Firebase/index'

const ItemDetailContainer = () => {

    const [catalogo, setCatalogo] = useState('')
    const {CatalogoId} = useParams()
    
    const [cargando, setCargando] = useState(true)
       
    useEffect(() =>{
        setCargando(true)
        getDetailCatalogo(CatalogoId).then(response =>{setCatalogo(response)}).catch(error =>{console.error(error)}).finally(()=>{setCargando(false)})
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