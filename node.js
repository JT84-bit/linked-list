module.exports = class Node {
  constructor(data) {
    this._data = data;
    this._next = null;
  }

  insertNext(nextNode) {
    this._next = nextNode;
  }

  insertData(data) {
    this._data = data;
  }

  get next() {
    return this._next;
  }

  get data() {
    return this._data;
  }
}


