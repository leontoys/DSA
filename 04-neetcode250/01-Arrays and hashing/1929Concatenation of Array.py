from typing import List

class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [None] * (2 * n)   # <-- add parentheses!
        for i in range(0, n):
            ans[i] = nums[i]
            ans[i+n] = nums[i]
        return ans

# Create an object of Solution
sol = Solution()

nums = [1,2,1]
print(sol.getConcatenation(nums))

nums = [1,3,2,1]
print(sol.getConcatenation(nums))
