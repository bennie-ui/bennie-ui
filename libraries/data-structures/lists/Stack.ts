interface Node<T> {
  value: T | null,
  next: Node<T> | null
}

interface IStack<T> {
  push(val: T): void;
  pop(): T | null;
  peek(): T | null;
  count(): number;
  print(): string;
  isEmpty(): boolean;
}

export class Stack<T> implements IStack<T> {
  private _top: Node<T> | null
  private _count: number

  constructor() {
    this._top = null
    this._count = 0
  }

  push(value: T): void {
    const node: Node<T> = { value, next: this._top }
    this._top = node
    this._count++
  }

  pop(): T | null {
    if (this._top === null) return null

    const value = this._top.value
    this._top = this._top.next
    this._count--
    return value
  }

  count(): number {
    return this._count
  }

  peek(): T | null {
    return this._top?.value || null
  }

  isEmpty(): boolean {
    return this._count === 0
  }

  print(): string {
    const result = []
    let current = this._top

    while (current) {
      result.push(current.value)
      current = current.next
    }

    return result.join(',')
  }
}
