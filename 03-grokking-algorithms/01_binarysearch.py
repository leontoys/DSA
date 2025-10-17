def binary_search(num_list,item):
    low = 0
    high = len(num_list) - 1
    while low <= high:
        mid = ( low + high ) // 2
        guess = num_list[mid]
        if guess == item:
            return mid 
        elif guess > item : 
            high = mid - 1
        else :
            low = mid + 1
    return None

print(binary_search([1,3,5,7,9],9))
