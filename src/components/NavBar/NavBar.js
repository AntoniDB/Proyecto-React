import '../../styles/main.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return(
        <nav className="nav">
            <div className="navMenu">
                <div className="navTit">MDLPastelería</div>
                <button className="navItem">Tortas Fondant</button>
                <button className="navItem">Tortas Buttercream</button>
                <button className="navItem">Cupcakes</button>
                <button className="navItem">Catering</button>
                <button className="navItem">Tortas Personalizadas</button>
                <button className="navItem">Catálogo</button>
                <button className="navItem">Simulador de presupuestos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;