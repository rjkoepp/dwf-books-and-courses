---
title: 2 - Types, Operators, and Expressions
hide_title: false
sidebar_label: 2 - Types, operators, and expressions
description: Solutions to chapter 2
draft: false
tags: [Chapter 2, Types, Operators, Expressions]
keywords: [C]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BibRef from '@site/src/components/BibRef';

## Exercise 2-1

> Write a program to determine the ranges of `char`, `short`, `int`,
> and `long` variables, both `signed` and `unsigned`, by printing appropriate
> values from standard headers and by direct computation. Harder if you compute
> them: determine the ranges of the various floating-point types. <BibRef id='KR1988' pages='pp. 36-37'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 2-2

> Write a loop equivalent to the for loop above without using `&&` or `!!`. <BibRef id='KR1988' pages='p. 42'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 2-3

> Write the function `htoi(s)`, which converts a string of hexadecimal
> digits (including an optional `0x` or `0X`) into its equivalent integer value.
> The allowable digits are `0` through `9`, `a` through `f`, and `A` through `F`. <BibRef id='KR1988' pages='p. 46'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 2-4

> Write an alternate version of `squeeze(s1, s2)` that deletes
> each character in `s1` that matches any character in the *string* `s2`. <BibRef id='KR1988' pages='p. 48'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 2-5

> Write the function `any(s1, s2)`, which returns the first location
> in the string `s1` where any character from the string `s2` occurs, or `-1` if `s1`
> contains no characters from `s2`. (The standard library function `strpbrk` does
> the same job but returns a pointer to the location.) <BibRef id='KR1988' pages='p. 48'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 2-6

> Write a function `setbits(x, p, n, y)` that returns `x` with the `n`
> bits that begin at position `p` set to the rightmost `n` bits of `y`, leaving the other
> bits unchanged. <BibRef id='KR1988' pages='p. 49'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 2-7

> Write a function `invert(x, p, n)` that returns `x` with the `n` bits
> that begin at position `p` inverted (i.e., `1` changed into `0` and vice versa), leaving
> the others unchanged. <BibRef id='KR1988' pages='p. 49'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 2-8

> Write a function `rightrot(x, n)` that returns the value of the
> integer `x` rotated to the right by `n` bit positions. <BibRef id='KR1988' pages='p. 49'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 2-9

> In a two's complement number system, `x &= (x-1)` deletes the
> rightmost 1-bit in `x`. Explain why. Use this observation to write a faster version
> of `bitcount`. <BibRef id='KR1988' pages='p. 51'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 2-10

> Rewrite the function `lower`, which converts upper case letters
> to lower case, with a conditional expression instead of `if-else`. <BibRef id='KR1988' pages='p. 52'></BibRef>

### My solution

tbd

### Official solution

tbd
