import logo from './logo.svg';
import './App.css';
import '@mui/material/Button';
//components
import Home from './components/HomeImage/Home';
import MobileMenu from './components/MobileMenu/MobileMenu';

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
  return (
    <div className="App">
      
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;