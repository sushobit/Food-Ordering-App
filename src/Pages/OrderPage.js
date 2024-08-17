import React from 'react';
import {
  Typography, Button, TextField, Grid, Card, CardContent, Box, IconButton, Tooltip, Dialog, DialogActions, DialogContent
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { motion } from 'framer-motion';

const availableCoupons = {
  'DISCOUNT10': '10% off',
  'DISCOUNT20': '20% off',
  'DISCOUNT30': '30% off'
};

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedItems = [] } = location.state || {};

  const totalAmount = selectedItems.reduce((acc, item) => acc + item.price, 0);
  const [total, setTotal] = React.useState(totalAmount);
  const [couponCode, setCouponCode] = React.useState('');
  const [discount, setDiscount] = React.useState(0);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState('');
  
  const handleApplyCoupon = () => {
    if (availableCoupons[couponCode]) {
      const discountPercentage = parseInt(couponCode.replace('DISCOUNT', ''));
      setDiscount((discountPercentage / 100) * totalAmount);
      setDialogMessage(`Applied ${discountPercentage}% discount!`);
    } else {
      setDialogMessage('Invalid coupon code');
    }
    setDialogOpen(true);
  };

  const handlePlaceOrder = () => {
    navigate('/order-form', { state: { selectedItems, total: total - discount } });
  };

  return (
    <div style={{ background: 'linear-gradient(90deg, #F3E5AB, #A2C2E3)', minHeight: '100vh', padding: '20px' }}>
      <Box
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '15px',
          padding: '30px',
          marginTop: '180px',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#0277BD' }}>
          Order Summary
        </Typography>

        <Grid container spacing={2}>
          {selectedItems.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card sx={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  backgroundColor: '#1565C0',
                  color: '#ffffff',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease-in-out',
                }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                    <Typography variant="body2" sx={{ fontStyle: 'italic' }}>{item.category}</Typography>
                    <Typography variant="h5">Price: <span style={{
                      color: '#FFEB3B',
                      fontWeight: 'bold',
                      fontSize: '1.6rem',
                      textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)'
                    }}>₹{item.price.toFixed(2)}</span></Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" gutterBottom align="center" sx={{ marginTop: '20px', color: '#0277BD' }}>
          Total Amount: <span style={{fontWeight:'800'}}>₹{(total - discount).toFixed(2)}</span>
        </Typography>

        <TextField
          label="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{
            endAdornment: (
              <Tooltip title="Apply Coupon">
                <IconButton onClick={handleApplyCoupon} color="primary">
                  <AttachMoneyIcon />
                </IconButton>
              </Tooltip>
            ),
          }}
        />

        <Button
          variant="contained"
          color="secondary"
          onClick={handleApplyCoupon}
          sx={{ marginTop: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        >
          Apply Coupon
        </Button>

        <Typography variant="h6" gutterBottom sx={{ marginTop: '20px', color: '#0277BD' }}>
          Available Coupons:
        </Typography>
        <ul style={{ paddingLeft: '60px', color: '#0277BD' }}>
          {Object.entries(availableCoupons).map(([code, description]) => (
            <li key={code}><LocalOfferIcon /> {code}: {description}</li>
          ))}
        </ul>

        <Button
          variant="contained"
          color="primary"
          onClick={handlePlaceOrder}
          sx={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          disabled={selectedItems.length === 0}
        >
          Place Your Order
        </Button>

        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth="sm"
          sx={{
            textAlign: 'center',
            '& .MuiDialogContent-root': {
              padding: '50px',
            },
            '& .MuiTypography-root': {
              fontSize: '2rem',
              fontWeight: 'bold',
              color: dialogMessage.startsWith('Invalid') ? 'error.main' : 'success.main',
            }
          }}
        >
          <DialogContent>
            <Typography>
              {dialogMessage}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default OrderPage;
