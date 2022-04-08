//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  //circular queue items container
  list = [];
  //maximum items could fit inside queue
  capacity;
  //the last item index
  tail = -1;
  //first item index
  head = -1;
  //current queue size
  size = 0;

  constructor(capacity) {
    //inializing queue
    this.capacity = Math.max(Number(capacity), 0);
    this.list = Array(this.capacity).fill(null);
  }

  write(item) {
    if (!this.isFull()) {
      this.tail = (this.tail + 1) % this.capacity;
      this.list[this.tail] = item;
      this.size += 1;

      if (this.head === -1) {
        this.head = this.tail;
      }
    } else {
      throw new Error("Buffer is Full");
    }
    return this.size;
  }

  read() {
    let item = null;

    if (!this.isEmpty()) {
      item = this.list[this.head];
      this.list[this.head] = null;
      this.head = (this.head + 1) % this.capacity;
      this.size -= 1;

      if (!this.size) {
        this.head = -1;
        this.tail = -1;
      }
    } else {
      throw new Error("Buffer is Empty");
    }
  }

  forceWrite(item) {
    this.tail = (this.tail + 1) % this.capacity;
    this.list[this.tail] = item;
    this.size += 1;

    if (this.head === -1) {
      this.head = this.tail;
    }

    return this.size;
  }

  clear() {
    list = [];
    capacity;
    tail = -1;
    head = -1;
    size = 0;
  }
  getSize() {
    return this.size;
  }
  isFull() {
    return this.size === this.capacity;
  }
  isEmpty() {
    return this.size === 0;
  }
  peek() {
    return this.list[this.head];
  }
  print() {
    console.log(this.list.filter((el) => el !== null));
  }
}

module.exports = CircularBuffer;

class BufferFullError extends Error {
  constructor() {
    throw new Error("Buffer is Full");
  }
}

module.exports = BufferFullError;

class BufferEmptyError extends Error {
  constructor() {
    throw new Error("Buffer is Empty");
  }
}
module.exports = BufferEmptyError;

const cq = new CircularBuffer(5);

cq.write(10);
cq.write(20);
cq.write(30);
cq.write(40);

cq.forceWrite("ali");
cq.forceWrite("mostafa");

console.log(cq.peek());
cq.print();
