---
title: Longest Palindromic Substring
date: 2017-08-01 17:55:56
tags:
- LeetCode
- Algorithms
categories:
- tech
---
最近过的真的很抓狂，今天终于有点小小时间，可以记录下这个几天前就完成了的事情。
我的算法真的很差，就和我的编程能力一样，所以希望可以一点点的提高啦！

## [题目](https://leetcode.com/problems/longest-palindromic-substring/description/)
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
Example:
```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```
Example:
```
Input: "cbbd"
Output: "bb"
```

当然选择js啦！
## Try No.1
js的array有很多fancy的方法，比如整个倒过来，还有各种遍历，forEach, every, map, some等等。
从第一个字母开始，一直到最后一个这样一直遍历，找到回文字符串，然后，记录下最长的那个就好啦。

简单粗暴，一切So Easy！

```
/**
 * @param {string} s
 * @return {string}
 */
var isP = function (s) {
  var aS = s.split("");
  var aR = aS.slice().reverse()
  return aS.every(function(e, index) {
    return e === aR[index];
  });
};

var longestPalindrome = function(s) {
  var result = s.substr(0, 1);
  for (var i = 0; i < s.length - 1; i++) {
    for (var j = i + 1; j <= s.length; j++) {
      var a = s.substr(i, j);
      if (a.length > result.length && isP(a)) {
        result = a;
      }
    }
  }
  return result;
};
```

这段代码有两个问题：
1. 混淆了string的substr和substring方法，导致结果会错。
比如：longestPalindrome("abcch")
2. 有很多冗余，比如，一位数的字符串肯定是不需要的，只要大于现在已知最长的字符串就好啦。

但是这段代码居然挂在了“Time Limit Exceeded”上，而不是"Wrong Answer"。


## Try No.2
fix No.1 的问题

```
/**
 * @param {string} s
 * @return {string}
 */
var isP = function (s) {
  var aS = s.split("");
  var aR = aS.slice().reverse()
  return aS.every(function(e, index) {
    return e === aR[index];
  });
};

var longestPalindrome = function(s) {
  var result = s.substr(0, 1);
  for (var i = 0; i < s.length - 1; i++) {
    for (var j = result.length + 1; j <= s.length - i; j++) {
      var a = s.substr(i, j);
      if (isP(a)) {
        result = a;
      }
    }
  }
  return result;
};
```
这段代码还是挂在了“Time Limit Exceeded”上。
把string转成array这么多次，效率看起来是很低下，每一次都要做转化，要做好多好多次啊！！
快想想有啥好办法。
有了，直接传个array，这样就不用每次都转啦。

## Try No.3
fix No.2 的问题

```
/**
 * @param {string} s
 * @return {string}
 */
var isP = function (a) {
  var aS = a;
  var aR = a.slice().reverse()
  return aS.every(function(e, index) {
    return e === aR[index];
  });
};

var longestPalindrome = function(s) {
  var aResult = s.split("");
  var result = [aResult[0]];
  for (var i = 0; i < s.length - 1; i++) {
    for (var j = result.length + 1; j <= s.length - i; j++) {
      var a = aResult.slice(i, i + j);
      if (isP(a)) {
        result = a;
      }
    }
  }
  return result.join("");
};
```
和2的结局一摸一样。呜呜。
虽然Array的every真的很fancy，但是好像我们并不需要每一个都比，其实我们的需求是只要发现一个不合适的，就可以return false了。

## Try No.4
fix No.3 的问题

```
/**
 * @param {string} s
 * @return {string}
 */
var isP = function (a) {
  var aS = a;
  var aR = a.slice().reverse()
  return !aS.some(function(e, index) {
    return e !== aR[index];
  });
};

var longestPalindrome = function(s) {
  var aResult = s.split("");
  var result = [aResult[0]];
  for (var i = 0; i < s.length - 1; i++) {
    for (var j = result.length + 1; j <= s.length - i; j++) {
      var a = aResult.slice(i, i + j);
      if (isP(a)) {
        result = a;
      }
    }
  }
  return result.join("");
};
```
并没有卵用啊，一点变化都没有。
自己写一套吧。

## Try No.5
fix No.4 的问题

```
/**
 * @param {string} s
 * @return {string}
 */
var isP = function (aS) {
  for (var i = 0; i < aS.length/2; i++) {
    if (aS[i] !== aS[aS.length - i - 1]) {
      return false;
    }
  }
  return true;
};

var longestPalindrome = function(s) {
  var aResult = s.split("");
  var result = [aResult[0]];
  for (var i = 0; i < s.length - 1; i++) {
    for (var j = result.length + 1; j <= s.length - i; j++) {
      var a = aResult.slice(i, i + j);
      if (isP(a)) {
        result = a;
      }
    }
  }
  return result.join("");
};
```
虽然也没什么卵用，但是，好歹前进了一个case。

## Try No.6
看来只能用全新的思路了。
一计不成，再生一计。
就像我有个同事在发现问题的时候一直会说的那样，OK，我还有个方法。

搅了搅脑汁，我想到两种方法：
1. 还是老方法的更新版，两个指针，开始时，i为数组的第一个字符位置，j为数组的最后一个字符位置。
  （1）指针A从i开始遍历数组，指针B从j往前
  （2）如果A指向的字符和B指向的字符相同，则指针A往后移一位，指针B向前一位，直到A指向的字符和B指向的字符不相同，或者指针AB相遇。
  （3）如果指针AB相遇，记录i和j之间的字符串，i加1，重复步骤1-3
2. 以每个字符为中心，以及两者中间为中心，前后进行比较

第2种我们后面再说，先实现明显更好实现，更直接的第一种吧。
有一些可以优化的小店，比如，当i和j的差距小于已有结果的长度时，其实就可以直接return，不用继续啦。

```
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var aS = s.split("");
  var result = aS[0];
  
  for (var i = 0; i < aS.length - result.length; i++) {
    for (var j = aS.length - 1; j >= i + result.length; j--) {
      var iPointer = i;
      var jPointer = j;
      while (aS[iPointer] === aS[jPointer] && iPointer <= jPointer) {
        iPointer++;
        jPointer--;
      }
      if (iPointer >= jPointer) {
        result = s.substring(i, j + 1);
       }
    }
  }    
  return result;
};
```
这次总算是过了。
可是一看效率统计结果，我脸都绿了。
![统计结果1](../../../../pics/longest-palindromic-submit-1.png)

## Try No.7
没事咱还有方法2呢，来详细说说方法2。
以每个字符为中心，以及两者中间为中心，前后进行比较。

```
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var aS = s.split(""), i, j, flg;
  var result = aS[0];
  
  // 以a[i]为中心
  for (i = 1; i < aS.length; i++) {
    j = 1; 
    flag = true;
    while (flag) {
      if (aS[i + j] !== aS[i - j]) {
        flag = false;
      } else {
        result = (result.length <= (j*2 +1)) ? s.substring(i-j, i+j+1): result;
        j++;
        if (aS.length <= i + j || i - j < 0) {
          flag = false;
        }
      }
    }
  }
    
  // 以a[i]和a[i+1]为中心
  for (i = 0; i < aS.length - 1; i++) {
    j = 0;
    flag = true;
    while (flag) {
      if (aS[i - j] !== aS[i + 1 + j]) {
        flag = false;
      } else {
        result = (result.length <= (j*2 + 2)) ? s.substring(i-j, i + j + 2): result;
        j++;
        if (aS.length <= i + 1 + j || i - j < 0) {
          flag = false;
        }
      }
    }
  }
  
  return result;
};
```
效率统计结果总算是好了一点点了。没辙了这次。
![统计结果2](../../../../pics/longest-palindromic-submit-2.png)

## 工整写法
确实，while (true) 还有用flag的方法是挺低级的，看起来很弱智。
看了看大家答案的做法，觉得别人的写法确实更优雅。

```
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var longsubstr1 ="", longsubstr2 = "";
  var maxlen1 = 0, maxlen2 = 0;
  //利用动态规划判断奇数的情况，以中间元素为基准，向两边扩展
  for(var i = 0; i < s.length; i++){
    for(var j = 0; i - j >= 0 && i + j < s.length; j++){
      if(s[i - j] == s[i + j]){
        //比较长度，只记录更长的子串
        if(maxlen1 < 2 * j + 1){
          maxlen1 = 2 * j + 1;
          longsubstr1 = s.substring(i - j, i + j + 1);
        }
      }
      else break;
            
    }
  }
  //利用动态规划再判断偶数的情况，首先当前元素与其后面元素相等，其次再比较两边
  for(var m = 0; m < s.length; m++){
    if(s[m] == s[m + 1]){
      for(var n = 0; m - n >= 0 && m + 1 + n < s.length; n++){
        if(s[m - n] == s[m + 1 + n]){
          if(maxlen2 < 2 * n + 2){
            maxlen2 = 2 * n + 2;
            longsubstr2 = s.substring(m - n , m + 2 + n);
          }
        }
        else break;
      }
    }
  }
  // return longsubstr2;
    return (longsubstr1.length > longsubstr2.length) ? longsubstr1 : longsubstr2;
};
```
## 最快写法
再看看效率最高的方法：
```
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  //去掉空和单个
  if(s === "") {
    return "";
  }
  if(s.length === 1) {
    return s;
  }
  
  var min_start=0;
  var max_len=1;
  for( let i = 0; i < s.length;) {
    if ( s.length - i <= max_len/2) {
      break;
    }
    var j=i,k=i;
    // [机智]去掉重复的
    while( k < s.length-1 && s[k+1] === s[k] ) {
      k++;
    }
    while( k < s.length-1 && j>0 && s[k+1] === s[j-1] ) {
      k++;
      j--;
    }
    var new_len = k-j+1;
    if ( new_len > max_len ) {
      min_start = j;
      max_len = new_len;
    }
  }
  return s.substr(min_start,max_len)
};
```
其实也是这样的一个思路，以某一个字母为中心。机智之处就在于，他通过判断是否有重复的字段，来解决奇偶的问题，这样不用遍历两次了，真是机智啊！！

## 复杂度
计算复杂度一直是个让我头大的问题啊啊啊。
不过，我们要迎难而上，算平均复杂度对我来说，还是要求太高了，我们来比较一个字符串长度为n的情况下的最坏情况复杂度吧。
假设一次比较的复杂度为1，那么前四种方法都是n的平方级别，而重写之后的……
还是不会算啊……呜呜呜……谁来救救我……
