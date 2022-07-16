import CartContexto from '../../context/CartContext/CartContext'

import ItemCart from '../ItemCart/ItemCart'
import {Link} from 'react-router-dom'
import CartFormCli from '../CartFormCli/CartFormCli'
import {useState, useContext} from 'react'
import {useNotificacion} from '../../Notification/Notification'
import {addDoc, collection, writeBatch, getDocs, query, where, documentId} from 'firebase/firestore'
import {db} from '../../Services/Firebase/index'


const CarListContainer = () =>{

    const {cart, obtenerTotal, limpiarCarro,obtenerCartCantidad} = useContext(CartContexto)
    
    const total = obtenerTotal()
    const canTotal = obtenerCartCantidad()
    
    const setNotificacion = useNotificacion()

      
       

    return(
        <>
        <div className="detalle-tit">Carro de Compras</div>
        <h2 className="itemTitCartDetalle">Productos agregados</h2>
        {cart.length != '' ? cart.map(prod => <ItemCart key={prod.id} {...prod}/>) : <div className="cartMensaje">No tiene productos agregados</div>}
        {cart.length != '' ? 
        <div className="container">
          <div className="resumOrden">
            <div className="itemTitCartDetalle">Resumen de Compra</div>
            <div className="resumOrdenLabel">Cant Productos:&nbsp;{canTotal}</div>
            <div className="resumOrdenLabel">SubTotal: S/{total - 10}</div>
            <div className="resumOrdenLabel">Envío: S/10</div>
            <div className="resumOrdenLabel">Total: S/{total}</div>
            
            <Link to='/Carrito/Generarcompra/' className="btnGenerarOrden">Procesar Compra</Link>
            
          </div>
        </div> : null}
        
          
        </>
    )
}

export default CarListContainer