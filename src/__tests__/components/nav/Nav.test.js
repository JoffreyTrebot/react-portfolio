import Nav from '../../../components/nav/Nav';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });
  test('render the title of nav', () => {
    expect(wrapper.find('div').text()).toContain("Nav");
  });
});