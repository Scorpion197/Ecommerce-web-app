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
import ItemDetails from './components/ItemUI/ItemDetails';
import Test from './components/Test';
import HomeAfterLogin from "./components/HomeAfterLogin/HomeAfterLogin";
import SecuredRoute from "./components/SecuredRoute/SecuredRoute";

//hooks 
import { useState, useEffect } from 'react';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//styles 
import { GlobalStyle } from './GlobalStyle';

//redux 
import { Provider } from 'react-redux';
import store from "./store/store";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Josefin',
      'sans',
    ].join(','),
  },});


function App() {

  

  return (

    <Provider store={store}>
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
              <ItemDetails/>
            }>

            </Route>
            <SecuredRoute path="/home" component={HomeAfterLogin} />

          </Switch>
        </Router>
          
      </div>
    </Provider>

  );
}

export default App;