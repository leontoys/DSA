class staticArray {
  constructor(n) {
    this.arr = new Array(n);
    this.length = 0;
    this.capacity = n;
  }

  // Prints the array
  printArr() {
    for (let i = 0; i < this.length; i++) {
      console.log(this.arr[i]);
    }
  }

  // Insert n at the end of the array
  insertEnd(n) {
    if (this.length >= this.capacity) {
      return false; // Array is full
    }
    this.arr[this.length] = n;
    this.length++;
    return true;
  }

  // Remove the last element from the array
  removeEnd() {
    if (this.length <= 0) {
      return undefined; // No element to remove
    }
    const last = this.arr[this.length - 1];
    this.arr[this.length - 1] = undefined; // Clear the last element
    this.length--;
    return last;
  }

  // Insert n at the middle index
  insertMiddle(n, i) {
    if (this.length >= this.capacity) {
      return false; // No space to insert
    }
    if (i < 0 || i > this.length) {
      return false; // Invalid index
    }

    // Shift elements to the right to make space for the new element
    for (let index = this.length - 1; index >= i; index--) {
      this.arr[index + 1] = this.arr[index];
    }
    this.arr[i] = n;
    this.length++;
    return true;
  }

  // Remove the element at the middle index
  removeMiddle(i) {
    if (this.length <= 0) {
      return undefined; // No element to remove
    }
    if (i < 0 || i >= this.length) {
      return false; // Invalid index
    }

    // Shift elements to the left to fill the gap
    for (let index = i; index < this.length - 1; index++) {
      this.arr[index] = this.arr[index + 1];
    }
    this.arr[this.length - 1] = undefined; // Clear the last element
    this.length--;
    return true;
  }
}
