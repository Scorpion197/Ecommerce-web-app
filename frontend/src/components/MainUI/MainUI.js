import {useState, useEffect } from 'react'; 

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
        <>
            {
                showMobileMenu ? <MobileMenu/> : <Navbar/>
            }
            <Home/>
            <CustomGrid header='New Arrivals'>

                {
<<<<<<< HEAD
                    newArrivals.map(item => (
                        
                        <Thumb image={item.image_url} 
                            title={item.product_name}
                            price={item.product_price}
                        />
=======
                    newArrivals.map((item, index) => (
                        <Link to={'/product/' + (index + 1)}>
                            <Thumb image={item.image_url} 
                                title={item.product_name}
                                price={item.product_price}
                                key={index + "_new_arrivals"}
                            />
                        </Link>

>>>>>>> 9d7c5d8536fb7b9477c13d8bbab6ccc8e65ff1c1
                    ))
                }
            </CustomGrid>
            <GridMaterial/>
        </>

    )
}

export default MainUI;