import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loader from './index';

configure({ adapter: new Adapter() });
describe('Loader component', () => {
  it('should to show Loader', () => {
    const wrapper = shallow(<Loader></Loader>);

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('svg').length).toEqual(1);
  });
});
