import * as actionTypes from './actionTypes';

export const addToCart = (productName, productPrice) =>{

    return {

        type: actionTypes.ADD_TO_CART, 
        productName: productName, 
        productPrice: productPrice,
    }

}




