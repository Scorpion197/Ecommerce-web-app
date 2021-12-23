import * as actionTypes from './actionTypes';


const initialState = {

    products : [],
}

const cartReducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.ADD_TO_CART:

            return {

                ...state, 
                payload: action.payload,
            }
        
        default:
            return state;

    }
}

export default cartReducer;


