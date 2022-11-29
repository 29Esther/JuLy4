---
title: Monotonic Stack, Monotonic Queue 单调队列，单调栈【ING/太难了/求指导】
date: 2022-11-13 18:33:56
tags:
- Algorithms
categories:
- tech
---

# 开篇废话
兜兜转转又一个月，继续征战，这次我们看看视觉美观的单调队列和单调栈，看看单调的人生怎么解。

# 单调栈
输入一般是一个array，然后我们只关心一种数据，要么大于，要么小于当前值的值，所以与一般的栈不同，我们有选择性的出入栈。
实现的话，一般使用原生栈，`Stack in Java`，或者，手动单头操作队列

## 简单题入手
### 例题
* [1475. Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/)
  <button type="button" class="collapsible" name="1475">一些理解</button>
  <collapsible-content name="content-1475">
    这题一道比较典型的单调栈问题, 由于我们只需要找到右侧第一个小于当前数的数，我们有两种遍历方式：1. 从左往右遍历，栈中维护之前数字的index，如果之前的数大于当前数，我们那弹出并更新前一个数的答案；2. 从右往左遍历，栈中维护已遇到的数字，如果当前数小于之前的数字，则一直弹出，直到遇到一个小于当前数的数字，或者栈为空，得出当前答案。
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

* [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
  <button type="button" class="collapsible" name="739">一些理解</button>
  <collapsible-content name="content-739">
    这题用单调栈的解法很直接，与上面两题相似，正反遍历都可以，但是比较有意思的地方是用数组优化空间的第二解法，以后遇到类似的题，可以考虑灵活运用。
    ```java
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] ans = new int[n];
        
        // 方法一：stack
        // Stack<Integer> stack = new Stack<>();
        // for (int i = n-1; i >= 0; i--) {
        //     while (!stack.isEmpty() && temperatures[stack.peek()] <= temperatures[i]) {
        //         stack.pop();
        //     }
        //     ans[i] = stack.isEmpty() ? 0 : stack.peek() - i;
        //     stack.push(i);
        // }
        
        // 方法二：利用答案数组
        int highest = temperatures[n-1];
        for (int i = n-1; i >= 0; i--) {
            if (temperatures[i] >= highest) {
                highest = temperatures[i];
                continue;
            }
            int day = 1;
            while (temperatures[i + day] <= temperatures[i]) {
                day += ans[i + day];
            }
            ans[i] = day;
        }
        return ans;
    }
    ```
  </collapsible-content>

### 其他练习
* [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)
* [1019. Next Greater Node In Linked List](https://leetcode.com/problems/next-greater-node-in-linked-list/) 简单，与上两题解法的类似
* [1762. Buildings With an Ocean View](https://leetcode.cn/problems/buildings-with-an-ocean-view/) 我在面Meta时遇到的原题，用Stack很简单，但是，由于题目的特殊性，还有更简单的！
* [1944. Number of Visible People in a Queue](https://leetcode.com/problems/number-of-visible-people-in-a-queue/) 基础操作啊，兄弟萌，搞定这道‘Hard’题，是不是信心暴涨？
* [2282. Number of People That Can Be Seen in a Grid](https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/) 上一题的复杂版，增加了一种情况而已，都一样啦

## 中等题练手
### 例题
* [1950. Maximum of Minimum Values in All Subarrays](https://leetcode.com/problems/maximum-of-minimum-values-in-all-subarrays/) 
  <button type="button" class="collapsible" name="1950">一些理解</button>
  <collapsible-content name="content-1950">
    答案一定是非递增的数列。

    首先上Brute Force大法，考虑所有的子数组，时间复杂度是O(n^2)，空间复杂度为O(1)。
    再考虑优化空间，其实，我们可以用一个单调递增栈维护追踪最大数值的范围。栈内存放index，按照值递增。

    以`[10, 20, 50, 10]`为例，当我们遍历到第3位时，栈内的情况是`[0, 1, 2]`，这时，为了维护栈的单调性，我们需要进行弹出操作。
    首先，弹出index：2，index为2的数字，在哪一个子数组中，可以作为最小值？左边界为上一个stack元素（上一个值小于nums[2]的index）+ 1，右边界为当前index - 1，所以，对于nums[2]来说，它作为最小值的范围是[1+1, 3-1]，也就是[2,2]，长度为(2-2+1)。所以，更新一下ans[0]的答案。
    然后，弹出index：1，考虑 index为1的数字 作为最小值的范围。左边界依旧是上一个stack元素 + 1，右边界为当前index - 1，也就是[0 + 1, 3 - 1] = [1, 2]，事实也是这样。所以，更新一下长度为2的答案。
    接着，弹出index：0，这时，stack里没有元素了，说明它是从数组头开始，最小的一个数字，所以左边界就是0，右边界依旧是index - 1，所以，index为0的数字 作为最小值的范围是[0, 3 - 1] = [0, 2]。更新一下长度为3的答案。
    弹出操作结束，我们需要把当前index压入栈中，栈变成了`[3]`，因为已经到栈的末尾了，所以我们进行弹出操作，考虑index为3的数字 作为最小值的范围。此处，栈为空，所以，左边界为0，右边界为数组长度 - 1，范围是[0, 3]，更新长度为4的答案。

    到这里的话，相信大家已经理解了栈的操作，可以有一个问题没有解决，就是我们在考虑边界的时候，考虑的是最大边界，那么就有可能中间有一些部分是没有更新到的（比如在`[5, 1, 1, 5]`这个例子中，大家可以按照上面的操作自行模拟一下）。继续考虑上一个模拟例子，index为0的数字 作为最小值的范围最大范围是[0, 2]，那么是不是说明在[0,1]，[0,0]的范围内，index也可以作为最小值，所以长度小于3的答案，一定大于或等于ans[3]。因为，我们需要对答案数组进行一个遍历，保证它整体是一个非递增数列，并且填补空缺。

    解决所有问题之后，上代码。

    ```java
    public int[] findMaximums(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n];
        Stack<Integer> stack = new Stack<>(); // 存放数组index，按照值严格递增
        for (int i = 0; i <= n; i++) { // 遍历数组
            int cur = (i == n) ? 0 : nums[i]; // trick：用0作为哨兵，解决遍历完成的情况
            while (!stack.isEmpty() && nums[stack.peek()] >= cur) { 
                // 栈内index元素不小于当前值，需要弹出，以保证栈单调递增
                int index = stack.pop(),
                    left = stack.isEmpty() ? 0 : stack.peek() + 1, // 左边界情况
                    right = i - 1, // 右边界情况 
                    len = right - left + 1;
                    // nums[index]是[left, right]的子数组中最小值
                // 根据len， 更新ans数组
                ans[len - 1] = Math.max(ans[len - 1], nums[index]);
            }
            stack.push(i);
        }

        // 保证ans数组的非递增性，填补空缺
        for (int i = n-1; i > 0; i--) {
            ans[i-1] = Math.max(ans[i], ans[i-1]);
        }
        return ans;
    }
    ```

    时间复杂度为 O(n)，因为每个元素，我们最多处理一次。
    空间复杂度为 O(n)，因为我们需要一个栈来存储元素，最大为数组长度。
  </collapsible-content>

* [2104. Sum of Subarray Ranges](https://leetcode.com/problems/sum-of-subarray-ranges/) 
  <button type="button" class="collapsible" name="2104">一些理解</button>
  <collapsible-content name="content-2104">
    上一题的进阶版

    这题花了我很久的时间，主要难点在于如何把题目转换成一道单调栈的题目（多数题的难点）。

    我们先用Brute Force进行思考，考虑所有的子数组，用`min`和`max`来记录当前数组的最小值和最大值，时间复杂度是O(n^2)，空间复杂度为O(1)。

    想想是否有优化空间，其实，答案 = ∑(子数组的差值) = ∑(子数组最大值 - 子数组最小值) = ∑子数组最大值 - ∑子数组最小值。所以，我们可以用两个Queue来计算数组最大值的和，以及数组最小值的和。

    考虑nums=[4,-2,-3,5,1]的情况。
    先看最小值，每个数字至少有一次成为数组最小值的机会，用最大值`5`来说，在`[5]`这个子数组中，它是最小值，那考虑最小值`-3`来说，它在`[-3], [-2,-3], [-3,5], [4,-2,-3], [-2,-3,5], [-3,5,1], [4,-2,-3,5], [-2,-3,5,1], [4,-2,-3,5,1]`，这9个子数组中都是最小值，所以`∑子数组最小值`中有9个`-3`和1个`5`。如何得出这个9和1呢？我们可以利用单调栈。

    ```java
    long ans = 0;
    Stack<Integer> stack = new Stack<>(); // 数组值的单增栈，存放index
    for (int right = 0; right <= nums.length; right++) { //从左往右遍历数组
        while (!stack.isEmpty() && (right == nums.length || nums[stack.peek()] >= nums[right])） {
            int cur = stack.pop(); // 计算cur为最小值的子数组数量
            int left = stack.isEmpty() ? -1 : stack.peek(); // 左边界为stack的当前头，如果stack为空，左边界为 -1
            ans -= nums[cur] * (right - cur) * (cur - left); // 处理当前最小值
        }
    }
    ```

    同理，可得最大值的情况，每个数字也至少有一次成为数组最大值的机会，考虑最小值`-3`来说，它在`[-3]`，同样利用单调栈。

    ```java
    Stack<Integer> stack = new Stack<>(); // 数组值的单减栈，存放index
    for (int right = 0; right < nums.length; right++) { //从左往右遍历数组
        while (!stack.isEmpty() && nums[stack.peek()] <= nums[i]) {
            int cur = stack.pop(); // 计算cur为最大值的子数组数量
            int left = stack.isEmpty() ? -1 : stack.peek(); // 左边界为stack的当前头，如果stack为空，左边界为 -1
            ans += nums[cur] * (right - cur) * (cur - left); // 处理当前最大值
        }
    }
    ```

    所以，我们可以得出完整的代码

    ```java
    public long subArrayRanges(int[] nums) {
        int n = nums.length;
        long ans = 0;
        Stack<Integer> stack = new Stack<>();
        
        for (int right = 0; right <= n; right++) {
            while (!stack.isEmpty() && (right == n || nums[stack.peek()] >= nums[right])) {
                int last = stack.pop();
                int left = stack.isEmpty() ? -1 : stack.peek();
                ans -= (long)nums[last] * (right - last) * (last - left);
            }
            stack.add(right);
        }
        
        stack.clear();
        for (int right = 0; right <= n; right++) {
            while (!stack.isEmpty() && (right == n || nums[stack.peek()] <= nums[right])) {
                int last = stack.pop();
                int left = stack.isEmpty() ? -1 : stack.peek();
                ans += (long)nums[last] * (right - last) * (last - left);
            }
            stack.add(right);
        }
        
        return ans;
    }
    ```
  </collapsible-content>

* [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
  <button type="button" class="collapsible" name="84">一些理解</button>
  <collapsible-content name="content-84">
    这题也有点复杂，如何利用单调栈，降低时间复杂度。

    还是首先考虑Brute Force，可以用从左往右遍历数组，对于每一个index，考虑它作为高度的情况下，矩阵宽为多少，考虑所有情况取最大值就好了。时间复杂度为O(n^2)，空间复杂度为O(n)，其实还挺好的。

    ```java
    public int largestRectangleArea(int[] heights) {
        int max = 0, n = heights.length;
        for (int i = 0; i < n; i++) {
            int left = i, right = i;
            while (left >= 0 && heights[left] >= heights[i]) {
                left--;
            }
            while (right < n && heights[right] >= heights[i]) {
                right++;
            }
            int width = right - left - 1;
            max = Math.max(max, width * heights[i]);
        }
        return max;
    }
    ```

    但是，到这里还不能过所有的case。那咋办？上工具。如果我们有一个根据长度递增的单调栈，当进入某一个index时，我们发现stack里的高度大于当前高度，以stack里的高度作为高度的矩阵的宽度有限了，不能再向右扩展了，于是我们计算一下以stack里的高度作为高度的矩阵的面积，将它弹出，直到stack里的高度都小于当前高度，继续探索极限。
    这里用到的技巧主要有三个：
        1. stack不直接放高度，而使用数组index表示，更方面我们找到位置，计算宽度 （简单操作细节）；
        2. 在数组遍历结束后，对于栈里剩余元素的处理，这里我们默认在数组结尾补上一个`0` （常见操作细节）；
        3. 在弹出元素时计算结果。

    ```java
    public int largestRectangleArea(int[] heights) {
        int max = 0, n = heights.length;
        Stack<Integer> stack = new Stack<>(); // 按照高度递增的栈，存放高度index
        for (int i = 0; i <= n; i++) {
            int h = (i == n) ? 0 : heights[i]; // 细节2: 补0操作
            while (!stack.isEmpty() && heights[stack.peek()] >= h) {
                int index = stack.pop(), left = stack.isEmpty() ? -1 : stack.peek();
                max = Math.max(max, heights[index] * (i - left - 1));
            }
            stack.push(i);
        }
        return max;
    }
    ```

    这样时间/空间复杂度为O(n)，因为对于每一个index，我们最多处理一次。
  </collapsible-content>

* [1504. Count Submatrices With All Ones](https://leetcode.com/problems/count-submatrices-with-all-ones/)
  <button type="button" class="collapsible" name="1504">一些理解</button>
  <collapsible-content name="content-1504">
    在上题的基础上，把问题变得稍微复杂一些，变化有：
        1. Histogram不是直接给定的，需要用一个数组维护；
        2. 需要计算所有的矩阵数量，不只是最大的那一个

    ```java
    public int numSubmat(int[][] mat) {
        int n = mat.length, m = mat[0].length, ans = 0;
        int[] heights = new int[m];
        Stack<Integer> stack = new Stack<>(); // 存放index
        for (int i = 0; i < n; i++) { // 按行遍历
            int[] sum = new int[m];
            stack.clear();
            for (int j = 0; j < m; j++) { // 按列遍历
                heights[j] = (mat[i][j] == 1) ? heights[j] + 1 : 0; // 统计高度
                while (!stack.isEmpty() && heights[stack.peek()] >= heights[j]) {
                    // 弹出比当前列高的index
                    stack.pop();
                }
                // 计算以mat[i][j]为右下的所有矩形数
                if (!stack.isEmpty()) { 
                    // 前面有一个比现在低的列
                    int preIndex = stack.peek(); // 得到比当前低的列的index
                    sum[j] = sum[preIndex]; // 匹配特定矩形，保证可以得到sum[preIndex]个矩形
                    sum[j] += heights[j] * (j - preIndex); // 另外，计算当前列和矮列之间的矩形数量
                } else {
                    // 说明当前列是最低的
                    sum[j] = heights[j] * (j + 1); // 所以一共有这么多个矩形以mat[i][j]为右下
                }
                ans += sum[j];
                stack.push(j);
            }
        }
        return ans;
    }
    ```
  </collapsible-content>

* [2297. Jump Game VIII](https://leetcode.com/problems/jump-game-viii/)
  <button type="button" class="collapsible" name="2297">一些理解</button>
  <collapsible-content name="content-2297">
    这道题烦在理解题目意思上。

    首先，可以明确的是，我们只能往后跳，不能回头。如果i点可以到达j点，那么i，j需要满足题目给定的两个条件之一。这两个条件是独立的，不可能有一个点既满足条件1，又满足条件2。所以，我们可以把这两个条件独立进行思考。

    先来看看第二个条件，`nums[i] > nums[j] and nums[k] >= nums[i] for all indexes k in the range i < k < j.` 意思就是，i位的数字比j位的数字大，并且，i和j中间的之间的所有数字都大于等于i位的数字，换言之，j必须是第一个小于i的数字，即使还有一个index为j2的数字也小于nums[i]，i也无法跳到j2，因为j在i和j2之间，并且nums[j]小于nums[i]，不满足条件了。所以，对于每一个index i来说，在这个条件下最多只可能到达一个j，也有可能没有满足条件的j。
    那么，我们是不是可以用一个递增的单调栈，如果出现了一下较小的数字，说明栈内的index可以跳到当前位置。

    ```java
    Stack<Integer> maxStack = new Stack<>(); // 存放index，按照数值递增
    for (int j = 0; j < nums.length; j++) {
        while (!maxStack.isEmpty() && nums[maxStack.peek()] > nums[j]) {
            int i = maxStack.pop(); // nums[j]是i之后第一个比nums[i]小的数字
            // 考虑从 i -> j的情况
        }
    }
    ```

    同理，我们考虑第一个条件，`nums[i] <= nums[j] and nums[k] < nums[i] for all indexes k in the range i < k < j`，在这种情况下，如果i的数字小于等于j的数字，并且i，j之间的数字都小于nums[i]，i可以到达j，也就是说，在nums[j]是第一个大于等于nums[i]的数字。那么，与上一个条件类似，我们可以使用一个递减的单调栈，找到第一个大于等于nums[i]的数字。

    ```java
    Stack<Integer> minStack = new Stack<>(); // 存放index，按照数值递减
    for (int j = 0; j < nums.length; j++) {
        while (!minStack.isEmpty() && nums[minStack.peek()] <= nums[j]) {
            int i = maxStack.pop(); // nums[j]是i之后第一个大于等于nums[i]的数字
            // 考虑从 i -> j的情况
        }
    }
    ```

    最后还有一件事情，就是，如何考虑从i到j的成本情况。我们需要用一个dp列表，来维护到达每一个index的最小cost。
    那么，有两个可能的问题：
    1. 是不是我们在到达位置j时，j之前的位置都已经计算cost完成？
        是的。因为我们是从左到右遍历的，在循环体内计算当前位置的cost，所以，在到达位置j之前，前面的index一定是已经计算结束了，不存在到达位置j之后，对于位置j之前的dp值更新。
    2. 是不是到达位置j之前，所有的位置一定都能到达？
        是的，因为相邻的位置，一定要么满足条件1，要么满足条件2，两个条件互补。所以，我们从位置0一定可以到达所有的位置。
        
    所有的问题都解决啦，那么我们就可以开始写代码了。

    ```java
    public long minCost(int[] nums, int[] costs) {
        int n = nums.length;
        long[] dp = new long[n];
        Arrays.fill(dp, Long.MAX_VALUE);
        dp[0] = 0;

        Stack<Integer> maxStack = new Stack<>(), minStack = new Stack<>();
        for (int j = 0; j < n; j++) {
            while (!minStack.isEmpty() && nums[minStack.peek()] <= nums[j]) {
                int i = minStack.pop();
                dp[j] = Math.min(dp[j], dp[i] + costs[j]);
            }
            minStack.push(j);
            while (!maxStack.isEmpty() && nums[maxStack.peek()] > nums[j]) {
                dp[j] = Math.min(dp[j], dp[maxStack.pop()] + costs[j]);
            }
            maxStack.push(j);
        }
        return dp[n-1];
    }
    ```
  </collapsible-content>

* [962. Maximum Width Ramp](https://leetcode.com/problems/maximum-width-ramp/) // todo
  <button type="button" class="collapsible" name="962">一些理解</button>
  <collapsible-content name="content-962">
    这道题同样使用单调栈，但是又有一些不同。常规单调栈，我们会遍历数组，对于每一个元素进行处理和答案更新，但是，在这道题中，1. 我们并不关心所有元素，只把特定的元素加入栈中；2. 第一遍遍历，我们先组建栈，在第二步遍历时，我们才寻找答案。
    所以，在使用单调栈的过程中，我们要学会变通，抓主要矛盾，灵活使用。
  </collapsible-content>

### 其他练习
* [456. 132 Pattern](https://leetcode.com/problems/132-pattern/) 值得练习哦，单独po了一个页[我的理解](https://esther.fun/tech/leetcode-132-pattern/)
* [503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/) 在前面496的基础上增加环形的要求，但是还是基本的单调栈，思考难度不高
* [901. Online Stock Span](https://leetcode.com/problems/online-stock-span/) 种类题偏简单，想清楚即可
* [581. Shortest Unsorted Continuous Subarray](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) 用单调栈可以解决的问题，但是可能还有更好的办法哦
* [1673. Find the Most Competitive Subsequence](https://leetcode.com/problems/find-the-most-competitive-subsequence/) // todo
* [654. Maximum Binary Tree](https://leetcode.com/problems/maximum-binary-tree/) 这题用单调栈没有递归直接，需要一些理解
* [2289. Steps to Make Array Non-decreasing](https://leetcode.com/problems/steps-to-make-array-non-decreasing/) 需要考虑更多的情况，值得练习 todo
* [1130. Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/) 这题需要把题目意思转换成一个stack的问题，理解力+技巧
* [316. Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/) = [1081. Smallest Subsequence of Distinct Characters](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/) 变身妙蛙种子，直呼妙蛙妙蛙 //[todo]
* [853. Car Fleet](https://leetcode.com/problems/car-fleet/) 挺有趣的，转换之后就很简单啦
* [255. Verify Preorder Sequence in Binary Search Tree](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/) 是一道很好的单调栈应用题 todo
* [1856. Maximum Subarray Min-Product](https://leetcode.com/problems/maximum-subarray-min-product/) 前两道例题的练习，一模一样的套路
* [907. Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/) 前两道例题的练习，一模一样的套路
* [402. Remove K Digits](https://leetcode.com/problems/remove-k-digits/) 基础题，普通操作

## 难题上手



1671. Minimum Number of Removals to Make Mountain Array
1425. Constrained Subsequence Sum

907. Sum of Subarray Minimums
856. Score of Parentheses
84. Largest Rectangle in Histogram
42. Trapping Rain Water

84 Largest Rectangle in Histogram
214 Shortest Palindrome
239 Sliding Window Maximum

321 Create Maximum Number
402 Remove K Digits
456 132 Pattern

739. Daily Temperatures
768 Max Chunks To Make Sorted II
862 Shortest Subarray with Sum at Least K
889 Construct Binary Tree from Preorder and Postorder Traversalhttps://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal)

和单调栈没什么关系，自己练习一下吧：[1996. The Number of Weak Characters in the Game](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/)