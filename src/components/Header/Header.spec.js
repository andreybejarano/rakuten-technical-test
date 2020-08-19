import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './index';

configure({ adapter: new Adapter() });
describe('Header component', () => {
  it('should a Header tag with RakutenTV\'s image logo', () => {
    const wrapper = shallow(<Header></Header>);

    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should a Header tag with a Title', () => {
    const title = 'Title content';
    const wrapper = shallow(<Header title={title}></Header>);

    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('Text').length).toEqual(1);
    expect(wrapper.find('Text').children().text()).toEqual(title);
  });
});
