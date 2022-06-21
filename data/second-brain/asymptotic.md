---
title: "Asymptotic Analysis"
description: "growth of a runtime/rate of growth of an algorithm without worrying about different computers , compilers or implementation."
date: "2022-06-02T00:00:00"
---


## Intro to Asymptotic Analysis

Because the time taken to perform an algorithms differs due to input size, compilers, computer language & hardware, they are not efficiently calculated using methods like benchmarking or mere assumptions. **This is where asymptotic analysis comes in:**

## Asymptotic Analysis

During asymptotic analysis we do not really calculate time as said earlier, instead we calculate the amount of operations in the [[algorithm]] because we expect performance “time” to be dependant on both **size of input** and machine power. ([Refer to khan material for better explanation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation)).

Formal Definition: It is a way of describing **growth of a runtime/rate of growth** of an algorithm without worrying about different computers , compilers or implementation.

## Asymptotic Notations

1.  BigO notation ⇒ Upper Bound
2.  Omega ⇒ Lower Bound
3.  Theta ⇒ Both upper and lower bound also called tight bound.


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/efd98f1c-f681-4c0f-bbca-8c3dd2b82edb/Screenshot_2022-02-21_at_10.21.17.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220618T200608Z&X-Amz-Expires=86400&X-Amz-Signature=4e6403792c8945d40594bf2b43e378afd0f0da719c15f09a465ce19ba1b9287e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot%25202022-02-21%2520at%252010.21.17.png%22&x-id=GetObject)


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4d8ef66a-65ad-4616-8bb6-6f9bb7373654/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220618T200436Z&X-Amz-Expires=86400&X-Amz-Signature=0fda3ab455ad7c4750ac4ef530b1f0622fa13514b6692ac78b37b07339c91ae7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)


---

## Further Reading
- [Big0 Cheat Sheet](https://www.bigocheatsheet.com/)
- [MIT Asymptotic Analysis Recitation 2011](http://courses.csail.mit.edu/6.006/spring11/rec/rec01.pdf)
- [More consise explanation of time complexities](https://medium.com/swlh/big-o-notation-and-time-space-complexity-1806936e6330#:~:text=O(nlogn)%20is%20known%20as,using%20O(logn)%20space.)