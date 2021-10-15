import React from 'react';
import {Image} from './Thumb.styles';

const Thumb = ({image}) => {


    return (

        <div>
            <Image src={image} alt='watch' />
        </div>
    )
}

export default Thumb;