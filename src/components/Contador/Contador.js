import {useState} from 'react'

const Contador = () => {
    const [ini, setIni] = useState(0)

    const suma = () =>{
        if (ini<10){
        setIni(ini + 1)
        }
    }
    const resta = () =>{
        if(ini>0){
            setIni(ini - 1)
        }
    }
    return (
        <div>
            <button onClick={suma} className="detalle-btn">+</button>
            <h2 className="detalle-btn-dat">{ini}</h2>
            <button onClick={resta} className="detalle-btn">-</button>
        </div>
    )
    
}

export default Contador;