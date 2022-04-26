import App from '../App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../components/header/Header'
import Services from '../components/services/Services';
import Experience from '../components/experience/Experience';
import About from '../components/about/About';
import Nav from '../components/nav/Nav';
import Portfolio from '../components/portfolio/Portfolio';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

configure({ adapter: new Adapter() });


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test('render all components', () => {
    expect(wrapper.contains(<Nav />)).toBe(true);
    expect(wrapper.contains(<About />)).toBe(true);
    expect(wrapper.contains(<Experience />)).toBe(true);
    expect(wrapper.contains(<Services />)).toBe(true);
    expect(wrapper.contains(<Portfolio />)).toBe(true);
    expect(wrapper.contains(<Testimonials />)).toBe(true);
    expect(wrapper.contains(<Contact />)).toBe(true);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });
});

