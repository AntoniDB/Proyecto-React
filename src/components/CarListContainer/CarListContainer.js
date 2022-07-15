import CartContexto from '../../context/CartContext/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import {Link} from 'react-router-dom'
import CartFormCli from '../CartFormCli/CartFormCli'
import {useState, useContext} from 'react'
import {useNotificacion} from '../../Notification/Notification'
import {addDoc, collection, writeBatch, getDocs, query, where, documentId} from 'firebase/firestore'
import {db} from '../../Services/Firebase/index'


const CarListContainer = () =>{

    const {cart, obtenerTotal, limpiarCarro,obtenerCartCantidad} = useContext(CartContexto)
    const [cargando, setCargando] = useState(false)

    const total = obtenerTotal()
    const canTotal = obtenerCartCantidad()
    
    const setNotificacion = useNotificacion()

    const generaOrden = () =>{
      setCargando(true)
      const listaOrden = {
          Comprador: {
            Nombre: 'Antonio',
            Apellido: 'Dios',
            Numero: 974612906,
            Correo: 'antoni@dios.com'
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
          setNotificacion('succes',`Se generó su orden correctamente, el ID de orden es ${id}`,3)
          console.log(id)
        }).catch(error=>{
          if(error.type === 'Sin_Stock'){
            setNotificacion('error',`Producto sin Stock`,3)
          }else{console.log(error)}
        }).finally(()=>{setCargando(false)})      
    }

    if(cargando){
      return <h2>Se está generando su orden</h2>
    }
   

    return(
        <>
        <div className="detalle-tit">Carro de Compras</div>
        <h2 className="itemTitCartDetalle">Productos agregados</h2>
        {cart.length != '' ? cart.map(prod => <ItemCart key={prod.id} {...prod}/>) : <div className="cartMensaje">No tiene productos agregados</div>}
        {cart.length != '' ? 
        <div className="container">
          <div className="resumOrden">
            <div className="itemTitCartDetalle">Resumen de Compra</div>
            <div className="resumOrdenLabel">Cant Productos:&nbsp;{canTotal}</div>
            <div className="resumOrdenLabel">SubTotal: S/{total - 10}</div>
            <div className="resumOrdenLabel">Envío: S/10</div>
            <div className="resumOrdenLabel">Total: S/{total}</div>
            <button className="btnGenerarOrden" onClick={generaOrden}>Procesar Compra</button>
            <Link to='/Carrito/Generarcompra/' className="btnGenerarOrden">Procesar Compra</Link>
            
          </div>
        </div> : null}
        
          
        </>
    )
}

export default CarListContainer