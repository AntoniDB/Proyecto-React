import Contador from '../Contador/Contador'

const ItemDetail = ({Id,Nombre,Precio,Descripcion,Imagen,Categoria}) =>{
    return(
        <div className="container">
            <div className="container">
                <div className="detalle-tit">{Nombre}</div>
                <div className="detalle-cat">{Categoria}</div>
            </div>
            <div className="container">
                <img src={Imagen} className="detalle-img" alt={Nombre} />
                <div className="detalle-container">
                    <div className="detalle-tit-sec">{Nombre}</div>
                    <div className="detalle-precio">S/.&nbsp;{Precio}</div>
                    <div className="detalle-tit-desc">{Descripcion}</div>
                    <Contador />
                    <button className="detalle-btn">Agregar a carrito</button>        
                </div>
            </div>
            
            
        </div>
    )
}


export default ItemDetail