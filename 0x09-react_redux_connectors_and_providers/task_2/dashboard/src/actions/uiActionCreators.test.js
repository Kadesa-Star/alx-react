import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, login, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS when API call succeeds', async () => {
    const mockUserData = {
      first_name: 'Johann',
      last_name: 'Salva',
      email: 'johann.salva@holberton.nz',
      profile_picture: 'http://placehold.it/32x32',
    };

    fetchMock.getOnce('/login-success.json', {
      body: mockUserData,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_SUCCESS, user: mockUserData },
    ];

    const store = mockStore({});
    await store.dispatch(loginRequest('test@example.com', 'password'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches LOGIN and LOGIN_FAILURE when API call fails', async () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({});
    await store.dispatch(loginRequest('test@example.com', 'password'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
