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

Usage: 奇偶检查
```
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

Usage: 条件判断
```
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
```
var num = 37, cnum = ~num + 1; 
log(cnum + num === 0);
```

# ^ 异或
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 1 = 0

# << 左移
a << b is shifting the number a to the left by b places, and add 0 to the last b position
a << b == a * Math.pow(2,b)

Usage: 乘以2的倍数

# >> 右移
a >> b is shifting the number a to the right by b places, and add 0 to the last b position
a >> b == a / Math.pow(2,b)

# >>> 无符号右移，逻辑右移
a >> b is shifting the number a to the right by b places, and add 0 to position.
