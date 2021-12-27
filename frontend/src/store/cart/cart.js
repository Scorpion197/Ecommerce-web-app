import * as actionTypes from './actionTypes';

export const addToCart = (productName, productPrice) =>{

    
    return {

        type: actionTypes.ADD_TO_CART, 
        productName: productName, 
        productPrice: productPrice,
    }

}

export const postAddToCart = (productName, productPrice) => {

    return dispatch => {

        dispatch(addToCart(productName, productPrice));
        
    }

}




