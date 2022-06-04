const Item = ({Nombre, Precio, Descripcion, Imagen}) => {
    return(
        <div className="card">
            <img className="card-image" src={Imagen} alt={Nombre}/>
            <h1 className="card-title">{Nombre}</h1>
            <h2 className="card-price">S/.{Precio}</h2>
        </div>
    )
}
export default Item