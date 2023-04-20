import Contador from '../Contador/Contador'
import CartContexto from '../../context/CartContext/CartContext'
import {Link} from 'react-router-dom'
import { useNotificacion } from '../../Notification/Notification'

import { useState, useContext } from 'react'

const ItemDetail = ({id,Nombre,Precio,Descripcion,Imagen,Categoria, Stock}) =>{
    
    const {agregaProducto,buscaProducto} = useContext(CartContexto)
    const productoBuscado = buscaProducto(id)
    const setNotificacion = useNotificacion()
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    
    
    const controlAgregaProducto = (cantidad) => {
           
            setNotificacion('succes',`Se Agregó ${cantidad} de ${Nombre} al carrito`,2)
            agregaProducto({id, Nombre, Precio, cantidad})
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
                    <div className="detalle-tit-desc">Stock&nbsp;&nbsp;&nbsp;{Stock}</div>
                    {productoBuscado != 'Seleccionar cantidad' ? <div className="detalle-prod-agrega">{productoBuscado}</div> : <div className="detalle-tit-desc">Productos</div>}
                    
                    {cantidadAgregada === 0 ? <Contador agrega={controlAgregaProducto} stock={Stock} id={id}/> : <Link to='/Carrito/' className="btnTerminarCompra">Terminar Compra</Link>}
                    
                </div>
            </div>
            
            
        </div>
    )
}


export default ItemDetail