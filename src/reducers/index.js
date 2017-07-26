import {combineReducers} from 'redux';
import popularProductReducer from './products/PopularProductReducer';
import newProductReducer from './products/NewProductReducer';
import productDetailReducer from './products/ProductDetailReducer';

const rootReducer = combineReducers({
  popularProducts: popularProductReducer,
  newProducts: newProductReducer,
  productDetail: productDetailReducer,
})

export default rootReducer;