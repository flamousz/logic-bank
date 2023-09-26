# READ ME
## 1. BOUNCING BALL
### Category: 
>`puzzle mathematic`




A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
Three conditions must be met for a valid experiment:

    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.

>**If all three conditions above are fulfilled, return a positive integer, otherwise return -1.**

Note:

The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
Examples:

    Float parameter "h" in meters must be greater than 0
    - h = 3, bounce = 0.66, window = 1.5, result is 3
    - h = 3, bounce = 1, window = 1.5, result is -1 
    (Condition 2) not fulfilled).


## 1. Sum of two lowest positive integers
### Category: 
>`array`

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like `[19, 5, 42, 2, 77]`, the output should be 7.

```js
[10, 343445353, 3453445, 3453545353453] should return 3453455.

```

## Ones and Zeros
### Category: 
>`array`

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: `[0, 0, 0, 1]` is treated as `0001` which is the binary representation of 1.

```js
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9

```
However, the arrays can have varying lengths, not just limited to 4.


