import App from '../App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test('render the title of app', () => {
    expect(wrapper.find('h1').text()).toContain("App");
  });
});

