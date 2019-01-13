export default function hash(key, numSlots) {
  return key % numSlots;
}