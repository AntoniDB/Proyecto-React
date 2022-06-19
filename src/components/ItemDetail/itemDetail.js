import Contador from '../Contador/Contador'
import CartContexto from '../../context/CartContext/CartContext'
import {Link} from 'react-router-dom'

import { createContext, useState, useContext } from 'react'

const ItemDetail = ({Id,Nombre,Precio,Descripcion,Imagen,Categoria, Stock}) =>{

    const {agregaProducto,eliminProducto} = useContext(CartContexto)
    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const controlAgregaProducto = (cantidad) => {
        agregaProducto({Id, Nombre, Precio, cantidad})
        setCantidadAgregada(cantidad)
        console.log(cantidad)
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
                    {cantidadAgregada === 0 ? <Contador agrega={controlAgregaProducto} stock={Stock}/> : <Link to='/Cart' className="btnTerminarCompra">Terminar Compra</Link>}
                    {cantidadAgregada === 0 ? null : <button onClick={() =>eliminProducto(Id)} className="btnEliminarCompra">Eliminar Compra</button>}
                </div>
            </div>
            
            
        </div>
    )
}


export default ItemDetail