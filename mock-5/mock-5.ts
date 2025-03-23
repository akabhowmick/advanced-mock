// # Mock Interview 5: Mixed Topics

// # Middle of the Linked List
// # Given a singly linked list, return the middle node in one pass.
// # Example:
// # Input: head = [1,2,3,4,5]
// # Output: [3,4,5]
// # Input: head = [1,2,3,4,5,6]
// # Output: [4,5,6]

class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  append(value: number) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}

function findMiddle(arr: number[]): number[] {
  if (arr.length === 0) return [];

  let slow = 0;
  let fast = 0;

  while (fast < arr.length - 1) {
    slow++;
    fast += 2;
  }

  return arr.slice(slow);
}

// # Trapping Rain Water
// # Given an elevation map, compute how much water it can trap after raining.
// # Example:
// # Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// # Output: 6
// # Input: height = [4,2,0,3,2,5]
// # Output: 9
