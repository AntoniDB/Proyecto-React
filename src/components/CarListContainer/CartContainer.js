import CartFormCli from "../CartFormCli/CartFormCli"
import ItemCart from "../ItemCart/ItemCart"

const CartContainer = (cart) => {
    
    return(
        <>
        <CartFormCli />
        {/* {cart.length != '' ? cart.map(prod => <ItemCart key={prod.id} {...prod}/>)} */}
        {cart.map(prod => <ItemCart key={prod.id} {...prod}/>)}
        </>
        
    )
}

export default CartContainer