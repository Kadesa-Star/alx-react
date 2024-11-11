// config/setupTests.js
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Set up Enzyme with React 17 adapter
configure({ adapter: new Adapter() });
