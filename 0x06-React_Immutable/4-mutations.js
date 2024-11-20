import { Map } from 'immutable';

// Create the initial Immutable Map
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create a new Map with modified values using chained mutations
export const map2 = map
  .set(2, 'Benjamin') // Update value at index 2
  .set(4, 'Oliver');  // Update value at index 4 (unchanged in this case)
