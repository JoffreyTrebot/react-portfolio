import Experience from '../../../components/experience/Experience';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Experience', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Experience />);
  });
  test('render the title of experience', () => {
    expect(wrapper.find('div').text()).toContain("Experience");
  });
});