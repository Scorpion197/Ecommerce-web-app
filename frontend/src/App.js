import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import '@mui/material/Button';
<<<<<<< HEAD
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
=======


>>>>>>> 9d7c5d8536fb7b9477c13d8bbab6ccc8e65ff1c1
//components
import MainUI from './components/MainUI/MainUI';
import ItemUI from './components/ItemUI/ItemUI';

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
<<<<<<< HEAD
    <Router>

      <Route exact path="/">  
      
        <MainUI/>

      </Route>
    </Router>
=======
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/'>
            <MainUI/>

          </Route>

          <Route path='/product/:id' children={
            <ItemUI/>
          }>

          </Route>
          
        </Switch>
      </Router>
      
     
    </div>
>>>>>>> 9d7c5d8536fb7b9477c13d8bbab6ccc8e65ff1c1
  );
}

export default App;