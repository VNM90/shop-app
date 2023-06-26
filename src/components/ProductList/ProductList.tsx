import React, { useState, useEffect } from 'react';
import { Product } from "../Product/Product.ts";
import { fetchData } from "../../api/api.ts";
import {Box, Grid, Card, CardContent, CardActions, IconButton, Typography} from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link as RouterLink } from "react-router-dom";
import Pagination from "../Pagination/Pagination.tsx"


const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState(0); // Add a state variable for the current page
    const itemsPerPage = 10; // Set the number of items per page

    useEffect(() => {
        const fetchProductData = async () => {
            const data = await fetchData(); // Fetch all data
            setProducts(data);
            setIsLoading(false);
        };

        fetchProductData();
    }, []);

    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    };

    // Get the products for the current page
    const productsOnPage = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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
            {isLoading && (
                <Grid>
                    <Typography sx={{ typography: "h4" }}>Loading...</Typography>
                </Grid>
            )}
                {!isLoading && productsOnPage.map((product) => (
                    <Grid item key={product.id}>
                    <Card
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <MuiLink component={RouterLink} to={`${product.id}`} sx={{ textDecoration: "none" }}>
                                {product.title}
                            </MuiLink> - ${product.price}
                        </CardContent>

                    <CardActions>
                        <IconButton>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </CardActions>
                    </Card>
                    </Grid>
                ))}
        </Grid>
        <Pagination 
            pageCount={Math.ceil(products.length / itemsPerPage)} 
            currentPage={currentPage} 
            onPageChange={handlePageClick} 
        />
        </>
    );
};

export default ProductList;
