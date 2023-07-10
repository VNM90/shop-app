import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Grid, Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { removeFromCart, setCart } from "../Cart/cartSlice";
import { Product } from "../Product/Product.ts";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";


const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.products);
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();
  // console.log(cartItems);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch(setCart(parsedCart));
    }
  }, [dispatch]);

  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <Grid>
      {cartItems.map((product) => (
        <Grid item key={product.id}>
          <Card>
            <CardContent>
            <Typography sx={{ typography: "h5" }}>
                {product.title}
              </Typography>
              <Typography sx={{ typography: "p" }}>
                ${product.price}
              </Typography>
              <Typography sx={{ typography: "p" }}>
                Quantity: {product.quantity}
              </Typography>
            </CardContent>
            <IconButton onClick={() => handleRemoveFromCart(product)}>
              <DeleteForeverIcon />
            </IconButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cart;
