import './HamburgerMenu.css'

const HamburgerMenu = () => {
    return (
        <nav>
        <div className="navbar">
            <div className="container nav-container">
                <input className="checkbox" type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
                </div>  
            <div className="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Settings</a></li>
            </div>
            </div>
        </div>
        </nav>
    )
}

export default HamburgerMenu