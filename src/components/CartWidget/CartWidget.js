import '../../styles/main.css';
import {useContext} from 'react'
import CartContexto from '../../context/CartContext/CartContext';
import {Link, NavLink} from 'react-router-dom'

const CartWidget = () => {

    const {obtenerCartCantidad} = useContext(CartContexto)
    const totalCantidad = obtenerCartCantidad()

    return(
        <Link to='/Carrito/' className="navCarBtn">
        <div>
            <img src="/images/carro.svg" className="navImg" alt="Carro de compras" />
            <label className="navImgCount">{totalCantidad}</label>
        </div>
        </Link>
    )
} 
export default CartWidget