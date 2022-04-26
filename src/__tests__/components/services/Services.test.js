import Services from '../../../components/services/Services';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Services', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Services />);
  });
  test('render the title of testimonials', () => {
    expect(wrapper.find('div').text()).toContain("Services");
  });
});