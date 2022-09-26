---
title: Bit Manipulation
hide_title: false
sidebar_label: 11 - Bit Manipulation
description: Bit Manipulation.
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

### Binary Numbers

The number system we usually use (the one you probably learned in elementary school) is called **base 10**, because each digit has *ten* possible values (1, 2, 3, 4, 5, 6, 7, 8, 9, and 0). But computers don't have digits with ten possible values. They have *bits* with two possible values (0 and 1). So they use **base 2** numbers. Base 10 is also called **decimal**. Base 2 is also called **binary**.

#### Decimal, or "base-ten" numbers

To understand binary, let's take a closer look at how decimal numbers work. Take the number "101" in decimal:

```
101
```

Notice we have two "1"s here, but they don't *mean* the same thing. The leftmost "1" *means* 100, and the rightmost "1" *means* 1. That's because the leftmost "1" is in the hundreds place, while the rightmost "1" is in the ones place. And the "0" between them is in the tens place.

<div align='center'>
  <img width="300px" src={require('@site/static/img/course-notes/cake/c11/r1-f1.png').default} />
</div>

So this "101" in base 10 is telling us we have "1 hundred, 0 tens, and 1 one."

<div align='center'>
  <img width="300px" src={require('@site/static/img/course-notes/cake/c11/r1-f2.png').default} />
</div>

Notice how the *places* in base 10 (ones place, tens place, hundreds place, etc.) are *sequential powers of 10*:

- $10^0 = 1$
- $10^1 = 10$
- $10^2 = 100$
- $10^3 = 1000$
- etc.

#### Binary, or "base-two" numbers

Just as the *places* in base 10 are sequential powers of 10, **the places in *binary* (base 2) are sequential powers of *2***:

- $2^0=1$
- $2^1=2$
- $2^2=4$
- $2^3=8$
- etc.

So let's take that same "101" but this time let's read it as a *binary* number:

<div align='center'>
  <img width="300px" src={require('@site/static/img/course-notes/cake/c11/r1-f3.png').default} />
</div>

Reading this from right to left: we have a 1 in the ones place, a 0 in the twos place, and a 1 in the fours place. So our total is 4 + 0 + 1 which is 5.

<div align='center'>
  <img width="300px" src={require('@site/static/img/course-notes/cake/c11/r1-f4.png').default} />
</div>

#### Counting to 10 in binary

Here's how we'd count from 0 to 10 in binary, along with how we'd interpret each bit:

| Decimal | Binary | Interpretation |
| :-: | :-: | :-: |
| `0` | `0000` | `0 + 0 + 0 + 0` |
| `1` | `0001` | `0 + 0 + 0 + 1` |
| `2` | `0010` | `0 + 0 + 2 + 0` |
| `3` | `0011` | `0 + 0 + 2 + 1` |
| `4` | `0100` | `0 + 4 + 0 + 0` |
| `5` | `0101` | `0 + 4 + 0 + 1` |
| `6` | `0110` | `0 + 4 + 2 + 0` |
| `7` | `0111` | `0 + 4 + 2 + 1` |
| `8` | `1000` | `8 + 0 + 0 + 0` |
| `9` | `1001` | `8 + 0 + 0 + 1` |
| `10` | `1010` | `8 + 0 + 2 + 0` |

Some languages spoken in Nigeria and India use **duodecimal** numbers, or **base-12**. So "eleven" and "twelve" aren't built using 1s and 2s, they're entirely different digits. Some mathematicians argue that base-12 is a better system than our base-10, because 12 has more factors (1, 2, 3, 4, 6) than 10 does (1, 2, 5). We probably use decimal numbers because we have 10 fingers.

#### Negative Numbers and Two's Complement

**Negative numbers** are typically represented in binary using *two's complement* encoding. In two's complement, the leftmost digit is *negative*, and the rest of the digits are positive.

Let's look at what happens when we interpret that "101" as two's complement:

<div align='center'>
  <img width="300px" src={require('@site/static/img/course-notes/cake/c11/r1-f5.png').default} />
</div>

Fun computer systems trivia fact: two's complement isn't the only way negative numbers could be encoded. Other encodings tossed around in the 1960s included "one's complement" and "sign and magnitude" encodings. Of the three encodings, two's complement is the one still used today for a few reasons:

1. There is only one way to represent zero.
2. Basic operations like addition, subtraction, and multiplication are the same regardless of whether the numbers involved are positive or negative.

Since two's complement had both of these properties (and the others didn't), it stuck around and is still used today.

#### Counting from -5 to 5 in two's complement

Here are the base-10 numbers $-5$ through 5 in two's complement, along with how we'd interpret each bit:

| Decimal | Binary | Interpretation |
| :-: | :-: | :-: |
| `-5` | `1011` | `-8 + 0 + 2 + 1` |
| `-4` | `1100` | `-8 + 4 + 0 + 0` |
| `-3` | `1101` | `-8 + 4 + 0 + 1` |
| `-2` | `1110` | `-8 + 4 + 2 + 0` |
| `-1` | `1111` | `-8 + 4 + 2 + 1` |
| `0` | `0000` | `0 + 0 + 0 + 0` |
| `1` | `0001` | `0 + 0 + 0 + 1` |
| `2` | `0010` | `0 + 0 + 2 + 0` |
| `3` | `0011` | `0 + 0 + 2 + 1` |
| `4` | `0100` | `0 + 4 + 0 + 0` |
| `5` | `0101` | `0 + 4 + 0 + 1` |


So, should `1011` be read as "eleven" (in binary) or "negative five" (in two's complement)? It could be either one! Many languages have two types of numbers: **signed** and **unsigned**. Signed numbers are represented in two's complement, and unsigned numbers use plain old base 2.

So, if an interviewer asks you to convert base-2 into decimal, ask: "is that in two's complement or not?"

### Bitwise AND

The **`AND`** operation takes two bits and returns `1` if both bits are `1`. Otherwise, it returns `0`.

```
1 & 1  →  1
1 & 0  →  0
0 & 1  →  0
0 & 0  →  0
```

Think of it like a hose with two knobs. Both knobs must be set to on for water to come out. When performing `AND` on two integers, the `AND` operation is calculated on each pair of bits (the two bits at the same index in each number).

```javascript
5 & 6  // gives 4

// at the bit level:
//     0101  (5)
//   & 0110  (6)
//   = 0100  (4)
```

### Bitwise OR

The **`OR`** operation takes two bits and returns `1` if either of the bits are `1`. Otherwise, it returns `0`.

```
1 | 1  →  1
1 | 0  →  1
0 | 1  →  1
0 | 0  →  0
```

Think of it like a bucket with two holes in it. If *both* holes are closed, no water comes out. If *either* hole is open, or *if both* are open, water comes out. When performing `OR` on two integers, the `OR` operation is calculated on each pair of bits (the two bits at the same index in each number).

```javascript
5 | 6  // gives 7

// At the bit level:
//     0101  (5)
//   | 0110  (6)
//   = 0111  (7)
```

### Bitwise XOR (eXclusive OR)

The **`XOR`** operation (or **exclusive or**) takes two bits and returns `1` if **exactly one** of the bits is `1`. Otherwise, it returns `0`.

```
1 ^ 1  →  0
1 ^ 0  →  1
0 ^ 1  →  1
0 ^ 0  →  0
```

Think of it like a bag of chips where only one hand can fit in at a time. If no one reaches for chips, no one gets chips, and if both people reach for chips, they can't fit and no one gets chips either! When performing `XOR` on two integers, the `XOR` operation is calculated on each pair of bits (the two bits at the same index in each number).

```javascript
5 ^ 6  // gives 3

// At the bit level:
//     0101  (5)
//   ^ 0110  (6)
//   = 0011  (3)
```

### Bitwise NOT

The **`NOT`** bitwise operation inverts bits. A `0` becomes a `1`. A `1` becomes a `0`. The `NOT` operator is often written as a tilde character ("~"):

```
~ 0000 0101
= 1111 1010
```

When numbers are printed in base-10, the result of a `NOT` operation can be surprising. In particular, positive numbers can become negative and negative numbers can become positive. For example:

```javascript
~ 5  // gives -6

// At the bit level:
//   ~ 0000 0101  (5)
//   = 1111 1010  (-6)
```

This is because numbers are (usually) represented using two's complement, where the leftmost bit is actually negative. So flipping the leftmost bit usually flips the sign of the number.

### Bit Shifting

A **bit shift** moves each digit in a number's binary representation left or right. There are three main types of shifts:

#### Left Shifts

When shifting left, the most-significant bit is lost, and a `0` bit is inserted on the other end. The left shift operator is usually written as "<<".

```
0010 << 1  →  0100
0010 << 2  →  1000
```

A single left shift multiplies a binary number by 2:

```
0010 << 1  →  0100

0010 is 2
0100 is 4
```

#### Logical Right Shifts

When shifting right with a **logical right shift**, the least-significant bit is lost and a `0` is inserted on the other end.

```
1011 >>> 1  →  0101
1011 >>> 3  →  0001
```

For positive numbers, a single logical right shift divides a number by 2, throwing out any remainders.

```
0101 >>> 1  →  0010

0101 is 5
0010 is 2
```

#### Arithmetic Right Shifts

When shifting right with an **arithmetic right shift**, the least-significant bit is lost and the most-significant bit is *copied*. Languages handle arithmetic and logical right shifting in different ways. Javascript provides two right shift operators: `>>` does an *arithmetic* right shift and `>>>` does a *logical* right shift.

```
1011 >> 1  →  1101
1011 >> 3  →  1111

0011 >> 1  →  0001
0011 >> 2  →  0000
```

The first two numbers had a `1` as the most significant bit, so more `1`'s were inserted during the shift. The last two numbers had a `0` as the most significant bit, so the shift inserted more `0`'s. If a number is encoded using two's complement, then an arithmetic right shift preserves the number's sign, while a logical right shift makes the number positive.

```javascript
// Arithmetic shift
1011 >> 1  →  1101
    1011 is -5
    1101 is -3

// Logical shift
1111 >>> 1  →  0111
    1111 is -1
    0111 is  7
```

### Integer Overflow

When you create an integer variable, your computer allocates a fixed number of bits for storing it. Most modern computers use 32 or 64 bits. But some numbers are *so big* they don't fit even in 64 bits, like sextillion (a billion trillion), which is 70 digits in binary. Sometimes we might have a number that *does* fit in 32 or 64 bits, but if we add to it (or multiply it by something, or do another operation) the result might *not fit* in the original 32 or 64 bits. This is called an **integer overflow**.

For example, let's say we have just **2** bits to store integers with. So we can only hold the unsigned (non-negative) integers 0-3 in binary:

```
00 (0)
01 (1)
10 (2)
11 (3)
```

What happens if we have 3 (`11`) and we try to add 1 (`01`)? The answer is 4 (`100`) but that requires 3 bits and we only have 2. What happens next depends on the language:

- Some languages, like Python or Ruby, will notice that the result won't fit and automatically allocate space for a larger number.
- In other languages, like C or Java, the processor will sort of "do its best" with the bits it has, taking the true result and throwing out any bits that don't fit. So in our example above, when adding `01` to `11`, the processor would take the true result `100` and throw out the highest bit, leaving `00`.
- Javascript technically doesn't have integers—-it only has 64-bit floats. If those become too large, then they'll get represented as "Infinity" instead.

In languages where integer overflow can occur, you can reduce its likelihood by using larger integer types, like C's `long`, `long int` or Java's `long`. If you need to store something even bigger, there are libraries built to handle arbitrarily large numbers. In some languages, you can also take advantage of overflow-checking features provided by the compiler or interpreter.

## Practice

### The Stolen Breakfast Drone

Your company delivers breakfast via autonomous quadcopter drones. And something mysterious has happened.

Each breakfast delivery is assigned a unique ID, a positive integer. When one of the company's 100 drones takes off with a delivery, the delivery's ID is added to an list, `delivery_id_confirmations`. When the drone comes back and lands, the ID is again added to the same list.

After breakfast this morning there were only 99 drones on the tarmac. One of the drones never made it back from a delivery. **We suspect a secret agent from Amazon placed an order and *stole* one of our patented drones.** To track them down, we need to find their delivery ID.

**Given the list of IDs, which contains many duplicate integers and *one unique integer*, find the unique integer.**

*The IDs are ***not*** guaranteed to be sorted or sequential. Orders aren't always fulfilled in the order they were received, and some deliveries get cancelled before takeoff.*

<details><summary> Hint 1</summary>

A brute force approach would use two nested loops to go through every ID and check every *other* ID to see if there's a duplicate.

This would take $O(n^2)$ time and $O(1)$ space. Can we bring that runtime down?

</details>

<details><summary> Hint 2</summary>

Well, we know every integer appears twice, except for one integer, which appears once. **Can we just *track* how many times each integer appears?**

We could iterate through the list and **store each integer in an dictionary**, where the keys are the integers and the values are the number of times we've seen that integer so far. At the end, we'd just need to return the integer we saw one time.

```python
def find_unique_delivery_id(delivery_ids):
    ids_to_occurrences = {}

    for delivery_id in delivery_ids:
        if delivery_id in ids_to_occurrences:
            ids_to_occurrences[delivery_id] += 1
        else:
            ids_to_occurrences[delivery_id]  = 1

    for delivery_id, occurrences in list(ids_to_occurrences.items()):
        if occurrences == 1:
            return delivery_id
```

</details>

<details><summary> Hint 3</summary>

Alright, we got our runtime down to $O(n)$. That's probably the best runtime we can get-—to find our unique integer we'll definitely have to look at every integer in the worst case.

**But now we've added $O(n)$ space**, for our object. Can we bring that down?

</details>

<details><summary> Hint 4</summary>

Well, we could use booleans as our values, instead of integers. If we see an integer, we'll add it as a key in our object with a boolean value of `True`. If we see it again, we'll change its value to `False`. At the end, our non-repeated order ID will be the one integer with a value of `True`.

How much space does this save us? Depends how our language stores booleans vs integers. Often booleans take up just as much space as integers.

And even if each boolean *were* just 1 bit, that'd still be $O(n)$ space overall.

**So using booleans probably doesn't save us much space here. Any other ideas?**

</details>

<details><summary> Hint 5</summary>

Let's zoom out and think about what we're working with. The only data we have is integers. How are integers stored?

</details>

<details><summary> Hint 6</summary>

Our machine stores integers as binary numbers using bits. What if we thought about this problem on the level of individual bits?

</details>

<details><summary> Hint 7</summary>

Let's think about the **bitwise operations** AND, OR, XOR, NOT and bit shifts.

Is one of those operations helpful for finding our unique integer?

</details>

<details><summary> Hint 8</summary>

We’re seeing every integer twice, except one. Is there a bitwise operation that would let **the second occurrence of an integer cancel out the first?**

If so, we could start with a variable `unique_delivery_id` set to 0 and run some bitwise operation with that variable and each number in our list. If duplicate integers cancel each other out, then we’d only be left with the unique integer at the end!

Which bitwise operation would let us do that?

</details>

<details><summary> Hint 9</summary>

**Solution**

We XOR all the integers in the list. We start with a variable `unique_delivery_id` set to 0. Every time we XOR with a new ID, it will change the bits. When we XOR with the same ID again, it will cancel out the earlier change.

In the end, we'll be left with the ID that appeared once!

```python
def find_unique_delivery_id(delivery_ids):
    unique_delivery_id = 0

    for delivery_id in delivery_ids:
        unique_delivery_id ^= delivery_id

    return unique_delivery_id
```

**Complexity**

$O(n)$ time and $O(1)$ space.

**What We Learned**

This problem is a useful reminder of the power we can unlock by knowing what's happening at the "bit level."

How do you know when bit manipulation might be the key to solving a problem? Here are some signs to watch out for:

1. You want to multiply or divide by 2 (use a left shift to multiply by 2, right shift to divide by 2).
2. You want to "cancel out" matching numbers (use XOR).

</details>
