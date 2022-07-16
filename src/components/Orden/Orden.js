
const Orden = ({id, Comprador, Items}) => {
    return(
        <div>
            <div>{id}</div>
            <div>{Comprador.Nombrecli}</div>
            <div>{Comprador.Apellidocli}</div>
            <div>{Comprador.Email}</div>
            <div>{Comprador.Telefono}</div>
            {Items.map(person => <p key={person.id}>{`${person.Precio},${person.Nombre}, ${person.cantidad} `}</p>)}
        </div>
    )
}

export default Orden