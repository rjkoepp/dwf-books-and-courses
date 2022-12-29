---
title: 8 - The UNIX System Interface
hide_title: false
sidebar_label: 8 - The UNIX system interface
description: Solutions to chapter 8
draft: false
tags: [Chapter 8, UNIX]
keywords: [C]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BibRef from '@site/src/components/BibRef';

## Exercise 8-1

> Rewrite the program cat from Chapter 7 using `read`, `write`,
> `open` and `close` instead of their standard library equivalents. Perform experiments
> to determine the relative speeds of the two versions. <BibRef id='KR1988' pages='p. 174'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 8-2

> Rewrite `fopen` and `_fillbuf` with fields instead of explicit bit
> operations. Compare code size and execution speed. <BibRef id='KR1988' pages='pp. 178-179'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 8-3

> Design and write `_flushbuf`, `fflush`, and `fclose`. <BibRef id='KR1988' pages='p. 179'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 8-4

> The standard library function
> 
> ```c
> int fseek(FILE *fp, long offset, int origin)
> ```
> 
> is identical to `lseek` except that `fp` is a file pointer instead of a file descriptor
> and the return value is an `int` status, not a position. Write `fseek`. Make sure
> that your `fseek` coordinates properly with the buffering done for the other
> functions of the library. <BibRef id='KR1988' pages='p. 179'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 8-5

> Modify the `fsize` program to print the other information contained
> in the inode entry. <BibRef id='KR1988' pages='p. 184'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 8-6

> The standard library function `calloc(n, size)` returns a
> pointer to `n` objects of size `size`, with the storage initialized to zero. Write
> `calloc`, by calling `malloc` or by modifying it. <BibRef id='KR1988' pages='p. 189'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 8-7

> `malloc` accepts a size request without checking its plausibility;
> `free` believes that the block it is asked to free contains a valid size field.
> Improve these routines so they take more pains with error checking. <BibRef id='KR1988' pages='p. 189'></BibRef>

### My solution

tbd

### Official solution

tbd

## Exercise 8-8

> Write a routine `bfree(p, n)` that will free an arbitrary block `p`
> of `n` characters into the free list maintained by `malloc` and `free`. By using
> `bfree`, a user can add a static or external array to the free list at any time. <BibRef id='KR1988' pages='p. 189'></BibRef>

### My solution

tbd

### Official solution

tbd
