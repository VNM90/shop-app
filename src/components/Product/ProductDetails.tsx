import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from "../../api/api.ts";
import { Product } from "./Product.ts";
import {Grid, IconButton, Typography, Card} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductDetails: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProductData = async () => {
            const products = await fetchData();
            const product = products.find((product: Product) => product.id === Number(id));
            // console.log("Fetched data:", product);
            console.log(id);
            console.log(product.id)
            console.log(Number(id))
            setProduct(product);
            setIsLoading(false);
        };

        fetchProductData();
    }, [id]);

    {isLoading && (
        <Grid>
            <Typography sx={{ typography: "h4" }}>Loading...</Typography>
        </Grid>
    )}

    if (!product) {
        return (
            <Grid>
                <Typography sx={{ typography: "h4" }}>Product not found</Typography>
            </Grid>
        );
    }
    console.log("Products state:", product);
    return (
        <Card>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <IconButton>
                <AddShoppingCartIcon />
            </IconButton>
        </Card>
    );
};

export default ProductDetails;