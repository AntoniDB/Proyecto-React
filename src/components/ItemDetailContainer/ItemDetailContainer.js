import { useState, useEffect } from 'react'
import {getCatalogoById} from '../../asyncmock'
import ItemDetail from '../ItemDetail/itemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    const [catalogo, setCatalogo] = useState('')
    const {CatalogoId} = useParams()
    const [cargando, setCargando] = useState(true)

    
    
    useEffect(() =>{
        setCargando(true)
        getCatalogoById(CatalogoId).then(respuesta => {setCatalogo(respuesta)}).finally(() => {setCargando(false)})
    },[CatalogoId])
    
    if(cargando){
        return(
            <div className="container"><div className="spin-preloader"></div></div>
        )
    }
    

    return(
        <>
            <h3>Detalle de Producto</h3>
            <ItemDetail {...catalogo}/>       
        </>
    )
}

export default ItemDetailContainer