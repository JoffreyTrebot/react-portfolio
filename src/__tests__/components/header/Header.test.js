import Header from '../../../components/header/Header';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  test('render container with header informations', () => {
    expect(wrapper.find('div').hasClass('container header__container')).toBe(true);
    expect(wrapper.find('div').children().length).toEqual(3);
    expect(wrapper.find('div').childAt(0).type()).toEqual('h5');
    expect(wrapper.find('div').childAt(1).type()).toEqual('h1');
    expect(wrapper.find('div').childAt(2).type()).toEqual('h5');
  });

  test('render text in first h5 tag', () => {
    expect(wrapper.find('div').childAt(0).text()).toBe("Hello I'm");
  });

  test('render name in h1 tag', () => {
    expect(wrapper.find('div').childAt(1).text()).toBe("Joffrey Trébot");
  });

  test('render job name in last h5 tag', () => {
    expect(wrapper.find('div').childAt(2).text()).toBe("Software Engineer");
    expect(wrapper.find('div').childAt(2).hasClass('text-light')).toBe(true);
  });
});