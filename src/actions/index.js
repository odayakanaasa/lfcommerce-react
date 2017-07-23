import * as cart from './constants/Cart';

export function addProduct(product){
  return {type:cart.ADD_PRODUCT};
}

export function removeProduct(){
  return {type:cart.REMOVE_PRODUCT};
}

export function increaseProduct(){
  return {type:cart.INC_PRODUCT};
}

export function decreaseProduct(){
  return {type:cart.DEC_PRODUCT};
}