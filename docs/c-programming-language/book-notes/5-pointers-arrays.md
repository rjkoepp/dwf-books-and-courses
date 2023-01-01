---
title: 5 - Pointers and Arrays
hide_title: false
sidebar_label: 5 - Pointers and arrays
description: Notes on pointers and arrays
draft: false
tags: [Chapter 5, Pointers, Arrays, Pointers and Arrays]
keywords: [C]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BibRef from '@site/src/components/BibRef';

A pointer is a variable that contains the address of a variable. Pointers are
much used in C, partly beCause they are sometimes the only way to express a
computation, and partly because they usually lead to more compact and efficient
code than can be obtained in other ways. Pointers and arrays are closely
related; this chapter also explores this relationship and shows how to exploit it.

Pointers have been lumped with the `goto` statement as a marvelous way to
create impossible-to-understand programs. This is certainly true when they are
used carelessly, and it is easy to create pointers that point somewhere unexpected.
With discipline, however, pointers can also be used to achieve clarity
and simplicity. This is the aspect that we will try to illustrate.

The main change in ANSI C is to make explicit the rules about how pointers
can be manipulated, in effect mandating what good programmers already practice
and good compilers already enforce. In addition, the type `void *` (pointer
to `void`) replaces `char *` as the proper type for a generic pointer.

## 5.1 - Pointers and Addresses

Let us begin with a simplified picture of how memory is organized. A typical
machine has an array of consecutively numbered or addressed memory cells
that may be manipulated individually or in contiguous groups. One common
situation is that any byte can be a `char`, a pair of one-byte cells can be treated
as a `short` integer, and four adjacent bytes form a `long`. A pointer is a group
of cells (often two or four) that can hold an address. So if `c` is a `char` and `p` is
a pointer that points to it, we could represent the situation this way:

<div align='center'>
  <img width='700px' src={require('@site/static/img/books/c-programming-language/c5-p93.png').default} />
</div>

The unary operator `&` gives the address of an object, so the statement


```c
p = &c;
```

assigns the address of `c` to the variable `p`, and `p` is said to "point to" `c`. The `&`
operator only applies to objects in memory: variables and array elements. It
cannot be applied to expressions, constants, or `register` variables.

The unary operator `*` is the *indirection* or *dereferencing* operator; when
applied to a pointer, it accesses the object the pointer points to. Suppose that `x`
and `y` are integers and `ip` is a pointer to `int`. This artificial sequence shows
how to declare a pointer and how to use `&` and `*`:

```c
int x = 1, y = 2, z[10];
int *ip;        /* ip is a pointer to int */

ip = &x;        /* ip now points to x */
y = *ip;        /* y is now 1 */
*ip = 0;        /* x is now 0 */
ip = &z[0];     /* ip now points to z[0] */
```

The declarations of `x`, `y`, and `z` are what we've seen all along. The declaration
of the pointer `ip`,

```c
int *ip;
```

is intended as a mnemonic; it says that the expression `*ip` is an `int`. The syntax
of the declaration for a variable mimics the syntax of expressions in which
the variable might appear. This reasoning applies to function declarations as
well. For example,

```c
double *dp, atof(char *);
```

says that in an expression `*dp` and `atof(s)` have values of type `double`, and
that the argument of `atof` is a pointer to `char`.

You should also note the implication that a pointer is constrained to point to
a particular kind of object: every pointer points to a specific data type. (There
is one exception: a "pointer to void" is used to hold any type of pointer but
cannot be dereferenced itself. We'll come back to it in Section 5.11.)

If `ip` points to the integer `x`, then `*ip` can occur in any context where `x`
could, so

```c
*ip = *ip + 10;
```

increments `*ip` by `10`.

The unary operators `*` and `&` bind more tightly than arithmetic operators, so
the assignment

```c
y = *ip + 1
```

takes whatever `ip` points at, adds `1`, and assigns the result to `y`, while
increments what `ip` points to, as do

```c
++*ip
```

and 

```c
(*ip)++
```

The parentheses are necessary in this last example; without them, the expression
would increment `ip` instead of what it points to, because unary operators like `*`
and `++` associate right to left.

Finally, since pointers are variables, they can be used without dereferencing.
For example, if `iq` is another pointer to `int`,

```c
iq = ip
```

copies the contents of `ip` into `iq`, thus making `iq` point to whatever `ip` pointed
to.

## 5.2 - Pointers and Function Arguments

Since C passes arguments to functions by value, there is no direct way for
the called function to alter a variable in the calling function. For instance, a
sorting routine might exchange two out-of-order elements with a function called
`swap`. It is not enough to write

```c
swap(a, b);
```

where the `swap` function is defined as 

```c
void swap(int x, int y)   /* WRONG */
{
  int temp;

  temp = x;
  x = y;
  y = temp;
}
```

Because of call by value, `swap` can't affect the arguments `a` and `b` in the routine
that called it. The function above only swaps *copies* of `a` and `b`.

The way to obtain the desired effect is for the calling program to pass
*pointers* to the values to be changed:

```c
swap(&a, &b);
```

Since the operator `&` produces the address of a variable, `&a` is a pointer to `a`. In
`swap` itself, the parameters are declared to be pointers, and the operands are
accessed indirectly through them.

```c
void swap(int *px, int *py)   /* interchange *px and *py */
{
  int temp;

  temp = *px;
  *px = *py;
  *py = temp;
}
```

Pictorially:

<div align='center'>
  <img width='250px' src={require('@site/static/img/books/c-programming-language/c5-p96.png').default} />
</div>

Pointer arguments enable a function to access and change objects in the
function that called it. As an example, consider a function `getint` that performs
free-format input conversion by breaking a stream of characters into
integer values, one integer per call. `getint` has to return the value it found
and also signal end of file when there is no more input. These values have to be
passed back by separate paths, for no matter what value is used for `EOF`, that
could also be the value of an input integer.

One solution is to have `getint` return the end of file status as its function
value, while using a pointer argument to store the converted integer back in the
calling function. This is the scheme used by `scanf` as well; see Section 7 .4.

The following loop fills an array with integers by calls to `getint`:

```c
int n, array[SIZE], getint(int *);

for (n = 0; n < SIZE && getint(&array[n]) != EOF; n++)
  ;
```

Each call sets `array[n]` to the next integer found in the input and increments
n. Notice that it is essential to pass the address of `array[n]` to `getint`.
Otherwise there is no way for `getint` to communicate the converted integer
back to the caller.

Our version of `getint` returns `EOF` for end of file, zero if the next input is
not a number, and a positive value if the input contains a valid number.

```c
#include <ctype.h>

int getch(void);
void ungetch(int);

/* getint: get next integer from input into *pn */
int getint(int *pn)
{
  int c, sign;

  while (isspace(c = getch()))    /* skip white space */
    ;
  if (!isdigit(c) && c != EOF && c != '+' && c != '-') {
    ungetch(c);     /* it's not a number */
    return 0;
  }
  sign = (c == '-') ? -1 : 1;
  if (c == '+' || c == '-')
    c = getch();
  for (*pn = 0; isdigit(c); c = getch())
    *pn = 10 * *pn + (c - '0');
  *pn = *= sign;
  if (c != EOF)
    ungetch(c);
  return c;
}
```

Throughout `getint`, `*pn` is used as an ordinary `int` variable. We have also
used `getch` and `ungetch` (described in Section 4.3) so the one extra character
that must be read can be pushed back onto the input.

## 5.3 - Pointers and Arrays

In C, there is a strong relationship between pointers and arrays, strong
enough that pointers and arrays should be discussed simultaneously. Any operation
that can be achieved by array subscripting can also be done with pointers.
The pointer version will in general be faster but, at least to the uninitiated,
somewhat harder to understand.

The declaration

```c
int a[10];
```

defines an array a of size `10`, that is, a block of 10 consecutive objects named
`a[O], a[1], ... , a[9]`.

<div align='center'>
  <img width='600px' src={require('@site/static/img/books/c-programming-language/c5-p98.png').default} />
</div>

The notation `a[i]` refers to the `i`-th element of the array. If `pa` is a pointer to
an integer, declared as

```c
int *pa;
```

then the assignment

```c
pa = &a[O];
```

sets `pa` to point to element zero of `a`; that is, `pa` contains the address of `a[0]`.

<div align='center'>
  <img width='600px' src={require('@site/static/img/books/c-programming-language/c5-p98b.png').default} />
</div>

Now the assignment

```c
x = *pa;
```

will copy the contents of `a[0]` into `x`.

If `pa` points to a particular element of an array, then by definition `pa + 1`
points to the next element, `pa + i` points `i` elements after `pa`, and `pa - i` points `i`
elements before. Thus, if `pa` points to `a[0]`,

```c
*(pa + 1)
```

refers to the contents of `a[1]`, `pa + i` is the address of `a[i]`, and `*(pa + i)` is
the contents of `a[i]`.

<div align='center'>
  <img width='650px' src={require('@site/static/img/books/c-programming-language/c5-p98c.png').default} />
</div>

These remarks are true regardless of the type or size of the variables in the
array `a`. The meaning of "adding `1` to a pointer," and by extension, all pointer
arithmetic, is that `pa + 1` points to the next object, and `pa + i` points to the `i`-th
object beyond `pa`.

The correspondence between indexing and pointer arithmetic is very close.
By definition, the value of a variable or expression of type array is the address
of element zero of the array. Thus after the assignment

```c
pa = &a[O];
```

`pa` and `a` have identical values. Since the name of an array is a synonym for
the location of the initial element, the assignment `pa = &a[0]` can also be written
as

```c
pa = a;
```

Rather more surprising, at least at first sight, is the fact that a reference to
`a[i]` can also be written as `*(a + i)`. In evaluating `a[i]`, C converts it to
`*(a + i)` immediately; the two forms are equivalent. Applying the operator `&` to
both parts of this equivalence, it follows that `&a[i]` and `a + i` are also identical:
`a + i` is the address of the `i`-th element beyond `a`. As the other side of this coin,
if `pa` is a pointer, expressions may use it with a subscript; `pa[i]` is identical to
`*(pa + i)`. In short, an array-and-index expression is equivalent to one written
as a pointer and offset.

There is one difference between an array name and a pointer that must be
kept in mind. A pointer is a variable, so `pa = a` and `pa++` are legal. But an
array name is not a variable; constructions like `a = pa` and `a++` are illegal.

When an array name is passed to a function, what is passed is the location
of the initial element. Within the called function, this argument is a local variable,
and so an array name parameter is a pointer, that is, a variable containing
an address. We can use this fact to write another version of `strlen`, which
computes the length of a string.

```c
/* strlen: return length of string s */
int strlen(char *s)
{
  int n;

  for (n = 0; *s != '\0'; s++)
    n++;
  return n;
}
```

Since `s` is a pointer, incrementing it is perfectly legal; `s++` has no effect on the
character string in the function that called `strlen`, but merely increments
`strlen`'s private copy of the pointer. That means that calls like

```c
strlen("hello, world");     /* string constant */
strlen(array);              /* char array[100]; */
strlen(ptr;)                /* char *ptr; */
```

all work.

As formal parameters in a function definition,

```c
char s[];
```

and

```c
char *s;
```

are equivalent; we prefer the latter because it says more explicitly that the
parameter is a pointer. When an array name is passed to a function, the function
can at its convenience believe that it has been handed either an array or a
pointer, and manipulate it accordingly. It can even use both notations if it
seems appropriate and clear.

It is possible to pass part of an array to a function, by passing a pointer to
the beginning of the subarray. For example, if `a` is an array,

```c
f(&a[2])
```

and

```c
f(a + 2)
```

both pass to the function `f` the address of the subarray that starts at `a[2]`.
Within `f`, the parameter declaration can read

```c
f(int arr[]) { ... }
```

or 

```c
f(int *arr) { ... }
```

So as far as `f` is concerned, the fact that the parameter refers to part of a larger
array is of no consequence.

If one is sure that the elements exist, it is also possible to index backwards in
an array; `p[-1]`, `p[-2]`, and so on are syntactically legal, and refer to the elements
that immediately precede `p[0]`. Of course, it is illegal to refer to objects
that are not within the array bounds.

## 5.4 - Address Arithmetic

If `p` is a pointer to some element of an array, then `p++` increments `p` to
point to the next element, and `p += i` increments it to point `i` elements beyond
where it currently does. These and similar constructions are the simplest forms
of pointer or address arithmetic.

C is consistent and regular in its approach to address arithmetic; its integration
of pointers, arrays, and address arithmetic is one of the strengths of the
language. Let us illustrate by writing a rudimentary storage allocator. There
are two routines. The first, `alloc(n)`, returns a pointer `p` to `n`-consecutive
character positions, which can be used by the caller of `alloc` for storing characters.
The second, `afree(p)`, releases the storage thus acquired so it can be
re-used later. The routines are "rudimentary" because the calls to `afree` must
be made in the opposite order to the calls made on `alloc`. That is, the storage
managed by `alloc` and `afree` is a stack, or last-in, first-out list. The standard
library provides analogous functions called `malloc` and `free` that have no
such restrictions; in Section 8.7 we will show how they can be implemented.

The easiest implementation is to have `alloc` hand out pieces of a large
character array that we will call `allocbuf`. This array is private to `alloc`
and `afree`. Since they deal in pointers, not array indices, no other routine
need know the name of the array, which can be declared `static` in the source
file containing `alloc` and `afree`, and thus be invisible outside it. In practical
implementations, the array may well not even have a name; it might instead be
obtained by calling `malloc` or by asking the operating system for a pointer to
some unnamed block of storage.

The other information needed is how much of `allocbuf` has been used.
We use a pointer, called `allocp`, that points to the next free element. When
`alloc` is asked for `n` characters, it checks to see if there is enough room left in
`allocbuf`. If so, `alloc` returns the current value of `allocp` (i.e., the beginning
of the free block), then increments it by `n` to point to the next free area. If
there is no room, `alloc` returns zero. `afree(p)` merely sets `allocp` to `p` if
`p` is inside `allocbuf`.

<div align='center'>
  <img width='700px' src={require('@site/static/img/books/c-programming-language/c5-p101.png').default} />
</div>

```c
#define ALLOCSIZE 10000   /* size of available space */

static char allocbuf[ALLOCSIZE];    /* storage for alloc */
static char *allocp = allocbuf;     /* next free position */

char *alloc(int n)    /* return pointer to n characters */
{
  if (allocbuf + ALLOCSIZE - allocp >= n) {   /* it fits */
    allocp += n;
    return allocp - n;  /* old p */
  } else      /* not enough room */
    return 0;
}

void afree(char *p)   /* free storage pointed to by p */
{
  if (p >= allocbuf && p < allocbuf + ALLOCSIZE)
    allocp = p;
}
```

In general a pointer can be initialized just as any other variable can, though
normally the only meaningful values are zero or an expression involving the
addresses of previously defined data of appropriate type. The declaration

```c
static char *allocp = allocbuf;
```

defines `allocp` to be a character pointer and initializes it to point to the beginning
of `allocbuf`, which is the next free position when the program starts.
This could have also been written

```c
static char *allocp = &allocbuf[0];
```

since the array name *is* the address of the zeroth element.

The test

```c
if (allocbuf + ALLOCSIZE - allocp >= n) { /* it fits */
```

checks if there's enough room to satisfy a request for n characters. If there is,
the new value of `allocp` would be at most one beyond the end of `allocbuf`.
If the request can be satisfied, `alloc` returns a pointer to the beginning of a
block of characters (notice the declaration of the function itself). If not, `alloc`
must return some signal that no space is left. C guarantees that zero is never a
valid address for data, so a return value of zero can be used to signal an abnormal
event, in this case, no space.

Pointers and integers are not interchangeable. Zero is the sole exception: the
constant zero may be assigned to a pointer, and a pointer may be compared
with the constant zero. The symbolic constant `NULL` is often used in place of
zero, as a mnemonic to indicate more clearly that this is a special value for a
pointer. `NULL` is defined in `<stdio.h>`. We will use `NULL` henceforth.

Tests like

```c
if (allocbuf + ALLOCSIZE - allocp >= n) { /* it fits */
```

and

```c
if (p >= allocbuf && p < allocbuf + ALLOCSIZE)
```

show several important facets of pointer arithmetic. First, pointers may be compared
under certain circumstances. If `p` and `q` point to members of the same
array, then relations like `==`, `!=`, `<`, `>=`, etc., work properly. For example,

```c
p < q
```

is true if `p` points to an earlier member of the array than `q` does. Any pointer
can be meaningfully compared for equality or inequality with zero. But the
behavior is undefined for arithmetic or comparisons with pointers that do not
point to members of the same array. (There is one exception: the address of the
first element past the end of an array can be used in pointer arithmetic.)

Second, we have already observed that a pointer and an integer may be
added or subtracted. The construction

```c
p + n
```

means the address of the `n`-th object beyond the one `p` currently points to. This
is true regardless of the kind of object `p` points to; `n` is scaled according to the
size of the objects `p` points to, which is determined by the declaration of `p`. If
an `int` is four bytes, for example, the `int` will be scaled by four.

Pointer subtraction is also valid: if `p` and `q` point to elements of the same
array, and `p < q`, then `q - p + 1` is the number of elements from `p` to `q` inclusive.
This fact can be used to write yet another version of `strlen`:

```c
/* strlen: return length of string s */
int strlen(char *s)
{
  char *p = s;

  while (*p != '\0')
    p++;
  return p - s;
}
```

In its declaration, `p` is initialized to `s`, that is, to point to the first character of
the string. In the `while` loop, each character in turn is examined until the
`'\0'` at the end is seen. Because `p` points to characters, `p++` advances `p` to the
next character each time, and `p - s` gives the number of characters advanced
over, that is, the string length. (The number of characters in the string could be
too large to store in an `int`. The header `<stddef.h>` defines a type
`ptrdiff_t` that is large enough to hold the signed difference of two pointer
values. If we were being very cautious, however, we would use `size_t` for the
return type of `strlen`, to match the standard library version. `size_t` is the
unsigned integer type returned by the `sizeof` operator.)

Pointer arithmetic is consistent: if we had been dealing with `float`s, which
occupy more storage than chars, and if `p` were a pointer to `float`, `p++` would
advance to the next `float`. Thus we could write another version of `alloc`
that maintains `float`s instead of `char`s, merely by changing `char` to `float`
throughout `alloc` and `afree`. All the pointer manipulations automatically
take into account the size of the object pointed to.

The valid pointer operations are assignment of pointers of the same type,
adding or subtracting a pointer and an integer, subtracting or comparing two
pointers to members of the same array, and assigning or comparing to zero. All
other pointer arithmetic is illegal. It is not legal to add two pointers, or to multiply
or divide or shift or mask them, or to add `float` or `double` to them, or
even, except for `void *`, to assign a pointer of one type to a pointer of another
type without a cast.

## 5.5 - Character Pointers and Functions 

A *string constant*, written as

```
"I am a string"
```

is an array of characters. In the internal representation, the array is terminated
with the null character `'\0'` so that programs can find the end. The length in
storage is thus one more than the number of characters between the double
quotes.

Perhaps the most common occurrence of string constants is as arguments to
functions, as in

```c
printf("hello, world\n");
```

When a character string like this appears in a program, access to it is through a
character pointer; `printf` receives a pointer to the beginning of the character
array. That is, a string constant is accessed by a pointer to its first element.

String constants need not be function arguments. If `pmessage` is declared
as

```c
char *pmessage;
```

then the statement

```c
pmessage = "now is the time";
```

assigns to `pmessage` a pointer to the character array. This is *not* a string
copy; only pointers are involved. C does not provide any operators for processing
an entire string of characters as a unit.

There is an important difference between these definitions:

```c
char amessage[] = "now is the time";    /* an array */
char *pmessage = "now is the time";     /* a pointer */
```

`amessage` is an array, just big enough to hold the sequence of characters and
`'\0'` that initializes it. Individual characters within the array may be changed
but `amessage` will always refer to the same storage. On the other hand,
`pmessage` is a pointer, initialized to point to a string constant; the pointer may
subsequently be modified to point elsewhere, but the result is undefined if you
try to modify the string contents.

<div align='center'>
  <img width='500px' src={require('@site/static/img/books/c-programming-language/c5-p104.png').default} />
</div>

We will illustrate more aspects of pointers and arrays by studying versions of
two useful functions adapted from the standard library. The first function is
`strcpy(s, t)`, which copies the string `t` to the string `s`. It would be nice just
to say `s = t` but this copies the pointer, not the characters. To copy the
characters, we need a loop. The array version is first:

```c
/* strcopy: copy t to s; array subscript version */
void strcopy(char *s, char *t)
{

}
```