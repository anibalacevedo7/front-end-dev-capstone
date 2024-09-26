import navlogo from './images/nav-logo.png'
import {Link} from 'react-scroll';

function Nav() {
    return(
        <nav className='Nav'>
            <ul className='Nav-menu'>
                <li>
                    <img src={navlogo} alt="Navigation logo" className='Nav-logo'></img>
                </li>
                <li>
                    <Link to="call-to-action-section" smooth={true} duration={400} spy={true} offset={-100} className='Nav-link' activeClass="Active-link">Home</Link>
                </li>
                <li>
                    <Link to="none" smooth={true} duration={400} spy={true} offset={-100} className='Nav-link' activeClass="Active-link">About</Link>
                </li>
                <li>
                    <Link to="specials-section" smooth={true} duration={400} spy={true} offset={-100} className='Nav-link' activeClass="Active-link">Menu</Link>
                </li>
                <li>
                    <Link to="booking-section" smooth={true} duration={400} spy={true} offset={-100} className='Nav-link' activeClass="Active-link">Reservations</Link>
                </li>
                <li>
                    <a href="Route" className='Nav-link'>Order Online</a>
                </li>
                <li>
                    <a href="Route" className='Nav-link'>Log In</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;