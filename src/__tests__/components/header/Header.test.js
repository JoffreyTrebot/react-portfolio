import Header from '../../../components/header/Header';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  test('render the title of header', () => {
    expect(wrapper.find('div').text()).toContain("Header");
  });
});