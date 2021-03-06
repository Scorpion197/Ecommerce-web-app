import {useState, useEffect, useContext } from 'react'; 

//components 
import Home from '../HomeImage/Home';
import MobileMenu from '../MobileMenu/MobileMenu';
import Navbar from '../Navbar/Navbar';
import Thumb from '../Thumb/Thumb';
import CustomGrid from '../CustomGrid/CustomGrid';
import GridMaterial from '../Grid/Grid';

// hooks 
import {useHomeFetch} from '../../Hooks/useHomeFetch';
import { Link } from 'react-router-dom';

//styles 
import {Wrapper} from './MainUI.styles';

//redux 
import { useSelector } from 'react-redux';


const MainUI = () => {

    const {loading, error, state} = useHomeFetch();
    const [showMobileMenu, setMobileMenu] = useState(false);
    const newArrivals = state.products.slice(0, 3); // get the first 3 products

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
        <Wrapper>
            {
                showMobileMenu ? <MobileMenu/> : <Navbar/>
            }
            <Home/>
            <CustomGrid header='New Arrivals'>

                {
                    
                    newArrivals.map((item, index) => (
                        <Link to={'/product/' + (index + 1)} className="links">
                            <Thumb image={item.image_url} 
                                title={item.product_name}
                                price={item.product_price}
                                key={index + "_new_arrivals"}
                            />
                        </Link>

                    ))
                }
            </CustomGrid>
            <GridMaterial/>
        </Wrapper>

    )
}

export default MainUI;