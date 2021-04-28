// Description
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums: number[], target: number): number[] {
  let numMap: Map<number, number> = new Map();
  const numsLength: number = nums.length;
  for(let i = 0; i < numsLength; i++) {
      const num: number = nums[i]
      const targetDiff: number = target - num
      const otherNumber: number | undefined = numMap.get(targetDiff)
      if(otherNumber !== undefined) {
          return [otherNumber, i]
          break;
      }
      numMap.set(num, i)
  }
};
