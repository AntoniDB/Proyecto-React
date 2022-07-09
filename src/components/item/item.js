import {Link} from 'react-router-dom'

const Item = ({id,Nombre, Precio, Descripcion, Imagen}) => {
    
    return(
        <div className="card">
            <img className="card-image" src={Imagen} alt={Nombre}/>
            <h1 className="card-title">{Nombre}</h1>
            <h2 className="card-price">S/.{Precio}</h2>
            <Link to={`/Detalle/${id}`} className="card-detalle">Ver detalle</Link>
        </div>
    )
}
export default Item