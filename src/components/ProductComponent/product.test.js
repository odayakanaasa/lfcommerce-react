import React from 'react';
import {shallow, mount, render} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Product from './Product';

test('product component with display a product image, name and price', () => {
  const product = shallow(<Product productName="Test product"
                                  productURL="products/test-product-1"
                                  productImage="http://assets.teenvogue.com/photos/57dfbfe5046b3a2e2a7364bd/master/pass/Kylie-Armytee.jpg"
                                  productPrice='$12.90' />)
  const json = toJSON(product)
  expect(json).toMatchSnapshot()
});