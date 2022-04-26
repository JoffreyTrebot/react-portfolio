import Portfolio from '../../../components/portfolio/Portfolio';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Portfolio', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Portfolio />);
  });
  test('render the title of portfolio', () => {
    expect(wrapper.find('div').text()).toContain("Portfolio");
  });
});