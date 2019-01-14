import HashTable from '../HashTable';
import hashByAscii from '../hash-by-ascii';
import DoublyLinkedList from '../../LinkedList/DoublyLinkedList'

describe('HashTaable', () => {
  
  it('should create hash table', () => {
    const hashTable = new HashTable(hashByAscii);
    expect(hashTable.keys).toEqual({});
    expect(hashTable.slots).toEqual(new Array(32).fill(new DoublyLinkedList()));  
  })

  it('should add new key and value pair', () => {
    const hashTable = new HashTable(hashByAscii);
    const key = 'a';
    const value = 1;
    const hashValue = hashTable.hash(key);

    hashTable.set(key, value);
    expect(hashTable.keys[key]).toBe(hashValue);

    const mockChain = new DoublyLinkedList();
    mockChain.insert({ key, value })
    expect(hashTable.slots[hashValue]).toEqual(mockChain);
  })

  it('should retrieve value by key', () => {
    const hashTable = new HashTable(hashByAscii);
    const key = 'a';
    const value = 1;

    hashTable.set(key, value);
    expect(hashTable.get(key)).toEqual(value);
  })

  it('should keep track of keys already inserted', () => {
    const hashTable = new HashTable(hashByAscii);
    const key = 'a';
    const value = 1;

    hashTable.set(key, value);
    expect(hashTable.has(key)).toBe(true);
  })

  it('should remove key value pairs', () => {
    const hashTable = new HashTable(hashByAscii);
    const key = 'a';
    const value = 1;

    hashTable.set(key, value);
    expect(hashTable.get(key)).toEqual(value);

    hashTable.delete(key);
    expect(hashTable.get(key)).toEqual(null);
    expect(hashTable.has(key)).toBe(false);
  })

  it('should handle key collisions using linked list chaining', () => {
    const dumbHash = key => 1;
    const hashTable = new HashTable(dumbHash);
    const key1 = 'a';
    const value1 = 1;
    const key2 = 'b';
    const value2 = 2;

    hashTable.set(key1, value1);
    hashTable.set(key2, value2);

    const mockChain = new DoublyLinkedList();
    mockChain.insert({ key: key1, value: value1 });
    mockChain.insert({ key: key2, value: value2 });
    expect(hashTable.slots[1]).toEqual(mockChain);
    expect(hashTable.get(key1)).toEqual(value1);
    expect(hashTable.get(key2)).toEqual(value2);
  })

  it('should update key value pair if key is already added', () => {
    const hashTable = new HashTable(hashByAscii);
    const key = 'a';
    const value1 = 1;
    const value2 = 2;
    const hashValue = hashTable.hash(key);

    hashTable.set(key, value1);
    hashTable.set(key, value2);

    const mockChain = new DoublyLinkedList();
    mockChain.insert({ key, value: value2 });
    expect(hashTable.slots[hashValue]).toEqual(mockChain);
    expect(hashTable.get(key)).toEqual(value2);
  })
})