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
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, target: number, path: number[]) {
    if (target === 0) {
      result.push([...path]); // Found a valid combination
      return;
    }
    
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) continue; // Skip if number is larger than remaining target

      path.push(candidates[i]); // Choose the number
      backtrack(i, target - candidates[i], path); // Recur with the same index (can reuse numbers)
      path.pop(); // Undo choice (backtrack)
    }
  }

  backtrack(0, target, []);
  return result;
}
