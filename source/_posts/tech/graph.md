---
title: 图
date: 2021-12-18 18:33:56
tags:
- Algorithms
categories:
- tech
---

太难了！我哭了！

# 遍历所有顶点
[797. All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target)

## 深度优先搜索算法 Depth First Search - DFS
**栈**
主要用途：
* 遍历「图」中所有顶点
* 遍历「图」中任意两点之间的所有路径
实现：递归

## 广度优先搜索算法 BFS
**队列**
主要用途：
* 当在 权重相等且均为正数的「图」 中，快速找出两点之间的最短路径
* 遍历「图」中所有顶点
实现：队列

时间复杂度: O(V+E) 
/V/ 表示顶点数，/E/ 表示边数。

空间复杂度: O(V)
/V/ 表示顶点数。

# 最小生成树
[1584. Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)
生成树指的是「无向图」中，具有该图的**全部顶点**且**边数最少**的连通子图。
最小生成树指的是「加权无向图」中总权重最小的生成树。

## 切分定理
切分：将「图」切成两个部分，称之为一个「切分」。
横切边：如果一条边连接的两个顶点属于切分的两个部分，这个边称为「横切边」。
切分定理：在一幅连通加权无向图中，给定任意的切分，如果有一条横切边的权值严格小于所有其他横切边，则这条边必然属于图的最小生成树中的一条边。

## Kruskal 算法
求解「加权无向图」的「最小生成树」
Steps:
1. 所有边从小到大排序
2. 依次加入最小生成树中，形成环则跳过
3. 直到选择n-1条边为止

时间复杂度: O(ElogE)
/E/ 表示边数。

空间复杂度: O(V)
/V/ 表示顶点数。

## Prim 算法
求解「加权无向图」的「最小生成树」的另一种算法
Steps:
1. 用两个集合a, b分别存储已访问节点和未访问节点
2. 从未访问节点集合b中，任选一个节点放入a中
3. 从连接的a, b集合的所有边中，选择权重最小的边，将边连接的b集合中的节点放入a中
4. 重复步骤3，直到b为空

时间复杂度: 
* 普通二叉堆： O(ElogV)
* 斐波那契堆：O(E+VlogV)
/V/ 表示顶点数，/E/ 表示边数。

空间复杂度: O(V)
/V/ 表示顶点数。


# 单源最短路径
在加权图中，给定一个起点，求出它分别到其他顶点的「最短路径」
## Dijkstra 算法
求解加权图「单源最短路径」问题，其中该图的所有权重必须为非负数
[743. Network Delay Time](https://leetcode.com/problems/network-delay-time)
Steps:
1. 初始时，S只包含起点s；U包含除s外的其他顶点，且U中顶点的距离为“起点s到该顶点的距离”，例如，U中顶点v的距离为(s,v)的长度，然后s和v不相邻，则v的距离为∞
2. 从U中选出“距离最短的顶点k”，并将顶点k加入到S中；同时，从U中移除顶点k。
3. 更新U中各个顶点到起点s的距离。由于上一步中确定了k是求出最短路径的顶点，从而可以利用k来更新其它顶点的距离；例如，(s,v)的距离可能大于(s,k)+(k,v)的距离。
4. 重复步骤(2)和(3)，直到遍历完所有顶点。

```
// 用一个数据结构，存储每一个节点的相邻节点和距离，也可以用int[]{next node index, distance}
List<Map<Integer, Integer>> neighbors = new ArrayList<>(); 
...
// 利用优先队列排序下一条边
PriorityQueue<int[]> heap = new PriorityQueue<int[]>(
        (info1, info2) -> info1[0] - info2[0]); 
// 将目标节点放入队列中
heap.offer(new int[]{0, target});
// 用map存储结果
Map<Integer, Integer> dist = new HashMap();
while (!heap.isEmpty()) {
    int[] info = heap.poll();
    int d = info[0], cur = info[1];
    if (dist.containsKey(cur)) continue; // 已知cur节点的最优解，不用再麻烦了
    dist.put(node, d); // 当前解为cur的最优解
    Map<Integer, Integer> nexts = list.get(node); // 得到下一节点
    for (int nxt: nexts.keySet()) {
        if (!dist.containsKey(nxt)) // 下一节点的最优解未知，加入队列中
            heap.offer(new int[]{d + nexts.get(nxt), nxt});
    }
}
```

时间复杂度: 
* 斐波那契堆：O(E+VlogV)
/V/ 表示顶点数，/E/ 表示边数。

空间复杂度: O(V)
/V/ 表示顶点数。

## Bellman-Ford 算法
解决「负权图」的「单源最短路径」问题
[787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
### 基础定理
**定理一**：在一个有 N 个顶点的「非负权环图」中，两点之间的最短路径最多经过 N-1N−1 条边
**定理二**：「负权环」没有最短路径

### Dynamic Programming
Def. OPT(i, v) = length of shortest path P from v to t using at most i edges.
There are two options: 
* P uses at most i-1 edges -> OPT(i, v) = OPT(i-1, v) 
* P uses exactly i edges -> OPT(i-1, w)+Cwv

#### Algorithm
```
Shortest-Path(G, t) { 
	for each node v ∈ V
		M[0,v] =  ∞ 
		M[0, t] = 0
	for I = 1 to n-1
		for each node v ∈ V
			M[i, v] = M[i-1, v] 
		for each edge (v, w) ∈ E
			M[i, v] = min(M[i, v], M[i-1, w] + Cvw) 
}
```
时间复杂度: O(mn)

空间复杂度: O(n^2)

#### Practical improvements
* Maintain only one array M[v] = shortest v-t path that we have found so far. 
* No need to check edges of the form (v, w) unless M[w] changed in previous iteration. 
```
Push-Based-Shortest-Path(G, s, t) { 
	for each node v ∈ V {
		M[v] = ∞
		successor[v] = null
	}
	M[t] = 0
	for i = 1 to n-1 {
		for each node w ∈ V {
			if (M[w] has been updated in previous iteration) {
				for each node v such that (v, w) ∈ E { 
					if (M[v] > M[w] + Cvw)  {
						M[v] = M[w] + Cvw
						successor[v] = w
					}
				} 
			}
			If no M[w] value changed in iteration I, stop. 
		}
	}
}
```

### Bellman-Ford 检测「负权环」
当对所有边进行N-1次松弛之后，再进行第N次松弛。
根据「Bellman-Ford 算法」，所有的边在N−1次松弛之后，所有的距离必然是最短距离。
如果在进行第N次松弛后，对于一条边edge(u, v)，还存在`distances[u] + weight(u, v) < distances(v)`的情况，也就是说，还存在更短的路径。
此时就能说明「图」中存在「负权环」。

### SPFA 算法 - 基于「队列」优化的 Bellman-Ford 算法
「SPFA 算法」主要是通过「队列」来维护我们接下来要遍历边的起点，而不是「Bellman Ford」算法中的任意还没有遍历过的边。每次只有当某个顶点的最短距离更新之后，并且该顶点不在「队列」中，我们就将该顶点加入到「队列」中。一直循环以上步骤，直到「队列」为空，我们就可以终止算法。

# 拓扑排序 Topological Sort
对「有向无环图」中所有顶点按照先后顺序的一种线性排序

#### 条件：
* 有向无环图；
* 「图」中至少有一个顶点「入度」为 0 。如果「图」中所有顶点都有「入度」，则代表所有顶点都至少有一个前置顶点，那么这个就没有顶点可以作为「拓扑排序」的起点。

## Kahn 算法
[210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
Steps:
1. 统计所有的顶点的出入度，将所有入度为0的节点，放入队列中
2. 将队列中的节点取出，标记为已访问，并更新剩余节点的入度数量
3. 重复步骤1-2直到队列为空


```
int[] indegrees = new int[n];
List<List<Integer>> nexts = new ArrayList<>(); // 存储下一个节点，可以用Map
for (int i = 0; i < n; i++) {
  nexts.add(new ArrayList<>());
}

Queue<Integer> queue = new LinkedList<>();
// 找出所有入度为0的第一层节点，放入队列中
for (int i = 0; i < n; i++) {
  if (indegrees[i] == 0)
    queue.add(i);
}

while (!queue.isEmpty()) {
  int cur = queue.poll(); // 取出当前节点
  for (int nxt : nexts.get(cur)) {
    // 更新下一节点的入度
    indegrees[nxt]--;
    if (indegrees[nxt] == 0) { // 更新时检查，是否还有前序节点
      queue.add(nxt); 
    }
  }
}
...
```

时间复杂度: O(V+E) 
/V/ 表示顶点数，/E/ 表示边数。

空间复杂度: O(V+E) 
/V/ 表示顶点数，/E/ 表示边数。

#### 更多练习


# 刷题
#### 基础
* [207. Course Schedule](https://leetcode.com/problems/course-schedule/)
* [851. Loud and Rich](https://leetcode.com/problems/loud-and-rich/)（拓扑排序）

#### 复杂
* [310. Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/) （拓扑排序）
* [329. Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) （DFS）
* [802. Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)（1. 拓扑排序; 2. 深度优先搜索 + 三色标记法）
* [444. Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction)（拓扑排序，费了我老劲了！）
* [1136. Parallel Courses](https://leetcode.com/problems/parallel-courses)（拓扑排序，这次就轻松多了）
* [2050. Parallel Courses III](https://leetcode.com/problems/parallel-courses-iii/)（拓扑排序，和上一题类似，但是[2050. Parallel Courses II](https://leetcode.com/problems/parallel-courses-ii/)就变态多了，是个NP问题）
* [1786. Number of Restricted Paths From First to Last Node](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/)（Dijkstra 算法 + 记忆化dp）
* [1976. Number of Ways to Arrive at Destination](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/)（Dijkstra 算法 + 记忆化dp）
* [1462. Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/)	（拓扑排序）
* [1857. Largest Color Value in a Directed Graph](https://leetcode.com/tag/topological-sort/#:~:text=Largest%20Color%20Value%20in%20a%20Directed%20Graph)	（拓扑排序）


#### 未解之谜
* [1916. Count Ways to Build Rooms in an Ant Colony](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony)
* [631. Design Excel Sum Formula](https://leetcode.com/problems/design-excel-sum-formula/)
* [1632. Rank Transform of a Matrix](https://leetcode.com/problems/rank-transform-of-a-matrix/)
* [1203. Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)


# 参考
* [LeetBook《图》](https://leetcode-cn.com/leetbook/read/graph/r340gv/)