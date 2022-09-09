---
title: Python Performance Considerations
hide_title: false
sidebar_label: Performance considerations
description: Performance observations about the Python programming language
draft: false
tags: [Performance]
keywords: [performance]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BibRef from '@site/src/components/BibRef';

## Time Complexity Notes from python.org

:::info

The following details come from [Python's website](https://wiki.python.org/moin/TimeComplexity).

:::

This page documents the time-complexity (aka "Big O" or "Big Oh") of various operations in current CPython. Other Python implementations (or older or still-under development versions of CPython) may have slightly different performance characteristics. However, it is generally safe to assume that they are not slower by more than a factor of $O(\log n)$.

Generally, $n$ is the number of elements currently in the container. $k$ is either the value of a parameter or the number of elements in the parameter.

### list

The Average Case assumes parameters generated uniformly at random.

Internally, a list is represented as an array; the largest costs come from growing beyond the current allocation size (because everything must move), or from inserting or deleting somewhere near the beginning (because everything after that must move). If you need to add/remove at both ends, consider using a collections.deque instead.

| Operation | Average Case | Amortized Worst Case |
| :-- | :-- | :-- |
| Copy | $O(n)$ | $O(n)$ |
| Append | $O(1)$ | $O(1)$ |
| Pop last | $O(1)$ | $O(1)$ |
| Pop intermediate | $O(n)$ | $O(n)$ |
| Insert | $O(n)$ | $O(n)$ |
| Get item | $O(1)$ | $O(1)$ |
| Set item | $O(1)$ | $O(1)$ |
| Delete item | $O(n)$ | $O(n)$ |
| Iteration | $O(n)$ | $O(n)$ |
| Get slice | $O(k)$ | $O(k)$ |
| Del slice | $O(n)$ | $O(n)$ |
| Set slice | $O(k+n)$ | $O(k+n)$ |
| Extend | $O(k)$ | $O(k)$ |
| Sort | $O(n\log n)$ | $O(n\log n)$ |
| Multiply | $O(nk)$ | $O(nk)$ |
| `x in s` | $O(n)$ |  |
| `min(s)`, `max(s)` | $O(n)$ |  |
| Get Length | $O(1)$ | $O(1)$ |

:::info Note on Append and Extend

These operations rely on the "Amortized" part of "Amortized Worst Case". Individual actions may take surprisingly long, depending on the history of the container.

:::

:::info Pop intermediate

Popping the intermediate element at index `k` from a list of size `n` shifts all elements after `k` by one slot to the left using `memmove`. `n - k` elements have to be moved, so the operation is $O(n - k)$. The best case is popping the second to last element, which necessitates one move, the worst case is popping the first element, which involves `n - 1` moves. The average case for an average value of `k` is popping the element the middle of the list, which takes $O(n/2) = O(n)$ operations.

:::

### collections.deque

A deque (double-ended queue) is represented internally as a doubly linked list. (Well, a list of arrays rather than objects, for greater efficiency.) Both ends are accessible, but even looking at the middle is slow, and adding to or removing from the middle is slower still.

| Operation | Average Case | Amortized Worst Case |
| :-- | :-- | :-- |
| Copy | $O(n)$ | $O(n)$ |
| append | $O(1)$ | $O(1)$ |
| appendleft | $O(1)$ | $O(1)$ |
| pop | $O(1)$ | $O(1)$ |
| popleft | $O(1)$ | $O(1)$ |
| extend | $O(k)$ | $O(k)$ |
| extendleft | $O(k)$ | $O(k)$ |
| rotate | $O(k)$ | $O(k)$ |
| remove | $O(n)$ | $O(n)$ |

### set

See dict -- the implementation is intentionally very similar.

| Operation | Average Case | Amortized Worst Case | Notes |
| :-- | :-- | :-- | :-- |
| `x in s` | $O(1)$ | $O(n)$ |  |
| Union <code>s&vert;t</code> | $O(\len(s)+\len(t))$ |  |  |
| Intersection `s&t` | $O(\min(\len(s), \len(t)))$ | $O(\len(s)\cdot\len(t))$ | replace "min" with "max" if `t` is not a set |
| Multiple intersection `s1 & s2 & ... & sn` |  | $(n-1)O(\ell)$ where $\ell$ is $\max(\len(s1),\ldots,\len(sn))$ |  |
| Difference `s-t` | $O(\len(s))$ |  |  |
| `s.difference_update(t)` | $O(\len(t))$ |  |  |
| Symmetric Difference `s^t` | $O(\len(s))$ | $O(\len(s)\cdot\len(t))$ |  |
| `s.symmetric_difference_update(t)` | $O(\len(t))$ | $O(\len(t)\cdot\len(s))$ |  |

:::info

- As seen in the [source code](https://github.com/python/cpython/blob/main/Objects/setobject.c) the complexities for set difference `s-t` or `s.difference(t)` (`set_difference()`) and in-place set difference `s.difference_update(t)` (`set_difference_update_internal()`) are different! The first one is $O(\len(s))$ (for every element in `s` add it to the new set, if not in `t`). The second one is $O(\len(t))$ (for every element in `t` remove it from `s`). So care must be taken as to which is preferred, depending on which one is the longest set and whether a new set is needed.
- To perform set operations like `s-t`, both `s` and `t` need to be sets. However you can do the method equivalents even if `t` is any iterable, for example `s.difference(l)`, where `l` is a list.

:::

### dict

The Average Case times listed for dict objects assume that the hash function for the objects is sufficiently robust to make collisions uncommon. The Average Case assumes the keys used in parameters are selected uniformly at random from the set of all keys.

Note that there is a fast-path for dicts that (in practice) only deal with str keys; this doesn't affect the algorithmic complexity, but it can significantly affect the constant factors: how quickly a typical program finishes.

| Operation | Average Case | Amortized Worst Case |
| :-- | :-- | :-- |
| `k in d` | $O(1)$ | $O(n)$ |
| Copy | $O(n)$ | $O(n)$ |
| Get Item | $O(1)$ | $O(n)$ |
| Set Item | $O(1)$ | $O(n)$ |
| Delete Item | $O(1)$ | $O(n)$ |
| Iteration | $O(n)$ | $O(n)$ |

:::info Set Item 

These operations rely on the "Amortized" part of "Amortized Worst Case". Individual actions may take surprisingly long, depending on the history of the container.

:::

:::info Copy and Iteration

For these operations, the worst case `n` is the maximum size the container ever achieved, rather than just the current size. For example, if `N` objects are added to a dictionary, then `N-1` are deleted, the dictionary will still be sized for `N` objects (at least) until another insertion is made.

:::

## Miscellaneous

### list to set conversion

Iterating over a list is $O(n)$ and adding each element to the hash set is $O(1)$, so the total operation is $O(n)$.

:::caution Hash Collisions

It is possible, albeit highly unlikely, that you could have a hash collision every time you try to insert an element into the hash table, which would result in each insertion being $O(n)$ and thus $O(n^2)$ for the entire process. 

So the very worst-case complexity for converting a list into a set is $O(n^2)$. Iterating through the list will need $O(n)$.

:::

- See the post on Stack Overflow about [time complexity of a list to set conversion](https://stackoverflow.com/q/34642155/5209533) for more.