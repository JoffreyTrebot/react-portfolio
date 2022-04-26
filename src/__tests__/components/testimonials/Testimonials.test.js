import Testimonials from '../../../components/testimonials/Testimonials';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Testimonials', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Testimonials />);
  });
  test('render the title of testimonials', () => {
    expect(wrapper.find('div').text()).toContain("Testimonials");
  });
});