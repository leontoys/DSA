from typing import List


class Solution:
    def removeElement(self, nums, val) -> int:
        left = 0
        for right in range(len(nums)):
            if nums[right]!= val:
                nums[left] = nums[right]
                left += 1
        return left
    
solutionObject = Solution()
print(solutionObject.removeElement([3,2,2,3],3))