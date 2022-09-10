---
title: Introduction to Algorithm Design
hide_title: false
sidebar_label: 1 - Introduction to Algorithm Design
description: Introduction to algorithm design.
draft: false
tags: [Algorithm Design Manual]
keywords: [algorithms]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Pseudocode from '@site/src/components/Pseudocode';
import nearestNeighbor from '!!raw-loader!@site/src/components/_Pseudocodes/c1_nearest_neighbor.tex';
import closestPair from '!!raw-loader!@site/src/components/_Pseudocodes/c2_closest_pair.tex';

## Robot tour optimization

### Algorithm problem definition

**Problem:** Robot tour optimiztion

**Input:** A set $S$ of $n$ points in the plane.

**Output:** What is the shortest cycle tour that visits each point in the set $S$?

#### Nearest neighbor heuristic

##### Pseudocode

<Pseudocode
    content={nearestNeighbor}
    algID="nearest-neighbor"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

##### Good instance

<div align='center'>
  <img width='750px' src={require('@site/static/img/books/adm/c1-f1.png').default} />
</div>

The image above shows a *good instance* for the nearest-neighbor heuristic. The rainbow coloring (red to violet) reflects the order of incorporation. It is clear from the images that the optimal solution is obtained as depicted. The algorithm described in pseudocode works perfectly here.

##### Bad instance

:::caution Top Image Coloring Error

The top image in the figure below should have its coloring reversed to reflect a rainbow sequence ordering.

:::

<div align='center'>
  <img width='750px' src={require('@site/static/img/books/adm/c1-f2.png').default} />
</div>

The image above depicts a *bad instance* for the nearest-neighbor heuristic. Specifically, consider the top figure in the image above. The numbers describe the distance that each point lies to the left or right of the point labeled `0`. When we start from `0` and repeatedly walk to the nearest unvisited neighbor, we might keep jumping left–right–left–right over `0` as the algorithm offers no advice on how to break ties (keep in mind the need for the coloring to be reversed as warned above).

The distance that might be covered in such an instance is as followed (distance from one point to the next shown in blue):

$$
0\stackrel{\color{blue}{1}}{\to}
1\stackrel{\color{blue}{2}}{\to}
-1\stackrel{\color{blue}{4}}{\to}
3\stackrel{\color{blue}{8}}{\to}
-5\stackrel{\color{blue}{16}}{\to}
11\stackrel{\color{blue}{32}}{\to}
-21
$$

Hence, the total distance covered in the top figure would be

$$
1+2+4+8+16+32=63
$$

A much better (indeed optimal) tour for these points starts from the left-most point and visits each point as we walk right before returning at the left-most point, covering a total distance of $11-(-21)=32$.

In light of our findings above, why not just start the neearest-neighbor rule using the left-most point as the initial point, $p_0$? We just showed that we can find the optimal solution in such an instance. That's true. 

But what if we rotate our example by 90 degrees (clockwise or counter-clockwise)? Now all points are equally left-most. With this image in mind, imagine we pulled the `0` point out just slightly to the left. Then the `0` point is the left-most point and now instead of the robot arm jumping left-right-left-right it would be jumping up-down-up-down. The travel time will be just as bad as before.

#### Closest pair heuristic

##### Book Description

Maybe what we need is a different approach for the instance that proved to be a bad instance for the nearest-neighbor heuristic. Always walking to the closest point is too restrictive, since that seems to trap us into making moves we didn't want. 

A different idea might repeatedly connect the closest pair of endpoints whose connection will not create a problem, such as premature termination of the cycle. Each vertex begins as its own single vertex chain. After merging everything together, we will end up with a single chain containing all the points in it. Connecting the final two endpoints gives us a cycle. At any step during the execution of this closest-pair heuristic, we will have a set of single vertices and the end of vertex-disjoint chains available to merge. The pseudocode that implements this description appears below.

##### Pseudocode

<Pseudocode
    content={closestPair}
    algID="closest-pair"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

##### Clarified description

<div align='center'>
  <img width='750px' src={require('@site/static/img/books/adm/c1-f3.png').default} />
</div>


