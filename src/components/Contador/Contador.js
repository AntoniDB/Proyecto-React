import CartContexto from '../../context/CartContext/CartContext'
import {useContext ,useState} from 'react'

const Contador = ({agrega,stock,id}) => {
    const [ini, setIni] = useState(0)
    const {buscaProducto} = useContext(CartContexto)
    const productoBuscado = buscaProducto(id)

    const suma = () =>{
        if ((ini<10)&(ini<stock)){
        setIni(ini + 1)
        }
    }
    const resta = () =>{
        if(ini>0){
            setIni(ini - 1)
        }
    }
    return (
        <>
        <div className="container">
        <button onClick={suma} className="detalle-btn">+</button>
            <h2 className="detalle-btn-dat">{ini}</h2>
            <button onClick={resta} className="detalle-btn">-</button>
        </div>
        <div>
            {ini != 0 ? <button onClick={() => agrega(ini)} className="btnAgregarCarro"><ion-icon size="small" name="cart-outline"></ion-icon>Agregar al Carrito</button> : <div className="detalle-prod-agrega">{productoBuscado}</div>}
        </div>
        </>
    )
    
}

export default Contador;