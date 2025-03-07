/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a map to store numbers and their indices
    const numMap = new Map();
    
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement we need to find
        const complement = target - nums[i];
        
        // Check if the complement exists in our map
        if (numMap.has(complement)) {
            // Return the indices of both numbers
            return [numMap.get(complement), i];
        }
        
        // Store the current number and its index
        numMap.set(nums[i], i);
    }
    
    // If no solution is found
    return [];
};