---
title: JSNSD Course Notes
hide_title: false
sidebar_label: JSNSD
description: Notes in preparation for JSNSD
draft: false
tags: [jsnsd]
keywords: [jsnsd]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={2} />

## 1 - Introduction

- Resources for this course can be found online. Making updates to this course takes time. Therefore, if there are any changes in between updates, you can always access course updates, as well as the course resources online: Go to the Linux Foundation training website to obtain [Course Resources](https://training.linuxfoundation.org/cm/LFW212). The user ID is **LFtraining** and the password is **Penguin2014**.
- One great way to interact with peers taking this course is via the [Class Forum](https://forum.linuxfoundation.org/categories/lfw212-class-forum). The forum can be used in the following ways: 
  + To introduce yourself to other peers taking this course. 
  + To discuss concepts, tools and technologies presented in this course, or related to the topics discussed in the course materials. 
  + To ask questions or report issues with labs or course content. 
  + To share resources and ideas related to Node.js.

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

## 3 - Creating a web server

### Introduction

#### Chapter Overview

The focus of this course and the JSNSD examination centers on RESTful/HTTP services as key knowledge for almost every contemporary scenario involving Node.js and services. There is a great deal of overlap between an HTTP service and a web server. In order to make an HTTP-based service, the first step is to create an HTTP server. In this chapter we'll explore different approaches to creating a web server and perform a tour de force of selected web frameworks while we're at it. This chapter and indeed the entire course assumes prior knowledge of Node.js, including the module system and Node.js streams and Node CLI flags. See the Node.js Application Development (LFW211) course for instruction in these fundamentals.

#### Learning Objectives

By the end of this chapter, you should be able to:

- Create a minimal web server with Node core APIs.
- Create a minimal web server with the Express framework.
- Create a minimal web server with the Fastify framework.

### Creating a Web Server 

#### Creating a Web Server with Node Core (1)

Generally speaking, attempting to create a web server or service with just the Node core `http` (or `https`) module is not recommended. However, for learning purposes we'll put together a basic web server using the core `http` module in order to better understand the value that a web framework can bring and how a web framework is actually operating under the hood.

Let's define what we expect from a minimum viable web server:

- Responds to HTTP requests based on a given HTTP verb (for instance GET).
- Responds to requests based on a given route.
- Responds with 404 HTTP Status code if a route isn't found.
- Sets appropriate headers, such as Content-Type.

To meet this criteria we're going to take an iterative approach and build in layers.

> Before getting started, be aware that we'll be stopping and starting servers a lot throughout this chapter and the entire course. Make sure that any previous processes from prior sections have been terminated, especially when attempting the exercises.

To get started, we can create a folder called `http-web-server` with the following commands:

```bash
node -e "fs.mkdirSync('http-web-server')"
cd http-web-server
```

Note, throughout this course `node` with the `-e` (evaluate) flag will be used for cross-platform/cross-shell administrative commands (like creating folders).

Now, let's create a file called `server.js` with the following initial code:

```javascript
'use strict'
const http = require('http')
const PORT = process.env.PORT || 3000

const hello = `<html>
  <head>
    <style>
     body { background: #333; margin: 1.25rem }
     h1 { color: #EEE; font-family: sans-serif }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.end(hello)
})

server.listen(PORT)
```

This code can be executed with the following command:

```bash
node server.js
```

If we run this code the process will not exit by itself:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f1.png').default} />
</p>

This is because the created server is keeping the process open.

If we then navigate in a browser to `ht‌‌tp://localhost:3000`, we should see something like the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f2.png').default} />
</p>

So far we've used the Node core `http` module to create a server with the `createServer` method. We've also observed that a function is passed to `createServer`. This function is called every time the HTTP server receives a request. The function passed to `createServer` is passed two objects: the request object and the response object. These objects are created for every request and then passed to the function we supply to `createServer`.

In the function we passed to `createServer` we use the `setHeader` and the `end` methods of the response object (`res`) to set the Content-Type header to text/html, and to send the string of HTML (assigned to the `hello` constant) while also closing the connection. The `res` object inherits from `http.ServerResponse` which in turn inherits from `http.OutgoingMessage` (a Node core internal constructor) which then inherits from `stream.Stream`. For all practical purposes the `res` object is a writable stream, which is why calling `end` writes our content and also closes the connection.

The `createServer` method also returns an object which represents the server. We use the `listen` method to bind to a port. In our case, by default, we bind to port 3000. Our server can instead bind to a different port by setting the `PORT` environment variable.

#### Creating a Web Server with Node Core (2)

Our implementation does not yet meet our criteria. We can navigate to any route and the response will be the same. For instance, `ht‌tp://localhost:3000/foo`:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f3.png').default} />
</p>

Regardless of whether we use a POST, GET or any other HTTP verb, we will always get the same response.

Let's update our `server.js` code to the following:

```javascript
'use strict'
const url = require('url')
const http = require('http')
const PORT = process.env.PORT || 3000
const { STATUS_CODES } = http

const hello = `<html>
  <head>
    <style>
     body { background: #333; margin: 1.25rem }
     h1 { color: #EEE; font-family: sans-serif }
   </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`

const root = `<html>
<head>
  <style>
   body { background: #333; margin: 1.25rem }
   a { color: yellow; font-size: 2rem; font-family: sans-serif }
  </style>
</head>
<body>
  <a href='/hello'>Hello</a>
</body>
</html>
`

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.end(STATUS_CODES[res.statusCode] + '\r\n')
    return
  }
  const { pathname } = url.parse(req.url)
  if (pathname === '/') {
    res.end(root)
    return
  }
  if (pathname === '/hello') {
    res.end(hello)
    return
  }
  res.statusCode = 404
  res.end(STATUS_CODES[res.statusCode] + '\r\n')
})

server.listen(PORT)
```

We can stop the currently running `server.js` process with Ctrl+C and start our modified `server.js` file with the following command:

```bash
node server.js
```

#### Creating a Web Server with Node Core (3)

At the top of our `server.js` file we've added the additional Node core `url` module, and we've destructured the `STATUS_CODES` object, which contains key-values of status codes to HTTP status messages, from the `http` module. Just before creating our server we've also added a `root` constant which contains an HTML string with an anchor tag linking to the `/hello` route.

We've updated the function passed to `createServer` with some new logic. We check the incoming requests HTTP verb by accessing the `req.method` property. If this is not set to GET we set the `statusCode` of the `res` object to `405` (Method Not Allowed) and end the response with an appropriate status message.

We can check whether this works by running the following command in another terminal window:

```bash
node -e "ht‌tp.request('ht‌tp://localhost:3000', {method: 'POST'}, (res) => res.pipe(process.stdout)).end()"
```

This command uses the `http` module to submit a POST request to our server and then prints the result to the terminal:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f4.png').default} />
</p>

The Node core `url` module has a `parse` method which turns a URL string into an object containing various segments of the URL, such as `host`, `protocol` and `pathname`. See the [Node.js Documentation](https://nodejs.org/dist/latest-v12.x/docs/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost) to learn more.

The `req.url` property has a slightly misleading name. It does not hold the entire URL of an incoming request, only the relative path after the host portion. For instance a request to `ht‌tp://localhost:3000/hello` will result in a `req.url` of `/hello`. The reason we pass `req.url` to `url.parse` is to separate any potential query string from the URL. Now, let's consider a request to `ht‌tp://localhost:3000/hello?foo=1`. It would result in a `req.url` value of `/hello?foo=1`. Passing such a string to `url.parse` will result in an object with a `pathname` property of `/hello`.

If the `pathname` is `/` then we end the response with the contents of `root` and exit the function early with a `return` keyword. In this case, there is no need to set `res.statusCode` because the default `res.statusCode` is 200 (OK).

For more information on status codes see the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

If we navigate to `ht‌tp://localhost:3000` in the browser we should see the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f5.png').default} />
</p>

#### Creating a Web Server with Node Core (4)

If the `pathname` is `/hello` then we end the response with the contents of `hello` and exit the function. Again, no need to set the `res.statusCode` property.

In the browser, upon clicking the link or manually navigating to `ht‌tp://localhost/hello` we should see the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f6.png').default} />
</p>

If `pathname` is neither `/hello` nor `/` the end of the function is reached, where the `res.statusCode` property is set to `404` and the response is ended with the corresponding status message (Not Found).

Navigating to `ht‌tp://localhost:3000/foo` in the browser should result in the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f7.png').default} />
</p>

We have now created a very basic web server. This procedural approach can become very rigid and unwieldy if we were to attempt to extend functionality over time. In the next sections we'll learn how to use the Express and Fastify frameworks to achieve the same results in a more flexible, declarative manner.

#### Creating a Web Server with Express (1)

Now that we understand what it takes to create a rudimentary web server using Node.js core `http` and `url` modules, let's turn our attention to expediting the process of creating, extending and maintaining Node.js web servers.

Express is one of the most widely used Node.js frameworks. More so when it comes to generating and delivering HTML dynamically, as opposed to delivering RESTful JSON content as a service.

The core development efforts of the Express project have been stagnant since around 2017. Despite renewed interest in modernizing the framework from the OSS community and technology industry circa 2020, it has remained in maintenance mode. In this course, we'll be focusing on Express 4, which, although it was first released 8 years ago, is the latest major version at the time of writing (February 2022).

Even after the release of the next major version (Express 5, last alpha was two years ago, ETA unknown), understanding version 4 is essential from a pragmatic perspective since so many legacy code bases have been built using Express 3 and 4, which are fairly similar to each other.

Let's explore Express 4. First, create:

- an `express-web-server` folder with an `app.js file`
- a `routes` folder with `index.js` and `hello.js` files, and
- a `bin` folder with a `www` file:

```bash
node -e "fs.mkdirSync('express-web-server')"
cd express-web-server
node -e "fs.mkdirSync('routes')"
node -e "fs.mkdirSync('bin')"
node -e "fs.openSync('app.js', 'w')"
cd routes
node -e "fs.openSync('index.js', 'w')"
node -e "fs.openSync('hello.js', 'w')"
cd ../bin
node -e "fs.openSync('www', 'w')"
cd ..
```

Next, we'll generate a `package.json` file for the project and then install Express and another package called `http-errors`:

```bash
npm init -y
npm install express@4 http-errors@2
```

The generated `package.json` file should look similar to the following:

```json
{
  "name": "express-web-server",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.2",
    "http-errors": "^2.0.0"
  }
}
```

We need to modify the `scripts` object in the `package.json` file to the following:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node ./bin/www"
},
```

Here we've added a `start` script, so when we run `npm start` the `bin/www` file will be executed with Node.

We're using this folder structure for the sake of familiarity: it's a conventional Express structure. A tool called [`express-generator`](https://www.npmjs.com/package/express-generator) generates this structure with some other additions. We'll use the generator in the next chapter, for now we're concentrating on the bare bones to create the equivalent of our minimum viable web server that we implemented in the previous section.

#### Creating a Web Server with Express (2)

We're going to build the `app.js` file iteratively. For our first iteration `app.js` should look as follows:

```javascript
'use strict'
const express = require('express')

const app = express()

module.exports = app
```

All we're doing here is instantiating an Express instance and exporting it from the `app.js` file as a module.

The `bin/www` file is the entry point for the application, and is responsible for starting the server. It should look as follows:

```javascript
#!/usr/bin/env node
'use strict'

const app = require('../app')
const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT)
```

In the previous section we learned about the `http.createServer` method. It takes a function which is passed a request and response object. In `bin/www` we import the `app.js` file we just wrote, assign it to the `app` constant and then pass that to `http.createServer`. An Express instance on the other hand is actually a function that accepts a request object and a response object, that's why we pass the Express instance to `http.createServer`. In the next steps, we'll configure our Express `app` instance, and this will change how the function that is passed to `http.createServer` behaves.

We should now be able to get our server up and running with the following command:

```bash
npm start
```

This command will look up the `package.json` `scripts.start` field and then run the command (`node ./bin/www`). The `bin/www` file will create a server with the Node core `http.createServer` method, but use the `app.js` file to generate the function which is passed to `createServer`. Like our HTTP server in the previous section, once the process has started, it will not output anything.

If we navigate in a browser to `http://localhost:3000`, we should see the following output:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f8.png').default} />
</p>

We haven't defined any routes, so the generated Express function will default to this behavior. Before we create our routes, let's align the error handling with our HTTP server from the previous section by modifying `app.js` to the following:

```javascript
'use strict'
const express = require('express')
const createError = require('http-errors')

const app = express()

app.use((req, res, next) => {
  if (req.method !== 'GET') {
    next(createError(405))
    return
  }
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message)
})

module.exports = app
```

#### Creating a Web Server with Express (3)

Configuring an Express servers' behavior is almost always performed with `app.use` (where `app` is the Express instance). The `app.use` method takes a function which is very similar to the function that is passed to `http.createServer`. The function will be called for every incoming request, and it will be passed a request object and a response object.

The difference between the function passed to `app.use` and the function passed to `http.createServer` is that it can also have a third parameter called `next`. This is an error-first callback function that is called when the function passed to `app.use` has completed any tasks and is ready to handover to the subsequent function registered via `app.use`. So this means that instead of passing one big function to `http.createServer`, multiple functions can be registered via `app.use`. They will be called in order of registration, each one handing over to the following one when it's done processing. If the `next` function is not called, then the request handling ends there and none of the ensuing registered functions are called for that request. This approach is known as the middleware pattern. The building blocks for configuring an Express server are middleware functions.

In our case we've configured two pieces of middleware. The first middleware function we registered should always be the second-to-last middleware. Essentially, if this middleware has been reached then we can assume that no routes were matched. Therefore we generate a 404 error using the `http-errors` module (part of the Express ecosystem). The `http-errors` module will generate an appropriate message for any HTTP status code passed to it. We then pass this error object as the first argument to the `next` callback function, which let’s Express know that an error has occurred. We may also pass a 405 (Method Not Allowed) error instead, if we find that the `req.method` property does not have the value of GET. This matches the functionality in our HTTP server implementation from the first section. Currently, we have no routes registered, so a 404 error is the default for any HTTP GET requests.

The very last piece of middleware in our modified `app` file should always be the final piece of middleware. This registered middleware specifies four parameters instead of the usual three. This makes Express recognize the middleware as the final error handling middleware and passes the error object that we pass to `next` in the prior middleware as the first argument of this special error-handling middleware function. From there we can grab the HTTP status code from the error object and use it to set the response status code. Notice that we use a `res.status` function instead of the `res.statusCode` property. Similarly, we can use `res.send` instead of `res.end` to write and end the response. This is another method added by Express that will detect the Content-Type from the input, and potentially perform additional operations. For instance, if an object was passed to `res.send` that object would be serialized to JSON and the response Content-Type would automatically be set to `application/json`.

Even though the `req` and `res` objects are generated by the `http` module and have all of the same functionality, Express decorates the `req` and `res` objects with additional functionality. We could not have used `res.status` or `res.send` in the previous section because these functions did not exist. Some, including this author, view Express' decorator approach on core APIs as a mistake. By conflating Node core APIs with Express APIs on the same objects the principles of least surprise and separation of concerns are violated, while also causing performance issues. However, so much legacy code has been written with Express it's important to understand its APIs.

Let's move onto creating our routes, the `routes/index.js` file should look as follows:

```javascript
'use strict'
const { Router } = require('express')
const router = Router()

const root = `<html>
<head>
  <style>
   body { background: #333; margin: 1.25rem }
   a { color: yellow; font-size: 2rem; font-family: sans-serif }
  </style>
</head>
<body>
  <a href='/hello'>Hello</a>
</body>
</html>
`

router.get('/', (req, res) => {
  res.send(root)
})

module.exports = router
```

Note that inlining HTML like this is uncommon and it was used here only for demonstration purposes. Usually, HTML would be dynamically generated with a template language or maybe a Server Side Rendering of a frontend framework such as React. We'll look briefly at templates in the next chapter.

#### Creating a Web Server with Express (4)

To add a route we create an instance of the Express router, and then use its `get` method to define a GET route. The router supports all HTTP verbs (e.g. POST, PUT and so forth). In each case when a router HTTP verb method is called the first argument passed to it is a string declaring the path for the route. In this case we just use `/`, since this is our root route. The second argument is a route middleware function. In our case we simply send our HTML string (root) to the response. The router instance is exported from the `routes/index.js` file, and we'll later import it into `app.js` in order to register it with the Express application instance.

Now, let's create our `/hello` route. The `routes/hello.js` file should contain the following:

```javascript
'use strict'
const { Router } = require('express')
const router = Router()

const hello = `<html>
  <head>
    <style>
     body { background: #333; margin: 1.25rem }
     h1 { color: #EEE; font-family: sans-serif }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`

router.get('/', (req, res) => {
  res.send(hello)
})

module.exports = router
```

This is very similar to the root route. Note that we define the route path as `/` in this case as well, instead of `/hello`. This is because we'll be mounting this router at the `/hello` route path in `app.js` instead. This pattern allows for easy renaming of routes at the top level.

Finally, let's register our routes in `app.js`, by modifying `app.js` to the following:

```javascript
'use strict'
const express = require('express')
const createError = require('http-errors')
const indexRoutes = require('./routes')
const helloRoutes = require('./routes/hello')

const app = express()

app.use('/', indexRoutes)
app.use('/hello', helloRoutes)

app.use((req, res, next) => {
  if (req.method !== 'GET') {
    next(createError(405))
    return
  }
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message)
})

module.exports = app
```

#### Creating a Web Server with Express (5)

We imported both `routes/index.js` and `routes/hello.js`, and assigned them to `indexRoutes` and helloRoutes respectively. Then above our 404/405 error handler middleware, we registered the imported `express.Router` instances with `app.use`. The `app.use` function can optionally take a mount point, which is a string representing a route path. This means it will only apply the registered middleware (the `express.Router` instances are also middleware functions) when incoming requests match that path. We mount the `indexRoutes` at the `/` route path and the `helloRoutes` at the `/hello` route path.

We need to start a server with our new changes. If our server is still running, we can stop it with Ctrl+C and then start it again with the following command:

```bash
npm start
```

Now, if we navigate in a browser to `http://localhost:3000`, we should see the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f9.png').default} />
</p>

If we click the link (or navigate to `http://localhost:3000/hello`), we should see the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f10.png').default} />
</p>

If we navigate to a non-existent route, we should see the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f11.png').default} />
</p>

This section has been a deep-end dive into Express fundamentals. Throughout the course we'll continue to explore Express and retrace key topics.

#### Creating a Web Server with Fastify (1)

Fastify is an up-and-coming framework in the Node.js ecosystem. It's specifically geared towards creating RESTful JSON services but can also be used for serving HTML as in our example implementation in the previous two sections.

Instead of middleware, Fastify supports a plugin-based pattern which provides full code isolation and encapsulation. We'll explore this more in this section.

Fastify explicitly supports newer language features (such as async/await), has a focus on modern developer experience and is the most performant framework in the Node.js ecosystem. Not only that but Fastify also provides full Express integration via the [`fastify-express`](https://trainingportal.linuxfoundation.org/not-found) plugin. This means that the vast Express ecosystem can be used with Fastify (often at higher requests per second than using the same middleware with Express!), and entire Express projects can be encapsulated in a Fastify plugin and used as part of a Fastify project.

In this section, however, we'll implement the same server created in the previous two sections but with Fastify. Let's start by making a folder:

```bash
node -e "fs.mkdirSync('fastify-web-server')"
cd fastify-web-server
```
Now, we can run the following command to bootstrap a Fastify project:

```bash
npm init fastify
```

It's important to ensure that this command is executed within the `fastify-web-server` folder otherwise files will be added to unintended locations.

This command should produce output similar to the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f12.png').default} />
</p>

As we can see from the output, the `npm init fastify` command creates some files in the current working directory. The following files and folders are generated:

- `.gitignore`
- `package.json`
- `app.js`
- `plugins/README.md`
- `test/helper.js`
- `routes/README.md`
- `plugins/support.js`
- `routes/root.js`
- `test/routes/example.test.js`
- `test/plugins/support.test.js`
- `routes/example/index.js`
- `test/routes/root.test.js`

We'll only need to edit the `app.js`, `routes/root.js` and `routes/example/index.js` files to create the same implementation as in the previous two sections.

#### Creating a Web Server with Fastify (2)

Before doing anything else, let's make sure that the project dependencies are installed. In the same folder, let's run the following command:

```bash
npm install
```

While that's running, let's take a look at the contents of the `app.js` file (any comments have been stripped):

```javascript
'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = async function (fastify, opts) {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
```

The `app.js` file is the entry-point for the project and exports an `async` function. A Fastify plugin is a function that accepts a server instance and options as parameters. It may accept a third parameter, a `next` callback or it may return a promise (which is what an `async` function does). So the `app.js` file is actually exporting a Fastify plugin.

The server instance that is passed as the first argument to this function is named `fastify`. Additional plugins are registered with the `registered` method. In this case, a single plugin is registered twice. The `fastify-autoload` plugin automatically loads folders of plugins, so all `app.js` is doing is setting up a convenient way for us to define and work with plugins and routes. In both cases where `fastify.register` is called, the `fastify-autoload` plugin (`AutoLoad`) is passed as the first parameter and an object is passed as the second parameter. This second parameter is the options for the `AutoLoad` plugin. The `dir` option in each case points the `fastify-autoload` plugin to a `plugins` folder and a `routes` folder. The `options` option in each case specifies options that would be passed to all plugins that are autoloaded. It's essentially shallow merging the options passed to the `app.js` plugin function with an empty object.

The `package.json` added by the `npm init fastify` command should look something like the following:

```json
{
  "name": "bah",
  "version": "1.0.0",
  "description": "This project was bootstrapped with Fastify-CLI.",
  "main": "app.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "tap \"test/**/*.test.js\"",
    "start": "fastify start -l info app.js",
    "dev": "fastify start -w -l info -P app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "fastify": "^3.0.0",
    "fastify-autoload": "^3.10.0",
    "fastify-cli": "^2.15.0",
    "fastify-plugin": "^3.0.0",
    "fastify-sensible": "^3.1.2"
  },
  "devDependencies": {
    "tap": "^15.1.6"
  }
}
```

#### Creating a Web Server with Fastify (3)

In the `scripts` field of the `package.json` we can see a `start` field and a `dev` field. In each case the app.js file is booted with the `fastify start` command. This works because the `fastify-cli` dependency (which can be seen in the `dependencies` field of the `package.json`) provides a CLI named `fastify` which is accessible to npm when running `package.json` scripts. The `fastify start` command automatically starts the server (performing the same role as the `bin/www` file in the Express example). Notice we have no defined port, this is because `fastify start` defaults to port 3000, it could be configured with the `-p` flag (lowercase) if desired.

In the `dev` script there are two additional flags: `-w` and `-P` (uppercase). The `-P` flag means "prettify the log output", which would otherwise be newline delimited JSON logs. The `-w` flag means “watch and reload the project as we work on it”, so we can go ahead and run the following to start our server:

```bash
npm run dev
```

This should display something like the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f13.png').default} />
</p>

We shouldn't need to start and stop the server as we make changes, that will happen automatically.

We can check the server is running correctly by navigating to `http://localhost:3000` in the browser. We should see something like the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f14.png').default} />
</p>

In Fastify, everything is a plugin. The distinction between plugins and routes is mostly convention-setting to help us reason about a server or service's functionality. The files in the `routes` folder are actually plugins (exported functions that return promises or use a `next` callback). The files in the `plugins` folder are also plugins, but they are more commonly de-encapsulated plugins, meaning that the functionality that they provide can be accessed by sibling plugins. Think of the `plugins` folder like a `lib` folder, but where a strict and enforceable common interface is used for every exported piece of functionality. Use of the `plugins` folder will be explored more in later sections. The entry point is a plugin. Routes are plugins. Plugins (local libraries) are plugins.

#### Creating a Web Server with Fastify (4)

A key difference between Express middleware and Fastify plugins is that Express middleware is executed for every request (if reachable) but Fastify plugins are called only at initialization time. Fastify plugins are always asynchronous (either with a callback or a returned promise) to allow for asynchronous initialization of every plugin.

Now, let's focus on the `routes` folder. We just saw that the root route (`/`) responds with `{"root":true}`. Let's take a look at the code in `routes/root.js`:

```javascript
'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
}
```

The `routes/root.js` file exports an `async` function that accepts the `fastify` instance and an options argument. The `routes/root.js` file exports a Fastify plugin. A Fastify plugin is a function that takes the server instance (`fastify`).

Within the plugin function, `fastify.get` is called. This registers an HTTP GET route. The first argument is a string containing a forward slash (`/`), indicating that the route being registered is the root route (`/`). All HTTP verbs can be called as methods on the `fastify` instance (e.g. `fastify.post`, `fastify.put` and so on).

The second argument passed to `fastify.get` is an `async` function, the route handler, which accepts the `request` and `reply` objects. The `request` and `reply` objects have the same objective as the `http` and Express `req` and `res` objects but they have a different (and separate API). To learn more see the ["Fastify: Request"](https://www.fastify.io/docs/v3.27.x/Reference/Request/) and ["Fastify: Reply"](https://www.fastify.io/docs/v3.27.x/Reference/Reply/) Documentation.

The `fastify.get` method can accept a normal synchronous function or an async function. Whatever is returned from the function or async function is automatically processed and sent as the content of the HTTP response.

Alternatively the `reply.send` method can be used (e.g. `reply.send({root: true})`), which is similar to the `res.send` method of Express. This can be useful when working with nested callback APIs.

Since an object is returned, Fastify converts it to a JSON payload before sending it as a response.

Let's edit the `routes/root.js` file to the following:

```javascript
'use strict'

const root = `<html>
<head>
  <style>
   body { background: #333; margin: 1.25rem }
   a { color: yellow; font-size: 2rem; font-family: sans-serif }
  </style>
</head>
<body>
  <a href='/hello'>Hello</a>
</body>
</html>
`

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.type('text/html')
    return root
  })
}
```

We've added the now familiar `root` string of HTML as a constant to the `routes/root.js` file and then we return root from the `async` function passed to `fastify.get` instead of returning an object. We've also used the Fastify API method `reply.type` to set the Content-Type header to `text/html`.

#### Creating a Web Server with Fastify (5)

If we now navigate in the browser to `http://localhost:3000` we should see the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f15.png').default} />
</p>

The other defined route is in `routes/example/index.js`, let's see what that looks like:

```javascript
'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
}
```

This code is very similar to the original `routes/root.js` route. Again, we have an exported `async` function that accepts the server instance (`fastify`) and options (`opts`). And again `fastify.get` is used to register a route, where the second parameter is an `async` function that is passed `request` and `reply` objects representing the incoming request and the outgoing response. However notice that the defined route, the first argument passed to `fastify.get`, is also `/` (not `/example`).

Let's navigate to `http://localhost:3000/example` in the browser:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f16.png').default} />
</p>

When a route is defined in a subfolder, by default, the `fastify-autoload` plugin will register that route prefixed with the name of the subfolder. So the example route is at `routes/examples/index.js` and registers a route at `/`. This causes `fastify-autoload` to register the server route at `/example`. If the route passed to `fastify.get` in `routes/example/index.js` had been `/foo` then `fastify-autoload` would have registered that route at `/example/foo`.

#### Creating a Web Server with Fastify (6)

We need a `/hello` route, so let's rename the `routes/example` folder to `routes/hello`. Leaving the `npm run dev` command running, use another terminal with the working directory set to our `fastify-web-server` folder to run the following:

```bash
cd routes
node -e "fs.renameSync('example', 'hello')"
cd ..
```

Attempting to load `http://localhost:3000/example` in the browser will now result in the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f17.png').default} />
</p>

This is the default Fastify 404 handling behavior. We'll modify this later to align with our server implementations, but for now we can see that the `/example` route no longer exists. However, if we navigate to `http://localhost:3000/hello`, we should see the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f18.png').default} />
</p>

Now, let's modify `routes/hello/index.js` to contain the following code:

```javascript
'use strict'

const hello = `<html>
  <head>
    <style>
     body { background: #333; margin: 1.25rem }
     h1 { color: #EEE; font-family: sans-serif }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.type('text/html')
    return hello
  })
}
```

#### Creating a Web Server with Fastify (7)

Again, we see the familiar `hello` constant, which is returned from the route handler function passed as the second argument to `fastify.get`. At this point we can see that the code is somewhat repetitive. This is a good thing, Fastify is providing a strong declarative structure allowing us to focus on what we actually want to do instead of how to do it.

If we now navigate to `http://localhost:3000/hello` we should see the following:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f19.png').default} />
</p>

Finally to fully align this implementation with the `http` and Express implementations we need to modify the Not Found and Method Not Allowed behavior by making our `app.js` file look as follows (comments have been stripped):

```javascript
'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = async function (fastify, opts) {

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

  fastify.setNotFoundHandler((request, reply) => {
    if (request.method !== 'GET') {
      reply.status(405)
      return 'Method Not Allowed\n'
    }
    return 'Not Found\n'
  })

}
```

The only addition is the `fastify.setNotFoundHandler` method call. This method accepts a function with the same criteria as the route handler function passed to `fastify.get` (and `fastify.post`, `fastify.put` and so on). In our case, we use a normal function, inspect the HTTP method and if it is not GET we set the HTTP status code to 405 and then return the associated message (Method Not Allowed). Otherwise we return the 404 message (Not Found). Fastify will call this function and use its output in cases where a route cannot be found (which includes routes that haven't been registered with the requested HTTP verb).

This has been an intense primer on Fastify. In the following chapters we'll be using it more and learning more about it as we go forward.

### Lab Exercises

#### Lab 3.1 - Deliver Data from a Library API 

The `labs-1` folder contains the following files:

- `data.js`
- `package.json`
- `validate.js`

The `data.js` file contains the following:

```javascript
'use strict'
const { promisify } = require('util')
const { randomBytes } = require('crypto')
const timeout = promisify(setTimeout)

async function data() {
  await timeout(50)
  return randomBytes(10).toString('base64')
}

module.exports = data
```

The `data.js` file exports a function that returns a promise (an async function) that resolves to a random BASE64 string. This function represents some kind of asynchronous data source. 

The `package.json` file contains the following:

```json
{
  "name": "labs-1",
  "scripts": {
    "start": "echo \"TODO: SET THE START SCRIPT\" && exit 1"
  }
}
```

Using any Node core library and/or web framework create an HTTP server that meets the following criteria:

- Listens on `localhost`
- Listens on port `3000`
- Responds to HTTP GET requests to `/` with data from the data function as exported from the `data.js`
- Responds with a 404 to GET requests to any other route

The `package.json` start script must contain a command to start the server.

Run the following command to check whether the created server meets the criteria:

```bash
node validate
```

If the server was correctly implemented, the output of this command should be as follows:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f20.png').default} />
</p>

#### Lab 3.2 - Implement a Status Code Response

The `labs-2` folder contains the following files:

- `package.json`
- `validate.js`

The `package.json` file contains the following:

```json
{
  "name": "labs-2",
  "scripts": {
    "start": "echo \"TODO: SET THE START SCRIPT\" && exit 1"
  }
}
```

Using any Node core library and/or web framework create an HTTP server that meets the following criteria:

- Listens on localhost
- Listens on port 3000
- Responds to HTTP GET requests to / with a 200 OK HTTP status, the content is irrelevant
- Responds to HTTP POST requests to / with a 405 Method Not Allowed HTTP status

The `package.json` `start` script must contain a command to start the server.

Run the following command to check whether the created server meets the criteria:

```bash
node validate
```

If the server was correctly implemented, the output of this command should be as follows:

<p align='center'>
  <img width='700px' src={require('@site/static/img/course-notes/jsnsd/3-f21.png').default} />
</p>

## 4 - Serving Web Content

### Serving Web Content


### Lab Exercises


## 5 - Creating RESTful JSON Services

### Creating RESTful JSON Services


### Lab Exercises


## 6 - Manipulating Data with RESTful Services

### Manipulating Data with RESTful Services


### Lab Exercises


## 7 - Consuming and Aggregating Services

### Consuming and Aggregating Services


### Lab Exercises


## 8 - Proxying HTTP Requests

### Proxying HTTP Requests


### Lab Exercises


## 9 - Web Security: Handling User Input

### Web Security: Handling User Input


### Lab Exercises


## 10 - Web Security: Mitigating Attacks

###  Web Security: Mitigating Attacks


### Lab Exercises


## 11 - Course Completion

###  Course Completion


### Lab Exercises


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

### 3 - Creating a Web Server

#### 3.1

<Tabs>
<TabItem value='3.1-q' label='Question'>

How is an HTTP server initialized with Node's core `http` module?

- (A) `http.initServer`
- (B) `http.listen`
- (C) `http.createServer`

</TabItem>
<TabItem value='3.1-a' label='Answer'>

C

</TabItem>
<TabItem value='3.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 3.2

<Tabs>
<TabItem value='3.2-q' label='Question'>

In Express, what is middleware?

- (A) A unit of functionality represented by a function that takes request and response objects, and a callback function. The function is called on each request in the order that it was registered relative to other registered functions.
- (B) A unit of functionality represented by a function exported from a module that returns a promise or specifies a callback in its signature. The function is called only on initialization.
- (C) A piece of code which is inserted in the middle of a function to massage the data from a request before it is sent as a response by returning it from the function.

</TabItem>
<TabItem value='3.2-a' label='Answer'>

answer

</TabItem>
<TabItem value='3.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 3.3

<Tabs>
<TabItem value='3.3-q' label='Question'>

What happens when a value is returned from a Fastify route handler function?

- (A) Nothing, it's ignored
- (B) An error is thrown
- (C) It's processed and sent as the response

</TabItem>
<TabItem value='3.3-a' label='Answer'>

answer

</TabItem>
<TabItem value='3.3-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 4 - Serving Web Content

#### 4.1

<Tabs>
<TabItem value='4.1-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='4.1-a' label='Answer'>

answer

</TabItem>
<TabItem value='4.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 4.2

<Tabs>
<TabItem value='4.2-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='4.2-a' label='Answer'>

answer

</TabItem>
<TabItem value='4.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 4.3

<Tabs>
<TabItem value='4.3-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='4.3-a' label='Answer'>

answer

</TabItem>
<TabItem value='4.3-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 5 - Creating RESTful JSON Services

#### 5.1

<Tabs>
<TabItem value='5.1-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='5.1-a' label='Answer'>

answer

</TabItem>
<TabItem value='5.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 5.2

<Tabs>
<TabItem value='5.2-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='5.2-a' label='Answer'>

answer

</TabItem>
<TabItem value='5.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 5.3

<Tabs>
<TabItem value='5.3-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='5.3-a' label='Answer'>

answer

</TabItem>
<TabItem value='5.3-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 6 - Manipulating Data with RESTful Services

#### 6.1

<Tabs>
<TabItem value='6.1-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='6.1-a' label='Answer'>

answer

</TabItem>
<TabItem value='6.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 6.2

<Tabs>
<TabItem value='6.2-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='6.2-a' label='Answer'>

answer

</TabItem>
<TabItem value='6.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 6.3

<Tabs>
<TabItem value='6.3-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='6.3-a' label='Answer'>

answer

</TabItem>
<TabItem value='6.3-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 7 - Consuming and Aggregating Services

#### 7.1

<Tabs>
<TabItem value='7.1-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='7.1-a' label='Answer'>

answer

</TabItem>
<TabItem value='7.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 7.2

<Tabs>
<TabItem value='7.2-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='7.2-a' label='Answer'>

answer

</TabItem>
<TabItem value='7.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 7.3

<Tabs>
<TabItem value='7.3-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='7.3-a' label='Answer'>

answer

</TabItem>
<TabItem value='7.3-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 8 - Proxying HTTP Requests

#### 8.1

<Tabs>
<TabItem value='8.1-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='8.1-a' label='Answer'>

answer

</TabItem>
<TabItem value='8.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 8.2

<Tabs>
<TabItem value='8.2-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='8.2-a' label='Answer'>

answer

</TabItem>
<TabItem value='8.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 8.3

<Tabs>
<TabItem value='8.3-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='8.3-a' label='Answer'>

answer

</TabItem>
<TabItem value='8.3-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 9 - Web Security: Handling User Input

#### 9.1

<Tabs>
<TabItem value='9.1-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='9.1-a' label='Answer'>

answer

</TabItem>
<TabItem value='9.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 9.2

<Tabs>
<TabItem value='9.2-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='9.2-a' label='Answer'>

answer

</TabItem>
<TabItem value='9.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 9.3

<Tabs>
<TabItem value='9.3-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='9.3-a' label='Answer'>

answer

</TabItem>
<TabItem value='9.3-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

### 10 - Web Security: Mitigating Attacks

#### 10.1

<Tabs>
<TabItem value='10.1-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='10.1-a' label='Answer'>

answer

</TabItem>
<TabItem value='10.1-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 10.2

<Tabs>
<TabItem value='10.2-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='10.2-a' label='Answer'>

answer

</TabItem>
<TabItem value='10.2-ad' label='Additional Details'>

None

</TabItem>
</Tabs>

#### 10.3

<Tabs>
<TabItem value='10.3-q' label='Question'>



- (A) 
- (B) 
- (C) 

</TabItem>
<TabItem value='10.3-a' label='Answer'>

answer

</TabItem>
<TabItem value='10.3-ad' label='Additional Details'>

None

</TabItem>
</Tabs>
