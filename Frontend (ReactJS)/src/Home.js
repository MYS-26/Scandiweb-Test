import axios from "axios";
import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";
import { Link } from "react-router-dom"

const Home =  () => {

    const [products, setProducts] = useState(null);
    const [deleteList, setDeleteList] = useState(null);
  

    const getProducts = () => {
        axios.get("http://localhost:80/api/products/get").then((response) => setProducts(response.data));
    }

    const deleteProducts = () => {
        const temp = deleteList.toString();
        axios.delete(`http://localhost:80/api/${temp}/delete`).then((response) => {getProducts();console.log(response.data)});
    }

    useEffect(() => {
        getProducts();
    }, [])

    return(
        <div className="home">
        <nav className="navbar">
            <h1>Product List</h1>
            <div className="nav-buttons">
            <Link to="/add-product"><button>ADD</button></Link>
                <button onClick={deleteProducts}>MASS DELETE</button>
            </div>
        </nav>

            {products && <ProductsList products = {products} setDeleteList={setDeleteList}/>}
        </div>
        
     );
}

export default Home;
