---
title: Python边角知识问答
date: 2022-08-30 18:33:56
tags:
- Meaningless
categories:
- tech
---

1. String的前缀有哪些？
A: 
* 自然字符串，r/R 避免转义
* Unicode字符串，u/U 处理Unicode文本
* 带变量的字符串， f/F 取得变量值

2. 元组和列表的区别？元组用什么标识？
A: 元组是不可变的列表。用`,`标识。

3. 元组不可以修改么？
A: 不可以改变元组中的值，但是，可以用新的元组覆盖旧元组。

4. 如何解释`a = (1)`？
A: 把数值1赋给变量a，圆括号没有意义。

5. `'\n \n'.isspace()` True or False?
A: True

