""" from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        left = 0
        right = 1
        count = 1
        while right < len(nums):
            if nums[left] == nums[right]:
                nums.pop(right)
            else:
                left = right
                count += 1
                right += 1
        return count
 """

from typing import List


class Solution:
   def removeDuplicates(self, nums: List[int]) -> int:
       left = 1
       for right in range(1,len(nums)):
           if nums[right] != nums[right-1]:
               nums[left] = nums[right]
               left += 1 
       return left
   
solutionObject = Solution()
print(solutionObject.removeDuplicates([1,1,2]))
print(solutionObject.removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

