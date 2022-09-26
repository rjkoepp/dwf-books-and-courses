---
title: Combinatorics, Probability, and Math
hide_title: false
sidebar_label: 12 - Combinatorics, Probability, and Math
description: Combinatorics, Probability, and Math.
draft: false
tags: [Interview Cake]
keywords: [interviewing]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Readings

### Triangular Series

A **triangular series** is a series of numbers where each number could be the row of an equilateral triangle. So 1, 2, 3, 4, 5 is a triangular series, because you could stack the numbers like this:

<div align='center'>
  <img width="150px" src={require('@site/static/img/course-notes/cake/c12/r1-f1.png').default} />
</div>

Their sum is 15, which makes 15 a **triangular number**. A triangular series always starts with 1 and increases by 1 with each number. Since the only thing that changes in triangular series is the value of the highest number, it's  helpful to give that a name. Let's call it $n$. 

```javascript
// n is 8
1, 2, 3, 4, 5, 6, 7, 8
```

Triangular series are nice because no matter how large $n$ is, it's always easy to find the total sum of all the numbers. Take the example above. Notice that if we add the first and last numbers together, and then add the second and  second-to-last numbers together, they have the same sum! This happens with every pair of numbers until we reach the middle. If we add up all the pairs of numbers, we get:

```javascript
1 + 8 = 9
2 + 7 = 9
3 + 6 = 9
4 + 5 = 9
```

This is true for every *triangular series*:

1. **Pairs of numbers** on each side will always **add up to the same value**.
2. That value will always be **1 more than the series' $n$**.

This gives us a pattern. Each pair's sum is $n+1$, and there are $\frac{n}{2}$ pairs. So our total sum is:

$$
(n+1)\cdot\frac{n}{2}
$$

Or:

$$
\frac{n^2+n}{2}
$$

Ok, but does this work with triangular series with an *odd* number of elements? Yes. Let's say $n=5$. So if we calculate the sum by hand:

$$
1+2+3+4+5=15
$$

And if we use the formula, we get the same answer:

$$
\frac{5^2+5}{2}=15
$$

One more thing: What if we know the total sum, but we don't know the value of $n$? Let's say we have: 

$$
1+2+3+\cdots+(n-2)+(n-1)+n=78
$$

Now, we can rearrange our equation to get a *quadratic equation* (remember those?)

$$
\begin{align*}
n^2+n&=156\newline
n^2+n-156&=0
\end{align*}
$$

Here's the quadratic formula:

$$
\frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

If you don't really remember how to use it, that's cool. You can just use an online calculator. We don't judge. Taking the positive solution, we get $n=12$. So for a triangular series, remember-—the total sum is: 

$$
\frac{n^2+n}{2}
$$

## Practice

### Which Appears Twice

I have a list of $n+1$ numbers. Every number in the range $1\ldots n$ appears once except for one number that appears twice.

Write a function for finding the number that appears twice.

<details><summary> Hint 1</summary>

To avoid using up extra memory space, let's use some math!

</details>

<details><summary> Hint 2 (solution)</summary>

**Solution**

**First**, we sum all numbers $1\ldots n$. We can do this using the equation:

$$
\frac{n^2+n}{2}
$$

because the numbers in $1\ldots n$ are a triangular series.

**Second**, we sum all numbers in our input list, which should be the same as our other sum but with our repeat number added in twice. So the difference between these two sums is the repeated number!

```python
def find_repeat(numbers_list):
    if len(numbers_list) < 2:
        raise ValueError('Finding duplicate requires at least two numbers')

    n = len(numbers_list) - 1
    sum_without_duplicate = (n * n + n) / 2

    actual_sum = sum(numbers_list)

    return actual_sum - sum_without_duplicate
```

**Complexity**

$O(n)$ time. We can sum all the numbers $1\ldots n$ in $O(1)$ time using the fancy formula, but it still takes $O(n)$ time to sum all the numbers in our input list.

$O(1)$ additional space—-the only additional space we use is for numbers to hold the sums with and without the repeated value.

**Bonus**

If our list contains huge numbers or is really long, our sum might be so big it causes an integer overflow. What are some ways to protect against this?

</details>

### Find in Ordered Set

Suppose we had a list of $n$ integers *sorted in ascending order*. How quickly could we check if a given integer is in the list?

<details><summary> Hint 1 (solution)</summary>

Because the list is sorted, we can use binary search to find the item in $O(\lg n)$ time and $O(1)$ additional space.

</details>

### In-Place Shuffle

Write a function for doing an in-place shuffle of a list. 

The shuffle must be "uniform," meaning each item in the original list must have the same probability of ending up in each spot in the final list.

Assume that you have a function `get_random(floor, ceiling)` for getting a random integer that is `>= floor` and `<= ceiling`.

<details><summary> Hint 1</summary>

It helps to start by ignoring the in-place requirement, then adapt the approach to work in place.

Also, the name "shuffle" can be slightly misleading-—the point is to arrive at a random ordering of the items from the original list. Don't fixate too much on preconceived notions of how you would "shuffle" e.g. a deck of cards.

</details>

<details><summary> Hint 2</summary>

How might we do this by hand?

</details>

<details><summary> Hint 3</summary>

**We can simply choose a random item to be the first item in the resulting list, then choose another random item (from the items remaining) to be the second item in the resulting list, etc.**

Assuming these choices were in fact random, this would give us a uniform shuffle. To prove it rigorously, we can show any given item $a$ has the same probability ($\frac{1}{n}$) of ending up in any given spot.

First, some stats review: to get the probability of an outcome, you need to *multiply the probabilities of all the steps required for that outcome*. Like so:

| Outcome | Steps | Probability |
| :-- | :-- | :-- |
| item #1 is a | a is picked first | $\frac{1}{n}$ |
| item #2 is a | a not picked first, a picked second | $\frac{(n-1)}{n}\cdot\frac{1}{(n-1)}=\frac{1}{n}$ |
| item #3 is a | a not picked first, a not picked second, a picked third | $\frac{(n-1)}{n}\cdot\frac{(n-2)}{(n-1)}\cdot\frac{1}{(n-2)}=\frac{1}{n}$ |
| item #4 is a | a not picked first, a not picked second, a not picked third, a picked fourth | $\frac{(n-1)}{n}\cdot\frac{(n-2)}{(n-1)}\cdot\frac{(n-3)}{(n-2)}\cdot\frac{1}{(n-3)}=\frac{1}{n}$ |

So, how do we implement this in code?

</details>

<details><summary> Hint 4</summary>

If we didn't have the "in-place" requirement, we could allocate a new list, then one-by-one take a random item from the input list, remove it, put it in the first position in the new list, and keep going until the input list is empty (well, probably a *copy* of the input list-—best not to destroy the input)

How can we adapt this to be in place?

</details>

<details><summary> Hint 5</summary>

What if we make our new "random" list simply be the *front* of our input list?

</details>

<details><summary> Hint 6 (solution)</summary>

**We choose a random item to move to the first index, then we choose a random *other* item to move to the second index, etc.** We "place" an item in an index by swapping it with the item currently at that index.

Crucially, once an item is placed at an index it can't be moved. So for the first index, we choose from $n$ items, for the second index we choose from $n-1$ items, etc.

```python
import random

def get_random(floor, ceiling):
    return random.randrange(floor, ceiling + 1)

def shuffle(the_list):
    # If it's 1 or 0 items, just return
    if len(the_list) <= 1:
        return the_list

    last_index_in_the_list = len(the_list) - 1

    # Walk through from beginning to end
    for index_we_are_choosing_for in range(0, len(the_list) - 1):

        # Choose a random not-yet-placed item to place there
        # (could also be the item currently in that spot)
        # Must be an item AFTER the current item, because the stuff
        # before has all already been placed
        random_choice_index = get_random(index_we_are_choosing_for,
                                         last_index_in_the_list)

        # Place our random choice in the spot by swapping
        if random_choice_index != index_we_are_choosing_for:
            the_list[index_we_are_choosing_for], the_list[random_choice_index] = \
                the_list[random_choice_index], the_list[index_we_are_choosing_for]
```

This is a semi-famous algorithm known as the **Fisher-Yates shuffle** (sometimes called the Knuth shuffle).

**Complexity**

$O(n)$ time and $O(1)$ space.

**What We Learned**

Don't worry, most interviewers won't expect a candidate to know the Fisher-Yates shuffle algorithm. Instead, they'll be looking for the problem-solving skills to *derive* the algorithm, perhaps with a couple hints along the way.

They may also be looking for an understanding of why the naive solution is non-uniform (some outcomes are more likely than others). If you had trouble with that part, try walking through it again.

</details>

### Simulate 5-sided die

You have a function `rand7()` that generates a random integer from 1 to 7. Use it to write a function `rand5()` that generates a random integer from 1 to 5.

`rand7()` returns each integer with equal probability. `rand5()` must also return each integer with equal probability.

<details><summary> Hint 1</summary>

`rand5()` must return each integer with equal probability, but we don't need to make any guarantees about its runtime...

</details>

<details><summary> Hint 2</summary>

In fact, the solution has a small possibility of *never* returning...

</details>

<details><summary> Hint 3 (solution)</summary>

**Solution**

We simply "re-roll" whenever we get a number greater than 5.

```python
def rand5():
    result = 7  # arbitrarily large
    while result > 5:
        result = rand7()
    return result
```

So each integer 1, 2, 3, 4, or 5 has a probability $\frac{1}{7}$ of appearing at each roll.

**Complexity**

Worse-case $O(\infty)$ (we might keep re-rolling forever) and $O(1)$ space.

Note that if we weren't worried about the potential space cost (nor the potential stack overflow) of recursion, we could use an arguably-more-readable recursive approach with $O(\infty)$ space cost:

```python
def rand5():
    result = rand7()
    return result if result <= 5 else rand5()
```

**Bonus**

This kind of math is generally outside the scope of a coding interview, but: if you know a bit of number theory you can *prove* that there exists no solution which is guaranteed to terminate. Hint: it follows from the fundamental theorem of arithmetic.

**What We Learned**

Making sure each possible result has the same *probability* is a big part of what makes this one tricky.

If you're ever struggling with the math to figure something like that out, don't be afraid to *just count*. As in, write out all the possible results from `rand7()`, and label each one with its final outcome for `rand5()`. Then count up how many ways there are to make each final outcome. If the counts aren't the same, the function isn't uniformly random.

</details>

### Simulate 7-sided die

You have a function `rand5()` that generates a random integer from 1 to 5. Use it to write a function `rand7()` that generates a random integer from 1 to 7.

`rand5()` returns each integer with equal probability. `rand7()` must also return each integer with equal probability.

<details><summary> Hint 1</summary>

Because we need a random integer between 1 and 7, we need at least 7 possible outcomes of our calls to `rand5()`. One call to `rand5()` only has 5 possible outcomes. So we must call `rand5()` at least twice.

**Can we get away with calling `rand5()` exactly twice?**

</details>

<details><summary> Hint 2</summary>

Our first thought might be to simply add two calls to `rand5()`, then take a modulus to convert it to an integer in the range $1\ldots 7$:

```python
def rand7_mod():
    return (rand5() + rand5()) % 7 + 1
```

However, this won't give us an equal probability of getting each integer in the range $1\ldots 7$. Can you see why?

</details>

<details><summary> Hint 3</summary>

There are at least two ways to show that different results of `rand7_mod()` have different probabilities of occurring:

1. Count the number of outcomes of our two `rand5()` calls which give each possible result of `rand7_mod()`
2. Notice something about the *total* number of outcomes of two calls to `rand5()`

</details>

<details><summary> Hint 4</summary>

**If we count the number of ways to get each result of `rand7_mod()`:**

| result of `rand7_mod()` | # pairs of `rand5()` results that give that result |
| :-: | :-: |
| 1 | 4 |
| 2 | 3 |
| 3 | 3 |
| 4 | 3 |
| 5 | 3 |
| 6 | 4 |
| 7 | 5 |

So we see that, for example, there are five outcomes that give us 7 but only three outcomes that give us 5. We're almost twice as likely to get a 7 as we are to get a 5.

But even without counting the number of ways to get each possible result, we could have **noticed something about the *total* number of outcomes of two calls to `rand5()`** , which is 25 (5*5). If each of our 7 results of `rand7_mod()` were equally probable, we'd need to have the same number of outcomes for each of the 7 integers in the range $1\ldots 7$. That means *our total number of outcomes would have to be divisible by* 7, and 25 is not.

Okay, so `rand7_mod()` won't work. **How do we get equal probabilities for each integer from 1 to 7?**

</details>

<details><summary> Hint 5</summary>

Is there some number of calls we can make to `rand5()` to get a number of outcomes that is divisible by 7?

</details>

<details><summary> Hint 6</summary>

When we roll our die $n$ times, we get $5^n$ possible outcomes. **Is there an integer $n$ that will give us a $5^n$ that's evenly divisible by 7**

</details>

<details><summary> Hint 7</summary>

No, there isn't.

That might not be obvious to you unless you've studied some number theory. It turns out every integer can be expressed as a product of prime numbers (its prime factorization). It also turns out that every integer has only *one* prime factorization.

Since 5 is already prime, any number that can be expressed as $5^n$ (where $n$ is a positive integer) will have a prime factorization that is all 5s. For example, here are the prime factorizations for $5^2$, $5^3$, $5^4$:

$$
\begin{align*}
5^2&= 25=5\cdot5\newline
5^3&= 125=5\cdot5\cdot5\newline
5^4&= 625=5\cdot5\cdot5\cdot5
\end{align*}
$$

7 is also prime, so if any power of 5 were divisible by 7, 7 would be in its prime factorization. But 7 can't be in its prime factorization because its prime factorization is all 5s (and it has only *one* prime factorization). So no power of 5 is divisible by 7. BAM MATHPROOF.

So no matter how many times we run `rand5()` we won't get a number of outcomes that's evenly divisible by 7. What do we dooooo!?!?

</details>

<details><summary> Hint 8</summary>

Let's ignore for a second the fact that 25 isn't evenly divisible by 7. We can think of our 25 possible outcomes from 2 calls to rand5 as a set of 25 "slots" in a list:

```python
results = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
]
```

Which we could then try to evenly distribute our 7 integers across:

```python
results = [
    1, 2, 3, 4, 5,
    6, 7, 1, 2, 3,
    4, 5, 6, 7, 1,
    2, 3, 4, 5, 6,
    7, 1, 2, 3, 4,
]
```

It *almost works*. We could randomly pick an integer from the list, and the chances of getting any integer in $1\ldots 7$ are *pretty evenly* distributed. Only problem is that extra 1, 2, 3, 4 in the last row.

Any way we can sidestep this issue?

</details>

<details><summary> Hint 9</summary>

What if we just "throw out" those extraneous results in the last row?

</details>

<details><summary> Hint 10</summary>

21 is divisible by 7. So if we just "throw out" our last 4 possible outcomes, we have a number of outcomes that are evenly divisible by 7.

But what should we do if we get one of those 4 "throwaway" outcomes?

</details>

<details><summary> Hint 11</summary>

We can just try the whole process again!

Okay, this'll work. But how do we translate our two calls to `rand5()` into the right result from our list?

</details>

<details><summary> Hint 12</summary>

What if we made it a *2-dimensional* list?

```python
results = [
    [1, 2, 3, 4, 5],
    [6, 7, 1, 2, 3],
    [4, 5, 6, 7, 1],
    [2, 3, 4, 5, 6],
    [7, 1, 2, 3, 4],
]
```

</details>

<details><summary> Hint 13</summary>

Then we can simply treat our first roll as the row and our second roll as the column. We have an equal chance of choosing any column and any row, and there are never two ways to choose the same cell!

```python
def rand7_table():
    results = [
        [1, 2, 3, 4, 5],
        [6, 7, 1, 2, 3],
        [4, 5, 6, 7, 1],
        [2, 3, 4, 5, 6],
        [7, 0, 0, 0, 0],
    ]

    # Do our die rolls
    row = rand5() - 1
    column = rand5() - 1

    # Case: we hit an extraneous outcome
    # so we need to re-roll
    if row == 4 and column > 0:
        return rand7_table()

    # Our outcome was fine. return it!
    return results[row][column]
```

This'll work. But we can clean things up a bit.

By using recursion we're incurring a space cost in the call stack, and risking stack overflow. This is especially scary because our function *could* keep rerolling indefinitely (though it's unlikely).

How can we rewrite this iteratively?

</details>

<details><summary> Hint 14</summary>

Just wrap it in a while loop:

```python
def rand7_table():
    results = [
        [1, 2, 3, 4, 5],
        [6, 7, 1, 2, 3],
        [4, 5, 6, 7, 1],
        [2, 3, 4, 5, 6],
        [7, 0, 0, 0, 0],
    ]

    while True:
        # Do our die rolls
        row = rand5() - 1
        column = rand5() - 1

        # Case: we hit an extraneous outcome
        # so we need to re-roll
        if row == 4 and column > 0:
            continue

        # Our outcome was fine. return it!
        return results[row][column]
```

One more thing: we don't *have* to put our whole 2-d results list in memory. Can you replace it with some arithmetic?

</details>

<details><summary> Hint 15</summary>

We could start by coming up with a way to translate each possible *outcome* (of our two `rand5()` calls) into a different integer in the range $1\ldots 25$. Then we simply mod the result by 7 (or throw it out and try again, if it's one of the last 4 "extraneous" outcomes).

How can we use math to turn our two calls to `rand5()` into a unique integer in the range $1\ldots 25$?

</details>

<details><summary> Hint 16</summary>

What did we do when we went from a 1-dimensional list to a 2-dimensional one above? We cut our set of outcomes into sequential slices of 5.

How can we use math to make our first roll select which slice of 5 and our second roll select which item within that slice?

</details>

<details><summary> Hint 17</summary>

We could take *something* like:

```python
outcome_number = roll1 * 5 + roll2
```

But since each roll gives us an integer in the range $1\ldots 5$ our lowest possible outcome is two 1s, which gives us $5+1=6$, and our highest possible outcome is two 5s, which gives us $25+5=30$. So we need to do some adjusting to ensure our outcome numbers are in the range $1\ldots 25$:

```python
outcome_number = ((roll1-1) * 5 + (roll2-1)) + 1
```

(If you're a math-minded person, you might notice that we're essentially treating each result of `rand5()` as a digit in a two-digit base-5 integer. The first roll is the fives digit, and the second roll is the ones digit.)

Can you adapt our function to use this math-based approach instead of the `results` list?

</details>

<details><summary> Hint 18 (solution)</summary>

**Solution**

Because `rand5()` has only 5 possible outcomes, and we need 7 possible results for `rand7()`, we need to call `rand5()` at least twice.

When we call `rand5()` twice, we have $5\cdot5=25$ possible outcomes. If each of our 7 possible results has an equal chance of occurring, we'll need each outcome to occur in our set of possible outcomes *the same number of times*. So our total number of possible outcomes must be divisible by 7.

25 isn't evenly divisible by 7, but 21 is. So when we get one of the last 4 possible outcomes, we throw it out and roll again.

So we roll twice and translate the result into a unique `outcome_number` in the range $1\ldots 25$. If the `outcome_number` is greater than 21, we throw it out and re-roll. If not, we mod by 7 (and add 1).

```python
def rand7():
    while True:
        # Do our die rolls
        roll1 = rand5()
        roll2 = rand5()
        outcome_number = (roll1-1) * 5 + (roll2-1) + 1

        # If we hit an extraneous
        # outcome we just re-roll
        if outcome_number > 21:
            continue

        # Our outcome was fine. return it!
        return outcome_number % 7 + 1
```

**Complexity**

Worst-case $O(\infty)$ (we might keep re-rolling forever) and $O(1)$ space.

**What We Learned**

As with the previous question about writing a `rand5()` function, the requirement to "return each integer with equal probability" is a real sticking point.

Lots of candidates come up with clever $O(1)$-time solutions that they are *so sure* about. But their solutions *aren't actually uniform* (in other words, they're not *truly random*).

In fact, it's *impossible* to have true randomness and non-infinite worst-case runtime.

If you don't understand why, go back over our proof using "prime factorizations," a little ways down in the breakdown section.

</details>

### Two Egg Problem

A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking.

If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again.

Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible.

<details><summary> Hint 1</summary>

What if we only had one egg? How could we find the correct floor?

</details>

<details><summary> Hint 2</summary>

Because we can't use the egg again if it breaks, we'd have to play it safe and drop the egg from *every* floor, starting at the bottom and working our way up. In the worst case, the egg won't break until the top floor, so we'd drop the egg 100 times.

What does having *two* eggs allow us to do differently?

</details>

<details><summary> Hint 3</summary>

Since we have two eggs, we can skip multiple floors at a time until the first egg breaks, keeping track of which floors we dropped it from. Once that egg breaks we can use the second egg to try every floor, starting on the last floor where the egg *didn't* break and ending on the floor below the one where it *did* break.

**How should we choose how many floors to skip with the first egg?**

</details>

<details><summary> Hint 4</summary>

What about trying a binary approach? We could drop the first egg halfway up the building at the 50th floor. If the egg doesn't break, we can try the 75th floor next. We keep going like this, dividing the problem in half at each step. As soon as the first egg breaks, we can start using our second egg on our (now-hopefully narrow) range of possible floors.

If we do that, what's the **worst case number of total drops?**

</details>

<details><summary> Hint 5</summary>

The worst case is that the highest floor an egg won't break from is floor 48 or 49. We'd drop the first egg from the 50th floor, and then we'd have to drop the second egg *from every floor* from 1 to 49, for a total of 50 drops. (Even if the highest floor an egg won't break from is floor 48, we still won't know if it will break from floor 49 until we try.)

**Can we do better than this binary approach?**

</details>

<details><summary> Hint 6</summary>

50 is probably too many floors to skip for the first drop. In the worst case, if the first egg breaks after a *small* number of drops, the second egg will break after a *large* number of drops. And if we went the *other* way and skipped **1** floor every time, we'd have the *opposite* problem! What would the worst case floor be then?

</details>

<details><summary> Hint 7</summary>

The worst case would be floor 98 or 99—-the first egg would drop a *large* number of times (at every floor from 2-100 skipping one floor each time) and the last egg would drop a *small* number of times (only on floor 99), for a total of 51 drops.

Can we balance this out? Is there some number between 50 and 1-—the number of floors we'll skip with each drop of the first egg-—where the first and second eggs would drop close to the *same* number of times in the worst case?

</details>

<details><summary> Hint 8</summary>

Yes, we could skip 10 floors each time. The worst case would again be floor 98 or 99, but we'd only drop the first egg 10 times and the second egg 9 times, for a total of **19 drops!**

**Is that the best we can do?**

</details>

<details><summary> Hint 9</summary>

Let's look at what happens with this strategy *each time the first egg doesn't break*. **How does the worst case total number of drops change?**

</details>

<details><summary> Hint 10</summary>

The worst case total number of drops *increases by one each time the first egg doesn't break*.

For example, if the egg breaks on our first drop from the 10th floor, we may have to drop the second egg at each floor between 1 and 9 for a worst case of 10 total drops. But if the egg breaks when we skip to the 20th floor we will have a worst case of 11 total drops (once for the 10th floor, once for the 20th, and all of the floors between 11 and 19)!

**How can we keep the worst case number of drops from increasing each time the first egg doesn't break?**

</details>

<details><summary> Hint 11</summary>

Since the maximum number of drops increases by one each time we skip the *same amount of floors*, we could skip *one fewer floor* each time we drop the first egg!

But how do we choose how many floors to skip the *first* time?

</details>

<details><summary> Hint 12</summary>

Well, we know two things that can help us:

1. **We want to skip as few floors as possible the *first* time we drop an egg**, so if our first egg breaks right away we don't have a lot of floors to drop our second egg from.
2. **We always want to be able to reduce the number of floors we're skipping *by one*.** We don't want to get towards the top and not be able to skip any floors any more.

Now that we know this, can we figure out the ideal number of floors to skip the first time?

</details>

<details><summary> Hint 13</summary>

To be able to decrease the number of floors we skip by one *every time* we move up, and to minimize the number of floors we skip the first time, we want to end up skipping *just one floor at the very top*. Can we model this with an equation?

</details>

<details><summary> Hint 14</summary>

Let's say $n$ is the number of floors we'll skip the first time, and we know 1 is the number of floors we'll skip last. Our equation will be:

$$
n+(n-1)+(n-2)+\cdots+1=100
$$

How can we solve for $n$? Notice that we're summing every number from 1 to $n$.

</details>

<details><summary> Hint 15</summary>

The left side is a triangular series. Knowing this, can we simplify and solve the equation?

</details>

<details><summary> Hint 16</summary>

We know the left side reduces to:

$$
\frac{n^2+n}{2}
$$

so we can plug that in:

$$
\frac{n^2+n}{2}=100
$$

and we can rearrange to get a quadratic equation:

$$
n^2+n-200=0
$$

which gives us 13.651.

We can't skip a fraction of a floor, so how many floors should we skip the first time? And what's our final **worst case total number of drops?**

</details>

<details><summary> Hint 17 (solution)</summary>

**Solution**

**We'll use *the first egg* to get a *range of possible floors*** that contain the highest floor an egg can be dropped from without breaking. To do this, we'll drop it from increasingly higher floors until it breaks, skipping some number of floors each time.

When the first egg breaks, **we'll use *the second egg* to find the *exact* highest floor** an egg can be dropped from. We only have to drop the second egg starting from the last floor where the first egg *didn't* break, up to the floor where the first egg *did* break. But we have to drop the second egg one floor at a time.

With the first egg, if we skip the *same number of floors every time*, the worst case number of drops will increase by one *every* time the first egg doesn't break. To counter this and keep our worst case drops *constant*, **we decrease the number of floors we skip *by one* each time we drop the first egg.**

When we're choosing how many floors to skip the *first* time we drop the first egg, we know:

1. **We want to skip as few floors as possible**, so if the first egg breaks right away we don't have a lot of floors to drop our second egg from.
2. **We *always* want to be able to reduce the number of floors we're skipping.** We don't want to get towards the top and not be able to skip floors any more.

Knowing this, we set up the following equation where $n$ is the number of floors we skip the first time:

$$
n+(n-1)+(n-2)+\cdots+1=100
$$

This triangular series reduces to $n\cdot (n+1)/2=100$ which solves to give $n=13.651$. We round up to 14 to be safe. So our first drop will be from the 14th floor, our second will be 13 floors higher on the 27th floor and so on until the first egg breaks. Once it breaks, we'll use the second egg to try every floor starting with the last floor where the first egg didn't break. At worst, we'll drop both eggs a combined total of 14 times.

For example:

```
Highest floor an egg won't break from
13

Floors we drop first egg from
14

Floors we drop second egg from
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13

Total number of drops
14
```

```
Highest floor an egg won't break from
98

Floors we drop first egg from
14, 27, 39, 50, 60, 69, 77, 84, 90, 95, 99

Floors we drop second egg from
96, 97, 98

Total number of drops
14
```

**What We Learned**

This is one of our most contentious questions. Some people say, "Ugh, this is useless as an interview question," while others say, "We ask this at my company, it works great."

The bottom line is some companies *do* ask questions like this, so it's worth being prepared. There are a bunch of these not-exactly-programming interview questions that lean on math and logic. There are some famous ones about shuffling cards and rolling dice. If math isn't your strong suit, don't fret. It only takes a few practice problems to get the hang of these.

</details>
