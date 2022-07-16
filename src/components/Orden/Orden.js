
const Orden = ({id, Comprador, Items}) => {
    return(
        <div className="container">
        <div className="boletaOrden">
            <div className="titBoleta">Boleta MDLPastelería</div>
            <div className="tarDatosBoletaOrden">Número orden:</div><div className="datosBoletaOrdenId">{id}</div>
            <div className="tarDatosBoletaOrden">Nombre Cliente:</div><div className="datosBoletaOrden">{Comprador.Nombrecli}</div>
            <div className="tarDatosBoletaOrden">Apellido Cliente:</div><div className="datosBoletaOrden">{Comprador.Apellidocli}</div>
            <div className="tarDatosBoletaOrden">Email:</div><div className="datosBoletaOrden">{Comprador.Email}</div>
            <div className="tarDatosBoletaOrden">Teléfono:</div><div className="datosBoletaOrden">{Comprador.Telefono}</div>
            <div className="titProBoleta">Detalle Productos</div>
            {Items.map(person =>
                                
                <ul key={person.id}>
                    <li className="datosBoletaOrden">{`Producto: ${person.Nombre}`}</li>
                    <li className="datosBoletaOrden">{`Cantidad: ${person.cantidad}`}</li>
                    <li className="datosBoletaOrden">{`Precio: ${person.Precio}`}</li>
                </ul>)}
        </div>
        </div>
    )
}

export default Orden