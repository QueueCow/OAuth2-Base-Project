import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Header Component', () => {
  it('Should render without errors', () => {
    const wrapper = findByTestAttr(shallow(<Logo />), 'logoComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByTestAttr(shallow(<Logo />), 'logoIMG');
    expect(logo.length).toBe(1);
  });
});
