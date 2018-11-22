<template>
  <main class="min-h-full flex flex-col items-center py-8 lg:py-12 px-4 lg:px-8 bg-indigo-lightest">
    <div class="flex flex-col max-w-sm">
      <p>Given an array of integers, find the largest contiguous subsum (i.e. the largest of the sums of sections of the array read left to right where the right element is larger than the left)</p>
      <pre>
      <code>
const arr = [1, 2, 9, 0, 8]

function findMaximumContiguousSubsum (arr) {

  let max = arr[0];
  let i = 0;

  for (i; i less than arr.length; i++) {
    let subsum = arr[i];

    for (let j = i; j less than arr.length; j++) {
      if (arr[j] less than arr[j + 1]) {
        subsum += arr[j + 1]
      } else break
    }

    if (subsum > max) {
      max = subsum
    }
  }

  return max
}

findMaximumContiguousSubsum(arr);
      </code>
      </pre>
    </div>
  </main>
</template>
