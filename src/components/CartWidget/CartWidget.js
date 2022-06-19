import '../../styles/main.css';
import {useContext} from 'react'
import CartContexto from '../../context/CartContext/CartContext';

const CartWidget = () => {

    const {obtenerCartCantidad} = useContext(CartContexto)
    const totalCantidad = obtenerCartCantidad()

    return(
        <div>
            <img src="/images/carro.svg" className="navImg" alt="Carro de compras" />
            <label className="navImgCount">{totalCantidad}</label>
        </div>
    )
} 
export default CartWidget