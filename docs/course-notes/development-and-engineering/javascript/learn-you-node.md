---
title: Learn You Node
hide_title: false
sidebar_label: Learn You Node
description: Problems and solutions for Learn You Node
draft: false
tags: [tbd]
keywords: [tbd]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

## 1 - Hello World

### Instructions

Create a file named `hello-world.js`.

Write a program that prints the text `HELLO WORLD` to the console (`stdout`).

When you are done, you must run:

```sh
$ {appname} verify hello-world.js
```

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/hello_world/problem.md) for any updates.

### Hint

To make a NodeJS program, create a new file with a `.js` extension and start writing JavaScript! Execute your program by running it with the `node` command. 

Example:

```sh
$ node hello-world.js
```

You can write to the console in the same way as in the browser:

```javascript
console.log('text')
```

### Solutions

#### Official solution

```javascript
console.log('HELLO WORLD')
```

See the [official solution](https://github.com/workshopper/learnyounode/blob/master/exercises/hello_world/solution/solution.js) for any updates.

#### Solution 1

```javascript
// hello-world.js

/* NOTES:
  - This is the expected/standard solution.
*/

console.log('HELLO WORLD');
```

This is the standard/expected solution.

#### Solution 2

```javascript
// hello-world-alt-1.js

/* NOTES:
  - console.log essentially implements process.stdout.write but with a newline
  - console.log can also handle any data type and not just strings (process.stdout.write can only
    accept strings as input)
*/

process.stdout.write('HELLO WORLD\n');
```

Note that this solution is a "simpler" way of accomplishing the desired task--`process.stdout.write` only takes strings and since `HELLO WORLD` is a string, we are good to go. Important to note is that `console.log` adds a new line to `stdout`; hence, `HELLO WORLD` is expected as the first line and `""` as the second line. By itself, `process.stdout.write('HELLO WORLD');`, will not result in the new line.

### Ideas and further reading

- `console.log([data][,...args])`: Read [the docs](https://nodejs.org/api/console.html#console_console_log_data_args) for more. The gist is that `console.log` takes *any* data type and pushes to `process.stdout.write` (where you will see the standard output on your monitor), where you will essentially use `process.stdout.write` behind the scenes, but `process.stdout.write` can only take strings as arguments. Additionally, `console.log`, as the NodeJS docs note, prints to `stdout` with newline. Hence, if you have several `console.log` statements, then each result will be printed on a new line. If, however, you do something like `process.stdout.write('1')` and then `process.stdout.write('2')` what you will see in your console is `12` (i.e., not with a new line).
- [Difference between "process.stdout.write" and "console.log" in node.js](https://stackoverflow.com/q/4976466/5209533): This is a good question with a variety of good answers. 
- [stderr, stdout, and stdin](https://www.youtube.com/watch?v=icuV2CR3Ghg): This video seems to be promising in terms of better understanding what `stderr`, `stdout`, and `stdin` are and how to redirect them.
- [Wiki (standard streams)](https://en.wikipedia.org/wiki/Standard_streams): This is the Wikipedia article on standard streams (i.e., `stderr`, `stdout`, and `stdin`). The beginning starts as follows: "In computer programming, standard streams are interconnected input and output communication channels between a computer program and its environment when it begins execution. The three input/output (I/O) connections are called standard input (`stdin`), standard output (`stdout`) and standard error (`stderr`). [...]"

## 2 - Baby Steps

### Instructions

Create a file named `baby-steps.js`.

Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (`stdout`).

Check to see if your program is correct by running this command:

```sh
$ {appname} verify baby-steps.js
```

{appname} will be supplying arguments to your program when you run `{appname} verify baby-steps.js` so you don't need to supply them yourself. To test your program without verifying it, you can invoke it with `{appname} run baby-steps.js`. When you use `run`, you are invoking the test environment that {appname} sets up for each exercise.

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/baby_steps/problem.md) for any updates.

### Hints

You can access command-line arguments via the global `process` object. The `process` object has an `argv` property which is an array containing the complete command-line. i.e. `process.argv`.

To get started, write a program that simply contains:

```javascript
console.log(process.argv)
```

Run it with `node baby-steps.js` and some numbers as arguments.

Example:

```sh
$ node baby-steps.js 1 2 3
```

In which case the output would be an array looking something like:

```javascript
['node', '/path/to/your/baby-steps.js', '1', '2', '3']
```

You'll need to think about how to loop through the number arguments so  you can output just their sum. The first element of the `process.argv` array is always `'node'` (or *where* the NodeJS program is located on your computer, which you can also find by running `which node`), and the second element is always the path to your `baby-steps.js` file, so you need to start at the 3rd element (index 2), adding each item to the total until you reach the end of the array.

Also be aware that all elements of `process.argv` are strings and you may need to *coerce* them into numbers. You can do this by prefixing the property with `+` or passing it to `Number()`. e.g. `+process.argv[2]` or `Number(process.argv[2])`.

### Solutions

#### Official solution

```javascript
'use strict'

let result = 0

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)
```

See the [official solution](https://github.com/workshopper/learnyounode/blob/master/exercises/baby_steps/solution/solution.js) for any updates.

#### Solution 1

```javascript
// baby-steps.js
console.log(
  // grab array of command line arguments
  process.argv
    // only use elements from the array after the first two
    .slice(2)
    // sum the remaining elements of the array (coerce the input strings to numbers using +)
    .reduce((acc, val) => acc + +val, 0)
)
```

### Ideas and further reading

tbd

## 3 - My First I/O!

### Instructions

Create a file named `my-first-io.js`.

Write a program that uses a single **synchronous** filesystem operation to read a file and print the number of newlines (`\n`) it contains to the console (`stdout`), similar to running `cat file | wc -l`.

The full path to the file to read will be provided as the first command-line argument (i.e., `process.argv[2]`). You do not need to make your own test file.

Check to see if your program is correct by running this command:

```sh
$ {appname} verify my-first-io.js
```

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/my_first_io/problem.md) for any updates.

### Hints

To perform a filesystem operation you are going to need the `fs` module from the Node core library. To load this kind of module, or any other "global" module, use the following incantation:

```javascript
const fs = require('fs')
```

Now you have the full `fs` module available in a variable named `fs`.

All synchronous (or blocking) filesystem methods in the `fs` module end with 'Sync'. To read a file, you'll need to use `fs.readFileSync('/path/to/file')`. This method will *return* a `Buffer` object containing the complete contents of the file.

Documentation on the `fs` module can be found by pointing your browser here:
  {rootdir:/docs-nodejs/fs.html}

`Buffer` objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format. `Buffer` objects can be converted to strings by simply calling the `toString()` method on them.

Example: `const str = buf.toString()`.

Documentation on `Buffer`s can be found by pointing your browser here:
  {rootdir:/docs-nodejs/buffer.html}

If you're looking for an easy way to count the number of newlines in a string, recall that a JavaScript `String` can be `.split()` into an array of substrings and that '\n' can be used as a delimiter. Note that the test file does not have a newline character ('\n') at the end of the last line, so using this method you'll end up with an array that has one more element than the number of newlines.

### Solutions

#### Official solution

```javascript
'use strict'
const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
```

See the [official solution](https://github.com/workshopper/learnyounode/blob/master/exercises/my_first_io/solution/solution.js) for any updates.

#### Solution 1

```javascript
// my-first-io.js

const fs = require('fs');
const filePath = process.argv[2];
const fileString = fs.readFileSync(filePath).toString();
const newLineSegmentsInFile = fileString.matchAll(/\n/gm);
const numNewLineSegments = [...newLineSegmentsInFile].length;
console.log(numNewLineSegments);
```

### Ideas and further reading

tbd

## 4 - My First Async I/O!

### Instructions

Create a file named `my-first-async-io.js`.

Write a program that uses a single **asynchronous** filesystem operation to read a file and print the number of newlines it contains to the console (`stdout`), similar to running `cat file | wc -l`.

The full path to the file to read will be provided as the first command-line argument.

Check to see if your program is correct by running this command:

```sh
$ {appname} verify my-first-async-io.js
```

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/my_first_async_io/problem.md) for any updates.

### Hints

The solution to this problem is *almost* the same as the previous problem except you must now do it **the Node.js way**: asynchronous.

Instead of `fs.readFileSync()` you will want to use `fs.readFile()` and instead of using the return value of this method you need to collect the value from a callback function that you pass in as the second argument. To learn more about callbacks, check out: https://github.com/maxogden/art-of-node#callbacks.

Remember that idiomatic Node.js callbacks normally have the signature:

```javascript
function callback (err, data) { /* ... */ }
```

So you can check if an error occurred by checking whether the first argument is truthy. If there is no error, you should have your `Buffer` object as the second argument. As with `readFile()`, you can supply 'utf8' as the second argument and put the callback as the third argument and you will get a `String` instead of a `Buffer`.

Documentation on the `fs` module can be found by pointing your browser here:
  {rootdir:/docs-nodejs/fs.html}

### Solutions

#### Official solution

```javascript
'use strict'
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
```

See the [official solution](https://github.com/workshopper/learnyounode/blob/master/exercises/my_first_async_io/solution/solution.js) for any updates.

#### Solution 1

```javascript
// my-first-async-io

const fs = require('fs');
const filePath = process.argv[2];

const printNumNewLines = (err, fileString) => {
  if (err) throw err;
  const newLineSegmentsInFile = fileString.matchAll(/\n/gm);
  const numNewLineSegments = [...newLineSegmentsInFile].length;
  console.log(numNewLineSegments);
}

fs.readFile(filePath, 'utf8', printNumNewLines);
```

### Ideas and further reading

tbd

## 5 - Filtered LS

### Instructions

Create a file named `filtered-ls.js`.

Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g., `/path/to/dir/`) and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only files that **end with .txt**. Note that the second argument *will not* come prefixed with a ".".

Keep in mind that the first arguments of your program are not the first values of the `process.argv` array, as the first two values are reserved for system info by Node.

The list of files should be printed to the console, one file per line. You **must** use asynchronous I/O.

Check to see if your program is correct by running this command:

```sh
$ {appname} verify filtered-ls.js
```

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/filtered_ls/problem.md) for any updates.

### Hints

The `fs.readdir()` method takes a pathname as its first argument and a callback as its second. The callback signature is:

```javascript
function callback (err, list) { /* ... */ }
```

where `list` is an array of filename strings.

Documentation on the `fs` module can be found by pointing your browser here:
  {rootdir:/docs-nodejs/fs.html}

You may also find node's `path` module helpful, particularly the `extname` method.

Documentation on the `path` module can be found by pointing your browser here:
  {rootdir:/docs-nodejs/path.html}

### Solutions

#### Official solution

```javascript
'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
```

See the [official solution](https://github.com/workshopper/learnyounode/blob/master/exercises/filtered_ls/solution/solution.js) for any updates.

#### Solution 1

```javascript
// filtered-ls.js

const fs = require('fs');
const getFileExtRegEx = /(?<=\.)\w+/;

fs.readdir(process.argv[2], (err, files) => {
  if (err) throw err;
  const filteredFiles = files.filter(file => {
    const extensionMatch = file.match(getFileExtRegEx);
    return extensionMatch ? extensionMatch[0] === process.argv[3] : false;
  });
  filteredFiles.forEach(file => console.log(file));
})
```

#### Solution 2

```javascript
// filtered-ls-alt-1.js

const fsp = require('fs').promises;
const path = require('path');

const showFilesWithExt = async (dirPath, fileExt) => {
  const filesInDir = await fsp.readdir(dirPath);
  const filesWithExt = filesInDir.filter(file => path.extname(file) === `.${fileExt}`);
  filesWithExt.forEach(file => console.log(file));
}

const [,,folder, fileExt] = process.argv;

showFilesWithExt(folder, fileExt);
```

### Ideas and further reading

tbd

## 6 - Make It Modular

### Instructions

Create two files named `make-it-modular.js` and `mymodule.js`.

This problem is the same as the previous but introduces the concept of **modules**. You will need to create two files to solve this.

Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You **must** use asynchronous I/O.

You must write a *module* file (`mymodule.js`) to do most of the work. The module must *export* a single function that takes **three** arguments: the directory name, the filename extension string and your callback function, in that order. Don't alter the filename extension string in any way before passing it to your module.

The callback function must be called using the idiomatic node `(err, data)` convention. This convention stipulates that unless there's an error, the first argument passed to the callback will be `null`, and the second will be your data. In this exercise, the data will be your filtered list of files, as an Array. If you receive an error, e.g. from your call to  `fs.readdir()`, the callback must be called with the error as the first and only argument.

You **must** not print directly to the console from your module file, only from your original program.

In the case of an error bubbling up to your original program file, simply check for it and print an informative message to the console.

These four things are the contract that your module must follow.

1. Export a single function that takes exactly the arguments described.
2. Call the callback exactly once with an error or some data as described.
3. Don't change anything else, like global variables or stdout.
4. Handle all the errors that may occur and pass them to the callback.

The benefit of having a contract is that your module can be used by anyone who expects this contract. So your module could be used by anyone else who does learnyounode, or the verifier, and just work.

Check to see if your program is correct by running this command:

```sh
$ {appname} verify make-it-modular.js
```

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/make_it_modular/problem.md) for any updates.

### Hints

Create a new module by creating a new file (`mymodule.js`) that just contains your directory reading and filtering function. To define a *single function export*, you assign your function to the `module.exports` object, overwriting what is already there:

```javascript
module.exports = function (args) { /* ... */ }
```

Or you can use a named function and assign the name.

To use your new module in your original program file (`make-it-modular.js`), use the `require()` call in the same way that you `require('fs')` to load the `fs` module. The only difference is that for local modules must be prefixed with './'. So, if your file is named mymodule.js then:

```javascript
const mymodule = require('./mymodule.js')
```

The '.js' is optional here and you will often see it omitted.

You now have the `module.exports` object in your module assigned to the `mymodule` variable. Since you are exporting a single function, `mymodule` is a function you can call!

Also keep in mind that it is idiomatic to check for errors and do early-returns within callback functions:

```javascript
function bar (callback) {
  foo(function (err, data) {
    if (err) { return callback(err) } // early return

    // ... no error, continue doing cool things with `data`

    // all went well, call callback with `null` for the error argument

    callback(null, data)
  })
}
```

### Solutions

#### Official solution

The main program:

```javascript
// solution.js
'use strict'
const filterFn = require('./solution_filter.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
```

The module that does most of the work:

```javascript
// solution_filter.js
'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/beep_boop/problem.md) for any updates.

#### Solution 1

The module that does most of the work:

```javascript
// mymodule.js
const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, fileExt, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err) return callback(err);
    const filteredFiles = files.filter(file => path.extname(file) === `.${fileExt}`);
    callback(null, filteredFiles);
  })
}
```

The main program that makes use of the module above:

```javascript
// make-it-modular.js
const myModule = require('./mymodule');
const [,,folderPath, fileExt] = process.argv;
const myCallback  = (err, fileArr) => {
  if (err) throw err;
  fileArr.forEach(file => console.log(file));
}

myModule(folderPath, fileExt, myCallback);
```

### Ideas and further reading

tbd

## 7 - HTTP Client

### Instructions

Create a file named `http-client.js`.

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of **each** "data" event from the response to a new line on the console (stdout).

Check to see if your program is correct by running this command:

```sh
$ {appname} verify http-client.js
```

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/http_client/problem.md) for any updates.

### Hints

For this exercise you will need to use the `http` core module.

Documentation on the `http` module can be found by pointing your browser here:
  {rootdir:/docs-nodejs/http.html}

The `http.get()` method is a shortcut for simple GET requests, use it to simplify your solution. The first argument to `http.get()` can be the URL you want to GET; provide a callback as the second argument.

Unlike other callback functions, this one has the signature:

```javascript
function callback (response) { /* ... */ }
```

Where the `response` object is a Node **Stream** object. You can treat Node Streams as objects that emit events. The three events that are of most interest are: "data", "error" and "end". You listen to an event like so:

```javascript
response.on('data', function (data) { /* ... */ })
```

The "data" event is emitted when a chunk of data is available and can be processed. The size of the chunk depends upon the underlying data source.

The `response` object / Stream that you get from `http.get()` also has a `setEncoding()` method. If you call this method with "utf8", the "data" events will emit Strings rather than the standard Node `Buffer` objects which you have to explicitly convert to Strings.

### Solutions

#### Official solution

```javascript
'use strict'
const http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
```

See the [official solution](https://github.com/workshopper/learnyounode/blob/master/exercises/http_client/solution/solution.js) for any updates.

#### Solution 1

```javascript
// http-client.js
const http = require('http');
const [,,urlToGet] = process.argv;

http.get(urlToGet, (res) => {
  res.setEncoding('utf-8');
  res.on('data', data => console.log(data));
})
```

### Ideas and further reading

tbd

## 8 - HTTP Collect

### Instructions

Create a file named `http-collect.js`.

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect **all** data from the server (not just the first "data" event) and then write two lines to the console (stdout).

The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.


Check to see if your program is correct by running this command:

```sh
$ {appname} verify http-collect.js
```

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/http_collect/problem.md) for any updates.

### Hints

There are two approaches you can take to this problem:

**1)** Collect data across multiple "data" events and append the results together prior to printing the output. Use the "end" event to determine when the stream is finished and you can write the output.

**2)** Use a third-party package to abstract the difficulties involved in collecting an entire stream of data. Two different packages provide a useful API for solving this problem (there are likely more!): `bl` (Buffer List) and `concat-stream`; take your pick!

```
  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>
```

To install a Node package, use the Node Package Manager `npm`. Simply type:

```sh
$ npm install bl
```

And it will download and install the latest version of the package into a subdirectory named `node_modules`. Any package in this subdirectory under your main program file can be loaded with the `require` syntax without being prefixed by './':

```javascript
const bl = require('bl')
```

Node will first look in the core modules and then in the `node_modules` directory where the package is located.

If you don't have an Internet connection, simply make a `node_modules` directory and copy the entire directory for the package you want to use from inside the {appname} installation directory:

```
  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}
```

Both `bl` and `concat-stream` can have a stream *piped* in to them and they will collect the data for you. Once the stream has ended, a callback will be fired with the data:

```javascript
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

Note that you will probably need to `data.toString()` to convert from a Buffer.

Documentation for both of these modules has been installed along with {appname} on your system and you can read them by pointing your browser here:

```
  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}
```

### Solutions

#### Official solution

```javascript
'use strict'
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
```

See the [official solution](https://github.com/workshopper/learnyounode/blob/master/exercises/http_collect/solution/solution.js) for any updates.

### Ideas and further reading

## 9 - Juggling Async

### Instructions

Create a file named `juggling-async.js`.

This problem is the same as the previous problem (HTTP COLLECT) in that you need to use `http.get()`. However, this time you will be provided with **three** URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs and print it to the console (`stdout`). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you **must** print them out in the same order as the URLs are provided to you as command-line arguments.

Check to see if your program is correct by running this command:

```sh
$ {appname} verify juggling-async.js
```

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/juggling_async/problem.md) for any updates.

### Hints

Don't expect these three servers to play nicely! They are not going to give you complete responses in the order you hope, so you can't naively just print the output as you get it because they will be out of order.

You will need to queue the results and keep track of how many of the URLs have returned their entire contents. Only once you have them all, you can print the data to the console.

Counting callbacks is one of the fundamental ways of managing async in Node. Rather than doing it manually, you may find it more convenient to rely on [`async`](https://www.npmjs.com/package/async) or [`run-parallel`](https://www.npmjs.com/package/run-parallel). But for this exercise, do it without that.

### Solutions

#### Official solution

```javascript
'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
```

See the [official solution](https://github.com/workshopper/learnyounode/blob/master/exercises/juggling_async/solution/solution.js) for any updates.

### Ideas and further reading

tbd

## 10 - Time Server

### Instructions

Create a file named `time-server.js`.

Write a **TCP time server**!

Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:

```
"YYYY-MM-DD hh:mm"
```

followed by a **newline** character. Month, day, hour and minute must be *zero-filled* to 2 integers. For example:

```
"2013-07-06 17:42"
```

After sending the string, close the connection.

Check to see if your program is correct by running this command:

```sh
$ {appname} verify time-server.js
```

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/time_server/problem.md) for any updates.

### Hints

For this exercise we'll be creating a raw TCP server. There's no HTTP involved here so we need to use the `net` module from Node core which has all the basic networking functions.

The `net` module has a method named `net.createServer()` that takes a function. The function that you need to pass to `net.createServer()` is a connection listener that is called more than once. Every connection received by your server triggers another call to the listener. The listener function has the signature:

```javascript
function listener (socket) { /* ... */ }
```

`net.createServer()` also returns an instance of your `server`. You must call `server.listen(portNumber)` to start listening on a particular port.

A typical Node TCP server looks like this:

```javascript
const net = require('net')
const server = net.createServer(function (socket) {
  // socket handling logic
})
server.listen(8000)
```

Remember to use the port number supplied to you as the first command-line argument.

The `socket` object contains a lot of meta-data regarding the connection, but it is also a Node duplex Stream, in that it can be both read from, and written to. For this exercise we only need to write data and then close the socket.

Use `socket.write(data)` to write data to the socket and `socket.end()` to close the socket. Alternatively, the `.end()` method also takes a data object so you can simplify to just: `socket.end(data)`.

Documentation on the `net` module can be found by pointing your browser here:

  {rootdir:/docs-nodejs/net.html}

To create the date, you'll need to create a custom format from a `new Date()` object. The methods that will be useful are:

```javascript
date.getFullYear()
date.getMonth() // starts at 0
date.getDate() // returns the day of month
date.getHours()
date.getMinutes()
```

Or, if you want to be adventurous, use the `strftime` package from npm. The `strftime(fmt, date)` function takes date formats just like the unix `date` command. You can read more about strftime at: https://github.com/samsonjs/strftime

### Solutions

#### Official solution

```javascript
'use strict'
const net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
```

See the [official solution](https://github.com/workshopper/learnyounode/blob/master/exercises/time_server/solution/solution.js) for any updates.

### Ideas and further reading

tbd

## 11 - HTTP File Server

### Instructions

Create a file named `http-file-server.js`.

Write an HTTP **server** that serves the same text file for each request it receives.

Your server should listen on the port provided by the first argument to your program.

You will be provided with the location of the file to serve as the second command-line argument. You **must** use the `fs.createReadStream()` method to stream the file contents to the response.

Check to see if your program is correct by running this command:

```sh
$ {appname} verify http-file-server.js
```

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/http_file_server/problem.md) for any updates.

### Hints

Because we need to create an HTTP server for this exercise rather than a generic TCP server, we should use the `http` module from Node core. Like the `net` module, `http` also has a method named `http.createServer()` but this one creates a server that can talk HTTP.

`http.createServer()` takes a callback that is called once for each connection received by your server. The callback function has the signature:

```javascript
function callback (request, response) { /* ... */ }
```

Where the two arguments are objects representing the HTTP request and the corresponding response for this request. `request` is used to fetch properties, such as the header and query-string from the request while `response` is for sending data to the client, both headers and body.

Both `request` and `response` are also Node streams! Which means that you can use the streaming abstractions to send and receive data if they suit your use-case.

`http.createServer()` also returns an instance of your `server`. You must call `server.listen(portNumber)` to start listening on a particular port.

A typical Node HTTP server looks like this:

```javascript
const http = require('http')
const server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

Documentation on the `http` module can be found by pointing your browser here:
  {rootdir:/docs-nodejs/http.html}

The `fs` core module also has some streaming APIs for files. You will need to use the `fs.createReadStream()` method to create a stream representing the file you are given as a command-line argument. The method returns a stream object which you can use `src.pipe(dst)` to pipe the data from the `src` stream to the `dst` stream. In this way you can connect a filesystem stream with an HTTP response stream.

### Solutions

#### Official solution

```javascript
'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
```

See the [official solution](https://github.com/workshopper/learnyounode/blob/master/exercises/http_file_server/solution/solution.js) for any updates.

### Ideas and further reading

## 12 - HTTP Uppercaserer

### Instructions

Create a file named `http-uppercaserer.js`.

Write an HTTP **server** that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.

Your server should listen on the port provided by the first argument to your program.

Check to see if your program is correct by running this command:

```sh
$ {appname} verify http-uppercaserer.js
```

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/http_uppercaserer/problem.md) for any updates.

### Hints

While you're not restricted to using the streaming capabilities of the `request` and `response` objects, it will be much easier if you do.

There are a number of different packages in npm that you can use to *"transform"* stream data as it's passing through. For this exercise the `through2-map` package offers the simplest API.

`through2-map` allows you to create a *transform stream* using only a single function that takes a chunk of data and returns a chunk of data. It's designed to work much like `Array#map()` but for streams:

```javascript
const map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

In the above example, the incoming data from `inStream` is converted to a String (if it isn't already), the characters are reversed and the result is passed through to `outStream`. So we've made a chunk character reverser! Remember though that the chunk size is determined up-stream and you have little control over it for incoming data.

To install `through2-map` type:

```sh
$ npm install through2-map
```

If you don't have an Internet connection, simply make a `node_modules` directory and copy the entire directory for the module you want to use from inside the {appname} installation directory:

  {rootdir:/node_modules/through2-map}

Documentation for through2-map has been installed along with {appname} on your system and you can read them by pointing your browser here:

  {rootdir:/docs/through2-map.html}

### Solutions

#### Official solution

```javascript
'use strict'
const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
```

See the [official solution](https://github.com/workshopper/learnyounode/blob/master/exercises/http_uppercaserer/solution/solution.js) for any updates.

### Ideas and further reading

tbd

## 13 - HTTP JSON API Server

### Instructions

Create a file named `http-json-api-server.js`.

Write an HTTP **server** that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

```javascripton
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:

```javascripton
{ "unixtime": 1376136615474 }
```

Your server should listen on the port provided by the first argument to your program.

Check to see if your program is correct by running this command:

```sh
$ {appname} verify http-json-api-server.js
```

See the [live problem description](https://github.com/workshopper/learnyounode/blob/master/exercises/http_json_api_server/problem.md) for any updates.

### Hints

The `request` object from an HTTP server has a `url` property that you will need to use to *"route"* your requests for the two endpoints.

You can parse the URL and query string using the Node core 'url' module. `new URL(request.url)` will parse content of request.url and provide you with an object with helpful properties.

For example, on the command prompt, type:

```sh
$ node -pe "new URL('/test?q=1', 'http://example.com')"
```

Documentation on the `url` module can be found by pointing your browser here:
  {rootdir:/docs-nodejs/url.html}

Your response should be in a JSON string format. Look at `JSON.stringify()` for more information.

You should also be a good web citizen and set the Content-Type properly:

```javascript
res.writeHead(200, { 'Content-Type': 'application/json' })
```

The JavaScript `Date` object can print dates in ISO format, e.g. `new Date().toISOString()`. It can also parse this format if you pass the string into the `Date` constructor. `Date.getTime()` will also
come in handy.

### Solutions

#### Official solution

```javascript
'use strict'
const http = require('http')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parsedUrl = new URL(req.url, 'http://example.com')
  const time = new Date(parsedUrl.searchParams.get('iso'))
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/beep_boop/problem.md) for any updates.

### Ideas and further reading

tbd
