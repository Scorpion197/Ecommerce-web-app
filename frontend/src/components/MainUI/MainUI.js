import {useState, useEffect } from 'react'; 

//components 
import Home from '../HomeImage/Home';
import MobileMenu from '../MobileMenu/MobileMenu';
import Navbar from '../Navbar/Navbar';

// hooks 
import {useHomeFetch} from '../../Hooks/useHomeFetch';


const MainUI = () => {

    const {loading, error, state} = useHomeFetch();
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
        <>
            {
                showMobileMenu ? <MobileMenu/> : <Navbar/>
            }
            <Home/>
        </>

    )
}

export default MainUI;