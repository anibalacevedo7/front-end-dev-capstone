import footerlogo from './images/footer-logo.png'

function Footer(){
    return(
        <footer className='Footer'>
            <ul className='Footer-menu'>
                <li>
                    <img src={footerlogo} alt="Footer Logo" className='Footer-logo'></img>
                </li>
                <li>
                    <a href="Placeholder" className='Footer-link'>Contact us</a>
                </li>
                <li>
                    <a href="Placeholder" className='Footer-link'>Facebook</a>
                </li>
                <li>
                    <a href="Placeholder" className='Footer-link'>Instagram</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;