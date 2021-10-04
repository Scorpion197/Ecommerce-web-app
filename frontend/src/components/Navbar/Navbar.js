import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.css';
export default function Navbar() {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        </IconButton>
        <Typography variant="h4" className="nav-item main-head" component="div" style={{flexGrow: 1}}>
          Timezone
        </Typography>
        <Typography variant="h6" className="nav-item" component="div">
          Home
        </Typography>
        <Typography variant="h6" className="nav-item" component="div">
          Shop
        </Typography>
        <Typography variant="h6" className="nav-item" component="div">
          About
        </Typography>
        <Typography variant="h6" className="nav-item" component="div">
          Latest
        </Typography>
        <Typography variant="h6" className="nav-item" component="div">
          Contact
        </Typography>
        <Typography variant="h6" className="nav-item" component="div">
          Login
        </Typography>
        <div className="icons">
          <ShoppingCartIcon className ="nav-item"color="primary"/>
          <PersonIcon className= "nav-item" color="primary"/>
        </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}