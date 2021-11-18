import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import '@mui/material/Button';

//components
import MainUI from './components/MainUI/MainUI';
import LoginUI from './components/AuthUI/LoginUI';
import RegisterUI from './components/AuthUI/RegisterUI';
import ItemUI from './components/ItemUI/ItemUI';
import Test from './components/Test';

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

    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/'>
            <MainUI/>

          </Route>


          <Route exact path='/test'>
            <Test/>

          </Route>

          <Route exact path='/login'>
            <LoginUI/>

          </Route>

          <Route exact path='/register'>
            <RegisterUI/>

          </Route>

          <Route path='/product/:id' children={
            <ItemUI/>
          }>

          </Route>
          
        </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;