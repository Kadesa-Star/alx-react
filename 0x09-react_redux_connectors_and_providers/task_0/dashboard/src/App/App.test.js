import { shallow, mount } from '../../config/setupTests';
import { StyleSheetTestUtils } from 'aphrodite';
import App, { mapStateToProps } from './App'; // Import mapStateToProps here
import Notifications from '../Notifications/Notifications';
import NotificationItem from '../Notifications/NotificationItem';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext, { user, logOut } from './AppContext';
import ProductList from '../ProductList/ProductList'; // Assuming this component exists
import { updateStock } from '../../utils/stockUtils'; // Assuming updateStock is a utility function
import { fromJS } from 'immutable'; // Import fromJS to create an Immutable map

describe('<App /> standard render tests', () => {
        beforeEach(() => {
                StyleSheetTestUtils.suppressStyleInjection();
        });

        afterEach(() => {
                jest.clearAllMocks();
        });

        it('Tests that App renders without crashing', () => {
                const wrapper = shallow(<App />);
                wrapper.update();
                expect(wrapper.exists()).toBe(true);
        });

        // Add your existing render tests here, as they remain relevant.
        // (Skipping those for brevity)
});

describe('<App /> context/state tests', () => {
        beforeEach(() => {
                StyleSheetTestUtils.suppressStyleInjection();
                jest.clearAllMocks();
        });

        afterEach(() => {
                jest.clearAllMocks();
        });

        it('Tests that the correct stock level is updated when new stock is added', () => {
                const wrapper = mount(<App />);
                const initialStock = 10; // Example initial stock for a product
                const newStock = 5; // Example new stock to add
                const product = { id: 1, name: 'Product A', stock: initialStock };

                // Assuming the `addStock` function exists
                wrapper.setState({
                        products: [product], // Set the initial state with one product
                });

                // Call the stock update logic
                wrapper.instance().addStock(product.id, newStock);

                // Check that stock is updated correctly
                expect(wrapper.state().products[0].stock).toBe(initialStock + newStock);
                wrapper.unmount();
        });

        it('Tests that the stock level does not duplicate when adding stock to an existing product', () => {
                const wrapper = mount(<App />);
                const product = { id: 1, name: 'Product A', stock: 10 };
                const newStock = 5;

                wrapper.setState({
                        products: [product], // Initial product with stock of 10
                });

                // Update stock for the existing product
                wrapper.instance().addStock(product.id, newStock);

                // Ensure stock is updated without creating duplicates
                expect(wrapper.state().products.length).toBe(1); // Ensure no new product is added
                expect(wrapper.state().products[0].stock).toBe(15); // Ensure stock is correctly updated
                wrapper.unmount();
        });

        // Add other context or state tests as needed for your app
});

describe('<App /> product-related tests', () => {
        beforeEach(() => {
                StyleSheetTestUtils.suppressStyleInjection();
        });

        afterEach(() => {
                jest.clearAllMocks();
        });

        it('Tests that ProductList displays the correct stock levels', () => {
                const wrapper = mount(<App />);
                const product = { id: 1, name: 'Product A', stock: 10 };

                wrapper.setState({
                        products: [product], // Set the state with one product
                });

                const productListWrapper = wrapper.find(ProductList);
                expect(productListWrapper.exists()).toBe(true);
                expect(productListWrapper.props().products[0].stock).toBe(10); // Ensure stock is displayed correctly
                wrapper.unmount();
        });

        it('Tests that stock update triggers re-render with updated values', () => {
                const wrapper = mount(<App />);
                const product = { id: 1, name: 'Product A', stock: 10 };
                const newStock = 5;

                wrapper.setState({
                        products: [product],
                });

                // Simulate adding stock
                wrapper.instance().addStock(product.id, newStock);

                const updatedProductListWrapper = wrapper.find(ProductList);
                expect(updatedProductListWrapper.props().products[0].stock).toBe(15); // Ensure stock updated after action
                wrapper.unmount();
        });
});

describe('<App /> ctrl-h logout functionality', () => {
        beforeEach(() => {
                StyleSheetTestUtils.suppressStyleInjection();
        });

        afterEach(() => {
                jest.clearAllMocks();
        });

        // Keep your existing logout functionality tests as they are.
});

// Add a test suite to check mapStateToProps
describe('mapStateToProps tests', () => {
        it('should return the correct object when passing an Immutable state', () => {
                // Create an Immutable state using fromJS
                const state = fromJS({
                        uiReducer: {
                                isUserLoggedIn: true, // Test case for a logged-in user
                        },
                });

                // Expected output
                const expected = { isLoggedIn: true };

                // Test that mapStateToProps returns the expected object
                expect(mapStateToProps(state)).toEqual(expected);
        });

        it('should return false for isLoggedIn when state is not logged in', () => {
                const state = fromJS({
                        uiReducer: {
                                isUserLoggedIn: false, // Test case for not logged in
                        },
                });

                const expected = { isLoggedIn: false };

                // Test that mapStateToProps returns the expected object when not logged in
                expect(mapStateToProps(state)).toEqual(expected);
        });
});

