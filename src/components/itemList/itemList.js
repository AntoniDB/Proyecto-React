import Item from "../item/item"
import {memo} from 'react'

const ItemList = ({catalogo}) =>{
    return(
        <>
            {catalogo.map(catal =><Item key={catal.Id}{...catal}/>)}
        </>
    )

}
export default memo(ItemList)