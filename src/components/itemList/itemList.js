import Item from "../item/item"

const ItemList = ({catalogo}) =>{
    return(
        <>
            {catalogo.map(catal =><Item key={catal.Id}{...catal}/>)}
        </>
    )

}
export default ItemList