def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1,len(arr)):
        if smallest > arr[i]:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

def selectionSort(arr_original):
    arr_copy = list(arr_original) #to make a copy
    arr_sorted = []
    while len(arr_copy) > 0:
        smallest_index = findSmallest(arr_copy)
        arr_sorted.append(arr_copy[smallest_index])
        arr_copy.pop(smallest_index)

    return arr_sorted

print(selectionSort([5, 3, 6, 2, 10]))