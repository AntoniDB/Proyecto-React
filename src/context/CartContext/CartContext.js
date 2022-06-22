import {useState, createContext} from 'react'

const CartContexto = createContext()

export const CarProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    
    const agregaProducto = (productoParaAgregar) =>{
        if(!cart.some(response => response.Id === productoParaAgregar.Id)){
            setCart([...cart, productoParaAgregar])
        }
    }

    const eliminProducto = (productoParaEliminar) =>{
        const carSinProducto = cart.filter(response => response.Id !== productoParaEliminar)
        setCart(carSinProducto)
    }

    const obtenerCartCantidad = () =>{
        let cantidadTotalCart = 0
        cart.forEach(response => {cantidadTotalCart += response.cantidad})
        return cantidadTotalCart
    }

    const buscaProducto = (productoParaBuscar) =>{
        const productoEncontrado = cart.find(response => response.Id === productoParaBuscar)
        let avisoProductoEncontrado = ''
        if(productoEncontrado){avisoProductoEncontrado = 'Producto ya está Agregado'}else{avisoProductoEncontrado='Agregar Producto'}
        return avisoProductoEncontrado
    }

    return(
        <CartContexto.Provider value={{agregaProducto, eliminProducto, obtenerCartCantidad, buscaProducto}}>
            {children}
        </CartContexto.Provider>
    )
}

export default CartContexto
