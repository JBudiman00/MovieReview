import '../style/navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className = "navBar">
            <Link to="/" className="link" style={{float: "left"}}>Home</Link>
            <Link to="/" className="link" style={{float: "left"}}>About</Link>
            <Link to="/" className="link" style={{float: "right"}}>Contact</Link>
        </div>
    );
}

export default NavBar;