---
title: Meta 高频面试题
date: 2022-02-14 18:33:56
tags:
- Algorithms
categories:
- tech
---

# Top 100 in 2022 Feb

* [1249. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)  Stack or Two-way scan
* [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) Recursive follow up是可以remove at most k
* [1762. 能看到海景的建筑物](https://leetcode.com/problems/buildings-with-an-ocean-view/)
* [314. 二叉树的垂直遍历](https://leetcode.com/problems/binary-tree-vertical-order-traversal/)
* [938. Range Sum of BST](https://leetcode.com/problems/range-sum-of-bst/)
* [1570. 两个稀疏向量的点积](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/)
* [1650. 二叉树的最近公共祖先 III](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)
* [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) hashMap, initial data
* [528. Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) 又是一道pre-sum题, 数组为空，所有数字都是0
* [921. Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) One pass
* [973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) PriorityQueue or QuickSelect
* [227. Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/)
* [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) 递归
* [339. 嵌套列表权重和](https://leetcode.com/problems/nested-list-weight-sum/)
* [71. Simplify Path](https://leetcode.com/problems/simplify-path/)
* [408. 有效单词缩写](https://leetcode.com/problems/valid-word-abbreviation/)
* [426. 将二叉搜索树转化为排序的双向链表](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/) 中序遍历 or [morris遍历](https://zhuanlan.zhihu.com/p/101321696)
* [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) QuickSelect
* [50. Pow(x, n)](https://leetcode.com/problems/powx-n/) 递归 Warning StackOverflow
* [827. Making A Large Island](https://leetcode.com/problems/making-a-large-island/) Union Find Set with details
* [31. Next Permutation](https://leetcode.com/problems/next-permutation/) 三步走：1. locate; 2. switch; 3. reorder
* [987. Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) Sort
* [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) BFS
* [670. Maximum Swap](https://leetcode.com/problems/maximum-swap/)
* [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) QuickSelect
* [791. Custom Sort String](https://leetcode.com/problems/custom-sort-string/)
* [65. Valid Number](https://leetcode.com/problems/valid-number/)
* [636. Exclusive Time of Functions](https://leetcode.com/problems/exclusive-time-of-functions/)
* [317. 离建筑物最近的距离](https://leetcode.com/problems/shortest-distance-from-all-buildings/)
* [721. Accounts Merge](https://leetcode.com/problems/accounts-merge/) 组编号，常规UFS，三次遍历
* [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) 全局变量 or int[]
* [523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) Map，要注意初始化和变体
* [498. Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/)
* [301. Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/) dfs, backtracking
* [249. 移位字符串分组](https://leetcode.com/problems/group-shifted-strings/) hash的方法：(s.charAt(i) - s.charAt(i - 1) + 26) % 26
* [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) 循环 or 迭代
* [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/) linear scan / binary search
* [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/) 1. sort; 2. listing; 3. to array
* [415. Add Strings](https://leetcode.com/problems/add-strings/)
* [282. Expression Add Operators](https://leetcode.com/problems/expression-add-operators/) backtrack 高级回溯 要用long 避免溢出
* [1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/) DFS
* [173. Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) Stack
* [140. Word Break II](https://leetcode.com/problems/word-break-ii/)
* [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) 双指针
* [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) Character.isLetterOrDigit, toLowerCase
* [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/submissions/)
* [1891. Cutting Ribbons](https://leetcode.com/problems/cutting-ribbons/) 二分法
* [1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
* [146. LRU Cache](https://leetcode.com/problems/lru-cache/) 细节
* [346. 数据流中的移动平均值](https://leetcode.com/problems/moving-average-from-data-stream/) 1. Queue; 2. 环形列表存储
* [953. Verifying an Alien Dictionary](https://leetcode.com/problems/verifying-an-alien-dictionary/) Special sort or compare bwt i-1 and i
* [766. Toeplitz Matrix](https://leetcode.com/problems/toeplitz-matrix/)
* [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) 双指针 or 两次遍历
* [133. Clone Graph](https://leetcode.com/problems/clone-graph/) DFS
* [708. 循环有序列表的插入](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/)
* [266. Palindrome Permutation](https://leetcode.com/problems/palindrome-permutation/) set / count
* [1216. 验证回文字符串 III](https://leetcode.com/problems/valid-palindrome-iii/) dp
* [1382. Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/)
* [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) PriorityQueue or Divide and Concur for (i = 0; i < n - interval; i += (2*interval)) interval *= 2; 注意数组长度为0的情况
* [286. 墙与门](https://leetcode.com/problems/walls-and-gates/)
* [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
* [2060. Check if an Original String Exists Given Two Encoded Strings](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/)
* [1539. Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/) 两种方法：1. 遍历； 2. Binary Search
* [269. 火星词典](https://leetcode.com/problems/alien-dictionary/) 拓扑排序 Topological Sort - 1. order; 2. queue; 3. toString
* [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
* [348. 设计井字棋](https://leetcode.com/problems/design-tic-tac-toe/)
* [273. Integer to English Words](https://leetcode.com/problems/integer-to-english-words/) Recursive

    ```java
    private final String[] LESS_THAN_20 = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
    private final String[] TENS = {"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    private final String[] THOUSANDS = {"", "Thousand", "Million", "Billion"};
    ```

* [616. 给字符串添加加粗标签](https://leetcode.com/problems/add-bold-tag-in-string/)
* [536. 从字符串生成二叉树](https://leetcode.com/problems/construct-binary-tree-from-string/)
* [1428. 至少有一个 1 的最左端列](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/) 二分法
* [398. Random Pick Index](https://leetcode.com/problems/random-pick-index/) Reservoir sampling
* [515. Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)
* [939. Minimum Area Rectangle](https://leetcode.com/problems/minimum-area-rectangle/)
* [986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)
* [2056. Number of Valid Move Combinations On Chessboard](https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/)
* [1344. Angle Between Hands of a Clock](https://leetcode.com/problems/angle-between-hands-of-a-clock/)
* [863. All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)
* [658. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/) Binary Search
* [1868. 两个行程编码数组的积](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/)
* [253. 会议室 II](https://leetcode.com/problems/meeting-rooms-ii/) PriorityQueue or Two pointers 双指针要再练一下
* [139. Word Break](https://leetcode.com/problems/word-break/) dp
* [1944. Number of Visible People in a Queue](https://leetcode.com/problems/number-of-visible-people-in-a-queue/) 从左往右 / 从右往左都可以
* [270. 最接近的二叉搜索树值](https://leetcode.com/problems/closest-binary-search-tree-value/) 磕磕绊绊
* [43. Multiply Strings](https://leetcode.com/problems/multiply-strings/) 小心0
* [896. Monotonic Array](https://leetcode.com/problems/monotonic-array/)
* [556. Next Greater Element III](https://leetcode.com/problems/next-greater-element-iii/)
* [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) 中心扩展 O(n^2)
* [825. Friends Of Appropriate Ages](https://leetcode.com/problems/friends-of-appropriate-ages/)
* [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/) 去重复
* [958. Check Completeness of a Binary Tree](https://leetcode.com/problems/check-completeness-of-a-binary-tree/) DFS (complete tree: 2^k +1  ⇒ x & (x + 1) == 0) / BFS
* [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) 单调栈 / array
* [778. Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) PriorityQueue + DFS / UnionFind / Binary Search 复杂度都差不多
* [78. Subsets](https://leetcode.com/problems/subsets/)
* [2076. Process Restricted Friend Requests](https://leetcode.com/problems/process-restricted-friend-requests/)
* [325. 和等于 k 的最长子数组长度](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/)
* [1522. N 叉树的直径](https://leetcode.com/problems/diameter-of-n-ary-tree/)
* [1644. 二叉树的最近公共祖先 II](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/)
* [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
* [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) 双指针要再练一下 特别小心字符串没有匹配的地方
* [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
* [1209. Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/) 快慢指针

# Top Questions in LeetCode
* 括号系列
    * [1249. Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)  Stack or Two-way scan
    * [301. Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/) dfs, backtracking
    * [921. Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) One pass
    * [1541. Minimum Insertions to Balance a Parentheses String](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/)
    * [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) Stack
    * [32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/) dp
    * [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) dfs
    * [1003. Check If Word Is Valid After Substitutions](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/) Stack
    * [1963. Minimum Number of Swaps to Make the String Balanced](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/)
    * [2116. Check if a Parentheses String Can Be Valid](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/)
* [953. Verifying an Alien Dictionary](https://leetcode.com/problems/verifying-an-alien-dictionary/) Special sort or compare bwt i-1 and i
* 回文
    * [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) Character.isLetterOrDigit, toLowerCase
    * [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) Recursive follow up是可以remove at most k
* [973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) PriorityQueue or QuickSelect
* [273. Integer to English Words](https://leetcode.com/problems/integer-to-english-words/) Recursive
* 数学
    * 简单加法
        * [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
        * [445. Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/)
        * [67. Add Binary](https://leetcode.com/problems/add-binary/)
        * [415. Add Strings](https://leetcode.com/problems/add-strings/)
        * [66. Plus One](https://leetcode.com/problems/plus-one/)
        * [989. Add to Array-Form of Integer](https://leetcode.com/problems/add-to-array-form-of-integer/)
        * [1634. 求两个多项式链表的和](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/)
        * [369. 给单链表加一](https://leetcode.com/problems/plus-one-linked-list/)
    * 求和
        * Map
            * [15. 3Sum](https://leetcode.com/problems/3sum/)
            * [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) hashMap, initial data
            * [523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) Map，要注意初始化和变体
            * [1. Two Sum](https://leetcode.com/problems/two-sum)
            * [1570. 两个稀疏向量的点积](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/)
            * [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/)
        * Sum妙用
            * [528. Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) 又是一道pre-sum题
    * 乘法
        * [238. 除自身以外数组的乘积](https://leetcode.com/problems/product-of-array-except-self/) - Two-way scan, 进化one-way
    * 高级数学
        * [29. Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) 位运算真不行
        * [43. Multiply Strings](https://leetcode.com/problems/multiply-strings/) 小心0
        * [282. Expression Add Operators](https://leetcode.com/problems/expression-add-operators/) backtrack 高级回溯
        * [65. Valid Number](https://leetcode.com/problems/valid-number/)
        * [227. Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/)
    * 排列组合
        * [31. Next Permutation](https://leetcode.com/problems/next-permutation/) 三步走：1. locate; 2. switch; 3. reorder
* [297. 二叉树的序列化与反序列化](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
* [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
* intervals
    * [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/) 1. sort; 2. listing; 3. to array
    * [986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)
    * [252. 会议室](https://leetcode.com/problems/meeting-rooms/)
    * [253. 会议室 II](https://leetcode.com/problems/meeting-rooms-ii/) PriorityQueue or Two pointers 双指针要再练一下
    * [636. Exclusive Time of Functions](https://leetcode.com/problems/exclusive-time-of-functions/)
* [621. Task Scheduler](https://leetcode.com/problems/task-scheduler/) 计算细节
* [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) QuickSelect
* [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)
* TreeOrder DFS or BFS
    * [938. Range Sum of BST](https://leetcode.com/problems/range-sum-of-bst/)
    * [314. 二叉树的垂直遍历](https://leetcode.com/problems/binary-tree-vertical-order-traversal/)
    * [173. Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/) Stack
    * [987. Vertical Order Traversal of a Binary Tree](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) Sort
    * [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)
    * [107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)
    * [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
    * [637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/)
    * [429. N-ary Tree Level Order Traversal](https://leetcode.com/problems/n-ary-tree-level-order-traversal/)
    * [993. Cousins in Binary Tree](https://leetcode.com/problems/cousins-in-binary-tree/)
    * [545. 二叉树的边界](https://leetcode.com/problems/boundary-of-binary-tree/)
    * [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) 全局变量 or int[]
    * [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
    * [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) BFS
    * [133. Clone Graph](https://leetcode.com/problems/clone-graph/) DFS
    * [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) 循环 or 迭代
* [91. Decode Ways](https://leetcode.com/problems/decode-ways/) DP
* [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/submissions/)
* [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) PriorityQueue or Divide and Concur for (i = 0; i < n - interval; i += (2*interval)) interval *= 2;
* [50. Pow(x, n)](https://leetcode.com/problems/powx-n/) 递归 Warning StackOverflow
* [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) 双指针要再练一下
* [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) DFS 颜色标记法 or UnionFindSet
* [269. 火星词典](https://leetcode.com/problems/alien-dictionary/) 拓扑排序 Topological Sort - 1. order; 2. queue; 3. toString
* [426. 将二叉搜索树转化为排序的双向链表](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/) 中序遍历 or [morris遍历](https://zhuanlan.zhihu.com/p/101321696)
* [211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) Trie
* [1428. 至少有一个 1 的最左端列](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/) 二分法
* 求祖宗系列
    * [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
    * [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) 递归
    * [1123. Lowest Common Ancestor of Deepest Leaves](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/)
    * [1644. 二叉树的最近公共祖先 II](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/)
    * [1650. 二叉树的最近公共祖先 III](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)
    * [1676. 二叉树的最近公共祖先 IV](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/)
* [278. First Bad Version](https://leetcode.com/problems/first-bad-version/) 简单二分
* [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) 双指针 or 两次遍历
* [139. Word Break](https://leetcode.com/problems/word-break/) dp
* [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) backtrack
* [721. Accounts Merge](https://leetcode.com/problems/accounts-merge/) 注意union find的思路和优化
* [1762. 能看到海景的建筑物](https://leetcode.com/problems/buildings-with-an-ocean-view/)
* [146. LRU Cache](https://leetcode.com/problems/lru-cache/) 细节
* [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
* [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) 中序遍历 / 递归
* [347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) QuickSelect
    * [692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)
* [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
* [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)
* [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
* [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
* [140. Word Break II](https://leetcode.com/problems/word-break-ii/)
* [670. Maximum Swap](https://leetcode.com/problems/maximum-swap/)
* [339. 嵌套列表权重和](https://leetcode.com/problems/nested-list-weight-sum/)
* [785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/) 颜色标记法
* [8. String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/) 分情况讨论，疯狂if else orDeterministic Finite Automaton (DFA) 注意溢出情况
* [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)
* [311. 稀疏矩阵的乘法](https://leetcode.com/problems/sparse-matrix-multiplication/)
* [349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) set or 排序后的双指针
    * [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/)
* [159. 至多包含两个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/)
* [340. 至多包含 K 个不同字符的最长子串](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)
* [257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)
* [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)
* [157. 用 Read4 读取 N 个字符](https://leetcode.com/problems/read-n-characters-given-read4/)
    * 进阶版
        * [158. 用 Read4 读取 N 个字符 II](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/) 题
* [127. Word Ladder](https://leetcode.com/problems/word-ladder/)
* [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/)
* [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
* [270. 最接近的二叉搜索树值](https://leetcode.com/problems/closest-binary-search-tree-value/) 这么简单的一道题，为啥我没做出来？？
* [317. 离建筑物最近的距离](https://leetcode.com/problems/shortest-distance-from-all-buildings/)
* [249. 移位字符串分组](https://leetcode.com/problems/group-shifted-strings/) hash的方法：(s.charAt(i) - s.charAt(i - 1) + 26) % 26
* [304. Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)
* [896. Monotonic Array](https://leetcode.com/problems/monotonic-array/)
* [398. Random Pick Index](https://leetcode.com/problems/random-pick-index/) Reservoir sampling
* [380. Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) List + Map
    * [381. Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/)
* [286. 墙与门](https://leetcode.com/problems/walls-and-gates/)
* [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
* [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
* [708. 循环有序列表的插入](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/)
* [325. 和等于 k 的最长子数组长度](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/)
* [377. Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) DP
* [791. Custom Sort String](https://leetcode.com/problems/custom-sort-string/)
* [498. Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/)
* [378. Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
* [341. Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator/)
* [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) (n n)
* [346. 数据流中的移动平均值](https://leetcode.com/problems/moving-average-from-data-stream/) 1. Queue; 2. 环形列表存储
* [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)
* [1209. Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)
* [529. Minesweeper](https://leetcode.com/problems/minesweeper/)
* [298. 二叉树最长连续序列](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/)
    * [549. 二叉树中最长的连续序列](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/) follow up
* [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) Recursion → Iteration
* [719. Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) 精准二分
* [28. Implement strStr()](https://leetcode.com/problems/implement-strstr/) KMP 太难了
* [1382. Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/)
* [480. Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)
* [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)
* [71. Simplify Path](https://leetcode.com/problems/simplify-path/) 用Deque<String> stack = new LinkedList<>();,可以两头操作
* [772. 基本计算器 III](https://leetcode.com/problems/basic-calculator-iii/) 只有加和乘，follow up是加上减和除
* [1539. Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/) Binary Search
* [983. Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/) dp
* [658. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/) Binary Search
* [408. 有效单词缩写](https://leetcode.com/problems/valid-word-abbreviation/)
* [489. 扫地机器人](https://leetcode.com/problems/robot-room-cleaner/)
* [268. Missing Number](https://leetcode.com/problems/missing-number/) XOR; Sum; Binary Search
* [366. 寻找二叉树的叶子节点](https://leetcode.com/problems/find-leaves-of-binary-tree/)
* [295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)
* 中心对称数
    * [246. 中心对称数](https://leetcode.com/problems/strobogrammatic-number/)
    * [247. 中心对称数 II](https://leetcode.com/problems/strobogrammatic-number-ii/)
    * [248. 中心对称数 III](https://leetcode.com/problems/strobogrammatic-number-iii/)
    * [1056. 易混淆数](https://leetcode.com/problems/confusing-number/)
* [207. Course Schedule](https://leetcode.com/problems/course-schedule/) Topological Sorting
* [827. Making A Large Island](https://leetcode.com/problems/making-a-large-island/) Union Find Set with details
* [112. Path Sum](https://leetcode.com/problems/path-sum/) recursion or iteration
* 跳跃游戏
    * [55. Jump Game](https://leetcode.com/problems/jump-game/) Greedy
    * [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/) Greedy
    * [1306. Jump Game III](https://leetcode.com/problems/jump-game-iii/) recursion or iteration
    * [1345. Jump Game IV](https://leetcode.com/problems/jump-game-iv/) Queue
    * [1340. Jump Game V](https://leetcode.com/problems/jump-game-v/)
    * [1696. Jump Game VI](https://leetcode.com/problems/jump-game-vi/) Deque or in-place dp
    * [1871. Jump Game VII](https://leetcode.com/problems/jump-game-vii/) Smart DP
* [14. Longest Common Prefix](https://leetcode.com/problems/jump-game/) Horizontal scanning; Vertical scanning; Divide and conquer; Binary search
* [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
* bitmask
    * [78. Subsets](https://leetcode.com/problems/subsets/)
    * [2151. Maximum Good People Based on Statements](https://leetcode.com/problems/maximum-good-people-based-on-statements/)
* [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
* [323. 无向图中连通分量的数目](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) UnionFindSet
* [939. Minimum Area Rectangle](https://leetcode.com/problems/minimum-area-rectangle/)
* [963. Minimum Area Rectangle II](https://leetcode.com/problems/minimum-area-rectangle-ii/)
* [79. Word Search](https://leetcode.com/problems/word-search/)
* [702. 搜索长度未知的有序数组](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/)
* [277. 搜寻名人](https://leetcode.com/problems/find-the-celebrity/)
* [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
* [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
* [1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
* [1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
* [622. Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)
* [863. All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)
* [766. Toeplitz Matrix](https://leetcode.com/problems/toeplitz-matrix/)
* [1891. Cutting Ribbons](https://leetcode.com/problems/cutting-ribbons/)
* [270. Closest Binary Search Tree Value](https://leetcode.com/problems/closest-binary-search-tree-value/)
* [515. Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)
* [695. Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
* [116. Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)
* [266. Palindrome Permutation](https://leetcode.com/problems/palindrome-permutation/)