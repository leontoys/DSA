from typing import List


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
