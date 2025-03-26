// # Mock Interview 1

// # Two Sum II - Input array is sorted
// # Given a sorted array of integers and a target sum,
// # return the indices (1-based) of the two numbers that add up to the target using the two-pointer technique.
// # Example:
// # Input: numbers = [2, 7, 11, 15], target = 9
// # Output: [1, 2]  (2 + 7 = 9)
// # Input: numbers = [1, 3, 4, 5, 7], target = 8
// # Output: [2, 4]
// Two pointer solution
function twoSum(inputArray: number[], target: number) {
  let left = 0;
  let right = inputArray.length - 1;
  while (left < right) {
    if (inputArray[left] + inputArray[right] === target) {
      return [left + 1, right + 1];
    } else if (inputArray[left] + inputArray[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

// # Longest Substring Without Repeating Characters
// # Given a string, find the length of the longest substring without repeating characters using the sliding window technique.
// # Example:
// # Input: "abcabcbb"
// # Output: 3  ("abc")
// # Input: "bbbbb"
// # Output: 1  ("b")
function longestSubstring(inputString: string): number {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map<string, number>(); 

  for (let end = 0; end < inputString.length; end++) {
    const char = inputString[end];

    if (charMap.has(char) && charMap.get(char)! >= start) {
      start = charMap.get(char)! + 1; 
    }

    charMap.set(char, end); 
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
