import React, {Fragment, useState} from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'

const CartFormCli = ({eje}) =>{
  
        // const [dato, setDato] = useState()
        const [dato, setDato] = useState({})

        const {register, errors, handleSubmit} = useForm();

        const handleInputChange = (event) => {
            setDato({...dato,[event.target.name] : event.target.value})
            eje(dato)
        }
        
        const onSubmit = (data) => {            
            setDato(data)            
        }
        const enviarDatos = (event) => {
            event.preventDefault()
            console.log('enviando datos...' + dato.nombre + ' ' + dato.apellido)
        }
        console.log(dato)
        
        return (
            <Fragment>
                <div className="container">
                    <form className="frmCarro" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="itemTitCartDetalle">Registrar datos para la completar la orden</h2>
                        <input type="text" placeholder="Nombre" className="frmCarroInput" onChange={handleInputChange} name="Nombre"></input>
                        <input type="text" placeholder="Apellido" className="frmCarroInput" onChange={handleInputChange} name="Apellido"></input>
                        <input type="number" placeholder="Número de contacto" className="frmCarroInput" onChange={handleInputChange} name="Numero"></input>
                        <input type="email" placeholder="Email" className="frmCarroInput" onChange={handleInputChange} name="Email"></input>
                    </form>
                </div>
            </Fragment>
        )
}

export default CartFormCli


