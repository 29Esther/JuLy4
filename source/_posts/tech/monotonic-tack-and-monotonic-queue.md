---
title: 单调队列，单调栈
date: 2022-11-13 18:33:56
tags:
- Algorithms
categories:
- tech
---

# 开篇废话
兜兜转转又一个月，继续征战，这次我们看看视觉美观的单调队列和单调栈，看看单调的人生怎么解。

## 简单题入手

* [1475. Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/) {.hl}
  <button type="button" class="collapsible">一些理解</button>
  <collapsible-content>
    这题一道比较典型的单调栈问题, 由于我们只需要找到右侧第一个小于当前数的数，我们有两种遍历方式：1. 从左往右遍历，栈中维护之前数字的index，如果之前的数大于当前数，我们那弹出并更新前一个数的答案；2. 从右往左遍历，栈中维护已遇到的数字，如果当前数小于之前的数字，则一直弹出，直到遇到一个小于当前数的数字，或者栈为空，得出当前答案。
    ```yaml
    hello: hexo
    ```
    ```java
    // 方法一
    public int[] finalPrices(int[] prices) {
        int n = prices.length;
        int[] ans = new int[n];
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && prices[stack.peek()] >= prices[i]) {
                ans[stack.pop()] -= prices[i];
            }
            ans[i] = prices[i];
            stack.push(i);
        }
        return ans;
    }
    // 方法二
    public int[] finalPrices(int[] prices) {
        int n = prices.length;
        int[] ans = new int[n];
        Stack<Integer> stack = new Stack<>();
        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() > prices[i]) {
                stack.pop();
            }
            ans[i] = prices[i] - (stack.isEmpty() ? 0 : stack.peek());
            stack.push(prices[i]);
        }
        return ans;
    }
    ```
  </collapsible-content>
* <hl>[1475. Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/)</hl>
这题一道比较典型的单调栈问题，由恋歌



1673. Find the Most Competitive Subsequence
1671. Minimum Number of Removals to Make Mountain Array
1475. Final Prices With a Special Discount in a Shop
1425. Constrained Subsequence Sum
1130. Minimum Cost Tree From Leaf Values
907. Sum of Subarray Minimums
901. Online Stock Span
856. Score of Parentheses
503. Next Greater Element II
496. Next Greater Element I
84. Largest Rectangle in Histogram
42. Trapping Rain Water

84 Largest Rectangle in Histogram
214 Shortest Palindrome
239 Sliding Window Maximum
316 Remove Duplicate Letters
321 Create Maximum Number
402 Remove K Digits
456 132 Pattern
496 Next Greater Element I
503. Next Greater Element II
654 Maximum Binary Tree
739. Daily Temperatures
768 Max Chunks To Make Sorted II
862 Shortest Subarray with Sum at Least K
889 Construct Binary Tree from Preorder and Postorder Traversalhttps://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal)
901 Online Stock Span
907 Sum of Subarray Minimums
1019. Next Greater Node In Linked List
1475 Final Prices With a Special Discount in a Shop
