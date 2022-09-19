import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddProduct = () => {

    const [sku, setSKU] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("DVD");
    const [attribute, setAttribute] = useState("");

    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [length, setLength] = useState("");

    const [dataError, setDataError] = useState([]);
    const [emptyError, setEmptyError] = useState([]);
    const [uniqueSKU, setUniqueSKU] = useState(true);

    const redirect = useHistory();


    const formValidation = (e) => {
        if(e.value.length === 0){
            e.classList.add('validationError');
            if(!emptyError.includes(e.id)) setEmptyError([...emptyError, e.id] );
            return false;
        }
        else {
            e.classList.remove('validationError'); 
            if(emptyError.includes(e.id))
                setEmptyError(emptyError.filter((value) => value !== e.id));
        }

        if((e.id === "price" || e.id === "size" || e.id === "weight" 
            || e.id === "height" || e.id === "width" || e.id === "length") && !Number(e.value)){
            e.classList.add('validationError');
            if(!dataError.includes(e.id)) 
                setDataError([...dataError, e.id] );
            return false;
        }
        else {
            if(dataError.includes(e.id))
                setDataError(dataError.filter((value) => value !== e.id));
        }
        


        return true;
    }

    const checkUniqueSKU = (e) => {
        axios.get(`http://localhost:80/api/checkUniqueSKU/get?sku=${e.value}`).then((response) => setUniqueSKU(response.data));
    }

    const handelValidationSKU = (e) => {
        if(formValidation(e)) checkUniqueSKU(e)
    }

    const handelSubmit = () => {
        let validSKU = formValidation(document.getElementById("sku"));
        let validName = formValidation(document.getElementById("name"));
        let validPrice = formValidation(document.getElementById("price"));
        let validAttribute;
        if(type === "DVD"){
            validAttribute = formValidation(document.getElementById("size"));
        }
        else if(type === "Book"){
            validAttribute = formValidation(document.getElementById("weight"));
        }
        else if(type === "Furniture"){
            if(formValidation(document.getElementById("height")) &&
                formValidation(document.getElementById("width")) &&
                formValidation(document.getElementById("length"))){
                    validAttribute = true;
                }
            else {
                validAttribute = false;
            }
        }
        
        if(validSKU && validName && validPrice && validAttribute){
            const product = {sku: sku, name: name, price: price, type: type, attribute: attribute};
            axios.post('http://localhost:80/api/product/save', product).then(function(response){
            console.log(response.data);
            redirect.push("/")
            });
        }
       
    }



    useEffect(()=>{
        if(type === "Furniture")
        setAttribute(`${height}x${width}x${length}`);
    }, [height,width,length,type])

    useEffect(()=>{
        setAttribute("");  
        setHeight("");
        setWidth("");
        setLength("");

        const attribute_inputs = ["size", "weight", "height", "width", "length"];
        attribute_inputs.forEach(input => {
            if((emptyError) => emptyError.includes(input)) setEmptyError((emptyError) => emptyError.filter((value) => value !== input));
            if((dataError) => dataError.includes(input)) setDataError((dataError) => dataError.filter((value) => value !== input));
        });
    }, [type])

    useEffect(()=>{
        if(uniqueSKU) document.getElementById('sku').classList.remove('validationError');
        else document.getElementById('sku').classList.add('validationError');
    }, [uniqueSKU])

    return(
        <div className="add-product">
            <nav className="navbar">
                <h1>Product Add</h1>
                <div className="nav-buttons">
                    <button onClick={handelSubmit}>Save</button>
                    <Link to="/"><button>Cancel</button></Link>
                </div>
            </nav>

            <div className="add-product-form">
                <form id="product_form">
                    <div className="product-input">
                        <label>SKU</label>
                        <input 
                                id ="sku"
                                type="text"
                                required
                                value={sku}
                                onChange={(e) => setSKU(e.target.value)}
                                onBlur={(e) => handelValidationSKU(e.target)}
                            />
                    </div>
                    <div className="product-input">
                        <label>Name</label>
                        <input 
                            id ="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={(e) => formValidation(e.target)}
                        />
                    </div>
                    <div className="product-input">
                        <label>Price($)</label>
                        <input 
                            id ="price"
                            type="text"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            onBlur={(e) => formValidation(e.target)}
                        />
                    </div>
                    <div className="product-input">
                        <label>Type</label>
                        <select id ="productType" onChange={(e) => setType(e.target.value)}>
                            <option value="DVD">DVD</option>
                            <option value="Book">Book</option>
                            <option value="Furniture">Furniture</option>
                        </select>
                    </div>
            
                    { type === "DVD" && 
                    <div id="DVD" className="product-input">
                        <label>Size(MB)</label>
                        <input 
                            id ="size"
                            type="text"
                            required
                            value={attribute}
                            onChange={(e) => setAttribute(e.target.value)}
                            onBlur={(e) => formValidation(e.target)}
                        />
                        <p>*Please provide size in MB.</p>
                    </div>
                    }
                    { type === "Book" &&
                    <div id="Book" className="product-input">
                        <label>Weight(KG)</label>
                        <input 
                            id ="weight"
                            type="text"
                            required
                            value={attribute}
                            onChange={(e) => setAttribute(e.target.value)}
                            onBlur={(e) => formValidation(e.target)}
                        />
                        <p>*Please provide weight in KG.</p>
                    </div> 
                    }
                    { type === "Furniture" &&
                    <div id="Furniture">
                        <div className="product-input">
                            <label>Height(CM)</label>
                            <input 
                                id ="height"
                                type="text"
                                required
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                onBlur={(e) => formValidation(e.target)}
                            />
                        </div>
                        <div className="product-input">
                            <label>Width(CM)</label>
                            <input 
                                id ="width"
                                type="text"
                                required
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                onBlur={(e) => formValidation(e.target)}
                            />
                        </div>
                        <div className="product-input">
                            <label>Length(CM)</label>
                            <input 
                                id ="length"
                                type="text"
                                required
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                onBlur={(e) => formValidation(e.target)}
                            />
                        <p>*Please provide dimensions in HxWxL format.</p>
                        </div>
                    </div> 
                    }
            
                </form>

                {dataError.length > 0 && <div className="validationErrorMessage">Please, provide the data of indicated type</div>}
                {emptyError.length > 0 && <div className="validationErrorMessage">Please, submit required data</div>}
                {uniqueSKU === false && <div className="validationErrorMessage">Please, provide a unique SKU</div>}

            </div>
        </div>
    );
}

export default AddProduct;