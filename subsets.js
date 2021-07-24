/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  helper(nums, 0, [], result);
  return result.sort();
};
function helper(nums, index, partial, result) {
  if (index === nums.length) {
    return result.push([].concat(partial));
  }
  //    exclude
  helper(nums, index + 1, partial, result);
  // include
  partial.push(nums[index]);
  helper(nums, index + 1, partial, result);
  partial.pop();
}
