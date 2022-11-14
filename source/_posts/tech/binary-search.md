---
title: Binary Search 二分查找法
date: 2022-02-15 18:33:56
tags:
- Algorithms
categories:
- tech
---

# 前言
纠结症患者的福音，也算是分治策略的一种吧，逐渐把大问题化小，小问题化无。
最早接触二分查找法，是小时候的一道数学题。问有n个球，其中有一个球是残次品，质量略小于其他的球，你有一个天平，没有砝码和刻度，请问，你怎样可以最快找出这个残次球。
二分法的思想很简单，但是有很多细节需要考虑。常常同一道题，用二分法的思想，可以写出不同的解法，而且殊途同归，都可以解决问题。一开始我也常常很苦恼，直到真正找到其中的奥秘，有一种拨云见日的感觉。现在遇到二分题，我也不敢说一定能百分百秒杀，至少经过练习，心理上会自信很多。

# 介绍
二分查找的基本思想是将n个顺序元素分成大致相等的两部分，将查找目标值与分隔中间值进行比较，选择中间值的两边，进行比较，直到范围缩小为1。时间复杂度为O(lgN)，空间复杂度为O(1)。
## 自用模版
我在前沿里说了，二分的模版有很多，这里是我最顺手，最常用的模版，它找的是第一个大于等于k的数在数组中的位置。
```java
int binarySearch(int[] a, int k) {
  int l = 0, r = a.length - 1;
  while (l < r) {
    int mid = l + (r - l) / 2;
    if (a[mid] < k) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}
```
## 细节
1. 选择左右指针
我习惯用l和r，也有人用l(low)和h(high)来代表左右指针。
左指针一般都是0起步，没什么异议，但是对于右指针，我们有的时候会选择为**数组的长度n**，而不是最后一个元素的index。
这个选择，取决于答案的范围。例如，最大可能答案是n，那么我们的右指针应当从**数组的长度n**开始。
2. 中间元素index mid的计算
一般来说计算方式有如下两种：
```java
// when odd, return the only mid
// when even, return the lower mid
int mid = lo + ((hi - lo)/2);

// when odd, return the only mid
// when even, return the upper mid
int mid2 = lo + ((hi - lo + 1) / 2);
```
如果区间范围内的元素总数为奇数，那么两种方式计算出的mid和mid2都为中间元素，所以并没有区别。
但是，如果区间范围内的元素总数为偶数，那么在选取中间元素时，我们就会有较小元素mid，和较大元素mid2，两种选择方式了。
此外，为了防止溢出，我们一般不会直接把左右元素相加除以2，而是写成 l+差 这样形式的。
3. 左右指针的移动 = if条件
写我们100%确定的条件
```java
if (100% sure logic) {
  left = mid + 1; // 100% sure target is to the right of mid
} else {
  right = mid; 
}

if (100% sure logic) {
  right = mid - 1; // 100% sure target is to the left of mid
} else {
  left = mid;
}
```
4. 循环的出口 = while条件
有的人会使用`l <= r`，来作为while的条件。但是，在我的模版中，我们始终使用`l < r`来作为循环的出口，因为这样我们可以保证，当循环结束时，l和r一定相等。如果需要判断target不存在情况，那么我们可以在循环外判断。
5. 防止无限循环
这是一个新手经常会遇到的问题。为啥我的二分法没法结束呢？这时候，你需要检查一下，你的mid值取的是上边界，还是下边界，如果像下面的代码，你的mid值是上边界，而移动左右指针时，又是保持左边界l不变，移动右边界r，那么你可能就会进入无限循环了。
解决的诀窍是，考虑当左右边界之间，只有2个元素时的情况下，如何退出循环。
```java
// ❌ The following code results in inifite loop
int mid = lo + ((hi - lo)/2); // aka the lower mid
// We should use:
// int mid = lo + ((hi - lo + 1)/2) // aka the upper mid

if (100% sure logic) {
	right = mid - 1
} else {
	left = mid // <-- note here
}
```

# API 大法
```java
/**
* Searches a range of the specified array of ints for the specified value using the binary search algorithm. The range must be sorted (as by the sort(int[], int, int) method) prior to making this call. If it is not sorted, the results are undefined. If the range contains multiple elements with the specified value, there is no guarantee which one will be found.
Params:
a – the array to be searched
fromIndex – the index of the first element (inclusive) to be searched
toIndex – the index of the last element (exclusive) to be searched
key – the value to be searched for
Returns:
index of the search key, if it is contained in the array within the specified range; otherwise, (-(insertion point) - 1). The insertion point is defined as the point at which the key would be inserted into the array: the index of the first element in the range greater than the key, or toIndex if all elements in the range are less than the specified key. Note that this guarantees that the return value will be >= 0 if and only if the key is found.
Throws:
IllegalArgumentException – if fromIndex > toIndex
ArrayIndexOutOfBoundsException – if fromIndex < 0 or toIndex > a.length
Since:
1.6
**/
public static int binarySearch(int[] a, @Optional int fromIndex, @Optional int toIndex, @Optional int key) {
    rangeCheck(a.length, fromIndex, toIndex);
    return binarySearch0(a, fromIndex, toIndex, key);
}
```


# 刷题
## 精选练习
* [704.Binary Search](https://leetcode.com/problems/binary-search/) 首选练习，不能更直接了
* [1064.Fixed Point](https://leetcode.com/problems/fixed-point/)
* [34.Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
* [33.Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
* [34.Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)


## 更多基础练习
* [35.Search Insert Position](https://leetcode.com/problems/search-insert-position/) 注意左右指针的初始选择
* [69.Sqrt(x)](https://leetcode.com/problems/sqrtx/) 注意溢出，if条件的选择
* [367.Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/) 和上一题很像
* [278.First Bad Version](https://leetcode.com/problems/first-bad-version/) 
* [374.Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/)
* [704.Binary Search](https://leetcode.com/problems/binary-search/) 首选练习，不能更直接了
* [852.Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/) 不错的一题，建议练习
* [1064.Fixed Point](https://leetcode.com/problems/fixed-point/) 不错的一题，建议练习
* [1099.Two Sum Less Than K](https://leetcode.com/problems/two-sum-less-than-k/) 小变体
* [1150.Check If a Number Is Majority Element in a Sorted Array](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/) 小变体
* [1337.The K Weakest Rows in a Matrix](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/) 坑特别多，值得练习
* [1346.Check If N and Its Double Exist](https://leetcode.com/problems/check-if-n-and-its-double-exist/) 二分法的典型应用，注意负数
* [74.Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
* [1351.Count Negative Numbers in a Sorted Matrix](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/)
* [1385.Find the Distance Value Between Two Arrays](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/)
* [1539.Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/)
* [1608. Special Array With X Elements Greater Than or Equal X](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/)
* [153.Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
* [162.Find Peak Element](https://leetcode.com/problems/find-peak-element/)
* [167.Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) 双指针 + 二分查找，如果你已经想到双指针了，那想想是不是可以结合二分查找缩小指针范围呢？

# 参考
* [Binary Search 101](https://leetcode.com/problems/search-insert-position/discuss/423166/Binary-Search-101)