import * as actionTypes from './actionTypes';

const initialState = {

    count : 0,
    payload: [
        {
            productName: '', 
            productPrice: '',
        },
    ],

    postStatus: "FAILED"
}

const cartReducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.ADD_TO_CART:

            const updatedState = {
                
                count:state.count + 1, 
                payload: [
                    {
                        productName: action.productName, 
                        productPrice: action.productPrice
                    }
                ]
            }

            sessionStorage.setItem("cart", JSON.stringify(updatedState));

            return updatedState; 
        
        case actionTypes.ADDED_TO_CART:

            return {

                ...state, 
                postStatus: action.status,

            }

        default:
            return state;

    }
}

export default cartReducer;


