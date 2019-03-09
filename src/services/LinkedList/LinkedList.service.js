import Node from "./BaseLinkedListNode.service";

/*
* A linked list is an ordered collection of data elements.
* A data element can be represented as a node in a linked list.
* Each node consists of two parts: data & pointer to the next node.
*
*                 Linked List        Array
*
* Insert at        O(1)               O(n)
* beginning
*
* Remove from      O(1)               O(n)
* beginning
*
* Insert           O(1), O(n) *       O(1)
* at end
*
* Remove           O(1), O(n)         O(1)
* from end
*
* Insert           O(1), O(n) *       O(n)
* in middle
*
* Remove from      O(n), O(n)         O(n)
* middle
*
* Find / Get       O(n)               O(1)
* item at index
*
* Wasted           O(n)               0
* Space
* */
class LinkedList {

  constructor() {
    this.lenght = 0;
    this.head = null;
  }

  checkElement(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.lenght++;
      return false;
    } else {
      return true;
    }
  }


  add(data) {
    let node = new Node(data);

    if (this.checkElement(data)) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
      this.lenght++;
    }

    return this;
  }

  size() {
    return this.lenght;
  }

  removeFromHead() {
    this.head = this.head.next;
    this.lenght--;
  }

  remove(data) {
    if (this.lenght === 0) return this;
    let current = this.head.next;
    let previous = this.head;

    if (this.head && this.head.data === data) {
      this.removeFromHead();
    } else {

      // console.log("REMOVE:==>", current.data, data, current.data === data);

      while (current) {
        if (current.data === data) {
          break;
        }

        previous = current;
        current = current.next;

        console.log("previous:==>", previous, "current:==>", current);
      }

      if (previous && current) {
        previous.next = current.next;
        this.lenght--;
      }

      return this;
    }

    return this;
  }

  toArray() {
    let current = this.head;

    const toStingArr = [];
    while (current) {
      toStingArr.push(current.data);
      current = current.next;
    }

    return toStingArr;
  }

  toString() {
    return JSON.stringify(this.head);
  }
}

export default LinkedList;
