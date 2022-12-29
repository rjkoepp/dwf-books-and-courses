---
title: 4 - Functions and Program Structure
hide_title: false
sidebar_label: 4 - Functions and Program Structure
description: Solutions to chapter 4
draft: false
tags: [Chapter 4, Functions, Program Structure]
keywords: [C]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BibRef from '@site/src/components/BibRef';

## Exercise 4-1

> Write the function `strrindex(s, t)`, which returns the position
> of the *rightmost* occurrence of `t` in `s`, or `-1` if there is none. <BibRef id='KR1988' pages='p. 71'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-2

> Extend `atof` to handle scientific notation of the form
> 
> ```
> 123.45e-6
> ```
> 
> where a floating-point number may be followed by `e` or `E` and an optionally
> signed exponent. <BibRef id='KR1988' pages='p. 73'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-3

> Given the basic framework, it's straightforward to extend the calculator.
> Add the modulus (`%`) operator and provisions for negative numbers. <BibRef id='KR1988' pages='p. 79'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-4

> Add commands to print the top element of the stack without popping,
> to duplicate it, and to swap the top two elements. Add a command to
> clear the stack. <BibRef id='KR1988' pages='p. 79'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-5

> Add access to library functions like `sin`, `exp`, and `pow`. See
> `<math.h>` in Appendix B, Section 4. <BibRef id='KR1988' pages='p. 79'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-6

> Add commands for handling variables. (It's easy to provide
> twenty-six variables with single-letter names.) Add a variable for the most
> recently printed value. <BibRef id='KR1988' pages='p. 79'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-7

> Write a routine `ungets(s)` that will push back an entire string
> onto the input. Should `ungets` know about `buf` and `bufp`, or should it just
> use `ungetch`? <BibRef id='KR1988' pages='p. 79'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-8

> Suppose that there will never be more than one character of
> pushback. Modify `getch` and `ungetch` accordingly. <BibRef id='KR1988' pages='p. 79'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-9

> Our `getch` and `ungetch` do not handle a pushed-back `EOF`
> correctly. Decide what their properties ought to be if an `EOF` is pushed back,
> then implement your design. <BibRef id='KR1988' pages='p. 79'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-10

> An alternate organization uses `getline` to read an entire input
> line; this makes `getch` and `ungetch` unnecessary. Revise the calculator to use
> this approach. <BibRef id='KR1988' pages='p. 79'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-11

> Modify `getop` so that it doesn't need to use `ungetch`. Hint:
> use an internal `static` variable. <BibRef id='KR1988' pages='p. 83'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-12

> Adapt the ideas of `printd` to write a recursive version of `itoa`;
> that is, convert an integer into a string by calling a recursive routine. <BibRef id='KR1988' pages='p. 88'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-13

> Write a recursive version of the function `reverse(s)`, which
> reverses the string `s` in place. <BibRef id='KR1988' pages='p. 88'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 4-14

> Define a macro `swap(t, x, y)` that interchanges two arguments
> of type `t`. (Block structure will help.)

<BibRef id='KR1988' pages='p. 91'></BibRef>

### My solution

tbd

### Official solution

tbd
