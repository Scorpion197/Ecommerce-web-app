import React from 'react';
import {Wrapper ,Image} from './Thumb.styles';


const Thumb = ({image, title, price}) => {


    return (

        <Wrapper>

            <Image src={image} alt='watch' />
            <h2> { title }</h2>
            <h3 className="price"> {price} $</h3>

        </Wrapper>
    )
}


export default Thumb;