import React, { useEffect } from 'react';

//API 
import API from '../../API';

//stlyes 
import {Wrapper, Text, Image, Button} from './HomeImage.styles';


const Home = ({image}) => {

    const mainImageUrl = 'https://preview.colorlib.com/theme/timezone/assets/img/hero/xwatch.png.pagespeed.ic.LlRtijfV2T.webp';
    API.fetchAllProducts();

    return (

        <Wrapper>
            <Text>
                <h1>Select Your New Perfect Style</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <Button>SHOP NOW</Button>
            </Text>
            <Image src={mainImageUrl} alt='rolex-watch'/>
        </Wrapper>
    )


}

export default Home; 
