import {useState} from 'react'

const Contador = (props) => {
    const [ini, setIni] = useState(props.initial)

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
            <button onClick={suma}>Suma</button>
            <h2>{ini}</h2>
            <button onClick={resta}>Resta</button>
        </div>
    )
    
}

export default Contador;