import logo from './logo.svg';
import './App.css';
import '@mui/material/Button';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
//components
import MainUI from './components/MainUI/MainUI';
//hooks 
import { useState, useEffect } from 'react';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//styles 
import { GlobalStyle } from './GlobalStyle';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Josefin',
      'sans',
    ].join(','),
  },});


function App() {

  

  return (
    <Router>

      <Route exact path="/">  
      
        <MainUI/>

      </Route>
    </Router>
  );
}

export default App;