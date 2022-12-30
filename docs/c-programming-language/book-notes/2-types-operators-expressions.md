---
title: 2 - Types, Operators, and Expressions
hide_title: false
sidebar_label: 2 - Types, operators, and expressions
description: Notes on chapter 2
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

Variables and constants are the basic data objects manipulated in a program.
Declarations list the variables to be used, and state what type they have and
perhaps what their initial values are. Operators specify what is to be done to
them. Expressions combine variables and constants to produce new values. The
type of an object determines the set of values it can have and what operations
can be performed on it. These building blocks are the topics of this chapter.

The ANSI standard has made many small changes and additions to basic
types and expressions. There are now `signed` and `unsigned` forms of all
integer types, and notations for unsigned constants and hexadecimal character
constants. Floating-point operations may be done in single precision; there is
also a `long double` type for extended precision. String constants may be concatenated
at compile time. Enumerations have become part of the language,
formalizing a feature of long standing. Objects may be declared `const`, which
prevents them from being changed. The rules for automatic coercions among
arithmetic types have been augmented to handle the richer set of types.

## 2.1 - Variable Names 

Although we didn't say so in Chapter 1, there are some restrictions on the
names of variables and symbolic constants. Names are rnade up of letters and
digits; the first character must be a letter. The underscore `"_"` counts as a
letter; it is sometimes useful for improving the readability of long variable
names. Don't begin variable names with underscore, however, since library routines
often use such names. Upper case and lower case letters are distinct, so `x`
and `X` are two different names. Traditional C practice is to use lower case for
variable names, and all upper case for symbolic constants.

At least the first 31 characters of an internal name are significant. For
function names and external variables, the number may be less than 31, because
external names may be used by assemblers and loaders over which the language
has no control. For external names, the standard guarantees uniqueness only
for 6 characters and a single case. Keywords like `if`, `else`, `int`, `float`, etc.,
are reserved: you can't use them as variable names. They must be in lower
case.

It's wise to choose variable names that are related to the purpose of the variable,
and that are unlikely to get mixed up typographically. We tend to use
short· names for local variables, especially loop indices, and longer names for
external variables.

## 2.2 - Data Types and Sizes

There are only a few basic data types in C:

```
char      a single byte, capable of holding one character
          in the local character set.

int       an integer, typically reflecting the natural size
          of integers on the host machine.

float     single-precision floating point.

double    double-precision floating point.
```
