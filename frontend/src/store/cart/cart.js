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

export const postAddToCart = (productName, productPrice) => {

    const email = sessionStorage.getItem('email');
    return (dispatch) => {

        dispatch(addToCart(productName, productPrice));

        //REST API endpoint
        axios.post('http://localhost:8000/api/auth/add-to-cart', {

            email:email, 
            count: "2", 

        })

        .then(response => console.log(response.status))
        .catch(error => console.log(error));
    }

}




