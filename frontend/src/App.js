import logo from './logo.svg';
import './App.css';
import '@mui/material/Button';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
    </div>
  );
}

export default App;