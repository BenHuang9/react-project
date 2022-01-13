import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import logo from '../images/logo.png'
function Header() {
    return (
        <header>
            <h1><Link to='/'>
                <img src={logo} alt="Logo" className='logo'/>
                </Link></h1>
            <NavMain />
        </header>
    )
}

export default Header;
