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

function trapRainWater(height: number[]): number {
  if (height.length === 0) return 0; // Edge case: No elevation, no water

  let left = 0; 
  let right = height.length - 1;
  let leftMax = 0; 
  let rightMax = 0;
  let totalWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]; // Update left max height
      } else {
        totalWater += leftMax - height[left]; // Trap water at left index
      }
      left++; // Move left pointer to the right
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]; // Update right max height
      } else {
        totalWater += rightMax - height[right]; // Trap water at right index
      }
      right--; // Move right pointer to the left
    }
  }

  return totalWater;
}

// ✅ Test Cases
console.log(trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trapRainWater([4,2,0,3,2,5])); // Output: 9
console.log(trapRainWater([0,0,0,0])); // Output: 0 (Flat surface, no trapped water)
console.log(trapRainWater([3,0,0,2,0,4])); // Output: 10
console.log(trapRainWater([])); // Output: 0 (Empty array)
