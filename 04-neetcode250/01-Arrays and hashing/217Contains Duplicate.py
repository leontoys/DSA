from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False

sol = Solution()

nums = [1,2,3,1]
print(sol.containsDuplicate(nums))

nums = [1,2,3,4]
print(sol.containsDuplicate(nums))

nums = [1,1,1,3,3,4,3,2,4,2]
print(sol.containsDuplicate(nums))
        