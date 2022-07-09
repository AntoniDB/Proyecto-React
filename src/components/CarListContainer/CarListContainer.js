import CartContexto from '../../context/CartContext/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import {useState, useContext} from 'react'

const CarListContainer = () =>{

    const {cart} = useContext(CartContexto)
    
    return(
        <>
        <div className="detalle-tit">Carro de Compras</div>
          {cart.length != '' ? cart.map(prod => <ItemCart key={prod.id} {...prod}/>) : <div className="cartMensaje">No tiene productos agregados</div>}
        </>
    )
}

export default CarListContainer