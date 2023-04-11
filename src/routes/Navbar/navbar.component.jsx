import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Outlet } from 'react-router-dom';
import './navbar.styles.scss';

const Navbar = () => {
    return (
        <>
            <div className='navbar-container'>
                <Link to="/" className='logo'>
                    <Logo />
                </Link>
            </div>
            <Outlet />
        </>
    );
}
export default Navbar;
