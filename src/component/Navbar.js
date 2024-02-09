import { Link } from "react-router-dom";
import '../style/Nav.scss';

function Navbar(){
    return(
        <div className="navbar">
            <Link to='/'>Login</Link>
            <Link to='/admin'>Admin</Link>
            <Link to='/SupAd'>SuperAdmin</Link>
        </div>
    )
}

export default Navbar;