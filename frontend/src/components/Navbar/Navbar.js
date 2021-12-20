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
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  const handleCartIconClick = () => {

    console.log(sessionStorage.getItem('token'));

  }

  const handlePersonIconClick = () => {

    console.log("person icon");

  }

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
          <Link to="/" className='main-head'>
            Timezone
          </Link>
        </Typography>
        <Typography variant="h6" className="nav-item" component="div">
          <Link to="/" className="h-link">
            Home
          </Link>        </Typography>
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
          <Link to="/login" className="h-link">
            Login
          </Link>
        </Typography>
        <div className="icons">

          <Link to="/home">
            <ShoppingCartIcon className ="nav-item"color="primary" onClick={handleCartIconClick}/>
          </Link>
          <Link to="/login">
            <PersonIcon className= "nav-item" color="primary" onClick={handlePersonIconClick}/>
          </Link>

        </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;