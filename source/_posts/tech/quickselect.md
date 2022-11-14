---
title: Quick Select 快速选择
date: 2022-10-16 18:33:56
tags:
- Algorithms
categories:
- tech
---

# 开篇废话
最近有重要面试，时间真的很紧张啊！不会的还有好多，只能逐个快速击破了！QwQ

# 流程
1. Choose a random pivot.
2. Use a **partition** algorithm to place the pivot into its perfect position pos in the sorted array, move smaller elements to the left of pivot, and larger or equal ones - to the right.
3. Compare pos and N - k to choose the side of array to proceed recursively.

# 模版
## 自用简易模版
```java
public int findKthLargest(int[] nums, int k) {
  return quickSelect(nums, 0, nums.length - 1, k-1);
}

private int quickSelect(int[] nums, int l, int r, int k) {
  int index = partition(nums, l, r);
  if (index == k) return nums[k];
  return index < k ? quickSelect(nums, index+1, r, k) : quickSelect(nums, l, index - 1, k);
}

private int partition(int[] nums, int l, int r) {
  int pivot = nums[r];
  for (int i = l; i < r; i++) {
      if (nums[i] >= pivot) {
          swap(nums, l++, i);
      }
  }
  swap(nums, l, r);
  return l;
}

private void swap(int[] nums, int l, int r) {
  int tmp = nums[l];
  nums[l] = nums[r];
  nums[r] = tmp;
}
```

# 练习
* [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) 非常直接
* [973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) 直接+1
* [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) 加了一个map
* [1985. Find the Kth Largest Integer in the Array](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array) 变成String比较，而且数值更大了
* [324. Wiggle Sort II](https://leetcode.com/problems/wiggle-sort-ii/) 太难了，放弃了