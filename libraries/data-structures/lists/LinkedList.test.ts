import { describe, test, expect, beforeEach } from 'bun:test'
import { LinkedList } from './LinkedList'
describe('LinkedList Tests', () => {

  let list: LinkedList<number>

  beforeEach(() => {
    list = new LinkedList()
  })

  test('should add', () => {
    list.add(1)
    expect(list.count()).toEqual(1)
    expect(list.peek()).toEqual(1)

    list.add(2)
    expect(list.count()).toEqual(2)
    expect(list.peek()).toEqual(1)

    list.add(3)
    expect(list.count()).toEqual(3)
    expect(list.peek()).toEqual(1)
  });

  test('should insert at', () => {
    list.add(1)
    list.add(2)
    list.add(3)

    list.insert(5, 6)
    expect(list.print()).toEqual('1,2,3,6')

    list.insert(4, 4)
    expect(list.print()).toEqual('1,2,3,4,6')

    list.insert(5, 5)
    expect(list.print()).toEqual('1,2,3,4,5,6')

  })

  test('should shift', () => {
    list.add(1)
    expect(list.count()).toEqual(1)
    expect(list.peek()).toEqual(1)

    list.add(2)
    expect(list.count()).toEqual(2)
    expect(list.peek()).toEqual(1)

    list.add(3)
    expect(list.count()).toEqual(3)
    expect(list.peek()).toEqual(1)

    list.shift()
    expect(list.count()).toEqual(2)
    expect(list.peek()).toEqual(2)

    list.shift()
    expect(list.count()).toEqual(1)
    expect(list.peek()).toEqual(3)

    list.shift()
    expect(list.count()).toEqual(0)
    expect(list.peek()).toEqual(null)

    list.shift()
    expect(list.count()).toEqual(0)
    expect(list.peek()).toEqual(null)
  });

  test('should remove at', () => {
    list.add(1)
    list.add(2)
    list.add(3)
    list.add(4)
    list.add(5)
    list.add(6)
    expect(list.count()).toEqual(6)

    // invalid cases
    list.remove(8)
    expect(list.count()).toEqual(6)
    list.remove(0)
    expect(list.count()).toEqual(6)
    list.remove(-1)
    expect(list.count()).toEqual(6)

    // valid cases
    list.remove(3)
    expect(list.print()).toEqual('1,2,4,5,6')
    expect(list.count()).toEqual(5)

    list.remove(4)
    expect(list.print()).toEqual('1,2,4,6')
    expect(list.count()).toEqual(4)

    list.remove(5)
    expect(list.count()).toEqual(4)

    list.remove(4)
    expect(list.print()).toEqual('1,2,4')
    expect(list.count()).toEqual(3)

    list.remove(2)
    expect(list.print()).toEqual('1,4')
    expect(list.count()).toEqual(2)
  })

  test('should peek', () => {
    list.add(1)
    list.add(2)
    expect(list.count()).toEqual(2)
    expect(list.peek()).toEqual(1)
  });

  test('should print', () => {
    list.add(1)
    expect(list.count()).toEqual(1)

    list.add(2)
    expect(list.count()).toEqual(2)

    list.add(3)
    expect(list.count()).toEqual(3)

    list.add(4)
    expect(list.count()).toEqual(4)
    expect(list.print()).toEqual('1,2,3,4')
  })
})
