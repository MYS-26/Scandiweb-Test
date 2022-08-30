import { Link } from "react-router-dom"

const Navbar =  () => {
    return( 
        <nav className="navbar">
            <h1>Product List</h1>
            <div className="nav-buttons">
                <button><Link to="/Add">Add</Link></button>
                <button>Mass Delete</button>
            </div>
        </nav>
     );
}

export default Navbar;