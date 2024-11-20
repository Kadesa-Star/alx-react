import { Map } from 'immutable';


export const areMapsEqual(map1, map2) {
	return Map.is(map1, map2);
}
