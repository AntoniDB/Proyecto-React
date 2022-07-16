import React, {Fragment, useState} from 'react';
import CartContexto from '../../context/CartContext/CartContext'


import {useNotificacion} from '../../Notification/Notification'
import ItemCart from '../ItemCart/ItemCart'
import { useEffect, useContext } from 'react';
import {addDoc, collection, writeBatch, getDocs, query, where, documentId} from 'firebase/firestore'
import {db} from '../../Services/Firebase/index'
import { useForm } from 'react-hook-form'
import {Link, Navigate} from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'


const CartFormCli = () =>{
    
    const {cart, obtenerTotal, obtenerCartCantidad, limpiarCarro} = useContext(CartContexto)
    
    const { register, handleSubmit } = useForm();
    const [dato, setDato] = useState([]);
    const total = obtenerTotal()
    const canTotal = obtenerCartCantidad()
    const setNotificacion = useNotificacion()
    const [cargando, setCargando] = useState(false)

    
    const ordenPage = useNavigate();
    
    
    

    const handleInputChange = (event) => {
        setDato({
            ...dato,
            [event.target.name] : event.target.value
        })
    }
    console.log(dato)
    const limpiarDato = () =>{
        setDato([])
    }

    const generarOrden = () => {
            setCargando(true)
        const listaOrden = {
            Comprador: {
                Nombrecli: dato.Nombre,
                Apellidocli: dato.Apellido,
                Telefono: parseInt(dato.Telefono),
                Email: dato.Email
            },
            Items: cart,
            total: total
        }

      const batch = writeBatch(db)
      const sinStock = []
      const idsReque = cart.map(response => response.id) ///solo devuelve un campo de cart, en este caso id
      const coleccionCatalogo = collection(db, 'Catalogo')

      getDocs(query(coleccionCatalogo, where(documentId(), 'in', idsReque)))
        .then(response => {
          response.docs.forEach(doc =>{
            const dataDoc = doc.data()

            const cartData = cart.find(car => car.id === doc.id) ///find devuelve todo lo que coincida con ID
            const cartDataCant = cartData.cantidad

            if(dataDoc.Stock >= cartDataCant){
              batch.update(doc.ref,{Stock: dataDoc.Stock - cartDataCant})
            }else {sinStock.push({id:doc.id, ...dataDoc})}
          })
        }).then(()=>{
          if(sinStock.length === 0){
              const coleccionRef = collection(db, 'Ordenes')
              return addDoc(coleccionRef, listaOrden)
          }else{
            return Promise.reject({type: 'Sin_Stock', productos: sinStock})
          }
        }).then(({id}) =>{
          batch.commit()
          limpiarCarro()
          limpiarDato()
          setNotificacion('succes',`Se generó su orden correctamente, el ID de orden es ${id}`,3)
          
          ordenPage(`/Carrito/OrdenCompra/${id}`)
          
          
          
          
          
        }).catch(error=>{
          if(error.type === 'Sin_Stock'){
            setNotificacion('error',`Producto sin Stock`,3)
          }else{console.log(error)}
        }).finally(()=>{setCargando(false)})
           
        }
    if(cargando){
        return(
                <div className="container"><div className="spin-preloader"></div></div>
            )
    } 
        return (
            <>
            <div className="detalle-tit">Detalle de Compra</div>
            {cart.length != '' ? 
            
                <form onSubmit={handleSubmit(generarOrden)}>
                    <div className="container"> 
                        <div className="frmCarro" onChange={handleInputChange}>
                            <h2 className="itemTitCartDetalle">Registrar datos para la completar la orden</h2>
                            <input type="text" placeholder="Nombre" className="frmCarroInput"  {...register("Nombre", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                            <input type="text" placeholder="Apellido" className="frmCarroInput" {...register("Apellido", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                            <input type="number" placeholder="Número de contacto" className="frmCarroInput" {...register("Telefono", { required: true, minLength: 9, maxLength: 11 })} />
                            <input type="email" placeholder="Email" className="frmCarroInput" {...register("Email", { required: true, maxLength: 30 })} />
                        </div>
                                        
                        <div className="resumOrden">
                            <div className="itemTitCartDetalle">Resumen de Compra</div>
                            <div className="resumOrdenLabel">Cant Productos:&nbsp;{canTotal}</div>
                            <div className="resumOrdenLabel">SubTotal: S/{total - 10}</div>
                            <div className="resumOrdenLabel">Envío: S/10</div>
                            <div className="resumOrdenLabel">Total: S/{total}</div>
                            <input type="submit" className="btnEnviarOrden" value="Finalizar Compra"/>
                            {/* <button className="btnGenerarOrden" onClick={generaOrden}>Procesar Compra</button> */}
                        </div>
                    </div>
                    <div className="container">
                        <div className="itemTitCartDetalle">Datos productos</div>   
                         {cart.map(response => <ul className="listaOrden" key={response.id}><li>{response.Nombre}</li><li>{response.cantidad}&nbsp;Unidades</li><li>S/.{response.Precio}</li></ul>)}
                        
                    </div>
                </form>
            
             : null}
            </>
            
        )
}

export default CartFormCli


