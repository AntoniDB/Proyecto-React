import '../../styles/main.css';
import {getCatalogo} from '../../asyncmocj'

const ItemListContainer = (props) => {
    return(
        <div className="divSaludo"><h1>{props.saludo}&nbsp;{props.nombre}</h1></div>
    )
}
export default ItemListContainer;