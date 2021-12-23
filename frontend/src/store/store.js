import { createStore } from 'redux';

//reducers 
import cartReducer from './cart/cartReducer';

const store = createStore(cartReducer);

export default store;