// # Mock Interview 3:

// # Implement a Queue using Stacks
// # Implement a queue using two stacks and provide enqueue and dequeue operations.
// # Example:
// # Input: enqueue(1), enqueue(2), dequeue()
// # Output: 1
// # Input: enqueue(3), enqueue(4), enqueue(5), dequeue(), dequeue()
// # Output: 3, 4
class QueueUsingStacks {
  private stack1: number[];
  private stack2: number[];

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  // Enqueue operation (Push onto stack1)
  enqueue(value: number): void {
    this.stack1.push(value);
  }

  // Dequeue operation (Pop from stack2, refill from stack1 if empty)
  dequeue(): number | undefined {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop()!); // Move elements to stack2
      }
    }

    return this.stack2.pop(); // Pop from stack2 (FIFO order)
  }
}

// # Reverse Nodes in k-Group
// # Given a linked list, reverse the nodes of the list k at a time and return the modified list.
// # Example:
// # Input: head = [1,2,3,4,5], k = 2
// # Output: [2,1,4,3,5]
// # Input: head = [1,2,3,4,5,6], k = 3
// # Output: [3,2,1,6,5,4]

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (k == 1) {
    return head;
  }

  let n = 0;
  let cur = head;
  while (cur != null) {
    n++;
    cur = cur.next;
  }
  let dummy = new ListNode();
  dummy.next = head;
  let preLeft = dummy;
  while (n >= k) {
    // reverse
    let cur = preLeft.next;
    let next = cur!.next;
    for (let i = 1; i < k; i++) {
      cur!.next = next!.next;
      next!.next = preLeft.next;
      preLeft.next = next;
      next = cur!.next;
    }

    preLeft = cur!;
    n = n - k;
  }
  return dummy.next;
}
