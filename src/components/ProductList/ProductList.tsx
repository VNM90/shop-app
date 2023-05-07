import React, { useState, useEffect } from 'react';
import {Product} from "../Product/Product.ts";
import {fetchData} from "../../api/api.ts";

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProductData = async () => {
            const data = await fetchData();
            setProducts(data);
        };

        fetchProductData();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
