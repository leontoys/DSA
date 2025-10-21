def binary_search(num_list,item):
    left = 0
    right = len(num_list)
    while left <= right:
        mid = ( left + right ) // 2
        guess = num_list[mid]
        if guess == item : 
            return mid
        elif guess > item:
            right = mid - 1
        else:
            left = mid + 1
    return None

print(binary_search([1,3,5,7,9],9))
