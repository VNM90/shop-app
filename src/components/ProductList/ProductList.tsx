import React, { useState, useEffect } from 'react';
import {Product} from "../Product/Product.ts";
import {fetchData} from "../../api/api.ts";
import {Box, Grid, Card, CardContent, CardActions, IconButton, Typography, Link} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


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
        <>
        <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
        <Typography sx={{ typography: "h4" }}>Product List</Typography>
        </Box>
        <Grid
            container
            sx={{ justifyContent: "stretch", alignItems: "stretch", marginLeft: 0.5}}
            spacing= {1.5}
            >
                {products.map((product) => (
                    <Grid item key={product.id}>
                    <Card
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Link href={product.title} sx={{ textDecoration: "none" }}> {product.title}</Link> - ${product.price}
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="add to favorites">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </CardActions>
                    </Card>
                    </Grid>
                ))}
        </Grid>
        </>
    );
};

export default ProductList;
