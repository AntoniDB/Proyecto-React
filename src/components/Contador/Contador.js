import {useState} from 'react'

const Contador = ({agrega,stock}) => {
    const [ini, setIni] = useState(1)

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
            <button onClick={() => agrega(ini)} className="btnAgregarCarro"><ion-icon size="small" name="cart-outline"></ion-icon>Agregar al Carrito</button>
        </div>
        </>
    )
    
}

export default Contador;