import navlogo from './images/nav-logo.png'
function Nav() {
    return(
        <nav>
            <img src={navlogo} alt="Navigation logo"></img>
            <ul>
                <li>
                    <a href="Route">Home</a>
                </li>
                <li>
                    <a href="Route">About</a>
                </li>
                <li>
                    <a href="Route">Menu</a>
                </li>
                <li>
                    <a href="Route">Reservations</a>
                </li>
                <li>
                    <a href="Route">Order Online</a>
                </li>
                <li>
                    <a href="Route">Log In</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;