import Footer from '../../../components/footer/Footer';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  test('render the title of footer', () => {
    expect(wrapper.find('div').text()).toContain("Footer");
  });
});