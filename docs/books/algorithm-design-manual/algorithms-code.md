---
title: Algorithms (Code)
hide_title: false
sidebar_label: Algorithms (Code)
description: Code for a variety of algorithms
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

## Sorting

### Insertion sort 

```python
def insertion_sort(arr):
    i = j = 0
    for i in range(1, len(arr)):
        j = i 
        while j > 0 and (arr[j] < arr[j-1]):
            arr[j], arr[j-1] = arr[j-1], arr[j]
            j = j - 1
```