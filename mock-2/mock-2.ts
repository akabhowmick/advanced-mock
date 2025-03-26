// # Mock Interview 2

// # Power of Three
// # Determine if a given integer is a power of three using recursion.
// # Example:
// # Input: 27
// # Output: True
// # Input: 10
// # Output: False
function isPowerOfThree(n: number): boolean {
  if (n === 1) return true;  
  if (n <= 0 || n % 3 !== 0) return false; 
  return isPowerOfThree(n / 3); 
}

// # (Medium) Combination Sum
// # Given an array of unique integers and a target sum, return all unique combinations where numbers sum to the target.
// # Numbers can be used multiple times.
// # Example:
// # Input: candidates = [2,3,6,7], target = 7
// # Output: [[2,2,3], [7]]
// # Input: candidates = [2,3,5], target = 8
// # Output: [[2,2,2,2], [2,3,3], [3,5]]

