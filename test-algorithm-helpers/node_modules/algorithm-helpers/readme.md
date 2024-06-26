# algorithm-helpers

## Description

`algorithm-helpers` is a collection of JavaScript algorithms for common programming tasks. It includes implementations of binary search and Kadane's algorithm.

## Installation

You can install `algorithm-helpers` via npm:

# Usage

## Binary Search

const { binarySearch } = require('algorithm-helpers');

const arr = [1, 3, 5, 7, 9];
console.log(binarySearch(arr, 5)); // Output: 2

## Kadane's Algorithm

const { kadanceAlgorithm } = require('algorithm-helpers');

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(kadanceAlgorithm(arr)); // Output: 6

### binarySearch(arr, target)

Performs a binary search on a sorted array arr to find the index of target. Returns the index of target if found, otherwise returns -1.

### kadanceAlgorithm(arr)

Finds the maximum sum of a contiguous subarray within the array arr using Kadane's algorithm. Returns the maximum sum found.
