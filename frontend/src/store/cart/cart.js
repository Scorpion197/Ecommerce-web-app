import * as actionTypes from './actionTypes';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export const addToCart = (productName, productPrice) =>{

    
    return {

        type: actionTypes.ADD_TO_CART, 
        productName: productName, 
        productPrice: productPrice,
    }

}

export const addedToCart = (actionStatus) => {

    return {

        type: actionTypes.ADDED_TO_CART, 
        status: actionStatus
    }
}




