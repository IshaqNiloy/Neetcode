// You are given an integer array heights where heights[i] represents the height of the ith bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights: any) {
    let leftPointer = 0;
    let tempMaxAmountOfWater = 0;
    let rightPointer = heights.length - 1;
    let maxAmountOfWater =
      heights[
        heights[rightPointer] > heights[leftPointer]
          ? leftPointer
          : rightPointer
      ] *
      (rightPointer - leftPointer);

    while (leftPointer < rightPointer) {
      if (heights[leftPointer] <= heights[rightPointer]) {
        leftPointer += 1;
      } else if (heights[leftPointer] > heights[rightPointer]) {
        rightPointer -= 1;
      }

      if (heights[leftPointer] >= heights[rightPointer]) {
        tempMaxAmountOfWater =
          heights[rightPointer] * (rightPointer - leftPointer);
      } else if (heights[leftPointer] < heights[rightPointer]) {
        tempMaxAmountOfWater =
          heights[leftPointer] * (rightPointer - leftPointer);
      }

      maxAmountOfWater = Math.max(tempMaxAmountOfWater, maxAmountOfWater);
    }

    return maxAmountOfWater;
  }
}

const obj = new Solution();
console.log(obj.maxArea([2, 1]));
