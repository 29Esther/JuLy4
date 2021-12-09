---
title: 并查集介绍
date: 2021-12-02 18:44:56
tags:
- Algorithms
categories:
- tech
---

# 开篇废话
数据结构「并查集」（Union-Find），也称「不相交集合」（Disjion-Sets）挺火的，刷题的时候一直遇到，刷到必是medium以上。本身原理并不复杂，就是实现代码稍微多了点。

# 原理
![并查集主要知识点导图](../../../../../pics/tech/ufs/union-find.png)

# 主要操作
## 并 Union
把两个集合合并成一个集合，表示这两个集合之间产生连接
## 查 Find
查询元素属于哪个集合

# 代码实现
## 代码框架
代码基本框架如下，对于`find`和`union`下面会介绍不同的实现
```
public class UnionFind {
    int[] root;

    UnionFind(int size) {
        root = new int[size];
        for (int i = 0; i < size; i++) {
            root[i] = i;
        }
    }

    int find(int x) {
        return root[x];
    }

    void union(int x, int y) {
        // join x and y
    }

    boolean connected(int x, int y) {
        return find(x) == find(y);
    }
}
```
## Quick Find 实现
此实现重点在于超快速`find`方法，时间复杂度在O(1)，而对于`union`时间复杂度是O(n)
```
public class UnionFindQuickFind extends UnionFind {
    UnionFindQuickFind(int size) {
        super(size);
    }

    int find(int x) {
        return root[x];
    }

    void union(int x, int y) {
        int rootX = find(x), rootY = find(y);
        if (rootX != rootY) {
            for (int i = 0; i < root.length; i++) {
                if (root[i] == rootY) {
                    root[i] = rootX;
                }
            }
        }
    }
}
```
## Quick Union 实现
此实现是最常用的版本，其他的优化也是基于此版本
虽然提高了`find`方法的时间复杂度，但平均了`union`的时间复杂度，总体效率会高于*Quick Find*方法
```
public class UnionFindQuickUnion extends UnionFind {
    UnionFindQuickUnion(int size) {
        super(size);
    }

    int find(int x) {
        while (x != root[x]) {
            x = root[x];
        }
        return x;
    }

    void union(int x, int y) {
        int rootX = find(x), rootY = find(y);
        if (rootX != rootY) {
            root[rootY] = rootX;
        }
    }
}
```
## 按秩合并优化 实现
针对`union`操作的优化，在`union`操作时，根据约定的秩序从两个根节点中选择新的根结点
### 标准按秩，按当前树的高度合并
```
public class UnionFindOptimizationByRank extends UnionFindQuickUnion {
    int[] rank; // 新增rank数组， 存放当前root树的高度
    UnionFindOptimizationByRank(int size) {
        super(size);
        rank = new int[size];
        Arrays.fill(rank, 1); // 初始化，人人平等
    }

    void union(int x, int y) {
        int rootX = find(x), rootY = find(y);
        if (rootX == rootY) {
            return;
        }
        if (rank[rootX] > rank[rootY]) {
            root[rootY] = rootX;
        } else if (rank[rootY] > rank[rootX]) {
            root[rootX] = rootY;
        } else {
            root[rootY] = rootX;
            rank[rootX]++; // 增加高度
        }
    }
}
```
### 人多势众，按当前集合元素数量合并
```
public static class UnionFindOptimizationByCount extends UnionFindQuickUnion {
    int[] count;
    UnionFindOptimizationByCount(int size) {
        super(size);
        count = new int[size];
        Arrays.fill(count, 1); // 初始化，人人平等
    }

    void union(int x, int y) {
        int rootX = find(x), rootY = find(y);
        if (rootX == rootY) {
            return;
        }
        int newCount = count[rootX] + count[rootY];
        if (count[rootX] > count[rootY]) {
            root[rootY] = rootX;
            count[rootX] = newCount;
        } else {
            root[rootX] = rootY;
            count[rootY] = newCount;
        }
    }
}
```
## 路径压缩优化 实现
针对`find`操作的优化，在`find`操作时，压缩已查找的路径，具体实现有两种，差距不大
### 完全压缩（递归）
```
public static class UnionFindOptimizationPathUpdateComplete extends UnionFindQuickUnion {
    UnionFindOptimizationPathUpdateComplete(int size) {
        super(size);
    }

    int find(int x) {
        if (x == root[x]) {
            return x;
        }
        return root[x] = find(root[x]);
    }
}
```
### 隔代压缩（循环）
```
public static class UnionFindOptimizationPathUpdateGap extends UnionFindQuickUnion {
    UnionFindOptimizationPathUpdateGap(int size) {
        super(size);
    }

    int find(int x) {
        while (x != root[x]) {
            root[x] = root[root[x]];
            x = root[x];
        }
        return x;
    }
}
```
## 终极优化 版本
注：这里存在个人偏见
路径压缩优化后是否还需要按秩合并存在一丢丢的争议，读者可自行斟酌
```
public static class UnionFindFinal {
    int[] root;
    int[] count;
    UnionFindFinal(int size) {
        count = new int[size];
        Arrays.fill(count, 1);
        root = new int[size];
        for (int i = 0; i < size; i++) {
            root[i] = i;
        }
    }

    int find(int x) {
        while (x != root[x]) {
            root[x] = root[root[x]];
            x = root[x];
        }
        return x;
    }

    void union(int x, int y) {
        int rootX = find(x), rootY = find(y);
        if (rootX == rootY) {
            return;
        }
        int newCount = count[rootX] + count[rootY];
        if (count[rootX] > count[rootY]) {
            root[rootY] = rootX;
            count[rootX] = newCount;
        } else {
            root[rootX] = rootY;
            count[rootY] = newCount;
        }
    }

    boolean connected(int x, int y) {
        return find(x) == find(y);
    }
}
```

# 复杂度
Time Complexity:  O(Nα(N)) ≈ O(N), where N is the number of vertices (and also the number of edges) in the graph, and α(N) is the Inverse-Ackermann function. We make up to N queries of dsu.union, which takes (amortized) O(α(N)) time.

Space Complexity: O(N)

# 刷题
## 常用方法
1. 通过一些方法将自定义类型转为整型后使用并查集（e.g. 生成哈希值；二维变一维）
2. 使用链表 + 映射（Map）
3. 使用桩，stub

## My Favorite
* [1267. Count Servers that Communicate](https://leetcode.com/problems/count-servers-that-communicate/) (这题特别好，开眼界了，除了基本的使用方法，点和点join之外，还可以自己和自己join)

## 基本
* [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/) (加岛屿计数器)
* [684. Redundant Connection](https://leetcode.com/problems/redundant-connection/) (`unique`二用)
* [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) (+size数组)
* [261. Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) (+count)
* [323. Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph) (+count)
* [695. Max Area of Island](https://leetcode.com/problems/max-area-of-island/) (+size数组)
* [737. Sentence Similarity II](https://leetcode.com/problems/sentence-similarity-ii)
* [839. Similar String Groups](https://leetcode.com/problems/similar-string-groups/)
* [990. Satisfiability of Equality Equations](https://leetcode.com/problems/satisfiability-of-equality-equations/)
* [1061. Lexicographically Smallest Equivalent String](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/)
* [1020. Number of Enclaves](https://leetcode.com/problems/number-of-enclaves) (+stub)
* [1101. The Earliest Moment When Everyone Become Friends](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/)
* [1258. Synonymous Sentences](https://leetcode.com/problems/synonymous-sentences/)
* [1627. Graph Connectivity With Threshold](https://leetcode.com/problems/graph-connectivity-with-threshold/)
* [1361. Validate Binary Tree Nodes](https://leetcode.com/problems/validate-binary-tree-nodes/)


## 变体
* [200. Number of Islands](https://leetcode.com/problems/number-of-islands/) (扁平化，降维，2D变1D)
* [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) (扁平化; 特殊占位)
* [721. Accounts Merge](https://leetcode.com/problems/accounts-merge/) (Map?)
* [886. Possible Bipartition](https://leetcode.com/problems/possible-bipartition) (Map? 算是一种变体吧？想解法还是想了一会儿的)
* [924. Minimize Malware Spread](https://leetcode.com/problems/minimize-malware-spread/) (难的是计算的部分，ufs本身还是很straightforward的)
* [928. Minimize Malware Spread II](https://leetcode.com/problems/minimize-malware-spread-ii/) (上一题的变体)
* [1254. Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/) (54SB, 很拙劣地做出了这道题，双%5，战五渣)





## 魔鬼
* [305. Number of Islands II](https://leetcode.com/problems/number-of-islands-ii) (corner cases折磨人：数组元素重复；land count有增有减)
* [399. Evaluate Division](https://leetcode.com/problems/evaluate-division/) (数学题)



# 参考
* [LeetBook《图》](https://leetcode-cn.com/leetbook/read/graph/r340gv/)
* [Liu821218213的并查集总结](https://github.com/Liu821218213/LeetCode-Orust/blob/master/%E5%B9%B6%E6%9F%A5%E9%9B%86%E6%80%BB%E7%BB%93.md)
* [HYN的技术笔记](https://segmentfault.com/a/1190000022952886)
* [liweiwei的网站](https://www.liwei.party/tags/%E5%B9%B6%E6%9F%A5%E9%9B%86/page/2/)
* [Leetcode题目合集](https://leetcode-cn.com/tag/union-find/problemset/)