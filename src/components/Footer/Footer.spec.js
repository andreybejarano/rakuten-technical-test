import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './index';

configure({ adapter: new Adapter() });
describe('Footer component', () => {
  it('should a Footer tag with RakutenTV\'s image logo', () => {
    const descriptionFooter = 'Created by Erik Andrey Bejarano Sánchez';
    const wrapper = shallow(<Footer></Footer>);

    expect(wrapper.find('footer').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('Text').length).toEqual(1);
    expect(wrapper.find('Text').children().text()).toEqual(descriptionFooter);
  });
});
