---
title: Stream Adventure
hide_title: false
sidebar_label: Stream Adventure (Node.js)
description: Problems and solutions for Stream Adventure
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

## 1 - Beep Boop

### Instructions

Make a new directory for your stream-adventure solutions (`mkdir stream-adventure` and enter it `cd ./stream-adventure`). Create a new file called `beep_boop.js` that uses `console.log` to output `"beep boop"`.

To verify your program has the expected output, run the following:

```sh
$ {appname} verify beep_boop.js
```

For more options, run `stream-adventure help`.

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/beep_boop/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
console.log('beep boop')
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/beep_boop/solution.js) for any updates.

#### My solution

```Javascript
console.log('beep boop');
```

### Ideas and further reading

tbd

## 2 - Meet Pipe

### Instructions

**What are streams?**

A stream is an abstract interface for working with streaming data in Node.js.

That means you can consume data as it is loaded or produced, chunk by chunk (or
piece by piece), instead of having to store it all in memory at once.

Streams can be readable, writable, or both.

There are four types of streams:

* `Readable` stream, which data can be read.
* `Writable` stream, which data can be written.
* `Duplex` stream, which is both `Readable` and `Writable`.
* `Transform` stream, which is a `Duplex` stream that can modify or transform
  the data as it is written and read.

Streams are present in many Node.js modules, for example `http.request()`,
`zlib.createGzip()`, `fs.createReadStream()`, `process.stdout` ... all of these
return streams.

**The `pipe` method**

The `pipe` method allow you to connect the output of the readable stream as the
input of the writable stream

```javascript
readable.pipe(writable)
```

If you pipe into a duplex stream you can chain to other stream.

```javascript
readable.pipe(duplex).pipe(writable)
```

**Challenge**

You will get a file as the first argument to your program (`process.argv[2]`).

Use `fs.createReadStream()` to pipe the given file to `process.stdout`.

`fs.createReadStream()` takes a file as an argument and returns a readable
stream that you can call `.pipe()` on. Here's a readable stream that pipes its
data to `process.stderr`:

```javascript
const fs = require('fs')
fs.createReadStream('data.txt').pipe(process.stderr)
```

Your program is basically the same idea, but instead of `'data.txt'`, the
filename comes from `process.argv[2]` and you should pipe to `stdout`, not `stderr`.

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/meet_pipe/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const fs = require('fs')
const file = process.argv[2]

fs.createReadStream(file).pipe(process.stdout)
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/meet_pipe/solution.js) for any updates.

### Ideas and further reading

tbd

## 3 - Input Output

### Instructions

Take data from `process.stdin` and pipe it to `process.stdout`.

With `.pipe()`. `process.stdin.pipe()` to be exact.

Don't overthink this.

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/input_output/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
process.stdin.pipe(process.stdout)
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/input_output/solution.js) for any updates.

#### My solution

```Javascript
const readStream = process.stdin;
const writeStream = process.stdout;

readStream.pipe(writeStream);
```

### Ideas and further reading

tbd

## 4 - Read It

### Instructions

**Implementing a Readable Stream**

To implement a `Readable` stream, you need to construct an object, or inherit,
from `stream.Readable` class and implement a `_read()` method in it.

```javascript
const { Readable } = require('stream')

const myStream = new Readable({})
myStream._read = () => {}
```

or

```javascript
const { Readable } = require('stream')

class MyStream extends Readable {
  _read() {}
}
```

Note: This `_read` method MUST NOT be called by application code directly.
It should be called by the internal `Readable` class methods only.

**Reading modes**

`Readable` streams operate in one of two modes: flowing and paused

* In flowing mode, data is read from the underlying system automatically and
  provided as quickly as possible.

* In paused mode, the `read()` method must be called explicitly to read chunks
  of data from the stream.

All Readable streams begin in paused mode but can be switched to flowing mode,
and also can switch back to paused mode.

**Consuming a Readable Stream**

* `readable.pipe(writable)`, attaching `Writable` stream to the readable, cause
  it to switch automatically into flowing mode and push all of its data to the
  attached `Writable`.

* `readable.on('readable', ...)`, here the stream (`readable`) is in paused mode
  and have to use the `read(size)` method for start consuming the data.

* `readable.on('data', ...)`, adding the `data` event handler switch the stream
  to a flowing mode. We can pause and resume the stream by using `pause()`
  and `resume()` methods respectively. This is useful when you need to do some
  time-consuming action with the stream's data (such as writing to a database)

**Adding data to stream**

You can use the `push()` method to add content into the readable internal Buffer.

**Challenge**

Implement a Readable stream, initiate a new stream instance from your implementation
and pipe to `process.stdout`. You will receive the content to add to your stream like first argument.

**Docs**

* `stream.Readable`: https://nodejs.org/api/stream.html#stream_class_stream_readable
* `readable._read()`: https://nodejs.org/api/stream.html#stream_readable_read_size_1
* stream reading modes: https://nodejs.org/api/stream.html#stream_two_reading_modes

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/read_it/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const { Readable } = require('stream')

class ReadableStream extends Readable {
  constructor (content, options = {}) {
    super(options)
    this.content = content
  }

  _read (size) {
    if (!this.content) return this.push(null)

    this.push(this.content.slice(0, size))
    this.content = this.content.slice(size)
  }
}

const stream = new ReadableStream(process.argv[2])
stream.pipe(process.stdout)
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/read_it/solution.js) for any updates.

### Ideas and further reading

tbd

## 5 - Transform

### Instructions

Convert data from `process.stdin` to upper-case data on `process.stdout`
using the `through2` module.

To get the `through2` module you'll need to do:

```sh
$ npm install through2
```

A transform stream takes input data and applies an operation to the data to
produce the output data.

Create a through stream with a `write` and `end` function:

```javascript
const through = require('through2')
const stream = through(write, end)
```

The `write` function is called for every buffer of available input:

```javascript
function write (buffer, encoding, next) {
  // ...
}
```

and the `end` function is called when there is no more data:

```javascript
function end () {
    // ...
}
```

Inside the write function, call `this.push()` to produce output data and call
`next()` when you're ready to receive the next chunk:

```javascript
function write (buffer, encoding, next) {
  this.push('I got some data: ' + buffer + '\n')
  next()
}
```

and call `done()` to finish the output:

```javascript
function end (done) {
  done()
}
```

`write` and `end` are both optional.

If `write` is not specified, the default implementation passes the input data to
the output unmodified.

If `end` is not specified, the default implementation calls `this.push(null)`
to close the output side when the input side ends.

Make sure to pipe `process.stdin` into your transform stream
and pipe your transform stream into `process.stdout`, like this:

```javascript
process.stdin.pipe(stream).pipe(process.stdout)
```

To convert a buffer to a string, call `buffer.toString()`.

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/transform/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const through = require('through2')

const tr = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase())
  next()
})
process.stdin.pipe(tr).pipe(process.stdout)
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/transform/solution.js) for any updates.

### Ideas and further reading

tbd

## 6 - Lines

### Instructions

Instead of transforming every line as in the previous "TRANSFORM" example,
for this challenge, convert even-numbered lines to upper-case and odd-numbered
lines to lower-case. Consider the first line to be odd-numbered. For example
given this input:

    One
    Two
    Three
    Four

Your program should output:

    one
    TWO
    three
    FOUR

Even though it's not obligatory, you can use the `split2` module 
to split input by newlines. For example:

```javascript
const split2 = require('split2')
const through2 = require('through2')
process.stdin
  .pipe(split2())
  .pipe(through2(function (line, _, next) {
      console.dir(line.toString())
      next();
  }))
```

`split2` will buffer chunks on newlines before you get them. With example
above, we will get separate events for each line even though all the data
probably arrives on the same chunk:

```sh
$ echo -e 'one\ntwo\nthree' | node split.js
'one'
'two'
'three'
```

Your own program could use `split2` in this way, and you should transform the
input and pipe the output through to `process.stdout`.

You are free to solve the challenge without `split2` module. In this case,
you would have to add a new line after each line to have a passing match.

Make sure to `npm install split2 through2` in the directory where your solution
file lives.

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/lines/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const through = require('through2')
const split2 = require('split2')

let lineCount = 0
const tr = through(function (buf, _, next) {
  const line = buf.toString()
  this.push(lineCount % 2 === 0
    ? line.toLowerCase() + '\n'
    : line.toUpperCase() + '\n'
  )
  lineCount++
  next()
})
process.stdin
  .pipe(split2())
  .pipe(tr)
  .pipe(process.stdout)
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/lines/solution.js) for any updates.

### Ideas and further reading

tbd

## 7 - Concat

### Instructions

Create a new file called `concat.js`.

You will be given text on `process.stdin`, convert buffer to string and reverse it
using the `concat-stream` module before writing it to `process.stdout`.

`concat-stream` is a writable stream that concatenate all buffers from a stream
and give you the result in the callback you pass like parameter.

Here's an example that uses `concat-stream` to buffer POST content in order to
JSON.parse() the submitted data:

```javascript
const concat = require('concat-stream')
const http = require('http')

const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(concat(function (body) {
      const obj = JSON.parse(body)
      res.end(Object.keys(obj).join('\n'))
    }));
  }
  else res.end()
});
server.listen(5000)
```

In your adventure you'll only need to buffer input with `concat()` from
`process.stdin`.

Make sure to `npm install concat-stream` in the directory where your solution
file is located.

### Hint

Both `process.stdout` and `concat-stream` are writeable streams, so they can't
be piped together.

To verify your solution run:

```sh
$ {appname} verify concat.js
```

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/concat/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const concat = require('concat-stream')

process.stdin.pipe(concat(function (src) {
  const s = src.toString().split('').reverse().join('')
  process.stdout.write(s)
}))
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/concat/solution.js) for any updates.

### Ideas and further reading

tbd

## 8 - HTTP Server

### Instructions

In this challenge, write an http server that uses a through stream to write back
the request stream as upper-cased response data for POST requests.

Streams aren't just for text files and stdin/stdout. Did you know that http
request and response objects from node core's `http.createServer()` handler are
also streams?

For example, we can stream a file to the response object:

```javascript
const http = require('http')
const fs = require('fs')
const server = http.createServer(function (req, res) {
  fs.createReadStream('file.txt').pipe(res)
});
server.listen(process.argv[2])
```

This is great because our server can respond immediately without buffering
everything in memory first.

We can also stream a request to populate a file with data:

```javascript
const http = require('http')
const fs = require('fs')
const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(fs.createWriteStream('post.txt'))
  }
  res.end('beep boop\n')
});
server.listen(process.argv[2])
```

You can test this post server with curl:

```sh
$ node server.js 8000 &
$ echo hack the planet | curl -d@- http://localhost:8000
beep boop
$ cat post.txt
hack the planet
```

Your http server should listen on the port given at `process.argv[2]` and convert
the POST request written to it to upper-case using the same approach as the
TRANSFORM example.

As a refresher, here's an example with the default through2 callbacks explicitly
defined:

```javascript
const through = require('through2');
process.stdin.pipe(through(write, end)).pipe(process.stdout);

function write (buf, _, next) {
  this.push(buf);
  next();
}
function end (done) { done(); }
```

Do that, but send upper-case data in your http server in response to POST data.

Make sure to `npm install through2` in the directory where your solution file
lives.

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/http_server/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const http = require('http')
const through = require('through2')

const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase())
      next()
    })).pipe(res)
  } else res.end('send me a POST\n')
})
server.listen(parseInt(process.argv[2]))
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/http_server/solution.js) for any updates.

### Ideas and further reading

tbd

## 9 - HTTP Client

### Instructions

Send an HTTP POST request to `http://localhost:8099` and pipe `process.stdin` into
it. Pipe the response stream to `process.stdout`.

You can use the `http` module in node core, specifically the `request` method, to solve this challenge. 

Here's an example to make a POST request using `http.request()`:

```javascript
const { request } = require('http')

const options = { method: 'POST' }
const req = request('http://beep.boop:80/', options, (res) => {
  /* Do something with res*/
})
```

### Hint

The `req` object that you get back from `request()` is a writable stream 
and the `res` object in the callback function is a readable stream.

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/http_client/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const { request } = require('http')

const options = { method: 'POST' }
const req = request('http://localhost:8099', options, (res) => {
  res.pipe(process.stdout)
})
process.stdin.pipe(req)
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/http_client/solution.js) for any updates.

### Ideas and further reading

tbd

## 10 - Websockets

### Instructions

In this adventure, write a websocket client that uses the `ws`
module, generate a stream on top of the websocket client, write 
the string `"hello\n"` to the stream and pipe it to `process.stdout`.

To open a stream with `ws` on `localhost:8099`, just write:

```javascript
const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:8099')
const stream = WebSocket.createWebSocketStream(ws)
```

The readme for `ws` has more info if you're curious about how to
write the server side code: https://github.com/websockets/ws

Make sure to `npm install ws` in the directory where your solution
file lives.

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/websockets/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:8099')
const stream = WebSocket.createWebSocketStream(ws)
stream.write('hello\n')
stream.pipe(process.stdout)
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/websockets/solution.js) for any updates.

### Ideas and further reading

tbd

## 11 - HTML Stream

### Instructions

The following are files that may be needed to complete this exercise:

```html title=expected.html
<!-- expected.html -->
<html>
  <head>
    <title>beep boop</title>
  </head>
  <body>
    <p>
      Four score and several years ago, our fathers bought four swiss
      continents, a new vacation, covered in liberty.
      And predicated to the preposition that tall men created a
      sequel.
    </p>
    
    <p>
      How we are offstage in a great livermore, testing weather stations, or any
      station so conceived in altogether fitting and little note, nor long
      remember, they who fought here and take increased devoation,
      that <span class="loud">GOVERNMENT LOVE THE PEOPLE, BESIDE THE PEOPLE,
      FOUR OF THE PEOPLE, SHALL NOT PERISH FROM THIS EARTH.</span>
    </p>
  </body>
</html>
```

```html title=input.html
<!-- input.html -->
<html>
  <head>
    <title>beep boop</title>
  </head>
  <body>
    <p>
      Four score and several years ago, our fathers bought four swiss
      continents, a new vacation, covered in liberty.
      And predicated to the preposition that tall men created a
      sequel.
    </p>
    
    <p>
      How we are offstage in a great livermore, testing weather stations, or any
      station so conceived in altogether fitting and little note, nor long
      remember, they who fought here and take increased devoation,
      that <span class="loud">government love the people, beside the people,
      four of the people, shall not perish from this earth.</span>
    </p>
  </body>
</html>
```

Your program will get some html written to `stdin`. Convert all the inner html to
upper-case for elements with a class name of `"loud"`,
and pipe all the html to `stdout`.

You can use `trumpet` and `through2` to solve this adventure.

With `trumpet` you can create a transform stream from a css selector:
```javascript
const trumpet = require('trumpet')
const fs = require('fs')
const tr = trumpet()
fs.createReadStream('input.html').pipe(tr)

const stream = tr.select('.beep').createStream()
```

Now `stream` outputs all the inner html content at `'.beep'` and the data you
write to `stream` will appear as the new inner html content.

Make sure to `npm install trumpet through2` in the directory where your solution
file lives.

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/html_stream/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const trumpet = require('trumpet')
const through = require('through2')
const tr = trumpet()

const loud = tr.select('.loud').createStream()
loud.pipe(through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase())
  next()
})).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/html_stream/solution.js) for any updates.

### Ideas and further reading

tbd

## 12 - Duplexer

### Instructions

The following is a file that may be needed for this exercise:

```javascript title=command.js
// command.js
const through = require('through2')
const split2 = require('split2')
const combine = require('stream-combiner')
const offset = Number(process.argv[2])

const tr = combine(split2(), through(write))
process.stdin.pipe(tr).pipe(process.stdout)

function write (buf, _, next) {
  const line = buf.toString()
  this.push(line.replace(/[A-Za-z]/g, function (s) {
    const c = s.charCodeAt(0)
    return String.fromCharCode(
      c < 97
        ? (c - 97 + offset) % 26 + 97
        : (c - 65 + offset) % 26 + 97
    )
  }) + '\n')
  next()
}
```

Write a program that exports a function that spawns a process from a `cmd`
string and an `args` array and returns a single duplex stream joining together
the stdin and stdout of the spawned process:

```javascript
const { spawn } = require('child_process')

module.exports = function (cmd, args) {
  // spawn the process and return a single stream
  // joining together the stdin and stdout here
}
```

There is a very handy module you can use here: duplexer2. The duplexer2 module
exports a single function `duplexer2(writable, readable)` that joins together a
writable stream and a readable stream into a single, readable/writable duplex
stream.

If you use duplexer2, make sure to `npm install duplexer2` in the directory where
your solution file is located.

Keep in mind that the main and child processes will have different stream interface.

    process.stdin is a Readable stream
    process.stdout is a Writable stream

For process you're inside the process to stdin is readable to you.
For child process you're outside so that process's stdin is writable to you.

    childProc.stdin is a Writable stream
    childProc.stdout is a Readable stream

Also, have a look at the duplexer2 documentation and notice that signature
of the exported function is `duplexer2([options], writable, readable)`
which means that you might need to pass an options argument.

Create a new file called `duplexer.js` which will hold your solution.

To verify your solution run:

```sh
$ {appname} verify duplexer.js
```

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/duplexer/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const { spawn } = require('child_process')
const duplexer = require('duplexer2')

module.exports = function (cmd, args) {
  const ps = spawn(cmd, args)
  return duplexer(ps.stdin, ps.stdout)
}
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/duplexer/solution.js) for any updates.

### Ideas and further reading

tbd

## 13 - Duplexer Redux

### Instructions

In this example, you will be given a readable stream, `counter`, as the first
argument to your exported function:

```javascript
module.exports = function (counter) {
  // return a duplex stream to count countries on the writable side
  // and pass through `counter` on the readable side
}
```

Return a duplex stream with the `counter` as the readable side. You will be
written objects with a 2-character `country` field as input, such as these:

```javascripton
  {"short":"OH","name":"Ohio","country":"US"}
  {"name":"West Lothian","country":"GB","region":"Scotland"}
  {"short":"NSW","name":"New South Wales","country":"AU"}
```

Create an object to track the number of occurrences of each unique country code.

For example:
```javascripton
  {"US": 2, "GB": 3, "CN": 1}
```

Once the input ends, call `counter.setCounts()` with your counts object.

The `duplexer2` module will again be very handy in this example.

If you use duplexer, make sure to `npm install duplexer2` in the directory where
your solution file is located.

Keep in mind that you will have to work with objects, not buffers.
Consult the documentation for further details:
https://nodejs.org/api/stream.html#stream_object_mode

When you switch on the object mode, remember to do the same for all 
additional dependencies that you work with (i.e. through2)

Create a new file called `duplexer-redux.js` which will hold your solution.

To verify your solution run:

```sh
$ {appname} verify duplexer-redux.js
```

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/duplexer_redux/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const duplexer = require('duplexer2')
const through = require('through2').obj

module.exports = function (counter) {
  const counts = {}
  const input = through(write, end)
  return duplexer({ objectMode: true }, input, counter)

  function write (row, _, next) {
    counts[row.country] = (counts[row.country] || 0) + 1
    next()
  }
  function end (done) {
    counter.setCounts(counts)
    done()
  }
}
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/duplexer_redux/solution.js) for any updates.

### Ideas and further reading

tbd

## 14 - Combiner

### Instructions

The following files may be helpful in the completion of this exercise:

```json title=books.json
[{ "name": "Neuromancer","genre": "cyberpunk" },
{ "name": "Snow Crash", "genre": "cyberpunk" },
{ "name": "Accelerando", "genre": "cyberpunk" },
{ "name": "The Diamond Age", "genre": "cyberpunk" },
{ "name": "Heavy Weather", "genre": "cyberpunk" },
{ "name": "The Heat Death of the Universe", "genre": "new wave" },
{ "name": "Bug Jack Barron", "genre": "new wave" },
{ "name": "Dangerous Visions", "genre": "new wave" },
{ "name": "A Connecticut Yankee in King Arthur's Court", "genre": "time travel" },
{ "name": "The Time Machine", "genre": "time travel" },
{ "name": "Earth Abides", "genre": "apocalypse" },
{ "name": "Alas, Babylon", "genre": "apocalypse" },
{ "name": "Riddley Walker", "genre": "apocalypse" },
{ "name": "A Deepness in the Sky", "genre": "space opera" },
{ "name": "Void", "genre": "space opera" },
{ "name": "Skylark", "genre": "space opera" },
{ "name": "The Man in the High Castle", "genre": "alternate history" },
{ "name": "Bring the Jubilee", "genre": "alternate history" }]
```

```json title=expected.json
[
  {
    "name": "cyberpunk",
    "books": [
      "Accelerando",
      "Snow Crash",
      "Neuromancer",
      "The Diamond Age",
      "Heavy Weather"
    ]
  },
  {
    "name": "new wave",
    "books": [
      "Bug Jack Barron",
      "The Heat Death of the Universe",
      "Dangerous Visions"
    ]
  },
  {
    "name": "apocalypse",
    "books": [
      "Earth Abides",
      "Alas, Babylon",
      "Riddley Walker"
    ]
  },
  {
    "name": "time travel",
    "books": [
      "A Connecticut Yankee in King Arthur's Court",
      "The Time Machine"
    ]
  },
  {
    "name": "space opera",
    "books": [
      "A Deepness in the Sky",
      "Skylark",
      "Void"
    ]
  },
  {
    "name": "alternate history",
    "books": [
      "The Man in the High Castle",
      "Bring the Jubilee"
    ]
  }
]
```

Create a module in a new file named `combiner.js`, it should return a readable/writable stream using the
`stream-combiner` module. 

You can use this code to start with:

```javascript
const combine = require('stream-combiner')
    
module.exports = function () {
  return combine(
    // read newline-separated json,
    // group books into genres,
    // then gzip the output
  )
}
```

Your stream will be written a newline-separated JSON list of science fiction
genres and books. All the books after a `"type":"genre"` row belong in that
genre until the next `"type":"genre"` comes along in the output.

```javascripton
{"type":"genre","name":"cyberpunk"}
{"type":"book","name":"Neuromancer"}
{"type":"book","name":"Snow Crash"}
{"type":"genre","name":"space opera"}
{"type":"book","name":"A Deepness in the Sky"}
{"type":"book","name":"Void"}
```

Your program should generate a newline-separated list of JSON lines of genres,
each with a `"books"` array containing all the books in that genre. The input
above would yield the output:

```javascripton
{"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
{"name":"space opera","books":["A Deepness in the Sky","Void"]}
```

Your stream should take this list of JSON lines and gzip it with
`zlib.createGzip()`.

### Hints

The `stream-combiner` module creates a pipeline from a list of streams,
returning a single stream that exposes the first stream as the writable side and
the last stream as the readable side like the `duplexer` module, but with an
arbitrary number of streams in between. Unlike the `duplexer` module, each
stream is piped to the next. For example:

```javascript
const combine = require('stream-combiner')
const stream = combine(a, b, c, d)
```

will internally do `a.pipe(b).pipe(c).pipe(d)` but the `stream` returned by
`combine()` has its writable side hooked into `a` and its readable side hooked
into `d`. 

Your module should return the combined stream that will be fed input into the 
front 'end' of the stream, reads the associated JSON, processes the input book
data by grouping it by genre and produces a gzipped result stream from which 
the result may be read.

As in the previous LINES adventure, the `split2` module is very handy here. You
can put a split2 stream directly into the stream-combiner pipeline.
Note that split2 can send empty lines too.

If you end up using `split2` and `stream-combiner`, make sure to install them
into the directory where your solution file resides by doing:

```sh
$ npm install stream-combiner split2
```

To verify your solution run: `stream-adventure verify combiner.js`

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/combiner/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const combine = require('stream-combiner')
const through = require('through2')
const split2 = require('split2')
const zlib = require('zlib')

module.exports = function () {
  const grouper = through(write, end)
  let current

  function write (line, _, next) {
    if (line.length === 0) return next()
    const row = JSON.parse(line)

    if (row.type === 'genre') {
      if (current) {
        this.push(JSON.stringify(current) + '\n')
      }
      current = { name: row.name, books: [] }
    } else if (row.type === 'book') {
      current.books.push(row.name)
    }
    next()
  }
  function end (next) {
    if (current) {
      this.push(JSON.stringify(current) + '\n')
    }
    next()
  }

  return combine(split2(), grouper, zlib.createGzip())
}
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/combiner/solution.js) for any updates.

### Ideas and further reading

tbd

## 15 - Crypt

### Instructions

Your program will be given a passphrase on `process.argv[2]`, an initialization value on `process.argv[3]` and 'aes256'
encrypted data will be written to stdin.

Simply decrypt the data and stream the result to `process.stdout`.

You can use the `crypto.createDecipheriv()` api from node core to solve this
challenge. Here's an example:

```javascript
const crypto = require('crypto')
const stream = crypto.createDecipher('RC4', 'robots')
stream.pipe(process.stdout)
stream.write(Buffer([ 135, 197, 164, 92, 129, 90, 215, 63, 92 ]))
stream.end()
```

Instead of calling `.write()` yourself, just pipe stdin into your decrypter.

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/crypt/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const crypto = require('crypto')

process.stdin
  .pipe(crypto.createDecipheriv('aes256', process.argv[2], process.argv[3]))
  .pipe(process.stdout)
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/crypt/solution.js) for any updates.

### Ideas and further reading

tbd

## 16 - Secretz

### Instructions

The following file may be helpful in the completion of this exercise:

```sh title=extra.sh
#!/bin/bash

openssl enc -d -$1 -pass pass:$2 -nosalt \
| tar xz --to-command='md5sum | head -c 33; echo $TAR_FILENAME'
```

An encrypted, gzipped tar file will be piped in on `process.stdin`. To beat this
challenge, for each file in the tar input, print a hex-encoded md5 hash of the
file contents followed by a single space followed by the file path, then a
newline.

You will receive the cipher algorithm name as `process.argv[2]`, the cipher key as
`process.argv[3]` and the cipher initialization vector as `process.argv[4]`.
You can pass these arguments directly through to `crypto.createDecipheriv()`.

The built-in zlib library you get when you `require('zlib')` has a
`zlib.createGunzip()` that returns a stream for gunzipping.

The `tar` module from npm has a `tar.Parse()` function that emits `'entry'`
events for each file in the tar input. Each `entry` object is a readable stream
of the file contents from the archive and:

    `entry.type` is the kind of file ('File', 'Directory', etc)
    `entry.path` is the file path

Using the tar module looks like:

```javascript
const tar = require('tar')
const parser = new tar.Parse()
parser.on('entry', function (e) {
    console.dir(e)
});
const fs = require('fs')
fs.createReadStream('file.tar').pipe(parser)
```

Use `crypto.createHash('md5', { encoding: 'hex' })` to generate a stream that
outputs a hex md5 hash for the content written to it.

The `concat-stream` module could be useful to concatenate all stream data.

Make sure to run `npm install tar concat-stream` in the directory where your solution
file lives.

See the [live problem description](https://github.com/workshopper/stream-adventure/blob/master/problems/secretz/problem.md) for any updates.

### Solutions

#### Official solution

```javascript
const crypto = require('crypto')
const tar = require('tar')
const zlib = require('zlib')
const concat = require('concat-stream')

const parser = new tar.Parse()
parser.on('entry', function (e) {
  if (e.type !== 'File') return e.resume()

  const h = crypto.createHash('md5', { encoding: 'hex' })
  e.pipe(h).pipe(concat(function (hash) {
    console.log(hash + ' ' + e.path)
  }))
})

const cipher = process.argv[2]
const key = process.argv[3]
const iv = process.argv[4]
process.stdin
  .pipe(crypto.createDecipheriv(cipher, key, iv))
  .pipe(zlib.createGunzip())
  .pipe(parser)
```

See the [official solution](https://github.com/workshopper/stream-adventure/blob/master/problems/secretz/solution.js) for any updates.

### Ideas and further reading

tbd
