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
    const obj = { key: 'a', value: 1 };
    const hashValue = hashTable.hash(obj.key);

    hashTable.set(obj.key, obj);
    expect(hashTable.keys[obj.key]).toBe(hashValue);

    const mockChain = new DoublyLinkedList();
    mockChain.insert(obj)
    expect(hashTable.slots[hashValue]).toEqual(mockChain);
  })

  it('should retrieve value by key', () => {
    const hashTable = new HashTable(hashByAscii);
    const obj = { key: 'a', value: 1 };

    hashTable.set(obj.key, obj);
    expect(hashTable.get(obj.key)).toEqual(obj.value);
  })

  it('should keep track of keys already inserted', () => {
    const hashTable = new HashTable(hashByAscii);
    const obj = { key: 'a', value: 1 };

    hashTable.set(obj.key, obj);
    expect(hashTable.has(obj.key)).toBe(true);
  })

  it('should remove key value pairs', () => {
    const hashTable = new HashTable(hashByAscii);
    const obj = { key: 'a', value: 1 };

    hashTable.set(obj.key, obj);
    expect(hashTable.get(obj.key)).toEqual(obj.value);

    hashTable.delete(obj.key);
    expect(hashTable.get(obj.key)).toEqual(null);
    expect(hashTable.has(obj.key)).toBe(false);
  })

  it('should handle key collisions using linked list chaining', () => {
    const dumbHash = key => 1;
    const hashTable = new HashTable(dumbHash);
    const obj1 = { key: 'a', value: 1 };
    const obj2 = { key: 'b', value: 2 };

    hashTable.set(obj1.key, obj1);
    hashTable.set(obj2.key, obj2);


    const mockChain = new DoublyLinkedList();
    mockChain.insert(obj1);
    mockChain.insert(obj2);
    expect(hashTable.slots[1]).toEqual(mockChain);
    expect(hashTable.get(obj1.key)).toEqual(obj1.value);
    expect(hashTable.get(obj2.key)).toEqual(obj2.value);
  })

  it('should update key value pair if key is already added', () => {
    const hashTable = new HashTable(hashByAscii);
    const obj1 = { key: 'a', value: 1 };
    const obj2 = { key: 'a', value: 2 };
    const hashValue = hashTable.hash(obj1.key);

    hashTable.set(obj1.key, obj1);
    hashTable.set(obj2.key, obj2);


    const mockChain = new DoublyLinkedList();
    mockChain.insert(obj2);
    expect(hashTable.slots[hashValue]).toEqual(mockChain);
    expect(hashTable.get(obj2.key)).toEqual(obj2.value);
  })
})