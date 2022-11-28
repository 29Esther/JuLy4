---
title: [Leetcode] 456. 132 Pattern
date: 2022-11-28 18:33:56
tags:
- Algorithms
- Leetcode
categories:
- tech
---

# 本文重点
[456. 132 Pattern](https://leetcode.com/problems/132-pattern/)

# 常规开篇
就是有一些题，无论做多少次，拿到还是无从下手；就是有一些题，明明是中等level，答案也就短短十几行，可就是可以难倒一群人。这道132 pattern对我来说就是这样的。

# 暴力解法
直接三个循环考虑所有的情况
```java
public boolean find132pattern(int[] nums) {
    int n = nums.length;
    for (int i = 0; i < nums.length - 2; i++) { // 1
        for (int j = i + 1; j < nums.length - 1; j++) { // 3 
            for (int k = j + 1; k < nums.length; k++) { // 2
                if (nums[k] > nums[i] && nums[j] > nums[k])
                    return true;
            }
        }
    }
    return false;
}
```
简单粗暴，时间复杂度O(n^3)，空间复杂度O(1)

# 暴力加一点贪心
对于1，我们永远想要最小的数，所以，我们可以利用这一点，简化上一个暴力解
```java
public boolean find132pattern(int[] nums) {
    int n = nums.length, min = nums[0]; // 1
    for (int i = 1; i < n - 1; i++) { // 3
        for (int j = i + 1; j < n; j++) { // 2
            if (nums[i] > nums[j] && nums[j] > min) return true;
        }
        min = Math.min(min, nums[i]);
    }
    return false;
}
```
时间复杂度O(n^2)，空间复杂度O(1)

# 单调栈基础解法
对于1，我们永远想要最小的数，所以，我们可以用一个循环得到在每一个index时，我们可以得到的最小数。
对于2，我们可以从后往前遍历数组，然后用一个单调栈存储数值
在遍历时，我们同时可以利用最小数和单调栈，找到符合要求的（1，2）pair。
```java
public boolean find132pattern(int[] nums) {
    int n = nums.length;
    
    int[] min = new int[n]; // 1的最优情况
    min[0] = nums[0];
    for (int i = 1; i < n; i++) {
        min[i] = Math.min(nums[i], min[i-1]);
    }
    
    Stack<Integer> stack = new Stack<>(); // 存储所有可能的2
    for (int i = n-1; i > 0; i--) { // 从后往前遍历
        while (!stack.isEmpty() && stack.peek() <= min[i]) {
            stack.pop(); // pop所有小于当前1的数字，因为2需要大于1
        }
        if (!stack.isEmpty() && stack.peek() < nums[i]) {
            // 如果栈内还有元素，那个元素一定 > min[i]，否则就在上一个循环被弹出去了
            // 只要这个元素 < nums[i]，就说明我们找到了一个合格的组合
            return true;
        }
        stack.push(nums[i]);
    }
    return false;
}
```
时间复杂度O(n)，空间复杂度O(n)

# 单调栈再加一点贪心
对于符合要求的132组合，我们除了像上面的解法一样希望1越小越好，我们还希望在有3的情况下2越大越好，所以，除了确定1、2找3之外，我们可以确定2、3找1。这样的话，我们可以之需要一遍循环，从后往前就好。用一个单调递减的栈保存遇到过的所有数字，作为可能的2，如果遇到更大的3，我们可以做栈弹出，找找有没有更大的2
```java
public boolean find132pattern(int[] nums) {
    int n = nums.length, two = Integer.MIN_VALUE; // 2
    
    Stack<Integer> stack = new Stack<>(); // 单调递减存储所有可能的3
    for (int i = n-1; i >= 0; i--) { // 从后往前遍历
        if (nums[i] < two) return true; // 1: nums[i], 2: two, 3: 确定有比two大的值
        while (!stack.isEmpty() && stack.peek() < nums[i]) {
            // 用3做nums[i]
            // stack.peek()比two大
            two = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
}
```
时间复杂度O(n)，空间复杂度O(n)

# 极简主义
有没有办法再节省一点，能不能利用nums，减少stack的空间呢？
```java
public boolean find132pattern(int[] nums) {
    int n = nums.length, two = Integer.MIN_VALUE, threeIndex = n;
    
    // 去掉单调栈，改用nums数组，单调递减存储所有可能的3
    for (int i = n-1; i >= 0; i--) { // 从后往前遍历
        if (nums[i] < two) return true; // 1: nums[i], 2: two, 3: nums[threeIndex]
        while (threeIndex < n && nums[threeIndex] < nums[i]) {
            // 用3做nums[i]
            two = nums[threeIndex++];
        }
        nums[--threeIndex] = nums[i];
    }
    return false;
}
```
时间复杂度O(n)，空间复杂度O(1)

# 更多阅读
* [Monotonic Stack, Monotonic Queue 单调队列，单调栈](https://esther.fun/tech/monotonic-stack-and-monotonic-queue/)