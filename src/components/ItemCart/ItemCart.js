import {useContext} from 'react'
import CartContexto from '../../context/CartContext/CartContext'

const ItemCart = ({id, Nombre, Precio, cantidad}) =>{

    const {eliminProducto} = useContext(CartContexto)

    const handleElimItem = () =>{
        eliminProducto(id)
    }

    return(
        <>
        <div className="container">
            <div className="cartDetalle">
                <div className="itemTitCartDetalle">{Nombre}</div>
                <div className="itemCartDetalle">Precio:&nbsp;S/.{Precio}</div>
                <div className="itemCartDetalle">Cantidad:&nbsp;{cantidad}</div>
                <div className="itemCartDetalle">SubTotal:&nbsp;S/.{cantidad * Precio}</div>
                <button className="btnEliminarCompra" onClick={handleElimItem}><ion-icon name="trash-outline"></ion-icon>Eliminar</button>
            </div>
        </div>
        </>
    )

}
export default ItemCart