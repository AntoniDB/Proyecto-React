import CartContexto from '../../context/CartContext/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import {useState, useContext} from 'react'


import {useNotificacion} from '../Notification/Notification'
import {addDoc, collection, writeBatch, getDocs, query, where, documentId} from 'firebase/firestore'
import {db} from '../Services/Firebase/index'

const CarListContainer = () =>{

    const {cart, obtenerTotal, limpiarCarro} = useContext(CartContexto)
    const [cargando, setCargando] = useState(false)
    const total = obtenerTotal()
    const setNotificacion = useNotificacion()

    
    const generaOrden = () =>{
      setCargando(true)
      const listaOrden = {
          Comprador: {
              Nombre: 'Antonio',
              Email: 'antonidb182@gmail.com',
              Telefono: '98465126',
              Direccion: 'No se cual 1920'
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
            const dataCat = doc.data()

            const catal = cart.find(car => car.id === doc.id) ///find devuelve todo lo que coincida con ID
            const catalCant = catal.cantidad

            if(dataCat.Stock >= catalCant){
              batch.update(doc.ref,{Stock: dataCat.Stock - catalCant})
            }else {sinStock.push({id:doc.id, ...dataCat})}
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
          setNotificacion('succes',`Se generó su orden correctamente, el ID de orden es ${id}`,3)
          console.log(id)
        }).catch(error=>{
          if(error.type === 'Sin_Stock'){
            setNotificacion('error',`Producto sin Stock`)
          }else{console.log(error)}
        }).finally(()=>{setCargando(false)})      
    }

    if(cargando){
      return <h2>Se está generando su orden</h2>
    }

    return(
        <>
        <div className="detalle-tit">Carro de Compras</div>
          {cart.length != '' ? cart.map(prod => <ItemCart key={prod.id} {...prod}/>) : <div className="cartMensaje">No tiene productos agregados</div>}
        <div>El total es: {total}</div>
        <button onClick={generaOrden}>Generar orden</button>  
        </>
    )
}

export default CarListContainer