import React from 'react';
import { useState, useEffect } from 'react';

//components
import MobileMenu from '../MobileMenu/MobileMenu';
import Navbar from '../Navbar/Navbar';
import Thumb from '../Thumb/Thumb';
import CustomGrid from '../CustomGrid/CustomGrid';

//hooks 
import { useHomeFetch } from '../../Hooks/useHomeFetch';

//router
import { Link } from 'react-router-dom';

//styles 
import { Wrapper} from './HomeAfterLogin.styles';
import ItemDetails from '../ItemUI/ItemDetails';

const HomeAfterLogin = () => {

    const {loading, error, state} = useHomeFetch();
    const [showMobileMenu, setMobileMenu] = useState(false);
    const products = state.products.slice(0, 3);

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
                showMobileMenu ? <MobileMenu /> : <Navbar/>
            }

            <CustomGrid header='Shop Now'>

                {

                    products.map((item, index) => (

                        <Link to={'/product/' + (index + 1)} className='links'>
                            <Thumb 
                                image={item.image_url}
                                title={item.product_name}
                                price={item.product_price}
                                key={index}
                            />
                        </Link>
                    ))
                }

            </CustomGrid>
        </Wrapper>
    )
}

export default HomeAfterLogin;