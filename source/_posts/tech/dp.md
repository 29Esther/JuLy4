
---
title: 动态规划
date: 2022-09-25 18:33:56
tags:
- Algorithms
categories:
- tech
---

# 开篇废话
时隔一年，又开始了我的算法生涯。唉，苦海无边，人生有涯啊。
这次先来看看DP，DP难在找到递归式和边界值。

# 流程
动态规划问题的一般形式就是求最值，求解的核心问题是穷举，然后找最值。
动态规划的一般流程就是三步：暴力的递归解法 -> 带备忘录的递归解法 -> 迭代的动态规划解法
具体来说，利用递归思维列出正确的 **「状态转移方程」**，判断算法问题是否具备 **「最优子结构」**，即能否通过子问题的最值得到原问题的最值，再判断是否需要用「备忘录」或者「DP table」来优化穷举过程，解决 **「重叠子问题」**。
思考步骤：明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义

# 模版
```
# 自顶向下递归的动态规划
def dp(状态1, 状态2, ...):
    for 选择 in 所有可能的选择:
        # 此时的状态已经因为做了选择而改变
        result = 求最值(result, dp(状态1, 状态2, ...))
    return result

# 自底向上迭代的动态规划
# 初始化 base case
dp[0][0][...] = base case
# 进行状态转移
for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        for ...
            dp[状态1][状态2][...] = 求最值(选择1，选择2...)
```

# 单串经典问题
## 最长递增子序列（Longest Increasing Subsequence，LIS）
### 模版
1. 嵌套遍历
2. binary search
```
## 朴素版
public int lengthOfLIS(int[] nums) {
    int n = nums.length;
    int[] dp = new int[n];
    int index = 0;
    dp[index] = nums[0];
    for (int i = 1; i < nums.length; i++) {
        if (dp[index] < nums[i]) {
            dp[++index] = nums[i];
        } else {
            int l = 0, r = index;
            while (l < r) {
                int mid = (l + r) >> 1;
                if (dp[mid] < nums[i]) {
                    l = mid + 1;
                } else {
                    r = mid;
                }
            }
            dp[l] = nums[i];
        }
    }
    return index + 1;
}
## API版本
public int lengthOfLIS(int[] nums) {
    int[] dp = new int[nums.length];
    int len = 0;
    for (int num : nums) {
        int i = Arrays.binarySearch(dp, 0, len, num);
        if (i < 0) {
            i = -(i + 1);
        }
        dp[i] = num;
        if (i == len) {
            len++;
        }
    }
    return len;
}
```
### 问题
* [300.Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence)
* [673.Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence)
* [354.Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes)
* [368.Largest Divisible Subset](https://leetcode.com/problems/largest-divisible-subset)
### 参考
* [拉不拉东讲解](https://github.com/labuladong/fucking-algorithm/blob/e94b84cdd1271fceb0cd96172b512169500e6e43/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%AE%BE%E8%AE%A1%EF%BC%9A%E6%9C%80%E9%95%BF%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97.md)

## 最大子数组和
### 模版
```
# Kadane's algorithm
max = cur = None
for x in A:
    cur = x + max(cur, 0)
    max = max(max, cur)
return max
```
矩阵的话，方法类似：算出每一列的前缀和，然后遍历所有情况的行组合。O(n^2m)
### 问题
* [53.Maximum Subarray](https://leetcode.com/problems/maximum-subarray)
* [152.Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray)
* [918.Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray)
* [面试题 17.24. Max Submatrix LCCI](https://leetcode.cn/problems/max-submatrix-lcci/) 
* [363. Max Sum of Rectangle No Larger Than K](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/)

## 最大子数组和变体：House Robber
### 模版
```
pre1 = pre2 = max = cur = None
for x in A:
    cur = x + max(pre2, 0)
    pre2 = pre1
    pre1 = max(pre1, cur)
    max = max(max, cur);
return max
```
### 问题
* [198.House Robber](https://leetcode.com/problems/house-robber)
* [213.House Robber II](https://leetcode.com/problems/house-robber-ii)
* [337.House Robber III](https://leetcode.com/problems/house-robber-iii)
* [740.Delete and Earn](https://leetcode.com/problems/delete-and-earn)
* [1388. Pizza With 3n Slices](https://leetcode.com/problems/pizza-with-3n-slices/)


## 需要两个位置的情况
### 问题
* [873.Length of Longest Fibonacci Subsequence](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence)
* [1027.Longest Arithmetic Subsequence](https://leetcode.com/problems/longest-arithmetic-subsequence)

## 其他
### 问题
* [1055.Shortest Way to Form String](https://leetcode.com/problems/shortest-way-to-form-string)
* [32.Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses) 两种方法，空间复杂度O(n)和O(1)
* [413. Arithmetic Slices](https://leetcode.com/problems/arithmetic-slices/)
* [91.Decode Ways](https://leetcode.com/problems/decode-ways) 考虑各种情况
* [132.Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii)
* [583.Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings) Edit Distance
* [338.Counting Bits](https://leetcode.com/problems/counting-bits)
* [801.Minimum Swaps To Make Sequences Increasing](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing)
* [871.Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops) 贪心比较容易想，但是dp的话，还是有点复杂的

## 带维度的单串！！
增加维度，通常用 k 表示，k 随着题目的不同，可以表示长度，个数，次数，颜色等，同时 k 这个维度的枚举和转移可能涉及到二分，贪心等算法
### 问题
* [256. Paint House](https://leetcode.com/problems/paint-house/)
* [265. Paint House II](https://leetcode.com/problems/paint-house-ii/)
* [1473.Paint House III](https://leetcode.com/problems/paint-house-iii)
* [813.Largest Sum of Averages](https://leetcode.com/problems/largest-sum-of-averages) 这题并不难，就是很烦
* <class='hl'>[887.Super Egg Drop](https://leetcode.com/problems/super-egg-drop)</class> 测试题
* [975.Odd Even Jump](https://leetcode.com/problems/odd-even-jump) TreeMap
* [403.Frog Jump](https://leetcode.com/problems/frog-jump)
* [1478.Allocate Mailboxes](https://leetcode.com/problems/allocate-mailboxes) 搞不定啊！能想到大概思路，但是实现有困难
* [1230. Toss Strange Coins](https://leetcode.com/problems/toss-strange-coins/) 太多细节啦

## 买卖股票
* [121.Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)
* [122.Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii)
* [123.Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii)
* [188.Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv)
* [309.Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown)
* [714.Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee)

# 双串经典问题
## 最长公共子序列(LCS)
* [1143.Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence)
* [712. Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)
* [718.Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray)
* [72.Edit Distance](https://leetcode.com/problems/edit-distance)
* [44.Wildcard Matching](https://leetcode.com/problems/wildcard-matching)
* [10.Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching) // todo

## 矩阵问题
* [120.Triangle](https://leetcode.com/problems/triangle)
* [64.Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum)
* [174.Dungeon Game](https://leetcode.com/problems/dungeon-game)
* [221.Maximal Square](https://leetcode.com/problems/maximal-square)
* [931.Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum)

# 无串问题
* [650. 2 Keys Keyboard](https://leetcode.com/problems/2-keys-keyboard/)
* [264.Ugly Number II](https://leetcode.com/problems/ugly-number-ii)
* [279.Perfect Squares](https://leetcode.com/problems/perfect-squares)
* [343.Integer Break](https://leetcode.com/problems/integer-break)

# 前缀和 
## 单纯实现
### 问题
* [303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)
* [304. Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)

## 数据结构维护前缀和
### 常见数据结构
* 哈希表
  * 键是前缀和（状态）的值，值为第一次出现时的索引
  * 键是前缀和（前缀状态）的值，值为出现次数
  * 键是前缀和模 K 的余数（可以理解为前缀状态，状态为前缀和模K）
* 二维数组
* 线段树
* 其他：
  * 前缀和（积）与后缀和（积）均需要
  * 二维前缀和
### 问题
* [325. Maximum Size Subarray Sum Equals k](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/)
* [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/)
* [1371. Find the Longest Substring Containing Vowels in Even Counts](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts)
* [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
* [1248. Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)
* [523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)
* [974. Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)
* [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
* [724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)
* [1477. Find Two Non-overlapping Sub-arrays Each With Target Sum](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/)
* [1074. Number of Submatrices That Sum to Target](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/)
* [1314. Matrix Block Sum](https://leetcode.com/problems/matrix-block-sum/)
* [363. Max Sum of Rectangle No Larger Than K](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/)
* [152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
* [713. Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)
* [1352. Product of the Last K Numbers](https://leetcode.com/problems/product-of-the-last-k-numbers/)
* [1310. XOR Queries of a Subarray](https://leetcode.com/problems/xor-queries-of-a-subarray/)
* [1442. Count Triplets That Can Form Two Arrays of Equal XOR](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)
* [370. Range Addition](https://leetcode.com/problems/range-addition/)

# 区间动态规划
## 回文系列
* [5.Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring) // todo: classic
* [647.Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings)
* [516.Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence) // todo: classic
* [730.Count Different Palindromic Subsequences](https://leetcode.com/problems/count-different-palindromic-subsequences) // todo: 地狱模式
* [1312.Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome)
* [1147. Longest Chunked Palindrome Decomposition](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/) // todo: 地狱模式
* [1216.Valid Palindrome III](https://leetcode.com/problems/valid-palindrome-iii)
## 下面的我一道都不会，被自己蠢哭了【放弃。想转行了 

# 未归类，我还没做，等慢慢做吧
* [42.Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)
* [818.Race Car](https://leetcode.com/problems/race-car)
* [2272.Substring With Largest Variance](https://leetcode.com/problems/substring-with-largest-variance)
* [903.Valid Permutations for DI Sequence](https://leetcode.com/problems/valid-permutations-for-di-sequence)
* [22.Generate Parentheses](https://leetcode.com/problems/generate-parentheses)
* [629.K Inverse Pairs Array](https://leetcode.com/problems/k-inverse-pairs-array)
* [458.Poor Pigs](https://leetcode.com/problems/poor-pigs)
* [118.Pascal's Triangle](https://leetcode.com/problems/pascal's-triangle)
* [1048.Longest String Chain](https://leetcode.com/problems/longest-string-chain)
* [410.Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum)
* [823.Binary Trees With Factors](https://leetcode.com/problems/binary-trees-with-factors)
* [329.Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix)
* [322.Coin Change](https://leetcode.com/problems/coin-change)
* [828.Count Unique Characters of All Substrings of a Given String](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string)
* [62.Unique Paths](https://leetcode.com/problems/unique-paths)
* [1235.Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling)
* [472.Concatenated Words](https://leetcode.com/problems/concatenated-words)
* [968.Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras)
* [1639.Number of Ways to Form a Target String Given a Dictionary](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary)
* [526.Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement)
* [70.Climbing Stairs](https://leetcode.com/problems/climbing-stairs)
* [139.Word Break](https://leetcode.com/problems/word-break)
* [509.Fibonacci Number](https://leetcode.com/problems/fibonacci-number)
* [1240.Tiling a Rectangle with the Fewest Squares](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares)
* [55.Jump Game](https://leetcode.com/problems/jump-game)
* [1220.Count Vowels Permutation](https://leetcode.com/problems/count-vowels-permutation)
* [473.Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square)
* [124.Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum)
* [45.Jump Game II](https://leetcode.com/problems/jump-game-ii)
* [140.Word Break II](https://leetcode.com/problems/word-break-ii)
* [1696.Jump Game VI](https://leetcode.com/problems/jump-game-vi)
* [1326.Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden)
* [97.Interleaving String](https://leetcode.com/problems/interleaving-string)
* [465.Optimal Account Balancing](https://leetcode.com/problems/optimal-account-balancing)
* [2035.Partition Array Into Two Arrays to Minimize Sum Difference](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference)
* [576.Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths)
* [1654.Minimum Jumps to Reach Home](https://leetcode.com/problems/minimum-jumps-to-reach-home)
* [691.Stickers to Spell Word](https://leetcode.com/problems/stickers-to-spell-word)
* [131.Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning)
* [377.Combination Sum IV](https://leetcode.com/problems/combination-sum-iv)
* [907.Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums)
* [312.Burst Balloons](https://leetcode.com/problems/burst-balloons)
* [85.Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle)
* [552.Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii)
* [2008.Maximum Earnings From Taxi](https://leetcode.com/problems/maximum-earnings-from-taxi)
* [787.Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops)
* [474.Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes)
* [678.Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string)
* [1937.Maximum Number of Points with Cost](https://leetcode.com/problems/maximum-number-of-points-with-cost)
* [416.Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum)
* [1611.Minimum One Bit Operations to Make Integers Zero](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero)
* [1641.Count Sorted Vowel Strings](https://leetcode.com/problems/count-sorted-vowel-strings)
* [241.Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses)
* [983.Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets)
* [741.Cherry Pickup](https://leetcode.com/problems/cherry-pickup)
* [790.Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling)
* [698.Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets)
* [376.Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence)
* [63.Unique Paths II](https://leetcode.com/problems/unique-paths-ii)
* [943.Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring)
* [1799.Maximize Score After N Operations](https://leetcode.com/problems/maximize-score-after-n-operations)
* [95.Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii)
* [435.Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals)
* [894.All Possible Full Binary Trees](https://leetcode.com/problems/all-possible-full-binary-trees)
* [1547.Minimum Cost to Cut a Stick](https://leetcode.com/problems/minimum-cost-to-cut-a-stick)
* [1884.Egg Drop With 2 Eggs and N Floors](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors)
* [87.Scramble String](https://leetcode.com/problems/scramble-string)
* [1031.Maximum Sum of Two Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays)
* [494.Target Sum](https://leetcode.com/problems/target-sum)
* [1277.Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones)
* [542.01 Matrix](https://leetcode.com/problems/01-matrix)
* [1000.Minimum Cost to Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones)
* [2262.Total Appeal of A String](https://leetcode.com/problems/total-appeal-of-a-string)
* [2355.Maximum Number of Books You Can Take](https://leetcode.com/problems/maximum-number-of-books-you-can-take)
* [1567.Maximum Length of Subarray With Positive Product](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product)
* [486.Predict the Winner](https://leetcode.com/problems/predict-the-winner)
* [1043.Partition Array for Maximum Sum](https://leetcode.com/problems/partition-array-for-maximum-sum)
* [1335.Minimum Difficulty of a Job Schedule](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule)
* [96.Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees)
* [935.Knight Dialer](https://leetcode.com/problems/knight-dialer)
* [392.Is Subsequence](https://leetcode.com/problems/is-subsequence)
* [1493.Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1's-after-deleting-one-element)
* [518.Coin Change II](https://leetcode.com/problems/coin-change-ii)
* [1770.Maximum Score from Performing Multiplication Operations](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations)
* [746.Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs)
* [1125.Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team)
* [2311.Longest Binary Subsequence Less Than or Equal to K](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k)
* [845.Longest Mountain in Array](https://leetcode.com/problems/longest-mountain-in-array)
* [834.Sum of Distances in Tree](https://leetcode.com/problems/sum-of-distances-in-tree)
* [1524.Number of Sub-arrays With Odd Sum](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum)
* [464.Can I Win](https://leetcode.com/problems/can-i-win)
* [688.Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard)
* [418.Sentence Screen Fitting](https://leetcode.com/problems/sentence-screen-fitting)
* [1537.Get the Maximum Score](https://leetcode.com/problems/get-the-maximum-score)
* [1162.As Far from Land as Possible](https://leetcode.com/problems/as-far-from-land-as-possible)
* [1723.Find Minimum Time to Finish All Jobs](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs)
* [847.Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes)
* [1049.Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii)
* [1387.Sort Integers by The Power Value](https://leetcode.com/problems/sort-integers-by-the-power-value)
* [1578.Minimum Time to Make Rope Colorful](https://leetcode.com/problems/minimum-time-to-make-rope-colorful)
* [1025.Divisor Game](https://leetcode.com/problems/divisor-game)
* [964.Least Operators to Express Number](https://leetcode.com/problems/least-operators-to-express-number)
* [1349.Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam)
* [2100.Find Good Days to Rob the Bank](https://leetcode.com/problems/find-good-days-to-rob-the-bank)
* [2172.Maximum AND Sum of Array](https://leetcode.com/problems/maximum-and-sum-of-array)
* [926.Flip String to Monotone Increasing](https://leetcode.com/problems/flip-string-to-monotone-increasing)
* [1994.The Number of Good Subsets](https://leetcode.com/problems/the-number-of-good-subsets)
* [361.Bomb Enemy](https://leetcode.com/problems/bomb-enemy)
* [333.Largest BST Subtree](https://leetcode.com/problems/largest-bst-subtree)
* [1617.Count Subtrees With Max Distance Between Cities](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities)
* [1359.Count All Valid Pickup and Delivery Options](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options)
* [2327.Number of People Aware of a Secret](https://leetcode.com/problems/number-of-people-aware-of-a-secret)
* [2050.Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii)
* [1525.Number of Good Ways to Split a String](https://leetcode.com/problems/number-of-good-ways-to-split-a-string)
* [1155.Number of Dice Rolls With Target Sum](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum)
* [902.Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set)
* [1531.String Compression II](https://leetcode.com/problems/string-compression-ii)
* [1664.Ways to Make a Fair Array](https://leetcode.com/problems/ways-to-make-a-fair-array)
* [2184.Number of Ways to Build Sturdy Brick Wall](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall)
* [1334.Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance)
* [1395.Count Number of Teams](https://leetcode.com/problems/count-number-of-teams)
* [1653.Minimum Deletions to Make String Balanced](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced)
* [1012.Numbers With Repeated Digits](https://leetcode.com/problems/numbers-with-repeated-digits)
* [2188.Minimum Time to Finish the Race](https://leetcode.com/problems/minimum-time-to-finish-the-race)
* [1186.Maximum Subarray Sum with One Deletion](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion)
* [1986.Minimum Number of Work Sessions to Finish the Tasks](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks)
* [568.Maximum Vacation Days](https://leetcode.com/problems/maximum-vacation-days)
* [2338.Count the Number of Ideal Arrays](https://leetcode.com/problems/count-the-number-of-ideal-arrays)
* [2291.Maximum Profit From Trading Stocks](https://leetcode.com/problems/maximum-profit-from-trading-stocks)
* [920.Number of Music Playlists](https://leetcode.com/problems/number-of-music-playlists)
* [1130.Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values)
* [1105.Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves)
* [2222.Number of Ways to Select Buildings](https://leetcode.com/problems/number-of-ways-to-select-buildings)
* [487.Max Consecutive Ones II](https://leetcode.com/problems/max-consecutive-ones-ii)
* [799.Champagne Tower](https://leetcode.com/problems/champagne-tower)
* [1483.Kth Ancestor of a Tree Node](https://leetcode.com/problems/kth-ancestor-of-a-tree-node)
* [1014.Best Sightseeing Pair](https://leetcode.com/problems/best-sightseeing-pair)
* [1463.Cherry Pickup II](https://leetcode.com/problems/cherry-pickup-ii)
* [996.Number of Squareful Arrays](https://leetcode.com/problems/number-of-squareful-arrays)
* [639.Decode Ways II](https://leetcode.com/problems/decode-ways-ii)
* [2060.Check if an Original String Exists Given Two Encoded Strings](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings)
* [1255.Maximum Score Words Formed by Letters](https://leetcode.com/problems/maximum-score-words-formed-by-letters)
* [1449.Form Largest Integer With Digits That Add up to Target](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target)
* [1575.Count All Possible Routes](https://leetcode.com/problems/count-all-possible-routes)
* [1977.Number of Ways to Separate Numbers](https://leetcode.com/problems/number-of-ways-to-separate-numbers)
* [1402.Reducing Dishes](https://leetcode.com/problems/reducing-dishes)
* [838.Push Dominoes](https://leetcode.com/problems/push-dominoes)
* [119.Pascal's Triangle II](https://leetcode.com/problems/pascal's-triangle-ii)
* [1062.Longest Repeating Substring](https://leetcode.com/problems/longest-repeating-substring)
* [1671.Minimum Number of Removals to Make Mountain Array](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array)
* [646.Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain)
* [689.Maximum Sum of 3 Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays)
* [1425.Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum)
* [2266.Count Number of Texts](https://leetcode.com/problems/count-number-of-texts)
* [727.Minimum Window Subsequence](https://leetcode.com/problems/minimum-window-subsequence)
* [1638.Count Substrings That Differ by One Character](https://leetcode.com/problems/count-substrings-that-differ-by-one-character)
* [2361.Minimum Costs Using the Train Line](https://leetcode.com/problems/minimum-costs-using-the-train-line)
* [2320.Count Number of Ways to Place Houses](https://leetcode.com/problems/count-number-of-ways-to-place-houses)
* [638.Shopping Offers](https://leetcode.com/problems/shopping-offers)
* [1191.K-Concatenation Maximum Sum](https://leetcode.com/problems/k-concatenation-maximum-sum)
* [1262.Greatest Sum Divisible by Three](https://leetcode.com/problems/greatest-sum-divisible-by-three)
* [471.Encode String with Shortest Length](https://leetcode.com/problems/encode-string-with-shortest-length)
* [1643.Kth Smallest Instructions](https://leetcode.com/problems/kth-smallest-instructions)
* [956.Tallest Billboard](https://leetcode.com/problems/tallest-billboard)
* [1626.Best Team With No Conflicts](https://leetcode.com/problems/best-team-with-no-conflicts)
* [1787.Make the XOR of All Segments Equal to Zero](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero)
* [2163.Minimum Difference in Sums After Removal of Elements](https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements)
* [1137.N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number)
* [562.Longest Line of Consecutive One in Matrix](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix)
* [600.Non-negative Integers without Consecutive Ones](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones)
* [1416.Restore The Array](https://leetcode.com/problems/restore-the-array)
* [233.Number of Digit One](https://leetcode.com/problems/number-of-digit-one)
* [357.Count Numbers with Unique Digits](https://leetcode.com/problems/count-numbers-with-unique-digits)
* [1218.Longest Arithmetic Subsequence of Given Difference](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference)
* [2086.Minimum Number of Buckets Required to Collect Rainwater from Houses](https://leetcode.com/problems/minimum-number-of-buckets-required-to-collect-rainwater-from-houses)
* [351.Android Unlock Patterns](https://leetcode.com/problems/android-unlock-patterns)
* [978.Longest Turbulent Subarray](https://leetcode.com/problems/longest-turbulent-subarray)
* [2218.Maximum Value of K Coins From Piles](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles)
* [1931.Painting a Grid With Three Different Colors](https://leetcode.com/problems/painting-a-grid-with-three-different-colors)
* [1227.Airplane Seat Assignment Probability](https://leetcode.com/problems/airplane-seat-assignment-probability)
* [1706.Where Will the Ball Fall](https://leetcode.com/problems/where-will-the-ball-fall)
* [1691.Maximum Height by Stacking Cuboids](https://leetcode.com/problems/maximum-height-by-stacking-cuboids)
* [2370.Longest Ideal Subsequence](https://leetcode.com/problems/longest-ideal-subsequence)
* [877.Stone Game](https://leetcode.com/problems/stone-game)


# Reference: 
* [LeetBook 动态规划精讲（一）](https://leetcode.cn/leetbook/read/dynamic-programming-1-plus/xch21e/)