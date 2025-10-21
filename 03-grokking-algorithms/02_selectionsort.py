def findSmallest(arr):
    smallest_index = 0
    smallest = arr[smallest_index]
    for i in range(1,len(arr)):
        if smallest > arr[i] :
            smallest = arr[i]
            smallest_index = i
    return smallest_index

def selectionSort(arr_original):
    arr_copy = list(arr_original)
    arr_sorted = []
    while len(arr_copy) > 0:
        smallest_index = findSmallest(arr_copy)
        smallest = arr_copy[smallest_index]
        arr_sorted.append(smallest)
        arr_copy.pop(smallest_index)       
    return arr_sorted


print(selectionSort([5, 3, 6, 2, 10]))