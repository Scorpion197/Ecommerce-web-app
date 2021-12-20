import React from 'react';
import {Wrapper ,Image} from './Thumb.styles';

// API 
const Thumb = ({image, title, price}) => {

    

    return (

        <Wrapper>
            <Image src={image} alt='watch' />
            <h2> { title }</h2>
            <h3 className="price"> {price} $</h3>
            <button>Add to cart</button>
        </Wrapper>
    )
}


export default Thumb;