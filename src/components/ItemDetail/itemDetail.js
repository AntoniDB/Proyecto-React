import Contador from '../Contador/Contador'
import CartContexto from '../../context/CartContext/CartContext'
import {Link} from 'react-router-dom'
import {useEffect} from 'react'

import { createContext, useState, useContext } from 'react'

const ItemDetail = ({Id,Nombre,Precio,Descripcion,Imagen,Categoria, Stock}) =>{

    const {agregaProducto, buscaProducto} = useContext(CartContexto)
    const productoBuscado = buscaProducto(Id)
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const [avisoAgregado, setAvisoAgregado] = useState('')
    
    useEffect(() =>{
        setAvisoAgregado(productoBuscado)
    })

    const controlAgregaProducto = (cantidad) => {
        agregaProducto({Id, Nombre, Precio, cantidad})
        setCantidadAgregada(cantidad)
        
    }
   
    return(
        <div className="container">
            <div className="container">
                <div className="detalle-tit">{Nombre}</div>
                <div className="detalle-cat">{Categoria}</div>
            </div>
            <div className="container">
                <img src={Imagen} className="detalle-img" alt={Nombre} />
                <div className="detalle-container">
                    <div className="detalle-tit-sec">{Nombre}</div>
                    <div className="detalle-precio">S/.&nbsp;{Precio}</div>
                    <div className="detalle-tit-desc">{Descripcion}</div>
                    <h3 className="detalle-prod-agrega">{avisoAgregado}</h3>

                    {cantidadAgregada === 0 ? <Contador agrega={controlAgregaProducto} stock={Stock}/> : <Link to='/Cart' className="btnTerminarCompra">Terminar Compra</Link>}
                    
                </div>
            </div>
            
            
        </div>
    )
}


export default ItemDetail