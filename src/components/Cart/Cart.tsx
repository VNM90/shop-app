// Cart.tsx
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.products);
  console.log(cartItems);

  return (
    <Grid>
      {cartItems.map((product) => (
        <Grid item key={product.id}>
          <Card>
            <CardContent>
            <Typography sx={{ typography: "h5" }}>
                {product.title}
              </Typography>
              <Typography sx={{ typography: "body2" }}>
                ${product.price}
              </Typography>
              <Typography sx={{ typography: "body2" }}>
                Quantity: {product.quantity}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cart;
