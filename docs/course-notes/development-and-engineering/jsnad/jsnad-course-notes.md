---
title: JSNAD Course Notes
hide_title: false
sidebar_label: JSNAD
description: Notes in preparation for JSNAD
draft: false
tags: [jsnad]
keywords: [jsnad]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## 0 - Highlighted learnings

<details><summary> Use nvm to install Node (not the direct download or a package manager)</summary>

The recommended way to install Node.js on macOS and Linux is by using a Node version manager, in particular [`nvm`](https://github.com/nvm-sh/nvm). See [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) for full details. 

The quick version: if `curl` is installed (which it usually is), then use the install script (update version accordingly):

```bash
curl -o- ht‌tps://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Then run `command -v nvm` to check that the installation was successful (output should be `nvm`). Install the desired Node version:

```bash
nvm install 16
```

</details>

<details><summary> Helpful command line flags for the Node binary</summary>

- `node --help` will provide you with a very comprehensive listing of *all* command line flags.
- `node --v8-options` provides additional flags for modifying V8, the JavaScript runtime engine.
- `node -c <file-name>` parse a JavaScript application without running it in order to simply check syntax (helps when there are big setup/teardown tasks). No output indicates success; otherwise, error output will be shown.
- `node -p <expression>` evaluates an expression and prints the result; for example: `node -p "1+1"`
- `node -e <expression>` evaluates an expression and *does not* print the result; for example: `node -e "1+1"`

  > Usually a module would be required, like so: `require('fs')`, however all Node core modules can be accessed by their namespaces within the code evaluation context. For example, the following would print all the files with a `.js` extension in the current working directory in which the command is run:
  > 
  > ```
  > node -p "fs.readdirSync('.').filter((f) => /.js$/.test(f))"
  > ```

- `node -r <path-to-module>` can be used to *preload* a module before anything else loads. This can be useful when using or consuming modules that instrument or configure the process in some way. One example would be the `dotenv` module.

</details>

<details><summary> Modifying the stack trace limit via the command line when debugging</summary>

Stack traces are generated for any `Error` that occurs, so they're usually the first point of call when debugging a failure scenario. By default, a stack trace will contain the last ten stack frames (function call sites) at the point where the trace occurred. This is often fine, because the part of the stack you are interested in is often the last 3 or 4 call frames. However there are scenarios where seeing more call frames in a stack trace makes sense, like checking that the application flow through various functions is as expected.

The stack trace limit can be modified with the `--stack-trace-limit` flag. This flag is part of the JavaScript runtime engine, V8, and can be found in the output of the `--v8-options` flag.

Consider a program named `app.js` containing the following code:

```js title=app.js
function f (n = 99) {
  if (n === 0) throw Error()
  f(n - 1)
}
f()
```

When executed, the function `f` will be called 100 times. On the 100th time, an `Error` is thrown and stack for the error will be output to the console.

The stack trace output only shows the call to the `f` function, in order to see the very first call to `f` the stack trace limit must be set to `101`. This can be achieved with the following:

```bash
node --stack-trace-limit=101 app.js
```

Setting stack trace limit to a number higher than the amount of call frames in the stack guarantees that the entire stack will be output:

```bash
node --stack-trace-limit=99999 app.js
```

Generally, the stack trace limit should stay at the default in production scenarios due to the overhead involved with retaining long stacks. It can nevertheless be useful for development purposes.

</details>

<details><summary> Starting a node program with an active breakpoint and adding debugger statements</summary>

It is often best to cause the Node process to start with an active breakpoint at the very beginning of the program using the `--inspect-brk` flag (e.g., `node --inspect-brk app.js`); otherwise, the application will have fully initialised and be performing asynchronous tasks before any breakpoints can be set. Also, trying to use the `--inspect` flag by itself seems to be somewhat unreliable.

**Important to remember:** In order to begin debugging the process, the next step is to set a Chrome browser tab's address bar to `chrome://inspect`.

You can manually add breakpoints in code using the `debugger` statement. Still use the `--inspect-brk` flag.

</details>

## 1 - Introduction

- Go to the Linux Foundation training website to obtain [Course Resources](https://training.linuxfoundation.org/cm/LFW211/)
- The user ID is **LFtraining** and the password is **Penguin2014**.
- One great way to interact with peers taking this course is via the [Class Forum](https://forum.linuxfoundation.org/categories/lfw211-class-forum). The forum can be used in the following ways: 
  + To introduce yourself to other peers taking this course. 
  + To discuss concepts, tools and technologies presented in this course, or related to the topics discussed in the course materials. 
  + To ask questions or report issues with labs or course content. 
  + To share resources and ideas related to open source development, Git and Linux.

## 2 - Setting up

### How not to install Node

Often Node.js can be installed with a particular Operating System's official or unofficial package manager. For instance apt-get on Debian/Ubuntu, Brew on macOs, Chocolatey on Windows. It is strongly recommended against using this approach to install Node. Package managers tend to lag behind the faster Node.js release cycle. Additionally the placement of binary and config files and folders isn't standardized across OS package managers and can cause compatibility issues.

Another significant issue with installing Node.js via an OS package manager is that installing global modules with Node's module installer (npm) tends to require the use of `sudo` (a command which grants root privileges) on non-Windows systems. This is not an ideal setup for a developer machine and granting root privileges to the install process of third-party libraries is not a good security practice.

Node can also be installed directly from the Node.js website. Again on macOS and Linux it predicates the use of `sudo` for installing global libraries. Whether Windows, macOS or Linux, in the following sections we'll present a better way to install Node using a **version manager**.

It's strongly recommended that if Node is installed via an Operating System package manager or directly via the website, that it be completely uninstalled before proceeding to the following sections.

### Installing Node.js on macOS and Linux

The recommended way to install Node.js on macOS and Linux is by using a Node version manager, in particular [`nvm`](https://github.com/nvm-sh/nvm). See [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) for full details. The current `nvm` version is v0.39.1 (as of January 2022), so the install process will contain this version in the URL, if a greater version is out at time of reading, replace v0.39.1 with the current `nvm` version. For this installation process we assume that Bash, Sh, or Zsh is the shell being used, Fish is not supported but see the `nvm` readme for alternatives. The way to install `nvm` is via the install script at [https://github.com/nvm-sh/nvm/blob/v0.39.1/install.sh](https://github.com/nvm-sh/nvm/blob/v0.39.1/install.sh). If `curl` is installed (it usually is) a single command can be used to install and setup `nvm`:

```bash
curl -o- ht‌tps://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

If using `zsh` (e.g., on newer macOS releases) the `bash` part of the command can be replaced with `zsh`. Alternatively the file can be downloaded and saved, and then easily executed like so: `cat install.sh | bash`. Again `bash` can be replaced with `zsh`. To check that the installation was successful execute the following in the terminal: `command -v nvm`. It should output `nvm`. If this fails on Linux, close and reopen the terminal (or SSH session) and try running the command again. On macOS see [https://github.com/nvm-sh/nvm#troubleshooting-on-macos](https://github.com/nvm-sh/nvm#troubleshooting-on-macos) for in depth troubleshooting. Now that we have a version manager, let's install the Node version we'll be using on this course: `nvm install 16`. This will install the latest version of Node 16. We can verify that Node is installed, and which version, with the following command: `node -v`.

## 3 - The Node Binary

### Introduction

#### Chapter Overview

The Node.js platform is almost entirely represented by the `node` binary executable. In order to execute a JavaScript program we use: `node app.js`, where `app.js` is the program we wish to run. However, before we start running programs, let’s explore some of the command line flags offered by the Node binary.

#### Learning Objectives

By the end of this chapter, you should be able to:

- Explore all possible Node and V8 command line flags.
- Use key utility mode command line flags.
- Understand an essential selection of operational command line flags.

### The Node Binary

#### Printing Command Options

To see all Node command line flags for any version of Node, execute `node --help` and view the output.

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/5-f1.png').default} />
</p>

Beyond the Node command line flags there are additional flags for modifying the JavaScript runtime engine: V8. To view these flags run `node --v8-options`.

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/5-f2.png').default} />
</p>

#### Checking Syntax

It’s possible to parse a JavaScript application without running it in order to just check the syntax.

This can be useful on occasions where running code has a setup/teardown cost, for instance, needing to clear a database, but there’s still a need to check that the code parses. It can also be used in more advanced cases where code has been generated and a syntax check is required.

To check the syntax of a program (which will be called `app.js`), use `--check` or `-c` flag:

```bash
node --check app.js

node -c app.js
```

If the code parses successfully, there will be no output. If the code does not parse and there is a syntax error, the error will be printed to the terminal.

#### Dynamic Evaluation

Node can directly evaluate code from the shell. This is useful for quickly checking a code snippet or for creating very small cross-platform commands that use JavaScript and Node core API’s.

There are two flags that can evaluate code. The `-p` or `--print` flag evaluates an expression and prints the result, the `-e` or `--eval` flag evaluates without printing the result of the expression.

The following will print `2`:

```bash
node --print "1+1"
```

The following will not print anything because the expression is evaluated but not printed.

```bash
node --eval "1+1"
```

The following will print `2` because `console.log` is used to explicitly write the result of `1+1` to the terminal:

```bash 
node -e "console.log(1+1)"
```

When used with print flag the same will print `2` and then print `undefined` because `console.log` returns `undefined`; so the result of the expression is undefined:

```bash 
node -p "console.log(1+1)"
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/5-f3.png').default} />
</p>

Usually a module would be required, like so: `require('fs')`, however all Node core modules can be accessed by their namespaces within the code evaluation context.

For example, the following would print all the files with a `.js` extension in the current working directory in which the command is run:

```bash 
node -p "fs.readdirSync('.').filter((f) => /.js$/.test(f))"
```

Due to the fact that Node is cross-platform, this is a consistent command that can be used on Linux, MacOS or Windows. To achieve the same effect natively on each OS a different approach would be required for Windows vs Linux and Mac OS.

#### Preloading CommonJS Modules

The command line flag `-r` or `--require` can be used to preload a CommonJS module before anything else loads.

Given a file named `preload.js` with the following content:

```javascript
console.log('preload.js: this is preloaded')
```

And a file called `app.js` containing the following:

```javascript 
console.log('app.js: this is the main file')
```

The following command would print `preload.js: this is preloaded` followed by `app.js: this is the main file`:

```bash 
node -r ./preload.js app.js
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/5-f4.png').default} />
</p>

Preloading modules is useful when using consuming modules that instrument or configure the process in some way. One example would be the [`dotenv`](https://www.npmjs.com/package/dotenv#preload) module.

In Chapter 7, "Node's Module Systems", we'll be covering the two module systems that Node uses, CommonJS and ESM, but it's important to note here that the `--require` flag can only preload a CommonJS module, not an ESM module. ESM modules have a vaguely related flag, called `--loader`, a currently experimental flag which should not be confused with the `--require` preloader flag. For more information on the `--loader` flag click [here](https://nodejs.org/docs/latest-v16.x/api/esm.html#loaders).

#### Stack Trace Limit

Stack traces are generated for any `Error` that occurs, so they're usually the first point of call when debugging a failure scenario. By default, a stack trace will contain the last ten stack frames (function call sites) at the point where the trace occurred. This is often fine, because the part of the stack you are interested in is often the last 3 or 4 call frames. However there are scenarios where seeing more call frames in a stack trace makes sense, like checking that the application flow through various functions is as expected.

The stack trace limit can be modified with the `--stack-trace-limit` flag. This flag is part of the JavaScript runtime engine, V8, and can be found in the output of the `--v8-options` flag.

Consider a program named `app.js` containing the following code:

```javascript 
function f (n = 99) {
  if (n === 0) throw Error()
  f(n - 1)
}
f()
```

When executed, the function `f` will be called `100` times. On the 100th time, an `Error` is thrown and stack for the error will be output to the console.

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/5-f5.png').default} />
</p>

The stack trace output only shows the call to the `f` function, in order to see the very first call to `f` the stack trace limit must be set to 101. This can be achieved with the following:

```bash 
node --stack-trace-limit=101 app.js
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/5-f6.png').default} />
</p>

Setting stack trace limit to a number higher than the amount of call frames in the stack guarantees that the entire stack will be output:

```bash 
node --stack-trace-limit=99999 app.js
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/5-f7.png').default} />
</p>

Generally, the stack trace limit should stay at the default in production scenarios due to the overhead involved with retaining long stacks. It can nevertheless be useful for development purposes.

### Lab Exercises

#### Lab 3.1 - Stack Size

In the `labs-1` folder there is a file called `will-throw.js`. Run the file without any flags, andthen run the file with `--stack-trace-limit` set to `200`.

In the first case, there should only be ten stack frames in the error output.

In the second case, there should be more than ten frames in the error in output.

#### Lab 3.2 - Checking Syntax

In the `labs-2` folder there are two files, `bad-syntax.js` and `correct-syntax.js`, use the
appropriate flag to check the syntax of each file.

There should be no output when checking the syntax of `correct-syntax.js`.

There should be a Syntax Error when checking the syntax of `bad-syntax.js`.

## 4 - Debugging and diagnostics

In order to debug an application, the Node.js process must be started in Inspect mode. Inspect puts the process into a debuggable state and exposes a remote protocol, which can be connected to via debugger such as Chrome Devtools. In addition to debugging capabilities, Inspect Mode also grants the ability to run other diagnostic checks on a Node.js process. In this section, we'll explore how to debug and profile a Node.js process.

### Starting in `inspect` mode

Consider a program named `app.js` containing the following code:

```js title=app.js
function f (n = 99) {
  if (n === 0) throw Error()
  f(n - 1)
}
f()
```

Node.js supports the Chrome Devtools remote debugging protocol. In order to use this debugging protocol a client that supports the protocol is required. In this example [Chrome browser](https://www.google.com/chrome/) will be used. Inspect mode can be enabled with the `--inspect` flag: `node --inspect app.js`. For most cases however, it is better to cause the process to start with an active breakpoint at the very beginning of the program using the `--inspect-brk` flag:

```bash
node --inspect-brk app.js
```

Otherwise the application will have fully initialised and be performing asynchronous tasks before any breakpoints can be set. When using the `--inspect` or `--inspect-brk` flags Node will output some details to the terminal. The remote debugging protocol uses WebSockets which is why a `ws://` protocol address is printed. There is no need to pay attention to this URI, as the Chrome browser will detect that the debugger is listening automatically. In order to begin debugging the process, the next step is to set a Chrome browser tab's address bar to `chrome://inspect`.

This will load a page that looks like the following:

<p align='center'>
  <img width='600px' src={require('@site/static/img/course-notes/jsnad/chrome-debug.png').default} />
</p>

Under the "Remote Target" heading the program being inspected should be visible with an "inspect" link underneath it. Clicking the "inspect" link will open an instance of Chrome Devtools that is connected to the Node process.

<p align='center'>
  <img width='600px' src={require('@site/static/img/course-notes/jsnad/chrome-debug-in-action.png').default} />
</p>

Note that execution is paused at the first line of executable code, in this case line 5, which is the first function call. From here all the usual Chrome Devtools functionality can be used to debug the process. For more information on using Chrome Devtools, see [Google Developer's Documentation](https://developer.chrome.com/docs/devtools/). There are a range of other tools that can be used to debug a Node.js process using Chrome Devtools remote debugging protocol. To learn more, read [*"Debugging Guide"*](https://nodejs.org/en/docs/guides/debugging-getting-started/) by nodejs.org.

### Breaking on error in devtools

Once a Node.js process has been started in inspect mode and connected to from a debugging client, in this case Chrome Devtools, we can start to try out the debugger features. The `app.js` file will throw when `n` is equal to `0`. The "Pause on exceptions" feature can be used to automatically set a breakpoint at the line where an error is thrown.

To activate this behaviour, start `app.js` in Inspect Break mode (`--inspect-brk`), connect Chrome Devtools, ensure that the "Sources" tab is selected and then click the pause button in the top right. The pause button should turn from gray to blue:

<p align='center'>
  <img width='600px' src={require('@site/static/img/course-notes/jsnad/chrome-inspect-break.png').default} />
</p>

Ensure that the "Pause on caught exceptions" checkbox is unchecked and then press the play button. The process should then pause on line 2, where the error is thrown:

<p align='center'>
  <img width='600px' src={require('@site/static/img/course-notes/jsnad/chrome-pause-on-exception.png').default} />
</p>

From here the Call Stack can be explored over in the right hand column and state can be analyzed by hovering over any local variables and looking in the Scope panel of the right hand column, located beneath the Call Stack panel. Sometimes a program will throw in far less obvious ways. In these scenarios the "Pause on exceptions" feature can be a useful tool for locating the source of an exception.

### Adding a breakpoint in devtools and/or code 

To add a breakpoint in devtools, you can click on the line number of the program where you want a breakpoint to be added. This is fine for some use cases, but it may be easier in some scenarios to set a breakpoint directly in the code via the [`debugger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statement. 

The debugger statement can be used to explicitly pause on the line that the statement appears when debugging. Let's edit `app.js` to include a `debugger` statement on line 3:

```js
function f (n = 99) {
  if (n === 0) throw Error()
  debugger
  f(n - 1)
}
f()
```

You should still use the `--inspect-brk` flag when using the `debugger` statement for consistent behavior in the devtools panel. Using the `debugger` statement is particularly useful when the line we wish to break at is buried somewhere in a dependency tree: in a function that exists in a required module of a required module of a required module and so on. When not debugging, these `debugger` statements are ignored; however, due to noise and potential performance impact it is not good practice to leave debugger statements in code.

## 5 - Key JavaScript concepts

### Introduction

#### Chapter Overview

Among contemporary popular languages, JavaScript has some unusual characteristics. Whether it's frontend development or backend engineering, understanding and wielding these characteristics is essential to harnessing the power of the language and being productive at an intermediate to upper-intermediate level. This section does not set out to cover the entire JavaScript language, for that a separate course would be necessary. With the exception of asynchronous execution which is covered in Section 8, this section focuses on understanding key fundamentals of the language.

#### Learning Objectives

By the end of this chapter, you should be able to:

- Understand data types in JavaScript.
- Explain functions as first class citizens.
- Explain the role of closure scope in state management.
- Describe the prototypal nature of all JavaScript-based inheritance.

### Key JavaScript Concepts

#### Data Types

JavaScript is a loosely typed dynamic language. In JavaScript there are seven primitive types. Everything else, including functions and arrays, is an object.

JavaScript primitives are as follows:

- Null: `null`
- Undefined: `undefined`
- Number: `1`, `1.5`, `-1e4`, `NaN`
- BigInt: `1n`, `9007199254740993n`
- String: `'str'`, `"str"`, `` `str ${var}` ``
- Boolean: `true`, `false`
- Symbol: `Symbol('description')`, `Symbol.for('namespace')`

The `null` primitive is typically used to describe the absence of an object, whereas `undefined` is the absence of a defined value. Any variable initialized without a value will be `undefined`. Any expression that attempts access of a non-existent property on an object will result in `undefined`. A function without a `return` statement will return `undefined`.

The Number type is double-precision floating-point format. It allows both integers and decimals but has an integer range of <code>-2<sup>53</sup>-1</code> to <code>2<sup>53</sup>-1</code>. The BigInt type has no upper/lower limit on integers.

Strings can be created with single or double quotes, or backticks. Strings created with backticks are template strings, these can be multiline and support interpolation whereas normal strings can only be concatenated together using the plus (+) operator.

Symbols can be used as unique identifier keys in objects. The `Symbol.for` method creates/gets a global symbol.

Other than that, absolutely everything else in JavaScript is an object. An object is a set of key value pairs, where values can be any primitive type or an object (including functions, since functions are objects). Object keys are called properties. An object with a key holding a value that is another object allows for nested data structures:

```javascript 
const obj = { myKey: { thisIs: 'a nested object' } }
console.log(obj.myKey)
```

All JavaScript objects have prototypes. A prototype is an implicit reference to another object that is queried in property lookups. If an object doesn't have a particular property, the object's prototype is checked for that property. If the object's prototype does not have that property, the object's prototype's prototype is checked and so on. This is how inheritance in JavaScript works, JavaScript is a prototypal language. This will be explored in more detail later in this section.

#### Functions
Functions are first class citizens in JavaScript. A function is an object, and therefore a value that can be used like any other value.

For instance a function can be returned from a function:

```javascript
function factory () {
  return function doSomething () {}
}
```

A function can be passed to another function as an argument:

```javascript
setTimeout(function () { console.log('hello from the future') }, 100)
```

A function can be assigned to an object:

```javascript
const obj = { id: 999, fn: function () { console.log(this.id) } }
obj.fn() // prints 999
```

When a function is assigned to an object, when the implicit `this` keyword is accessed within that function it will refer to the object on which the function was called. This is why `obj.fn()` outputs `999`.

It's crucial to understand that `this` refers to the object on which the function was called, not the object which the function was assigned to:

```javascript
const obj = { id: 999, fn: function () { console.log(this.id) } }
const obj2 = { id: 2, fn: obj.fn }
obj2.fn() // prints 2
obj.fn() // prints 999
```

Both `obj` and `obj2` reference the same function but on each invocation the `this` context changes to the object on which that function was called.

Functions have a `call` method that can be used to set their `this` context:

```javascript
function fn() { console.log(this.id) }
const obj = { id: 999 }
const obj2 = { id: 2 }
fn.call(obj2) // prints 2
fn.call(obj) // prints 999
fn.call({id: ':)'}) // prints :)
```

In this case the `fn` function wasn't assigned to any of the objects, `this` was set dynamically via the `call` function.

There are also fat arrow functions, also known as lambda functions:

```javascript
const add = (a, b) => a + 1
const cube = (n) => {
  return Math.pow(n, 3)
}
```

When defined without curly braces, the expression following the fat arrow (`=>`) is the return value of the function. Lambda functions do not have their own `this` context, when `this` is referenced inside a function, it refers to the `this` of the nearest parent non-lambda function.

```javascript
function fn() {
  return (offset) => {
   console.log(this.id + offset)
  }
}
const obj = { id: 999 }
const offsetter = fn.call(obj)
offsetter(1) // prints 1000 (999 + 1)
```

While normal functions have a `prototype` property (which will be discussed in detail shortly), fat arrow functions do not:

```javascript
function normalFunction () { }
const fatArrowFunction = () => {}
console.log(typeof normalFunction.prototype) // prints 'object'
console.log(typeof fatArrowFunction.prototype) // prints 'undefined'
```

#### Prototypal Inheritance (Functional)

At a fundamental level, inheritance in JavaScript is achieved with a chain of prototypes. The approaches around creating prototype chains have evolved significantly over time as updates to the language have brought new features and syntax.

There are many approaches and variations to creating a prototype chain in JavaScript but we will explore three common approaches: 

- functional
- constructor functions
- class-syntax constructors.

For the purposes of these examples, we will be using a Wolf and Dog taxonomy, where a Wolf is a prototype of a Dog.

The functional approach to creating prototype chains is to use `Object.create`:

```javascript
const wolf = {
  howl: function () { console.log(this.name + ': awoooooooo') }
}

const dog = Object.create(wolf, {
  woof: { value: function() { console.log(this.name + ': woof') } }
})

const rufus = Object.create(dog, {
  name: {value: 'Rufus the dog'}
})

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"
```

The `wolf` object is a plain JavaScript object, created with the object literal syntax (i.e. using curly braces). The prototype of plain JavaScript objects is `Object.prototype`.

The `Object.create` function can take two arguments. The first argument is the desired prototype of the object being created.

When the `dog` object is instantiated, the first argument passed to `Object.create` is the `wolf` object. So `wolf` is the prototype of `dog`. When `rufus` is instantiated, the first argument to `Object.create` is `dog`.

To describe the full prototype chain:

- the prototype of `rufus` is `dog`
- the prototype of `dog` is `wolf`
- the prototype of `wolf` is `Object.prototype`

The second argument of `Object.create` is an optional Properties Descriptor object.

A Properties Descriptor object contains keys that will become the key name on the object being created. The values of these keys are Property Descriptor objects.

The Property Descriptor is a JavaScript object that describes the characteristics of the properties on another object.

The `Object.getOwnPropertyDescriptor` can be used to get a property descriptor on any object:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/5-f8.png').default} />
</p>

To describe the value of a property, the descriptor can either use `value` for a normal property value or `get` and `set` to create a property getter/setter. The other properties are associated meta-data for the property. The `writable` property determines whether the property can be reassigned, `enumerable` determines whether the property will be enumerated, in property iterator abstractions like `Object.keys` and `configurable` sets whether the property descriptor itself can be altered. All of these meta-data keys default to `false`.

In the case of `dog` and `rufus` the property descriptor only sets `value`, which adds a non-enumerable, non-writable, non-configurable property.

Property descriptors are not directly relevant to prototypal inheritance, but are part of the `Object.create` interface so understanding them is necessary. To learn more, read ["Description"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) section at the MDN web docs Mozilla website.

When the `dog` prototype object is created, the property descriptor is an object with a `woof` key. The `woof` key references an object with the `value` property set to a function. This will result in the creation of an object with a `woof` method.

So when `rufus.woof()` is called, the rufus object does not have a `woof` property itself. The runtime will then check if the prototype object of `rufus` has a `woof` property. The prototype of `rufus` is `dog` and it does have a `woof` property. The `dog.woof` function contains a reference to `this`. Typically, the `this` keyword refers to the object on which the method was called. Since `woof` was called on `rufus` and `rufus` has the `name` property which is `"Rufus the dog"`, the `this.name` property in the `woof` method has the value `"Rufus the dog"` so `console.log` is passed the string: `"Rufus the dog: woof"`.

Similarly when `rufus.howl` is called the JavaScript runtime performs the following steps:

- Check if `rufus` has a `howl` property; it does not
- Check if the prototype of `rufus` (which is `dog`) has a `howl` property; it does not
- Check if the prototype of `dog` (which is `wolf`) has a `howl` property; it does
- Execute the `howl` function setting `this` to `rufus`, so `this.name` will be `"Rufus the dog"`.

To complete the functional paradigm as it applies to prototypal inheritance, the creation of an instance of a dog can be genericized with a function:

```javascript
const wolf = {
  howl: function () { console.log(this.name + ': awoooooooo') }
}

const dog = Object.create(wolf, {
  woof: { value: function() { console.log(this.name + ': woof') } }
})

function createDog (name) {
  return Object.create(dog, {
    name: {value: name + ' the dog'}
  })
}

const rufus = createDog('Rufus')

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"
```

The prototype of an object can be inspected with `Object.getPrototypeOf`:

```javascript
console.log(Object.getPrototypeOf(rufus) === dog) //true
console.log(Object.getPrototypeOf(dog) === wolf) //true
```

#### Prototypal Inheritance (Constructor Functions)

Creating an object with a specific prototype object can also be achieved by calling a function with the `new` keyword. In legacy code bases this is a very common pattern, so it's worth understanding.

All functions have a `prototype` property. The Constructor approach to creating a prototype chain is to define properties on a function's prototype object and then call that function with `new`:

```javascript
function Wolf (name) {
  this.name = name
}

Wolf.prototype.howl = function () {
  console.log(this.name + ': awoooooooo')
}

function Dog (name) {
  Wolf.call(this, name + ' the dog')
}

function inherit (proto) {
  function ChainLink(){}
  ChainLink.prototype = proto
  return new ChainLink()
}

Dog.prototype = inherit(Wolf.prototype)

Dog.prototype.woof = function () {
  console.log(this.name + ': woof')
}

const rufus = new Dog('Rufus')

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"
```

This will setup the same prototype chain as in the functional Prototypal Inheritance example:

```javascript
console.log(Object.getPrototypeOf(rufus) === Dog.prototype) //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype) //true
```

The `Wolf` and `Dog` functions have capitalized first letters. Using PascaleCase for functions that are intended to be called with `new` is convention and recommended.

Note that a `howl` method was added to `Wolf.prototype` without ever instantiating an object and assigning it to `Wolf.prototype`. This is because it already existed, as every function always has a preexisting `prototype` object. However `Dog.prototype` was explicitly assigned, overwriting the previous `Dog.prototype` object.

To describe the full prototype chain:

- the prototype of `rufus` is `Dog.prototype`
- the prototype of `Dog.prototype` is `Wolf.prototype`
- the prototype of W`olf.prototype` is `Object.prototype`

When `new Dog('Rufus')` is called a new object is created (`rufus`). That new object is also the `this` object within the `Dog` constructor function. The `Dog` constructor function passes `this` to `Wolf.call`.

Using the `call` method on a function allows the `this` object of the function being called to be set via the first argument passed to `call`. So when `this` is passed to `Wolf.call`, the newly created object (which is ultimately assigned to `rufus`) is also referenced via the `this` object inside the `Wolf` constructor function. All subsequent arguments passed to `call` become the function arguments, so the `name` argument passed to `Wolf` is `"Rufus the dog"`. The `Wolf` constructor sets `this.name` to `"Rufus the dog"`, which means that ultimately `rufus.name` is set to `"Rufus the dog"`.

In legacy code bases, creating a prototype chain between `Dog` and `Wolf` for the purposes of inheritance may be performed many different ways. There was no standard or native approach to this before EcmaScript 5.

In the example code an `inherit` utility function is created, which uses an empty constructor function to create a new object with a prototype pointing, in this case, to `Wolf.prototype`.

In JavaScript runtimes that support EcmaScript 5+ the `Object.create` function could be used to the same effect:

```javascript
function Dog (name) {
  Wolf.call(this, name + ' the dog')
}

Dog.prototype = Object.create(Wolf.prototype)

Dog.prototype.woof = function () {
  console.log(this.name + ': woof')
}
```

Node.js has a utility function: `util.inherits` that is often used in code bases using constructor functions:

```javascript
const util = require('util')

function Dog (name) {
  Wolf.call(this, name + ' the dog')
}

Dog.prototype.woof = function () {
  console.log(this.name + ': woof')
}

util.inherits(Dog, Wolf)
```

In contemporary Node.js, `util.inherits` uses the EcmaScript 2015 (ES6) method `Object.setPrototypeOf` under the hood. It's essentially executing the following:

```javascript
Object.setPrototypeOf(Dog.prototype, Wolf.prototype)
```

This explicitly sets the prototype of `Dog.prototype` to `Wolf.prototype`, discarding whatever previous prototype it had.

#### Prototypal Inheritance (Class-Syntax Constructors)

Modern JavaScript (EcmaScript 2015+) has a `class` keyword. It's important that this isn't confused with the `class` keyword in other Classical OOP languages.

The `class` keyword is syntactic sugar that actually creates a function. Specifically it creates a function that should be called with `new`. It creates a Constructor Function, the very same Constructor Function discussed in the previous section.

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/5-f9.png').default} />
</p>

This is why it's deliberately referred to here as "Class-syntax Constructors", because the EcmaScript 2015 (ES6) `class` syntax does not in fact facilitate the creation of classes as they are traditionally understood in most other languages. It actually creates prototype chains to provide Prototypal Inheritance as opposed to Classical Inheritance.

The `class` syntax sugar does reduce boilerplate when creating a prototype chain:

```javascript
class Wolf {
  constructor (name) {
    this.name = name
  }
  howl () { console.log(this.name + ': awoooooooo') }
}

class Dog extends Wolf {
  constructor(name) {
    super(name + ' the dog')
  }
  woof () { console.log(this.name + ': woof') }
}

const rufus = new Dog('Rufus')

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"
```

This will setup the same prototype chain as in the Functional Prototypal Inheritance and the Function Constructors Prototypal Inheritance examples:

```javascript
console.log(Object.getPrototypeOf(rufus) === Dog.prototype) //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype) //true
```

To describe the full prototype chain:

- the prototype of `rufus` is `Dog.prototype`
- the prototype of `Dog.prototype` is `Wolf.prototype`
- the prototype of `Wolf.prototype` is `Object.prototype`.

The `extends` keyword makes prototypal inheritance a lot simpler. In the example code, `class Dog extends Wolf` will ensure that the prototype of `Dog.prototype` will be `Wolf.prototype`.

The `constructor` method in each `class` is the equivalent to the function body of a Constructor Function. So for instance, `function Wolf (name) { this.name = name }` is the same as `class Wolf { constructor (name) { this.name = name } }`.

The `super` keyword in the `Dog` class `constructor` method is a generic way to call the parent class constructor while setting the `this` keyword to the current `instance`. In the Constructor Function example `Wolf.call(this, name + ' the dog')` is equivalent to `super(name + ' the dog')` here.

Any methods other than `constructor` that are defined in the `class` are added to the `prototype` object of the function that the `class` syntax creates.

Let's take a look at the `Wolf` class again:

```javascript
class Wolf {
  constructor (name) {
    this.name = name
  }
  howl () { console.log(this.name + ': awoooooooo') }
}
```

This is desugared to:

```javascript
function Wolf (name) {
  this.name = name
}

Wolf.prototype.howl = function () {
 console.log(this.name + ': awoooooooo')
}
```

The class syntax based approach is the most recent addition to JavaScript when it comes to creating prototype chains, but is already widely used.

#### Closure Scope

When a function is created, an invisible object is also created, this is known as the closure scope. Parameters and variables created in the function are stored on this invisible object.

When a function is inside another function, it can access both its own closure scope, and the parent closure scope of the outer function:

```javascript
function outerFn () {
  var foo = true
  function print() { console.log(foo) }
  print() // prints true
  foo = false
  print() // prints false
}
outerFn()
```

The outer variable is accessed when the inner function is invoked, this is why the second `print` call outputs `false` after `foo` is updated to `false`.

If there is a naming collision then the reference to the nearest closure scope takes precedence:

```javascript
function outerFn () {
  var foo = true
  function print(foo) { console.log(foo) }
  print(1) // prints 1
  foo = false
  print(2) // prints 2
}
outerFn()
```

In this case the `foo` parameter of `print` overrides the `foo` variable in the `outerFn` function.

Closure scope cannot be accessed outside of a function:

```javascript
function outerFn () {
  var foo = true
}
outerFn()
console.log(foo) // will throw a ReferenceError
```

Since the invisible closure scope object cannot be accessed outside of a function, if a function returns a function, the returned function can provide controlled access to the parent closure scope. In essence, this provides encapsulation of private state:

```javascript
function init (type) {
  var id = 0
  return (name) => {
    id += 1
    return { id: id, type: type, name: name }
  }
}
const createUser = init('user')
const createBook = init('book')
const dave = createUser('Dave')
const annie = createUser('Annie')
const ncb = createBook('Node Cookbook')
console.log(dave) //prints {id: 1, type: 'user', name: 'Dave'}
console.log(annie) //prints {id: 2, type: 'user', name: 'Annie'}
console.log(ncb) //prints {id: 1, type: 'book', name: 'Node Cookbook'}
```

The `init` function sets an `id` variable in its scope, takes an argument called `type`, and then returns a function. The returned function has access to `type` and `id` because it has access to the parent closure scope. Note that the returned function in this case is a fat arrow function. Closure scope rules apply in exactly the same way to fat arrow functions.

The `init` function is called twice, and the resulting function is assigned to `createUser` and `createBook`. These two functions have access to two separate instances of the `init` functions closure scope. The `dave` and `annie` objects are instantiated by calling `createUser`.

The first call to `createUser` returns an object with an `id` of `1`. The `id` variable is initialized as `0` and it is incremented by `1` before the object is created and returned. The second call to `createUser` returns an object with `id` of `2`. This is because the first call of `createUser` already incremented `id` from `0` to `1`, so on the next invocation of `createUser` the `id` is increased from `1` to `2`. The only call to the `createBook` function however, returns an `id` of 1 (as opposed to 3), because `createBook` function is a different instance of the function returned from `init` and therefore accesses a separate instance of the `init` function's scope.

In the example all the state is returned from the returned function, but this pattern can be used for much more than that. For instance, the `init` function could provide validation on `type`, return different functions depending on what `type` is.

Another example of encapsulating state using closure scope would be to enclose a secret:

```javascript
function createSigner (secret) {
  const keypair = createKeypair(secret)
  return function (content) {
     return {
        signed: cryptoSign(content, keypair.privateKey),
        publicKey: keypair.publicKey
     }
  }
}
const sign = createSigner('super secret thing')
const signedContent = sign('sign me')
const moreSignedContent = sign('sign me as well')
```

Note, in this code `createKeypair` and `cryptoSign` are imaginary functions, these are purely for outlining the concept of the encapsulation of secrets.

Closure scope can also be used as an alternative to prototypal inheritance. The following example provides equivalent functionality and the same level of composability as the three prototypal inheritance examples but it doesn't use a prototype chain, nor does it rely the implicit `this` keyword:

```javascript
function wolf (name) {
  const howl = () => {
    console.log(name + ': awoooooooo')
  }
  return { howl: howl }
}

function dog (name) {
  name = name + ' the dog'
  const woof = () => { console.log(name + ': woof') }
  return {
    ...wolf(name),
    woof: woof
  }
}
const rufus = dog('Rufus')

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"
```

The three dots (`...`) in the return statement of `dog` is called the spread operator. The spread operator copies the properties from the object it proceeds into the object being created.

The `wolf` function returns an object with a `howl` function assigned to it. That object is then spread (using `...`) into the object returned from the `dog` function, so `howl` is copied into the object. The object returned from the `dog` function also has a `woof` function assigned.

There is no prototype chain being set up here, the prototype of `rufus` is `Object.prototype` and that's it. The state (`name`) is contained in closure scope and not exposed on the instantiated object, it's encapsulated as private state.

The `dog` function takes a `name` parameter, and immediately reassigns it to `name + ' the dog'`. Inside `dog` a `woof` function is created, where it references `name`. The `woof` function is returned from the `dog` function inside of an object, as the `woof` property. So when `rufus.woof()` is called the `woof` accesses `name` from its parent scope, that is, the closure scope of `dog`. The exact same thing happens in the `wolf` function. When `rufus.howl()` is called, the `howl` function accesses the `name` parameter in the scope of the `wolf` function.

The advantage of using closure scope to compose objects is it eliminates the complexity of prototypes, context (`this`) and the need to call a function with `new` – which when omitted can have unintended consequences. The downside is that where a prototype method is shared between multiple instances, an approach using closure scope requires that internal functions are created per instance. However, JavaScript engines use increasingly sophisticated optimization techniques internally, it's only important to be fast enough for any given use case and ergonomics and maintainability should take precedence over every changing performance characteristics in JavaScript engines. Therefore it's recommended to use function composition over prototypal inheritance and optimize at a later point if required.

### Lab Exercises

#### Lab 5.1 - Closure Scope

In the `labs-1` folder an `app.js` file contains the following:

```javascript
'use strict'
const sayHiTo = prefixer('Hello ')
const sayByeTo = prefixer('Goodbye ')
console.log(sayHiTo('Dave')) // prints 'Hello Dave'
console.log(sayHiTo('Annie')) // prints 'Hello Annie'
console.log(sayByeTo('Dave')) // prints 'Goodbye Dave'
```

Implement the `prefixer` function. When ready, open a terminal, navigate to the `labs-1` folder and run your program with `node app.js`. This program will not run correctly until the implementation is complete. When successfully implemented the output should be as follows:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/5-f10.png').default} />
</p>

#### Lab 5.2 - Prototypal Inheritance

The `labs-2` folder contains an `app.js` file with the following:

```javascript
const assert = require('assert')
// TODO:
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method
const felix = null //TODO replace null with instantiation of a cat
felix.meow() // prints Felix the cat: meow
felix.purr() // prints Felix the cat: prrr
felix.hiss() // prints Felix the cat: hsss
// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix)
const felixProtoProto = Object.getPrototypeOf(felixProto)
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto)
assert(Object.getOwnPropertyNames(felixProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(typeof felixProto.meow, 'function')
assert(typeof felixProtoProto.purr, 'function')
assert(typeof felixProtoProtoProto.hiss, 'function')
console.log('prototype checks passed!')
```

Using any of the approaches described create a prototypal inheritance chain and then create an
instance from that chain, and assign it to `felix` such that:

- The prototype of `felix` should be an object with a `meow` method
- The prototype of that object should be an object with a `purr` method
- The prototype of that object should be an object with a `hiss` method

When ready, open a terminal, navigate to the `labs-2` folder and run your implementation with `node app.js`. This program will not run correctly, it will throw exceptions, until the implementation is complete. If correctly implemented `app.js` should output: `prototype checks passed!`:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/5-f11.png').default} />
</p>

It's not necessary for `meow`, `purr` and `hiss` methods `console.log` exactly the same output, or even to output anything at all. Making Felix meow, purr and hiss is a nice-to-have. The most important thing is that the prototype chain is correctly set up.

## 6 - Packages and dependencies

### Introduction

#### Chapter Overview

The Node.js ecosystem of packages is very large. There are more than 1.8 million packages on the npm Registry. While many of these packages are frontend JavaScript libraries, whether a package is for Node or the frontend or both, the `npm` client and its associated manifest file format have been fundamental to enabling this growth. In this section we will explore how to create and manage packages with the `npm` client, the package manager which comes bundled with Node.js.

#### Learning Objectives

By the end of this chapter, you should be able to:

- Find out how to quickly generate a `package.json` file.
- Understand the difference between production and development dependencies.
- Grasp the Semver versioning format.
- Learn about Package Scripts.

### Packages & Dependencies

#### The `npm` Command

When Node.js is installed, the `node` binary and the `npm` executable are both made available to the Operating System that Node.js has been installed into. The `npm` command is a CLI tool that acts as a package manager for Node.js. By default it points to the npmjs.com registry, which is the default module registry.

The `npm help` command will print out a list of available commands: 

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f3.png').default} />
</p>

A quick help output for a particular command can be viewed using the `-h` flag with that command: 

```bash 
npm install -h
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f4.png').default} />
</p>

#### Initializing a Package

A package is a folder with a `package.json` file in it (and then some code). A Node.js application or service is also a package, so this could equally be titled "Initializing an App" or "Initializing a Service" or generically, "Initializing a Node.js Project".

The `npm init` command can be used to quickly create a `package.json` in whatever directory it's called in.

For this example a new folder called `my-package` is used, every command in this section is executed with the `my-package` folder as the current working directory.

Running `npm init` will start a CLI wizard that will ask some questions:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f5.png').default} />
</p>

For our purposes we can hit return for every one of the questions.

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f6.png').default} />
</p>

A shorter way to accept the default value for every question is to use the `-y` flag:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f7.png').default} />
</p>

The default fields in a generated `package.json` are:

- `name` – the name of the package
- `version` – the current version number of the package
- `description` – a package description, this is used for meta analysis in package registries
- `main` – the entry-point file to load when the package is loaded
- `scripts` – namespaced shell scripts, these will be discussed later in this section
- `keywords` – array of keywords, improves discoverability of a published package
- `author` – the package author
- `license` – the package license.

The `npm init` command can be run again in a folder with an existing `package.json` and any answers supplied will update the `package.json`. This can be useful when the package has also been initialized as a git project and has had a remote repo added. When run in a git repository, the `npm init -y` command will read the repositories remote URI from git and add it to `package.json`.

#### Installing Dependencies (1)

Once a folder has a `package.json` file, dependencies can be installed.

Let's install a logger: 

```bash 
npm install pino
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f8.png').default} />
</p>

Information about any ecosystem package can be found on [npmjs.com](https://www.npmjs.com/), for instance for information about the logger we installed see [Pino's Documentation](https://www.npmjs.com/package/pino).

Once the dependency is installed the `package.json` file will have the following content:

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "pino": "^7.6.2"
  }
}
```

Running the `npm install` command has modified the `package.json` file by adding a `"dependencies"` field:

```json
"dependencies": {
  "pino": "^7.6.2"
}
```

The `"dependencies"` field contains an object, the keys of the object contain dependency namespaces, the values in the object contain the Semver range version number for that dependency. We will explore the Semver format later in this section.

Running `npm install pino` without specifying a version will install the latest version of the package, so the version number may vary when following these steps. If the installed version number doesn't match up, this is fine as long as the major number (the first number) is 7. If a new major release of `pino` is available, we can instead execute `npm install pino@7` to ensure we're using the same major version.

In addition, a `node_modules` folder and a `package-lock.json` file will have been added into the `my-package` folder:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f9.png').default} />
</p>

The `package-lock.json` file contains a map of all dependencies with their exact versions, npm will use this file when installing in future, so that the exact same dependencies are installed. As a default setting, this is somewhat limiting depending on context and goals. When creating applications, it makes sense to introduce a `package-lock.json` once the project is nearing release. Prior to that, or when developing modules it makes more sense to allow npm to pull in the latest dependencies (depending on how they're described in the `package.json`, more on this later) so that the project naturally uses the latest dependencies during development. Automatic `package-lock.json` generation can be turned off with the following command:

```bash
node -e "fs.appendFileSync(path.join(os.homedir(), '.npmrc'), '\npackage-lock=false\n')"
```

This appends `package-lock=false` to the `.npmrc` file in the user home directory. To manually generate a `package-lock.json` file for a project the `--package-lock` flag can be used when installing: `npm install --package-lock`. Whether to use the default package-lock behavior ultimately depends on context and preference, it's important to understand that dependencies have to be manually upgraded (even for patch and minor) if a `package-lock.json` file is present.

The `node_modules` folder contains the logger package, along with all the packages in its dependency tree:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f10.png').default} />
</p>

The `npm install` command uses a maximally flat strategy where all packages in a dependency tree placed at the top level of the `node_modules` folder unless there are two different versions of the same package in the dependency tree, in which case the packages may be stored in a nested `node_modules` folder.

The `npm ls` command can be used to describe the dependency tree of a package, although as of version 8 of npm the `--depth` flag must be set to a high number to output more than top-level dependencies:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f11.png').default} />
</p>

#### Installing Dependencies (2)

Notice how the `flatstr` sub-dependency occurs twice in the output. The second occurrence has the word `deduped` next to it. The `flatstr` module is a dependency of both `pino` and its direct dependency `sonic-boom`, but both `pino` and sonic-boom rely on the same version of `flatstr`. Which allows npm to simply place a single `flatstr` package in the `node_modules` folder.

Now that we have the dependency we can use it:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f12.png').default} />
</p>

Loading dependencies will be covered comprehensively in Section 7: "Node's Module System".

A primary reason for adding the installed dependency to the `package.json` file is to make the `node_modules` folder disposable.

Let's delete the `node_modules` folder:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f13.png').default} />
</p>

If we run `npm ls` it won't print out the same tree any more because the dependency isn't installed, but it will warn that the dependency should be installed:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f14.png').default} />
</p>

To install the dependencies in the `package.json` file, run `npm install` without specifying a dependency namespace:

```bash 
npm install
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f15.png').default} />
</p>

Running `npm ls` now will show that the logger has been installed again:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f16.png').default} />
</p>

The `node_modules` folder should not be checked into git, the `package.json` should be the source of truth.

#### Development Dependencies (1)

Running `npm install` without any flags will automatically save the dependency to the `package.json` file's "`dependencies`" field. Not all dependencies are required for production, some are tools to support the development process. These types of dependencies are called development dependencies.

An important characteristic of development dependencies is that only top level development dependencies are installed. The development dependencies of sub-dependencies will not be installed.

Dependencies and development dependencies can be viewed in the Dependency tab of any given package on npmjs.com, for `pino` that can be accessed at [Pino's Dependencies Documentation](https://www.npmjs.com/package/pino?activeTab=dependencies).

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f17.png').default} />
</p>

When we run `npm ls --depth=999` we only see the production dependencies in the tree, none of the development dependencies are installed, because the development dependencies of installed packages are never installed.

```bash 
npm ls --depth=999
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f18.png').default} />
</p>

Let's install a linter as a development dependency into `my-package`:

```bash 
npm install --save-dev standard
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f19.png').default} />
</p>

Now let's take a look at the `package.json` file:

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "pino": "^7.6.2"
  },
  "devDependencies": {
    "standard": "^16.0.4"
  }
}
```

#### Development Dependencies (2)

In addition to the "`dependencies`" field there is now a "`devDependencies`" field.

Running `npm ls --depth=999` now reveals a much larger dependency tree:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f20.png').default} />
</p>

When deploying a service or application for production use, we don't want to install any dependencies that aren't needed in production.

A `--production` flag can be used with `npm install` so that development dependencies are ignored.

Let's remove the `node_modules` folder:

```bash 
node -e "fs.rmSync('node_modules', {recursive: true})"
```

Node is being used here to remove the `node_modules` folder because this command is platform independent, but we can use any approach to remove the folder as desired.

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f21.png').default} />
</p>

Now let's run `npm install` with the `--production` flag:

```bash
npm install --production
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f22.png').default} />
</p>

While `pino` and `standard` are both dependencies of `my-package`, only `pino` will be installed when `--production` is used because `standard` is specified as a development dependency in the `package.json`. This can be verified:

```bash 
npm ls --depth=999
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f23.png').default} />
</p>

The error message is something of a misdirect, the development dependency is deliberately omitted in this scenario.

#### Understanding Semver

Let's look at the dependencies in the `package.json` file:

```json
"dependencies": {
  "pino": "^7.6.2"
},
"devDependencies": {
  "standard": "^16.0.4"
}
```

We've installed two dependencies, `pino` at a Semver range of `^7.6.2` and `standard` at a Semver range of `^16.0.4`. Our package version number is the Semver version `1.0.0`. There is a distinction between the Semver format and a Semver range.

Understanding the Semver format is crucial to managing dependencies. A Semver is fundamentally three numbers separated by dots. The reason a version number is updated is because a change was made to the package. The three numbers separated by dots represent different types of change.

- **Major:** MAJOR is the left-most number. It means that the change breaks an API or a behavior.
- **Minor:** MINOR is the middle number. It means that the package has been extended in some way, for instance a new method, but it's fully backwards compatible. Upgrading to a minor should not break the package.
- **Patch:** PATCH is the right-most number. It means that there has been a bug fix.

This is the core of the Semver format, but there are extensions which won't be covered here, for more information on Semver see [Semver's website](https://semver.org/).

A Semver range allows for a flexible versioning strategy. There are many ways to define a Semver range.

One way is to use the character "`x`" in any of the `MAJOR.MINOR.PATCH` positions, for example `1.2.x` will match all PATCH numbers. `1.x.x` will match all MINOR and PATCH numbers.

By default `npm install` prefixes the version number of a package with a caret (`^`) when installing a new dependency and saving it to the `package.json` file.

Our specified `pino` version in the `package.json` file is `^7.6.2`. This is another way to specify a Semver range: by prefixing the version with a caret (`^`). Using a caret on version numbers is basically the same as using an `x` in the MINOR and PATCH positions, so `^7.6.2` is the same as `7.x.x`. However there are exceptions when using `0`, for example `^0.0.0` is not the same as `0.x.x`, see the ["Caret Ranges `^1.2.3` `^0.2.5` `^0.0.4`"](https://github.com/npm/node-semver#caret-ranges-123-025-004) section of npmjs Documentation. For non-zero MAJOR numbers, `^MAJOR.MINOR.PATCH` is interpreted as `MAJOR.x.x`.

The complete syntax for defining ranges is verbose, see semver's website for full details, and try out [npm semver calculator](https://semver.npmjs.com/) for an interactive visualization.

#### Package Scripts (1)

The "`scripts`" field in `package.json` can be used to define aliases for shell commands that are relevant to a Node.js project.

To demonstrate the concept, let's add a lint script. Currently the `package.json` "`scripts`" field looks like so:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

Let's update it to the following:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "standard"
},
```

Recall that we have a development dependency installed called standard. This is a code linter, see ["JavaScript Standard Style"](https://standardjs.com/) article for more details.

Packages can assign a "`bin`" field in their `package.json`, which will associate a namespace with a Node program script within that package. In the case of `standard`, it associates a command named `standard` with a Node program script that performs linting. The associated commands of all installed packages are available within any defined `package.json` scripts.

We need some code to lint. Let's add a file to `my-package` called `index.js` with the following contents:

```javascript
'use strict';
console.log('my-package started');
process.stdin.resume();
```

Let's make sure all dependencies are installed before we try out the "lint" script by running.

```bash 
npm install
```

Next, to execute the script use `npm run`:

```bash 
npm run lint
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f24.png').default} />
</p>

We have some lint errors. The `standard` linter has a `--fix` flag that we can use to autocorrect the lint errors. We can use a double dash (`--`) to pass flags via `npm run` to the aliased command:

```bash 
npm run lint -- --fix
```

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f25.png').default} />
</p>

#### Package Scripts (2)

As a result the `index.js` file was altered according to the lint rules, and saved.

There are two package scripts namespaces that have dedicated `npm` commands: `npm test` and `npm start`.

The `package.json` already has a "`test`" field, let's run `npm test`:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f26.png').default} />
</p>

The "`test`" field in the `package.json` scripts is as follows:

```bash 
"test": "echo \"Error: no test specified\" && exit 1"
```

The output is as expected. Testing will be explored in full in Section 16 - "Writing Unit Tests".

Note that we did not have to use `npm run test`, the `npm test` command is an alias for `npm run test`. This aliasing only applies to `test` and `start`. Our `npm run lint` command cannot be executed using `npm lint` for example.

Let's add one more script, a "`start`" script, edit the `package.json` scripts field to match the following:

```json
"scripts": {
  "start": "node index.js",
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "standard"
},
```

Now let's run `npm start`:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f27.png').default} />
</p>

To exit the process, hit CTRL-C.

### Lab Exercises

#### Lab 6.1 - Install a Development Dependency

The `labs-1` folder has a `package.json` file in it. Install [`nonsynchronous`](https://www.npmjs.com/package/nonsynchronous) as a development dependency. Run `npm test` in the `labs-1` folder to check that the task has been completed:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f1.png').default} />
</p>

If the output says "passed" then the task was completed correctly.

#### Lab 6.2 - Install a Dependency Using a Semver Range
The `labs-2` folder contains a `package.json` file. Install the following dependencies at the specified version ranges, and ensure that those ranges are correctly specified in the `package.json` file:

- Install `fastify` at greater than or equal to `2.0.0`, while accepting all future MINOR and
PATCH versions
- Install `rfdc` at exactly version `1.1.3`

Run `npm install` to install the development dependency required to validate this exercise, and then run `npm test` in the `labs-2` folder to check that the task has been completed:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/6-f2.png').default} />
</p>

If the output says "passed" then the task was completed correctly.

## 7 - Node's module systems

### Lab Exercises

#### Lab 7.1 - Creating a Module

The `labs-1` folder has an `index.js` file. Write a function that takes two numbers and adds them together, and then export that function from the `index.js` file. Run `npm test` to check whether `index.js` was correctly implemented. If it was the output should contain `"passed!"`:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/7-f1.png').default} />
</p>

By default, the `labs-1` folder is set up as a CJS project, but if desired, the `package.json` can be modified to convert to an ESM module (by either setting the `type` field to `module` or renaming `index.js` to `index.mjs` and setting the `type` field accordingly). The exercise can be completed either with the default CJS or with ESM or both.

#### Lab 7.2 - Loading a Module

The `labs-2` is a sibling to `labs-1`. In the index.js file of `labs-2`, load the module that was created in the previous lab task and use that module to `console.log` the sum of `19` and `23`.

The `labs-2` folder is set up as a CJS project. Recall that ESM can load CJS but CJS cannot load ESM during initialization. If the prior exercise was completed as an ESM module it *cannot* be synchronously loaded into a CJS module. Therefore if the prior exercise was completed in the form of an ESM module, this exercise must also be similarly converted to ESM.

When `index.js` is executed with `node` it should output `42`:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/7-f2.png').default} />
</p>

Run `npm test` to check whether `index.js` was correctly implemented. If it was, the output should contain "passed!":

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/7-f3.png').default} />
</p>

## 8 - Asynchronous control flow

### Lab Exercises

#### Lab 8.1 - Parallel Execution

In the `labs-1` folder, the `parallel.js` file contains the following:

```javascript
const print = (err, contents) => {
  if (err) console.error(err)
  else console.log(contents)
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}
```

The `opA` function must be called before `opB`, and `opB` must be called before `opC`.

Call functions in `parallel.js` in such a way that `C` then `B` then `A` is printed out.

#### Lab 8.2 - Serial Execution

In the `labs-2` folder, the `serial.js` file contains the following:

```javascript
const { promisify } = require('util')

const print = (err, contents) => {
  if (err) console.error(err)
  else console.log(contents)
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}
```

Call the functions in such a way that `A` then `B` then `C` is printed out. Remember `promisify` can be used to convert a callback API to a promise-based API. The `promisify` function is included at the top of `serial.js` in case a promise based solution is prefered.

## 9 - Node's event system

### Lab Exercises

#### Lab 9.1 - Single Use Listener

The `labs-1` `index.js` file contains the following code:

```javascript
'use strict'
const assert = require('assert')
const { EventEmitter } = require('events')

const ee = new EventEmitter()
let count = 0
setInterval(() => {
  ee.emit('tick')
}, 100)

function listener() {
  count++
  setTimeout(() => {
    assert.equal(count, 1)
    assert.equal(this, ee)
    console.log('passed!')
  }, 250)
}
```

Register the `listener` function with the `ee` event emitter in such a way that the `listener` function is only called a single time. If implemented correctly, the program should print out `passed!`:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/9-f1.png').default} />
</p>

#### Lab 9.2 - Implementing a Timeout Error

The `labs-2` folder has an `index.js` file containing the following:

```javascript
'use strict'
const { EventEmitter } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()

ee.emit('error', Error('timeout'))
```

Currently the process crashes:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/9-f2.png').default} />
</p>

Without removing any of the existing code, and without using a `try/catch` block add some code which stops the process from crashing. When implemented correctly the process should output `passed!`.

## 10 - Handling errors

### Lab Exercises

#### Lab 10.1 - Synchronous Error Handling

The native URL constructor can be used to parse URLs, it's been wrapped into a function called
`parseURL`:

```javascript
function parseURL (str) {
  const parsed = new URL(str)
  return parsed
}
```

If `URL` is passed a unparsable URL string it will throw, so calling `parseURL('foo')` will result in an exception:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/10-f1.png').default} />
</p>

The `labs-1` folder contains an `index.js` file with the following content:

```javascript
'use strict'
const assert = require('assert')

function parseUrl(str) {
  const parsed = new URL(str)
  return parsed
}

assert.doesNotThrow(() => { parseUrl('invalid-url') })
assert.equal(parseUrl('invalid-url'), null)
assert.deepEqual(
  parseUrl('http://example.com'),
  new URL('http://example.com')
) 

console.log('passed!')
```

Modify the `parseURL` function body such that instead of throwing an error, it returns `null` when the URL is invalid. Use the fact that URL will throw when given invalid input to determine whether or not to return `null` or a parsed object.

Once implemented, execute the `index.js` file with node, if the output says `passed!` then the exercise was completed successfully:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/10-f2.png').default} />
</p>

#### Lab 10.2 - Async Function Error Handling

The following code loads the `fs` module and uses its promises interface to read a file based on a file path passed to a `read` function:

```javascript
const fs = require('fs')

async function read(file) {
  const content = await fs.promises.readFile(file)
  return content
}
```

The promise returned from `fs.promises.readFile` may reject for a variety of reasons, for instance if the specified file path doesn't exist or the process doesn't have permissions to access it. In this scenario, we don't care what the reason for failure is, we just want to propagate a single error instance from the native `Error` constructor with the message 'failed to read'.

The `labs-2` `index.js` file contains the following code:

```javascript
'use strict'
const fs = require('fs')
const assert = require('assert')

async function read(file) {
  const content = await fs.promises.readFile(file)
  return content
}

async function check() {
  await assert.rejects(
    read('not-a-valid-filepath'),
    new Error('failed to read')
  ) 
  assert.deepEqual(
    await read(__filename),
    fs.readFileSync(__filename)
  ) 
  console.log('passed!')
}

check()
```

Modify the body of the `read` function so that any possible rejection by the promise returned from the `fs.promises.readFile` call results in the `read` function rejecting with a `new Error('failed to read')` error. If implemented correctly, when `node index.js` is executed the output should be `passed!`:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnad/10-f3.png').default} />
</p>

## 11 - Using buffers

### Lab Exercises

#### Lab 11.1 - Create a Buffer Safely

The `index.js` file in the `lab-1` folder contains the following:

```javascript
'use strict'
const assert = require('assert')
const buffer = Buffer.allocUnsafe(4096)
console.log(buffer)

for (const byte of buffer) assert.equal(byte, 0)
console.log('passed!')
```

Alter the code so that the `buffer` is safely allocated. Do not explicitly fill the buffer with anything. If the process prints the buffer and then logs `passed!`, the exercise was correctly completed.

#### Lab 11.2 - Convert a String to base64 Encoded String by Using a Buffer

The `labs-2` `index.js` has the following code:

```javascript
'use strict'
const assert = require('assert')
const str = 'buffers are neat'
const base64 = '' // convert str to base64

console.log(base64)

assert.equal(base64, Buffer.from([
  89, 110, 86, 109, 90, 109, 86, 121, 99,
  121, 66, 104, 99, 109, 85, 103, 98, 109,
  86, 104, 100, 65, 61, 61]))

console.log('passed!')
```

Using the `Buffer` API in some way, edit the code so that the `base64` constant contains a base64 representation of the `str` constant.

If the process prints the base64 string and then logs `passed!`, the exercise was correctly completed.

## 12 - Working with streams

### Lab Exercises

#### Lab 12.1 - Piping

The `labs-1` folder has an `index.js` file containing the following:

```javascript
'use strict'
const { Readable, Writable } = require('stream')
const assert = require('assert')
const createWritable = () => {
  const sink = []
  let piped = false
  setImmediate(() => {
    assert.strictEqual(piped, true, 'use the pipe method')
    assert.deepStrictEqual(sink, ['a', 'b', 'c'])
  })
  const writable = new Writable({
    decodeStrings: false,
    write(chunk, enc, cb) {
      sink.push(chunk)
      cb()
    },
    final() {
      console.log('passed!')
    }
  })
  writable.once('pipe', () => {
    piped = true
  })
  return writable
}

const readable = Readable.from(['a', 'b', 'c'])
const writable = createWritable()
// TODO - send all data from readable to writable:
```

Use the appropriate method to make sure that all data in the `readable` stream is automatically sent to the `writable` stream.

If successfully implemented the process will output: `passed!`

#### Lab 12.2 - Create a Transform Stream

The `labs-2` folder has an `index.js` file containing the following:

```javascript
'use strict'
const { Readable, Writable, Transform, PassThrough, pipeline } = require('stream')
const assert = require('assert')
const createWritable = () => {
  const sink = []
  const writable = new Writable({
    write(chunk, enc, cb) {
      sink.push(chunk.toString())
      cb()
    }
  })
  writable.sink = sink
  return writable
}
const readable = Readable.from(['a', 'b', 'c'])
const writable = createWritable()

// TODO: replace the pass through stream
// with a transform stream that uppercases
// incoming characters
const transform = new PassThrough()

pipeline(readable, transform, writable, (err) => {
  assert.ifError(err)
  assert.deepStrictEqual(writable.sink, ['A', 'B', 'C'])
  console.log('passed!')
})
```

Replace the line that states const `transform = new PassThrough()` so that `transform` is assigned to a transform stream that upper cases any incoming chunks. If successfully implemented the process will output: `passed!`

## 13 - Interacting with the file system

### Lab Exercises

#### Lab 13.1 - Read Directory and Write File

The `labs-1` folder contains an `index.js` file containing the following:

```javascript
'use strict'
const assert = require('assert')
const { join } = require('path')
const fs = require('fs')
const project = join(__dirname, 'project')
try { fs.rmdirSync(project, { recursive: true }) } catch (err) { }
const files = Array.from(Array(5), () => {
  return join(project, Math.random().toString(36).slice(2))
})
fs.mkdirSync(project)
for (const f of files) fs.closeSync(fs.openSync(f, 'w'))

const out = join(__dirname, 'out.txt')

function exercise() {
  // TODO read the files in the project folder
  // and write them to the out.txt file
}

exercise()
assert(fs.readFileSync(out).toString(), files.toString())
console.log('passed!')
```

The above code will generate a project folder and add five files to it with pseudo-randomly generated filenames.

Complete the function named `exercise` so that all the files in the `project` folder, as stored in the `project` constant, are written to the `out.txt` file as stored in the out constant. Only the file names should be stored, not the full file paths, and file names should be comma separated. 

For instance, given a `project` folder with the following files:

- `0p2ly0dluiw`
- `2ftl32u5zu5`
- `8t4iilscua6`
- `90370mamnse`
- `zfw8w7f8sm8`

The `out.txt` should then contain:

`0p2ly0dluiw`, `2ftl32u5zu5`, `8t4iilscua6`, `90370mamnse`, `zfw8w7f8sm8`

If successfully implemented, the process will output: `passed!`.

#### Lab 13.2 - Watching

The `labs-2` folder contains an `index.js` file with the following:

```javascript
'use strict'
const assert = require('assert')
const { join } = require('path')
const fs = require('fs')
const { promisify } = require('util')
const timeout = promisify(setTimeout)
const project = join(__dirname, 'project')
try { fs.rmdirSync(project, { recursive: true }) } catch (err) {
  console.error(err)
}
fs.mkdirSync(project)

let answer = ''

async function writer() {
  const { open, chmod, mkdir } = fs.promises
  const pre = join(project, Math.random().toString(36).slice(2))
  const handle = await open(pre, 'w')
  await handle.close()
  await timeout(500)
  exercise(project)
  const file = join(project, Math.random().toString(36).slice(2))
  const dir = join(project, Math.random().toString(36).slice(2))
  const add = await open(file, 'w')
  await add.close()
  await mkdir(dir)
  await chmod(pre, 0o444)
  await timeout(500)
  assert.strictEqual(
    answer,
    file,
    'answer should be the file (not folder) which was added'
  )
  console.log('passed!')
  process.exit()
}

writer().catch((err) => {
  console.error(err)
  process.exit(1)
})

function exercise(project) {
  const files = new Set(fs.readdirSync(project))
  fs.watch(project, (evt, filename) => {
    try {
      const filepath = join(project, filename)
      const stat = fs.statSync(filepath)

      // TODO - only set the answer variable if the filepath
      // is both newly created AND does not point to a directory
      
      answer = filepath
    } catch (err) {
    }
  })
}
```

When executed (e.g. using `node index.js`) this code will create a folder named `project` (removing it first if it already exists and then recreating it), and then perform some file system manipulations within the `project` folder.

The `writer` function will create a file before calling the `exercise` function, to simulate a pre-existing file, The `exercise` function will then be called which sets up a file watcher with `fs.watch`. The `writer` function then proceeds to create a file, a directory and changes the permissions of the previously existing file. These changes will trigger the listener function passed as the second argument to `fs.watch`.

The goal is to ensure that the `answer` variable is set to the newly created file. So when a directory is added, the `answer` variable should not be set to the directory path. When the preexisting files status is updated via a permissions change, the `answer` variable should not be set to that preexisting file.

If implemented correctly the process will output: `passed!`.

## 14 - Process and operating system

### Lab Exercises

#### Lab 14.1 - Identifying OS and Exiting

The `labs-1` folder contains an empty `index.js` file and a `test.js` file.

The `test.js` file contains the following:

```javascript
'use strict'
const { spawnSync } = require('child_process')
const assert = require('assert')
const { status, stdout } = spawnSync(process.argv[0], [__dirname])

assert.notStrictEqual(status, 0, 'must exit with a non-zero code')
assert.match(
  stdout.toString(),
  /^(d|w|l|aix|.+bsd|sunos|gnu)/i,
  'must output OS identifier'
) 

console.log('passed!')
```

In `index.js` use `console.log` to output the operating system identifier. Ensure the process exits with a non-zero exit code.

Run `node test.js` to verify whether the task was successfully completed, if it was `node test.js` will output `passed!`.

#### Lab 14.2 - OS Uptime and Memory

The `labs-2` folder contains an `index.js` file and a `test.js` file. The `index.js` file contains the following:

```javascript
'use strict'
setTimeout(() => {
  console.log() // TODO output uptime of process
  console.log() // TODO output uptime of OS
  console.log() // TODO output total system memory
  console.log() // TODO output total heap memory
}, 1000)
```

Follow the TODO comments for each of the `console.log` statements.

To verify the implementation, the `test.js` file contains the following:

```javascript
'use strict'
const assert = require('assert')
const os = require('os')
const { runInThisContext } = require('vm')
const run = (s) => runInThisContext(Buffer.from(s, 'base64'))
const { log } = console

const queue = [
  (line) => assert.strictEqual(
    Math.floor(line),
    1,
    'first log line should be the uptime of the process'
  ),
  (line) => assert.strictEqual(
    line,
    run('KG9zKSA9PiBvcy51cHRpbWUoKQ==')(os),
    'second log line should be the uptime of the OS'
  ),
  (line) => assert.strictEqual(
    line,
    run('KG9zKSA9PiBvcy50b3RhbG1lbSgp')(os),
    'third line should be total system memory'
  ),
  (line) => assert.strictEqual(
    line,
    run('cHJvY2Vzcy5tZW1vcnlVc2FnZSgpLmhlYXBUb3RhbA=='),
    'fourth line should be total process memory'
  )
]

console.log = (line) => {
  queue.shift()(line)
  if (queue.length === 0) {
    console.log = log
    console.log('passed!')
  }
}

require('.')
```

Run `node test.js` to verify whether the task was successfully completed, if it was `node test.js` will output `passed!`.


## 15 - Creating child processes

### Lab Exercises

#### Lab 15.1 - Set Child Process Environment Variable

The `labs-1` folder contains an `index.js`, a `child.js` file and a `test.js` file.

The `child.js` file contains the following:

```javascript
'use strict'
const assert = require('assert')
const clean = (env) => Object.fromEntries(
  Object.entries(env).filter(([k]) => !/^(_.*|pwd|shlvl)/i.test(k))
)
const env = clean(process.env)

assert.strictEqual(env.MY_ENV_VAR, 'is set')
assert.strictEqual(
  Object.keys(env).length,
  1,
  'child process should have only one env var'
)
console.log('passed!')
```

The code in `child.js` expects that there will be only one environment variable named `MY_ENV_VAR` to have the value `'is set'`. If this is not the case the `assert.strictEqual` method will throw an assertion error. In certain scenarios some extra environment variables are added to child processes, these are stripped so that there should only ever be one environment variable set in `child.js`, which is the `MY_ENV_VAR` environment variable.

The `index.js` file has the following contents:

```javascript
'use strict'
const assert = require('assert')
function exercise(myEnvVar) {
  // TODO return a child process with
  // a single environment variable set
  // named MY_ENV_VAR. The MY_ENV_VAR
  // environment variable's value should
  // be the value of the myEnvVar parameter
  // passed to this exercise function
}
```

Using any `child_process` method except `execFile` and `execFileSync`, complete the exercise function so that it returns a child process that executes the `child.js` file with node.

To check the exercise implementation, run `node test.js`, if successful the process will output: `passed!`. If unsuccessful, various assertion error messages will be output to help provide hints.

One very useful hint up front is: use `process.argv[0]` to reference the `node` executable instead of just passing `'node'` as string to the `child_process` method.

The contents of the `test.js` file is esoteric, and the need to understand the code is minimal, however the contents of `test.js` are shown here for completeness:

```javascript
'use strict'
const assert = require('assert')
const { equal } = assert.strict
const exercise = require('.')

let sp = null

try {
  sp = exercise('is set')
  assert(sp, 'exercise function should return a child process instance')
  if (Buffer.isBuffer(sp)) {
    equal(sp.toString().trim(), 'passed!', 'child process misconfigured')
    process.stdout.write(sp)
    return
  }
} catch (err) {
  const { status } = err
  if (status == null) throw err
  equal(status, 0, 'exit code should be 0')
  return
}

if (!sp.on) {
  const { stdout, stderr } = sp
  if (stderr.length > 0) process.stderr.write(stderr)
  if (stdout.length > 0) process.stdout.write(stdout)
  equal(sp.status, 0, 'exit code should be 0')
  equal(stdout.toString().trim(), 'passed!', 'child process misconfigured')
  return
}

let out = ''
if (sp.stderr) sp.stderr.pipe(process.stderr)
if (sp.stdout) {
  sp.stdout.once('data', (data) => { out = data })
  sp.stdout.pipe(process.stdout)
} else {
  // stdio may be misconfigured, or fork method may be used,
  // allow benefit of the doubt since in either case
  // exit code check will still fail:
  out = 'passed!'
} const timeout =
  setTimeout(() => {
    equal(out.toString().trim(), 'passed!', 'child process misconfigured')
  }, 1000)

sp.once('exit', (status) => {
  equal(status, 0, 'exit code should be 0')
  equal(out.toString().trim(), 'passed!', 'child process misconfigured')
  clearTimeout(timeout)
})
```

The `test.js` file allows for alternative approaches, once the `exercise` function has been completed with one `child_process` method, re-attempt the exercise with a different `child_process` method.

#### Lab 15.2 - STDIO Redirection

The `labs-2` folder `index.js` file contains the following:

```javascript
'use strict'

const { spawn } = require('child_process')

function exercise(command, args) {
  return spawn(command, args)
}

module.exports = exercise
```

Complete the `exercise` function so that the returned child process:

- Has no ability to read STDIN.
- Redirects its STDOUT to the parent process' STDOUT.
- Exposes STDERR as a readable stream.

The `labs-2` folder also contains a `test.js` file.

To verify that the exercise was completed successfully run `node test.js`, if the implementation is correct the process will output: `passed!`.

It is unnecessary to understand the contents of the `test.js` file, but the contents of it are as follows:

```javascript
'use strict'
const exercise = require('.')
const cp = require('child_process')
const assert = require('assert')
const { equal } = assert.strict
const { SCENARIO } = process.env
const [node] = process.argv

const stdoutCheck = () => { exercise(node, [`-p`, `'test'`]) }
const stderrCheck = () => {
  const sp = exercise(node, [`-e`, `console.error('test')`])
  if (sp.stderr) sp.stderr.pipe(process.stderr)
}
const stdinCheck = () => {
  exercise(node, [`-e`, `
      process.stdout.write(Buffer.from([0]))
      process.stdin.pipe(process.stdout)
      setTimeout(() => {
        process.stdout.write(Buffer.from([1]))
      }, 100)
  `])
}

function test(scenario = 0) {

  switch (scenario) {
    case 1: return stdoutCheck()
    case 2: return stderrCheck()
    case 3: return stdinCheck()
  }

  const s1 = cp.spawnSync(node, [__filename], {
    env: { SCENARIO: 1 },
  })

  equal(s1.stdout.toString().trim(), 'test', 'should inherit stdout')

  const s2 = cp.spawnSync(node, [__filename], {
    env: { SCENARIO: 2 },
  })

  equal(s2.stderr.toString().trim(), 'test', 'should expose stderr stream')


  const s3 = cp.spawnSync(node, [__filename], {
    input: 'some input',
    env: { SCENARIO: 3 },
  })

  equal(s3.stdout.length, 2, 'stdin should be ignored')

  console.log('passed!')

}

test(Number(SCENARIO))
```

## 16 - Writing unit tests

### Lab Exercises

#### Lab 16.1 - Test a Sync API

The `labs-1` folder contains a `package.json` file and an `uppercase.js` file.

The `package.json` file contains the following:

```json
{
  "name": "labs-1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "UNLICENSED"
}
```

The `uppercase.js` file contains the following:

```javascript
'use strict'
function uppercase (str) {
  if (typeof str !== 'string') throw Error('input must be a string')
  return str.toUpperCase()
}

module.exports = uppercase
```

Write tests for the `uppercase.js` file. Ensure that when `npm test` is executed with the `labs-1` folder as the current working directory the `uppercase.js` file is fully tested.

Any additional dependencies, such as a test harness, may be additionally installed.

Also in the `labs-1` folder is a `validate.js` file. The implementation can be checked with `node validate.js`. The implementation is successful if the final output of `node validate.js` is `passed!`.

For completeness the following is the `validate.js` file contains the following, but it is not necessary to understand it for the purposes of this exercise:

```javascript
'use strict'
const assert = require('assert').strict
const { spawnSync } = require('child_process')
const { writeFileSync } = require('fs')
const uppercase = require.resolve('./uppercase')
const uppercaseCode = Buffer.from('2775736520737472696374270a66756e6374696f6e20757070657263617365202873747229207b0a202069662028747970656f662073747220213d3d2027737472696e672729207468726f77204572726f722827696e707574206d757374206265206120737472696e6727290a202072657475726e207374722e746f55707065724361736528290a7d0a0a6d6f64756c652e6578706f727473203d20757070657263617365', 'hex')

try {
  {
    writeFileSync(uppercase, uppercaseCode)

    const sp = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['test'], {
      stdio: 'ignore'
    })

    assert.equal(sp.status, 0, 'tests should be successful (is package.json test script configured?)')
  }

  {
    const badOutput = `'use strict'
    function uppercase (str) {
      if (typeof str !== 'string') throw Error('input must be a string')
      return 'bad output'
    }

    module.exports = uppercase
    `

    writeFileSync(uppercase, badOutput)

    const sp = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['test'], {
      stdio: 'ignore'
    })

    assert.equal(sp.status, 1, 'output should be tested')
  }

  {
    const badValidation = `'use strict'
    function uppercase (str) {
      return str.toUpperCase()
    }

    module.exports = uppercase
    `

    writeFileSync(uppercase, badValidation)

    const sp = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['test'], {
      stdio: 'ignore'
    })

    assert.equal(sp.status, 1, 'error case should be tested')
  }
  console.log('passed!')
} finally {
  writeFileSync(uppercase, uppercaseCode)
}
```

#### Lab 16.2 - Test a Callback-Based API

The `labs-2` folder contains a `package.json` file and a `store.js` file.

The `package.json` file contains the following:

```json
{
  "name": "labs-2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "UNLICENSED"
}
```

The `store.js` file contains the following:

```javascript
'use strict'
module.exports = (value, cb) => {
  if (Buffer.isBuffer(value) === false) {
    cb(Error('input must be a buffer'))
    return
  }
  setTimeout(() => {
    const id = Math.random().toString(36).split('.')[1].slice(0, 4)
    cb(null, { id })
  }, 300)
}
```

This API mimics some kind of async storage mechanism, such as to a database. In some circumstances it is infeasible to check for a specific value (for instance an ID returned from a database). For those cases, we can check for the presence of an ID, or apply some validation. In our case we can at least check that the length of the ID is 4.

Write tests for the `store.js` file. Ensure that when `npm test` is executed with the `labs-2` folder as the current working directory the `store.js` file is fully tested.

Any additional dependencies, such as a test harness, may be additionally installed.

Also in the `labs-2` folder is a `validate.js` file. The implementation can be checked with `node validate.js`. The implementation is successful if the final output of `node validate.js` is `passed!`.

For completeness the following is the `validate.js` file contains the following, but it is not necessary to understand it for the purposes of this exercise:

```javascript
'use strict'
const assert = require('assert').strict
const { spawnSync } = require('child_process')
const { writeFileSync } = require('fs')
const store = require.resolve('./store')
const storeCode = Buffer.from('2775736520737472696374270a6d6f64756c652e6578706f727473203d202876616c75652c20636229203d3e207b0a2020696620284275666665722e69734275666665722876616c756529203d3d3d2066616c736529207b0a202020206362284572726f722827696e707574206d7573742062652061206275666665722729290a2020202072657475726e0a20207d0a202073657454696d656f7574282829203d3e207b0a20202020636f6e7374206964203d204d6174682e72616e646f6d28292e746f537472696e67283336292e73706c697428272e27295b315d2e736c69636528302c2034290a202020206362286e756c6c2c207b206964207d290a20207d2c20333030290a7d0a', 'hex')

try {
  {
    writeFileSync(store, storeCode)

    const sp = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['test'], {
      stdio: 'ignore'
    })

    assert.equal(sp.status, 0, 'tests should be successful (is package.json test script configured?)')
  }

  {
    const badOutput = `'use strict'
      module.exports = (value, cb) => {
        if (Buffer.isBuffer(value) === false) {
          cb(Error('input must be a buffer'))
          return
        }
        setTimeout(() => {
          const id = Math.random().toString(36).split('.')[1].slice(0, 2)
          cb(null, { id })
        }, 300)
      }
      
    `

    writeFileSync(store, badOutput)

    const sp = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['test'], {
      stdio: 'ignore'
    })

    assert.equal(sp.status, 1, 'output should be tested (id length)')
  }

  {
    const badValidation = `'use strict'
    module.exports = (value, cb) => {
      if (Buffer.isBuffer(value) === true) {
        cb(Error('input must be a buffer'))
        return
      }
      setTimeout(() => {
        const id = Math.random().toString(36).split('.')[1].slice(0, 4)
        cb(null, { id })
      }, 300)
    }
    
    `

    writeFileSync(store, badValidation)

    const sp = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['test'], {
      stdio: 'ignore'
    })

    assert.equal(sp.status, 1, 'error case should be tested')
  }

  {
    const unexpectedError = `'use strict'
    module.exports = (value, cb) => {
      cb(Error('input must be a buffer'), {id: '1234'})
    }
    `

    writeFileSync(store, unexpectedError)

    const sp = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['test'], {
      stdio: 'ignore'
    })

    assert.equal(sp.status, 1, 'unexpected errors should be guarded - e.g. ifError')
  }

  console.log('passed!')
} finally {
  writeFileSync(store, storeCode)
}
```

#### Lab 16.3 - Test a Promise-Based async/await API

The `labs-3` folder contains a `package.json` file and a `store.js` file.

The `package.json` file contains the following:

```json
{
  "name": "labs-3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "UNLICENSED"
}
```

The `store.js` file contains the following:

```javascript
'use strict'
const { promisify } = require('util')
const timeout = promisify(setTimeout)
module.exports = async (value) => {
  if (Buffer.isBuffer(value) === false) {
    throw Error('input must be a buffer')
  }
  await timeout(300)
  const id = Math.random().toString(36).split('.')[1].slice(0, 4)
  return { id }
}
```

This API mimics some kind of async storage mechanism, such as to a database. In some circumstances it is infeasible to check for a specific value (for instance an ID returned from a database). For those cases, we can check for the presence of an ID, or apply some validation. In our case we can at least check that the length of the ID is 4.

Write tests for the `store.js` file. Ensure that when npm test is executed with the `labs-2` folder as the current working directory the `store.js` file is fully tested.

Any additional dependencies, such as a test harness, may be additionally installed.

Also in the `labs-3` folder is a `validate.js` file. The implementation can be checked with `node validate.js`. The implementation is successful if the final output of `node validate.js` is `passed!`.

For completeness the following is the `validate.js` file contains the following, but it is not
necessary to understand it for the purposes of this exercise:

```javascript
'use strict'
const assert = require('assert').strict
const { spawnSync } = require('child_process')
const { writeFileSync } = require('fs')
const store = require.resolve('./store')
const storeCode = Buffer.from('2775736520737472696374270a636f6e7374207b2070726f6d6973696679207d203d207265717569726528277574696c27290a636f6e73742074696d656f7574203d2070726f6d69736966792873657454696d656f7574290a6d6f64756c652e6578706f727473203d206173796e63202876616c756529203d3e207b0a2020696620284275666665722e69734275666665722876616c756529203d3d3d2066616c736529207b0a202020207468726f77204572726f722827696e707574206d75737420626520612062756666657227290a20207d0a202061776169742074696d656f757428333030290a2020636f6e7374206964203d204d6174682e72616e646f6d28292e746f537472696e67283336292e73706c697428272e27295b315d2e736c69636528302c2034290a202072657475726e207b206964207d0a7d0a', 'hex')

try {
  {
    writeFileSync(store, storeCode)

    const sp = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['test'], {
      env: { ...process.env, NODE_OPTIONS: '--unhandled-rejections=strict' },
      stdio: 'ignore'
    })

    assert.equal(sp.status, 0, 'tests should be successful (is package.json test script configured?)')
  }

  {
    const badOutput = `'use strict'
      const { promisify } = require('util')
      const timeout = promisify(setTimeout)
      module.exports = async (value) => {
        if (Buffer.isBuffer(value) === false) {
          throw Error('input must be a buffer')
        }
        await timeout(300)
        const id = Math.random().toString(36).split('.')[1].slice(0, 2)
        return { id }
      }
    `

    writeFileSync(store, badOutput)

    const sp = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['test'], {
      env: { ...process.env, NODE_OPTIONS: '--unhandled-rejections=strict' },
      stdio: 'ignore'
    })
    assert.equal(sp.status, 1, 'output should be tested (id length)')
  }

  {
    const badValidation = `'use strict'
      const { promisify } = require('util')
      const timeout = promisify(setTimeout)
      module.exports = async (value) => {
        await timeout(300)
        const id = Math.random().toString(36).split('.')[1].slice(0, 4)
        return { id }
      }
    `

    writeFileSync(store, badValidation)

    const sp = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['test'], {
      env: { ...process.env, NODE_OPTIONS: '--unhandled-rejections=strict' },
      stdio: 'ignore'
    })

    assert.equal(sp.status, 1, 'error case should be tested')
  }

  console.log('passed!')
} finally {
  writeFileSync(store, storeCode)
}
```

## 17 - Course completion

## Quizzes

### 2 - Setting up

#### 2.1

<Tabs>
<TabItem value='2.1-q' label='Question'>

What is the recommended approach to installing Node?

- (A) From the website
- (B) With an OS package manager
- (C) With a version manager

</TabItem>
<TabItem value='2.1-a' label='Answer'>

C

</TabItem>
<TabItem value='2.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 2.2

<Tabs>
<TabItem value='2.2-q' label='Question'>

Which of the following commands displays the currently installed Node.js version?

- (A) `node -v`
- (B) `node -V`
- (C) `node --ver`

</TabItem>
<TabItem value='2.2-a' label='Answer'>

A

</TabItem>
<TabItem value='2.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 2.3

<Tabs>
<TabItem value='2.3-q' label='Question'>

Aside from the Node binary, what else does a Node installation provide?

- (A) A module package manager
- (B) Build tools
- (C) An IDE

</TabItem>
<TabItem value='2.3-a' label='Answer'>

A

</TabItem>
<TabItem value='2.3-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 3 - The Node binary

#### 3.1

<Tabs>
<TabItem value='3.1-q' label='Question'>

Which flag allows a module to be preloaded?

- (A) `--loader`
- (B) `-r` or `--require`
- (C) `-p` or `--preload`

</TabItem>
<TabItem value='3.1-a' label='Answer'>

B

</TabItem>
<TabItem value='3.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 3.2

<Tabs>
<TabItem value='3.2-q' label='Question'>

How can the syntax of a program be checked without running it?

- (A) `node -s app.js` or `node --syntax app.js`
- (B) `node -c app.js` or `node --check app.js`
- (C) `node --parse-only app.js`

</TabItem>
<TabItem value='3.2-a' label='Answer'>

B

</TabItem>
<TabItem value='3.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 4 - Debugging and diagnostics

#### 4.1

<Tabs>
<TabItem value='4.1-q' label='Question'>

What keyword can be used within the code of a program to cause the process to pause on a specific line when in debug mode?

- (A) `break`
- (B) `pause`
- (C) `debugger`
- (D) `debug`

</TabItem>
<TabItem value='4.1-a' label='Answer'>

C

</TabItem>
<TabItem value='4.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 4.2

<Tabs>
<TabItem value='4.2-q' label='Question'>

In order to set a breakpoint on the first line of execution when entering debug mode, which flag should be used?

- (A) `--inspect`
- (B) `--debug`
- (C) `--inspect-brk`

</TabItem>
<TabItem value='4.2-a' label='Answer'>

C

</TabItem>
<TabItem value='4.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 5 - Key JavaScript concepts

#### 5.1

<Tabs>
<TabItem value='5.1-q' label='Question'>

When a function is on an object which is the prototype of another object (the "instance"), and the function is called on the instance object what does `this` (usually) refer to?

- (A) The prototype object
- (B) The instance object
- (C) The global object

</TabItem>
<TabItem value='5.1-a' label='Answer'>

B

</TabItem>
<TabItem value='5.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 5.2

<Tabs>
<TabItem value='5.2-q' label='Question'>

What does the `extend` keyword do?

- (A) Inherits from an abstract class
- (B) Copies properties from one object to another
- (C) Sets up part of a prototype chain

</TabItem>
<TabItem value='5.2-a' label='Answer'>

C

</TabItem>
<TabItem value='5.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 5.3

<Tabs>
<TabItem value='5.3-q' label='Question'>

From where can closure scope be accessed?

- (A) Inside a function and any functions within that function
- (B) From the outside of a function
- (C) Anywhere


</TabItem>
<TabItem value='5.3-a' label='Answer'>

A

</TabItem>
<TabItem value='5.3-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 6 - Packages and dependencies

#### 6.1

<Tabs>
<TabItem value='6.1-q' label='Question'>

Which of the following cases would all be covered in a Semver range of `^2.1.2`?

- (A) 2.14.2, 2.1.1, 2.11.14
- (B) 2.14.2, 2.16.1, 2.14.4
- (C) 2.18.6, 3.13.3, 2.1.3

</TabItem>
<TabItem value='6.1-a' label='Answer'>

B

</TabItem>
<TabItem value='6.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 6.2

<Tabs>
<TabItem value='6.2-q' label='Question'>

Given two "`scripts`" fields in the `package.json` file named "`test`" and "`lint`", which of the following commands would execute both scripts?

- (A) `npm test && npm lint`
- (B) `npm run test lint`
- (C) `npm run lint && npm test`

</TabItem>
<TabItem value='6.2-a' label='Answer'>

C

</TabItem>
<TabItem value='6.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 6.3

<Tabs>
<TabItem value='6.3-q' label='Question'>

If a package dependency has a development dependency, in what scenario, if any, will the development dependency be installed?

- (A) When running `npm install` inside the package folder
- (B) Never
- (C) When running `npm install --production` inside the package folder

</TabItem>
<TabItem value='6.3-a' label='Answer'>

B

</TabItem>
<TabItem value='6.3-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 7 - Node's module systems

### 8 - Asynchronous control flow

### 9 - Node's event system

### 10 - Handling errors

### 11 - Using buffers

### 12 - Working with streams

### 13 - Interacting with the file system

### 14 - Process and operating system

### 15 - Creating child processes

### 16 - Writing unit tests

### 17 - Course completion
