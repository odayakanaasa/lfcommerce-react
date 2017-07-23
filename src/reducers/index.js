import {combineReducers} from 'redux';
import popularProductReducer from './products/PopularProductReducer';
import newProductReducer from './products/NewProductReducer';

const rootReducer = combineReducers({
  popularProducts: popularProductReducer,
  newProducts: newProductReducer,
})

export default rootReducer;