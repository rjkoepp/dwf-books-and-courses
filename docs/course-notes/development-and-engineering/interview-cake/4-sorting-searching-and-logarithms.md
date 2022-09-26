---
title: Sorting and Searching and Logarithms
hide_title: false
sidebar_label: 4 - Sorting and Searching and Logarithms
description: Sorting and Searching and Logarithms.
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

### Binary Search Algorithm

**A binary search algorithm finds an item in a sorted array in $O(\lg n)$ time.** A brute force search would walk through the whole array, taking $O(n)$ time in the worst case.

Let's say we have a sorted array of numbers. To find a number with a binary search, we:

1. **Start with the middle number: is it bigger or smaller than our target number?** Since the array is sorted, this tells us if the target would be in the *left* half or the *right* half of our array.
2. **We've effectively divided the problem in half.** We can "rule out" the whole half of the array that we know doesn't contain the target number.
3. **Repeat the same approach (of starting in the middle) on the new half-size problem.** Then do it again and again, until we either find the number or "rule out" the whole set.

We can do this recursively, or iteratively. Here's an iterative version:

```javascript
function binarySearch(target, nums) {
  // See if target appears in nums

  // We think of floorIndex and ceilingIndex as "walls" around
  // the possible positions of our target, so by -1 below we mean
  // to start our wall "to the left" of the 0th index
  // (we *don't* mean "the last index")
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  // If there isn't at least 1 index between floor and ceiling,
  // we've run out of guesses and the number must not be present
  while (floorIndex + 1 < ceilingIndex) {

    // Find the index ~halfway between the floor and ceiling
    // We have to round down, to avoid getting a "half index"
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + halfDistance;

    const guessValue = nums[guessIndex];

    if (guessValue === target) {
      return true;
    }

    if (guessValue > target) {

      // Target is to the left, so move ceiling to the left
      ceilingIndex = guessIndex;
    } else {

      // Target is to the right, so move floor to the right
      floorIndex = guessIndex;
    }
  }

  return false;
}
```

How did we know the time cost of binary search was $O(\lg n)$? The only non-constant part of our time cost is the number of times our while loop runs. Each step of our while loop cuts the range (dictated by `floorIndex` and `ceilingIndex`) in half, until our range has just one element left.

So the question is: **How many times must we divide our original array size ($n$) in half until we get down to 1?**

$$
n\cdot\frac{1}{2}\cdot\frac{1}{2}\cdot\frac{1}{2}\cdot\frac{1}{2}\cdot\ldots = 1
$$

How many $\frac{1}{2}$'s are there? We don't know yet, but we can call that number $x$:

$$
n\cdot\biggl(\frac{1}{2}\biggr)^x=1
$$

Now we solve for $x$:

$$
\begin{align*}
n\cdot\frac{1^x}{2^x}&=1\newline
n\cdot\frac{1}{2^x}&=1\newline
\frac{n}{2^x}&=1\newline
n&=2^x
\end{align*}
$$

Now to get the $x$ out of the exponent. How do we do that? Logarithms.

Recall that $\log_{10}100$ means "what power must we raise 10 to, to get 100"? The answer is 2.

So in this case, if we take the $\log_2$ of both sides ...

$$
\log_2 n = \log_2 2^x
$$

The right hand side asks, "what power must we raise 2 to, to get $2^x$?" Well, that's just $x$.

$$
\log_2 n = x
$$

So there it is. The number of times we must divide $n$ in half to get down to 1 is $\log_2 n$. So our total time cost is $O(\lg n)$.

**Careful: we can only use binary search if the input array is *already sorted*.**

## Practice

### Find Rotation Point

I want to learn some big words so people think I'm smart.

I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge list I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

Now I have a list of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered list that has been "rotated." For example:

```python
words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]
```

**Write a function for finding the index of the "rotation point,"** which is where I started working from the beginning of the dictionary. This list is huge (there are lots of words I don't know) so we want to be efficient here.

To keep things simple, you can assume all words are lowercase.

<details><summary> Hint 1</summary>

The list is *mostly* ordered. We should exploit that fact.

</details>

<details><summary> Hint 2</summary>

What's a common algorithm that takes advantage of the fact that a list is sorted to find an item efficiently?

</details>

<details><summary> Hint 3</summary>

Binary search! We can write an adapted version of binary search for this.

</details>

<details><summary> Hint 4</summary>

In each iteration of our binary search, how do we know if the rotation point is to our left or to our right?

</details>

<details><summary> Hint 5</summary>

Try drawing out an example list!

</details>

<details><summary> Hint 6</summary>

```python
words = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']
                              ^
```

If our "current guess" is the middle item, which is 'c' in this case, is the rotation point to the left or to the right? How do we know?

</details>

<details><summary> Hint 7</summary>

Notice that every item to the *right* of our rotation point is always alphabetically *before* the first item in the list.

**So the rotation point is to our *left* if the current item is less than the first item. Else it's to our right.**

</details>

<details><summary> Hint 8 (solution)</summary>

**Solution**

This is a modified version of binary search. At each iteration, we go right if the item we're looking at is greater than the first item and we go left if the item we're looking at is less than the first item.

We keep track of the lower and upper bounds on the rotation point, calling them `floor_index` and `ceiling_index` (initially we called them "floor" and "ceiling," but because we didn't imply the type in the name we got confused and created bugs). When `floor_index` and `ceiling_index` are directly next to each other, we know the floor is the last item we added before starting from the beginning of the dictionary, and the ceiling is the first item we added after.

```python
def find_rotation_point(words):
    first_word = words[0]
    floor_index = 0
    ceiling_index = len(words) - 1

    while floor_index < ceiling_index:
        # Guess a point halfway between floor and ceiling
        guess_index = floor_index + ((ceiling_index - floor_index) // 2)

        # If guess comes after first word or is the first word
        if words[guess_index] >= first_word:
            # Go right
            floor_index = guess_index
        else:
            # Go left
            ceiling_index = guess_index

        # If floor and ceiling have converged
        if floor_index + 1 == ceiling_index:
            # Between floor and ceiling is where we flipped to the beginning
            # so ceiling is alphabetically first
            return ceiling_index
```

**Complexity**

Each time we go through the while loop, we cut our range of indices in half, just like binary search. So we have $O(\lg n)$ loop iterations.

In each loop iteration, we do some arithmetic and a string comparison. The arithmetic is constant time, but the string comparison requires looking at characters in both words-—*every* character in the worst case. Here, we'll assume our word lengths are bounded by some constant so we'll say the string comparison takes constant time.

The longest word in English is pneumonoultramicroscopicsilicovolcanoconiosis, a medical term. It's 45 letters long.

Putting everything together, we do $O(\lg n)$ iterations, and each iteration is $O(1)$ time. So our time complexity is $O(\lg n)$.

Some languages—-like German, Russian, and Dutch—-can have arbitrarily long words, so we might want to factor the length of the words into our runtime. We could say the length of the words is $\ell$, each string comparison takes $O(\ell)$ time, and the whole algorithm takes $O(\ell\cdot\lg n)$ time.

We use $O(1)$ space to store the first word and the floor and ceiling indices.

**Bonus**

This function assumes that the list is rotated. If it isn't, what index will it return? How can we fix our function to return 0 for an unrotated list?

**What We Learned**

The answer was a modified version of binary search.

This is a great example of the difference between "knowing" something and *knowing* something. You might have *seen* binary search before, but that doesn't help you much unless you've *learned the lessons of binary search*.

**Binary search teaches us that *when a list is sorted or mostly sorted*:**

1. The value at a given index tells us a lot about what's to the left and what's to the right.
2. We don't have to look at every item in the list. By inspecting the middle item, we can "rule out" *half* of the list.
3. We can use this approach over and over, cutting the problem in half until we have the answer. This is sometimes called "divide and conquer."

So whenever you know a list is sorted or almost sorted, think about these lessons from binary search and see if they apply.

</details>

### Find Repeat, Space Edition

Find a duplicate, Space Edition™.

We have a list of integers, where:

1. The integers are in the range $1\ldots n$
2. The list has a length of $n+1$

It follows that our list has *at least* one integer which appears *at least* twice. But it may have *several* duplicates, and each duplicate may appear *more than* twice.

**Write a function which finds an integer that appears more than once in our list. Don't modify the input!** (If there are multiple duplicates, you only need to find one of them.)

We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. **So we need to optimize for space!**

<details><summary> Hint 1</summary>

This one's a classic! We just do one walk through the list, using a set to keep track of which items we've seen!

```python
def find_repeat(numbers):
    numbers_seen = set()
    for number in numbers:
        if number in numbers_seen:
            return number
        else:
            numbers_seen.add(number)

    # Whoops--no duplicate
    raise Exception('no duplicate!')
```

Bam. $O(n)$ time and ... $O(n)$ space ...

Right, we're supposed to optimize for *space*. $O(n)$ is actually kinda high space-wise. Hm. We can probably get $O(1)$...

</details>

<details><summary> Hint 2</summary>

We can "brute force" this by taking each number in the range $1\ldots n$ and, for each, walking through the list to see if it appears twice.

```python
def find_repeat_brute_force(numbers):
  for needle in range(1, len(numbers)):
      has_been_seen = False
      for number in numbers:
          if number == needle:
              if has_been_seen:
                  return number
              else:
                  has_been_seen = True

  # Whoops--no duplicate
  raise Exception('no duplicate!')
```

This is $O(1)$ space and $O(n^2)$ time.

That space complexity can't be beat, but the time cost seems a bit high. Can we do better?

</details>

<details><summary> Hint 3</summary>

One way to beat $O(n^2)$ time is to get $O(n\lg n)$ time. Sorting takes $O(n\lg n)$ time. And if we sorted the list, any duplicates would be right next to each-other!

But if we start off by sorting our list we'll need to take $O(n)$ space to store the sorted list...

...unless we sort the input list in place!

Okay, so this'll work:

1. Do an in-place sort of the list (for example an in-place merge sort).
2. Walk through the now-sorted list from left to right.
3. Return as soon as we find two adjacent numbers which are the same.

This'll keep us at $O(1)$ space and bring us down to $O(n\lg n)$ time.

But modifying the input is kind of a drag—-it might cause problems elsewhere in our code. Can we maintain this time and space cost without modifying the input?

</details>

<details><summary> Hint 4</summary>

Let's take a step back. **How can we break this problem down into subproblems?**

</details>

<details><summary> Hint 5</summary>

If we're going to do $O(n\lg n)$ time, we'll probably be iteratively doubling something or iteratively cutting something in half. That's how we usually get a "$\lg n$". So what if we could cut the problem in half somehow?

</details>

<details><summary> Hint 6</summary>

Well, binary search works by cutting the problem in half after figuring out which half of our input list holds the answer.

But in a binary search, the reason we can confidently say which half has the answer is because the list is *sorted*. For this problem, when we cut our unsorted list in half we can't really make any strong statements about which elements are in the left half and which are in the right half.

What if we could cut the problem in half a *different* way, other than cutting the *list* in half?

</details>

<details><summary> Hint 7</summary>

With this problem, we're looking for a needle (a repeated number) in a haystack (list). What if instead of cutting the haystack in half, we cut *the set of possibilities for the needle* in half?

The full range of possibilities for our needle is $1\ldots n$. How could we test whether the actual needle is in the first half of that range $(1\ldots\frac{1}{n})$ or the second half $(\frac{n}{2}+1\ldots n)$?

A quick note about how we're defining our ranges: when we take $\frac{n}{2}$ we're doing *integer division*, so we throw away the remainder. To see what's going on, we should look at what happens when $n$ is even and when $n$ is odd:

- If $n$ is 6 (an even number), we have $\frac{n}{2}=3$ and $\frac{n}{2}+1=4$, so our ranges are $1\ldots 3$ and $4\ldots 6$.
- If $n$ is 5 (an odd number), $\frac{n}{2}=2$ (we throw out the remainder) and $\frac{n}{2}+1=3$, so our ranges are $1\ldots 2$ and $3\ldots 5$.

So we can notice a few properties about our ranges:

1. They aren't necessarily the same size.
2. They don't overlap.
3. Taken *together*, they represent the original input list's range of $1\ldots n$. In math terminology, we could say their union is $1\ldots n$.

So, how do we know if the needle is in $1\ldots \frac{n}{2}$ or $\frac{n}{2}+1\ldots n$?

</details>

<details><summary> Hint 8</summary>

Think about the original problem statement. We know that we have at least one repeat because there are $n+1$ items and they are all in the range $1\ldots n$, which contains only $n$ distinct integers.

This notion of "we have more items than we have possibilities, so we must have at least one repeat" is pretty powerful. It's sometimes called the pigeonhole principle. Can we exploit the pigeonhole principle to see which half of our range contains a repeat?

</details>

<details><summary> Hint 9</summary>

Imagine that we separated the input list into two sublists-—one containing the items in the range $1\ldots\frac{n}{2}$ and the other containing the items in the range $\frac{n}{2}+1\ldots n$.

Each sublist has *a number of elements as well as a number of possible distinct integers* (that is, the length of the range of possible integers it holds).

Given what we know about the number of elements vs the number of possible distinct integers in the *original input list*, what can we say about the number of elements vs the number of distinct possible integers in these *sublists*?

</details>

<details><summary> Hint 10</summary>

The sum of the sublists' numbers of elements is $n+1$ (the number of elements in the original input list) and the sum of the sublists' numbers of possible distinct integers is $n$ (the number of possible distinct integers in the original input list).

Since the sums of the sublists' numbers of elements must be 1 greater than the sum of the sublists' numbers of possible distinct integers, one of the sublists must have at least one more element than it has possible distinct integers.

Not convinced? We can prove this by contradiction. Suppose neither list had more elements than it had possible distinct integers. In other words, both lists have *at most* the same number of items as they have distinct possibilities. The sum of their numbers of items would then be *at most* the total number of possibilities across each of them, which is $n$. This is a contradiction—-we know that our total number of items from the original input list is $n+1$, which is greater than $n$.

Now that we know *one* of our sublists has 1 or more items more than it has distinct possibilities, we know that *sublist* must have at least one duplicate, by the same pigeonhole argument that we use to know that the *original input list* has at least one duplicate.

So once we know *which* sublist has the count higher than its number of distinct possibilities, we can use this same approach recursively, cutting *that* sublist into two halves, etc, until we have just 1 item left in our range.

Of course, we don't need to actually separate our list into sublists. All we care about is *how long* each sublist would be. So we can simply do one walk through the input list, counting the number of items that *would be* in each sublist.

Can you formalize this in code?

**Careful—-if we do this recursively, we'll incur a space cost in the call stack!** Do it iteratively instead.

</details>

<details><summary> Hint 11 (solution)</summary>

**Solution**

Our approach is similar to a binary search, except we divide the *range of possible answers* in half at each step, rather than dividing the *list* in half.

1. Find the number of integers in our input list which lie within the range $1\ldots\frac{n}{2}$.
2. Compare that to the number of possible unique integers in the same range.
3. If the number of *actual* integers *is greater* than the number of *possible* integers, we know there's a duplicate in the range $1\ldots\frac{n}{2}$, so we iteratively use the same approach on that range.
4. If the number of actual integers *is not greater* than the number of possible integers, we know there must be duplicate in the range $\frac{n}{2}+1\ldots n$, so we iteratively use the same approach on that range.
5. At some point, our range will contain just 1 integer, which will be our answer.

```python
def find_repeat(numbers):
    floor = 1
    ceiling = len(numbers) - 1

    while floor < ceiling:
        # Divide our range 1..n into an upper range and lower range
        # (such that they don't overlap)
        # Lower range is floor..midpoint
        # Upper range is midpoint+1..ceiling
        midpoint = floor + ((ceiling - floor) // 2)
        lower_range_floor, lower_range_ceiling = floor, midpoint
        upper_range_floor, upper_range_ceiling = midpoint+1, ceiling

        # Count number of items in lower range
        items_in_lower_range = 0
        for item in numbers:
            # Is it in the lower range?
            if item >= lower_range_floor and item <= lower_range_ceiling:
                items_in_lower_range += 1

        distinct_possible_integers_in_lower_range = (
            lower_range_ceiling
            - lower_range_floor
            + 1
        )
        if items_in_lower_range > distinct_possible_integers_in_lower_range:
            # There must be a duplicate in the lower range
            # so use the same approach iteratively on that range
            floor, ceiling = lower_range_floor, lower_range_ceiling
        else:
            # There must be a duplicate in the upper range
            # so use the same approach iteratively on that range
            floor, ceiling = upper_range_floor, upper_range_ceiling

    # Floor and ceiling have converged
    # We found a number that repeats!
    return floor
```

**Complexity**

$O(1)$ space and $O(n\lg n)$ time.

Tricky as this solution is, we can actually do even better, getting our runtime down to $O(n)$ while keeping our space cost at $O(1)$. The solution is NUTS; it's probably outside the scope of what most interviewers would expect. (See the beast mode version of this exercise.)

**Bonus**

This function always returns *one* duplicate, but there may be several duplicates. Write a function that returns *all* duplicates.

**What We Learned**

Our answer was a modified binary search. We got there by *reasoning about the expected runtime*:

1. We started with an $O(n^2)$ "brute force" solution and wondered if we could do better.
2. We knew to beat $O(n^2)$ we'd probably do $O(n)$ or $O(n\lg n)$, so we started thinking of ways we might get an $O(n\lg n)$ runtime.
3. $\lg n$ usually comes from iteratively cutting stuff in half, so we arrived at the final algorithm by exploring that idea.

Starting with a target runtime and working *backward* from there can be a powerful strategy for all kinds of coding interview questions.

</details>

### Top Scores

You created a game that is more popular than Angry Birds.

Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest. So far you're using an algorithm that sorts in $O(n\lg n)$ time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.

Write a function that takes:

1. a list of `unsorted_scores`
2. the `highest_possible_score` in the game

and returns a sorted list of scores in less than $O(n\lg n)$ time.

For example:

```python
unsorted_scores = [37, 89, 41, 65, 91, 53]
HIGHEST_POSSIBLE_SCORE = 100

# Returns [91, 89, 65, 53, 41, 37]
sort_scores(unsorted_scores, HIGHEST_POSSIBLE_SCORE)
```

We're defining $n$ as the number of unsorted_scores because we're expecting the number of players to keep climbing.

And, we'll treat `highest_possible_score` as a constant instead of factoring it into our big O time and space costs because the highest possible score isn't going to change. Even if we *do* redesign the game a little, the scores will stay around the same order of magnitude.

<details><summary> Hint 1</summary>

$O(n\lg n)$ is the time to beat. Even if our list of scores were *already sorted* we'd have to do a full walk through the list to confirm that it was in fact fully sorted. So we have to spend *at least* $O(n)$ time on our sorting function. If we're going to do better than $O(n\lg n)$, we're probably going to do exactly $O(n)$.

What are some common ways to get $O(n)$ runtime?

</details>

<details><summary> Hint 2</summary>

One common way to get $O(n)$ runtime is to use a greedy algorithm. ↴ But in this case we're not looking to just grab a specific value from our input set (e.g. the "largest" or the "greatest difference")—-we're looking to reorder the whole set. That doesn't lend itself as well to a greedy approach.

Another common way to get $O(n)$ runtime is to use counting. We can build a list `score_counts` where the indices represent scores and the values represent how many times the score appears. Once we have that, can we generate a sorted list of scores?

</details>

<details><summary> Hint 3</summary>

What if we did an in-order walk through `score_counts`. Each index represents a `score` and its value represents the `count` of appearances. So we can simply add the score to a new list `sorted_scores` as many times as `count` of appearances.

</details>

<details><summary> Hint 4 (solution)</summary>

**Solution**

We use counting sort.

```python
def sort_scores(unsorted_scores, highest_possible_score):
    # List of 0s at indices 0..highest_possible_score
    score_counts = [0] * (highest_possible_score+1)

    # Populate score_counts
    for score in unsorted_scores:
        score_counts[score] += 1

    # Populate the final sorted list
    sorted_scores = []

    # For each item in score_counts
    for score in range(len(score_counts) - 1, -1, -1):
        count = score_counts[score]

        # For the number of times the item occurs
        for time in range(count):
            # Add it to the sorted list
            sorted_scores.append(score)

    return sorted_scores
```

**Complexity**

$O(n)$ time and $O(n)$ space, where $n$ is the number of scores.

Wait, aren't we nesting two loops towards the bottom? So shouldn't it be $O(n^2)$ time? Notice what those loops iterate over. The outer loop runs once for each unique number in the list. The inner loop runs once for each time that number occurred.

So in essence we're just looping through the $n$ numbers from our input list, except we're splitting it into two steps: (1) each unique number, and (2) each time that number appeared.

Here's another way to think about it: in each iteration of our two nested loops, we append one item to `sorted_scores`. How many numbers end up in `sorted_scores` in the end? Exactly how many were in our input list! $n$.

If we didn't treat `highest_possible_score` as a constant, we could call it $k$ and say we have $O(n+k)$ time and $O(n+k)$ space.

**Bonus**

Note that by optimizing for time we ended up incurring some space cost! What if we were optimizing for space?

We chose to generate and return a separate, sorted list. Could we instead sort the list in place? Does this change the time complexity? The space complexity?

</details>

### Merging Meeting Times

To do this, you'll need to know when any team is having a meeting. In HiCal, a meeting is stored as a tuple of integers `(start_time, end_time)`. These integers represent the number of 30-minute blocks past 9:00am.

<details><summary> Tuple</summary>

A **tuple** is like a list:

```python
(17, 3, "My name is Parker")
```

(Tuples are written with parentheses to differentiate them from lists.) Like lists, tuples are **ordered** and you can access elements by their index:

```python
cake_tuple = ('angel', 'bundt')

cake_tuple[0]
# returns: 'angel'
```

But tuples are **immutable!** They can't be edited after they're created.

```python
cake_tuple = ('angel', 'bundt')
cake_tuple[1] = 'carrot'
# raises: TypeError: 'tuple' object does not support item assignment
```

Tuples can have any number of elements (the 'tu' in tuple doesn't mean 'two', it's just a generic name taken from words like 'septuple' and 'octuple').

```python
(90, 4, 54)
(True, False, True, True, False)
```

</details>

For example:

```python
(2, 3)  # Meeting from 10:00 – 10:30 am
(6, 9)  # Meeting from 12:00 – 1:30 pm
```

Write a function `merge_ranges()` that takes a list of multiple meeting time ranges and returns a list of condensed ranges.

For example, given:

```python
[(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
```

your function would return:

```python
[(0, 1), (3, 8), (9, 12)]
```

Do not assume the meetings are in order. The meeting times are coming from multiple teams. Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where `start_time` and `end_time` don't have an upper bound.

<details><summary> <strong>Hint 1</strong></summary>

What if we only had two ranges? Let's take:

```python
[(1, 3), (2, 4)]
```

These meetings clearly overlap, so we should merge them to give:

```python
[(1, 4)]
```

But how did we know that these meetings overlap?

</details>

<details><summary> <strong>Hint 2</strong></summary>

We could tell the meetings overlapped because the *end time* of the first one was after the *start time* of the second one! But our ideas of "first" and "second" are important here-—this only works after we ensure that we treat the meeting that *starts earlier* as the "first" one. How would we formalize this as an algorithm? Be sure to consider these edge cases:

1\. The end time of the first meeting and the start time of the second meeting are equal. For example:

```python
[(1, 2), (2, 3)]
```

2\. The second meeting ends before the first meeting ends. For example:

```python
[(1, 5), (2, 3)]
```

</details>

<details><summary> <strong>Hint 3</strong></summary>

Here's a formal algorithm:

1. We treat the meeting with earlier start time as "first," and the other as "second."
2. If the end time of the first meeting is equal to or greater than the start time of the second meeting, we merge the two meetings into one time range. The resulting time range's start time is the first meeting's start, and its end time is the later of the two meetings' end times.
3. Else, we leave them separate.

So, we could compare *every* meeting to *every other* meeting in this way, merging them or leaving them separate. Comparing *all pairs* of meetings would take $O(n^2)$ time. We can do better!

</details>

<details><summary> <strong>Hint 4</strong></summary>

If we're going to beat $O(n^2)$ time, then maybe we're going to get $O(n)$ time? Is there a way to do this in one pass?

</details>

<details><summary> <strong>Hint 5</strong></summary>

It'd be great if, for each meeting, we could just try to merge it with the *next* meeting. But that's definitely not sufficient, because the ordering of our meetings is random. There might be a non-next meeting that the current meeting could be merged with.

</details>

<details><summary> <strong>Hint 6</strong></summary>

What if we sorted our list of meetings by start time?

</details>

<details><summary> <strong>Hint 7</strong></summary>

Then any meetings that could be merged would always be adjacent! So we could sort our meetings, then walk through the sorted list and see if each meeting can be merged with the one after it. Sorting takes $O(n\lg n)$ time in the worst case. If we can then do the merging in one pass, that's another $O(n)$ time, for $O(n\lg n)$ overall. That's not as good as $O(n)$, but it's better than $O(n^2)$.

</details>

<details><summary> <strong>Hint 8 (solution)</strong></summary>

**Solution**

First, we sort our input list of meetings by start time so any meetings that might need to be merged are now next to each other. Then we walk through our sorted meetings from left to right. At each step, either:

1. We *can* merge the current meeting with the previous one, so we do.
2. We *can't* merge the current meeting with the previous one, so we know the previous meeting can't be merged with any future meetings and we throw the current meeting into `merged_meetings`.

```python
def merge_ranges(meetings):

  # Sort by start time
  sorted_meetings = sorted(meetings)

  # Initialize merged_meetings with the earliest meeting
  merged_meetings = [sorted_meetings[0]]

  for current_meeting_start, current_meeting_end in sorted_meetings[1:]:
      last_merged_meeting_start, last_merged_meeting_end = merged_meetings[-1]

      # If the current meeting overlaps with the last merged meeting, use the
      # later end time of the two
      if (current_meeting_start <= last_merged_meeting_end):
          merged_meetings[-1] = (last_merged_meeting_start,
                                  max(last_merged_meeting_end,
                                      current_meeting_end))
      else:
          # Add the current meeting since it doesn't overlap
          merged_meetings.append((current_meeting_start, current_meeting_end))

  return merged_meetings
```

**Complexity**

$O(n\lg n)$ time and $O(n)$ space.

Even though we only walk through our list of meetings once to merge them, we *sort* all the meetings first, giving us a runtime of $O(n\lg n)$. It's worth noting that *if* our input were sorted, we could skip the sort and do this in $O(n)$ time.

We create a new list of merged meeting times. In the worst case, none of the meetings overlap, giving us a list identical to the input list. Thus we have a worst-case space cost of $O(n)$.

**Bonus**

1. What if *did* have an upper bound on the input values? Could we improve our runtime? Would it cost us memory?
2. Could we do this "in place" on the input list and save some space? What are the pros and cons of doing this in place?

**What We Learned**

This one arguably uses a greedy approach as well, except this time we had to *sort* the list first. How did we figure that out?

<details><summary> Greedy algorithm</summary>

A greedy algorithm builds up a solution by choosing the option that looks the best at every step. Say you're a cashier and need to give someone 67 cents (US) using as few coins as possible. How would you do it? Whenever picking which coin to use, you'd take the highest-value coin you could. A quarter, another quarter, then a dime, a nickel, and finally two pennies. That's a *greedy* algorithm, because you're always *greedily* choosing the coin that covers the biggest portion of the remaining amount.

Some other places where a greedy algorithm gets you the best solution:

- Trying to fit as many overlapping meetings as possible in a conference room? At each step, schedule the meeting that *ends* earliest.
- Looking for a minimum spanning tree in a graph? At each step, greedily pick the cheapest edge that reaches a new vertex.

**Note:** sometimes a greedy algorithm doesn't give you an optimal solution as the following illustrates:

- When [filling a duffel bag with cakes of different weights and values](https://www.interviewcake.com/question/cake-thief), choosing the cake with the highest value per pound doesn't always produce the best haul.
- To find the cheapest route visiting a set of cities, choosing to visit the cheapest city you haven't been to yet doesn't produce the cheapest overall itinerary.

Validating that a greedy strategy always gets the best answer is tricky. Either prove that the answer produced by the greedy algorithm is as good as an optimal answer, or run through a rigorous set of test cases to convince your interviewer (and yourself) that it is correct.

</details>

We started off trying to solve the problem in one pass, and we noticed that it wouldn't work. We then noticed the *reason* it wouldn't work: to see if a given meeting can be merged, we have to look at all the other meetings! That's because the order of the meetings is random.

*That's* what got us thinking: what if the list were sorted? We saw that *then* a greedy approach would work. We had to spend $O(n\lg n)$ time on sorting the list, but it was better than our initial brute force approach, which cost us $O(n^2)$ time.

</details>
