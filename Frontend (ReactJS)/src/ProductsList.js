const ProductsList =  ({products, setDeleteList}) => {

    const getSelected = () => {
        const Selected = document.querySelectorAll('input[name=checkbox]:checked');
        setDeleteList(Array.from(Selected).map(x => x.id));
    }

    return( 
        <div className="products-list">
            { products.map((product) => (
                <div className="product-box" key={product.id}>
                    <input type="checkbox" className="delete-checkbox" name="checkbox" id={product.id} value={product.id} onClick={getSelected} />
                    <div className="product-info">
                    {product.sku}<br/>
                    {product.name}<br/>
                    {product.price} $<br/>
                    {product.attributeName}: {product.attribute} {product.attributeUnit}
                    </div>
                </div>
            ))}

        </div>

     );
}

export default ProductsList;