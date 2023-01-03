---
title: 6 - Structures
hide_title: false
sidebar_label: 6 - Structures
description: Notes on structures
draft: false
tags: [Chapter 6, Structures (C)]
keywords: [C]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BibRef from '@site/src/components/BibRef';

A structure is a collection of one or more variables, possibly of different
types, grouped together under a single name for convenient handling. (Structures
are called "records" in some languages, notably Pascal.) Structures help
to organize complicated data, particularly in large programs, because they permit
a group of related variables to be treated as a unit instead of as separate
entities.

One traditional example of a structure is the payroll record: an employee is
described by a set of attributes such as name, address, social security number,
salary, etc. Some of these in turn could be structures: a name has several components,
as does an address and even a salary. Another example, more typical
for C, comes from graphics: a point is a pair of coordinates, a rectangle is a pair
of points, and so on.

The main change made by the ANSI standard is to define structure
assignment &#8212; structures may be copied and assigned to, passed to functions, and
returned by functions. This has been supported by most compilers for many
years, but the properties are now precisely defined. Automatic structures and
arrays may now also be initialized.

## 6.1 - Basics of Structures

Let us create a few structures suitable for graphics. The basic object is a
point, which we will assume has an $x$ coordinate and a $y$ coordinate, both
integers.

<div align='center'>
  <img width='250px' src={require('@site/static/img/books/c-programming-language/c6-p127.png').default} />
</div>

The two components can be placed in a structure declared like this:

```c
struct point {
  int x;
  int y;
};
```

The keyword `struct` introduces a structure declaration, which is a list of
declarations enclosed in braces. An optional name called a *structure tag* may
follow the word `struct` (as with `point` here). The tag names this kind of
structure, and can be used subsequently as a shorthand for the part of the
declaration in braces.

The variables named in a structure are called *members*. A structure
member or tag and an ordinary (i.e., non-member) variable can have the same
name without conflict, since they can always be distinguished by context.
Furthermore, the same member names may occur in different structures,
although as a matter of style one would normally use the same names only for
closely related objects.

A `struct` declaration defines a type. The right brace that terminates the
list of members may be followed by a list of variables, just as for any basic type.
That is,

```c
struct { ... } x, y, z;
```

is syntactically analogous to

```c
int x, y, z;
```

in the sense that each statement declares `x`, `y` and `z` to be variables of the
named type and causes space to be set aside for them.

A structure declaration that is not followed by a list of variables reserves no
storage; it merely describes a template or the shape of a structure. If the
declaration is tagged, however, the tag can be used later in definitions of
instances of the structure. For example, given the declaration of `point` above,

```c
struct point pt;
```

defines a variable `pt` which is a structure of type `struct` `point`. A structure
can be initialized by following its definition with a list of initializers, each a constant
expression, for the members:

```c
struct point maxpt = { 320, 200 };
```

An automatic structure may also be initialized by assignment or by calling a
function that returns a structure of the right type.

A member of a particular structure is referred to in an expression by a construction
of the form

```
structure-name . member
```

The structure member operator "`.`" connects the structure name and the
member name. To print the coordinates of the point `pt`, for instance,

```c
printf("%d,%d", pt.x, pt.y);
```

or to compute the distance from the origin `(0,0)` to `pt`,

```c
double dist, sqrt(double);

dist = sqrt((double)pt.x * pt.x + (double)pt.y * pt.y);
```

Structures can be nested. One representation of a rectangle is a pair of
points that denote the diagonally opposite corners:

<div align='center'>
  <img width='250px' src={require('@site/static/img/books/c-programming-language/c6-p129.png').default} />
</div>

```c
struct rect {
  struct point pt1;
  struct point pt2;
};
```

The `rect` structure contains two `point` structures. If we declare `screen` as

```c
struct rect screen;
```

then

```c
screen.pt1.x
```

refers to the `x` coordinate of the `pt1` member of `screen`.

## 6.2 - Structures and Functions 

