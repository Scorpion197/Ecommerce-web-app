import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import {ADD_TO_CART } from './store/cart/actionTypes';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addToCart(action) {
   try {
      yield put({type: ADD_TO_CART, ProductName: action.ProductName, productPrice:action.productPrice});
   } catch (e) {
      yield put({type: ADD_TO_CART, message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(ADD_TO_CART, addToCart);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

export default mySaga;