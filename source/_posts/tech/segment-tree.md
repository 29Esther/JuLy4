---
title: Segment Tree
date: 2022-10-16 23:33:56
tags:
- Algorithms
categories:
- tech
---

# 开篇废话
做题遇到了线段树，三脸懵逼，赶紧的吧！

# 基础
* 线段树是一棵二叉树
* 构造线段树的时间复杂度和空间复杂度都为O(n)
* 二叉树的节点区间定义，`[start, end]`代表节点的区间范围，`max / min / sum`是节点在`[start, end]`区间上的最值, `left`, `right`是当前节点区间划分之后的左右节点区间。
* 维护线段树中存在的区间中最值，有利于高效查询任何区间的最值，O(logN)。
* 单点更新：单点更新需要从叶子节点一路走到根节点, 去更新线段树上的值。因为线段树的高度为log(n),所以更新序列中一个节点的复杂度为log(n)
* 使用Lazy Propagation 懒加载实现区间更新，期望复杂度降到了O(logn) 的级别或更低
* 对于值域范围不确定的处理技巧：（1）离散化 + 线段树；（2）动态开点: 不事前构造空树，而是在插入操作 update 和查询操作 query 时根据访问需要进行「开点」操作，线段树的插入和查询都是log(n)的，因此我们在单次操作的时候，最多会创建数量级为log(n)的点，因此空间复杂度为O(mlog(n))。

# 模版
## 树的实现
### 节点区间定义
```
// [start, end] 代表节点的区间范围
// max 是节点在(start,end)区间上的最大值
// left , right 是当前节点区间划分之后的左右节点区间
public class SegmentTreeNode {
    public int start, end, max;
    public SegmentTreeNode left, right;
    public SegmentTreeNode(int start, int end, int max) {
        this.start = start;
        this.end = end;
        this.max = max
        this.left = this.right = null;
    }
}
```
### 构造代码
```
// 构造的代码及注释
public SegmentTreeNode build(int[] A) {
    // write your code here
    return buildhelper(0, A.length - 1, A);
}
public SegmentTreeNode buildhelper(int left, int right, int[] A){
    if(left > right){
        return null;
    }
    SegmentTreeNode root = new SegmentTreeNode(left, right, A[left]); // 根据节点区间的左边界的序列值为节点赋初值
    if(left == right){
        return root; // 如果左边界和右边界相等,节点左边界的序列值就是线段树节点的接节点值
    }
    int mid = (left + right) / 2; // 划分当前区间的左右区间
    root.left = buildhelper(left, mid, A);
    root.right = buildhelper(mid + 1, right, A);
    root.max = Math.max(root.left.max, root.right.max); // 根据节点区间的左右区间的节点值得到当前节点的节点值
    return root;
}
```
### 区间查询的代码
```
public int query(TreeNode root, int start, int end) {
    if (start <= root.start && root.end <= end) {
        // 如果查询区间在当前节点的区间之内,直接输出结果
        return root.max;
    }
    int mid = (root.start + root.end) / 2; // 将当前节点区间分割为左右2个区间的分割线
    int ans = Integer.MIN_VALUE; // 给结果赋初值
    if (mid >= start) {   // 如果查询区间和左边节点区间有交集,则寻找查询区间在左边区间上的最大值
        ans = Math.max(ans, query(root.left, start, end));
    }
    if (mid + 1 <= end) { // 如果查询区间和右边节点区间有交集,则寻找查询区间在右边区间上的最大值
        ans = Math.max(ans, query(root.right, start, end));
    }
    return ans; // 返回查询结果
}
```
### 单点更新的代码
```
public void modify(SegmentTreeNode root, int index, int value) {
    if(root.start == root.end && root.start == index) { // 找到被改动的叶子节点
        root.max = value; // 改变value值
        return ;
    }
    int mid = (root.start + root.end) / 2; // 将当前节点区间分割为2个区间的分割线
    if(index <= mid){ // 如果index在当前节点的左边
        modify(root.left, index, value); // 递归操作
    }
    else { // 如果index在当前节点的右边
        modify(root.right, index, value); // 递归操作
    }
    root.max = Math.max(root.left.max, root.right.max); // 可能对当前节点的影响
    return ;
}
```
## 数组的实现
### 变量
```
public NumArray(int[] nums) {
  int n = nums.length;
  int[] seg = new int[4 * n]; // 一般去数组长度的四倍
  build(nums, 0, n - 1, seg, 0);
}
```
### 构造代码
```
// build segment tree, set the value of seg[idx]
public void build(int[] nums, int start, int end, int[] seg, int idx) {
    if (start == end) {
      seg[idx] = nums[start];
      return;
    }
    int mid = start + (end - start) / 2;
    build(nums, start, mid, seg, 2 * idx + 1);
    build(nums, mid + 1, end, seg, 2 * idx + 2);
    seg[idx] = seg[2 * idx + 1] + seg[2 * idx + 2];
}
```
### 区间查询的代码
```
public int query(int start, int end, int queryStart, int queryEnd, int[] seg, int idx) {
  if (queryStart <= start && end <= queryEnd) return seg[idx];
  int ans = 0;
  int mid = start + (end - start) / 2;
  if (mid >= queryStart) {
    ans += query(start, mid, queryStart, queryEnd, seg, 2 * idx + 1);
  }
  if (mid + 1 <= queryEnd) {
    ans += query(mid + 1, end, queryStart, queryEnd, seg, 2 * idx + 2);
  }
  return ans;
}
```
### 单点更新的代码
```
public void update(int start, int end, int indexToBeUpdated, int newVal, int[] seg, int idx) {
  if (start == end) {
    seg[idx] = newVal;
    return;
  }
  int mid = start + (end - start) / 2;
  if (indexToBeUpdated <= mid) {
    update(start, mid, indexToBeUpdated, newVal, seg, 2 * idx + 1);
  } else {
    update(mid + 1, end, indexToBeUpdated, newVal, seg, 2 * idx + 2);
  }
  seg[idx] = seg[2 * idx + 1] + seg[2 * idx + 2];
}
```
## Lazy Propagation 懒加载
### 区间懒更新
```
// update [left, right] by val
public void updateLazySegTree(int index, int start, int end, int left, int right, int val) {
  if (lazy[index] != 0) { // this node is lazy
    seg[index] += (end - start + 1) * lazy[index]; // update current node by removing laziness
    if (start != end) { // update lazy[] for children nodes
      lazy[2 * index + 1] += lazy[index];
      lazy[2 * index + 2] += lazy[index];
    }
    lazy[index] = 0; // current node processed. No longer lazy
  }
  if (left <= start && end <= right) { // segment is fully within update range
    seg[index] += (end - start + 1) * val; // update segment
    if (start != end) { // update lazy[] for children
      lazy[2 * index + 1] += val;
      lazy[2 * index + 2] += val;
    }
    return;
  }
  int mid = start + (end - start) / 2; // recurse deeper for appropriate child

  if (left <= mid) {
    updateLazySegTree(2 * index + 1, start, mid, left, right, val);
  }
  if (mid + 1 <= right) {
    updateLazySegTree(2 * index + 2, mid + 1, end, left, right, val);
  }
  // merge updates
  seg[index] = seg[2 * index + 1] + sef[2 * index + 2];
}
```
### 区间懒查询
```
// query [left, right]
int queryLazySegTree(int index, int start, int end, int left, int right) {
  if (lazy[index] != 0) { // this node is lazy
    seg[index] += (end - start + 1) * lazy[index]; // normalize current node by removing laziness
    if (start != end) { // update lazy[] for children nodes
      lazy[2 * index + 1] += lazy[index];
      lazy[2 * index + 2] += lazy[index];
    }
    lazy[index] = 0; // current node processed. No longer lazy
  }
  if (left <= start && end <= right) // segment completely inside range
    return seg[index];
  int mid = start + (end - start) / 2; // partial overlap of current segment and queried range. Recurse deeper.
  int ans = 0;
  if (left <= mid)
    ans += queryLazySegTree(2 * index + 1, start, mid, left, right);
  if (mid+1 <= right)
    ans += queryLazySegTree(2 * index + 2, mid + 1, right, left, right);
  return ans;
}
```
## 动态开点
```
// LC: 699
class Solution {
  int N = (int)1e9;
  class Node {
      Node l, r;
      int val, lazy;
  }
  Node root = new Node();
  public List<Integer> fallingSquares(int[][] positions) {
      List<Integer> ans = new ArrayList<>();
      for (int[] info : positions) {
          int x = info[0], h = info[1], cur = query(root, 0, N, x, x + h - 1);
          update(root, 0, N, x, x + h - 1, cur + h);
          ans.add(root.val);
      }
      return ans;
  }
  
  private int query(Node node, int start, int end, int left, int right) {
      if (node == null) return 0;
      updateLazy(node, start, end);
      if (left <= start && end <= right) return node.val;
      int mid = start + (end - start) / 2;
      int ans = 0;
      if (left <= mid) {
          if (node.l == null)  {
              node.l = new Node();
              node.l.val = node.val;
          }
          ans = query(node.l, start, mid, left, right);
      }
      if (mid + 1 <= right) {
          if (node.r == null)  {
              node.r = new Node();
              node.r.val = node.val;
          }
          ans = Math.max(ans, query(node.r, mid + 1, end, left, right));
      }
      return ans;
  }
  
  private void updateLazy(Node node, int start, int end) {
      if (node.lazy != 0) {
          node.val = node.lazy;
          if (start != end) {
              if (node.l != null) node.l.lazy = node.lazy;
              if (node.r != null) node.r.lazy = node.lazy;
          }
          node.lazy = 0;
      }
  }
  
  private void update(Node node, int start, int end, int left, int right, int newValue) {
      if (node == null) return;
      if (left <= start && end <= right) {
          node.val = newValue;
          node.lazy = 0;
          if (node.l != null) node.l.lazy = newValue;
          if (node.r != null) node.r.lazy = newValue;
          return;
      }
      int mid = start + (end - start) / 2;
      if (node.l == null) {
          node.l = new Node();
          node.l.val = node.val;
      }
      if (node.r == null) {
          node.r = new Node();
          node.r.val = node.val;
      }
      if (left <= mid) {
          update(node.l, start, mid, left, right, newValue);
      }
      if (mid + 1 <= right) {
          update(node.r, mid + 1, end, left, right, newValue);
      }
      node.val = Math.max(node.l.val, node.r.val);
  }
}
```

# 练习
* [303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) Easy，拿来上手
* [307. Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/) 在上一提的代码基础上，加修改，Easy
* [370. Range Addition](https://leetcode.cn/problems/range-addition/) 练手区间更新，建议在303的基础上修改，基础代码都一样，可以考虑去掉seg数组
* [699. Falling Squares](https://leetcode.com/problems/falling-squares/) 练习对于值域范围不确定的处理技巧1:离散化 + 线段树，非强制在线：将值域映射到较小的空间，然后套用固定空间的线段树求解；2:动态开点
* [308. Range Sum Query 2D - Mutable](https://leetcode.cn/problems/range-sum-query-2d-mutable/) 训练下思维转化，对于二维数组我们应该咋办……
## todo
* [218. The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/) // todo: 没时间了，写一题实在是费老大劲了！放弃
* [2276. Count Integers in Intervals](https://leetcode.com/problems/count-integers-in-intervals/)
* [2158. Amount of New Area Painted Each Day](https://leetcode.com/problems/amount-of-new-area-painted-each-day/)
* [732. My Calendar III](https://leetcode.cn/problems/my-calendar-iii/)

# Reference
* [Recursive Approach to Segment Trees](https://leetcode.com/articles/a-recursive-approach-to-segment-trees-range-sum-queries-lazy-propagation/)
* [线段树 by Sera Masumi??](https://seramasumi.github.io/docs/Algorithms/mc-%E5%BE%AE%E8%AF%BE%E5%A0%82-%E7%BA%BF%E6%AE%B5%E6%A0%91_Segment_Tree.html)
* [Segment Tree 线段树 原理及实现](https://www.jianshu.com/p/91f2c503e62f)
* [Segment tree - Theory and applications](https://maratona.ic.unicamp.br/MaratonaVerao2016/material/segment_tree_lecture.pdf)
* [【线段树专题】求解常见「值域爆炸，查询有限」区间问题的几种方式](https://mp.weixin.qq.com/s?__biz=MzU4NDE3MTEyMA==&mid=2247491187&idx=2&sn=bb2d8b7e89c535914da8107387e951a2)