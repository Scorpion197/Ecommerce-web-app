import logo from './logo.svg';
import './App.css';
import '@mui/material/Button';
//components
import Home from './components/HomeImage/Home';
import MobileMenu from './components/MobileMenu/MobileMenu';
import CustomGrid from './components/CustomGrid/CustomGrid';

//hooks 
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
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

  const [showMobileMenu, setMobileMenu] = useState(false);

  const displayMobileMenu = () => {

    if (window.innerWidth <= 707) 
      setMobileMenu(true);
   else 
    setMobileMenu(false);
  }

  useEffect(() => {

    displayMobileMenu();
  }, [])


  window.addEventListener('resize', displayMobileMenu);

  return (
    <div className="App">
      
     {
       showMobileMenu ? <MobileMenu/> : <Navbar/>
     }

      <Home/>
    </div>
  );
}

export default App;