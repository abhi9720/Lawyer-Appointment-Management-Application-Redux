import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {  Typography } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
      <Typography variant="h4" >
          Navbar
          
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
        <Button component={Link} to="/view-booking" color="inherit">
          View Appointment
        </Button>
        <Button component={Link} to="/" color="inherit">
          Book Appointment
        </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
