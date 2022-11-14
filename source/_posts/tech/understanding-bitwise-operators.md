---
title: Understanding Bitwise Operators
date: 2019-10-10 15:25:56
tags:
- Algorithms
categories:
- tech
---

* & (bitwise AND)
* | (bitwise OR)
* ~ (bitwise NOT)
* ^ (bitwise XOR)
* << (bitwise left shift)
* \>\> (bitwise right shift)
* \>\>\> (bitwise unsigned right shift)
* &= (bitwise AND assignment)
* |= (bitwise OR assignment)
* ^= (bitwise XOR assignment)
* <<= (bitwise left shift and assignment)
* \>\>= (bitwise right shift and assignment)
* \>\>\>= (bitwise unsigned right shift and assignment)

# & 与
0 & 0 = 0
0 & 1 = 0
1 & 1 = 1
与1在一起，保留自己，与0(您)一起，奉献一生

Usage: 奇偶检查
```js
var randInt = Math.round(Math.random()*1000);
if(randInt & 1) {
    trace("Odd number.");
} else
{
    trace("Even number.");
}
```

# | 或
0 | 0 = 0
0 | 1 = 1
1 | 1 = 1
或1变1，或0(您)还是自己

Usage: 条件判断
```js
var option1 = 1, option2 = 2, option3 = 4, option4 = 8; 

var determineConditions = function (options) {
  if (options & option1) {
    log("option1");
  }
  if (options & option2) {
    log("option2");
  }
  if (options & option3) {
    log("option3");
  }
  if (options & option4) {
    log("option4");
  }
}

determineConditions(option1 | option3);
```

# ~ 非
~0 = 1
~1 = 0

Usage: 补数
```js
var num = 37, cnum = ~num + 1; 
log(cnum + num === 0);
```

# ^ 异或
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 1 = 0

Properties:
* 0 ^ N = N, N ^ N = 0
* 交换律和结合律: a ^ b = b ^ a, a ^ b ^ c = a ^ (b ^ c)

Usage: 
* 交换两个数
```js
a = a ^ b;
b = a ^ b;
a = a ^ b; // a, b 值交换
```
* [Single Number](https://leetcode.com/problems/single-number/)
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
```js
nums.reduce((n,a) => a^n, 0);
```

# << 左移
a << b is shifting the number a to the left by b places, and add 0 to the last b position
a << b == a * Math.pow(2,b)

Usage: 乘以2的倍数

# >> 右移
a >> b is shifting the number a to the right by b places, and add 0 to the last b position
a >> b == a / Math.pow(2,b)

# >>> 无符号右移，逻辑右移
a >>> b is shifting the number a to the right by b places, and add 0 to position.

# 其他常见技巧
## n & (n-1)
移除二进制数n中最低位的1
> 假设 n 的二进制表示为：a10⋯0，其中 a 表示若干个高位，1 表示最低位的1，0⋯0 表示后面的若干个0，那么 n-1 的二进制表示为：a01⋯1，将 a10⋯0 与 a01⋯1 进行按位与运算，高位 a 不变，在这之后的所有位都会变为0，这样我们就将最低位的那个1移除了。

练习：
* [191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)

## n & (-n) / n & (~n + 1)
直接获取n二进制表示的最低位的1
> 假设 n 的二进制表示为：a10⋯0，其中 a 表示若干个高位，1 表示最低位的1，0⋯0 表示后面的若干个0，那么 -n 的二进制表示为：(ā01⋯1)+(1) = (ā10⋯0)，将 a10⋯0 与 ā10⋯0 进行按位与运算，高位全部变为0，最低位的1以及之后的所有0不变，这样我们就获取了n二进制表示的最低位的1。

# 更多练习
## EASY
* [190. Reverse Bits](https://leetcode.com/problems/reverse-bits/)
* [231. Power of Two](https://leetcode.com/problems/power-of-two/)
* [371. Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)


https://leetcode.com/problems/sum-of-two-integers/discuss/84278/A-summary%3A-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently