---
title: 堆（优先队列）
date: 2021-12-18 18:33:56
tags:
- Algorithms
categories:
- tech
---

A heap:
* Stores elements, and can find the smallest (min-heap) or largest (max-heap) element stored in O(1).
* Can add elements and remove the smallest (min-heap) or largest (max-heap) element in O(log(n)).
* Can perform insertions and removals while always maintaining the first property.

# PriorityQueue in Java
An unbounded priority queue based on a priority heap. The elements of the priority queue are ordered according to their natural ordering, or by a Comparator provided at queue construction time, depending on which constructor is used.
The head of this queue is the least element with respect to the specified ordering
## Opeartions
* void offer()
* Object poll()
* int size()
* boolean isEmpty()

# TreeSet in Java
A NavigableSet implementation based on a TreeMap. The elements are ordered using their natural ordering, or by a Comparator provided at set creation time, depending on which constructor is used.
This implementation provides guaranteed log(n) time cost for the basic operations (add, remove and contains).
Note that the ordering maintained by a set (whether or not an explicit comparator is provided) must be consistent with equals if it is to correctly implement the Set interface.
## Opeartions
* void add()
* E lower(E e)
* E floor(E e)
* E ceiling(E e)
* E higher(E e)

# 用法
1. 直接，当作排序数组
2. Dijkstra，求单源最短路径
3. 一边压入，比较另一边


# 刷题
* [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
* [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
* [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
* [1488. Avoid Flood in The City](https://leetcode.com/problems/avoid-flood-in-the-city/submissions/)（treeset）
* [1337. The K Weakest Rows in a Matrix](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/)（Easy, inituitive，但是用二分查找更快）
* [703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)（Easy, 不能更简单粗暴的heap）
* [506. Relative Ranks](https://leetcode.com/problems/relative-ranks/)（Easy, 任意排序）
* [1046. Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)（Easy, heap直接上）
* [2099. Find Subsequence of Length K With the Largest Sum](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/)（Easy, 有点意思，理解了，好像又不太理解）
* [451. Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)
* [767. Reorganize String](https://leetcode.com/problems/reorganize-string/)（这题没做出来，着实伤心了！！）
* [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/)
* [264. Ugly Number II](https://leetcode.com/problems/ugly-number-ii/)（做到这里，还是没有总结出技巧，要继续努力QwQ）
* [313. Super Ugly Number](https://leetcode.com/problems/super-ugly-number/)（上一题的升级版）
* [378. Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)（与前面的同一类型）
* [1094. Car Pooling](https://leetcode.com/problems/car-pooling/)（和下面235很像）
* [692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)（Easy，直接）
* [1792. Maximum Average Pass Ratio](https://leetcode.com/problems/maximum-average-pass-ratio/)（基础操作）
* [355. Design Twitter](https://leetcode.com/problems/design-twitter/)（简单应用题）
* [1962. Remove Stones to Minimize the Total](https://leetcode.com/problems/remove-stones-to-minimize-the-total/)（算是常规操作）
* [1405. Longest Happy String](https://leetcode.com/problems/longest-happy-string/)（贪心算法）
* [1514. Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/)（Dijkstra）
* [1882. Process Tasks Using Servers](https://leetcode.com/problems/process-tasks-using-servers/)
* [1801. Number of Orders in the Backlog](https://leetcode.com/problems/number-of-orders-in-the-backlog/)
* [505. The Maze II](https://leetcode.com/problems/the-maze-ii)（Dijkstra 练到吐）
* [1834. Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/)


## 三思
* [218. The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)
* [787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)（[Graph](../graph/)里的同题，再战，依旧铩羽而归，惭愧惭愧 QwQ，这题可以1. BellBellman-Ford: Map + queue；2. Dijkstra: array + priority queue；升级版[1928. Minimum Cost to Reach Destination in Time](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/)，我还是不会QwQ）
* [1353. Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)（还需修炼！pq的经典用法）
* [373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)（这题为啥没做出来？？？？反省！！！！！）
* [1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)（Dijikstra）
* [1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)
* [1696. Jump Game VI](https://leetcode.com/problems/jump-game-vi/)（很好玩的跳跃游戏，总是能把愚蠢的我打回原型🐟）
* [1786. Number of Restricted Paths From First to Last Node](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/)（需要每天复习一遍的Dijkstra）
* [295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)（经典的两队配合）


## 其他
* [621. Task Scheduler](https://leetcode.com/problems/task-scheduler/)（是很tricky的一题，知道怎么做了，但不知道为啥和怎么想出来的）
* [253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii)（被shuxian剧透了，生气）

# 参考
* [Heap Wikipedia](https://en.wikipedia.org/wiki/Heap_(data_structure)#Implementation)