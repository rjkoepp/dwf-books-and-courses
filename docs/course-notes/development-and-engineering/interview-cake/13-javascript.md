---
title: JavaScript
hide_title: false
sidebar_label: 13 - JavaScript
description: JavaScript.
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

### Closures

A closure is a function that accesses a variable "outside" itself. For example:

```javascript
const message = 'The British are coming.';
function sayMessage(){
  alert(message); // Here we have access to message,
  // even though it's declared outside this function!
}
```

We'd say that `message` is "closed over" by `sayMessage()`. 

One useful thing to do with a closure is to create something like an "instance variable" that can change over time and can affect the behavior of a function.

```javascript
// Function for getting the id of a dom element,
// giving it a new, unique id if it doesn't have an id yet
const getUniqueId = (() => {
  let nextGeneratedId = 0;
  return element => {
    if (!element.id) {
      element.id = `generated-uid-${nextGeneratedId}`;
      nextGeneratedId++;
    }
    return element.id;
  };
})();
```

Why did we put `nextGeneratedId` in an immediately-executed anonymous function? It makes `nextGeneratedId` private, which prevents accidental changes from the outside world:

```javascript
// Function for getting the id of a dom element,
// giving it a new, unique id if it doesn't have an id yet
let nextGeneratedId = 0;
const getUniqueId = element => {
  if (!element.id) {
    element.id = `generated-uid-${nextGeneratedId}`;
    nextGeneratedId++;
  }
  return element.id;
};

// ...
// Somewhere else in the codebase...
// ...

// WHOOPS--FORGOT I WAS ALREADY USING THIS FOR SOMETHING
nextGeneratedId = 0;
```

### In-Place Algorithms

An **in-place** function modifies data structures or objects outside of its own stack frame ↴ (i.e.: stored on the process heap or in the stack frame of a calling function). Because of this, the changes made by the function remain after the call completes. In-place algorithms are sometimes called **destructive**, since the original input is "destroyed" (or modified) during the function call.

**Careful:** "In-place" does not mean "without creating any additional variables!" Rather, it means "without creating a new copy of the input." In general, an in-place function will only create additional variables that are $O(1)$ space. An out-of-place function doesn't make any changes that are visible to other functions. Usually, those functions copy any data structures or objects before manipulating and changing them.

In many languages, primitive values (integers, floating point numbers, or characters) are copied when passed as arguments, and more complex data structures (arrays, heaps, or hash tables) are passed by reference. This is what Javascript does.

Here are two functions that do the same operation on an array, except one is in-place and the other is out-of-place:

```javascript
function squareArrayInPlace(intArray) {

  intArray.forEach((int, index) => {
    intArray[index] *= int;
  });

  // NOTE: no need to return anything - we modified
  // intArray in place
}

function squareArrayOutOfPlace(intArray) {

  // We allocate a new array that we'll fill in with the new values
  const squaredArray = [];

  intArray.forEach((int, index) => {
    squaredArray[index] = Math.pow(int, 2);
  });

  return squaredArray;
}
```

Working in-place is a good way to save time and space. An in-place algorithm avoids the cost of initializing or copying data structures, and it usually has an $O(1)$ space cost. But be careful: an in-place algorithm can cause side effects. Your input is "destroyed" or "altered," which can affect code outside of your function. For example:

```javascript
const originalArray = [2, 3, 4, 5];
squareArrayInPlace(originalArray);

console.log('original array: ' + originalArray);
// Logs: original array: 4,9,16,25 - confusingly!
```

Generally, out-of-place algorithms are considered safer because they avoid side effects. You should only use an in-place algorithm if you're space constrained or you're positive you don't need the original input anymore, even for debugging.

## Practice

### JavaScript Scope

If we execute this Javascript, what will the browser's console show?

```javascript
var text = 'outside';
function logIt(){
  console.log(text);
  var text = 'inside';
};
logIt();
```

<details><summary> Hint 1 (solution)</summary>

**Gotchas**

It's not "outside".

It's not "inside".

The script won't throw an error!

**Solution**

The console will log `undefined`.

To understand this, we need to explain a few things about Javascript.

**Function-level scope**. Functions create new scopes in Javascript:

```javascript
function setVar(){
  // inside this function we have a new scope
  // so this variable, declared in this function's scope, won't be available outside the function
  var varInFunction = 'inside a function';
}
setVar();
console.log(varInFunction);  // throws 'ReferenceError: varInFunction is not defined'
```

Blocks like if statements and for loops do not create a new scope (this is also true of Python and recent versions of Ruby, but untrue of Java and C):

```javascript
if (true) {
  // this if statement doesn't create a new scope
  // so varInIf is available in the global scope
  var varInIf = 'inside an if statement';
}
console.log(varInIf);  // logs 'inside an if statement'
```

**Declaration vs. assignment.** A variable *declaration* simply tells the interpreter that a variable exists. By default it initializes the variable to `undefined`:

```javascript
var unicorn;
console.log(unicorn);  // logs undefined (NOT a ReferenceError)
```

A variable *assignment* assigns a value to the variable:

```javascript
unicorn = 'Sparkles McGiggleton';
```

We can both *declare* and *assign* in the same line:

```javascript
var centaur = 'Horsey McPersonhead';
```

**Hoisting.** In Javascript, variable *declarations* are "hoisted" to the top of the current scope. Variable *assignments*, however, are not.

So returning to the original problem:

```javascript
var text = 'outside';
function logIt(){
  console.log(text);
  var text = 'inside';
};
logIt();
```

The declaration (but not the assignment) of `text` gets hoisted to the top of `logIt()`. So our code gets interpreted as though it were:

```javascript
var text = 'outside';
function logIt(){
  var text;
  console.log(text);
  text = 'inside';
};
logIt();
```

So we have a new variable `text` inside of `logIt()` that is initialized to `undefined`, which is what it holds when we hit our log statement.

**What We Learned**

Remember: when you declare a variable in JavaScript (using "var"), that variable declaration is "hoisted" to the top of the current scope-—meaning the top of the current function or the top of the script if the variable isn't in a function.

Hoisting can cause unexpected behavior, so a good way to keep things clear is to **always declare your variables at the top of the scope.**

</details>

### What's Wrong with This JavaScript?

We're building a web game where everybody wins and we are all friends forever.

It's simple-—you click on one of three boxes to see what nice thing you've won. You always win something nice. Because we love you.

Here's what we have so far. Something's going wrong though. Can you tell what it is?

```html
<button id="btn-0">Button 1</button>
<button id="btn-1">Button 2</button>
<button id="btn-2">Button 3</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btnNum}`).onclick = () => {

      // Tell her what she's won!
      alert(prizes[btnNum]);
    };
  }
</script>
```
The syntax is just fine—-the problem is some unexpected *behavior*.

<details><summary> Hint 1</summary>

**Gotchas**

Coding style choices aside, what we found is a problem in *behavior*.

**Solution**

The user's prize is always undefined!

**The Problem**

The anonymous function we're assigning to the buttons' `onclicks` has access to variables in the scope outside of it (this is called a closure). In this case, it has access to `btnNum`.

**When a function accesses a variable outside its scope, it accesses *that variable*, not a frozen copy.** So when the value held by the variable changes, the function gets that new value. By the time the user starts pressing buttons, our loop will have already completed and `btnNum` will be 3, so this is what each of our anonymous functions will get for `btnNum`!

**Why 3?** The for loop will increment `btnNum` until the conditional in the middle is no longer met-—that is, until it's not true that `btnNum < prizes.length`. So the code in the for loop won't run with `btnNum = 3`, but `btnNum` will be 3 when the loop is done.

**Why undefined?** `prizes` has 3 elements, but they are at indices 0, 1, 2. Array indices start at 0, remember? (Write this down-—forgetting this is an easy way to create an off-by-one error in a whiteboard interview.) In JavaScript, accessing a nonexistent index in an array returns `undefined` (Python throws an `IndexError`, but Ruby returns `nil`).

**The Solution**

We can solve this by wrapping our anonymous function in *another anonymous function* that takes `btnNum` as an argument. Like so:

```html
<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btnNum}`).onclick = (frozenBtnNum => {
      return () => {

        // Tell her what she's won!
        alert(prizes[frozenBtnNum]);
      };
    })(btnNum); // LOOK! We're passing btnNum to our anonymous function here!
  }
</script>
```

This "freezes" the value of `btnNum`. Why? Well...

**Primitives vs. Objects**

`btnNum` is a number, which is a **primitive** type in JavaScript.

Primitives are "simple" data types (string, number, boolean, null, and undefined in JavaScript). Everything else is an *object* in JavaScript (functions, arrays, Date() values, etc).

**Arguments Passed by Value vs. Arguments Passed by Reference**

One important property of primitives in JS is that when they are passed as arguments to a function, they are *copied* ("passed by value"). So for example:

Heads up: This is *not* well-formed JavaScript. We're using it to prove a point.

```javascript
let threatLevel = 1;

function inspireFear(threatLevel){
  threatLevel += 100;
}

inspireFear(threatLevel);
console.log(threatLevel); // Whoops! It's still 1!
```

The `threatLevel` inside `inspireFear()` is a *new* number, initialized to the same *value* as the `threatLevel` outside of `inspireFear()`. Giving these *different* variables the same name might cause confusion here. If we change the two variables to have different names we get the exact same behavior:

```javascript
let threatLevel = 1;

function inspireFear(theThreatLevel){
  theThreatLevel += 100;
}

inspireFear(threatLevel);
console.log(threatLevel); // Whoops! It's still 1!
```

In contrast, **when a function takes an object, it actually takes a *reference to that very object***. So changes you make to the object in the function persist after the function is done running. This is sometimes called a **side effect**.

```javascript
const scaryThings = ['spiders', 'Cruella de Vil'];

function inspireFear(scaryThings){
  scaryThings.push('nobody ever using Interview Cake');
  scaryThings.push('i should have gotten a real job');
  scaryThings.push('why am i doing this to myself');
}

inspireFear(scaryThings);
console.log(scaryThings);
// ['spiders', 'Cruella de Vil', 'nobody ever using Interview Cake', 'i should have gotten a real job', 'why am i doing this to myself']
```

**Bringing it home**

Back to our solution:

```html
<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
  for (var btnNum = 0; btnNum < prizes.length; btnNum++) {

    // For each of our buttons, when the user clicks it...
    document.getElementById(`btn-${btnNum}`).onclick = (frozenBtnNum => {
      return () => {

        // Tell her what she's won!
        alert(prizes[frozenBtnNum]);
      };
    })(btnNum);
  }
</script>
```

So when we pass `btnNum` to the outer anonymous function as its one argument, we create a *new* number inside the outer anonymous function called `frozenBtnNum` that has the value that `btnNum` had *at that moment* (0, 1, or 2).

Our inner anonymous function is still a closure because it still reaches outside its scope, but now it closes over this *new* number called `frozenBtnNum`, whose value will not change as we iterate through our for loop.

What We Learned

Like several common Javascript interview questions, this question hinges on a solid understanding of closures and *pass by reference* vs *pass by value*. If you're shaky on either of those, look back at the examples in the solution.

</details>
