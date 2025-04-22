# Array

    a = [20,35,40,10,22,32,19]

    a = new int[7]

- init
  - When we allocate memory it depends on the n items
  - So Space Complexity - O(n)S
  - Time Complexity - O(n) T
  - We can write like - O(n)ST
  
- set
  - If we have to set a value, after initialization
  - a[2] = 10
  - We don't need extra space, hence
  - Space Complexity - O(1)S

- get
  - We have to get any element like a[3]
  - Space Complexity - O(1)S
  - Time Complexity - O(1)T
  - But if this happens inside a loop,
  - Time Complexity becomes O(n), but space complexity will remain O(1)S if we are not moving into any new array

- traverse
  - We have to pass through each element
  - Space Complexity - O(1)S , no extra space
  - Time Complexity - O(n)S

- insert
  - Array out of bound exception, if we add more elements to an array in C or Java as it is fixed contiguous memeory
  - So to insert an element at the end, system has to create a new array, and then adds the new element and then deletes previous memory allocated
  - Space Complexity O(1)S
  - Time Complexity - we have to copy n times to new allocation - O(n)T

- delete
  - To remove an element , no additional space
  - Space - O(1)
  - Time - O(1)

## Dynamic Array

Python, JS when we declare we don't give size - so dynamic array. But in Java, C default is static array ( above). To make dynamic they have Array List etc

When we create an array of space 4, system allocates extra memory usually double. So if we have to insert new element no extra memory needed.

Space and Time Complexity two cases

- Best Case
  - Insert at the end, no additional memory - O(1)S and no copy of all elements - O(1)T. 

- Worst Case
  - But if we have run out of memory, the double spaces needed - O(n)S and time also O(n)T as we have to copy over
