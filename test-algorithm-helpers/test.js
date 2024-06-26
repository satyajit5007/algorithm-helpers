// test.js
const AlgorithmHelpers = require('algorithm-helpers');

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log('Binary Search (index of 5):', AlgorithmHelpers.binarySearch(arr.sort((a, b) => a - b), 5));
console.log('Linear Search (index of 9):', AlgorithmHelpers.linearSearch(arr, 9));
console.log('Bubble Sort:', AlgorithmHelpers.bubbleSort([...arr]));
console.log('Selection Sort:', AlgorithmHelpers.selectionSort([...arr]));
console.log('Insertion Sort:', AlgorithmHelpers.insertionSort([...arr]));
console.log('Merge Sort:', AlgorithmHelpers.mergeSort([...arr]));
console.log('Quick Sort:', AlgorithmHelpers.quickSort([...arr]));
console.log('Heap Sort:', AlgorithmHelpers.heapSort([...arr]));
console.log('Factorial of 5:', AlgorithmHelpers.factorial(5));
