import { combineReducers } from 'redux';
import productReducer from './product/reducer';
import cartReducer from './cart/recducer'


export default combineReducers({
    product: productReducer,
    cart: cartReducer

  });