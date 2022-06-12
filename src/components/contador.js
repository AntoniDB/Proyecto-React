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
            <button onClick={suma}>Suma</button>
            <h1>{ini}</h1>
            <button onClick={resta}>Resta</button>
        </div>
    )
    
}

export default Contador;