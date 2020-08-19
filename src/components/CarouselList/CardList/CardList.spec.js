import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import contentMock from 'Mocks/contentMock';

import CardList from './index';

configure({ adapter: new Adapter() });
describe('CardList component', () => {
  it('should a CardList', () => {
    const content = contentMock;
    const wrapper = shallow(<CardList content={content}></CardList>);

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').props().style.backgroundImage)
      .toEqual(`url(${content.images.artwork}`);
  });

  it('should Click on Card', () => {
    const content = contentMock;
    const wrapper = shallow(
      <CardList content={content}></CardList>
    );

    wrapper.instance().context = { CarouselListComponent: { handleSelectedContent: (content) => null } };

    expect(wrapper.find('div').length).toEqual(1);
    wrapper.simulate('click');
  });
});
