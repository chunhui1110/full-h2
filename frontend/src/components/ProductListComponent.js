import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductListComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect ( () => {
        productService,getProducts().then( (res) => {
            setProducts(res.data);
        } );
    }, [] );
    
    return (
        <div>
            <h2 className = "text-center">product</h2>
            <div>
                <Link to = "/add-product" className="btn btn-primary">Add Product</Link>
            </div>
            <div className = "row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Product Price</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key = {Product.id}>
                                <td>{Product.name}</td>
                                <td>{Product.description}</td>
                                <td>{Product.price}</td>
                                <td>
                                    <Link to = {`/update-product/${product.id}`}>Update</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductListComponent;