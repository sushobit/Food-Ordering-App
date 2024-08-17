import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box, Paper, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const OrderFormPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedItems, total } = location.state || {};
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pincode: '',
    email: ''
  });
  const [openDialog, setOpenDialog] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to server)
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div style={{ background: 'linear-gradient(90deg, #F3E5AB, #A2C2E3)', minHeight: '100vh', padding: '20px' }}>
      <Container>
        <Box
          sx={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '15px',
            padding: '30px',
            marginTop: '140px',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#0277BD' }}>
            Order Form
          </Typography>

          <Typography variant="h6" gutterBottom align="center" sx={{ color: '#0277BD' }}>
            Total Amount: ₹{total.toFixed(2)}
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  sx={{ marginBottom: '16px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  required
                  sx={{ marginBottom: '16px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  fullWidth
                  required
                  sx={{ marginBottom: '16px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  type="email"
                  required
                  sx={{ marginBottom: '16px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                >
                  Submit Order
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h6" align="center" sx={{ color: '#0277BD' }}>
            <CheckCircleIcon sx={{ fontSize: 40, color: 'green', display: 'block', margin: 'auto' }} />
            Order Placed Successfully!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" align="center">
            Your order has been successfully placed. You will be redirected to the homepage shortly.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrderFormPage;
