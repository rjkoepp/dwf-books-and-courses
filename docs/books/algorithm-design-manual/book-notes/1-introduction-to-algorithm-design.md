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

import BibRef from '@site/src/components/BibRef';
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

The following description is detailed in <BibRef id='SK2020' pages='p. 7'>See the paragraphs immediately above and below the snippet of pseudocode in the book.</BibRef>:

Maybe what we need is a different approach for the instance that proved to be a bad instance for the nearest-neighbor heuristic. Always walking to the closest point is too restrictive, since that seems to trap us into making moves we didn't want. 

A different idea might repeatedly connect the closest pair of endpoints whose connection will not create a problem, such as premature termination of the cycle. Each vertex begins as its own single vertex chain. After merging everything together, we will end up with a single chain containing all the points in it. Connecting the final two endpoints gives us a cycle. At any step during the execution of this closest-pair heuristic, we will have a set of single vertices and the end of vertex-disjoint chains available to merge. The pseudocode that implements this description appears below.

##### Pseudocode

<Pseudocode
    content={closestPair}
    algID="closest-pair"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

##### Clarified description

The book's description of the closest pair heuristic is not as clear or easy to follow as one might hope. Consider this an attempt to add some clarity.

It may help to first "zoom back" a bit and answer the basic question of what we are trying to find [in graph theory terms](https://en.wikipedia.org/wiki/Path_(graph_theory)#Walk,_trail,_and_path):

> What is the shortest closed trail?

That is, we want to find a sequence of edges $(e_1,e_2,\ldots,e_{n-1})$ for which there is a sequence of vertices $(v_1,v_2,\ldots,v_n)$ where $v_1=v_n$ and all edges are distinct. The edges are weighted, where the weight for each edge is simply the distance between vertices that comprise the edge--we want to minimize the overall weight of whatever closed trails exist.

**Practically speaking**, the `ClosestPair` heuristic gives us one of these distinct edges for every iteration of the outer `for` loop in the pseudocode (lines `3-10`), where the inner `for` loop (lines `5-9`) ensures the distinct edge being selected at each step, $(s_m,t_m)$, is comprised of vertices coming from the endpoints of distinct vertex chains; that is, $s_m$ comes from the endpoint of one vertex chain and $t_m$ from the endpoint of another distinct vertex chain. The inner `for` loop simply ensures we consider all such pairs, minimizing the distance between potential vertices in the process.

:::caution Ties

One potential source of confusion is that no sort of "processing order" is specified in either `for` loop. How do we determine the order in which to compare endpoints and, furthermore, the vertices of those endpoints? It doesn't matter. The nature of the inner `for` loop makes it clear that, in the case of ties, the most recently encountered vertex pairing with minimal distance is chosen.

:::

##### Good instance

Recall what happened in the *bad instance* of applying the `NearestNeighbor` heuristic (observe the newly added vertex labels):

<div align='center'>
  <img width='750px' src={require('@site/static/img/books/adm/c1-f4.png').default} />
</div>

The total distance covered was absurd because we kept jumping back and forth over `0`. 

Now consider what happens when we use the `ClosestPair` heuristic. We have $n=7$ vertices; hence, the pseudocode indicates that the outer `for` loop will be executed 6 times. As the book notes, each vertex begins as its own single vertex chain (i.e., each point is a singleton where a singleton is a chain with one endpoint). In our case, given the figure above, how many times will the inner `for` loop execute? Well, how many ways are there to choose a 2-element subset of an $n$-element set (i.e., the 2-element subsets represent potential vertex pairings)? There are [$n$ choose 2](https://en.wikipedia.org/wiki/Combination) such subsets:

$$
\binom{n}{2}=\frac{n!}{2!(n-2)!}=\frac{n(n-1)}{2}
$$

Since $n=7$ in our case, there's a total of 21 possible vertex pairings to investigate. The nature of the figure above makes it clear that `(C, D)` and `(D, E)` are the only possible outcomes from the first iteration since the smallest possible distance between vertices in the beginning is 1 and $\dist(C, D)=\dist(D, E)=1$. Which vertices are actually connected to give the first edge, `(C, D)` or `(D, E)`, is unclear since there is no processing order. Let's assume we encounter vertices `D` and `E` last, thus resulting in `(D, E)` as our first edge.

Now there are 5 more iterations to go and 6 vertex chains to consider: `A, B, C, (D, E), F, G`.

:::tip Each Iteration Eliminates a Vertex Chain

Each iteration of the outer `for` loop in the `ClosestPair` heuristic results in the elimination of a vertex chain. The outer `for` loop iterations continue until we are left with a single vertex chain comprised of all vertices, where the last step is to connect the two endpoints of this single vertex chain by an edge.

More precisely, for a graph $G$ comprised of $n$ vertices, we start with $n$ vertex chains (i.e., each vertex begins as its own single vertex chain). Each iteration of the outer `for` loop results in connecting two vertices of $G$ in such a way that these vertices come *from distinct vertex chains*; that is, connecting these vertices results in merging **two** distinct vertex chains into **one**, thus decrementing by 1 the total number of vertex chains left to consider.

Repeating such a process $n-1$ times for a graph that has $n$ vertices results in being left with $n-(n-1)=1$ vertex chain, a single chain containing all the points of $G$ in it. Connecting the final two endpoints gives us a cycle.

:::

One possible depiction of how each iteration looks is as follows:

```
ClosestPair outer for loop iterations
  1: connect D to E # -> dist: 1, chains left (6): A, B, C, (D, E), F, G
  2: connect D to C # -> dist: 1, chains left (5): A, B, (C, D, E), F, G
  3: connect E to F # -> dist: 3, chains left (4): A, B, (C, D, E, F), G
  4: connect C to B # -> dist: 4, chains left (3): A, (B, C, D, E, F), G
  5: connect F to G # -> dist: 8, chains left (2): A, (B, C, D, E, F, G)
  6: connect B to A # -> dist: 16, single chain: (A, B, C, D, E, F, G)

Final step: connect A and G
```

Hence, the `ClosestPair` heuristic does the right thing in this example where previously the `NearestNeighbor` heuristic did the wrong thing:

<div align='center'>
  <img width='750px' src={require('@site/static/img/books/adm/c1-f5.png').default} />
</div>

But not on all examples.

##### Bad instance

Consider what the `ClosestPair` algorithm does on the point set in the figure below (it may help to first try imagining the point set without any edges connecting the vertices):

<div align='center'>
  <img width='750px' src={require('@site/static/img/books/adm/c1-f3.png').default} />
</div>

How can we connect the vertices using `ClosestPair`? We have $n=6$ vertices; thus, the outer `for` loop will execute $6-1=5$ times, where our first order of business is to investigate the distance between vertices of

$$
\binom{6}{2}=\frac{6!}{2!(6-2)!}=\frac{6\cdot 5}{2}=15
$$

total possible pairs. The figure above helps us see that $\dist(A,D)=\dist(B,E)=\dist(C,F)=1-\varepsilon$ are the only possible options in the first iteration since $1-\varepsilon$ is the shortest distance between any two vertices. We arbitrarily choose `(A, D)` as the first pairing.

Now are there are 4 more iterations to go and 5 vertex chains to consider: `(A, D), B, C, E, F`. One possible depiction of how each iteration looks is as follows:

```
ClosestPair outer for loop iterations
  1: connect A to D # --> dist: 1-ɛ, chains left (5): (A, D), B, C, E, F
  2: connect B to E # --> dist: 1-ɛ, chains left (4): (A, D), (B, E), C, F
  3: connect C to F # --> dist: 1-ɛ, chains left (3): (A, D), (B, E), (C, F)
  4: connect D to E # --> dist: 1+ɛ, chains left (2): (A, D, E, B), (C, F)
  5: connect B to C # --> dist: 1+ɛ, single chain: (A, D, E, B, C, F)

Final step: connect A and F
```

:::tip Correctly Considering the Endpoints to Connect from Distinct Vertex Chains

Iterations `1-3` depicted above are fairly uneventful in the sense that we have no other meaningful options to consider. Even once we have the distinct vertex chains `(A, D)`, `(B, E)`, and `(C, F)`, the next choice is similarly uneventful and arbitrary. There are four possibilities given that the smallest possible distance between vertices on the fourth iteration is $1+\varepsilon$:

```
(A, B), (D, E), (B, C), (E, F)
```

The distance between vertices for all of the points above is $1+\varepsilon$. The choice of `(D, E)` is arbitrary. Any of the other three vertex pairings would have worked just as well. But notice what happens during iteration `5`--our possible choices for vertex pairings have been tightly narrowed. 

Specifically, the vertex chains `(A, D, E, B)` and `(C, F)`, which have endpoints `(A, B)` and `(C, F)`, respectively, allow for only four possible vertex pairings:

```
(A, C), (A, F), (B, C), (B, F)
```

Even if it may seem obvious, it is worth explicitly noting that neither `D` nor `E` were viable vertex candidates above--neither vertex is included in the endpoint, `(A, B)`, of the vertex chain of which they are vertices, namely `(A, D, E, B)`.

There is no arbitrary choice at this stage. There are no ties in the distance between vertices in the pairs above. The `(B, C)` pairing results in the smallest distance between vertices: $1+\varepsilon$. Once vertices `B` and `C` have been connected by an edge, all iterations have been completed and we are left with a single vertex chain: `(A, D, E, B, C, F)`. Connecting `A` and `F` gives us a cycle and concludes the process.

:::

The total distance traveled across `(A, D, E, B, C, F)` is as follows:

$$
\underbrace{(1-\varepsilon)}_{\texttt{A}\to\texttt{D}} +
\underbrace{(1+\varepsilon)}_{\texttt{D}\to\texttt{E}} +
\underbrace{(1-\varepsilon)}_{\texttt{E}\to\texttt{B}} +
\underbrace{(1+\varepsilon)}_{\texttt{B}\to\texttt{C}} +
\underbrace{(1-\varepsilon)}_{\texttt{C}\to\texttt{F}} +
\underbrace{\sqrt{(1-\varepsilon)^2+(2+2\varepsilon)^2}}_{\texttt{F}\to\texttt{A}}
$$

The distance above evaluates to

$$
5-\epsilon+\sqrt{5\varepsilon^2+6\varepsilon+5}
$$

as opposed to the total distance traveled by just going around the boundary (the right-hand figure in the image above where all edges are colored in red): $6+2\varepsilon$. 

As $\varepsilon\to0$, we see that 

$$
5+\sqrt{5}\approx7.24 > 6,
$$

where 6 units was the necessary amount of travel. Hence, we end up traveling about

$$
\frac{(5+\sqrt{5})-6}{6}\times 100\approx 20.6\%
$$

farther than is necessary by using the `ClosestPair` heuristic in this case. As noted in <BibRef id='SK2020' pages='p. 7' />, examples exist where the penalty is considerably worse than this.