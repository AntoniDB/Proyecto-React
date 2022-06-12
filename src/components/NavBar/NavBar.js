import '../../styles/main.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom'


const NavBar = () => {
    return(
        <nav className="nav">
            <div className="navMenu">
                <Link to='/' className="navTit">MDLPastelería</Link>
                <NavLink to='/Categoria/Fondant' className={({isActive}) => isActive ? 'navItemActivo' : 'navItem'}>Tortas Fondant</NavLink>
                <NavLink to='/Categoria/Buttercream' className={({isActive}) => isActive ? 'navItemActivo' : 'navItem'}>Tortas Buttercream</NavLink>
                <NavLink to='/Categoria/CupCakes' className={({isActive}) => isActive ? 'navItemActivo' : 'navItem'}>CupCakes</NavLink>
                <NavLink to='/Categoria/Catering' className={({isActive}) => isActive ? 'navItemActivo' : 'navItem'}>Catering</NavLink>
                <NavLink to='/' className="navItem">Catálogo</NavLink>
                <NavLink to='/' className="navItem">Simulador de presupuestos</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;