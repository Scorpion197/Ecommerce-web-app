import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas';
//reducers 
import cartReducer from './cart/cartReducer';

const store = createStore(cartReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;