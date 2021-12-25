import * as actionTypes from './actionTypes';

const initialState = {

    count : 0,
    payload: [
        {
            productName: '', 
            productPrice: '',
        },
    ]
}

const cartReducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.ADD_TO_CART:

            return {

                ...state, 
                count: state.count + 1,
                payload: [{

                    productName: action.productName, 
                    productPrice: action.productPrice,
                }, ...state.payload]
                
            }
        
        default:
            return state;

    }
}

export default cartReducer;


