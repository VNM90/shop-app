import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from "../../api/api.ts";
import { Product } from "./Product.ts";
import {Grid, IconButton, Typography, Card} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/cartSlice.ts';


const ProductDetails: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart(product));
        }
    };

    useEffect(() => {
        const fetchProductData = async () => {
            const products = await fetchData();
            const product = products.find((product: Product) => product.id === Number(id));
            setProduct(product);
            setIsLoading(false);
        };

        fetchProductData();
    }, [id]);

    if (isLoading) {
        return (
            <Grid>
                <Typography sx={{ typography: "h4" }}>Loading...</Typography>
            </Grid>
        );
    }

    if (!product) {
        return (
            <Grid>
                <Typography sx={{ typography: "h4" }}>Product not found</Typography>
            </Grid>
        );
    }

    return (
        <Card>
            <Typography sx={{ typography: "h1" }}>
                {product.title}
            </Typography>
            <Typography sx={{ typography: "p" }}>
                {product.description}
            </Typography>
            <Typography>${product.price}</Typography>
            <IconButton onClick={handleAddToCart}>
                <AddShoppingCartIcon />
            </IconButton>
        </Card>
    );
};

export default ProductDetails;