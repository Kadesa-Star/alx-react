import rootReducer from './rootReducer';  // Import the rootReducer
import { Map } from 'immutable';

describe('rootReducer tests', () => {
  it('should return the correct initial state', () => {
    const initialState = {
      courses: Map(),
      notifications: Map(),
      ui: Map(),
    };

    const result = rootReducer(undefined, {});

    expect(result.toJS()).toEqual(initialState);
  });

  it('should handle unknown actions', () => {
    const result = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });

    const initialState = {
      courses: Map(),
      notifications: Map(),
      ui: Map(),
    };

    expect(result.toJS()).toEqual(initialState);
  });
});

