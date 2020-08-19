import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Text from './index';

configure({ adapter: new Adapter() });
describe('Text component', () => {
  it('should to show a paragraph with class body1', () => {
    const textToShow = 'Paragraph body1';
    const wrapper = shallow(<Text>{textToShow}</Text>);

    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').hasClass('body1')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a paragraph with class body2', () => {
    const textToShow = 'Paragraph body2';
    const wrapper = shallow(<Text variant="body2">{textToShow}</Text>);

    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').hasClass('body2')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a h1 element with class h1', () => {
    const textToShow = 'Header h1';
    const wrapper = shallow(<Text variant="h1">{textToShow}</Text>);

    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').hasClass('h1')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a h2 element with class h2', () => {
    const textToShow = 'Header h2';
    const wrapper = shallow(<Text variant="h2">{textToShow}</Text>);

    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('h2').hasClass('h2')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a h3 element with class h3', () => {
    const textToShow = 'Header h3';
    const wrapper = shallow(<Text variant="h3">{textToShow}</Text>);

    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('h3').hasClass('h3')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a h4 element with class h4', () => {
    const textToShow = 'Header h4';
    const wrapper = shallow(<Text variant="h4">{textToShow}</Text>);

    expect(wrapper.find('h4').length).toEqual(1);
    expect(wrapper.find('h4').hasClass('h4')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a h5 element with class h5', () => {
    const textToShow = 'Header h5';
    const wrapper = shallow(<Text variant="h5">{textToShow}</Text>);

    expect(wrapper.find('h5').length).toEqual(1);
    expect(wrapper.find('h5').hasClass('h5')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a h6 element with class h6', () => {
    const textToShow = 'Header h6';
    const wrapper = shallow(<Text variant="h6">{textToShow}</Text>);

    expect(wrapper.find('h6').length).toEqual(1);
    expect(wrapper.find('h6').hasClass('h6')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a label element with class subtitle1', () => {
    const textToShow = 'Label subtitle1';
    const wrapper = shallow(<Text variant="subtitle1">{textToShow}</Text>);

    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('label').hasClass('subtitle1')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a label element with class subtitle2', () => {
    const textToShow = 'Label subtitle2';
    const wrapper = shallow(<Text variant="subtitle2">{textToShow}</Text>);

    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('label').hasClass('subtitle2')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a span element with class caption1', () => {
    const textToShow = 'Span caption1';
    const wrapper = shallow(<Text variant="caption1">{textToShow}</Text>);

    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find('span').hasClass('caption1')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a span element with class caption2', () => {
    const textToShow = 'Span caption2';
    const wrapper = shallow(<Text variant="caption2">{textToShow}</Text>);

    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find('span').hasClass('caption2')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });

  it('should to show a span element with class overline', () => {
    const textToShow = 'Span overline';
    const wrapper = shallow(<Text variant="overline">{textToShow}</Text>);

    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find('span').hasClass('overline')).toBeTruthy();
    expect(wrapper.text()).toEqual(textToShow);
  });
});
