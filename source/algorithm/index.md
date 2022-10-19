---
title: Algorithm 目录 纲要
type: "algorithm"
layout: "books"
image: ../pics/about/algorithm.jpeg
---

# 题目类型
## Done
* [Union Find Set](../tech/union-find-set/)
* [Heap (Priority Queue)](../tech/heap/)
* [Binary Search](../tech/binary-search/)
* [Graph](../tech/graph/)
* [DP](../tech/dp/)
* [Quick Select](../tech/quickselect/)
* [Segment Tree](../tech/segment-tree/)

## Todo
* 单调队列，单调栈
* Binary Index Tree
* 最小生成树

# 思路提示
* Input Array is Sorted
  - Binary Search: O(log n)
  - Two Pointers: O(n)
* Input is a Binary Tree
  - DFS (Preorder, Inorder, Postorder): O(n)
  - BFS (Level Order): O(n)
* Input is a Binary Search Tree
  - Left < Cur < Right: O(log n)
  - Inorder Traversal visits the nodes in ascending (sorted) order: O(n)
* Input is a Matrix/Graph
  - DFS (Recursion, Stack): O(n)
  - BFS (Queue): O(n)
* Find the Shortest/Nearest Path/Distance in a Tree/Matrix/Graph
  - BFS (non-weighted): O(n)
  - Dijkstra (weighted): O(E log V)
* String Concatenation
  - StringBuilder: O(n) (Java, C#, etc.)
  - String.join(): O(n) (Python)
* Input is a Linked List
  - Dummy Node
  - Two Pointers: O(n)
  - Fast & Slow Pointers: O(n)
* Recomputing the Same Input
  - Memoization
* Recursion is Banned
  - Stack
* Permutations/Combinations/Subsets
  - Backtracking
* Find the Top/Least Kth element
  - QuickSelect: O(n) average, O(n²) worst
  - Heap: O(n log k)
* Common Strings
  - Map
  - Trie
* Sort
  - QuickSort: O(n log n) average, O(n²) worst
  - MergeSort: O(n log n)
  - Built-in sorts: O(n log n)
* Find the Smallest/Largest/Median in a Stream
  - Two Heaps
* Must Solve In-Place
  - Swap corresponding values
  - Store different values in the same pointer
* Maximum/Minimum Subarray/Subset/Options
  - Dynamic Programming
* Map/Set
  - Time: O(1)
  - Space: O(n)
* Deque
  - Replaces Stack, Queue, and LinkedList

# Reference
* [Leetcode Cheat Sheet by Pirate King](https://www.piratekingdom.com/leetcode/cheat-sheet#patterns)