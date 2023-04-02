import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './navbar.styles.scss';

const Navbar = () => {
    return (
       <div className='navbar-container'>
            <Link to="/">
                <Logo className='logo' />
            </Link>
       </div>
    );
}
export default Navbar;
