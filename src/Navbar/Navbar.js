import { Link } from "react-router-dom";
import './Navbar.css';

const NavBar = () => {
    const username = localStorage.getItem("username");
    const loginStatus = localStorage.getItem("loginStatus");
    return ( 
        <div className="navbar">
            <div className="logo-wrapper">ZEE</div>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/blogs/0">blog</Link></li>
                <li><Link to="/about">about</Link></li>
                { loginStatus ? <li>Hi {username}</li> : <li><Link to="/signup" id="signup"><button> sign up</button></Link></li> }
            </ul>
        </div>
     );
}
 
export default NavBar;