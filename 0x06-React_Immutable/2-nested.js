export default function accessImmutableObject(object, array) {
  return array.reduce((current, key) => {
    if (current && key in current) {
      return current[key];
    }
    return undefined;
  }, object);
}
