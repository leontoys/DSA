class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        size = len(nums)
        sumLeft = [0] * size
        sumRight = [0] * size
        sum_left = 0
        sum_right = 0
        for i in range(size):
            sumLeft[i] = sum_left
            sum_left += nums[i]
            sumRight[size-1-i] = sum_right
            sum_right += nums[size-1-i]
        for i in range(size):
            if sumLeft[i] == sumRight[i]:
                return i
        return -1
        