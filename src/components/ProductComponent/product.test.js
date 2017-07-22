import React from 'react';
import {shallow, mount, render} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Product from './Product';

test('product component with display a product image, name and price', () => {
  const product = shallow(<Product />)
  const json = toJSON(product)
  expect(json).toMatchSnapshot()
});