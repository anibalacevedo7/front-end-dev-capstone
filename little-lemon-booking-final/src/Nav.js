import navlogo from './images/nav-logo.png'
function Nav() {
    return(
        <nav className='Nav'>
            <ul className='Nav-menu'>
                <li>
                    <img src={navlogo} alt="Navigation logo" className='Nav-logo'></img>
                </li>
                <li>
                    <a href="Route" className='Nav-link'>Home</a>
                </li>
                <li>
                    <a href="Route" className='Nav-link'>About</a>
                </li>
                <li>
                    <a href="Route" className='Nav-link'>Menu</a>
                </li>
                <li>
                    <a href="Route" className='Nav-link'>Reservations</a>
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