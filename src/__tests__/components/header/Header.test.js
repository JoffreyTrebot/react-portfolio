import Header from '../../../components/header/Header';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CTA from '../../../components/header/CTA';

configure({ adapter: new Adapter() });


describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  test('render container with header informations', () => {
    expect(wrapper.find('#header').hasClass('container header__container')).toBe(true);
    expect(wrapper.find('#header').children().length).toEqual(6);
    expect(wrapper.find('#header').childAt(0).type()).toEqual('h5');
    expect(wrapper.find('#header').childAt(1).type()).toEqual('h1');
    expect(wrapper.find('#header').childAt(2).type()).toEqual('h5');
    expect(wrapper.find('#header').childAt(3).type()).toEqual(CTA);
    expect(wrapper.find('#header').childAt(4).type()).toEqual('div');
    expect(wrapper.find('#header').childAt(5).type()).toEqual('a');
  });

  test('render text in first h5 tag', () => {
    expect(wrapper.find('#header').childAt(0).text()).toBe("Hello I'm");
  });

  test('render name in h1 tag', () => {
    expect(wrapper.find('#header').childAt(1).text()).toBe("Joffrey Trébot");
  });

  test('render job name in last h5 tag', () => {
    expect(wrapper.find('#header').childAt(2).text()).toBe("Software Engineer");
    expect(wrapper.find('#header').childAt(2).hasClass('text-light')).toBe(true);
  });

  test('render CTA for download CV', () => {
    expect(wrapper.contains(<CTA />)).toBe(true);
  });

  test('render a pic of me', () => {
    expect(wrapper.find('#picOfMe').hasClass('me')).toBe(true);
    expect(wrapper.find('#picOfMe').children().length).toEqual(1);
    expect(wrapper.find('#picOfMe').childAt(0).type()).toEqual('img');
    expect(wrapper.find('#picOfMe').childAt(0).props().src).toEqual('me.png');
    expect(wrapper.find('#picOfMe').childAt(0).props().alt).toEqual('me');
  });

  test('render a scroll down', () => {  
    expect(wrapper.find('a').props().href).toEqual('#contact');
    expect(wrapper.find('a').props().className).toEqual('scroll__down');
    expect(wrapper.find('a').text()).toEqual('Scroll Down');
  });
});