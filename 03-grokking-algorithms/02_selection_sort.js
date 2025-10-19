const findSmallest = (arr) => {
    let smallestIndex = 0
    let smallest = arr[smallestIndex]
    for (let i = 0; i < arr.length; i++){
        if (smallest > arr[i]) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}

const selectionSort = (arr) => {
    const arr_copy = arr.concat()
    const arr_sorted = []
    while (arr_copy.length > 0){
        let smallestIndex = findSmallest(arr_copy)
        arr_sorted.push(arr_copy[smallestIndex])
        arr_copy.splice(smallestIndex, 1)        
    }
    return arr_sorted

}

console.log(selectionSort([5, 3, 6, 2, 10]));