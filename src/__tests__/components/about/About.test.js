import About from '../../../components/about/About';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('About', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });
  test('render the title of about', () => {
    expect(wrapper.find('div').text()).toContain("About");
  });
});
