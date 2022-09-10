---
title: Miscellany
hide_title: false
sidebar_label: Miscellany
description: Miscellaneous things concerning the Algorithm Design Manual
draft: false
tags: [Algorithms]
keywords: [tbd]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Errata

### Official errata

See [the live list](https://www3.cs.stonybrook.edu/~skiena/algorist/book/errata-adm3) for more recent additions. Below is a listing of all current errata notes:

- Page 24, exercise 1-10: minor clarification that the array indices goes from 1 to n.
- (*) Page 71, formula on line 10: the lower index of the second summation $i=i$ should be $i=0$.
- (*) Page 85, line -5: log n should be lg n
- Page 97, line -4: "where we representing" should be "where we represent".
- Page 99, line 6: "The needs of biologist" should be "The needs of biologists"
- Page 125, line 17: "cheapest fair" should be "cheapest fare"
- (*) Page 158, LeftMidMaxRange pseudocode: the last line should be "return M" instead of "return S"
- (*) Page 164, line 3: "identify all locations in P" should be "identify all locations in S".
- Page 194, question 6-5: "[easy]" should be [3].
- (*) Page 214 Figure 7.9 right: The edge in the BFS between 4 and 5 has the wrong direction: it should point from 5 to 4.
- Page 223, line -15: The (!processed[y]) test is necessary for DFS on directed graphs but not undirected graphs, which perhaps should be clarified in the text.
- (*) Page 235, line 2: "cannot reach" should be "cannot be reached from"
- (*) Page 319, Figure 10.5: The colors blue and green are reversed.  Green should denote insertion and blue deletion.
- (*) Page 320, Figure 10.6: Same as above.  The colors blue and green are reversed.  Green should denote insertion and blue deletion.
- (*) Page 321, row_init and column_init code:  Both routines should have a second argument cell array m.  The code is currently correct, because m is a global variable, but it would be better to pass it as an argument.
- (*) Page 323, goal_cell code: This routine should have a last argument cell array m.   This necessitates adding the argument to goal_cell on page 321 and in the call to goal_cell on page 318.
- (*) Page 345, Problem 10-3: There are five solutions, not four.   The missing solution is (3,1,0).
- (*) Page 404, line -7 (last line of hill_climbing routine): "while (stuck)" should be "while (!stuck)"
- (*) Page 475, output graphic on top right: There is a sign error on the first
- element on the third row.  The formula is: aei + bfg + cdh - ceg - bdi - afh
- (*) Page 516, line -4: (2+epsilon) should be (2+epsilon)*n
- Page 594, output graphic on top right:  There is reason to believe that this is not the optimal TSP tour for these points.
- Page 657. The link to Powecrust is www.cs.ucdavis.edu/~amenta/powercrust.html , not web.cs... The same typo is repeated on page 663.
- Page 704: The JFLAP web link should be "https://www.jflap.org" instead of "http://www.jflap.org". Alternatively, you could also drop the "www." prefix in either protocol.
- Index: Page 793, War Story entry: At least one is missing - Section 4.4 on page 125, Give me a ticket on an airplane.

### Non-official errata (personally observed)

- Page 6, Figure 1.3: The coloring in the top image should be reversed; that is, the current ordering is

  ```
  V -> I -> B -> G -> Y -> O -> R
  ```

  But, in proper rainbow sequence, the ordering should be

  ```
  R -> O -> Y -> G -> B -> I -> V
  ```

  
