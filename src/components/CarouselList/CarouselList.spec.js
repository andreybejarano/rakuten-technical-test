import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import listMock from 'Mocks/listMock';

import CarouselList from './index';

configure({ adapter: new Adapter() });
describe('CarouselList component', () => {
  it('should CarouselList', () => {
    const list = listMock;
    const wrapper = shallow(
      <CarouselList
        list={list}
        onSelectContent={() => null}
      ></CarouselList>
    );

    expect(wrapper.find('Text').length).toEqual(1);
    expect(wrapper.find('CardList').length).toEqual(2);
    wrapper.find('CardList').first().simulate('click');
  });
});
