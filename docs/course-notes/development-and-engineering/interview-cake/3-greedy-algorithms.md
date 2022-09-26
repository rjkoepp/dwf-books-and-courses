---
title: Greedy Algorithms
hide_title: false
sidebar_label: 3 - Greedy Algorithms
description: Greedy Algorithms.
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

## Reading

A **greedy** algorithm builds up a solution by choosing the option that looks the best at every step. 

Say you're a cashier and need to give someone 67 cents (US) using as few coins as possible. How would you do it? Whenever picking which coin to use, you'd take the highest-value coin you could. A quarter, another quarter, then a dime, a nickel, and finally two pennies. That's a *greedy* algorithm, because you're always *greedily* choosing the coin that covers the biggest portion of the remaining amount.

Some other places where a greedy algorithm gets you the best solution:

- Trying to fit as many overlapping meetings as possible in a conference room? At each step, schedule the meeting that *ends* earliest.
- Looking for a minimum spanning tree in a graph? At each step, greedily pick the cheapest edge that reaches a new vertex.

**Careful: sometimes a greedy algorithm doesn't give you an optimal solution:**

- [When filling a duffel bag with cakes of different weights and values](https://www.interviewcake.com/question/javascript/cake-thief), choosing the cake with the highest value per pound doesn't always produce the best haul.
- To find the cheapest route visiting a set of cities, choosing to visit the cheapest city you haven't been to yet doesn't produce the cheapest overall itinerary.

Validating that a greedy strategy always gets the best answer is tricky. Either prove that the answer produced by the greedy algorithm is as good as an optimal answer, or run through a rigorous set of test cases to convince your interviewer (and yourself) that its correct.

## Practice

### Apple Stocks

Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

First, I wanna know how much money I *could have* made yesterday if I'd been trading Apple stocks all day.

So I grabbed Apple's stock prices from yesterday and put them in an list called `stock_prices`, where:

- The **indices** are the time (in minutes) past trade opening time, which was 9:30am local time.
- The **values** are the price (in US dollars) of one share of Apple stock at that time.

So if the stock cost `$500` at 10:30am, that means `stock_prices[60] = 500`.

Write an efficient function that takes `stock_prices` and returns **the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.**

For example:

```python
stock_prices = [10, 7, 5, 8, 11, 9]

get_max_profit(stock_prices)
# Returns 6 (buying for $5 and selling for $11)
```

No "shorting"-—you need to buy before you can sell. Also, you can't buy *and* sell in the same time step—-at least 1 minute has to pass.

<details><summary> Hint 1</summary>

To start, try writing an example value for `stock_prices` and finding the maximum profit "by hand." What's your process for figuring out the maximum profit?

The brute force approach would be to try *every pair of times* (treating the earlier time as the buy time and the later time as the sell time) and see which one is higher.

```python
def get_max_profit(stock_prices):
    max_profit = 0

    # Go through every time
    for outer_time in range(len(stock_prices)):

        # For every time, go through every other time
        for inner_time in range(len(stock_prices)):
            # For each pair, find the earlier and later times
            earlier_time = min(outer_time, inner_time)
            later_time   = max(outer_time, inner_time)

            # And use those to find the earlier and later prices
            earlier_price = stock_prices[earlier_time]
            later_price   = stock_prices[later_time]

            # See what our profit would be if we bought at the
            # earlier price and sold at the later price
            potential_profit = later_price - earlier_price

            # Update max_profit if we can do better
            max_profit = max(max_profit, potential_profit)

    return max_profit
```

But that will take $O(n^2)$ time, since we have two nested loops—-for *every* time, we're going through *every other* time. Also, **it's not correct**: we won't ever report a negative profit! Can we do better?

</details>

<details><summary> Hint 2</summary>

Well, we're doing a lot of extra work. We're looking at every pair *twice*. We know we have to buy before we sell, so in our *inner for loop* we could just look at every price **after** the price in our *outer for loop*.

That could look like this:

```python
def get_max_profit(stock_prices):
    max_profit = 0

    # Go through every price (with its index as the time)
    for earlier_time, earlier_price in enumerate(stock_prices):

        # And go through all the LATER prices
        for later_time in range(earlier_time + 1, len(stock_prices)):
            later_price = stock_prices[later_time]

            # See what our profit would be if we bought at the
            # earlier price and sold at the later price
            potential_profit = later_price - earlier_price

            # Update max_profit if we can do better
            max_profit = max(max_profit, potential_profit)

    return max_profit
```

What's our runtime now?

</details>

<details><summary> Hint 3</summary>

Well, our outer for loop goes through *all* the times and prices, but our inner for loop goes through *one fewer price each time*. So our total number of steps is the sum

$$
n+(n-1)+(n-2)+\cdots+2+1
$$

which is still $O(n^2)$ time.

We can do better!

</details>

<details><summary> Hint 4</summary>

If we're going to do better than $O(n^2)$, we're probably going to do it in either $O(n\lg n)$ or $O(n)$. $O(n\lg n)$ comes up in sorting and searching algorithms where we're recursively cutting the list in half. It's not obvious that we can save time by cutting the list in half here. Let's first see how well we can do by looping through the list only *once*.

</details>

<details><summary> Hint 5</summary>

Since we're trying to loop through the list once, let's use a greedy approach, where we keep a running `max_profit` until we reach the end. We'll start our `max_profit` at `$0`. As we're iterating, how do we know if we've found a new `max_profit`?

</details>

<details><summary> Hint 6</summary>

At each iteration, our `max_profit` is either:

1. the same as the `max_profit` at the last time step, or
2. the max profit we can get by selling at the `current_price`

How do we know when we have case (2)?

</details>

<details><summary> Hint 7</summary>

The max profit we can get by selling at the `current_price` is simply the difference between the `current_price` and the `min_price` from earlier in the day. If this difference is greater than the current `max_profit`, we have a new `max_profit`.

So for every price, we'll need to:

- keep track of the **lowest price we've seen so far**
- see if we can get a **better profit**

</details>

<details><summary> Hint 8</summary>

Here's one possible solution:

```python
def get_max_profit(stock_prices):
    min_price  = stock_prices[0]
    max_profit = 0

    for current_price in stock_prices:
        # Ensure min_price is the lowest price we've seen so far
        min_price = min(min_price, current_price)

        # See what our profit would be if we bought at the
        # min price and sold at the current price
        potential_profit = current_price - min_price

        # Update max_profit if we can do better
        max_profit = max(max_profit, potential_profit)

    return max_profit
```

We're finding the max profit with one pass and constant space!

**Are we done?** Let's think about some edge cases. What if the price *stays the same*? What if the price *goes down all day*?

</details>

<details><summary> Hint 9</summary>

If the price doesn't change, the max possible profit is 0. Our function will correctly return that. So we're good.

But if the value *goes down all day*, we're in trouble. Our function would return 0, but there's no way we could break even if the price always goes down.

**How can we handle this?**

</details>

<details><summary> Hint 10</summary>

Well, what are our options? Leaving our function as it is and just returning zero is *not* a reasonable option—-we wouldn't know if our best profit was negative or *actually* zero, so we'd be losing information. Two reasonable options could be:

1. **return a negative profit**. "What's the least badly we could have done?"
2. **throw an exception**. "We should not have purchased stocks yesterday!"
In this case, it's probably best to go with option (1). The advantages of returning a negative profit are:

- We **more accurately answer the challenge**. If profit is "revenue minus expenses", we're returning the *best* we could have done.
- It's **less opinionated**. We'll leave decisions up to our function's users. It would be easy to wrap our function in a helper function to decide if it's worth making a purchase.
- We allow ourselves to **collect better data**. It *matters* if we would have lost money, and it *matters* how much we would have lost. If we're trying to get rich, we'll probably care about those numbers.

**How can we adjust our function to return a negative profit if we can only lose money?** Initializing `max_profit` to 0 won't work...

</details>

<details><summary> Hint 11</summary>

Well, we started our `min_price` at the first price, so let's start our `max_profit` at the *first profit we could get*-—if we buy at the first time and sell at the second time.

```python
min_price  = stock_prices[0]
max_profit = stock_prices[1] - stock_prices[0]
```

But we have the potential for reading undefined values here, if `stock_prices` has fewer than 2 prices.

We *do* want to throw an exception in that case, since *profit* requires buying *and* selling, which we can't do with less than 2 prices. So, let's explicitly check for this case and handle it:

```python
if len(stock_prices) < 2:
    raise ValueError('Getting a profit requires at least 2 prices')

min_price  = stock_prices[0]
max_profit = stock_prices[1] - stock_prices[0]
```

Ok, does that work?

</details>

<details><summary> Hint 12</summary>

No! **`max_profit` is still always 0**. What's happening?

</details>

<details><summary> Hint 13</summary>

If the price always goes down, `min_price` is always set to the `current_price`. So `current_price - min_price` comes out to `0`, which of course will always be greater than a negative profit.

When we're calculating the `max_profit`, we need to make sure we never have a case where we try both **buying and selling stocks at the `current_price`**.

</details>

<details><summary> Hint 14</summary>

To make sure we're always buying at an *earlier* price, never the `current_price`, let's switch the order around so we calculate `max_profit` *before* we update `min_price`.

We'll also need to pay special attention to time 0. Make sure we don't try to buy *and* sell at time 0.

</details>

<details><summary> Hint 15 (solution)</summary>

**Solution**

We'll greedily walk through the list to track the max profit and lowest price so far.

For every price, we check if:

- we can get a better profit by buying at `min_price` and selling at the `current_price`
- we have a new `min_price`

To start, we initialize:

1. `min_price` as the first price of the day
2. `max_profit` as the first profit we could get

We decided to return a *negative* profit if the price decreases all day and we can't make any money. We could have thrown an exception instead, but returning the negative profit is cleaner, makes our function less opinionated, and ensures we don't lose information.

```python
def get_max_profit(stock_prices):
    if len(stock_prices) < 2:
        raise ValueError('Getting a profit requires at least 2 prices')

    # We'll greedily update min_price and max_profit, so we initialize
    # them to the first price and the first possible profit
    min_price  = stock_prices[0]
    max_profit = stock_prices[1] - stock_prices[0]

    # Start at the second (index 1) time
    # We can't sell at the first time, since we must buy first,
    # and we can't buy and sell at the same time!
    # If we started at index 0, we'd try to buy *and* sell at time 0.
    # This would give a profit of 0, which is a problem if our
    # max_profit is supposed to be *negative*--we'd return 0.
    for current_time in range(1, len(stock_prices)):
        current_price = stock_prices[current_time]

        # See what our profit would be if we bought at the
        # min price and sold at the current price
        potential_profit = current_price - min_price

        # Update max_profit if we can do better
        max_profit = max(max_profit, potential_profit)

        # Update min_price so it's always
        # the lowest price we've seen so far
        min_price  = min(min_price, current_price)

    return max_profit
```

**Complexity**

$O(n)$ time and $O(1)$ space. We only loop through the list once.

**What We Learned**

This one's a good example of the greedy approach in action. Greedy approaches are great because they're *fast* (usually just one pass through the input). But they don't work for every problem.

How do you know if a problem will lend itself to a greedy approach? Best bet is to try it out and see if it works. Trying out a greedy approach should be one of the first ways you try to break down a new question.

To try it on a new problem, start by asking yourself:

"Suppose we *could* come up with the answer in one pass through the input, by simply updating the 'best answer so far' as we went. What ***additional values*** would we need to keep updated as we looked at each item in our input, in order to be able to update the **'best answer so far'** in constant time?"

In *this* case:

The "**best answer so far**" is, of course, the max profit that we can get based on the prices we've seen so far.

The "**additional value**" is the minimum price we've seen so far. If we keep that updated, we can use it to calculate the new max profit so far in constant time. The max profit is the larger of:

1. The previous max profit
2. The max profit we can get by selling now (the current price minus the minimum price seen so far)

Try applying this greedy methodology to future questions.

</details>

### Highest Product of 3

Given an list of integers, find the highest product you can get from three of the integers. 

The input `list_of_ints` will always have at least three integers.

<details><summary> Hint 1</summary>

To brute force an answer we could iterate through `list_of_ints` and multiply each integer by each *other* integer, and then multiply that product by each other *other* integer. This would probably involve nesting 3 loops. But that would be an $O(n^3)$ runtime! We can *definitely* do better than that.

Because any integer in the list could potentially be part of the greatest product of three integers, we must at least *look at each integer*. So we're doomed to spend at least $O(n)$ time.

</details>

<details><summary> Hint 2</summary>

Sorting the list would let us grab the highest numbers quickly, so it might be a good first step. Sorting takes $O(n\lg n)$ time. That's better than the $O(n^3)$ time our brute force approach required, but we can still do better.

</details>

<details><summary> Hint 3</summary>

Since we know we must spend *at least* $O(n)$ time, let's see if we can solve it in *exactly* $O(n)$ time.

A great way to get $O(n)$ runtime is to use a *greedy* approach. **How can we keep track of the highest_product_of_3 "so far" as we do one walk through the list?**

</details>

<details><summary> Hint 4</summary>

Put differently, for each new current number during our iteration, how do we know if it gives us a new `highest_product_of_3`?

</details>

<details><summary> Hint 5</summary>

We have a new `highest_product_of_3` if the current number times two other numbers gives a product that's higher than our current `highest_product_of_3`. **What must we keep track of at each step so that we know if the `current` number times two other numbers gives us a new `highest_product_of_3`?**

</details>

<details><summary> Hint 6</summary>

Our first guess might be:

1. our current `highest_product_of_3`
2. the `three_numbers_which_give_highest_product`

But consider this example:

```python
list_of_ints = [1, 10, -5, 1, -100]
```

Right before we hit $-100$ (so, in our second-to-last iteration), our `highest_product_of_3` was 10, and the `three_numbers_which_give_highest_product` were `[10,1,1]`. But once we hit $-100$, suddenly we can take `-100 * -5 * 10` to get 5000. So we should have "held on to" that $-5$, even though it wasn't one of the `three_numbers_which_give_highest_product`.

We need something a little smarter than `three_numbers_which_give_highest_product`. **What should we keep track of to make sure we can handle a case like this?**

</details>

<details><summary> Hint 7</summary>

There are at least two great answers:

1. **Keep track of the `highest_2` and `lowest_2` (most negative) numbers.** If the `current` number times *some combination of those* is higher than the current `highest_product_of_3`, we have a new `highest_product_of_3`!
2. Keep track of the `highest_product_of_2` and `lowest_product_of_2` (could be a low negative number). If the current number times one of those is higher than the current `highest_product_of_3`, we have a new `highest_product_of_3`!

We'll go with (2). It ends up being *slightly* cleaner than (1), though they both work just fine.

**How do we keep track of the `highest_product_of_2` and `lowest_product_of_2` at each iteration?** (Hint: we may need to also keep track of *something else*.)

</details>

<details><summary> Hint 8</summary>

We also keep track of the `lowest` number and `highest` number. If the `current` number times the current `highest`-—*or the current `lowest`*, if `current` is negative-—is greater than the current `highest_product_of_2`, we have a new `highest_product_of_2`. Same for `lowest_product_of_2`.

So at each iteration we're keeping track of and updating:

- `highest_product_of_3`
- `highest_product_of_2`
- `highest`
- `lowest_product_of_2`
- `lowest`

Can you implement this in code? **Careful—-make sure you update each of these variables in the right order**, otherwise you might end up e.g. multiplying the current number by itself to get a new `highest_product_of_2`.

</details>

<details><summary> Hint 9 (solution)</summary>

**Solution**

We use a greedy approach to solve the problem in one pass. At each iteration we keep track of:

- `highest_product_of_3`
- `highest_product_of_2`
- `highest`
- `lowest_product_of_2`
- `lowest`

When we reach the end, the `highest_product_of_3` is our answer. We maintain the others because they're necessary for keeping the `highest_product_of_3` up to date as we walk through the list. At each iteration, the `highest_product_of_3` is the highest of:

1. the current `highest_product_of_3`
2. `current * highest_product_of_2`
3. `current * lowest_product_of_2` (if `current` and `lowest_product_of_2` are both low negative numbers, this product is a high positive number).

```python
def highest_product_of_3(list_of_ints):

    if len(list_of_ints) < 3:
        raise ValueError('Less than 3 items!')

    # We're going to start at the 3rd item (at index 2)
    # so pre-populate highests and lowests based on the first 2 items.
    # We could also start these as None and check below if they're set
    # but this is arguably cleaner
    highest = max(list_of_ints[0], list_of_ints[1])
    lowest  = min(list_of_ints[0], list_of_ints[1])
    highest_product_of_2 = list_of_ints[0] * list_of_ints[1]
    lowest_product_of_2  = list_of_ints[0] * list_of_ints[1]

    # Except this one--we pre-populate it for the first *3* items.
    # This means in our first pass it'll check against itself, which is fine.
    highest_product_of_3 = list_of_ints[0] * list_of_ints[1] * list_of_ints[2]

    # Walk through items, starting at index 2
    for i in range(2, len(list_of_ints)):
        current = list_of_ints[i]

        # Do we have a new highest product of 3?
        # It's either the current highest,
        # or the current times the highest product of two
        # or the current times the lowest product of two
        highest_product_of_3 = max(highest_product_of_3,
                                   current * highest_product_of_2,
                                   current * lowest_product_of_2)

        # Do we have a new highest product of two?
        highest_product_of_2 = max(highest_product_of_2,
                                   current * highest,
                                   current * lowest)

        # Do we have a new lowest product of two?
        lowest_product_of_2 = min(lowest_product_of_2,
                                  current * highest,
                                  current * lowest)

        # Do we have a new highest?
        highest = max(highest, current)

        # Do we have a new lowest?
        lowest = min(lowest, current)

    return highest_product_of_3
```

**Complexity**

$O(n)$ time and $O(1)$ additional space.

**Bonus**

1. What if we wanted the highest product of 4 items?
2. What if we wanted the highest product of $k$ items?
3. If our highest product is really big, it could overflow. How should we protect against this?

**What We Learned**

Greedy algorithms in action again!

That's not a coincidence—-to illustrate how one pattern can be used to break down several different questions, we're showing this one pattern in action on several different questions.

Usually it takes seeing an algorithmic idea from a few different angles for it to really make intuitive sense.

Our goal here is to teach you the right *way of thinking* to be able to break down problems you haven't seen before. Greedy algorithm design is a big part of that *way of thinking*.

For this one, we built up our greedy algorithm exactly the same way we did for the Apple stocks question. By asking ourselves:

"Suppose we *could* come up with the answer in one pass through the input, by simply updating the 'best answer so far' as we went. What *additional values* would we need to keep updated as we looked at each item in our set, in order to be able to update the 'best answer so far' in constant time?"

For the Apple stocks question, the only "additional value" we needed was the min price so far.

For this one, we needed *four* things in order to calculate the new `highest_product_of_3` at each step:

- `highest_product_of_2`
- `highest`
- `lowest_product_of_2`
- `lowest`

</details>

### Product of All Other Numbers

You have a list of integers, and for each index you want to find the product of *every integer except the integer at that index*.

Write a function `get_products_of_all_ints_except_at_index()` that takes a list of integers and returns an list of the products.

For example, given:

```python
[1, 7, 3, 4]
```

your function would return:

```python
[84, 12, 28, 21]
```

by calculating:

```python
[7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]
```

Here's the catch: **You can't use division in your solution!**

<details><summary> Hint 1</summary>

A brute force approach would use two loops to multiply the integer at every `index` by the integer at every `nested_index`, unless `index === nested_index`.

This would give us a runtime of $O(n^2)$. Can we do better?

Well, we're wasting a lot of time doing the same calculations. As an example, let's take:

```python
# Input list
[1, 2, 6, 5, 9]

# List of the products of all integers
# except the integer at each index:
[540, 270, 90, 108, 60]  # [2 * 6 * 5 * 9,  1 * 6 * 5 * 9,  1 * 2 * 5 * 9,  1 * 2 * 6 * 9,  1 * 2 * 6 * 5]
```

We're doing some of the same multiplications *two or three times*!

<div align='center'>
  <img width="400px" src={require('@site/static/img/course-notes/cake/c3/f1.png').default} />
</div>

Or look at this pattern:

<div align='center'>
  <img width="400px" src={require('@site/static/img/course-notes/cake/c3/f2.png').default} />
</div>

We're redoing multiplications when instead we could be storing the results! This would be a great time to use a greedy approach. We could store the results of each multiplication highlighted in blue, then just multiply by *one new* integer each time.

So in the last highlighted multiplication, for example, we wouldn't have to multiply `1 * 2 * 6` again. If we stored that value (12) from the previous multiplication, we could just multiply `12 * 5`.

**Can we break our problem down into subproblems so we can use a greedy approach?**

</details>

<details><summary> Hint 2</summary>

Let's look back at the last example:

<div align='center'>
  <img width="400px" src={require('@site/static/img/course-notes/cake/c3/f2.png').default} />
</div>

**What do all the highlighted multiplications have in common?**

</details>

<details><summary> Hint 3</summary>

They are all the integers that are *before each index* in the input list (`[1, 2, 6, 5, 9]`). For example, the highlighted multiplication at index 3 (`1 * 2 * 6`) is all the integers before index 3 in the input list.

<div align='center'>
  <img width="400px" src={require('@site/static/img/course-notes/cake/c3/f3.png').default} />
</div>

Do all the multiplications that *aren't highlighted* have anything in common?

</details>

<details><summary> Hint 4</summary>

Yes, they're all the integers that are *after* each index in the input list!

Knowing this, can we break down our original problem to use a greedy approach?

</details>

<details><summary> Hint 5</summary>

The product of *all* the integers except the integer at each index can be broken down into two pieces:

1. the product of all the integers *before* each index, and
2. the product of all the integers *after* each index.

To start, let's just get the product of all the integers **before each index**.

</details>

<details><summary> Hint 6</summary>

How can we do this? Let's take another example:

```python
# Input list
[3, 1, 2, 5, 6, 4]

# Multiplication of all integers before each index
# (we give index 0 a value of 1 since it has no integers before it)
[1, 3,  3 * 1,  3 * 1 * 2, 3 * 1 * 2 * 5,  3 * 1 * 2 * 5 * 6]

# Final list of the products of all the integers before each index
[1, 3, 3, 6, 30, 180]
```

Notice that we're always adding *one* new integer to our multiplication for each index!

</details>

<details><summary> Hint 7</summary>

So to get the products of all the integers before each index, we could greedily store each product *so far* and multiply that by the *next* integer. Then we can store that *new* product so far and keep going.

So how can we apply this to our input list?

</details>

<details><summary> Hint 8</summary>

Let's make an list `products_of_all_ints_before_index`:

```python
products_of_all_ints_before_index = [None] * len(int_list)

# For each integer, find the product of all the integers
# before it, storing the total product so far each time
product_so_far = 1
for i in range(len(int_list)):
    products_of_all_ints_before_index[i] = product_so_far
    product_so_far *= int_list[i]
```

</details>

<details><summary> Hint 9</summary>

So we solved the subproblem of finding the products of all the integers *before* each index. **Now, how can we find the products of all the integers *after* each index?**

</details>

<details><summary> Hint 10</summary>

It might be tempting to make a new list of all the values in our input list in **reverse**, and just use the same function we used to find the products before each index.

Is this the best way?

</details>

<details><summary> Hint 11</summary>

This method will work, but:

1. **We'll need to make a whole new list** that's basically the same as our input list. That's another $O(n)$ memory cost!
2. To keep our indices aligned with the original input list, **we'd have to reverse the list of products we return**. That's two reversals, or two $O(n)$ operations!

Is there a cleaner way to get the products of all the integers after each index?

</details>

<details><summary> Hint 12</summary>

We can just *walk through our list backwards*! So instead of reversing the values of the list, we'll just reverse the *indices* we use to iterate!

```python
products_of_all_ints_after_index = [None] * len(int_list)

product_so_far = 1
for i in range(len(int_list) - 1, -1, -1):
    products_of_all_ints_after_index[i] = product_so_far
    product_so_far *= int_list[i]
```

Now we've got `products_of_all_ints_after_index`, but we're starting to build a lot of new lists. And we still need our final list of the total products. **How can we save space?**

</details>

<details><summary> Hint 13</summary>

Let's take a step back. Right now we'll need three lists:

1. `products_of_all_ints_before_index`
2. `products_of_all_ints_after_index`
3. `products_of_all_ints_except_at_index`

To get the first one, we keep track of the total product so far going *forwards*, and to get the second one, we keep track of the total product so far going *backwards*. How do we get the third one?

</details>

<details><summary> Hint 14</summary>

Well, we want the product of all the integers *before* an index **and** the product of all the integers *after* an index. We just need to multiply every integer in `products_of_all_ints_before_index` with the integer *at the same index* in `products_of_all_ints_after_index`!

Let's take an example. Say our input list is `[2, 4, 10]`:

We'll calculate `products_of_all_ints_before_index` as:

<div align='center'>
  <img width="300px" src={require('@site/static/img/course-notes/cake/c3/f4.png').default} />
</div>

And we'll calculate `products_of_all_ints_after_index` as:

<div align='center'>
  <img width="300px" src={require('@site/static/img/course-notes/cake/c3/f5.png').default} />
</div>

If we take these lists and multiply the integers at the same indices, we get:

<div align='center'>
  <img width="375px" src={require('@site/static/img/course-notes/cake/c3/f6.png').default} />
</div>

And this gives us what we're looking for—-the products of all the integers except the integer at each index.

Knowing this, can we eliminate any of the lists to reduce the memory we use?

</details>

<details><summary> Hint 15</summary>

Yes, instead of building the second list `products_of_all_ints_after_index`, we could take the product we would have stored and just multiply it by the matching integer in `products_of_all_ints_before_index`!

So in our example above, when we calculated our first (well, "0th") "product after index" (which is 40), we’d just multiply that by our first "product before index" (1) instead of storing it in a new list.

**How many lists do we need now?**

</details>

<details><summary> Hint 16</summary>

Just one! We create an list, populate it with the products of all the integers *before* each index, and then multiply those products with the products after each index to get our final result!

`products_of_all_ints_before_index` now contains the products of all the integers *before and after* every index, so we can call it `products_of_all_ints_except_at_index`!

</details>

<details><summary> Hint 17</summary>

Almost done! Are there any edge cases we should test?

</details>

<details><summary> Hint 18</summary>

What if the input list contains zeroes? What if the input list only has *one* integer?

</details>

<details><summary> Hint 19</summary>

We'll be fine with zeroes.

But what if the input list has fewer than two integers?

</details>

<details><summary> Hint 20</summary>

Well, there won't be any products to return because at any index there are no "other" integers. So let's throw an exception.

</details>

<details><summary> Hint 21</summary>

**Solution**

To find the products of all the integers except the integer at each index, we'll go through our list greedily *twice*. First we get the products of all the integers **before** each index, and then we go *backwards* to get the products of all the integers **after** each index.

When we multiply all the products before and after each index, we get our answer—-the products of all the integers except the integer at each index!

```python
def get_products_of_all_ints_except_at_index(int_list):

    if len(int_list) < 2:
        raise IndexError('Getting the product of numbers at other '
                         'indices requires at least 2 numbers')

    # We make a list with the length of the input list to
    # hold our products
    products_of_all_ints_except_at_index = [None] * len(int_list)

    # For each integer, we find the product of all the integers
    # before it, storing the total product so far each time
    product_so_far = 1
    for i in range(len(int_list)):
        products_of_all_ints_except_at_index[i] = product_so_far
        product_so_far *= int_list[i]

    # For each integer, we find the product of all the integers
    # after it. since each index in products already has the
    # product of all the integers before it, now we're storing
    # the total product of all other integers
    product_so_far = 1
    for i in range(len(int_list) - 1, -1, -1):
        products_of_all_ints_except_at_index[i] *= product_so_far
        product_so_far *= int_list[i]

    return products_of_all_ints_except_at_index
```

**Complexity**

$O(n)$ time and $O(n)$ space. We make two passes through our input an list, and the list we build always has the same length as the input list.

**Bonus**

What if you *could* use division? Careful—-watch out for zeroes!

**What We Learned**

Another question using a greedy approach. The tricky thing about this one: we couldn't actually solve it in *one* pass. But we could solve it in *two* passes!

This approach probably wouldn't have been obvious if we had started off trying to use a greedy approach.

Instead, we started off by coming up with a slow (but correct) brute force solution and trying to improve from there. We looked at *what our solution actually calculated*, step by step, and found some *repeat work*. Our final answer came from brainstorming ways to avoid doing that repeat work.

So that's a pattern that can be applied to other problems:

**Start with a brute force solution, look for *repeat work* in that solution, and modify it to only do that work once.**

</details>

### Cafe Order Checker

My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—-that's not good for business!

To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

- The take-out orders as they were entered into the system and given to the kitchen. (`take_out_orders`)
- The dine-in orders as they were entered into the system and given to the kitchen. (`dine_in_orders`)
- Each customer order (from either register) as it was finished by the kitchen. (`served_orders`)

**Given all three lists, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.**

We'll represent each customer order as a unique integer.

As an example,

```
Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3]
```

would *not* be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,

```
Take Out Orders: [17, 8, 24]
 Dine In Orders: [12, 19, 2]
  Served Orders: [17, 8, 12, 19, 24, 2]
```

*would* be first-come, first-served.

Note: Order numbers are arbitrary. They do **not** have to be in increasing order.

<details><summary> Hint 1</summary>

How can we re-phrase this problem in terms of smaller subproblems?

</details>

<details><summary> Hint 2</summary>

Breaking the problem into smaller subproblems will clearly involve reducing the size of at least one of our lists of customer order numbers. So to start, let's try taking the first customer order out of `served_orders`.

What should be true of this customer order number if my service is first-come, first-served?

</details>

<details><summary> Hint 3</summary>

If my cake cafe is first-come, first-served, then the first customer order finished (first item in `served_orders`) has to either be the first take-out order entered into the system (`take_out_orders[0]`) or the first dine-in order entered into the system (`dine_in_orders[0]`).

Once we can check the first customer order, how can we verify the remaining ones?

</details>

<details><summary> Hint 4</summary>

Let's "throw out" the first customer order from `served_orders` as well as the customer order it matched with from the beginning of `take_out_orders` or `dine_in_orders`. That customer order is now "accounted for."

Now we're left with a smaller version of the original problem, which we can solve using the same approach! So we keep doing this over and over until we exhaust `served_orders`. If we get to the end and every customer order "checks out," we return true.

How do we implement this in code?

</details>

<details><summary> Hint 5</summary>

Now that we have a problem that's the same as the original problem except smaller, our first thought might be to use recursion. All we need is a base case. What's our base case?

</details>

<details><summary> Hint 6</summary>

We stop when we run out of customer orders in our `served_orders`. So that's our base case: when we've checked all customer orders in `served_orders`, we return true because we know all of the customer orders have been "accounted for."

```python
def is_first_come_first_served(take_out_orders, dine_in_orders, served_orders):
    # Base case
    if len(served_orders) == 0:
        return True

    # If the first order in served_orders is the same as the
    # first order in take_out_orders
    # (making sure first that we have an order in take_out_orders)
    if len(take_out_orders) and take_out_orders[0] == served_orders[0]:
        # Take the first order off take_out_orders and served_orders and recurse
        return is_first_come_first_served(take_out_orders[1:], dine_in_orders, served_orders[1:])

    # If the first order in served_orders is the same as the first
    # in dine_in_orders
    elif len(dine_in_orders) and dine_in_orders[0] == served_orders[0]:
        # Take the first order off dine_in_orders and served_orders and recurse
        return is_first_come_first_served(take_out_orders, dine_in_orders[1:], served_orders[1:])

    # First order in served_orders doesn't match the first in
    # take_out_orders or dine_in_orders, so we know it's not first-come, first-served
    else:
        return False
```

This solution will work. But we can do better.

Before we talk about optimization, note that our inputs are probably pretty small. This function will take hardly any time or space, even if it *could be* more efficient. In industry, especially at small startups that want to move quickly, optimizing this might be considered a "premature optimization." Great engineers have both the *skill* to see how to optimize their code and the *wisdom* to know when those optimizations aren't worth it. At this point in the interview I recommend saying, "I think we can optimize this a bit further, although given the nature of the input this probably won't be very resource-intensive anyway...should we talk about optimizations?"

Suppose we *do* want to optimize further. What are the time and space costs to beat? This function will take $O(n^2)$ time and $O(n^2)$ additional space.

Whaaaaat? Yeah. Take a look at this snippet:

```python
return is_first_come_first_served(take_out_orders[1:], dine_in_orders, served_orders[1:])
```

In particular this expression:

```python
  take_out_orders[1:]
```

That's a slice, and it costs $O(m)$ time and space, where $m$ is the size of the resulting list. That's going to determine our overall time and space cost here—-the rest of the work we're doing is constant space and time.

In our recursing we'll build up nn frames on the call stack. Each of those frames will hold a *different slice* of our original `served_orders` (and `take_out_orders` and `dine_in_orders`, though we only slice one of them in each recursive call).

So, what's the total time and space cost of all our slices?

If `served_orders` has $n$ items to start, taking our first slice takes $n-1$ time and space (plus half that, since we're also slicing one of our halves—-but that's just a constant multiplier so we can ignore it). In our second recursive call, slicing takes $n-2$ time and space. Etc.

So our total time and space cost for slicing comes to:

$$
(n-1)+(n-2)+\cdots+2+1
$$

This is a common series that turns out to be $O(n^2)$.

We can do better than this $O(n^2)$ time and space cost. One way we could to that is to avoid slicing and instead keep track of indices in the list:

```python
def is_first_come_first_served(take_out_orders, dine_in_orders, served_orders,
                               take_out_orders_index=0, dine_in_orders_index=0,
                               served_orders_index=0):
    # Base case we've hit the end of served_orders
    if served_orders_index == len(served_orders):
        return True

    # If we still have orders in take_out_orders
    # and the current order in take_out_orders is the same
    # as the current order in served_orders
    if ((take_out_orders_index < len(take_out_orders)) and
            take_out_orders[take_out_orders_index] == served_orders[served_orders_index]):
        take_out_orders_index += 1

    # If we still have orders in dine_in_orders
    # and the current order in dine_in_orders is the same
    # as the current order in served_orders
    elif ((dine_in_orders_index < len(dine_in_orders)) and
            dine_in_orders[dine_in_orders_index] == served_orders[served_orders_index]):
        dine_in_orders_index += 1

    # If the current order in served_orders doesn't match
    # the current order in take_out_orders or dine_in_orders, then we're not
    # serving in first-come, first-served order.
    else:
        return False

    # The current order in served_orders has now been "accounted for"
    # so move on to the next one
    served_orders_index += 1
    return is_first_come_first_served(
        take_out_orders, dine_in_orders, served_orders,
        take_out_orders_index, dine_in_orders_index, served_orders_index)
```

So now we're down to $O(n)$ time, but we're still taking $O(n)$ space in the call stack because of our recursion. We can rewrite this as an iterative function to get that memory cost down to $O(1)$.

</details>

<details><summary> Hint 7</summary>

What's happening in each iteration of our recursive function? Sometimes we're taking a customer order out of `take_out_orders` and sometimes we're taking a customer order out of `dine_in_orders`, but we're *always* taking a customer order out of `served_orders`.

So what if instead of taking customer orders out of `served_orders` 1-by-1, we *iterated over them*?

That should work. But are we missing any edge cases?

</details>

<details><summary> Hint 8</summary>

What if there are *extra* orders in `take_out_orders` or `dine_in_orders` that don't appear in `served_orders`? Would our kitchen be first-come, first-served then?

Maybe.

It's possible that our data doesn't include everything from the afternoon service. Maybe we stopped recording data before every order that went into the kitchen was served. It would be reasonable to say that our kitchen is still first-come, first-served, since we don't have any evidence otherwise.

On the other hand, if our input is supposed to cover the entire service, then any orders that went into the kitchen but weren't served should be investigated. We don't want to accept people's money but not serve them!

When in doubt, ask! This is a *great* question to talk through with your interviewer and shows that you're able to think through edge cases.

Both options are reasonable. In this writeup, we'll enforce that *every* order that goes into the kitchen (appearing in `take_out_orders` or `dine_in_orders`) should come out of the kitchen (appearing in `served_orders`). How can we check that?

</details>

<details><summary> Hint 9</summary>

To check that we've served every order that was placed, we'll validate that when we finish iterating through `served_orders`, we've exhausted `take_out_orders` and `dine_in_orders`.

</details>

<details><summary> Hint 10 (solution)</summary>

**Solution**

We walk through `served_orders`, seeing if each customer order *so far* matches a customer order from one of the two registers. To check this, we:

1. Keep pointers to the current index in `take_out_orders`, `dine_in_orders`, and `served_orders`.
2. Walk through `served_orders` from beginning to end.
3. If the current order in `served_orders` is the same as the current customer order in `take_out_orders`, increment `take_out_orders`Index and keep going. This can be thought of as "checking off" the current customer order in `take_out_orders` and `served_orders`, reducing the problem to the remaining customer orders in the lists.
4. Same as above with `dine_in_orders`.
5. If the current order isn't the same as the customer order at the front of `take_out_orders` or `dine_in_orders`, we know something's gone wrong and we're not serving food first-come, first-served.
6. If we make it all the way to the end of `served_orders`, we'll check that we've reached the end of `take_out_orders` and `dine_in_orders`. If every customer order checks out, that means we're serving food first-come, first-served.

```python
def is_first_come_first_served(take_out_orders, dine_in_orders, served_orders):
    take_out_orders_index = 0
    dine_in_orders_index = 0
    take_out_orders_max_index = len(take_out_orders) - 1
    dine_in_orders_max_index = len(dine_in_orders) - 1

    for order in served_orders:
        # If we still have orders in take_out_orders
        # and the current order in take_out_orders is the same
        # as the current order in served_orders
        if take_out_orders_index <= take_out_orders_max_index and order == take_out_orders[take_out_orders_index]:
            take_out_orders_index += 1

        # If we still have orders in dine_in_orders
        # and the current order in dine_in_orders is the same
        # as the current order in served_orders
        elif dine_in_orders_index <= dine_in_orders_max_index and order == dine_in_orders[dine_in_orders_index]:
            dine_in_orders_index += 1

        # If the current order in served_orders doesn't match the current
        # order in take_out_orders or dine_in_orders, then we're not serving first-come,
        # first-served.
        else:
            return False

    # Check for any extra orders at the end of take_out_orders or dine_in_orders
    if dine_in_orders_index != len(dine_in_orders) or take_out_orders_index != len(take_out_orders):
        return False

    # All orders in served_orders have been "accounted for"
    # so we're serving first-come, first-served!
    return True
```

**Complexity**

$O(n)$ time and $O(1)$ additional space.

**Bonus**

1. This assumes each customer order in `served_orders` is unique. How can we adapt this to handle lists of customer orders with *potential repeats*?
2. Our implementation returns true when all the items in `dine_in_orders` and `take_out_orders` are first-come first-served in `served_orders` and `false` otherwise. That said, it'd be reasonable to throw an exception if some orders that went into the kitchen were never served, or orders were served but not paid for at either register. How could we check for those cases?
3. Our solution iterates through the customer orders from front to back. Would our algorithm work if we iterated from the back towards the front? Which approach is cleaner?

**What We Learned**

If you read the whole breakdown section, you might have noticed that our recursive function cost us extra space. If you missed that part, go back and take a look.

Be careful of the hidden space costs from a recursive function's call stack! If you have a solution that's recursive, see if you can save space by using an iterative algorithm instead.

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
