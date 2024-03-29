---
title: 3 - Control Flow (p. 55)
hide_title: false
sidebar_label: 3 - Control flow
description: Notes on control flow
draft: false
tags: [Chapter 3, Control Flow]
keywords: [C]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BibRef from '@site/src/components/BibRef';

import C3X1 from '@site/docs/_partials/krc/c3ex1.md';
import C3X2 from '@site/docs/_partials/krc/c3ex2.md';
import C3X3 from '@site/docs/_partials/krc/c3ex3.md';
import C3X4 from '@site/docs/_partials/krc/c3ex4.md';
import C3X5 from '@site/docs/_partials/krc/c3ex5.md';
import C3X6 from '@site/docs/_partials/krc/c3ex6.md';

The control-flow statements of a language specify the order in which computations
are performed. We have already met the most common control-flow
constructions in earlier examples; here we will complete the set, and be more
precise about the ones discussed before.

## 3.1 - Statements and Blocks {#sec-3-1}

An expression such as `x = 0` or `i++` or `printf(...)` becomes a *statement*
when it is followed by a semicolon, as in

```c
x = 0;
i++;
printf(...);
```

In C, the semicolon is a statement terminator, rather than a separator as it is in
languages like Pascal.

Braces `{` and `}` are used to group declarations and statements together into a
*compound statement*, or *block*, so that they are syntactically equivalent to a
single statement. The braces that surround the statements of a function are one
obvious example; braces around multiple statements after an `if`, `else`, `while`,
or `for` are another. (Variables can be declared inside *any* block; we will talk
about this in Chapter 4.) There is no semicolon after the right brace that ends
a block.

## 3.2 - If-Else {#sec-3-2}

The `if-else` statement is used to express decisions. Formally, the syntax is

```
if (<expression>)
  <statement_1>
else
  <statement_2>
```

where the `else` part is optional. The `expression` is evaluated; if it is true (that
is, if `expression` has a non-zero value), `statement_1` is executed. If it is false
(`expression` is zero) and if there is an `else` part, `statement_2` is executed
instead.

Since an `if` simply tests the numeric value of an expression, certain coding
shortcuts are possible. The most obvious is writing

```
if (<expression>)
```

instead of

```
if (<expression> != 0)
```

Sometimes this is natural and clear; at other times it can be cryptic.

Because the `else` part of an `if-else` is optional, there is an ambiguity
when an `else` is omitted from a nested `if` sequence. This is resolved by associating
the `else` with the closest previous `else`-less `if`. For example, in

```c
if (n > 0)
  if (a > b)
    z = a;
  else
    z = b;
```

the `else` goes with the inner `if`, as we have shown by indentation. If that isn't
what you want, braces must be used to force the proper association:

```c
if (n > 0) {
  if (a > b)
    z = a;
}
else
  z = b;
```

The ambiguity is especially pernicious in situations like this:

```c
if (n >= 0)
  for (i = 0; i < n; i++)
    if (s[i] > 0) {
      printf("...");
      return i;
    }
else
  printf("error -- n is negative\n");
```

The indentation shows unequivocally what you want, but the compiler doesn't
get the message, and associates the `else` with the inner `if`. This kind of bug
can be hard to find; it's a good idea to use braces when there are nested `if`s.

By the way, notice that there is a semicolon after `z = a` in

```c
if (a > b)
  z = a;
else
  z = b;
```

This is because grammatically, a *statement* follows the `if`, and an expression
statement like "`z = a;`" is always terminated by a semicolon.

## 3.3 - Else-If {#sec-3-3}

The construction

```c
if (<expression>)
  <statement>
else if (<expression>)
  <statement>
else if (<expression>)
  <statement>
else if (<expression>)
  <statement>
else
  <statement>
```

occurs so often that it is worth a brief separate discussion. This sequence of `if`
statements is the most general way of writing a multi-way decision. The
`expression`s are evaluated in order; if any `expression` is true, the `statement` associated
with it is executed, and this terminates the whole chain. As always, the
code for each `statement` is either a single statement, or a group in braces.

The last `else` part handles the "none of the above" or default case where
none of the other conditions is satisfied. Sometimes there is no explicit action
for the default; in that case the trailing

```c
else
  <statement>
```

can be omitted, or it may be used for error checking to catch an "impossible"
condition.


To illustrate a three-way decision, here is a binary search function that
decides if a particular value `x` occurs in the sorted array `v`. The elements of `v`
must be in increasing order. The function returns the position (a number
between `0` and `n - 1`) if `x` occurs in `v`, and `-1` if not.

Binary search first compares the input value `x` to the middle element of the
array `v`. If `x` is less than the middle value, searching focuses on the lower half
of the table, otherwise on the upper half. In either case, the next step is to compare
`x` to the middle element of the selected half. This process of dividing the
range in two continues until the value is found or the range is empty.

```c
/* binsearch: find x in v[0] <= v[1] <= ... <= v[n-1] */
int binsearch(int x, int v[], int n)
{
  int low, high, mid;

  low = 0;
  high = n - 1;
  while (low <= high) {
    mid = (low + high) / 2;
    if (x < v[mid])
      high = mid - 1;
    else if (x > v[mid])
      low = mid + 1;
    else      /* found match */
      return mid;
  }
  return -1;  /* no match */
}
```

The fundamental decision is whether `x` is less than, greater than, or equal to the
middle element `v[mid]` at each step; this is a natural for `else-if`.

<details><summary> Exercises</summary>

- [Exercise 3-1](/docs/c-programming-language/exercises-and-solutions/control-flow#exercise-3-1):

  <C3X1 />

</details>

## 3.4 - Switch {#sec-3-4}

The `switch` statement is a multi-way decision that tests whether an expression
matches one of a number of *constant* integer values, and branches accordingly.

```
switch (<expression>) {
  case <const-expr>:    <statements>
  case <const-expr>:    <statements>
  default:    <statements>
}
```

Each case is labeled by one or more integer-valued constants or constant expressions.
If a case matches the expression value, execution starts at that case. All
case expressions must be different. The case labeled `default` is executed if
none of the other cases are satisfied. A `default` is optional; if it isn't there
and if none of the cases match, no action at all takes place. Cases and the
default clause can occur in any order.

In Chapter 1 we wrote a program to count the occurrences of each digit,
white space, and all other characters, using a sequence of `if ... else if ... else`. 
Here is the same program with a `switch`:

```c
#include <stdio.h>

main()    /* count digits, white space, others */
{
  int c, i, nwhite, nother, ndigit[10];

  nwhite = nother = 0;
  for (i = 0; i < 10; i++)
    ndigit[i] = 0;

  while ((c = getchar()) != EOF) {
    switch(c) {
    case '0': case '1': case '2': case '3': case '4': 
    case '5': case '6': case '7': case '8': case '9': 
      ndigit[c-'0']++;
      break;
    case ' ':
    case '\n':
    case '\t':
      nwhite++;
      break;
    default:
      nother++;
      break;
    }
  }
  printf("digits = ");
  for (i = 0; i < 10; i++)
    printf(" %d", ndigit[i]);
  printf(", white space = %d, other = %d\n",
      nwhite, nother);
  return 0;
}
```

The `break` statement causes an immediate exit from the `switch`. Because
cases serve just as labels, after the code for one case is done, execution *falls
through* to the next unless you take explicit action to escape. `break` and
`return` are the most common ways to leave a `switch`. A `break` statement
can also be used to force an immediate exit from `while`, `for`, and `do` loops, as
will be discussed later in this chapter.

Falling through cases is a mixed blessing. On the positive side, it allows
several cases to be attached to a single action, as with the digits in this example.
But it also implies that normally each case must end with a `break` to prevent
falling through to the next. Falling through from one case to another is not
robust, being prone to disintegration when the program is modified. With the
exception of multiple labels for a single computation, fall-throughs should be
used sparingly, and commented.

As a matter of good form, put a `break` after the last case (the `default`
here) even though it's logically unnecessary. Some day when another case gets
added at the end, this bit of defensive programming will save you.

<details><summary> Exercises</summary>

- [Exercise 3-2](/docs/c-programming-language/exercises-and-solutions/control-flow#exercise-3-2):

  <C3X2 />

</details>

## 3.5 - Loops (While and For) {#sec-3-5}

We have already encountered the `while` and `for` loops. In

```c
while (<expression>)
  <statement>
```

the `expression` is evaluated. If it is non-zero, `statement` is executed and `expression`
is re-evaluated. This cycle continues until `expression` becomes zero, at
which point execution resumes after `statement`.

The `for` statement

```
for (expr_1; expr_2; expr_3)
  <statement>
```

is equivalent to

```
expr_1;
while (expr_2) {
  <statement>
  expr_3;
}
```

except for the behavior of `continue`, which is described in Section 3.7.

Grammatically, the three components of a `for` loop are expressions. Most
commonly, `expr_1` and `expr_3` are assignments or function calls and `expr_2` is a
relational expression. Any of the three parts can be omitted, although the semicolons
must remain. If `expr_1` or `expr_3` is omitted, it is simply dropped from the
expansion. If the test, `expr_2`, is not present, it is taken as permanently true, so

```
for (;;) {
  ...
}
```

is an "infinite" loop, presumably to be broken by other means, such as a `break`
or `return`.

Whether to use `while` or `for` is largely a matter of personal preference.
For example, in

```c
while ((c = getchar()) == ' ' || c == '\n' || c == '\t')
  ;     /* skip white space characters */
```

there is no initialization or re-initialization, so the `while` is most natural.

The `for` is preferable when there is a simple initialization and increment,
since it keeps the loop control statements close together and visible at the top of
the loop. This is most obvious in

```c
for (i = 0; i < n; i++)
  ...
```

which is the C idiom for processing the first n elements of an array, the analog
of the Fortran DO loop or the Pascal `for`. The analogy is not perfect, however,
since the index and limit of a C `for` loop can be altered from within the loop,
and the index variable `i` retains its value when the loop terminates for any reason.
Because the components of the `for` are arbitrary expressions, `for` loops
are not restricted to arithmetic progressions. Nonetheless, it is bad style to
force unrelated computations into the initialization and increment of a `for`,
which are better reserved for loop control operations.

As a larger example, here is another version of `atoi` for converting a string
to its numeric equivalent. This one is slightly more general than the one in
Chapter 2; it copes with optional leading white space and an optional `+` or `-`
sign. (Chapter 4 shows `atof`, which does the same conversion for floatingpoint
numbers.)

The structure of the program reflects the form of the input:

```
skip white space, if any
get sign, if any
get integer part and convert it
```

Each step does its part, and leaves things in a clean state for the next. The
whole process terminates on the first character that could not be part of a
number.

```c
#include <ctype.h>

/* atoi: convert s to integer; version 2 */
int atoi(char s[])
{
  int i, n, sign;

  for (i = 0; isspace(s[i]); i++)   /* skip white space */
    ;
  sign = (s[i] == '-') ? -1 : 1;
  if (s[i] == '+' || s[i] == '-')   /* skip sign */
    i++;
  for (n = 0; isdigit(s[i]); i++)
    n = 10 * n + (s[i] - '0');
  return sign * n;
}
```

The standard library provides a more elaborate function `strtol` for conversion
of strings to long integers; see Section 5 of Appendix B.

The advantages of keeping loop control centralized are even more obvious
when there are several nested loops. The following function is a Shell sort for
sorting an array of integers. The basic idea of this sorting algorithm, which was
invented in 1959 by D. L. Shell, is that in early stages, far-apart elements are
compared, rather than adjacent ones as in simpler interchange sorts. This tends
to eliminate large amounts of disorder quickly, so later stages have less work to
do. The interval between compared elements is gradually decreased to one, at
which point the sort effectively becomes an adjacent interchange method.

```c
/* shellsort: sort v[0] ... v[n-1] into increasing order */
void shellsort(int v[], int n)
{
  int gap, i, j, temp;

  for (gap = n / 2; gap > 0; gap /= 2)
    for (i = gap; i < n; i++)
      for (j = i - gap; j >= 0 && v[j] > v[j + gap]; j -= gap) {
        temp = v[j];
        v[j] = v[j + gap];
        v[j + gap] = temp;
      }
}
```

There are three nested loops. The outermost controls the gap between compared
elements, shrinking it from `n / 2` by a factor of two each pass until it
becomes zero. The. middle loop steps along the elements. The innermost loop
compares each pair of elements that is separated by `gap` and reverses any that
are out of order. Since `gap` is eventually reduced to one, all elements are eventually
ordered correctly. Notice how the generality of the `for` makes the outer
loop fit the same form as the others, even though it is not an arithmetic progression.

One final C operator is the comma "`,`", which most often finds use in the
`for` statement. A pair of expressions separated by a comma is evaluated left to
right, and the type and value of the result are the type and value of the right
operand. Thus in a `for` statement, it is possible to place multiple expressions in
the various parts, for example to process two indices in parallel. This is illustrated
in the function `reverse(s)`, which reverses the string `s` in place.

```c
#include <string.h>

/* reverse: reverse string s in place */
void reverse(char s[])
{
  int c, i, j;

  for (i = 0, j = strlen(s) - 1; i < j; i++, j--) {
    c = s[i];
    s[i] = s[j];
    s[j] = c;
  }
}
```

The commas that separate function arguments, variables in declarations, etc.,
are *not* comma operators, and do not guarantee left to right evaluation.

Comma operators should be used sparingly. The most suitable uses are for
constructs strongly related to each other, as in the `for` loop in `reverse`, and in
macros where a multistep computation has to be a single expression. A comma
expression might also be appropriate for the exchange of elements in `reverse`,
where the exchange can be thought of as a single operation:

```c
for (i = 0, j = strlen(s) - 1; i < j; i++, j--)
  c = s[i], s[i] = s[j], s[j] = c;
```

<details><summary> Exercises</summary>

- [Exercise 3-3](/docs/c-programming-language/exercises-and-solutions/control-flow#exercise-3-3):

  <C3X3 />

</details>

## 3.6 Loops (Do-while) {#sec-3-6}

As we discussed in Chapter 1, the `while` and `for` loops test the termination
condition at the top. By contrast, the third loop in C, the `do-while`, tests at
the bottom *after* making each pass through the loop body; the body is always
executed at least once.

The syntax of the `do` is

```
do
  <statement>
while (<expression>);
```

The `statement` is executed, then `expression` is evaluated. If it is true, `statement`
is evaluated again, and so on. When the expression becomes false, the loop terminates.
Except for the sense of the test, `do-while` is equivalent to the Pascal
`repeat-until` statement.

Experience shows that `do-while` is much less used than `while` and `for`.
Nonetheless, from time to time it is valuable, as in the following function `itoa`,
which converts a number to a character string (the inverse of `atoi`). The job
is slightly more complicated than might be thought at first, because the easy
methods of generating the digits generate them in the wrong order. We have
chosen to generate the string backwards, then reverse it.

```c
/* itoa: convert n to characters in s */
void itoa(int n, char s[])
{
  int i, sign;

  if ((sign = n) < 0)   /* record sign */
    n = -n;             /* make n positive */
  i = 0;
  do {        /* generate digits in reverse order */
    s[i++] = n % 10 + '0';    /* get next digit */
  } while ((n /= 10) > 0);    /* delete it */
  if (sign < 0)
    s[i++] = '-';
  s[i] = '\0';
  reverse(s);
}
```

The `do-while` is necessary, or at least convenient, since at least one character
must be installed in the array `s`, even if `n` is zero. We also used braces around
the single statement that makes up the body of the `do-while`, even though
they are unnecessary, so the hasty reader will not mistake the `while` part for
the *beginning* of a `while` loop.

<details><summary> Exercises</summary>

- [Exercise 3-4](/docs/c-programming-language/exercises-and-solutions/control-flow#exercise-3-4):

  <C3X4 />

- [Exercise 3-5](/docs/c-programming-language/exercises-and-solutions/control-flow#exercise-3-5):

  <C3X5 />

- [Exercise 3-6](/docs/c-programming-language/exercises-and-solutions/control-flow#exercise-3-6):

  <C3X6 />

</details>

## 3.7 - Break and Continue {#sec-3-7}

It is sometimes convenient to be able to exit from a loop other than by testing
at the top or bottom. The `break` statement provides an early exit from
`for`, `while`, and `do`, just as from `switch`. A `break` causes the innermost
enclosing loop or `switch` to be exited immediately.

The following function, `trim`, removes trailing blanks, tabs, and newlines
from the end of a string, using a `break` to exit from a loop when the rightmost
non-blank, non-tab, non-newline is found.

```c
/* trim: remove trailing blanks, tabs, newlines */
int trim(char s[])
{
  int n;

  for (n = strlen(s) - 1; n >= 0; n--)
    if (s[n] != ' ' && s[n] != '\t' && s[n] != '\n')
      break;
  s[n + 1] = '\0';
  return n;
}
```

`strlen` returns the length of the string. The `for` loop starts at the end and
scans backwards looking for the first character that is not a blank or tab or
newline. The loop is broken when one is found, or when `n` becomes negative
(that is, when the entire string has been scanned). You should verify that this
is correct behavior even when the string is empty or contains only white space
characters.

The `continue` statement is related to `break`, but less often used; it causes
the next iteration of the enclosing `for`, `while`, or `do` loop to begin. In the
`while` and `do`, this means that the test part is executed immediately; in the
`for`, control passes to the increment step. The `continue` statement applies
only to loops, not to `switch`. A `continue` inside a `switch` inside a loop
causes the next loop iteration.

As an example, this fragment processes only the non-negative elements in
the array a; negative values are skipped.

```c
for (i = 0; i < n; i++) {
  if (a[i] < 0)   /* skip negative elements */
    continue;
  ...   /* do positive elements */
}
```

The `continue` statement is often used when the part of the loop that follows is
complicated, so that reversing a test and indenting another level would nest the
program too deeply.

## 3.8 - Goto and Labels {#sec-3-8}

C provides the infinitely-abusable `goto` statement, and labels to branch to.
Formally, the `goto` is never necessary, and in practice it is almost always easy
to write code without it. We have not used `goto` in this book.

Nevertheless, there are a few situations where `goto`s may find a place. The
most common is to abandon processing in some deeply nested structure, such as
breaking out of two or more loops at once. The `break` statement cannot be
used directly since it only exits from the innermost loop. Thus:

```
  for (...)
    for (...) {
      ...
      if (disaster)
        goto error;
    }
  ...

error:
  <clean up the mess>
```

This organization is handy if the error-handling code is non-trivial, and if errors
can occur in several places.

A label has the same form as a variable name, and is followed by a colon. It
can be attached to any statement in the same function as the `goto`. The scope
of a label is the entire function.

As another example, consider the problem of determining whether two
arrays `a` and `b` have an element in common. One possibility is

```c
  for (i = 0; i < n; i++)
    for (j = 0; j < m; j++)
      if (a[i] == b[j])
        goto found;
  /* didn't find any common element */
  ...
found:
  /* got one: a[i] == b[j] */
  ...
```

Code involving a goto can always be written without one, though perhaps at
the price of some repeated tests or an extra variable. For example, the array
search becomes

```c
found = 0;
for (i = 0; i < n && !found; i++)
  for (j = 0; j < m && !found; j++)
    if (a[i] == b[j])
      found = 1;
if (found)
  /* got one: a[i-1] == b[j-1] */
  ...
else
  /* didn't find any common element */
  ...
```

With a few exceptions like those cited here, code that relies on `goto` statements
is generally harder to understand and to maintain than code without
`goto`s. Although we are not dogmatic about the matter, it does seem that
`goto` statements should be used rarely, if at all.
