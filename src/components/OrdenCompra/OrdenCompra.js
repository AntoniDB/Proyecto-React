const OrdenCompra = () =>{

const [cargando, setCargando] = useState(true)


if(cargando){
    return(
        <div className="container"><div className="spin-preloader"></div></div>
        )
}

    return(
        <div>HOli esta es la orden de compra</div>
    )
}

export default OrdenCompra