import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, IconButton, Grow } from '@mui/material';
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
        background: 'linear-gradient(45deg, #F9CB43, #FF6F00)', // Gradient background
        backdropFilter: 'blur(10px)',
        boxShadow: 8,
        borderRadius: '0 0 40px 40px', // Rounded bottom corners
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <LocalDiningIcon sx={{ color: 'white', fontSize: '2.5rem', mr: 1 }} />
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '2rem',
              letterSpacing: '2px',
              '&:hover': { color: '#FF6F00', transition: 'color 0.3s ease' }, // Hover effect
            }}
          >
            HungryHub
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex', color: 'black' } }}>
          <Button
            color="inherit"
            component={Link}
            to="/orderonline"
            sx={{
              mr: 2,
              fontWeight: '700',
              fontSize: '1.1rem',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: '#FF6F00',
                color: 'white',
                borderRadius: '5px',
                transition: 'background-color 0.3s ease',
              },
            }}
          >
            Menu
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/blog"
            sx={{
              mr: 2,
              fontWeight: '700',
              fontSize: '1.1rem',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: '#FF6F00',
                color: 'white',
                borderRadius: '5px',
                transition: 'background-color 0.3s ease',
              },
            }}
          >
            Chef’s Corner
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/admin"
            sx={{
              mr: 2,
              fontWeight: '700',
              fontSize: '1.1rem',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: '#FF6F00',
                color: 'white',
                borderRadius: '5px',
                transition: 'background-color 0.3s ease',
              },
            }}
          >
            Admin Login
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contactus"
            sx={{
              mr: 2,
              fontWeight: '700',
              fontSize: '1.1rem',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: '#FF6F00',
                color: 'white',
                borderRadius: '5px',
                transition: 'background-color 0.3s ease',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            sx={{
              '&:hover': { color: '#FF6F00' }, // Menu icon hover effect
              transition: 'color 0.3s ease',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      TransitionComponent={Grow}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        elevation: 6,
        sx: {
          mt: 1.5,
          minWidth: 180,
          borderRadius: '12px',
          backgroundColor: '#fff5ee',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          '& .MuiMenuItem-root': {
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#333',
            padding: '12px 20px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#ef4423',
              color: 'white',
              transform: 'translateX(4px)',
              borderRadius: '8px',
            },
            '&:active': {
              transform: 'scale(0.98)',
              backgroundColor: '#d6381d',
            }
          }
        }
      }}
    >
      <MenuItem component={Link} to="/orderonline" onClick={handleClose}>
        🍽️ Menu
      </MenuItem>
      <MenuItem component={Link} to="/blog" onClick={handleClose}>
        👨‍🍳 Chef’s Corner
      </MenuItem>
      <MenuItem component={Link} to="/admin" onClick={handleClose}>
        🔐 Admin Login
      </MenuItem>
      <MenuItem component={Link} to="/contactus" onClick={handleClose}>
        📞 Contact Us
      </MenuItem>
    </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
