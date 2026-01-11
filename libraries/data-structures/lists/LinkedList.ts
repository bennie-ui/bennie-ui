interface Node<T> {
  value: T | null,
  next: Node<T> | null
}

interface List<T> {
  add(val: T): void;
  insert(pos: number, val: T): void;
  shift(): void;
  remove(pos: number): void;
  peek(): T | null;
  count(): number;
  print(): string;
}

export class LinkedList<T> implements List<T> {
  _head: Node<T> | null
  _count: number

  constructor() {
    this._head = null
    this._count = 0
  }

  add(value: T): void {
    if (this._head === null) {
      this._head = { value, next: null }
      this._count++
    } else {
      let head = this._head

      while (head.next !== null) {
        head = head.next
      }

      head.next = { value, next: null }
      this._count++
    }
  }

  insert(pos: number, value: T) {
    if (pos > this._count) {
      this.add(value)
    } else {
      let head = this._head
      let next = null

      for (let it = 0; it < pos - 2; it++) {
        head = head.next
        next = head.next
      }

      let node: Node<T> = { value, next }
      head.next = node
      this._count++
    }
  }

  count() {
    return this._count
  }

  shift(): void {
    if (this._head === null) return

    if (this._head?.next) {
      this._head = this._head.next
      this._count--
    } else {
      this._head = null
      this._count = 0
    }
  }

  remove(pos: number): void {
    if (pos <= 0 || pos > this._count) return
    let head = this._head
    let next = null

    for (let it = 0; it < pos - 2; it++) {
      head = head.next
    }

    if (head.next) {
      head.next = head.next.next
    } else {
      if (next) {
        head.next = next

      } else {
        head.next = null
      }

      head.next = null
    }
    this._count--;
  }

  peek(): T | null {
    return this._head?.value || null
  }

  print(): string {
    var result = []
    let head = this._head

    while (head) {
      result.push(head.value)
      if (head) {
        head = head.next
      }
    }

    return result.join(',')
  }

}

