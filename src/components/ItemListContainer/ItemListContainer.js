import '../../styles/main.css';

const ItemListContainer = (props) => {
    return(
        <div className="divSaludo"><h1>{props.saludo}&nbsp;{props.nombre}</h1></div>
    )
}
export default ItemListContainer;