def quick_sort(arr):
    if len(arr) < 2 :
        return arr
    else:
        pivot = arr[0]
        left = [x for x in arr[1:] if x <= pivot]
        right = [x for x in arr[1:] if x > pivot]
        return quick_sort(left) + [ pivot ] + quick_sort(right)

print(quick_sort([9,1,8,2,7,3,6,4,5]))