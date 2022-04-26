import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HeaderSocials from '../../../components/header/HeaderSocials';

configure({ adapter: new Adapter() });

describe('HeaderSocials', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HeaderSocials />);
    });

    test('render the title of headersocials', () => {
        expect(wrapper.find('div').text()).toContain("HeaderSocials");
    });
});
