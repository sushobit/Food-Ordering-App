import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Icon for the menu button
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'; // Food-themed icon
import LocalDiningIcon from '@mui/icons-material/LocalDining'; // Additional food-themed icon

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Open the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Check if the menu is open
  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: '100%',
        padding: '10px 20px',
        backgroundColor: '#FFAB00', // Food-themed color
        backdropFilter: 'blur(10px)',
        boxShadow: 3,
        borderRadius: '0 0 40px 40px', // Rounded bottom corners
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <LocalDiningIcon sx={{ color: 'black', fontSize: '2rem', mr: 1 }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: 'black', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.8rem' }}
          >
            HungryHub
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex', color:'black' } }}>
          <Button color="inherit" component={Link} to="/orderonline" sx={{ mr: 2, fontWeight:'700' }}>
            Order Online
          </Button>
          <Button color="inherit" component={Link} to="/cart" sx={{ mr: 2, fontWeight:'700' }}>
            Cart
          </Button>
          <Button color="inherit" component={Link} to="/admin" sx={{ mr: 2, fontWeight:'700' }}>
            Admin Login
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ '& .MuiMenuItem-root': { fontSize: '1.2rem' } }}
        >
          <MenuItem component={Link} to="/orderonline" onClick={handleClose}>
            Order Online
          </MenuItem>
          <MenuItem component={Link} to="/cart" onClick={handleClose}>
          Cart
          </MenuItem>
          <MenuItem component={Link} to="/admin" onClick={handleClose}>
          Admin Login
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
