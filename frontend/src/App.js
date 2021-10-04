import logo from './logo.svg';
import './App.css';
import '@mui/material/Button';
//components
import HomeImage from './components/HomeImage/HomeImage';

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
      <HomeImage/>
    </div>
  );
}

export default App;