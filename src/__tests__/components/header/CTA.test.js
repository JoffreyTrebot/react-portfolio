import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CTA from '../../../components/header/CTA';

configure({ adapter: new Adapter() });

describe('CTA', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CTA />);
    });

    test('render a Download CV button', () => {
        expect(wrapper.find('div').hasClass('cta')).toBe(true);
        expect(wrapper.find('div').children().length).toEqual(2);
        expect(wrapper.find('div').childAt(0).type()).toBe('a');
        expect(wrapper.find('div').childAt(1).type()).toBe('a');
    });

    test('render a link to downlaod CV', () => {
        expect(wrapper.find('a').at(0).text()).toEqual('Download CV');
        expect(wrapper.find('a').at(0).props().href).toEqual('cv.pdf');
    });

    test('render a text under download button', () => {
        expect(wrapper.find('a').at(1).text()).toEqual("Let's Talk");
        expect(wrapper.find('a').at(1).props().href).toEqual('#contact');
    });

    test('should have btn className for Download button', () => {
        expect(wrapper.find('a').at(0).hasClass('btn')).toBe(true);
    });

    test('should have btn btn-primary className for Lets Talk button', () => {
        expect(wrapper.find('a').at(1).hasClass('btn btn-primary')).toBe(true);
    });

});