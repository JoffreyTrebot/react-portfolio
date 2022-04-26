import Contact from '../../../components/contact/Contact';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Contact', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contact />);
  });
  test('render the title of contact', () => {
    expect(wrapper.find('div').text()).toContain("Contact");
  });
});