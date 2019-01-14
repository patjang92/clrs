export default function hash(key) {
  const charValue = Array.from(key).reduce((accum, current) => (accum + current.charCodeAt(0)), 0);
  return charValue;
}