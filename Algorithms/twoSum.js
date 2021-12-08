// var nums = [3,2,4]
// var target = 6

var nums = [2, 7, 11, 15]
var target = 9

var twoSum = function (nums, target) {
    let map = new Map
    for (var i = 0; i < nums.length; i++) {
        var temp = target - nums[i]
        if (map.has(temp))
            return [map.get(temp), i]
        map.set(nums[i], i)
    }
    throw new Error('cannot find solution')
    //if map returns false throw error
};

console.log(twoSum(nums, target))
