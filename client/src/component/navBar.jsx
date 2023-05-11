import '../style/navBar.css'

const NavBar = () => {
    return (
        <div className = "navBar">
            <a href="localhost:3000" className="link" style={{float: "left"}}>Home</a>
            <a href="localhost:3000" className="link" style={{float: "left"}}>About</a>
            <a href="localhost:3000" className="link" style={{float: "right"}}>Contact</a>
        </div>
    );
}

export default NavBar;