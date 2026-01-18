interface Node<T> {
  value: T | null,
  next: Node<T> | null
}

interface IQueue<T> {
  enqueue(val: T): void;
  dequeue(): T | null;
  peek(): T | null;
  count(): number;
  print(): string;
  isEmpty(): boolean;
}

export class Queue<T> implements IQueue<T> {
  private _head: Node<T> | null
  private _tail: Node<T> | null
  private _count: number

  constructor() {
    this._head = null
    this._tail = null
    this._count = 0
  }

  enqueue(value: T): void {
    const node: Node<T> = { value, next: null }
    
    if (this._tail === null) {
      this._head = node
      this._tail = node
    } else {
      this._tail.next = node
      this._tail = node
    }
    
    this._count++
  }

  dequeue(): T | null {
    if (this._head === null) return null

    const value = this._head.value
    this._head = this._head.next
    
    if (this._head === null) {
      this._tail = null
    }
    
    this._count--
    return value
  }

  count(): number {
    return this._count
  }

  peek(): T | null {
    return this._head?.value || null
  }

  isEmpty(): boolean {
    return this._count === 0
  }

  print(): string {
    const result = []
    let head = this._head

    while (head) {
      result.push(head.value)
      head = head.next
    }

    return result.join(',')
  }
}
