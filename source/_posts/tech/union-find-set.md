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
虽然提高了`find`方法的时间复杂度，但平均了`union`的时间复杂度，总体效率会高于[Quick Find](./Quick Find 实现)方法


# 刷题
## 基本



## 变体

# 参考
* [liweiwei的网站](https://www.liwei.party/tags/%E5%B9%B6%E6%9F%A5%E9%9B%86/page/2/)
* [LeetBook《图》](https://leetcode-cn.com/leetbook/read/graph/r340gv/)
* [Liu821218213的并查集总结](https://github.com/Liu821218213/LeetCode-Orust/blob/master/%E5%B9%B6%E6%9F%A5%E9%9B%86%E6%80%BB%E7%BB%93.md)
* [Leetcode题目合集](https://leetcode-cn.com/tag/union-find/problemset/)