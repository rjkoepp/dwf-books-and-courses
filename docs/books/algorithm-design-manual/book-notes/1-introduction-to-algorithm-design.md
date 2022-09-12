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
import nearestNeighbor from '!!raw-loader!@site/src/components/_Pseudocodes/c1-nearest-neighbor.tex';
import closestPair from '!!raw-loader!@site/src/components/_Pseudocodes/c1-closest-pair.tex';
import optimalTSP from '!!raw-loader!@site/src/components/_Pseudocodes/c1-optimal-tsp.tex';
import earliestJobFirst from '!!raw-loader!@site/src/components/_Pseudocodes/c1-earliest-job-first.tex';
import shortestJobFirst from '!!raw-loader!@site/src/components/_Pseudocodes/c1-shortest-job-first.tex';
import exhaustiveScheduling from '!!raw-loader!@site/src/components/_Pseudocodes/c1-exhaustive-scheduling.tex';
import optimalScheduling from '!!raw-loader!@site/src/components/_Pseudocodes/c1-optimal-scheduling.tex';
import exhaustiveSchedulingTwo from '!!raw-loader!@site/src/components/_Pseudocodes/c1-exhaustive-scheduling-two.tex';
import incrementNaturalNumbers from '!!raw-loader!@site/src/components/_Pseudocodes/c1-increment-natural-numbers.tex';

## Robot tour optimization problem

### Algorithm problem definition

- **Problem:** Robot tour optimiztion
- **Input:** A set $S$ of $n$ points in the plane.
- **Output:** What is the shortest cycle tour that visits each point in the set $S$?

### Nearest neighbor heuristic

##### Pseudocode

<Pseudocode
    content={nearestNeighbor}
    algID="nearest-neighbor"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

#### Good instance

<div align='center'>
  <img width='750px' src={require('@site/static/img/books/adm/c1-f1.png').default} />
</div>

The image above shows a *good instance* for the nearest-neighbor heuristic. The rainbow coloring (red to violet) reflects the order of incorporation. It is clear from the images that the optimal solution is obtained as depicted. The algorithm described in pseudocode works perfectly here.

#### Bad instance

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

### Closest pair heuristic

#### Book Description

The following description is detailed in <BibRef id='SK2020' pages='p. 7'>See the paragraphs immediately above and below the snippet of pseudocode in the book.</BibRef>:

Maybe what we need is a different approach for the instance that proved to be a bad instance for the nearest-neighbor heuristic. Always walking to the closest point is too restrictive, since that seems to trap us into making moves we didn't want. 

A different idea might repeatedly connect the closest pair of endpoints whose connection will not create a problem, such as premature termination of the cycle. Each vertex begins as its own single vertex chain. After merging everything together, we will end up with a single chain containing all the points in it. Connecting the final two endpoints gives us a cycle. At any step during the execution of this closest-pair heuristic, we will have a set of single vertices and the end of vertex-disjoint chains available to merge. The pseudocode that implements this description appears below.

#### Pseudocode

<Pseudocode
    content={closestPair}
    algID="closest-pair"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

#### Clarified description

The book's description of the closest pair heuristic is not as clear or easy to follow as one might hope. Consider this an attempt to add some clarity.

It may help to first "zoom back" a bit and answer the basic question of what we are trying to find [in graph theory terms](https://en.wikipedia.org/wiki/Path_(graph_theory)#Walk,_trail,_and_path):

> What is the shortest closed trail?

That is, we want to find a sequence of edges $(e_1,e_2,\ldots,e_{n-1})$ for which there is a sequence of vertices $(v_1,v_2,\ldots,v_n)$ where $v_1=v_n$ and all edges are distinct. The edges are weighted, where the weight for each edge is simply the distance between vertices that comprise the edge--we want to minimize the overall weight of whatever closed trails exist.

**Practically speaking**, the `ClosestPair` heuristic gives us one of these distinct edges for every iteration of the outer `for` loop in the pseudocode (lines `3-10`), where the inner `for` loop (lines `5-9`) ensures the distinct edge being selected at each step, $(s_m,t_m)$, is comprised of vertices coming from the endpoints of distinct vertex chains; that is, $s_m$ comes from the endpoint of one vertex chain and $t_m$ from the endpoint of another distinct vertex chain. The inner `for` loop simply ensures we consider all such pairs, minimizing the distance between potential vertices in the process.

:::caution Ties

One potential source of confusion is that no sort of "processing order" is specified in either `for` loop. How do we determine the order in which to compare endpoints and, furthermore, the vertices of those endpoints? It doesn't matter. The nature of the inner `for` loop makes it clear that, in the case of ties, the most recently encountered vertex pairing with minimal distance is chosen.

:::

#### Good instance

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

#### Bad instance

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

### Enumerate all possibilities

Given the issues encountered when trying to use the nearest neighbor and closest pair heuristics, we could try enumerating *all* possible orderings of the set of points and then select the one that minimizes the total length:

<Pseudocode
    content={optimalTSP}
    algID="optimal-tsp"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

Since all possible orderings are considered, we are guaranteed to end up with the shortest possible tour. This algorithm is correct, since we pick the best of all the possibilities. But it is also extremely slow. Even a powerful computer couldn't hope to enumerate all the `20! = 2,432,902,008,176,640,000` orderings of `20` points within a day. For real circuit boards, where `n ≈ 1,000`, forget about it. All of the world's computers working full time wouldn't come close to finishing the problem before the end of the universe, at which point it presumably becomes moot.

The quest for an efficient algorithm to solve this problem, called the [traveling salesman problem (TSP)](https://en.wikipedia.org/wiki/Travelling_salesman_problem), will take us through much of this book.

## Movie scheduling problem

Consider the following scheduling problem. Imagine you are a highly in demand actor, who has been presented with offers to star in $n$ different movie projects under development. Each offer comes specified with the first and last day of filming. Whenever you accept a job, you must commit to being available throughout this entire period. Thus, you cannot accept two jobs whose intervals overlap.

For an artist such as yourself, the criterion for job acceptance is clear: you want to make as much money as possible. Because each film pays the same fee, this implies you seek the largest possible set of jobs (intervals) such that no two of them conflict with each other.

For example, an optimal solution to this problem is highlighted in red below:

<div align='center'>
  <img width='750px' src={require('@site/static/img/books/adm/c1-f6.png').default} />
</div>

### Algorithm problem definition

- **Problem:** Movie scheduling problem 
- **Input:** A set $I$ of $n$ intervals on the line.
- **Output:** What is the largest subset of mutually non-overlapping intervals that can be selected from $I$?

### Earliest job first

There are several ideas that may come to mind. One is based on the notion that it is best to work whenever work is available. This implies that you should start with the job with the earliest start date:

<Pseudocode
    content={earliestJobFirst}
    algID="earliest-job-first"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

This idea makes sense, at least until we realize that accepting the earliest job might block us from taking many other jobs if that first job is long:

<div align='center'>
  <img width='450px' src={require('@site/static/img/books/adm/c1-f7.png').default} />
</div>

Above, we see that *War and Peace*, the job with the earliest start date, prevents us from getting work for four other jobs (the optimal solution in red).

:::caution All Jobs Pay the Same (flat fee)

Remember that one of the conditions of the problem is that *all jobs pay the same*. So you're wanting to maximize the total overall number of jobs you can get. 

:::

### Shortest job first

Given the flat fee nature of payments for different jobs, maybe we would be better off selecting the *shortest* job first and proceed to eliminate other overlapping jobs:

<Pseudocode
    content={shortestJobFirst}
    algID="shortest-job-first"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

As with the "earliest job first" approach, this idea makes sense at first. At least until we realize that accepting the shortest job might block us from taking *two* other jobs:

<div align='center'>
  <img width='450px' src={require('@site/static/img/books/adm/c1-f8.png').default} />
</div>

### Exhaustive scheduling

This problem is starting to feel like the robot tour optimization problem. Should we ditch attempts at clever approaches and go for enumerating all scheduling possibilities and select the best result?

We can try (pseudocode below ignores the details of testing whether or not a set of intervals is, in fact, disjoint):

<Pseudocode
    content={exhaustiveScheduling}
    algID="exhaustive-scheduling"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

Is the slowness of this approach prohibitive like the exhaustive approach was for the robot tour optimization problem? The critical limitation is enumerating the $2^n$ subsets of $n$ things. Enumerating $2^n$ items is much better than enumerating $n!$ items. For smaller $n$-values, like say $n=20$, we get about a million subsets. But for something like $n=100$, we get $2^{100}$, which is much greater than any set of computers could hope to enumerate.

### Earliest terminating job first (optimal scheduling)

**Spoiler alert:** The difference between our scheduling and robotics problems is that there *is* an algorithm that solves the movie scheduling both correctly and efficiently.

Think about the first job to terminate; that is, the interval $x$ whose right endpoint is left-most among all intervals. This role is played by *"Discrete" Mathematics* in the figure below:

<div align='center'>
  <img width='750px' src={require('@site/static/img/books/adm/c1-f6.png').default} />
</div>

Other jobs may well have started before $x$ (e.g., *The President's Algorist*), but all of these must at least partially overlap each other (otherwise the right endpoint of $x$ would not represent the earliest termination date for a set of jobs). Thus, we can select at most one job from the group. The first of these jobs to terminate is $x$, so any of the overlapping jobs potentially block out other opportunities to the right of it. Clearly we can never lose by picking $x$. This suggests the following correct, efficient algorithm:

<Pseudocode
    content={optimalScheduling}
    algID="optimal-scheduling"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

In the figure above, this process looks as follows:

```
Pick -> "Discrete" Mathematics
  Eliminate -> The President's Algorist, Tarjan of the Jungle
Pick -> Halting State
  Eliminate -> Steiner's Tree
Pick -> Programming Challenges
  Eliminate -> The Four Volume Problem, Process Terminated
Pick -> Calculated Bets
```

## Counterexamples

### Two important properties

#### Verifiability

To demonstrate that a particular instance is a counterexample to a particular algorithm, you must be able to

1. calculate what answer your algorithm will give in this instance, and
2. display a better answer so as to prove that the algorithm didn't find it.

#### Simplicity

Good counter-examples have all unnecessary details stripped away. They make clear exactly *why* the proposed algorithm fails. Simplicity is important because you must be able to hold the given instance in your head in order to reason about it. Once a counterexample has been found, it is worth simplifying it down to its essence.

### Techniques

Hunting for counterexamples is a skill worth developing. It bears some similarity to the task of developing test sets for computer programs, but relies more on inspiration than exhaustion. Here are some techniques to aid your quest:

#### Think small {#counter-think-small}

Note that the robot tour counter-examples I presented boiled down to only considering a few points, and the scheduling counter-examples to only a few intervals. This is indicative of the fact that when algorithms fail, there is usually a very simple example on which they fail. Amateur algorists tend to draw a big messy instance and then stare at it helplessly. The pros look carefully at several small examples, because they are easier to verify and reason about.

#### Think exhaustively {#counter-think-exhaustively}

There are usually only a small number of possible instances for the first non-trivial value of $n$. For example, there are only three distinct ways two intervals on the line can occur: 

- as disjoint intervals
- as overlapping intervals
- as properly nesting intervals, one within the other

All cases of three intervals (including counter-examples to both of the movie heuristics) can be systematically constructed by adding a third segment in each possible way to these three instances.

#### Hunt for the weakness {#counter-hunt-for-weakness}

If a proposed algorithm is of the form "always take the biggest" (better known as the *greedy* algorithm), think about why that might prove to be the wrong thing to do. In particular, go for a tie.

#### Go for a tie {#counter-go-for-tie}

A devious way to break a greedy heuristic is to provide instances where everything is the same size. Suddenly the heuristic has nothing to base its decision on, and perhaps has the freedom to return something suboptimal as the answer.

For example, recall the issues we encountered when we tried to employ the nearest neighbor heuristic to optimize the robot's tour. Since distances were the same at different points, with no decision-making criteria other than a greedy approach, this led to a variety of different issues.

#### Seek extremes {#counter-seek-extremes}

Many counter-examples are mixtures of huge and tiny, left and right, few and many, near and far. It is usually easier to verify or reason about extreme examples than more muddled ones. Consider two tightly bunched clouds of points separated by a much larger distance $d$. The optimal TSP tour will be essentially $2d$ regardless of the number of points, because what happens within each cloud doesn't really matter.

### Greedy movie stars

#### Problem 

Recall the movie star scheduling problem, where we seek to find the largest possible set of non-overlapping intervals in a given set $S$. A natural greedy heuristic selects the interval $i$, which overlaps the smallest number of other intervals in $S$, removes them, and repeats until no intervals remain.

Give a counter-example to this proposed algorithm.

#### Solution

Consider the following figure:

<div align='center'>
  <img width='550px' src={require('@site/static/img/books/adm/c1-f9.png').default} />
</div>

Removing the job colored in pink results in removing the two jobs colored in red above it. But those two jobs are part of the optimal solution colored in red (all other solutions result in only being able to choose 3 jobs instead of the 4 pictured in red).

#### Constructing the counterexample

The counterexample above is nice, but how does one go about constructing something like that? Skiena's thought process, as detailed in <BibRef id='SK2020' pages='pp. 14-15' />, was as follows:

- Start with an odd-length chain of intervals, each of which overlaps one interval to the left and one to the right. Picking an even-length chain would mess up the optimal solution ([*hunt for the weakness*](#counter-hunt-for-weakness)). 
- All intervals overlap two others, except for the left and right-most intervals ([*go for the tie*](#counter-go-for-tie)).
- To make these terminal intervals unattractive, we can pile other intervals on top of them ([*seek extremes*](#counter-seek-extremes))
- The length of our chain (7) is the shortest that permits this construction to work (aim for simplicity).

:::info Order of Counterexample Construction

Observe that the notes above concerning the counterexample's construction occur with a bottom-up kind of ordering. That is, the odd-length chain of intervals starts at the bottom in the figure (i.e., the bottom row with black, pink, and black intervals). We ensure that each of these intervals overlaps one interval to the left and one to the right (i.e., this leads to the construction of the read intervals directly above the bottom row).

Now, all intervals so far in the construction process look as follows:

<div align='center'>
  <img width='550px' src={require('@site/static/img/books/adm/c1-f10.png').default} />
</div>

That is, all intervals overlap two others, except for the left- and right-most intervals. To make these terminal intervals unattractive, we pile other intervals on top of them (this leads to the complete figure with the piled on intervals in black above those in red).

With the complete picture in hand, we can see that any black interval in any of the top four rows overlaps 6 other intervals (i.e., 3 other black intervals above or below the one selected in the top four rows, 2 red intervals below it, and the black interval below the red intervals). Each red interval overlaps 5 black intervals. Each black interval on the bottom overlaps 6 intervals (the 2 red intervals immediately above and then the 4 black intervals above them). 

We are finally left with the pink interval which overlaps the smallest number of other intervals, namely 2 (i.e., the 2 red intervals directly above it). The chain link of 7 Skiena refers to is in reference to the number of intervals in the figure above before the other intervals are piled on.

:::

## Induction and recursion

Recursion is mathematical induction in action. In both, we have general and boundary conditions, with the general condition breaking the problem into smaller and smaller pieces. The initial or boundary condition terminates the recursion. 

Once you understand either recursion or induction, you should be able to see why the other one also works.

### Incremental correctness

Consider the following algorithm:

<Pseudocode
    content={incrementNaturalNumbers}
    algID="increment-natural-numbers"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

Prove the correctness of this recursive algorithm for incrementing natural numbers by proving that $\operatorname{Increment}(y)$ returns $y+1$ for all natural numbers $y$, where "natural numbers" refers to the set of non-negative integers.

Working out the solution to this problem implicitly requires us to know [the difference between weak and strong induction](https://math.stackexchange.com/a/1184785/191378) as well as  [how to write an induction proof](https://math.stackexchange.com/a/1255268/191378). 

Let's illustrate how to do both by first starting out with an explicit problem statement.

**Problem:** Prove that $\operatorname{Increment}(y)\to y+1$ holds for all $y\geq0$.

**Solution:** For any integer $y\geq0$, let $S(y)$ denote the statement

$$
S(y)\colon \operatorname{Increment}(y)\to y+1
$$

**Base step ($y=0$):** $S(0)$ says that $\operatorname{Increment}(0)\to 0+1=1$, which is trivially true due to lines `2-3` of the pseudocode spelled out for the `Increment` method (i.e., $\operatorname{Increment}(0)$ returns 1 if $y=0$, as it does for the base case).

**Inductive step [$S(k)\to S(k+1)$]:** Fix some $k\geq0$, and assume that for every $t$ satisfying $0\leq t\leq k$, the statement $S(t)$ is true. To be shown is that

$$
S(k+1)\colon \operatorname{Increment}(k+1)\to (k+1)+1=k+2
$$

follows. Let's start by considering what happens when $k+1$ is *even*. Then $(k+1)\bmod 2 = 0$ resulting in $\operatorname{Increment}(k+1)\to(k+1)+1=k+2$, as desired. But what if $k+1$ is *odd*? Then $k+1=2\ell+1$ where $\ell\in\Z$ (note that this implies $0\leq\ell\leq k$), and

$$
(k+1)\bmod 2 = (2\ell+1)\bmod 2 = 1
$$

which means we have the following:

$$
\begin{align*}
\operatorname{Increment}(k+1)
&\to 2\cdot\operatorname{Increment}(\lfloor (k+1)/2\rfloor) & \text{(since $(k+1)\bmod 2 = 1$)}\\[0.5em]
&= 2\cdot\operatorname{Increment}(\lfloor (2\ell+1)/2\rfloor) & \text{(since $k+1=2\ell+1$)}\\[0.5em]
&= 2\cdot\operatorname{Increment}(\ell) & \text{(since $\lfloor (2\ell+1)/2\rfloor=\lfloor \ell+\frac{1}{2} \rfloor=\ell$)}\\[0.5em]
&= 2\cdot(\ell+1) & \text{(by $S(k)$, the ind. hyp.)}\\[0.5em]
&= (2\ell+1)+1\\[0.5em]
&= (k+1)+1\\[0.5em]
&= k+2
\end{align*}
$$

:::caution Need for Strong Induction

Note that the argument above requires the use of strong induction since `Increment` may be assumed to work by the inductive hypothesis for $y = k$ but not for a value that is about half of it (i.e., $\lfloor k/2\rfloor$). 

The reason we are allowed to assume that $\operatorname{Increment}(\ell)\to\ell+1$ in the argument above is due to the fact that we fixed some $k\geq0$ and assumed that $S(k)$ held for every $t$ satisfying $0\leq t\leq k$ (the inductive hypothesis). When we set $k+1=2\ell+1$, where $\ell\in\Z$, we can easily see that $k=2\ell$, which means $\ell\in[0,k]$, indicating the inductive hypothesis may be applied to $\ell$ (i.e., $S(\ell)$) since the inductive hypothesis may be applied to all $t$ for which $0\leq t\leq k$.

:::




## Take-home lessons

### Algorithms vs. heuristics

There is a fundamental difference between *algorithms*, procedures that always produce a correct result, and *heuristics*, which may usually do a good job but provide no guarantee of correctness. <BibRef id='SK2020' pages='p. 8' />

### Importance of proof 

Reasonable-looking algorithms can easily be incorrect. Algorithm correctness is a property that must be carefully demonstrated. <BibRef id='SK2020' pages='p. 11' />

### Narrow allowable instances

An important and honorable technique in algorithm design is to narrow the set of allowable instances until there is a correct and efficient algorithm. For example, we can restrict a graph problem from general graphs down to trees, or a geometric problem from two dimensions down to one. <BibRef id='SK2020' pages='p. 12' />

### The heart of an algorithm is its idea

The heart of any algorithm is an *idea*. If your idea is not clearly revealed when you express an algorithm, then you are using too low-level a notation to describe it. <BibRef id='SK2020' pages='p. 13' />

For example, the pseudocode

<Pseudocode
    content={exhaustiveScheduling}
    algID="exhaustive-scheduling-again"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

could be more clearly expressed as

<Pseudocode
    content={exhaustiveSchedulingTwo}
    algID="exhaustive-scheduling-two"
    options={{ lineNumber: true, captionCount: 0, noEnd: true }}
/>

### Disprove heuristics with counterexamples

Searching for counterexamples is the best way to disprove the correctness of a heuristic. <BibRef id='SK2020' pages='p. 14' />

### Inductively verify recursive or incremental algorithms

Mathematical induction is usually the right way to verify the correctness of a recursive or incremental insertion algorithm. <BibRef id='SK2020' pages='p. 16' />

