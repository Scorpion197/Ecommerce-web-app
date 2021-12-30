import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers 
import cartReducer from './cart/cartReducer';

const store = createStore(cartReducer, composeWithDevTools(applyMiddleware(logger, thunk)));


export default store;