---
title: React from the Beginning
hide_title: false
sidebar_label: React from the Beginning (Rob Bunch)
description: Notes on the appendices
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

:::info Course Notes Outline

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={5} />

:::

## Reference

- **[`create-react-app` (NPM)](https://www.npmjs.com/package/create-react-app):** The NPM page largely just refers you on to several of the links listed below.
- **[`create-react-app` (GitHub):](https://github.com/facebook/create-react-app)** See the latest additions/modifications to `create-react-app`. 
- **[Glossary of React Terms:](https://reactjs.org/docs/glossary.html)** Get acquainted with all of the lingo and jargon surrounding React.

### `create-react-app` docs outline

+ [`create-react-app` docs homepage](https://create-react-app.dev/docs/getting-started/)
+ **Welcome**
  * [About Docs](https://create-react-app.dev/docs/documentation-intro)
+ **Getting Started**
  * [Getting Started](https://create-react-app.dev/docs/getting-started)
  * [Folder Structure](https://create-react-app.dev/docs/folder-structure/)
  * [Available Scripts](https://create-react-app.dev/docs/available-scripts/)
  * [Supported Browsers and Features](https://create-react-app.dev/docs/supported-browsers-features/)
  * [Updating to New Releases](https://create-react-app.dev/docs/updating-to-new-releases/)
+ **Development**
  * [Editor Setup](https://create-react-app.dev/docs/setting-up-your-editor/)
  * [Developing Components in Isolation](https://create-react-app.dev/docs/developing-components-in-isolation/)
  * [Analyzing Bundle Size](https://create-react-app.dev/docs/analyzing-the-bundle-size/)
  * [HTTPS in Development](https://create-react-app.dev/docs/using-https-in-development/)
+ **Styles and Assets**
  * [Adding Stylesheets](https://create-react-app.dev/docs/adding-a-stylesheet/)
  * [Adding CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
  * [Adding Sass Stylesheets](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)
  * [Adding CSS Reset](https://create-react-app.dev/docs/adding-css-reset/)
  * [Post-Processing CSS](https://create-react-app.dev/docs/post-processing-css/)
  * [Adding Images, Fonts, and Files](https://create-react-app.dev/docs/adding-images-fonts-and-files/)
  * [Loading .graphql Files](https://create-react-app.dev/docs/loading-graphql-files/)
  * [Using the Public Folder](https://create-react-app.dev/docs/using-the-public-folder/)
  * [Code Splitting](https://create-react-app.dev/docs/code-splitting/)
+ **Building your App**
  * [Install a Dependency](https://create-react-app.dev/docs/installing-a-dependency/)
  * [Importing a Component](https://create-react-app.dev/docs/importing-a-component/)
  * [Using Global Variables](https://create-react-app.dev/docs/using-global-variables/)
  * [Adding Bootstrap](https://create-react-app.dev/docs/adding-bootstrap/)
  * [Adding Flow](https://create-react-app.dev/docs/adding-flow/)
  * [Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)
  * [Adding Relay](https://create-react-app.dev/docs/adding-relay/)
  * [Adding a Router](https://create-react-app.dev/docs/adding-a-router/)
  * [Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
  * [Making a Progressive Web App](https://create-react-app.dev/docs/making-a-progressive-web-app/)
  * [Creating a Production Build](https://create-react-app.dev/docs/production-build/)
+ **Testing**
  * [Running Tests](https://create-react-app.dev/docs/running-tests/)
  * [Debugging Tests](https://create-react-app.dev/docs/debugging-tests/)
+ **Back-End Integration**
  * [Proxying in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
  * [Fetching Data](https://create-react-app.dev/docs/fetching-data-with-ajax-requests/)
  * [Integrating with an API](https://create-react-app.dev/docs/integrating-with-an-api-backend/)
  * [Title & Meta Tags](https://create-react-app.dev/docs/title-and-meta-tags/)
+ **Deployment**
  * [Deployment](https://create-react-app.dev/docs/deployment/)
+ **Advanced Usage**
  * [Custom Templates](https://create-react-app.dev/docs/custom-templates/)
  * [Can I Use Decorators?](https://create-react-app.dev/docs/can-i-use-decorators/)
  * [Pre-Rendering Static HTML](https://create-react-app.dev/docs/pre-rendering-into-static-html-files/)
  * [Advanced Configuration](https://create-react-app.dev/docs/advanced-configuration/)
  * [Alternatives to Ejecting](https://create-react-app.dev/docs/alternatives-to-ejecting/)
+ **Support**
  * [Troubleshooting](https://create-react-app.dev/docs/troubleshooting/)

### `React.Component` (docs reference in a nutshell)

See [React.Component](https://reactjs.org/docs/react-component.html) in the docs for all the gory details. Below is a modest attempt to provide just a nuts and bolts reference for ease of use (i.e., consult the actual docs for examples of everything below).

Each component has several "lifecycle methods" that you can override to run code at particular times in the process. You can use [this lifecycle diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.

- **Mounting:** These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
  + **[constructor()](https://reactjs.org/docs/react-component.html#constructor)**
  + [static getDerivedStateFromProps()](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops) 
  + **[render()](https://reactjs.org/docs/react-component.html#render)**
  + **[componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)**
  + **Note:** These methods are considered legacy and you should [avoid them](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) in new code:
    * [UNSAFE_componentWillMount()](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount)
- **Updating:** An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
  + [static getDerivedStateFromProps()](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
  + [shouldComponentUpdate()](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
  + **[render()](https://reactjs.org/docs/react-component.html#render)**
  + [getSnapshotBeforeUpdate()](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)
  + **[componentDidUpdate()](https://reactjs.org/docs/react-component.html#componentdidupdate)** These methods are considered legacy and you should avoid them in new code:
  + **Note:** These methods are considered legacy and you should [avoid them](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) in new code:
    * [UNSAFE_componentWillUpdate()](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate)
    * [UNSAFE_componentWillReceiveProps()](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)
- **Unmounting:** This method is called when a component is being removed from the DOM:
  + **[componentWillUnmount()](https://reactjs.org/docs/react-component.html#componentwillunmount)**
- **Error Handling:** These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
  + [static getDerivedStateFromError()](https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror)
  + [componentDidCatch()](https://reactjs.org/docs/react-component.html#componentdidcatch)
- **Other APIs:** Each component also provides some other APIs:
  + [setState()](https://reactjs.org/docs/react-component.html#setstate)
  + [forceUpdate()](https://reactjs.org/docs/react-component.html#forceupdate)
- **Class Properties**
  + [defaultProps](https://reactjs.org/docs/react-component.html#defaultprops)
  + [displayName](https://reactjs.org/docs/react-component.html#displayname)
- **Instance Properties**
  + [props](https://reactjs.org/docs/react-component.html#props)
  + [state](https://reactjs.org/docs/react-component.html#state)

### Conditional rendering cheatsheet 

[This article](https://www.robinwieruch.de/conditional-rendering-react) gives a *very* nice overview of conditional rendering in React. The author specifies the following waysof conditional rendering: if, if else, ternary, switch case, multiple conditional renderings in React, nested conditional rendering in React, conditional rendering with higher-order components, and finally if else components. Here's the actual cheatsheet:
+ [if](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-if)
  * most basic conditional rendering
  * use to opt-out early from a rendering (guard pattern)
  * cannot be used within return statement and JSX (except self invoking function)
+ [if-else](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-if-else)
  * use it rarely, because it's verbose
  * instead, use ternary operator or logical && operator
  * cannot be used inside return statement and JSX (except self invoking function)
+ [ternary operator](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-ternary)
  * use it instead of an if-else statement
  * it can be used within JSX and return statement
+ [logical && operator](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-)
  * use it when one side of the ternary operation would return null
  * it can be used inside JSX and return statement
+ [switch case](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-switch-case)
  * avoid using it, because it's too verbose
  * instead, use enums
  * cannot be used within JSX and return (except self invoking function)
+ [enums: multiple conditional renderings](https://www.robinwieruch.de/conditional-rendering-react#multiple-conditional-renderings-in-react)
  * use it for conditional rendering based on multiple states
  * perfect to map more than one condition
+ [nested conditional rendering](https://www.robinwieruch.de/conditional-rendering-react#nested-conditional-rendering-in-react)
  * avoid them for the sake of readability
  * instead, split out components, use if statements, or use HOCs
+ [conditional rendering with higher-order components](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-with-hoc)
  * components can focus on their main purpose
  * use HOC to shield away conditional rendering
  * use multiple composable HOCs to shield away multiple conditional renderings
+ [external templating components: if else components](https://www.robinwieruch.de/conditional-rendering-react#if-else-components-in-react)
  * avoid them and be comfortable with JSX and JS

### React Router (docs reference)

The following are a few of the helpful links to get started with React Router:

- [Official Documentation](https://reacttraining.com/react-router/)
- [Quick Start Docs for React Router on the Web](https://reacttraining.com/react-router/web/guides/quick-start)
- [Philosophy of React Router](https://reacttraining.com/react-router/core/guides/philosophy)
- [GitHub Home for react-router](https://github.com/ReactTraining/react-router)
- [NPM Home for react-router](https://www.npmjs.com/package/react-router)
- [GitHub Home for react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [NPM Home for react-router-dom](https://www.npmjs.com/package/react-router-dom)

Now for the actual docs reference:

- **Announcements**
  + [The Future of React Router](https://reacttraining.com/blog/reach-react-router-future/)
- **Examples**
  + [Basic](https://reacttraining.com/react-router/web/example/basic)
  + [URL Parameters](https://reacttraining.com/react-router/web/example/url-params)
  + [Nesting](https://reacttraining.com/react-router/web/example/nesting)
  + [Redirects (Auth)](https://reacttraining.com/react-router/web/example/auth-workflow)
  + [Custom Link](https://reacttraining.com/react-router/web/example/custom-link)
  + [Preventing Transitions](https://reacttraining.com/react-router/web/example/preventing-transitions)
  + [No Match (404)](https://reacttraining.com/react-router/web/example/no-match)
  + [Recursive Paths](https://reacttraining.com/react-router/web/example/recursive-paths)
  + [Sidebar](https://reacttraining.com/react-router/web/example/sidebar)
  + [Animated Transitions](https://reacttraining.com/react-router/web/example/animated-transitions)
  + [Route Config](https://reacttraining.com/react-router/web/example/route-config)
  + [Modal Gallery](https://reacttraining.com/react-router/web/example/modal-gallery)
  + [StaticRouter Context](https://reacttraining.com/react-router/web/example/static-router)
  + [Query Parameters](https://reacttraining.com/react-router/web/example/query-parameters)
- **Guides**
  + [Quick Start](https://reacttraining.com/react-router/web/guides/quick-start)
  + [Primary Components](https://reacttraining.com/react-router/web/guides/primary-components)
  + [Server Rendering](https://reacttraining.com/react-router/web/guides/server-rendering)
  + [Code Splitting](https://reacttraining.com/react-router/web/guides/code-splitting)
  + [Scroll Restoration](https://reacttraining.com/react-router/web/guides/scroll-restoration)
  + [Philosophy](https://reacttraining.com/react-router/web/guides/philosophy)
  + [Testing](https://reacttraining.com/react-router/web/guides/testing)
  + [Redux Integration](https://reacttraining.com/react-router/web/guides/redux-integration)
  + [Static Routes](https://reacttraining.com/react-router/web/guides/static-routes)
- **API**
  + **[Hooks](https://reacttraining.com/react-router/web/api/Hooks)**
    - [useHistory](https://reacttraining.com/react-router/web/api/Hooks/usehistory)
    - [useLocation](https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    - [useParams](https://reacttraining.com/react-router/web/api/Hooks/useparams)
    - [useRouteMatch](https://reacttraining.com/react-router/web/api/Hooks/useroutematch)
  + **[`<BrowserRouter>`](https://reacttraining.com/react-router/web/api/BrowserRouter)**
    - [basename: string](https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string)
    - [getUserConfirmation: func](https://reacttraining.com/react-router/web/api/BrowserRouter/getuserconfirmation-func)
    - [forceRefresh: bool](https://reacttraining.com/react-router/web/api/BrowserRouter/forcerefresh-bool)
    - [keyLength: number](https://reacttraining.com/react-router/web/api/BrowserRouter/keylength-number)
    - [children: node](https://reacttraining.com/react-router/web/api/BrowserRouter/children-node)
  + **[`<HashRouter>`](https://reacttraining.com/react-router/web/api/HashRouter)**
    - [basename: string](https://reacttraining.com/react-router/web/api/HashRouter/basename-string)
    - [getUserConfirmation: func](https://reacttraining.com/react-router/web/api/HashRouter/getuserconfirmation-func)
    - [hashType: string](https://reacttraining.com/react-router/web/api/HashRouter/hashtype-string)
    - [children: node](https://reacttraining.com/react-router/web/api/HashRouter/children-node)
  + **[`<Link>`](https://reacttraining.com/react-router/web/api/Link)**
    - [to: string](https://reacttraining.com/react-router/web/api/Link/to-string)
    - [to: object](https://reacttraining.com/react-router/web/api/Link/to-object)
    - [to: function](https://reacttraining.com/react-router/web/api/Link/to-function)
    - [replace: bool](https://reacttraining.com/react-router/web/api/Link/replace-bool)
    - [innerRef: function](https://reacttraining.com/react-router/web/api/Link/innerref-function)
    - [innerRef: RefObject](https://reacttraining.com/react-router/web/api/Link/innerref-refobject)
    - [others](https://reacttraining.com/react-router/web/api/Link/others)
  + **[`<NavLink>`](https://reacttraining.com/react-router/web/api/NavLink)**
    - [activeClassName: string](https://reacttraining.com/react-router/web/api/NavLink/activeclassname-string)
    - [activeStyle: object](https://reacttraining.com/react-router/web/api/NavLink/activestyle-object)
    - [exact: bool](https://reacttraining.com/react-router/web/api/NavLink/exact-bool)
    - [strict: bool](https://reacttraining.com/react-router/web/api/NavLink/strict-bool)
    - [isActive: func](https://reacttraining.com/react-router/web/api/NavLink/isactive-func)
    - [location: object](https://reacttraining.com/react-router/web/api/NavLink/location-object)
    - [aria-current: string](https://reacttraining.com/react-router/web/api/NavLink/aria-current-string)
  + **[`<Prompt>`](https://reacttraining.com/react-router/web/api/Prompt)**
  + **[`<MemoryRouter>`](https://reacttraining.com/react-router/web/api/MemoryRouter)**
    - [initialEntries: array](https://reacttraining.com/react-router/web/api/MemoryRouter/initialentries-array)
    - [initialIndex: number](https://reacttraining.com/react-router/web/api/MemoryRouter/initialindex-number)
    - [getUserConfirmation: func](https://reacttraining.com/react-router/web/api/MemoryRouter/getuserconfirmation-func)
    - [keyLength: number](https://reacttraining.com/react-router/web/api/MemoryRouter/keylength-number)
    - [children: node](https://reacttraining.com/react-router/web/api/MemoryRouter/children-node)
  + **[`<Redirect>`](https://reacttraining.com/react-router/web/api/Redirect)**
    - [to: string](https://reacttraining.com/react-router/web/api/Redirect/to-string)
    - [to: object](https://reacttraining.com/react-router/web/api/Redirect/to-object)
    - [push: bool](https://reacttraining.com/react-router/web/api/Redirect/push-bool)
    - [from: string](https://reacttraining.com/react-router/web/api/Redirect/from-string)
    - [exact: bool](https://reacttraining.com/react-router/web/api/Redirect/exact-bool)
    - [strict: bool](https://reacttraining.com/react-router/web/api/Redirect/strict-bool)
    - [sensitive: bool](https://reacttraining.com/react-router/web/api/Redirect/sensitive-bool)
  + **[`<Route>`](https://reacttraining.com/react-router/web/api/Route)**
    - [Route render methods](https://reacttraining.com/react-router/web/api/Route/route-render-methods)
    - [Route props](https://reacttraining.com/react-router/web/api/Route/route-props)
    - [component](https://reacttraining.com/react-router/web/api/Route/component)
    - [render: func](https://reacttraining.com/react-router/web/api/Route/render-func)
    - [children: func](https://reacttraining.com/react-router/web/api/Route/children-func)
    - [path: string | string[]](https://reacttraining.com/react-router/web/api/Route/path-string-string)
    - [exact: bool](https://reacttraining.com/react-router/web/api/Route/exact-bool)
    - [strict: bool](https://reacttraining.com/react-router/web/api/Route/strict-bool)
    - [location: object](https://reacttraining.com/react-router/web/api/Route/location-object)
    - [sensitive: bool](https://reacttraining.com/react-router/web/api/Route/sensitive-bool)
  + **[`<Router>`](https://reacttraining.com/react-router/web/api/Router)**
    - [history: object](https://reacttraining.com/react-router/web/api/Router/history-object)
    - [children: object](https://reacttraining.com/react-router/web/api/Router/children-node)
  + **[`<StaticRouter>`](https://reacttraining.com/react-router/web/api/StaticRouter)**
    - [basename: string](https://reacttraining.com/react-router/web/api/StaticRouter/basename-string)
    - [location: string](https://reacttraining.com/react-router/web/api/StaticRouter/location-string)
    - [location: object](https://reacttraining.com/react-router/web/api/StaticRouter/location-object)
    - [context: object](https://reacttraining.com/react-router/web/api/StaticRouter/context-object)
    - [children: node](https://reacttraining.com/react-router/web/api/StaticRouter/children-node)
  + **[`<Switch>`](https://reacttraining.com/react-router/web/api/Switch)**
    - [location: object](https://reacttraining.com/react-router/web/api/Switch/location-object)
    - [children: node](https://reacttraining.com/react-router/web/api/Switch/children-node)
  + **[`history`](https://reacttraining.com/react-router/web/api/history)**
    - [history is mutable](https://reacttraining.com/react-router/web/api/history/history-is-mutable)
  + **[`location`](https://reacttraining.com/react-router/web/api/location)**
  + **[`match`](https://reacttraining.com/react-router/web/api/match)**
    - [null matches](https://reacttraining.com/react-router/web/api/match/null-matches)
  + **[`matchPath`](https://reacttraining.com/react-router/web/api/matchPath)**
    - [pathname](https://reacttraining.com/react-router/web/api/matchPath/pathname)
    - [props](https://reacttraining.com/react-router/web/api/matchPath/props)
    - [returns](https://reacttraining.com/react-router/web/api/matchPath/returns)
  + **[`withRouter`](https://reacttraining.com/react-router/web/api/withRouter)**
    - [Component.WrappedComponent](https://reacttraining.com/react-router/web/api/withRouter/componentwrappedcomponent)
    - [wrappedComponentRef: func](https://reacttraining.com/react-router/web/api/withRouter/wrappedcomponentref-func)

### Redux (docs reference)

[Here](https://redux.js.org/) is the homepage for Redux and [here](https://github.com/reduxjs/redux) is the GitHub repo. And here are docs links for reference:

- **Introduction**
  + [Getting Started with Redux](https://redux.js.org/introduction/getting-started)
  + [Installation](https://redux.js.org/introduction/installation)
  + [Motivation](https://redux.js.org/introduction/motivation)
  + [Core Concepts](https://redux.js.org/introduction/core-concepts)
  + [Three Principles](https://redux.js.org/introduction/three-principles)
  + [Prior Art](https://redux.js.org/introduction/prior-art)
  + [Learning Resources](https://redux.js.org/introduction/learning-resources)
  + [Ecosystem](https://redux.js.org/introduction/ecosystem)
  + [Examples](https://redux.js.org/introduction/examples)
- **Basic Tutorial**
  + [Basic Tutorial: Intro](https://redux.js.org/basics/basic-tutorial)
  + [Actions](https://redux.js.org/basics/actions)
  + [Reducers](https://redux.js.org/basics/reducers)
  + [Store](https://redux.js.org/basics/store)
  + [Data flow](https://redux.js.org/basics/data-flow)
  + [Usage with React](https://redux.js.org/basics/usage-with-react)
  + [Example: Todo List](https://redux.js.org/basics/example)
- **Advanced Tutorial**
  + [Advanced Tutorial: Intro](https://redux.js.org/advanced/advanced-tutorial)
  + [Async Actions](https://redux.js.org/advanced/async-actions)
  + [Async Flow](https://redux.js.org/advanced/async-flow)
  + [Middleware](https://redux.js.org/advanced/middleware)
  + [Usage with React Router](https://redux.js.org/advanced/usage-with-react-router)
  + [Example: Reddit API](https://redux.js.org/advanced/example-reddit-api)
  + [Next Steps](https://redux.js.org/advanced/next-steps)
- **Recipes**
  + [Recipes: Index](https://redux.js.org/recipes/recipe-index)
  + [Configuring Your Store](https://redux.js.org/recipes/configuring-your-store)
  + [Usage with TypeScript](https://redux.js.org/recipes/usage-with-typescript)
  + [Migrating to Redux](https://redux.js.org/recipes/migrating-to-redux)
  + [Using Object Spread Operator](https://redux.js.org/recipes/using-object-spread-operator)
  + [Reducing Boilerplate](https://redux.js.org/recipes/reducing-boilerplate)
  + [Server Rendering](https://redux.js.org/recipes/server-rendering)
  + [Writing Tests](https://redux.js.org/recipes/writing-tests)
  + [Computing Derived Date](https://redux.js.org/recipes/computing-derived-data)
  + [Implementing Undo History](https://redux.js.org/recipes/implementing-undo-history)
  + [Isolating Redux Sub-Apps](https://redux.js.org/recipes/isolating-redux-sub-apps)
  + [Using Immutable.JS with Redux](https://redux.js.org/recipes/using-immutablejs-with-redux)
  + [Code Splitting](https://redux.js.org/recipes/code-splitting)
  + **Structuring Reducers**
    * [Structuring Reducers](https://redux.js.org/recipes/structuring-reducers/structuring-reducers)
    * [Prerequisite Concepts](https://redux.js.org/recipes/structuring-reducers/prerequisite-concepts)
    * [Basic Reducer Structure](https://redux.js.org/recipes/structuring-reducers/basic-reducer-structure)
    * [Splitting Reducer Logic](https://redux.js.org/recipes/structuring-reducers/splitting-reducer-logic)
    * [Refactoring Reducers Example](https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example)
    * [Using combineReducers](https://redux.js.org/recipes/structuring-reducers/using-combinereducers)
    * [Beyond combineReducers](https://redux.js.org/recipes/structuring-reducers/beyond-combinereducers)
    * [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)
    * [Updating Normalized Data](https://redux.js.org/recipes/structuring-reducers/updating-normalized-data)
    * [Reusing Reducer Logic](https://redux.js.org/recipes/structuring-reducers/reusing-reducer-logic)
    * [Immutable Update Patterns](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns)
    * [Initializing State](https://redux.js.org/recipes/structuring-reducers/initializing-state)
- **FAQ**
  + [FAQ Index](https://redux.js.org/faq)
  + [General](https://redux.js.org/faq/general)
  + [Reducers](https://redux.js.org/faq/reducers)
  + [Organizing State](https://redux.js.org/faq/organizing-state)
  + [Store Setup](https://redux.js.org/faq/store-setup)
  + [Actions](https://redux.js.org/faq/actions)
  + [Immutable Data](https://redux.js.org/faq/immutable-data)
  + [Code Structure](https://redux.js.org/faq/code-structure)
  + [Performance](https://redux.js.org/faq/performance)
  + [Design Decisions](https://redux.js.org/faq/design-decisions)
  + [React Redux](https://redux.js.org/faq/react-redux)
  + [Miscellaneous](https://redux.js.org/faq/miscellaneous)
- **Style Guide**
  + [Style Guide](https://redux.js.org/style-guide/style-guide)
- **Other**
  + [Glossary](https://redux.js.org/glossary)
  + [Troubleshooting](https://redux.js.org/troubleshooting)
- **API Reference**
  + [API Reference](https://redux.js.org/api/api-reference)
  + [createStore](https://redux.js.org/api/createstore)
  + [Store](https://redux.js.org/api/store)
  + [combineReducers](https://redux.js.org/api/combinereducers)
  + [applyMiddleware](https://redux.js.org/api/applymiddleware)
  + [bindActionCreators](https://redux.js.org/api/bindactioncreators)
  + [compose](https://redux.js.org/api/compose)
- **Redux Toolkit**
  + [Redux Toolkit: Overview](https://redux.js.org/redux-toolkit/overview)

### React-Redux (docs reference)

[Here](https://react-redux.js.org/) is the homepage for React Redux and [here](https://github.com/reduxjs/react-redux) is the GitHub repo. And here are docs links for reference:

- **Introduction**
  + [Quick Start](https://react-redux.js.org/introduction/quick-start)
  + [Basic Tutorial](https://react-redux.js.org/introduction/basic-tutorial)
  + [Why Use React Redux?](https://react-redux.js.org/introduction/why-use-react-redux)
- **Using React Redux**
  + [Connect: Extracting Data with mapStateToProps](https://react-redux.js.org/using-react-redux/connect-mapstate)
  + [Connect: Dispatching Actions with mapDispatchToProps](https://react-redux.js.org/using-react-redux/connect-mapdispatch)
  + [Accessing the Store](https://react-redux.js.org/using-react-redux/accessing-store)
  + [Static Typing](https://react-redux.js.org/using-react-redux/static-typing)
- **API Reference**
  + [connect()](https://react-redux.js.org/api/connect)
  + [Provider](https://react-redux.js.org/api/provider)
  + [connectAdvanced()](https://react-redux.js.org/api/connect-advanced)
  + [batch()](https://react-redux.js.org/api/batch)
  + [Hooks](https://react-redux.js.org/api/hooks)
- **Guides**
  + [Troubleshooting](https://react-redux.js.org/troubleshooting)

### Hooks API (docs reference)

- [Basic Hooks](https://reactjs.org/docs/hooks-reference.html#basic-hooks)
  + [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
  + [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  + [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Additional Hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks)
  + [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
  + [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
  + [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
  + [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
  + [useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
  + [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
  + [useDebugValue](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)

### React practical tutorial highlights (Tic-Tac-Toe)

#### JSX accommodates the use of any JavaScript expression

As noted in the docs:

> JSX comes with the full power of JavaScript. You can put *any* JavaScript expressions within braces inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.

Check out [this post](https://2ality.com/2012/09/expressions-vs-statements.html) for a somewhat deep dive into expressions versus statements in JavaScript and [this post](https://exploringjs.com/impatient-js/ch_syntax.html#statement-vs-expression) for a more trimmed version. 

Here's the gist: 

**Statement:** A *statement* is a piece of code that can be executed and performs some kind of action. For example, `if` is a statement:

```js
let myStr;
if (myBool) {
  myStr = 'Yes';
} else {
  myStr = 'No';
}
```

One more example of a statement: a function declaration.

```js
function twice(x) {
  return x + x;
}
```

**Expression:** An *expression* is a piece of code that can be *evaluated* to produce a value. For example, the code between the parentheses is an expression:

```js
let myStr = (myBool ? 'Yes' : 'No');
```

The operator `?` used between the parentheses is called the *ternary* operator. It is the "expression version" of the `if` statement.Let's look at more examples of expressions. We enter expressions and the REPL evaluates them for us:

```
> 'ab' + 'cd'
'abcd'
> Number('123')
123
> true || false
true
```

**What is allowed where?** The current location within JavaScript source code determines which kind of syntactic constructs you are allowed to use:

- The body of a function must be a sequence of *statements*:

```js
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
```

- The arguments of a function call or a method call must be *expressions*:

```js
console.log('ab' + 'cd', Number('123'));
```

However, expressions can be used as statements. Then they are called *expression statements*. The opposite is not true: when the context requires an expression, you can't use a statement.

The following code demonstrates that any expression `bar()` can be either expression or statement – it depends on the context:

```js
function f() {
  console.log(bar()); // bar() is expression
  bar(); // bar(); is (expression) statement  
}
```

**Expressions and statements in React:** As noted above, there is a difference between expressions and statements in JavaScript. In the context of React, specifically as it concerns the usage of JSX, we are only permitted the use of JavaScript *expressions* within JSX. Per the discussion above, we could not use an `if` statement in JSX in React. But we could use its "expression equivalent" in the ternary operator `?`, and we will see this being done very frequently.

## React 101

### Starter notes (NodeJS, `create-react-app`, React docs, etc.)

As we will see, [NodeJS](https://nodejs.org/en/) is not *necessary* in order to use React, but you will be in for a world of pain if you don't use NodeJS. It will make your life so much easier. In particular, once we have made sufficient progress, we will be able to use  the `create-react-app` CLI and add on numerous other packages meant for React via Node. It's really the only way to go. 

As noted at the top of this file, there are several React-specific docs to make development with React as painless as possible. Use the docs to your advantage!

### What React is and why we need it

Before we get into the weeds as to how to use React, it would be a good idea to know what it is, where it comes from, what problems it has tried to solve, etc. The more background we can have on it before directly using it the better. Our background knowledge can inform our use. 

In web development, 1995 was a monster year. Python (really 1991), Java, PHP, Ruby, Apache, and (prematurely) JavaScript were born. Netscape (now Mozilla) had Navigator (now Firefox) as the only real web browser at that point. They know Microsoft is coming to build their own browser so the CEO, Marc Andreessen, hires Brendan Eich to build a scripting language. That language is not meant to compete with the heavy lifters (i.e., Python, Java, PHP, Ruby, etc.) because those heavy lifters are already handling all of the back-end stuff. We want a scripting language that's accessible to amaeteurs and hobbyists and people who just want to dabble in basic programming. Why? Why not just make it a full-on language with inheritance and other features like those mentioned above? There are many reasons, but the main one is probably that in 1995 there's a grand total of about 23,000 websites. That may sound like a decent amount, but it's nothing at all--today we have *billions* of websites. So the web was in its absolute infancy in 1995. You're not going to be able to get heavy-lifter developers to migrate over to the JavaScript world since the ecosystem is so small at that point. And websites were mostly inert. Think Wikipedia. You open the page and that's it. 

JavaScript came into the world to be the easy programming language while the heavy-lifters remained as they were. Fast forward to roughly 2005 and AJAX comes out. We have iOS and Android. jQuery comes out in 2006. And we hit 100 million websites. So in just 10 years, we went from around 23,000 websites to over 100 million. People are now carrying around full computers in their pockets that are able to run JavaScript. AJAX has revolutionized the web because internet connections are faster so you can send lots of little pieces of data. And in all of this jQuery was awesome. In some ways, jQuery kind of unified the DOM almost as a language across everything that used the DOM. And jQuery was awesome because it took us from web pages that used hundreds of lines of JavaScript and condensed them down to just a few lines. So jQuery was great, but the web was growing at a frenetic pace.

If we hop to around 2010, then the V8 engine has come out, Node.js has come out, and Angular is born (and BackBone). This is where things really start to change for JavaScript. At this point in history, Instagram, Netflix, and Twitch go on the web, and browsers have gone from needing to serve up a tiny number of pages in 1995 to now where you have major websites like Netflix, Walmart, Amazon, etc. All of these websites have gone from being little fun marketing sites in 2000 to being really important parts of the company. They're not just little applications but major software as a service or they're a major platform in being able to actually make money. 

Angular is the first UI framework, and a UI framework is a framework that seeks to simplify your life. So first we had JavaScript files that became unmanageable. jQuery was a lifesaver and condensed the code we needed. The web continued to explode and then the jQuery files got out of hand. Angular sought to reign in the chaos. In 2013 enters React, and React is almost unanimously seen as a vast improvement over Angular 1 (not necessarily Angular as it is now). It is also a UI framework. 

Basically, a UI framework is a whole bunch of JavaScript someone else has written to try and make your life easier. In what way does it make life easier? React seeks to answer the following question: "How can we modernize web development?" Because we can't have thousands of really long files of JavaScript. It becomes intractable. And if you're Facebook then you'll have a ton of those really monolithic files. So it answers this question in the following way:

- **Modularize:** It breaks up the application into a bunch of tiny little pieces. So once again the goal is to get back to the point where files are reasonably short and manageable. This is also good because it allows the files to be encapsulated. That is, we can follow some basic object-oriented programming principles and make our files easier to reuse. We can pass them around freely from one place to the next within our application (they manage their own data and all their methods are internal and so forth). 
- **Manages state effectively:** This is something that Angular did not really do. We'll talk about this a lot more later, but now you have webpages that are changing constantly in a big way, and you need someone who is in charge of it, and it's not a good approach to just let the DOM be the source of truth anymore.
- **Efficient:** If you think about Facebook, then you can think about chats, notifications, messages, etc., all happening nearly instantly and *all* of those things are tiny DOM manipulations. And jQuery was computationally very very expensive in how it manipulated the DOM. React can do this in a very efficient way. 
- **Front-end/back-end separation of concerns:** React completely separates the front-end from the back-end. There are a number of positive benefits about this, but just to name a few: You can have two separate teams (front-end people and back-end people). The front-end people can focus entirely on React and the back-end people can focus on their own thing. In the past, if you had the front-end and back-end teams tightly coupled, as was the case for many many years, then if one thing went down the other went down as well. If you wanted to change one you had to change the other. Separating them out makes everything much more modular, easier to manage and maintain, etc. 
- **Hardware increases:** Your phone may have a stronger processor than, say, what's on your `T2.micro` on AWS. The hardware is just there now to where we want to offload as much as possible to the browser because the hardware that the user is running their browser on is outstanding, and for large-scale websites this can save so much processing power.
- **Declarative instead of imperative:** We can get away from telling the computer exactly how to do something to simply say, "Hey, this is what I want you to do." 

The super short version: What is React? React is a whole bunch of JavaScript that someone else wrote (mostly Facebook) that helps your development go from being boring, small, and unsophisticated to being big, exciting, professional, and organized. If you have a tiny website or project, then React is not what you need. React is made to build buildings and cities--it is not meant to make log cabins or tents. That's what the web was in the beginning. It is no longer that way. The web grew up. It is no longer boring with unsophisticated progammers. It is now professional programmers, large teams, huge companies (e.g., Amazon, Facebook, Google, etc.), and it allows you to make your UI (i.e., your front-end or your stuff inside the browser) really well.

### First React program (and touching on JSX and Babel)

Without `create-react-app`, it's not exactly extremely straightforward to get an application going with React. Remember that React is meant to build large websites. Here is what you get when professionally developing with React:

- React itself
- React DOM (when using React for the web)
- JSX (to make it easier to use declarative markup)
- ES6 (to take advantage of modern JS)
- Babel (to transpile modern JS and JSX into ES5 and lower JS all browsers can understand)
- Webpack (for module bundling)
- NodeJS (for too many things to count with `create-react-app` being first among many)

At the beginning, where we will start without using `create-react-app`, we could certainly go the Express route (where we statically load one big folder and then load up the `index.html` in whatever subfolder as we want), but we can just as well use the [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VSCode to launch our local `index.html` file instead. Whatever is most comfortable.

No matter what we do, we will need the following through the [React CDN links](https://reactjs.org/docs/cdn-links.html) as well as [cdnjs](https://cdnjs.com/libraries/babel-standalone) for `babel-standalone`:

- **React:** `<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>`
- **ReactDOM:** `<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>`
- **Babel:** `<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>`

These links will give us access to React proper, ReactDOM (React can be used in contexts without a DOM, but we will be working in the context where there is a DOM), and Babel (`babel-standalone` is a standalone build of Babel for use in non-NodeJS environments.) The skeleton for our `index.html` file might look like the following:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First React Program</title>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
</head>

<body>

<!-- What goes in here now? -->
  
</body>

</html>
```

What goes in the `body`? This is where the particulars of React will come into play. We will first have `<div id="root"></div>` which is to serve as the "root" of our application. This is where our content will get dumped. Then below this `div` we will want to drop a `script` tag with `type="text/babel"` so whatever we place within the `script` tag can be processed properly:

```html
<body>
  
  <div id="root"></div>

  <script type="text/babel">
    ReactDOM.render(
      <h1>Sanity Check</h1>,
      document.getElementById('root')
    )
  </script>
  
</body>
```

All in all we end up with the following most basic first React program:

<p align='center'>
  <img width="800px" src='https://user-images.githubusercontent.com/73953353/99928949-f3539580-2d10-11eb-81ba-0d7d6c7d81a0.png' />
</p>

Let's go through this in more detail than we did above:

1\. **React:** This is React proper. It is React itself. You can see [the non-minified version of React](https://unpkg.com/react@16/umd/react.development.js) (it's only a couple thousand lines of code).

2\. **ReactDOM:** This is ReactDOM. And we can see we make use of ReactDOM in our program by literally using `ReactDOM` and calling the `render` method on it. You can see [the non-minified version of ReactDOM](https://unpkg.com/react-dom@16/umd/react-dom.development.js) if you want (it's several thousand lines long). The heart of our program is lines 18-21 in the screenshot above, and this is where we make use of `ReactDOM`, specifically the `render` method. In our example we supplied `render` with two arguments: 

1. Some HTML (our `h1` tag)
2. A container (a `div` in our case which we selected using basic JavaScript)  

In fact,the docs note the following syntax for [`render`](https://reactjs.org/docs/react-dom.html#render):

```javascript
ReactDOM.render(element, container[, callback])
```

And we get the following basic description: "Render a React element into the DOM in the supplied `container` [...]. If the optional callback is provided, then it will be executed after the component is rendered or updated."

3\. **Babel:** This is Babel. And we can see we make use of Babel in our program via the `script` tag with the attribute `type="text/babel"`. You can see [the non-minified version of Babel](https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js) if you want (it's several thousand lines of code long). Check out [babeljs.io](https://babeljs.io/) to [experiment](https://babeljs.io/repl) and find out what it's really doing behind the scenes. As the website notes, Babel is a JavaScript compiler. We'll explore what this means further momentarily.

4\. **JSX:** What is JSX? As always, [the docs](https://reactjs.org/docs/introducing-jsx.html) give us a clue, but the basic gist is this: JSX is a JavaScript (J) syntax (S) extension (X), hence the JSX name, and it is recommended to use with React so we can *describe* what the UI should look like (declarative vs. imperative). And JSX goes hand in hand with Babel which is also working with React.

**What does all of this mean?** Well, let's first explore what Babel does even without React first. It's a JavaScript compiler. It basically does two things:

1. It makes the fancy new ES6+ JavaScript we use reverse-compatible so browsers can understand it (many browsers have not completely updated to support ES6+). As an example, something really simple like `() => 2` in ES6+ speak would be turned into 

```javascript
(function () {
  return 2;
});
```

which any browser can understand. 

2. The second thing Babel will do (if we have `react` checked in the left sidebar presets when [trying it out](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.9.0&externalPlugins=)) is *transpile* our JSX into code React proper can work with (*this* is where React itself comes into play). So something like `() => <h1>Sanity Check</h1>` gets transpiled by Babel into

```javascript
(function () {
  return React.createElement("h1", null, "Sanity Check");
});
```

As you can see, we are directly making use of `React`; specifically, we are making use of the `createElement` method and passing arguments to it. As [the docs](https://reactjs.org/docs/react-api.html#creating-react-elements) note, each JSX element is just syntactic sugar for calling `React.createElement()`. How does `createElement` work? [The docs](https://reactjs.org/docs/react-api.html#createelement) give us an example:

```javascript
React.createElement(
  type,
  [props],
  [...children]
)
```

The docs loosely note the following: This creates and returns a new [React element](https://reactjs.org/docs/rendering-elements.html) of the given type. The type argument can be either a tag name string (such as `'div'` or `'span'`), a [React component](https://reactjs.org/docs/components-and-props.html) type (a class or a function), or a [React fragment](https://reactjs.org/docs/react-api.html#reactfragment) type. Code written with [JSX](https://reactjs.org/docs/introducing-jsx.html) will be converted (spoiler alert: this conversion is done using Babel!) to use `React.createElement()`. You will not typically invoke `React.createElement()` directly if you are using JSX. See [React Without JSX](https://reactjs.org/docs/react-without-jsx.html) to learn more.

Returning to our first program, our `script` tag on line 17 with `type="text/babel"` indicates that we want Babel to compile our code into something the browser can understand. If what we use in our `script` is just JavaScript, then it will simply make the JavaScript ES6+ reverse-compatible. But if it's JSX, then it will *transpile* our code into something React knows how to handle. In our own case, Babel took `() => <h1>Sanity Check</h1>` and turned this into

```javascript
(function () {
  return React.createElement("h1", null, "Sanity Check");
});
```

From above, we see that the `type` we gave it was an `h1`, `null` for `[props]` (we'll get to props and all that good stuff soon enough, but right now you can think of `props` as basically attributes on a normal HTML element), and `"Sanity Check"` for `[...children]`. Of course, we may have cases where we have a lot more than a single child. Consider something still rather basic but that could be a nightmare to deal with without Babel:

```jsx
() => (
<div>
  <h1>Heading</h1>
  <h2>First Subsection</h2>
  <p>
    Little paragraph in subsection and we may link to <a href="google.com">Google</a> or something like that.
  </p>
  <p>Another <span>little</span> paragraph</p>
</div>
)
```

Babel will turn this into the following:

```javascript
(function () {
  return React.createElement("div", null, React.createElement("h1", null, "Heading"), React.createElement("h2", null, "First Subsection"), React.createElement("p", null, "Little paragraph in subsection and we may link to ", React.createElement("a", {
    href: "google.com"
  }, "Google"), " or something like that."), React.createElement("p", null, "Another ", React.createElement("span", null, "little"), " paragraph"));
});
```

You can easily see how children of the single `div` can have multiple children themselves and things can quickly spiral out of control. 

### More JSX and Babel

Facebook made JSX and you can see [the GitHub repository for JSX](https://github.com/facebook/jsx) if you're really into that. As they note in the description for the repository: The JSX specification is a XML-like syntax extension to ECMAscript. JSX is made basically for React. Because using React without JSX quickly becomes impossible as the end of the note above started to hint towards but which we will quickly see even more soon. 

Returning to the basics, we see that Babel will take something like

```html
<div id="root">I love React!</div>
```

and turn it into 

```javascript
React.createElement("div", {
  id: "root"
}, "I love React!");
```

So what *looks* like HTML to us is not that at all when Babel is looking at it (especially in the context of using React). It's pure JavaScript. We could maybe add a class to our HTML element like so:

```html
<div id="root" class="container">I love React!</div>
```

But we cannot do this! Why? Because `class` is a *keyword* in JavaScript. In fact, Babel will take a silly `class` like

```javascript
class Car {
  constructor(color, mileage) {
    this.color = color;
    this.mileage = mileage;
  }
  
  showMileage() {
    return this.milage;
  }
}
```

and compile it into 

```javascript
var Car = function () {
  function Car(color, mileage) {
    _classCallCheck(this, Car);

    this.color = color;
    this.mileage = mileage;
  }

  _createClass(Car, [{
    key: "showMileage",
    value: function showMileage() {
      return this.milage;
    }
  }]);

  return Car;
}();
```

Hence, in React, we do not use `class` for a `class` attribute we might normally put on an HTML element. Instead, we use `className`:

```html
<div id="root" className="container">I love React!</div>
```

And Babel turns this into 

```javascript
React.createElement("div", {
  id: "root",
  className: "container"
}, "I love React!");
```

So every attribute that we add in JSX will be added as a prop(erty) in the second argument to `React.createElement`. Another "gotcha" to remember in React is we *always* need to close our elements even if they may be conventionally self-closing. For example, we need `<br />` not `<br>`, `<img />` not `<img>`, etc. 

We can create a more interesting React program (though still tiny in the grand scheme of things) in the following manner:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First React Program</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
</head>

<body>

  <div id="root"></div>

  <script type="text/babel">

    const markup = <div className="row">
                    <div className="col s2">
                      <div className="card hoverable small">
                        <div className="card-image">
                          <img src="https://picsum.photos/400/400/" />
                        </div>
                        <div className="card-content">
                          <p>React From the Beginning</p>
                          <p>Robert Bunch</p>
                        </div>
                        <div className="card-action">
                          <a href="#">$9.99</a>
                        </div>
                      </div>
                    </div>
                  </div>

    ReactDOM.render(
      markup,
      document.getElementById('root')
    )
  </script>
  
</body>

</html>
```

Not the addition of the materialize link: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">`. Of course, the real addition is the `markup` variable. The entire thing looks like HTML, but it isn't. It's JSX. If we throw everything in the `markup` variable into Babel, we will see what is really being done underneath the hood:

```javascript
React.createElement("div", {
  className: "row"
}, React.createElement("div", {
  className: "col s2"
}, React.createElement("div", {
  className: "card hoverable small"
}, React.createElement("div", {
  className: "card-image"
}, React.createElement("img", {
  src: "https://picsum.photos/400/400/"
})), React.createElement("div", {
  className: "card-content"
}, React.createElement("p", null, "React From the Beginning"), React.createElement("p", null, "Robert Bunch")), React.createElement("div", {
  className: "card-action"
}, React.createElement("a", {
  href: "#"
}, "$9.99")))));
```

What a mess! Imagine having to do this every single time instead of just using JSX. The real power of all of this isn't just the fact that Babel does a bunch of compiling/transpiling underneath the hood. The power comes from how modular everything can be when we note that all of this is just JavaScript. So we can make variables and the like, perform computations, etc., and place the *results* in our JSX *dynamically*. The result can eventually be a bunch of dynamically rendered HTML. So how do we insert variables and the like into JSX?

A decent way of thinking about JSX is that it is in "HTML mode" by default, where nothing is dynamic. But we can use curly braces `{ javascrpt-mode }` to enter "JavaScript mode." So when Babel gets to a curly brace it expects whatever is inside to be an expression in JavaScript that can be evaluated. The expression is evaluated and placed and when the closing curly brace is encountered, HTML mode resumes. So when Babel encounters something like `{title}` it knows you mean the *variable* `title` as opposed to the string `'title'`. We can run almost anything we want inside of the curly braces except for a full-blown statement like an `if...else` statement, a `for` loop, etc. But this is also where the power of the ternary `?` in JavaScript comes into play. We can make a more dynamic HTML file like the following:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First React Program</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
</head>

<body>

  <div id="root"></div>

  <script type="text/babel">

    const title = 'React From the Beginning';
    const name = 'Robert Bunch';
    // const saleOn = false;
    function saleOn() {
      return true;
    }

    const markup = <div className="row">
                    <div className="col s2">
                      <div className="card hoverable small">
                        <div className="card-image">
                          <img src="https://picsum.photos/400/400/" />
                        </div>
                        <div className="card-content">
                          <p>{title}</p>
                          <p>{name}</p>
                        </div>
                        <div className="card-action">
                          <a href="#">${saleOn() ? 9.99 : 59.99}</a>
                        </div>
                      </div>
                    </div>
                  </div>

    ReactDOM.render(
      markup,
      document.getElementById('root')
    )
  </script>
  
</body>

</html>
```

If we dumped everything within the `script` tags in the `body`, we would end up with the following via Babel: 

```javascript
var title = 'React From the Beginning';
var name = 'Robert Bunch';

function saleOn() {
  return true;
}

var markup = React.createElement("div", {
  className: "row"
}, React.createElement("div", {
  className: "col s2"
}, React.createElement("div", {
  className: "card hoverable small"
}, React.createElement("div", {
  className: "card-image"
}, React.createElement("img", {
  src: "https://picsum.photos/400/400/"
})), React.createElement("div", {
  className: "card-content"
}, React.createElement("p", null, title), React.createElement("p", null, name)), React.createElement("div", {
  className: "card-action"
}, React.createElement("a", {
  href: "#"
}, "$", saleOn() ? 9.99 : 59.99)))));
ReactDOM.render(markup, document.getElementById('root'));
```

Yikes! Definitely use JSX. Apart from the ease, JSX [also prevents injection attacks](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks). So it is safe to embed user input in JSX. 

### Understanding React elements as opposed to DOM elements

What is a React element? [The docs](https://reactjs.org/docs/rendering-elements.html) note that an element describes what you want to see on the screen:

```javascript
const element = <h1>Hello, world</h1>;
```

And that unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. To get a sense of how much cheaper it is to create a React element than a DOM element, consider the following basic HTML file:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample React Element</title>

  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
</head>

<body>

  <div id="root"></div>

  <script type="text/babel">

    const element = <h1 id="sample-react-element">Hello, world</h1>;

    console.log('This is a React element:');
    console.dir(element);
    console.log('============================================================');
    console.log('========== React element above; DOM element below ==========');
    console.log('============================================================');

    ReactDOM.render(
      element,
      document.getElementById('root')
    )

    const sampleElement = document.getElementById('sample-react-element');

    console.log('This is a DOM element:');
    console.dir(sampleElement);
  </script>

</body>

</html>
```

What's happening here? First, we create a React element with the JSX `const element = <h1 id="sample-react-element">Hello, world</h1>;` which is converted to the following using Babel: 

```javascript
var element = React.createElement("h1", {
  id: "sample-react-element"
}, "Hello, world");
```

*Before* this React element is created in the DOM, we display an interactive list of the properties of this object in the console via [`console.dir`](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir). *After* React has updated the DOM, by transforming our `element` into an actual DOM element by placing it in the DOM, we select our "now actual DOM element" by using basic JavaScript: `const sampleElement = document.getElementById('sample-react-element');`, and then we display an interactive list of the properties of our "now actual DOM element". The beginning of the output will look like this:

<p align='center'>
  <img width="600px" src='https://user-images.githubusercontent.com/73953353/99928953-f64e8600-2d10-11eb-914b-eff4a1fd9e75.png' />
</p>

To fully appreciate the difference, *watch* what happens when you view and expand some of the React element's properties as opposed to the actual DOM element's properties:

<p align='center'>
  <img height="400px" src='https://user-images.githubusercontent.com/52146855/80294028-cca59000-872a-11ea-9dd3-24db55fa4e43.gif' />
</p>

Talk about the DOM element not being cheap! That object is *huge* with all sorts of properties on it. The React object is just a plain old JavaScript object (POJO) with only a few properties. It's when React injects it into the actual DOM that it becomes a real DOM element with all of the crazy extensive properties one might expect of a DOM element. 

### `ReactDOM.render()` and the virtual DOM

`ReactDOM.render` takes two arguments ([really three](https://reactjs.org/docs/react-dom.html#reference), with the third one being *optional* as a callback):

1. What we want to render (i.e., a React element which is probably some JSX)
2. Where we want to render it (this will be an actual DOM element, something that already exsists in our markup as of page load)

Let's return to our example from earlier where we were dropping some variables in our JSX:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First React Program</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
</head>

<body>

  <div id="root"></div>

  <script type="text/babel">

    const title = 'React From the Beginning';
    const name = 'Robert Bunch';
    // const saleOn = false;
    function saleOn() {
      return true;
    }

    const markup = <div className="row">
                    <div className="col s2">
                      <div className="card hoverable small">
                        <div className="card-image">
                          <img src="https://picsum.photos/400/400/" />
                        </div>
                        <div className="card-content">
                          <p>{title}</p>
                          <p>{name}</p>
                        </div>
                        <div className="card-action">
                          <a href="#">${saleOn() ? 9.99 : 59.99}</a>
                        </div>
                      </div>
                    </div>
                  </div>

    ReactDOM.render(
      markup,
      document.getElementById('root')
    )
  </script>
  
</body>

</html>
```

We can now start to see where the full power of React comes into play: On the first go around, React has to build out the entire DOM (of course, this is quite expensive, as we observed through the note above when we looked at actual DOM elements). BUT from here on out (i.e., after React has built and rendered the DOM on the initial page load), any time something inside of `<div id="root"></div>` changes, instead of it being an actual DOM element, it's a React element, and React in the background keeps track of the old as well of the new. So it compares the two objects. Again, they're not DOM objects. They're React elements which are regular JavaScript objects which are cheap and small. It compares the two and sees what's actually different. 

Here's a clearer verbal description of what React does behind the scenes: When `ReactDOM.render` is *first* called, React builds the *virtual* DOM which consists only of React elements (i.e., plain old JavaScript objects or POJOs that are cheap and small). Then React builds out the actual DOM (which consists of all of the very expensive objects that have tons of properties and prototypes) from the virtual DOM it just created. Now suppose something happens in your application where something is supposed to be updated on the page (e.g., someone types something in). Instead of just automatically updating the DOM, what React will do is create a completely *new* virtual DOM and *compare* this new virtual DOM with the *old* virtual DOM, comparing everything in both virtual DOMs. When it comes across any differences in the new DOM compared to the old DOM, instead of updating the entire DOM tree (which is very common and incredibly expensive computationally), React will only update the thing(s) that changed. The next time something happens that is supposed to update the page will result in React again making a new virtual DOM, comparing it to the old virtual DOM, and updating the actual DOM with any differences that occurred, and so on and so forth:

<p align='center'>
  <img width="500px" src='https://user-images.githubusercontent.com/73953353/99928958-f77fb300-2d10-11eb-8646-b69483168ba5.png' />
</p>

So the speed is not only in that you are changing/updating only what needs to be changed/updated but also that you are comparing regular JavaScript objects with regular JavaScript objects instead of DOM elements with DOM elements. That is what makes all of this worth it and what makes React so fast. 

### Components

So far we have rendered things two ways via `ReactDOM.render`. First, we put our JSX directly in the `render`:

```html
...
  <script type="text/babel">
    ReactDOM.render(
      <h1>Sanity Check</h1>,
      document.getElementById('root')
    )
  </script>
...
```

Second, we assigned our JSX to a variable and then passed that variable to `render`:

```html
...
<script type="text/babel">

  const title = 'React From the Beginning';
  const name = 'Robert Bunch';
  
  function saleOn() {
    return true;
  }

  const markup = <div className="row">
                  <div className="col s2">
                    <div className="card hoverable small">
                      <div className="card-image">
                        <img src="https://picsum.photos/400/400/" />
                      </div>
                      <div className="card-content">
                        <p>{title}</p>
                        <p>{name}</p>
                      </div>
                      <div className="card-action">
                        <a href="#">${saleOn() ? 9.99 : 59.99}</a>
                      </div>
                    </div>
                  </div>
                </div>

  ReactDOM.render(
    markup,
    document.getElementById('root')
  )
</script>
...
```

As fate would have it, neither of these ways is the preferred React way. Of course these ways *work*, but React is meant to be component-based. Everything in React is meant to be a component. It's just a bunch of little Lego pieces or modules pieced together to actually formulate your UI. 

How will this actually work? We will create a `Card` component by creating a `Card.js` file with the following as its contents:

```javascript
// Card.js
function Card() {
  const title = 'React From the Beginning';
  const name = 'Robert Bunch';
  function saleOn() {
    return true;
  }
  
  return (
    <div className="row">
      <div className="col s2">
        <div className="card hoverable small">
          <div className="card-image">
            <img src="https://picsum.photos/400/400/" />
          </div>
          <div className="card-content">
            <p>{title}</p>
            <p>{name}</p>
          </div>
          <div className="card-action">
            <a href="#">${saleOn() ? 9.99 : 59.99}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
```

It is worth noting here that *everything* that happens above the `return` in the `Card` function is just plain JavaScript. That is, structurally, we will have the following for components:

```javascript
function Card(props) {
  // a bunch of pure JavaScript

  return (
    // a bunch of JSX to be processed by Babel
  )
}
```

Now we can create our `index.html` to use this `Card` component in the following manner:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First Component</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
  <script src="./Card.js" type="text/babel"></script>
</head>

<body>

  <div id="root"></div>

  <script type="text/babel">

    ReactDOM.render(
      <Card />,
      document.getElementById('root')
    )
  </script>
  
</body>

</html>
```

Two things to note right out of the gate:

1. `type="text/babel"`: This will not work: `<script src="./Card.js"></script>`. It is imperative that this script have an attribute of `type="text/babel"` so Babel will know to process it. So we need `<script src="./Card.js" type="text/babel"></script>`, as indicated above.
2. `<Card />`: This is essentially going to invoke the `Card` function in `Card.js` and will get the return value, which is a bunch of JSX, from the `Card` function living in `Card.js`. If you use a different name for your component such as `<Different />`, then this will not work. We need `<ComponentName />` to match the function `ComponentName` in whatever file the `ComponentName` function is located in. Often a file's name will reflect what component lives within it, but we could just as well have named `Card.js` as `Honk.js` and the function inside `Craziness` and then we would need to have `<script src="./Honk.js" type="text/babel"></script>` and use `<Craziness />`. The point is that `<ComponentName />` needs to match the function name returning a component in whatever file that component lives in. As stated previously, your file name will generally be named to reflect what component lives within it and that component will be used as such within your application. 


Recapping, our `script` tag must have `type="text/babel"` because what the `script` tag points to (e.g., the `Card` function) needs to be processed by Babel. That way, when the `Card` function is invoked within our code by `<Card />`, what we are getting is *processed* JSX by Babel instead of just a bunch of gibberish that JavaScript won't understand. Hence, something like

```javascript
ReactDOM.render(
  <Card />,
  document.getElementById('root')
)
```

will actually make sense because `<Card />` is effectively being replaced by what the `Card` function returns from `Card.js` (a bunch of JSX that, thanks to `type="text/babel"`, has been processed by Babel into JavaScript the browser will understand). 

Of course, at this point, we're not so much improving how anything looks, but we are getting closer and closer to how React is *meant* or *intended* to function. Now, `<Card />` is a component, and this component *looks* like an HTML tag, but it *always* starts with an uppercase letter. The reason for that is because when React is parsing through our code, if it runs into lowercase stuff, it's going to assume it's either an HTML tag or it's an XML tag. If, however, it seens an uppercase letter, it will assume it's actually a component. As [the docs](https://reactjs.org/docs/components-and-props.html) note: "Always start component names with a capital letter. React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML `div` tag, but `<Welcome />` represents a component and requires `Welcome` to be in scope. To learn more about the reasoning behind this convention, please read [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)."

Components are not just the backbone of React but really React in its entirety. As we get to do cooler and cooler things with React, we'll quickly start to notice that the entire UI or entire front-end is really just a whole bunch of components. We're always going to start with one (probably something like `<App />`) that has a whole bunch of components in it where the components inside have components in them, etc. It really is like a bunch of Legos that fit together to make up something awesome.

### Props

Anytime you have a component in React you have the option of adding attributes to that component. Before we just had `<Card />` but we could also have something like `<Card name="Daniel Farlow" job="Developer"/>`. Of course, attributes in HTML are typically things like `id`, `class`, `width`, etc., but now we are making up our own "attributes". What will happen to the attributes we put on our component is that when the component is called (i.e., think previously about how `<Card />` *invoked* or *called* the `Card` function in `Card.js` that returned a bunch of processed JSX), the component is handed an argument which is always called `props` (since it's a local variable you can call it whatever you want, but convention is to call it `props` so you should always do that). So in our `Card.js` file our `Card` function really should have `function Card(props) { ... }`. 

Suppose our `Card.js` file looked like this:

```javascript
function Card(props) {
  console.log('The props: ', props);

  const title = 'React From the Beginning';
  const name = 'Robert Bunch';
  
  function saleOn() {
    return true;
  }
  
  return (
    <div className="row">
      <div className="col s2">
        <div className="card hoverable small">
          <div className="card-image">
            <img src="https://picsum.photos/400/400/" />
          </div>
          <div className="card-content">
            <p>{title}</p>
            <p>{name}</p>
          </div>
          <div className="card-action">
            <a href="#">${saleOn() ? 9.99 : 59.99}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
```

And our `index.html` file was this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First Component</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
  <script src="./Card.js" type="text/babel"></script>
</head>

<body>

  <div id="root"></div>

  <script type="text/babel">

    ReactDOM.render(
      <Card name="Daniel Farlow" job="Developer"/>,
      document.getElementById('root')
    )
  </script>
  
</body>

</html>
```

Then upon firing up everything and looking in the console, we would see the following:

<p align='center'>
  <img width="300px" src='https://user-images.githubusercontent.com/73953353/99928952-f64e8600-2d10-11eb-8629-3e8169aa4feb.png' />
</p>

Note that `props` is just an object and that every attribute that you give your component is sent over as `props`. The `props` naming convention is sensible and conventional because `props` is actually a JavaScript object that will have a property for every attribute that you set on your component. The attribute name itself will be a *key* on the `props` object while what you assign to the named attribute will be the key's *value*. So something like `<Card name="Daniel Farlow" job="Developer"/>` results in `props` looking like `{ name: 'Daniel Farlow', job: 'Developer' }`. The upshot of all of this is that you can use `props` within your components to make the components dynamic and reusable. 

For example, if our HTML looks like this:

```html
...
<script type="text/babel">
  ReactDOM.render(
    <Card title="React From the Beginning" name="Robert Bunch"/>,
    document.getElementById('root')
  )
</script>
...
```

Then our `Card.js` file can look like this:

```javascript
function Card(props) {

  const { title: courseTitle, name: courseInstructor } = props;

  function saleOn() {
    return true;
  }
  
  return (
    <div className="row">
      <div className="col s2">
        <div className="card hoverable small">
          <div className="card-image">
            <img src="https://picsum.photos/400/400/" />
          </div>
          <div className="card-content">
            <p>{courseTitle}</p>
            <p>{courseInstructor}</p>
          </div>
          <div className="card-action">
            <a href="#">${saleOn() ? 9.99 : 59.99}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
```

How awesome is that! What does this accomplish? Essentially, it lets us create a single `Card` component that could be used *numerous* times in different contexts:

```javascript
  <script type="text/babel">
    ReactDOM.render(
      <React.Fragment>
        <Card title="React From the Beginning" name="Robert Bunch"/>
        <Card title="Apache Kafka Series" name="Stephane Maarek"/>
      </React.Fragment>,
      document.getElementById('root')
    )
  </script>
```

Two things to note here:

1. `React.Fragment`: See [the docs](https://reactjs.org/docs/fragments.html) for more on fragments. The basic idea is that fragments let you group a list of children without adding extra nodes to the DOM. There is also a [shorter](https://reactjs.org/docs/fragments.html#short-syntax) way to use them with `<>` and `</>`, but note that this does not support the use of keys or attributes. You can see more about [keyed fragments](https://reactjs.org/docs/fragments.html#keyed-fragments) and why that might be a good idea (think of creating a description list).
2. We just created two `Card` components very easily by only passing what was different to the cards. That is, we want the cards to look the same but obviously have only the content that's relevant or specific to them. 

This is the power of components! The fact that we can send data down to them makes it almost like a function where instead of passing arguments we are passing `props`. One thing to note is that props are immutable. They are managed by the parent and never managed by the component itself (of course, you could change this behavior by hijacking things with JavaScript within your component, but that's a big no-no and defeats the whole point of components). All components with their props are meant to be pure; that is, given the same props, the component should always look the same. So you never manually mutate or change props. They're meant to be pure.

We can even use the `data` object we have in `data.js`:

```javascript
const data = [
  {
    course: "React From the Beginning",
    instructor: "Robert Bunch"
  },
  {
    course: "Apache Kafka Series",
    instructor: "Stephane Maarek"
  },
  {
    course: "Music Production in Logic Pro X",
    instructor: "Tomas George"
  },
  {
    course: "Unity Game Development",
    instructor: "Jonathan Weinberger"
  }
]
```

And we can use this via `<script src="./data.js"></script>` in our `index.html` file to make several cards dynamically:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First Component</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
  <script src="./Card.js" type="text/babel"></script>
  <script src="./data.js"></script>
</head>

<body>

  <div id="root"></div>

  <script type="text/babel">
    ReactDOM.render(
      <div className="row">
        <Card title={data[0].course} name={data[0].instructor}/>
        <Card title={data[1].course} name={data[1].instructor}/>
        <Card title={data[2].course} name={data[2].instructor}/>
        <Card title={data[3].course} name={data[3].instructor}/>
      </div>,
      document.getElementById('root')
    )
  </script>
  
</body>

</html>
```

Of course, we will get to the point soon where we can easily loop through everything and create it even more dynamically. 

### Multiple components in an array (and `unique "key" prop` warning)

One thing that is super cool in React is that you can build your components in an iterative fashion. Consider the following code: 

```javascript
let cards = data.map(courseData => (
  <Card data={courseData}/>
))

console.log(cards)

ReactDOM.render(
  <div className="row">
    {cards}
  </div>,
  document.getElementById('root')
)
```

If we do something like this, then currently we will get a warning like the following:

<p align='center'>
  <img height="250px" src='https://user-images.githubusercontent.com/73953353/99928951-f51d5900-2d10-11eb-8bda-033877b73a5f.png' />
</p>

What this means is that `cards` is an array of React elements, the type is a function, and it has a `key` with a value of `null` (also has `ref` with value of `null`, etc.). The problem is that you can basically think of this as a linked list in the context of the virtual DOM. React wants these elements in the array to have keys so that if the state of the application changes React knows which thing changes so that it doesn't have to update the entire thing. If you don't provide a key, then it won't know what it actually needs to change and will have to rebuild the whole array which is expensive which is against the whole ethos of React. The gist: Whenever you build an array of React elements, if you give a key, then React will be a lot faster. When using `map` to build an array, you could just make each `key` the value of the `index` (this practice is a last resort though--the `key` should ideally be something unique to each item like an ID). Hence, our code becomes:

```javascript
let cards = data.map((courseData, index) => (
  <Card data={courseData} key={index}/>
))

console.log(cards)

ReactDOM.render(
  <div className="row">
    {cards}
  </div>,
  document.getElementById('root')
)
```

And the warning goes away.

### Components as classes

Up until now the only type of component we have made is a regular JavaScript function. For example:

```javascript
function Card(props) { ... }
```

This is a great and common way to make functions that are simply presentational or stateless. It means they don't need to make any decisions. But there is another very important way to make components. And this way is with classes. (The introduction of Hooks has made it possible to use stateful components with functions, and we'll get to all of that much later.)

The way we have kind of done things before is like the following:

```javascript
class Card {
  return (
    <h1>Sanity Check</h1>
  )
}
```

But this is not okay anymore because inside of a `class` in JavaScript the only thing you are allowed to define are properties and methods. We can't just run JavaScript code. We need to put the JSX that we want to return inside a method in order to properly adhere to how `class`es work in JavaScript. What method should we use? It turns out there is a convention/mandate from React and [the docs](https://reactjs.org/docs/react-component.html) spell this out in more detail: "The only method you *must* define in a `React.Component` subclass is called `render()`. All the other methods are optional." Seems important! If you use a class then, you *must* have a `render` method:

```javascript
class Card {
  render() {
    return (
      <h1>Sanity Check</h1>
    )
  }
}
```

It turns out the code above is *still* not good enough. It's not enough to just define the component using a `class`. In order to get all the goodness of a React component, we actually need too *extend* the React component (i.e., the `Card` class needs to first inherit everything from the `React.Component` class and then *extend* it by using our own methods, properties, and the like):

```javascript
class Card extends React.Component {
  render() {
    return (
      <h1>Sanity Check</h1>
    )
  }
}
```

What this does is it makes our class, `Card`, a subclass of `React.Component`. So `React.Component` has a bunch of stuff we are going to "inherit". All the cool stuff that belongs with being a React component can now be used as part of our `Card` component. A couple things to note here. This 

```javascript
function Card(props) {
  return (
    <h1>Sanity Check</h1>
  )
}
```

is exactly the same as

```javascript
class Card extends React.Component {
  render() {
    return (
      <h1>Sanity Check</h1>
    )
  }
}
```

right now. They're functionally the same although syntactically different. A class gives you all sorts of power that you do not have with a function. (At least this used to be the case--this is different now with the advent of Hooks.) From [the docs](https://reactjs.org/docs/react-component.html#overview): "React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. To define a React component class, you need to extend `React.Component`." So more often than not you will be making components as classes instead of functions. Again, if you make a class component, then it *must* have a `render` method; otherwise, the component is totally useless. It's the only method that a class must have in React. So don't forget to add it! And we have to use `extends React.Component` for class components; otherwise, the class is just a regular garden-variety class. And sometimes you'll make classes that you don't extend (e.g., utility classes that don't have anything to do with React just to clean up your JavaScript). 

If you've done much with classes before in JavaScript, then you will know that the `constructor` is another method available to classes (*every* `class` in JavaScript gets this method whether or not the class in question is a React component or just a garden-variety class). The `constructor` method will run when an instance of the `class` (or in our case a React component instance) is created. This gives us the ability to initialize instance variables and initialize state (the notion of state in React is a very important one we will get to momentarily).

Per [the docs](https://reactjs.org/docs/react-component.html#constructor) on `constructor(props)`: "If you don't initialize state and you don't bind methods, you don't need to implement a constructor for your React component. The constructor for a React component is called before it is mounted. When implementing the constructor for a `React.Component` subclass, you should call `super(props)` [within `constructor(props)`] before any other statement. Otherwise, `this.props` will be undefined in the constructor, which can lead to bugs. Typically, in React constructors are only used for two purposes: Initializing local state by assigning an object to `this.state` and binding event handler methods to an instance."

The upshot of all of this is that, in order for us to use state, we need to call the `super(props)` method within our `constructor`:

```javascript
class Card extends React.Component {
  constructor(props) {
    super(props);
    // more stuff to come
  }

  render() {
    return (
      <h1>Sanity Check</h1>
    )
  }
}
```

The `constructor` will run every time a new `Card` is created. And every time the `constructor` is called the first thing that should get called is `super`, which is the `constructor` method of the *parent* class. So every time we create a new `Card` our own `constructor` will run, but we will first call `super` in order to run the `constructor` of the parent/super class (i.e., `React.Component`). As the docs noted, the constructor is really only necessary if we are trying to initialize state and/or trying to bind methods to a class instance. 

One last thing to note right off the bat is how `props` are accessed within classes. For a regular JavaScript class, how do you refer to properties of the class? With the `this` keyword:

```javascript
class Dog {
  constructor(name, friends, legs) {
    this.name = name;
    this.friends = friends;
    this.legs = 4;
  }

  sayName() {
    return this.name;
  }
}
```

In the silly example above, how did we refer to the `name` property of the class instance within the `sayName` method? Not by `name` but by `this.name`. Why? Because, [as MDN notes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) (under the "Instance properties") subsection, instance properties must be defined inside of class methods (they give the following example with the simple `Rectangle` class):

```javascript
class Rectangle {
  constructor(height, width) {    
    this.height = height;
    this.width = width;
  }
}
```

The `name` instance property for `Dog` is defined inside of the `constructor` class method. For example, something like `let myDog = new Dog('Archie', ['Felix', 'Bruno']);` will result in the `myDog` *instance* of `Dog` having instance properties of

- `name`: `'Archie'`
- `friends`: `['Felix', 'Bruno']`
- `legs`: `4`

And we access these instance properties in methods within the class using the `this` keyword. So something like `myDog.sayName()` results in the `sayName` method of the `Dog` class being called on the `Dog` instance of `myDog`. Hence, `this` points to `myDog` in this case so `myDog.sayName()` would result in `'Archie'`. 

In the exact same manner (albeit more complicated fashion), in a React class component, we do not refer to `props` within the `render` method simply as `props` but by `this.props`. Where do our class instance properties get defined? When we create the component in question and pass props to them; for example, if `PlayingCard` were a class component, then something like `<PlayingCard value="12" suit="Spades" />` would result in implicitly having `this.props.value = "12"` and `this.props.suit = "Spades"` underneath the hood:

```javascript
class PlayingCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props); // { value: "12", suit: "Spades" }
  }

  render() {
    const cardValueMap = {
      '1': 'ace',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine',
      '10': 'ten',
      '11': 'jack',
      '12': 'queen',
      '13': 'king'
    }

    const { suit, value } = this.props;
    const translatedValue = cardValueMap[value];
    const phrase = translatedValue.slice(0,1).toUpperCase() 
    + translatedValue.slice(1) 
    + ' of ' + suit;

    return(
      <p>This card is a {phrase}</p>
    )
  }
}
```

If we throw `<script type="text/babel" src="PlayingCard.js"></script>` into our `index.html` and `<PlayingCard value="12" suit="Spades"/>` into our `app.js`, we will get `This card is a Queen of Spades` placed in the DOM. 

Returning to our original `Card` example, the once functional component

```javascript
function Card(props) {
  console.log(props)
  const { course: courseTitle, instructor: courseInstructor, image: courseImage } = props.data;

  return (
      <div className="col s2">
        <div className="card hoverable small">
          <div className="card-image">
            <img src={courseImage} />
          </div>
          <div className="card-content">
            <p>{courseTitle}</p>
            <p>{courseInstructor}</p>
          </div>
          <div className="card-action">
            <a href="#">$9.99</a>
          </div>
        </div>
      </div>
  )
}
```

can become the functionally equivalent (albeit imbued with many more potential powers now) class component:

```javascript
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { course: courseTitle, instructor: courseInstructor, image: courseImage } = this.props.data;
    
    return (
      <div className="col s2">
        <div className="card hoverable small">
          <div className="card-image">
            <img src={courseImage} />
          </div>
          <div className="card-content">
            <p>{courseTitle}</p>
            <p>{courseInstructor}</p>
          </div>
          <div className="card-action">
            <a href="#">$9.99</a>
          </div>
        </div>
      </div>
    )
  }
}
```

Worth noting is that for functional components we could run any plain JavaScript we wanted before we `return`ed the JSX we wanted to. Similarly, in a class component, **within the render method**, we can run any plain JavaScript we want *before* we `return` the JSX we want, as indicated above and also in the `PlayingCard` example.

Using classes is actually rather helpful in general when thinking about your React components because it almost enforces the concept of encapsulation on the developer. That is, a given object should not only contain all of its own data but should also contain all the methods that change and effect that data. So we are going to try to make our components as self-sufficient as possible. They'll carry their data around with them, and they'll also carry their `render` around with them. They'll carry other methods around with them as well so that ideally you'll be able to move these components across applications or parts of applications and it should be as seamless as possible. 

### React Essentials: Recap

#### What Is React and Why Do We Need It?

React is a bunch of JavaScript that someone else wrote that makes it easier to do front-end web development. React modernizes front-end web development by doing the following:

- Making the front-end modular via components (components are encapsulated, meaning they manage themselves)
- Making it much easier to maintain across teams and even years
- Simplifying state changes in an application
- Getting front-end applications to run very, very fast
- Separating front-end from back-end

#### React in Its Simplest Form

Recall our first React program:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First React Program</title>
  <!-- This is React proper -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <!-- This is ReactDOM -->
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <!-- This is Babel -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
</head>

<body>

  <div id="root"></div>

  <script type="text/babel">
    ReactDOM.render(
      <h1>Sanity Check</h1>, // <-- This is JSX
      document.getElementById('root')
    )
  </script>
  
</body>

</html>
```

Here's the breakdown from the comments above:

- **React:** Everything we make is a "React" element, not a DOM element.
- **ReactDOM:** `ReactDOM` uses its `render` method to take our React elements and inject them into the actual DOM (on the webpage).
- **JSX:** Allows us to commingle HTML and JavaScript. This saves us from having to write TONS of JavaScript. 
- **Babel:** Converts our JSX into something the browser can read.

More explicitly, [React](https://unpkg.com/react@16/umd/react.development.js) allows us to create React elements via `React.createElement`. [ReactDOM](https://unpkg.com/react-dom@16/umd/react-dom.development.js) allows us to use `ReactDOM`'s `render` method to get React elements into the actual DOM from the React's virtual DOM (i.e., onto the actual webpage). [JSX](https://reactjs.org/docs/introducing-jsx.html), via [Babel](https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js), makes it possible for us to write

```html
<h1 className='root'>Sanity Check</h1>
```

instead of writing

```javascript
React.createElement("h1", { className: "root" }, "Sanity Check");
```

as you can see through an [interactive session on babeljs.io](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRhgEsATDAIggENkAHJAWgCc4rgoHEU0pyA-ABKIEIADQwA7iCYIS2APQE-AbiA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.9.0&externalPlugins=). We are also allowed to [embed JavaScript expressions in JSX](https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx) using the so-called wax-on/wax-off technique: `{ <-- wax-on | expression here | wax-off --> }`:

```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

#### ReactDOM and the virtual DOM

React keeps track of all React elements in a "virutal DOM" object. Whenever something changes, React builds a new "virtual DOM" object and ReactDOM compares them:

<p align='center'>
  <img height="350px" src='https://user-images.githubusercontent.com/73953353/99928957-f77fb300-2d10-11eb-9e37-17403eff9e9c.png' />
</p>

Because React elements are just plain JavaScript objects, React is very, very fast with its ability to update only what is necessary in the real DOM (where objects are far more weighted and computationally expensive to create); that is, ReactDOM updates *only* the part of the DOM that needs to change.

#### Component Basics

- Components are the backbone of React.
- They are little pieces that make up the entire UI.
- They always start with a capital letter.
- They *must* close along with all other React elements (i.e., neither `<br>` nor `<Card something="else">` will do; instead, we must use `<br />` and `<Card something="else" />`, as an example).
- Components *look* like HTML tags in JSX (but uppercase): `<Card />`.
- Components always return some HTML so ReactDOM has something to put on the page. Remember that React is a front-end UI so every component we make has to have something for the UI in it. So every component has to return some HTML (technically JSX is what gets returned, which is processed by Babel and subsequently React uses what was processed to create React elements which subsequently get created as *actual* DOM elements via ReactDOM).
- Components can be pure functions (stateless or simple).
- Components can be classes (stateful or complex).
- Note: Hooks make it possible to use stateful functions but we'll get to that later.

#### Prop Basics

- Components are a lot like JavaScript functions.
- They can be rendered as many times as needed.
- In order to change when they render, components can be sent any data you wish (like an argument in a function). The data that gets passed to a component is called `props`.
- A prop is anything inside a Component call after the Component name and looks like an HTML attribute:

<p align='center'>
  <img height="125px" src='https://user-images.githubusercontent.com/73953353/99928956-f6e71c80-2d10-11eb-83e3-728d18e60407.png' />
</p>

- A prop's value comes after the `=`, just like an HTML attribute.
- A prop value can be accessed inside the component. `props` is always an object.
- The `props` object will have a property for each prop that was passed when the component was created.
- The value of the property will be the value of that prop:

<p align='center'>
  <img width="350px" src='https://user-images.githubusercontent.com/73953353/99928954-f6e71c80-2d10-11eb-8725-60153d32468a.png' />
</p>

#### Components in an Array

- React allows us to put components in an array.
- JSX can unpack that array.
- We typically use `.map()` to build the array of components.
- `map()` builds a new array and expects a return value.

#### Components as Classes

- Aside from regular JavaScript functions, components can also be made as classes.
- Classes themselves do not return JSX; they have a `render` method that returns JSX.
- Classes always extend `React.Component` (unless you have a utility class you are using that has nothing to do with React) so that your custom class, which via `extends` is a subclass of React's `Component` superclass, inherits all the goodness that comes from being a React component. When initializing state or binding methods, `constructor(props) {super(props); ... }` will need to be used at the top of your class.
- Props work the same way in a class as they do in a function except we refer to the props in a class by `this.props` instead of simply `props`.
- Classes (currently) come with more powers than plain JavaScript functions, [as noted in the docs](https://reactjs.org/docs/react-component.html#overview).

#### Breaking Down Components into Smaller Parts (i.e., subcomponents)

- Components can contain other components.
- Think of it like the DOM:
  + A `div` often lives inside another `div`.
  + A `<City />` can live inside a `<CitiesContainer />`.

#### JavaScript Inside Components

Recall that you can [embed JavaScript expressions in JSX](https://reactjs.org/docs/react-component.html#overview) by putting any valid [JavaScript expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) (simply: any valid unit of code that resolves to a value) inside curly braces in JSX: `{ JavaScriptExpression }`. Importantly, we *cannot* use non-expression JavaScript code inside of JSX. So a question becomes: Where can you perform "normal" or "heavy duty" JavaScript within components before returning your desired JSX? This depends on whether or not you have a function or a class:

- **Function:** In functional components, regular JavaScript can be used *before* you `return` your JSX:

```javascript
function FunctionComponent(props) {

  // Do all non-expression or "heavy-lifting"
  // JavaScript stuff here before returning JSX below

  return (
    // JSX
  )
}
```

- **Class:** In class components, regular JavaScript can be used *before* you `return` your JSX in the `render` method (as with regular JavaScript `class`es, plain JavaScript *cannot* be left outside of a method, whether it be the `constructor` method or a custom method):

```javascript
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state; bind methods
  }

  // JavaScript CANNOT go here

  render() {

  // Do all non-expression or "heavy-lifting"
  // JavaScript stuff here before returning JSX below

    return(
      // JSX
    )
  }
}
```

## State and Events (and `create-react-app`)

### `npx` vs. `npm` in regards to `create-react-app` (use `npx`!)

[This answer on Stack Overflow](https://stackoverflow.com/a/52018825/5209533) does an *excellent* job of making clear what `npm` and `npx` actually are and why we might want to use one over the other. Some key takeaways: 

- `npm`: *Manages* packages *but* doesn't make life easy *executing* any.
- `npx`: A tool for *executing* Node packages.
- `npx` comes bundled with `npm` version `5.2+`.
- The major advantage of `npx` is the ability to execute a package which wasn't previously installed:

  ```bash
  $ npx create-react-app my-app
  ```

  The above example will generate a `react` app boilerplate *within* the path the command had run in, and **ensures that you always use the latest version** of a generator or build tool without having to upgrade each time you're about to use it.

Hence, for what we are about to learn, instead of doing something like

```bash
$ sudo npm install create-react-app -g
```

you will want to do

```bash
$ npx create-react-app my-app
```

every time you want to make a new `react` application using `create-react-app`. Using `npx` in this fashion ensures you are getting the latest version of `create-react-app` instead of installing `create-react-app` globally and subsequently possibly using an outdated version.

### Modernizing our web development with `create-react-app`

Up until now, we have used actual `.html` files and actual `.js` files and we connected the JavaScript to our HTML by means of `script` tags. Nothing is wrong with this, and it's probably rather important to start learning React this way; otherwise, you risk it being *very* mystical how React is actually working under the hood. But this is not how modern React development is done. Instead, Facebook has made (and maintains) [create-react-app](https://github.com/facebook/create-react-app) which is a node module [available through NPM](https://www.npmjs.com/package/create-react-app). And this thing does a crazy good job of kicking out everything you could possibly need to build out a great React application from scratch. Building production applications before this came out was highly frustrating (due to the amount of configuration that was needed in so many respects). 

We are now going to fire off a React application from a scaffold using `create-react-app`. And if you've used, say, Rails before, Rails creates a scaffold for you when you do [rails g](https://guides.rubyonrails.org/command_line.html#rails-generate), Laravel [is similar](https://github.com/JeffreyWay/Laravel-4-Generators) with `php artisan`, the [Express generator](http://expressjs.com/en/starter/generator.html) is similar with `express-generator`, and so on. Most frameworks and platforms have something like this where it will just create a whole bunch of files for you (i.e., a "scaffolding"). It's kind of like saying, "Developers need this to make almost anything so we'll just give you what you probably need and you can take it from there." 

We will run 

```bash
$ npx create-react-app first-cra
```

where `first-cra` simply stands for "First Create-React-App." This process will probably take a decent bit of time because a *ton* of dependencies are being installed. We can then `cd first-cra` and run `npm start` as we are informed in the terminal and we'll get a boilerplate React application launched on `localhost:3000` (or we will be prompted for another port on which to listen if that port is already in use). Now, if you look at the `node_modules` folder, you will see hundreds of node modules. The `webpack` node module is what creates the development server for us. We also see a whole bunch of `jest` node modules. And `jest` is a [unit-testing framework](https://jestjs.io/) for JavaScript, and React has been kind enough to install everything to get that up and running if we choose to do testing (as we should!). We also see a whole bunch of `eslint` node modules. And those are meant to make error messages when we run our code to be much friendlier and much more helpful. 

Now let's inspect our `package.json` for a moment:

```JSON
{
  "name": "first-cra",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

Recall that the `package.json` file gives metadata about our application; that is, it tells the world about our application. And one of the most important things the `package.json` file does is it determines your dependencies, meaning if someone downloads your app and wants to use it, you have to have the node modules listed in the dependencies:

```JSON
"dependencies": {
  "@testing-library/jest-dom": "^4.2.4",
  "@testing-library/react": "^9.5.0",
  "@testing-library/user-event": "^7.2.1",
  "react": "^16.13.1",
  "react-dom": "^16.13.1",
  "react-scripts": "3.4.1"
}
```

As for why `npm start` worked to launch our development server, we can see this from the `scripts` part in our `package.json`:

```JSON
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

And we can actually check these scripts out for ourselves if we want:

```
node_modules -> react-scripts -> scripts -> build.js | eject.js | init.js | start.js | test.js
```

So the `scripts` folder in the `react-scripts` node module is where all these little scripts live. When we type `npm start`, `npm` is going to go check out our `package.json` file and see if there is a `start` command. There is! So it's going to call the `react-scripts` node module and it's going to grab the `start` script that lives in `start.js`. Basically, this is where Babel, Webpack, and basically all of the development stuff is going to get started. And you can check out `build.js` for the `build` script as well. And in `react-scripts` we see a `package.json` file which details that node module's dependencies, several of which have their own dependencies, and so forth (that is how we end up with a huge folder of node modules at the root of our application).

Apart from the testing modules, React needs `react`, `react-dom`, and `react-scripts`, the last of which actually creates our entire development environment for us. 

### Understanding the file structure given to us by `create-react-app`

As of this writing (April 26, 2020), this is the file structure you will get when running `create-react-app` on `cra-app-name`:

```
cra-app-name
 ┣ node_modules
 ┣ public
 ┃ ┣ favicon.ico
 ┃ ┣ index.html
 ┃ ┣ logo192.png
 ┃ ┣ logo512.png
 ┃ ┣ manifest.json
 ┃ ┗ robots.txt
 ┣ src
 ┃ ┣ App.css
 ┃ ┣ App.js
 ┃ ┣ App.test.js
 ┃ ┣ index.css
 ┃ ┣ index.js
 ┃ ┣ logo.svg
 ┃ ┣ serviceWorker.js
 ┃ ┗ setupTests.js
 ┣ .gitignore
 ┣ README.md
 ┣ package-lock.json
 ┗ package.json
```

We are going to spend almost all of our time in the `src` folder. The entry point for the entire application is `index.js` inside of `src`:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

This is where everything is going to start. And some of it may look a little funky, but at least one bit should look very familiar (read more about `React.StrictMode` [on Medium](https://medium.com/nmc-techblog/wait-youre-not-using-react-strictmode-a9713927a33b) or [directly from the docs](https://reactjs.org/docs/strict-mode.html); the gist is that `StrictMode` is a tool for highlighting potential problems in the application and, like `Fragment`, `StrictMode` does not render any visible UI--it simply activates additional checks and warnings for descendants):

```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Above, we are rendering a component call `App` (in `StrictMode`) and we are putting in whatever HTML element has an `id` of `root`. But where is React actually getting `root` at? It is getting it from `index.html` which appears in the `public` folder. Note that anything placed in the `public` folder will be publicly accessible. All of its contents will be statically served--it won't be part of your React application (unless it's a link or something like that). This is where you would typically place files like images, audio clips, videos, JavaScript that is not part of React (like a library or your own utility files), CSS files, etc. The point, however, is that `index.html` is located in this `public` folder and we see `<div id="root"></div>` contained therein so *that* is where everything is going from `ReactDOM.render` in our `index.js` file in the `src` folder.

At the top of our `index.js` file we see the following:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
```

These are all `import` statements and this is an ES6+ feature which is not supported by any browser (at least as of this writing). `import` makes it very easy to modularize your stuff. The point is that `import` is kind of like doing

```javascript
import React from 'react';
```

instead of

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
```

as we have been doing previously. Using `import React from 'react';` indicates we are fetching the `React` object from the `react` node module. So the `react` node module had better exist! The same thing applies to `ReactDOM` coming from `react-dom`. We brought these in before by adding `React` and `ReactDOM` to the `window` object by our `script` tags, but now they're being added by Node.js through Webpack. We can also import our `index.css` easily with one line. And we can import `App` from `./App` exactly as we just described instead of doing something like

```html
<script src="./App.js"></script>
```

as before. Well, what actually lives in `App.js`? Let's see: 

```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

### `import` a new component into `App.js` before you make it so you can benefit from the linter

When making a new component, it is often wise to go ahead and import that component in your `App.js` so that any issues you encounter while making your component are caught by the linter and you can be warned about them. 

By default, if you are not importing your component in `App.js`, then the linter will not be able to catch any problems in your component since your component is not actually being loaded into or looked at in `App.js`.

### What is state?

Previously, we talked about components and about props. Components form the bedrock of React and props is how we pass data to components. The third main staple or backbone element of React is the concept of "state." As discussed previously, React came onto the web development scene with a couple of goals in mind, the first being to modularize web development because modern web development has massive front-ends that are getting totally out of control. The codebases are *huge* and have to be modularized. Components solve that. We need to speed up the front-end in the browser, and the virtual DOM solves that by minimizing the things that actually need to change. The other really big thing that Facebook wanted to do when they made React was create some kind of state management tool.

State is a fairly universal concept in programming. An oversimplified definition might be that state is the value of a variable or variables at any given time. And the whole issue of state management is really a problem in modern web development. An example to illustrate this might be by imagining your daily vist to Amazon's website. We can describe the process in different states:

- **State 1:** What happens when you order a product on their site? What are the different steps of the process? Maybe you start by having an empty cart. You've never been there before and maybe we say that you have a *pristine* empty cart.
- **State 2:** You place an item in your cart. Suppose you add a super cool book about gardening to your cart, but then soon after decide you don't want the book so you *remove* the book from your cart. Does that take you back to State 1 where you had a *pristine* empty cart? No. It does not. It does not take you back to State 1. Why not? Because, in Amazon's eyes, you now have a *dirty* empty cart.
- **State 3:** By *dirty* empty cart what is meant is that something *used to be* in the cart and is no longer there. The difference between a *pristine empty cart* and a *dirty empty cart* is very important to Amazon. Why? Because they will want to market to you as you cruise around the site (e.g., "Hey, remember that gardening book you were thinking about buying? You should buy that! Or maybe these related books."). They are going to want to keep track of what you put in and take out of your cart.
- **State 4:** Maybe this time you add a book to your cart on woodworking because gardening just wasn't doing it to you. Are we now in the same situation we were in during State 2? No, of course not. The books are different. 
- **Other States:** You can imagine other states being things such as maybe you go to the checkout, the payment section, the delivery phase, the customer service phase, etc. And maybe at some point you need to return something. The idea is that there's any number of things that can happen during this whole process, and Amazon whats to track this carefully. 

If you think about a simple web form, the same thing will be true. Maybe you have a super simple form with a `username` entry, a `password` enty, and a `submit` button. As soon as you type something into the `username` or `password` fields, something has just happened. The DOM has just changed, however slightly. The `value` of an `input` box in the DOM has just changed. Every time we have changed something in the DOM we have *mutated* the DOM. For a tiny form, the changes might be totally nominal. Maybe we have *two* password fields, the second to verify the first and vice-versa. Another thing we might want to know is how many times this particular form has been changed: does it seem like human behavior or robot behavior? Have they submitted the form several times? And so on. So there's lots of options and there's lots of reasons to be interested in how the page is actually changing. 

Another example would be something like playing Tic-Tac-Toe in JavaScript (in fact, one of the [main tutorials](https://reactjs.org/tutorial/tutorial.html) on first learning React uses this as an example of highlighting all of the key concepts in React). This would also have state. What is the state of the game right now? What place is occupied by which player? Whose turn is it? And so on.

The bottom line is that there needs to be some state management tool so that we can figure out where certain things are in a process because the application needs to make decisions about what the current state is, and we want to avoid making mutations (i.e., updating the DOM) when they're not necessary. 

Instead of manipulating the DOM directly, we will allow components to manage their themselves, and we can pass that around as needed to other components. We will use functional programming to update the state which means we won't ever change state directly--we will let React know that something happens that way React can go through all of its paces and all the right channels to make sure that whoever needs to know or whatever needs to happen can happen in the appropriate order.

### A note about `React.StrictMode` double-invoking functions (`constructor`, `render`, etc.)

Since

```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

is part of the new boilerplate code added to `index.js` in the `src` folder when scaffolding out a project using `create-react-app`, it's good to know that some mildy funky or unexpected behavior can result from using `React.StrictMode`. Specifically, if we make a dummy component like

```javascript
import React, { Component } from 'react';

class StateInAction extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor is running')
  }
  render() { 
    return ( 
      <h1>State in Action</h1>
     );
  }
}
 
export default StateInAction;
```

and drop this in `App.js` like so:

```javascript
import React from 'react';
import './App.css';
import StateInAction from './components/StateInAction/StateInAction.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StateInAction />
      </div>
    );
  }
}

export default App;
```

Then we will actually see `Constructor is running` logged to the console *twice*. And if we change our `index.js` to only have

```javascript
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

as used to be the case when creating projects with `create-react-app`, then `Constructor is running` will only be logged once. What accounts for this behavior? 

[This answer](https://stackoverflow.com/a/60986044/5209533) on Stack Overflow succinctly answers this question and points us to [the docs](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) for more information. Essentially (from the SO post), in recent versions of React, rendering uses [strict mode](https://reactjs.org/docs/strict-mode.html) when running in development. Strict mode intentionally double-calls the `constructor` and `render` functions [to better detect unexpected side effects](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects). From the docs: Strict mode can't automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. **This is done by intentionally double-invoking the following functions**:

- Class component `constructor`, `render`, and `shouldComponentUpdate` methods
- Class component static `getDerivedStateFromProps` method
- Function component bodies
- State updater functions (the first argument to `setState`)
- Functions passed to `useState`, `useMemo`, or `useReducer`

Running in [production build](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build) at least in one use case did *not* result in the same double render of the class component. 

### Getting started with state (where to initialize, do's and don'ts, etc.) and events (binding in `constructor`, etc.)

#### State (initializing and setting/updating)

You will want to initialize state in the `constructor` method of your class component underneath `super`:

```javascript
constructor(props) {
  super(props);
  this.state = {
    // ...
  }
}
```

The `this` in our case is the class instance itself because we are inside of the `constructor`. And `state` is an instance variable or it's like a variable for this particular object. State is very special. You can make anything you want inside of your constructor just like you can in any other language. But the `state` variable is very very special and unique to React. We can start by defining a property for our `state` object:

```javascript
this.state = {
  text: 'State in Action!'
}
```

And we can use it like so:

```javascript
import React, { Component } from 'react';

class StateInAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'State in Action!',
    };
  }

  render() {
    const { text } = this.state;

    return <h1>{text}</h1>;
  }
}

export default StateInAction;
```

Just to illustrate how to update state for the moment, even though we will probably never do this in the future (a whole new world will open up once we start exploring events), we can set up a `setTimeout` in our `constructor`:

```javascript
constructor(props) {
  super(props);
  this.state = {
    text: 'State in Action!',
  };

  setTimeout(() => {
    this.setState({
      text: 'State Changed!'
    })
  }, 2000)
}
```

This method will run one time (when the component is created). We'll run `super` which will get us everything great about being a React component, `this.state` will set up our local `state` variable, and `setTimeout` will get called. Note how we don't try to *manually* change `state` by doing something like `this.state.text = 'State Changed'!`. We *never* mutate `state` manually by ourselves. As [the docs](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly) note in the context of certain things we should know about `setState`:

- Do not modify state directly. [[Read more.](https://reactjs.org/docs/state-and-lifecycle.html#do-not-modify-state-directly)]
- State updates may be asynchronous. That is, React may batch mulitple `setState` calls into a single update for performance--because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state. To account for this, you should use a second form of `setState` that accepts a function rather than an object, and that function will receive the previous state as the first argument and the props at the time the update is applied as the second argument. See [the docs](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous) for more, [this Medium post](https://medium.com/@wisecobbler/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1), [this Stack Overflow thread](https://stackoverflow.com/q/48209452/5209533), and the bottom of [this article](https://tylermcginnis.com/react-interview-questions/) by Tyler McGinnis where he notes that, "It's rarely used (i.e., the second form of `setState` where you pass a function) and not well known, but you can also pass a function to `setState` that receives the previous state and props and returns a new state, just as we're doing above. And not only is nothing wrong with it, but **it's also actively recommended if you're setting state based on the previous state**." So if you are setting state *based on* previous state (e.g., counters and the like or a whole host of other things), then passing a function to `setState` instead of just an object is what you will want to do. [[Read more.](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)]
- State updates are merged. [[Read more.](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged)]

As alluded to above, even though something like `this.state.text = 'State changed'` looks fine with regular old JavaScript, this is something we *never* do in React (i.e., never set `state` manually via an assignment like the above). The only time you should be doing `this.state = ...` is inside of the class `constructor` when the component is created for the very first time. The reason for that (some of which is mentioned above in the three different points) is because React needs to do a whole bunch of stuff under the hood when the state changes. So instead of changing the state ourselves, we can hand it to React and React can run its own method (i.e., `setState`), do a whole bunch of stuff, and ultimately change it for us. Why all this rigmarole? In object-oriented programming, something like `setState` is called a `setter` (it is the counter-companion to a `getter`; read more about [setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) and [getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) on MDN). A setter is a function whose job is to mutate something else (i.e., *set* something and implement *how* that something should be set without exposing the innerworkings of *how* everything is set to the user or developer; in this context, we want to *set* the `state` in some fashion, and React wants to handle *how* the state is set by exposing its `setState` method on the `React.Component` prototype (remember our class inherits all the goodies from the `Component` class since our class `extends React.Component`)). So `setState` is basically saying, "Hey, if you want to change a `state` variable, then you tell me, and I will change it for you. Don't change it yourself."

#### Events (getting started)

##### Events in React in General

As [the docs](https://reactjs.org/docs/handling-events.html) detail in regards to handling events (something we will address in more detail in the next note), handling events with React elements is "very similar" to handling events on DOM elements. There are two key syntactical differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

Hence, instead of something like

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

as would normally be the case, in React, we would have something like

```html
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

The docs also note that you cannot return `false` to prevent default behavior in React. Instead, you have to call `preventDefault` explicitly. They give an example in plain HTML of preventing the default link behavior of opening a new page:

```html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

In React, we would have something like the following instead:

```javascript
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

What we care about here, however, is not just preventing default behavior (which is no doubt nice to know) but how events are treated in general in React (the docs note that the `e` referenced above is a `SyntheticEvent`, something we will address in just a moment). Remember that React elements *are not DOM elements* until they are made so by a need to update the DOM. In particular, the JSX we use is transpiled by Babel into JavaScript the browser can understand in order to turn our newly created React elements into freshly minted DOM elements. So how do event listeners work in React? Typically, *without React*, you would use the [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) Web API for Event Targets to add a listener to a DOM element *after* it was created. Consider this silly example (adding a button to the top of `body` in the DOM which, when clicked, `alert`s `hello!`):

```javascript
let newElement = document.createElement('button');
let buttonText = newElement.innerText;
newElement.innerText = 'Click me to hear me say hello!'
newElement.addEventListener('click', (e) => {
  console.log(e); // MouseEvent { ..., type: "click", ... }
  alert('hello!');
})
document.body.prepend(newElement);
```

Here we have a "normal" event `e` that is a `MouseEvent` of type `click`. In the React example, they noted that `e` is a synthetic event? Well what the heck is a synthetic event? [Their docs](https://reactjs.org/docs/events.html) give more information, but here are some observations:

- The `SyntheticEvent` wrapper forms part of React's Event System.
- Event handlers will be passed instances of `SyntheticEvent`, a cross-browser wrapper around the browser's native event.
- React normalizes events so that they have consistent properties across different browsers. The event handlers below are triggered by an event in the bubbling phase. To register an event handler for the capture phase, append `Capture` to the event name; for example, instead of using `onClick`, you would use `onClickCapture` to handle the click event in the capture phase.

- [Clipboard Events](https://reactjs.org/docs/events.html#clipboard-events)
- [Composition Events](https://reactjs.org/docs/events.html#composition-events)
- [Keyboard Events](https://reactjs.org/docs/events.html#keyboard-events)
- [Focus Events](https://reactjs.org/docs/events.html#focus-events)
- [Form Events](https://reactjs.org/docs/events.html#form-events)
- [Generic Events](https://reactjs.org/docs/events.html#generic-events)
- [Mouse Events](https://reactjs.org/docs/events.html#mouse-events)
- [Pointer Events](https://reactjs.org/docs/events.html#pointer-events)
- [Selection Events](https://reactjs.org/docs/events.html#selection-events)
- [Touch Events](https://reactjs.org/docs/events.html#touch-events)
- [UI Events](https://reactjs.org/docs/events.html#ui-events)
- [Wheel Events](https://reactjs.org/docs/events.html#wheel-events)
- [Media Events](https://reactjs.org/docs/events.html#media-events)
- [Image Events](https://reactjs.org/docs/events.html#image-events)
- [Animation Events](https://reactjs.org/docs/events.html#animation-events)
- [Transition Events](https://reactjs.org/docs/events.html#transition-events)
- [Other Events](https://reactjs.org/docs/events.html#other-events)

If we click on the [Mouse Events](https://reactjs.org/docs/events.html#mouse-events) link, then we will see the React `onClick` event which effectively maps to placing `addEventListener` on an element and listening for an [event](https://developer.mozilla.org/en-US/docs/Web/E) of type [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event). Functionality wise, the code

```javascript
let newElement = document.createElement('button');
let buttonText = newElement.innerText;
newElement.innerText = 'Click me to hear me say hello!'
newElement.addEventListener('click', (e) => {
  console.log(e); // MouseEvent { ..., type: "click", ... }
  alert('hello!');
})
document.body.prepend(newElement);
```

in plain JavaScript and 

```html
<button onClick={(e) => {console.log(e); alert('hello!')}}>Click me to hear me say hello!</button>
```

in JSX when using React are the same. In fact, when we log `e` to the console in the React example when the button is clicked we see `Class { ..., nativeEvent: MouseEvent, type: "click", ...  }`. 

**SO WHAT IS THE POINT OF ALL THIS TEDIUM?** The basic point is this: React may not handle events exactly how you are used to or how you expect. In particular, when you define a component using an [ES6 class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), a common pattern in React is for an event handler to be a method on the class (since for JSX we pass *functions* as event handlers rather than strings). Where this pattern can get a little tricky and confusing, however, is understanding the meaning of `this` in reference to the functions we pass as event handlers to React elements (i.e., the functions we use as JSX callbacks). 

##### Possibilities for Confusion: When Event Handlers are Class Methods (the usual)

Consider the following example from [the docs](https://reactjs.org/docs/handling-events.html) that illustrates where confusion may arise when using a class method as an event handler (as the docs also note, this is a *very common* pattern in React development so we need to make sure we understand what is going on):

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

What's happening here? Why do we need the `this.handleClick = this.handleClick.bind(this);` line in the `constructor` (try commenting that line out and clicking the button; the application will break and you'll get a nasty error implicitly communicating that `this` is `undefined`: `TypeError: Cannot read property 'setState' of undefined`)? As the docs note, "Class methods in JavaScript are not bound by default. So if you forget to bind `this.handleClick` and pass it to `onClick`, `this` will be `undefined` when the function is actually called." But *why*?  What would `this` *normally* (i.e., outside of React) refer to in regards to DOM event handlers? As [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) note about `this` (towards the bottom there are two subsections: `this` "As a DOM event handler" and `this` "In an inline event handler"): "When a function is used as an event handler, its `this` is set to the element on which the listener is placed (some browsers do not follow this convention for listeners added dynamically with methods other than `addEventListener()`). [...] When the code is called from an inline [on-event handler](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers), its `this` is set to the DOM element on which the listener is placed."

Here is the key question of concern if we are to have any hope of understanding *why* it is necessary (depending on our approach) to bind event handler class methods in the `constructor` in React: **How is `this` set in regards to event handlers for React elements?** To answer this question, we have to dive under the hood a bit, but the result is worth it. What follows is largely a paraphrased version of [this excellent answer](https://stackoverflow.com/a/51759791/5209533) on Stack Overflow.

##### React Event Handlers: Understanding the Meaning of `this` 

We can better understand how React treats event handlers by considering and pondering a few key points in succession:

- `this` is dynamic
- how React handles event handlers
- why `bind`ing works
- why arrow function properties work
- recap: 4 examples
- main takeaway

###### `this` Is Dynamic

To better understand the React-specific situation, a brief introduction to how `this` works is in order; in particular, we will want to observe how `this` can *lose meaning* (i.e., become `undefined`) when the method referring to `this` gets passed around.

One of the keys to understanding `this` in JavaScript lies in knowing that **`this` is a runtime binding and depends on the current execution context**, hence why `this` is commonly refered to as "context". Sometimes (not just in React) we have to *specify* the context in which we want `this` to be considered (i.e., give information on what we *want* to be the current execution context when `this` is referenced) in order to get desired/expected results. Binding is necessary on occasion because you sometimes you *lose* "context" (this is especially true when dealing with React event handlers, as we will soon see).

To clearly illustrate how this problem (i.e., losing "context") can arise, consider the following basic snippet:

```javascript
const myDog = {
  name: 'Archie',
  sayName: function() {
    return this.name;
  }
}
console.log(myDog.sayName()); // 'Archie' ... all good so far!
```

In this example, we get `'Archie'`, as expected. But consider this example:

```javascript
const sayMyDogName = myDog.sayName;
console.log(sayMyDogName()); // undefined ... Uh oh! Why!?!?
```

It may be unexpected to find that we get `undefined` logged and thrown back in our faces--where did `'Archie'` go? The answer lies in "context" or how you *execute* a function. Compare how we call the functions:

```javascript
// Example 1
myDog.sayName();
// Example 2
const sayMyDogName = myDog.sayName;
sayMyDogName();
```

Notice the difference. In the first example, we are specifying *exactly* where the `sayName` method is located (we'll use "method" to refer to a function that is supposed to be bound to an object, and "function" for those not): on the `myDog` object:

```javascript
myDog.sayName();
^^^^^
```

But in the second example, we store the method into a new variable, and then we use *that* variable to call the method without explicitly state where the method actually exists, **thus losing context**:

```javascript
sayMyDogName(); // which object is this function coming from?
```

And therein lies the problem. When you store a method in a variable, the original information about *where* that method is located (i.e., the "context" in which the method is being executed) is lost. Without this information, at runtime, there is no way for the JavaScript interpreter to bind the correct `this`. Without specific context, `this` does not work as expected (in the second snippet, `undefined` is logged instead of `'Archie'` because `this` defaults to the global execution context (`window` when not in strict mode, or else `undefined`) when it cannot be determined via specific context; and in our example `window.name` does exist thus yielding `undefined`). 

To fix this issue in our own example, we can use [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) method: "The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called." So instead of

```javascript
const sayMyDogName = myDog.sayName;
console.log(sayMyDogName()); // undefined ... Uh oh! Why!?!?
```

we can create a new function (i.e., `sayMyDogName`) that, when called, has its `this` keyword set to `myDog`:

```javascript
const sayMyDogName = myDog.sayName.bind(myDog);
console.log(sayMyDogName()); // 'Archie' ... yay! Who's a good boy!?
```

##### How React Handles Event Handlers

Here is an example of a React component suffering from the dreaded error resulting from the `this` problem: `TypeError: Cannot read property 'setState' of undefined`:

```javascript
import React from 'react';

class CountExperiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
    // this.handleClick = this.handleClick.bind(this); // <-- needed to work properly; why?
  }

  handleClick() {
    this.setState((prevState, props) => ({
      clicks: prevState.clicks + 1,
    }));
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.clicks}</button>;
  }
}

export default CountExperiment;
```

But why and how does the previous subsection about "`this` is Dynamic" relate to the `this` issue we have here? Because the component above and "Example 2" considered previously both suffer from an abstraction of the same problem. Specifically, [note how React handles event handlers](https://github.com/facebook/react/blob/64e1921aab4f7ad7e2f345f392033ffe724e52e9/packages/events/EventPluginHub.js#L148): 

```javascript
// Edited to fit this description; React performs other checks internally
// props is the current React component's props,
// registrationName is the name of the event handle prop (e.g., "onClick")
let listener = props[registrationName];
// Later, listener is called
```

So when you put `onClick={this.handleClick}` in your JSX in React, the `this.handleClick` method is eventually assigned to the variable `listener` (if you go down the rabbit hole of how events in the event queue are executed, [invokeGuardedCallback](https://github.com/facebook/react/blob/64e1921aab4f7ad7e2f345f392033ffe724e52e9/packages/shared/invokeGuardedCallback.js#L27) is called on the `listener`). But now you can hopefully see *why* we have the problem we do: since React has assigned `this.handleClick` to `listener`, we are no longer specifying exactly where `handleClick` is coming from! From React's point of view, `listener` is just some function, not attached to any object (the `CountExperiment` React component instance in this case). This is similar to what happened in our much simpler previous example:

```javascript
const myDog = {
  name: 'Archie',
  sayName: function() {
    return this.name;
  }
}

const sayMyDogName = myDog.sayName;

console.log(sayMyDogName()); // undefined
```

From JavaScript's point of view, `sayMyDogName` is just some function, not attached to any object (the `myDog` object in this case). 

**The takeway:** In *both* situations (`sayMyDogName` with `myDog` and `handleClick` with `CountExperiment`), we have lost context and thus the interpreter cannot infer a `this` value to use **inside** the `sayName` method in the `myDog` object and the `handleClick` method in the `CountExperiment` object (i.e, React component instance).  

##### Why `bind`ing Works

From everything we have discussed, it is sensible to wonder: If the interpreter decides the `this` value at runtime, then why can I bind the handler so that it *does work*? The reason is because you can use `Function#bind` to *guarantee* the `this` value at runtime (specificially, we want to *guarantee* that the the `this` for our event handler points to the class instance or new React component). This is done by setting an internal `this` binding property on a function, allowing it to not *infer* `this` (we want to set `this` *explicitly): 

```javascript
this.handleClick = this.handleClick.bind(this);
```

When the line above is executed, presumably in the class `constructor`, the current `this` *is captured* (i.e., the React component instance) and set as an internal `this` binding of an entirely new function, returned from `Function#bind`. The `bind` method ensures the interpreter will not try to *infer* anything about the value of `this` when `this` is being calculated at runtime but *explicitly* use the provided `this` you have given it.

To see this in action in a semi-illustrated fashion, consider the following component:

```javascript
import React from 'react';

class IllustratedBinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unboundedClicks: 0,
      boundedClicks: 0
    }

    this.handleClickBound = this.handleClickBound.bind(this);
    //                                                |____|
    //                                                   ^----- React component instance
  }

  handleClickUnbound() { 
    this.setState((prevState, props) => ({
      unboundedClicks: prevState.unboundedClicks + 1
    }));
  }

  handleClickBound() { 
    this.setState((prevState, props) => ({
      boundedClicks: prevState.boundedClicks + 1
    }));
  }

  render() {
    return (
      <React.Fragment>
        {/*                v----------------- not an event handler (so never assigned as "listener")
                  |_________________| */}
        <p onLoad={console.log(this)}></p>

        <button onClick={this.handleClickUnbound}>handleClickUnbound</button>
        {/*             |_______________________|
                                    ^-------------- this.handleClickUnbound eventually assigned as            
                                                    "listener", thus losing context */}
        
        <button onClick={this.handleClickBound}>handleClickUnbound</button>
        {/*             |_____________________|
                                   ^--------------- this.handleClick eventually assigned as "listener", 
                                                    but context not lost since context was explicitly 
                                                    bound to the current "this" captured in the constructor
                                                    method (i.e., the React component instance) */}
      </React.Fragment>
    )
  }
}
 
export default IllustratedBinding;
```

Although all the details (and comments) are included in the code above, it's worth noting the following:

- `<p onLoad={console.log(this)}></p>` is simply included in order to show that referring to `this` within a class results in what is expected, namely `IllustratedBinding { ... }`. It's when you try to *use* `this` in event handlers that we have to be mindful of how our event handler class method will eventually get assigned as "listener" in the future.
- `handleClickUnbound`: As its name implies, the `handleClickUnbound` method has not been bounded. Hence, when the button is clicked on which this method is passed as the callback, we will get the dreaded `this` error: `TypeError: Cannot read property 'setState' of undefined`. The reason is because `this.handleClick` is eventually assigned to `listener`, thus losing its context (i.e., the React component instance).
- `handleClickBound`: As its name implies, the `handleClickBound` method has been bounded. Specifically, what is *the current `this`* in the class `constructor` (or anywhere else in the class for that matter)? The `this` in the class constructor refers to the React component instance we are creating. Hence, *we capture the current `this` in the constructor* via `bind`: By declaring `this.handleClickBound = this.handleClickBound.bind(this);` in the `constructor`, we ensure whenever `this.handleClickBound` is called that the `this` being referred to within `handleClick` points to the React component instance we are creating.

A slightly more cleaned up "visual" example of the above is given below as an image:

<p align='center'>
  <img width="800px" src='https://user-images.githubusercontent.com/73953353/99929121-8f7d9c80-2d11-11eb-987d-119061e41561.png' />
</p>

##### Why Arrow Function Properties Work

Arrow function class properties currently work through Babel based on, as an example,

```javascript
handleClick = () => { /* Can use this just fine here */ }
```

being effectively transpiled into 

```javascript
constructor() {
  super();
  this.handleClick = () => {}
}
```

And this works due to the fact that arrow functions **do not** bind their own `this` but take the `this` of their enclosing scope, namely the `constructor`'s `this` in this case which points to the React component instance, thus giving us the correct `this`.

It's actually *a lot more complicated*. React internally tries to use `Function#bind` on listeners for its own use, but this does not work with arrow functions as they simply do not bind `this`. That means when `this` inside the arrow function is actually evaluated, the `this` is resolved up each lexical environment of each execution context of the current code of the module. The execution context which finally resolves to have a `this` binding *is* the `constructor`, which has a `this` pointing to the current React component instance, allowing it to work.

##### Recap: 4 Examples

Now that we have a much better understanding of how event handlers work in React and why it's necessary to `bind` methods in the `constructor` (unless you `bind` elsewhere which is atypical and not recommended or you use arrow functions which frequently occurs and *is* recommended), we can consider 4 approaches or examples of how to go about defining event handlers in React. The following component is meant to illustrate these examples:

```javascript
import React from 'react';

class FourExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOnWithoutBind: true,
      isToggleOnWithBind: true,
      isToggleOnWithArrow: true,
      isToggleOnWithArrowCallback: true,
    };

    // For explicit binding in Example 2, as we learned was needed
    this.handleClickWithBind = this.handleClickWithBind.bind(this);
  }

  handleClickWithoutBind() {
    this.setState((prevState, props) => ({
      isToggleOnWithoutBind: !prevState.isToggleOnWithoutBind
    }));
  }

  handleClickWithBind() {
    this.setState((prevState, props) => ({
      isToggleOnWithBind: !prevState.isToggleOnWithBind
    }))
  }

  handleClickWithArrow = () => {
    this.setState((prevState, props) => ({
      isToggleOnWithArrow: !prevState.isToggleOnWithArrow
    }));
  };

  handleClickWithArrowCallback() {
    this.setState((prevState, props) => ({
      isToggleOnWithArrowCallback: !prevState.isToggleOnWithArrowCallback
    }));
  }

  render() {
    const buttonMargin = {
      display: 'block',
      marginTop: '5px',
      marginBottom: '20px',
    };
    const divStyle = {
      textAlign: 'left',
      marginLeft: '10px',
      fontFamily: 'monospace',
      fontSize: '20px',
    };

    return (
      <div style={divStyle}>

        {/* Example 1 (incorrect!!!) */}
        handleClickWithoutBind:
        <button style={buttonMargin} onClick={this.handleClickWithoutBind}>
          {this.state.isToggleOnWithoutBind ? 'ON' : 'OFF'}
        </button>

        {/* Example 2 (use explicit binding: correct) */}
        handleClickWithBind:
        <button style={buttonMargin} onClick={this.handleClickWithBind}>
          {this.state.isToggleOnWithBind ? 'ON' : 'OFF'}
        </button>

        {/* Example 3 (exploit fact that arrow functions do not bind their own "this": correct) */}
        handleClickWithArrow:
        <button style={buttonMargin} onClick={this.handleClickWithArrow}>
          {this.state.isToggleOnWithArrow ? 'ON' : 'OFF'}
        </button>
        
        {/* Example 4 (works but not performant since different callback is created for each render) */}
        handleClickWithArrowCallback:
        <button style={buttonMargin} onClick={() => this.handleClickWithArrowCallback()}>
          {this.state.isToggleOnWithArrowCallback ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default FourExamples;
```

And you can *see* the results below:

<p align='center'>
  <img height="300px" src='https://user-images.githubusercontent.com/52146855/80433767-7452c780-88bd-11ea-99fb-b719d5b94a18.gif' />
</p>

Other class methods defined in this manner should be similarly bound in the `constructor`. See [this article](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/) for more about how `bind` works as well as [this Tyler McGinnis article](https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/) for understanding `this`, especially in the context of the `call`, `apply`, and `bind` functions. 

##### Main Takeaway

In most cases, you should either `bind` your class methods in the `constructor`:

```javascript
class SampleClass {
  constructor(props) {
    super(props);
    this.state = { ... };

    this.oneMethod = this.oneMethod.bind(this);
    this.twoMethod = this.twoMethod.bind(this);
    this.threeMethod = this.threeMethod.bind(this);
    ...
  }

  oneMethod() { ... };
  twoMethod() { ... };
  threeMethod() { ... };
  ...

  render() {
    return (
      // JSX
    )
  }
}
```

Or you should simply use public class fields syntax with arrow functions:

```javascript
class SampleClass {

  oneMethod = () => { ... };
  twoMethod = () => { ... };
  threeMethod = () => { ... };
  ...

  render() {
    return (
      // JSX
    )
  }
}
```

### Events in React

Now that we have a sense of what state is and the basics of how it works, the question becomes: Why would we ever want to use it? When is state really useful? We're going to answer that now. The short answer lies in the fact that React is JavaScript, and it's a UI that runs in the browser, and JavaScript is an event-based language. What causes something to happen on any webpage? What causes the UI or DOM to change? It's usually because the user clicked on something, submitted a form, changed an input box, etc. So we are going to talk about how events work now because state and events are very closely related. Of course, state can change at any point inside of an application or a component, but it's most commonly going to change with events.

If we create a simple button, then historically we might do something like the following to add an event listener to it:

```javascript
import React, {Component, Fragment} from 'react';

class SimpleEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      msg: 'stateActivated'
    }

  }
  render() { 
    document.querySelector('.btn').addEventListener('click', () =>{
      console.log('Button was clicked!')
    })
    return ( 
      <Fragment>
        <button onclick="myFunction()">Click me!</button>      
      </Fragment>
    );
  }
}
 
export default SimpleEvents;
```

This is a very native JavaScript way of doing this. But what's the problem with what we've done above? We'll get an error: `TypeError: Cannot read property 'addEventListener' of null`. We are getting this error because, in React, our `button` actually hasn't been added to the DOM yet. So we can't do `addEventListener` because, well, the first time `render` runs there's *nothing* to add an event listener on (the JSX hasn't been returned yet). So we can't use `addEventListener` right now in this way (we can later if we want due to to how the component lifecycle works in React). 

The *other* way you would normally do something like the above is you would add the event listener directly to the element we wanted to be listening on:

```javascript
<button onclick="myFunction()">Click me!</button>      
```

This is very similar to how we do things in React (with a couple of caveats). In React, virtually every DOM event is still available, but we use camelCase, and we hand the event the callback we want to run:

```javascript
<button onClick={myFunction}">Click me!</button>      
```

Unlike in native JavaScript, we don't invoke functions as part of the event listener but instead *pass* functions, as seen above. We pass a callback in our JSX that is going to get run later. The reason for this is pretty simple: In native JavaScript we invoke the code we want to run later (as in `onclick="myFunction()"`, for example), but in React we don't invoke code we pass code. For something like

```javascript
<button onClick={console.log('Test')}>Click me!</button>      
```

what we pass to `onClick` is going to get evaluated, and we don't return anything in the example immediately below (technically, a function returns `undefined` in JavaScript when nothing else is explicitly returned). So what's actually sent back is `undefined` as a result of `console.log('Test')`. Hence, on the first `render`, we get `Test` logged to the console, but every time thereafter we essentially have `onClick=undefined`. So nothing will really happen when we click on the button because we're technically not telling React to do anything when we click it. The overall point is that we do not run code in `onClick` or other listeners for events; instead, we pass code. We pass a callback. And we can do this in two ways. 

Instead of running our code as above, we can simply create a new anonymous function that runs the code for us: 

```javascript
<button onClick={() => console.log('Test')}>Click me!</button>      
```

Using the code above will result in us logging `Test` to the console every time the button is clicked, as desired. This kind of pattern is fairly common in React. Again, we are not *running* `console.log('Test')`--we are passing a function that runs `console.log('Test')`. In general, this kind of pattern, albeit common, is also a bit messy. If possible, it's often wise to define a class method, which we can then pass by name:

```javascript
import React, {Component, Fragment} from 'react';

class SimpleEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      msg: 'stateActivated'
    }
  }

  handleClick() {
    console.log('Test');
    return console.log('Real Test')
  }

  render() { 
    return ( 
      <Fragment>
        <button onClick={this.handleClick()}>Click me!</button>      
      </Fragment>
    );
  }
}
 
export default SimpleEvents;
```

This is functionally the same as what we had before. Again, we are not going to run `this.handleClick` but *pass* `this.handleClick`. What we can't do is `this.handleClick()` because this will just result in `Test` being logged to the console once when the inital `render` occurs, but `this.handleClick()` returns `undefined`. What if we tried to do something kind of silly like 

```javascript
// ...
handleClick() {
  console.log('Test');
  return console.log('Real Test')
}
//...
<button onClick={this.handleClick()}>Click me!</button>
// ...
```

Would this work? What would happen? Well, instead of returning `undefined` now, we would return `console.log('Real Test')` which itself returns `undefined`; hence, we would just end up with `Test` and `Real Test` being logged to the console in succession. The "fix" (only for the sake of illustration ... you would never want such a silly function!):

```javascript
// ...
handleClick() {
  console.log('Test');
  return () => console.log('Real Test')
}
//...
<button onClick={this.handleClick()}>Click me!</button>
// ...
```

Then we would get `Test` logged on the first render and `Real Test` logged every time we clicked the button thereafter.

In summary, those are the two ways:

1. We can define a method and pass that method. 
2. We can define an anonymous function within the React element itself that runs our code. 

Now let's consider a different kind of element, an `input`. You don't really click on `input` other than to *change* it. So with an `input` we will use `onChange`:

```javascript
<input type="text" placeholder="Enter some text!" onChange={this.handleChange} />
```

And if we want to, we can have a simple

```javascript
handleChange() {
  console.log('User changed the input')
}
```

And as a user types this handler will fire *every single time* the user presses a key because any time something changes inside of the `input` box we are logging `User changed the input` to the console. We can have more fun by using something like

```javascript
handleChange(e) {
  console.log(e.target.value)
}
```

which will actually what's currently in the `input` box. 

Let's now consider a `form` to round things out. You don't click on or change forms--you `submit` them. So we will use `onSubmit`. If we wrap our previous elements in the `form` then something interesting will happen:

```javascript
handleSubmit() {
  console.log('Form submitted!')
}

render() {
  return (
    <Fragment>
      <form onSubmit={this.handleSubmit}>
        <button onClick={this.handleClick}>Click me!</button>
        <input
          type="text"
          placeholder="Enter some text!"
          onChange={this.handleChange}
        />
      </form>
    </Fragment>
  );
}
```

If we hit `Enter` while inside of the `input` box, then you will *very briefly* see `Form submitted!` logged to the console. Why does this message disappear? What's happening is common to JavaScript (in other languages there are mechanisms to prevent this), namely we have to manually tell the browser to not send the form forward to the next page because we don't have one. Normally your `form` tag might have an `action` or a `method` on it (e.g., `action='/process_review_submission'` with `method='post'`). But for our case right now, we want to stop the form from being sent forward. A very important topic when it comes to handling events is that every event in React some with an `event` object that will automatically be passed (even if we don't use it as we haven't so far except in the example of using `e.target.value`, where `e` is referring to the event). The event that is passed in each case comes with a `preventDefault` method which ... prevents the default behavior of what the event normally does, which, in the case of a form submission, is to send the form forward to the next page. We are going to *prevent* that default behavior by using `e.preventDefault` within our `handleSubmit` handler. 

### Available events

If we head over to [SyntheticEvent](https://reactjs.org/docs/events.html) in the docs, we can see what all events are available in React, and they use the `SyntheticEvent` wrapper (essentially a class) in order to try and normalize the way every browser works with events, just meaning that, for example, Firefox may have a slightly different event object than Chrome does, than Safari does, and so on. Instead, React uses the `SyntheticEvent` which makes sure that they pretty much all behave the same way regardless of the browser. 

If you go down to [Supported Events](https://reactjs.org/docs/events.html#supported-events), you will see that they have categorized them:

- [Clipboard Events](https://reactjs.org/docs/events.html#clipboard-events)
- [Composition Events](https://reactjs.org/docs/events.html#composition-events)
- [Keyboard Events](https://reactjs.org/docs/events.html#keyboard-events)
- [Focus Events](https://reactjs.org/docs/events.html#focus-events)
- [Form Events](https://reactjs.org/docs/events.html#form-events)
- [Generic Events](https://reactjs.org/docs/events.html#generic-events)
- [Mouse Events](https://reactjs.org/docs/events.html#mouse-events)
- [Pointer Events](https://reactjs.org/docs/events.html#pointer-events)
- [Selection Events](https://reactjs.org/docs/events.html#selection-events)
- [Touch Events](https://reactjs.org/docs/events.html#touch-events)
- [UI Events](https://reactjs.org/docs/events.html#ui-events)
- [Wheel Events](https://reactjs.org/docs/events.html#wheel-events)
- [Media Events](https://reactjs.org/docs/events.html#media-events)
- [Image Events](https://reactjs.org/docs/events.html#image-events)
- [Animation Events](https://reactjs.org/docs/events.html#animation-events)
- [Transition Events](https://reactjs.org/docs/events.html#transition-events)
- [Other Events](https://reactjs.org/docs/events.html#other-events)

And we can take a glance at what event names there are for a given category; for example, we get the following for [Mouse Events](https://reactjs.org/docs/events.html#mouse-events):

- onClick 
- onContextMenu 
- onDoubleClick 
- onDrag 
- onDragEnd 
- onDragEnter 
- onDragExit
- onDragLeave 
- onDragOver 
- onDragStart 
- onDrop 
- onMouseDown 
- onMouseEnter 
- onMouseLeave
- onMouseMove 
- onMouseOut 
- onMouseOver 
- onMouseUp

There are the [Pointer Events](https://reactjs.org/docs/events.html#pointer-events) for when you actually move your cursor around, and so on. So the Synthetic Events page can be a great reference to refer to if you are wondering how a particular event works. 

### Changing state with an event

We are now going to tie the two together (i.e., state and events and how we can let events change state and thereby the UI). The best way to see how state and events can be tied together is by considering a basic example involving them (see if you can tell what is *intended* inside of the component):

```javascript
import React, { Component, Fragment } from 'react';

class EventAndState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: '',
      inputText: '',
    };
  }

  handleClick = (e) => {
    this.setState({
      titleText: 'Try some more possibilities!',
      inputText: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      titleText: e.target.value,
      inputText: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.setState({
      titleText: 'React is so awesome!',
      inputText: '',
    });
    e.preventDefault();
  };

  render() {
    const { inputText, titleText: dynamicTitleText } = this.state;

    return (
      <Fragment>
        <h1>
          {dynamicTitleText === ''
            ? 'Start typing for a dynamic title!'
            : dynamicTitleText}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <button onClick={this.handleClick} type="button">
            Click me to try more dynamic titles!
          </button>
          <input
            value={inputText}
            type="text"
            placeholder="Enter some text to change title!"
            onChange={this.handleChange}
          />
        </form>
      </Fragment>
    );
  }
}

export default EventAndState;
```

A few things to note from the above example component: 

- Any change in state will cause the `EventAndState` component to render itself again (unless we explicitly tell it not to, as we will see is a possibility when looking at the component lifecycle). Since the state changes in this component on every single keystroke in the `input` field, it renders however frequently the user types (as well as when the `button` is clicked or the `form` submitted). More to the point: Every time our component rerenders, React will compare the old virtual DOM with the new virtual DOM; in this case, if a keystroke has been entered, then there *will be* a difference between the old virtual DOM and the new virtual DOM, thus resulting in a change being reflected in the actual DOM.
- Worth repeating: Any time state changes in a React component, `render` will be called again. Every time. Unless we force it to not render.
- In this example, for our `button`, we need to specify `type='button'`. Why? Because, as [this post](https://stackoverflow.com/a/9824845/5209533) observes, buttons like `<button>Click to do something</button>` **are** submit buttons. We can set `type='button'` on the `button` in order to change this.
- In the `handleSubmit` method, we *must* call `e.preventDefault()` in order to prevent the `form` from submitting and the browser trying to move the page to something else that doesn't exist (basically resulting in a worthless refreshing of the page since we don't specify where the browser should go upon form submission). 

This is awesome! We are beginning to see the power of state. We have it all in one place. We essentially have one source of truth for the component. We can update the UI very very efficiently using the same events we are used to but simply allow React to change the variables and then manage the rerender process down below. 

**Side note:** Eventually, you will find that you want to handle `onChange` for *several* `input`s, and you'll notice you're basically rewriting the same code over and over, a giveaway that you could possibly do something more efficient. Without going into much detail here, [this brief post on Medium](https://medium.com/front-end-weekly/react-quick-tip-easy-data-binding-with-a-generic-onchange-handler-fb0254a7094e) discusses easy data binding with a generic `onChange` hander:

```javascript
onChange = e => this.setState({ [e.target.name]: e.target.value });
```

See the post for more details, but this can be pretty handy on a number of occasions. Worth noting is that this is certainly not a catch-all solution as it currently stands: it won't work if, say, you need to validate the format of an email address, check the strength of a password, etc. In those cases, you'll clearly need to run some conditional logic inside of `setState` to handle those edge cases appropriately.

### Practicing with managing state with events

Here were the original assignment instructions:

#### Assignment instructions

##### Make a new Component called StatePractice
- import react and Component
- make it a class, specifically a subclass of Component
- export the class as default
- add the constructor and super
- initialize state in the constructor with a property of message and a value of empty string
- add a render method
- return a sanity check

##### Add StatePractice to app.js
- go to app.js and import the component (remove EventAndState)
- render the component in app.js

##### Add event and state change to StatePractice
- remove sanity check and replace it with an input box and an h3
- in the h3, render the message piece of state
- use onFocus on the input box so that when the user clicks on the input, state updates
- setState on "message" to notify the user that they agree to the site terms of service by filling out the form

##### Add another event
- add the onMouseEnter event to the h3 so that it clears the text when the user hovers over it

##### Add another tag and event
- add an image tag (point at any URL)
- add another property to your state variable in the constructor called imageWidth and init to an empty string
- use the onLoad event to grab the image width
- if the image width is greater than 100px, then console.log("Your image is big!")

#### Extension

We can extend on this basic assignment to create the following behavior (disregard the top and bottom bars blinking and changing colors--that's due to the console being open during the demo):

<p align='center'>
  <img width="600px" src='https://user-images.githubusercontent.com/52146855/80522414-29cf5a80-8952-11ea-9586-6bcc7f90def6.gif' />
</p>

If you try to mimic the behavior above, there are a few things worth noting:

- The `textarea` field should dynamically have the same width as the image.
- You should actually `alert` the user upon first and only first focus of the text area.
- As [the docs note](https://reactjs.org/docs/react-component.html#setstate), the syntax for `setState` is `setState(stateChange[, callback])`. We know a fair amount about the `stateChange` *required* argument which can be a regular object (which is good to use when new state does not depend on previous state) or a callback (that automatically receives previous state and current props as available arguments). But `setState` also accepts an optional callback function that will be executed once `setState` is completed and the component is re-rendered. Generally, the React recommends using `componentDidUpdate()` (a lifecycle method we will get to before long) for such logic instead.
- As [the docs note](https://reactjs.org/docs/refs-and-the-dom.html) about refs (in the component code below a single ref is used in order to send focus back to the `textarea` once a user has hovered over the title): Refs provide a way to access DOM nodes or React elements created in the render method: "In the typical React dataflow, [props](https://reactjs.org/docs/components-and-props.html) are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch." They go on to recommend different use cases for refs: Managing focus (as is done in the component below), text selection, or media playback; triggering imperative animations; integrating with third-party DOM libraries.
- There's also some in-line styling. We'll get to more styling possibilities later.

```javascript
import React, { Component } from 'react';

class StatePractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'You agree to our terms of service by filling out the form.',
      dynamicTitle: '',
      inputText: '',
      imageWidth: '',
      termsAcknowledged: false,
    };
    this.textInput = React.createRef();
  }

  handleMouseEnter = (e) => {
    this.setState(
      {
        dynamicTitle: 'New dynamic title inbound!',
        inputText: '',
      },
      () => {
        this.textInput.current.focus();
      }
    );
  };

  handleFocus = (e) => {
    if (!this.state.termsAcknowledged) {
      alert(this.state.message);
    }
    this.setState((prevState, props) => ({
      termsAcknowledged:
        prevState.termsAcknowledged || !prevState.termsAcknowledged,
    }));
  };

  handleChange = (e) => {
    this.setState({
      dynamicTitle: e.target.value,
      inputText: e.target.value,
    });
  };

  handleImgLoad = (e) => {
    this.setState(
      {
        imageWidth: e.target.width,
      },
      () =>
        this.state.imageWidth > 100
          ? console.log(`Your image is big! (${this.state.imageWidth}px)`)
          : null
    );
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      dynamicTitle: 'Thanks for submitting! Try a new one!',
      inputText: '',
    });
  };

  render() {
    const { inputText, dynamicTitle, imageWidth } = this.state;

    return (
      <form action="" onSubmit={this.handleFormSubmit}>
        <h3 onMouseEnter={this.handleMouseEnter}>
          {dynamicTitle === ''
            ? 'Type a message to begin! (or hover over this title at any time to begin a new one)'
            : dynamicTitle}
        </h3>
        <button style={{ cursor: 'pointer' }}>Click to submit!</button>
        <br />
        <textarea
          style={
            imageWidth === ''
              ? { display: 'none' }
              : { width: imageWidth + 'px', margin: 10 }
          }
          type="text"
          value={inputText}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          placeholder="Type new message here"
          ref={this.textInput}
        />
        <br />
        <img src="binary-people.jpg" alt="" onLoad={this.handleImgLoad} />
      </form>
    );
  }
}

export default StatePractice;
```

### State and props together

One thing worth recalling is that we often want to pass data as props to components instead of adding file `require`ment dependencies within a component. For example, if we have card data in a `cards.js` file, then it's often architecturally better to `require` that file at a high level (e.g. in `App.js`) and *pass* the card data as props to a `CardSet` component like so: `<CardSet cards={cards} />`. This allows us to make sure `CardSet` is *modular* as it can be. It does not depend on reading in data from anywhere else. It simply uses the data it is given (as props). Another nice reason about passing data as props is that props are immutable. So whatever is passed as `cards` to `CardSet` will not change or, if it does, it will only change at a level *above* `CardSet`. So the `CardSet` does not have to worry about the `cards` data changing--that is someone else's problem.

Something worth noting concerning situations when you want to get information from a certain element you created when mapping through data is that what you use as a callback for the JSX should often be an anonymous function where you can pass the *function being returned* data about the specific element. So instead of something like

```javascript
<button onClick={this.saveCourse}>Save</button>
```

where whatever `saveCourse` is it just gets called (we aren't passing the `saveCourse` method anything specific about the element on which there is a listener), we instead can pass data to `saveCourse` by means of an anonymous function:

```javascript
<button onClick={(event) => this.saveCourse(event, index, dataOne, dataTwo, ...)}>Save</button>
```

The result is you can define your methods in such a way that they are waiting for specific data instead of only being passed events:

```javascript
saveCourse = (event, index, dataOne, dataTwo, ...) => {
  console.log(index)
}
```

Note the `...` above refers to whatever else might be passed to `saveCourse` by means of the anonymous callback in our JSX. The point of this is that if you want to pass data to an event handler beyond just the event itself, then you will need to use something like the following (important to note below is that for the anonymous function `() => this.handleEvent` you must provide the event as the argument to the anonymous function if you want to use it in your event handler; that is, if you want to make use of the event inside of `this.handleEvent` while also passing data to `this.handleEvent`, then your JSX callback will need to look like `(event) => this.handleEvent(event, dataToBePassed)` instead of `() => this.handleEvent(event, dataToBePassed)` because in the latter case you actually don't have access to the `event` object):

```javascript
<element onEvent={(event) => this.handleEvent(event, dataOne, dataTwo, ...)}> </element>
```

as opposed to the "normal"

```javascript
<element onEvent={this.handleEvent}> </element>
```

because this "normal" way results in not passing *anything* to the `handleEvent` method other than the event itself. We *definitely* cannot do something like 

```javascript
<element onEvent={this.handleEvent(dateOne, dataTwo, ...)}> </element>
```

because this will result in this function being called immediately on render which is not what we want at all. This should be very empowering because now we have the power to generate a bunch of elements and pull data from these elements based on how the user interacts with them. And we can `setState` within these methods using the data passed to it as a result of the user's interaction with the UI.

### Stateless componenets vs stateful components (terminology)

Let's get our terms down for "stateless" and "stateful". What do these terms really mean?

- **Stateful:**
  + Has state. In React-speak, that means a component is managing some kind of state variable. There's data inside of the component that's changing, and the component is in charge of that. 
  + A component will have state if it is managing its own data. 
  + The consequence of managing state is that given input `a` in a component, it will not always equal output `b`. The point is that if you have a stateful component and you give it input `a`, then you cannot guarantee that the output is always going to be `b`. 
  + Becuase the internal data is changing in a stateful component, if you give it `a` you might get `b` as the output one time, but you might get `c` another time, `d` another time, etc.
  + Essentially: A stateful component can be thought of as complex and smart.
- **Stateless:**
  + Does not have state.
  + The consequence of not managing state is that input `a` will always equal output `b`. 
  + If you give a stateless component a piece of input or data, then you will *always* get the same output for that specific input. Nothing is changing internally. 
  + Essentially: Simple, pure, presentational

So a stateless component's job is simply to represent some HTML. So if you find yourself writing a bunch of markup in a stateful component, then odds may be decent you should abstract some of that markup away and create a new strictly presentational component and fill in the presentational component by passing data down to it as props.

## The Component Lifecycle and HTTP

### server-side rendering vs. what we typically aim to do with React

When we go to Wikipedia, we get the DOM for some page. When we go to another page on Wikipedia, we make an HTTP request and we get a whole new DOM. The server accepts our request and repackages a bunch of HTML, CSS, and JS which the browser can understand and then ships that to us. Whenever we browse to a new page, this corresponds to a new request to the server and a subsequent shipment of HTML, CSS, and JS. Basically: `new page request via HTTP -> server fetches appropriate HTML, CSS, and JS -> server responds with HTML, CSS, and JS which the browser parses and returns as a whole new DOM`.

We aim to change such a cycle with React. React is "back-end agnostic." Often one will be using Node.js and Express, but other options are certainly possible. 

The difference between server-side rendering and what React aims to do is that when we need any new data at all, we still will make another HTTP request, but we will *not* get back HTML, CSS, and JS. Instead, we will get back JSON. And this will happen over and over and over. You can get back other things (XML, other files, etc.) but by far the most common is going to be JSON. 

And that is the route we are going to take. Instead of loading up a new DOM, it's going to be

```
HTTP -> JSON : HTTP -> JSON : HTTP -> JSON ...
```

So React can update itself. It's purely a UI library so it has no idea how the data was made or who is on the other end. It could be PHP, Node, Go, C++, etc. All React knows is that it got some data and that it can do something with it. The server's job is just going to be to kick back some JSON. 

Instead of server-side rendering, where the server does everything (like where you use templating engines to build the UI with the server and couple the logic), we are now creating a clean separation between front-end and back-end. This separation now means that there needs to be some chatter between the front-end and the back-end (i.e., chatter between the front-end, React, and the server that is going to provide the data, the back-end). To manage this chatter as well as other things, React gives us the component lifecycle which will help us manage how and when things should be happening.

### HTTP requests using React

Up until now, everything we have done has been from hard-coded data. We loaded static files into our application directory and used the data from those files. But that's not really how the web works anymore. Typically, React is going to be asking for data from somewhere else whether it be your own server or someone else's because React is just a UI framework. It doesn't have any access to databases or anything like that. So generally we will be making HTTP requests to a server in order to *get* data. In order to make HTTP requests, however, we need an HTTP client.

Unlike Angular or some other frameworks you may have worked with, there isn't a built-in HTTP client with React. So we can use the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) which is built into native JavaScript now. There's also tested and tried [jQuery](https://www.npmjs.com/package/jquery) where you can use `$.ajax`. We are going to use [axios](https://www.npmjs.com/package/axios) though. Why? The reason (among others) is that it is the most commonly used HTTP client in production.

### Note about environment variables and hiding secrets (e.g., API keys) in React

**This still needs to be addressed** (some ideas included below for time being)

In something like Express/Node (especially in the context of server-side rendering), you might often put API keys and the like into an `.env` file and use [dotenv](https://www.npmjs.com/package/dotenv) to access your environment variables throughout your application. Sense everything in React is done client- or browser-side, we have to be more careful with secrets like API keys. 

[The docs](https://create-react-app.dev/docs/adding-custom-environment-variables/) indicate that environment variables are embedded during the build time. It seems like [most solutions](https://stackoverflow.com/questions/46838015/using-api-keys-in-a-react-app/46839021#46839021) involve sending a request to the backend where environment variables can remain hidden and then having the backend make the request for us (subsequently sending what response the backend request gets to the frontend).

Assuming we are using Express as the backend (I imagine it would work similarly otherwise as well), at least one approach I have seen involves having the client make a call to, say, `/api`, and then have an `/api` route in Express proxy that request to the actual API URL:

```javascript
app.use('/api', (req, res) => {
  const method = req.method.toLowerCase();
  const headers = req.headers;
  const url = 'your_actual_api_url';
 
  // Proxy request
  const proxyRequest = req.pipe(
    request({
      url
      headers,
      method,
    })
  );
 
  const data = [];
  proxyRequest.on('data', (chunk) => {
    data.push(chunk);
  });
 
  proxyRequest.on('end', () => {
    const { response } = proxyRequest;
    const buf = Buffer.concat(data).toString();
    res.status(response.statusCode).send(buf);
  });
});
```

And I have also seen [another approach](https://github.com/react-boilerplate/react-boilerplate/issues/1744#issuecomment-303112505) that looks a bit more elaborate (but possibly more effective/secure?).

This is something to spend a fair amount of time with to ensure secrets aren't exposed in the bundle for a real production application.

### The component lifecycle

#### Asynchronous Rendering Quandary: Forced Introduction to the Component Lifecycle

We have an example of how one API works ([open weather map](https://openweathermap.org/api)) and how to get some data from it:

```javascript
import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d'
  let weatherData= axios.get(url).then(resp => console.log(resp.data))

  return (
    <div className="App">
      <h1>Sanity Check</h1>
    </div>
  );
}

export default App;
```

The question now is how do we actually use the data we get back from the API we send a request to? Because this is certainly going to be the most common way in which you fetch data in React (or really any UI framework). Essentially: How do we get the data from our API call into our JSX that we actually want to render to the screen? 

The key thing to remember here is that HTTP requests are asynchronous, meaning JavaScript will not wait for the response. It will keep on moving. So above, the `const url = ... ` line will run and the next line will *start* to run, but JavaScript will keep going and return the JSX without the data even if we don't intend for or want it to. So we are going to want to use state. State is meant for this very thing when we have data that needs to change. We start off with our basic rendering *without* data, but that's not what we ultimately want in the DOM. We are going to want to change the DOM once we hear back from our API request. So this is a very good example of when we would want to use state. So for the time being (until we get to hooks), we will convert `App` to be a class.

The following may be one attempt at trying to come up with a solution to our apparent problem:

```javascript
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d'
    let weatherData = axios.get(url).then(resp => {
      this.state = {
        temp: resp.data.main.temp
      }
    })
  }

render() {
  return (
    <div className="App">
      <h1>{this.state.temp}</h1>
    </div>
  );
}
}

export default App;
```

Why won't this work? Again, it's the asynchronous part at work here. `this.state` in the `axios` request doesn't get run until *after* the `render` runs (we also can't be assigning a variable inside of an `axios` request that we can nakedly access later). So there are all sorts of things wrong with this. 

So where do we put our request? We have an asynchronous thing that needs to happen. We can't put it in the constructor. So what if we put our request in the `render` like so:

```javascript
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ''
    }
  }

render() {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d';
  axios.get(url).then(resp => {
    this.setState({
      temp: resp.data.main.temp
    })
  })
  return (
    <div className="App">
      <h1>{this.state.temp}</h1>
    </div>
  );
}
}

export default App;
```

If you run the code above, then it *looks* like it works (you will get a number on the screen with the data we retrieved), but this is really really bad. Why? Because we are updating state inside of `render`. And what happens when we update state? Our component renders again. React is smart enough to see what we are doing and keeps us from hurting ourselves. So our request doesn't belong in `render` either. If React didn't have safety mechanisms in place, then we would get caught in an infinite loop: our `setState` would run, cause a render, which would then update state, cause another render, etc., etc. 

So where on earth does our request belong then? This is where the lifecycle methods for components become crucial! We will make use of the `componentDidMount` lifecycle method like so:

```javascript
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ''
    }
  }

  componentDidMount() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d';
    axios.get(url).then(resp => {
      this.setState({
        temp: resp.data.main.temp
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.temp}</h1>
      </div>
    );
  }
}

export default App;
```

So we get exactly the same result now, but what gives? We didn't *call* `componentDidMount` anywhere inside `render` or anywhere else. So why did our request run, our state update, and then our component render again with the data we wanted? This is the lifecycle of the component at work. 

At the *very beginning* of our component we have a class `App` which has all the goodness that comes from being a `Component` which `react` gives us. Because `App` is a component and we called `super` within our class definition, we get all that cool stuff that comes with being a React component, namely all of the lifecycle methods for React components. In particular, one of the lifecycle methods we get is `componentDidMount`, and React will look for the existence of this method and, if it exists, React will call this method automatically after the first render. Without even saying else just yet, you should be able to see why it is often advised to put asynchronous requests in `componentDidMount`: React will call this method after the initial render of your component and you can do all your fun data retrieval then. Since you will *still render a component* without your data at first, the idea of "conditional rendering" is prominent. You may see stuff like a "loading" component that will display if our data hasn't been retrieved just yet. As soon as we get our data, then we can render what we actually want. 

#### Initial Rendering Order

Consider the following pseudocode:

```js
class Foo extends Component {
  constructor() {
    super();

    this.state = {temp: ''}
  }

  componentDidMount() {
    axios 
    ...
  }

  render() {
    ...
    return(
      ...
    )
  }
}
```

In what order does all of this execute? 

1. The very first thing that will happen when an instance of the `Foo` class is created is its `constructor` will run (which, in this case, means calling `super` and inhereting everything that comes with being a React `Component` as well as setting initial values of `state`, etc.).
2. The `render` method is called and whatever is being returned is placed in the virtual DOM and then the actual DOM (on the first rendering of the application).
3. `componentDidMount`, if it exists (which it does above!), will get called after the initial `render`. The reason this is a sensible method is because of the single-threaded nature of JS. Anything asynchronous gets plucked out of the event loop and plopped onto the call stack. This method is where it makes sense to make HTTP requests using `axios`, `fetch`, or something similar. The idea is then to call `setState` once you have gotten the data back that you want.
4. Calling `setState` results in a rerender (a new render results any time state changes unless we force different behavior). The idea is to get one version of the DOM upon the initial render without the desired data (along with probably a loading screen of some sort). Once the desired data is obtained and the state updated, the state can then be used to render the DOM how we want.

#### Rendering Process (mounting, updating, unmounting)

Here is the simplified rendering process for components in React:

| **Mounting** | **Updating** | **Unmounting**| 
| ------------ | ------------ | ------------- |
| 1. `constructor` | New props / new state |  |
| 2. `render` | 4. `render` again (as many times as needed) |  | 
| 3. `componentDidMount` | 5. `componentDidUpdate` | `componentWillUnmount` |

Every React component has to mount, where "mount" is simply the term for "it wasn't in the virtual DOM a second ago and I'm about to put it in there"; that is, the entire component is being rendered. 

Here is a high-level overview of the whole process:

- **Mounting:** The very first thing that happens is the `constructor` runs when the component is actually created or called by something else. So `index.js` starts everything with `ReactDOM.render(<App />, document.getElementById('root'));` which asks for `App` from `App.js`. When `App` gets asked for, the `constructor` for `App` will run, and then the `render` for `App` will run. And once the first `render` is finished, `componentDidMount` will run (if it exists). And at this point our React component is just sitting there. It doesn't have anything else to do. After that, we get into the updating phase.
- **Updating:** The mounting phase is now over and the component is in the DOM. Thus begins the update phase. If we get new `props` or new `state`, then `render` will run again; as soon as `render` is finished running, `componentDidUpdate` will run again. And then we get new `props`. Then `render` runs again. Then `componentDidUpdate` runs again. And so on and so forth so long as new `props` or new `state` come in. Hence, in a nutshell, the update phase is a circular process that looks as follows:
  1. new `props` or new `state`
  2. `render`
  3. `componentDidUpdate`
This process happens again and again and again (however long is necessary). Every time there is new `props` or new `state`, the component will rerender and `componentDidUpdate` will always follow. We need `render` to run because we need the component to update the virtual DOM. And `componentWillUpdate` will allow us to run logic after we have an update--we might need to know if something happened. 
- **Unmounting:** The unmounting process is when the component is going to get removed from the DOM. So, in this example, it may be that we do not need `App` anymore because we are going to go to something else. `componentWillUnmount` runs as a last gasp right before it's actually removed. So if we have logic we need to run, if we need to clear up something in memory or we want to alert some other component or some other part of the application, then we can do that inside of `componentWillUnmount`. 

The above is the lifecycle that components go through. There are a couple of other methods, but these are the most frequently used. The point is that the power of the component lifecycle is that it gives us the ability to patch into the process but let React manage how and when everything happens. We can use the methods React is giving us to optimize how everything is being processed and rendered. 

#### Component Lifecycle Visualized (and legacy lifecycle methods addressed)

It's worth taking a good look at [the docs](https://reactjs.org/docs/react-component.html) concerning `React.Component`. In particular, [this blog post on React's official site](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) addresses some updates concerning asynchronous rendering ([this talk](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html) by Dan Abramov addresses what the React team has been working on). Essentially, the React team noted that some of their legacy component lifecycles tended to encourage unsafe coding practices:

- `componentWillMount`
- `componentWillReceiveProps`
- `componentWillUpdate`

They show in their [Gradual Migration Path](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path) that React 17.0+ (as of writing now, April 28, 2020, the latest React version is 16.13.1) will actually *remove* the lifecycle methods listed above. [This Reddit post](https://www.reddit.com/r/reactjs/comments/997s8o/how_replace_component_will_update_lifecycles/) points out the general approach to making sure you avoid the methods listed above:

- Use `componentDidMount` instead of `componentWillMount`
- Use `static getDerivedStateFromProps` instead of `componentWillReceiveProps` (only if you *really* need to derive state; the React team has another blog post literally titled [You Probably Don't Need Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html))
- Use `componentDidUpdate` instead of `componentWillUpdate`

With all of the above said, [this site](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) (which React actually links to in the docs) illustrates the commonly used lifecycle methods we have just mentioned in passing:

<p align='center'>
  <img width="750px" src='https://user-images.githubusercontent.com/73953353/99928734-044fd700-2d10-11eb-86d6-2732d4fbf528.png' />
</p>

They also show the less common lifecycles as well (although it's a more cluttered picture):

<p align='center'>
  <img width="750px" src='https://user-images.githubusercontent.com/73953353/99928757-20537880-2d10-11eb-9e9a-c5fa37feda08.png' />
</p>

The following link list may be helpful for reference in the context of the outline(s) above:

- **Mounting:**
  + [constructor](https://reactjs.org/docs/react-component.html#constructor)
  + [getDerivedStateFromProps](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
  + [render](https://reactjs.org/docs/react-component.html#render)
  + [componentDidMount](https://reactjs.org/docs/react-component.html#componentdidmount)
- **Updating:**
  + [getDerivedStateFromProps](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
  + [shouldComponentUpdate](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
  + [render](https://reactjs.org/docs/react-component.html#render)
  + [getSnapshotBeforeUpdate](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)
  + [componentDidUpdate](https://reactjs.org/docs/react-component.html#componentdidupdate)
- **Unmounting:**
  + [componentWillUnmount](https://reactjs.org/docs/react-component.html#componentwillunmount)

[This article on Medium](https://blog.bitsrc.io/understanding-react-v16-4-new-component-lifecycle-methods-fa7b224efd7d) explores all of the lifecycle methods listed above in the hypothetical context of building a music player.

### Reference: The docs on `React.Component` (in a nutshell)

See [React.Component](https://reactjs.org/docs/react-component.html) in the docs for all the gory details. Below is a modest attempt to provide just a nuts and bolts reference for ease of use (i.e., consult the actual docs for examples of everything below).

Each component has several "lifecycle methods" that you can override to run code at particular times in the process. You can use [this lifecycle diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.

- **Mounting:** These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
  + **[constructor()](https://reactjs.org/docs/react-component.html#constructor)**
  + [static getDerivedStateFromProps()](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops) 
  + **[render()](https://reactjs.org/docs/react-component.html#render)**
  + **[componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)**
  + **Note:** These methods are considered legacy and you should [avoid them](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) in new code:
    * [UNSAFE_componentWillMount()](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount)
- **Updating:** An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
  + [static getDerivedStateFromProps()](https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
  + [shouldComponentUpdate()](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
  + **[render()](https://reactjs.org/docs/react-component.html#render)**
  + [getSnapshotBeforeUpdate()](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)
  + **[componentDidUpdate()](https://reactjs.org/docs/react-component.html#componentdidupdate)** These methods are considered legacy and you should avoid them in new code:
  + **Note:** These methods are considered legacy and you should [avoid them](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) in new code:
    * [UNSAFE_componentWillUpdate()](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate)
    * [UNSAFE_componentWillReceiveProps()](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)
- **Unmounting:** This method is called when a component is being removed from the DOM:
  + **[componentWillUnmount()](https://reactjs.org/docs/react-component.html#componentwillunmount)**
- **Error Handling:** These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
  + [static getDerivedStateFromError()](https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror)
  + [componentDidCatch()](https://reactjs.org/docs/react-component.html#componentdidcatch)
- **Other APIs:** Each component also provides some other APIs:
  + [setState()](https://reactjs.org/docs/react-component.html#setstate)
  + [forceUpdate()](https://reactjs.org/docs/react-component.html#forceupdate)
- **Class Properties**
  + [defaultProps](https://reactjs.org/docs/react-component.html#defaultprops)
  + [displayName](https://reactjs.org/docs/react-component.html#displayname)
- **Instance Properties**
  + [props](https://reactjs.org/docs/react-component.html#props)
  + [state](https://reactjs.org/docs/react-component.html#state)

### The Lifecycle: `componentDidMount()`

We will now explore [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount) a bit more. As the docs note: `componentDidMount()` is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. 

**Example:** If you need something to already exist in the DOM, then this is where you can access that thing. You could then technically use `element.addEventListener` or something similar even though we will rarely use that. The point is that if you need an *actual DOM element* to grab after rendering, then this is a place to do that. 

If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

**Example:** This is a good place to instantiate HTTP requests!

We are now going to consider a simple use case of `componentDidMount()` in the context of trying to use the [Materialize](https://materializecss.com/) framework. We can copy their CDN links and dump them into our `index.html` in our `public` folder (under `title` or somewhere appropriate in the `head`):

```html
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

Suppose we like the [Modals](https://materializecss.com/modals.html) in Materialize and we want to use one in our React application (there are *lots* of modules for React modals and other such things, but we're just going to use Materialize here to illustrate how `componentDidMount()` can be used in this instance). We can copy their base modal:

```html
<!-- Modal Trigger -->
<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

<!-- Modal Structure -->
<div id="modal1" class="modal">
  <div class="modal-content">
    <h4>Modal Header</h4>
    <p>A bunch of text</p>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>
```

Note that we will need to change `class` to `className` to make this work in our application (we will also need get rid of the HTML comments or change them to be `{/* JSX Comments */}`). The Materialize docs note that the following about initialization and opening a modal using a trigger: 

```javascript
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});
```

Our modal uses a trigger. But notice the use of `document.querySelectorAll('.modal')`. What does this assume? That an element with a class of `modal` actually *exists* in the DOM (they have even structured things to make sure that element exists by only adding the event listener once all of the DOM content has loaded). In our situation, in the context of React, how can we add an event listener to an element if the element doesn't even exist in the DOM on the first go around? This is exactly where `componentDidMount()` comes into play! The React team even told us as much in the docs: "Initialization that requires DOM nodes should go here." Materialize tells us how to initialize a modal to open using a trigger, but they gave us a vanilla JavaScript approach--we want the React approach, and the sensible way of doing this in React is to perform the initialization in the `componentDidMount()` lifecycle method. One last potential "gotcha" in this case concerns the fact that we have to be careful of stuff that we bring in from the outside: right now, with just

```javascript
var elems = document.querySelectorAll('.modal');
var instances = M.Modal.init(elems, options);
```

in `componentDidMount()` we would get an error: `'M' is not defined`. Basically, `M` *was inserted* by the Materialize script (you can check this via `console.log(M)`), so `M` does exist, but it's attached to the `window` object (i.e., `console.log(window.M)` will give the same result as `console.log(M)` because we are in the window when we are in the browser console). In our React application, we are not in the `window`. So we need `window.M.Modal.init(elems)` (we drop the `options` since we aren't going to use those here). All in all, our component might look something like the following:

```javascript
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ''
    }
  }

  componentDidMount() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d';
    axios.get(url).then(resp => {
      this.setState({
        temp: resp.data.main.temp
      })
    })
    const elems = document.querySelectorAll('.modal');
    const instances = window.M.Modal.init(elems);
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.temp}</h1>
        <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
```

### The Lifecycle: `render()`

We know a good deal about `render()` as we have interacted with it a fair amount so far, but we can still glean some useful information from [the docs](https://reactjs.org/docs/react-component.html#componentdidmount) (and also recall that the `render()` method is the *only* required method in a class component):

- When called, `render()` should examine `this.props` and `this.state` and return one of the following types: React elements, arrays and [fragments](https://reactjs.org/docs/fragments.html), [portals](https://reactjs.org/docs/portals.html), strings and numbers, booleans or null.
  + Recall that all of our "regular JavaScript" happens in `render()` *above* the `return`. Typically, this means we might destructure things we want to use off of `this.props` and/or `this.state`, mash up our data however we see fit, and then use the mashed up data within the `return`.
- The `render()` function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not directly interact with the browser.
  + Concerning state, the docs basically communicate that we should not call `setState` in `render()`. If you are doing that, then you have likely organized your component incorrectly. Concerning the browser, `render()`'s job is to just *build* the virtual DOM appropriately, not interact with the actual DOM in some way. It is `ReactDOM`'s job to interact with the browser and the actual DOM (hence its name, React**DOM**). 
- If you need to interact with the browser, perform your work in `componentDidMount()` or the other lifecycle methods instead. Keeping `render()` pure makes components easier to think about.
  + Note how this corresponds to what we just did with the Materialize modal (where we needed to access an element with class `modal` that did not yet exist in the DOM): we needed to wait for the first `render()` before we could access the element.

The bottom line in all of this is to simply keep `render()` pure. It should always return the same thing given the same input. That doesn't mean don't use `state` in render (we will do that a lot!). It just means do not set `state` or do not mutate `state` inside of `render()`. That and any time `state` or props changes the render method will fire. So we will get that method firing any time one of those two things changes.

### The Lifecycle: `componentDidUpdate()`

We are now going to take a look at [componentDidUpdate()](https://reactjs.org/docs/react-component.html#componentdidupdate). As they note: "`componentDidUpdate()` is invoked immediately after updating occurs. This method is not called for the initial render." So `componentDidMount()` runs the very first time after the initial render. And `componentDidUpdate()` runs after every render thereafter. So if you make an HTTP request in `componentDidMount()` and get the data and set new state with this data, then `render()` will run again because new state was set, and this *second* `render()` (and every one thereafter) will result in `componentDidUpdate()` being called. Here is the chain of events:

| Order | Method | Description |
| :-: | --- | --- |
| 1 | `constructor()` | constructor fires when creating component |
| 2 | `render()` | initial render (no async data loaded/available) |
| 3 | `componentDidMount()` | component has mounted (make network requests here) |
| 4 | `render()` | state has changed (we updated state from data obtained in `componentDidMount`) |
| 5 | `componentDidUpdate()` | component has been updated (actual DOM now has data we wanted from network request) |
| 6 | `render()` | user does something in UI to trigger new state/props for this component |
| 7 | `componentDidUpdate()` | component has been updated/rerendered to reflect new state/props |
| 8 | `render()` | user does something in UI to trigger new state/props for this component |
| 9 | `componentDidUpdate()` | component has been updated/rerendered to reflect new state/props |
| `...` | `...` | `...` |

So what gives? Why would we ever want to use `componentDidUpdate`? Mostly because what `componentDidUpdate` receives: `componentDidUpdate(prevProps, prevState, snapshot)`. That is, yes, it probably will not make much sense to call `componentDidUpdate` if you do not care about how state or props updated and compares to *previous* (i.e., before the update) state or props. 

Essentially `componentDidUpdate` will give you the ability to look at what *was* (via `prevProps` and `prevState`) and what *is* (via current props, `this.props`, and current state, `this.state`) in order to decide what needs to happen in your application. 

Lastly, what is `snapshot`? As the docs note at [the bottom](https://reactjs.org/docs/react-component.html#componentdidupdate) of the entry on `componentDidUpdate`: "If your component implements the `getSnapshotBeforeUpdate()` lifecycle (which is rare), the value it returns will be passed as a third “snapshot” parameter to `componentDidUpdate()`. Otherwise this parameter will be undefined." Let's take a look at [the docs](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate) on `getSnapshotBeforeUpdate()`: "`getSnapshotBeforeUpdate()` is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to `componentDidUpdate()`. This use case is not common, but it may occur in UIs like a chat thread that need to handle scroll position in a special way. A snapshot value (or `null`) should be returned." 

We will hardly ever use `getSnapshotBeforeUpdate()`, but it's useful to know that it exists. The `componentDidUpdate()` lifecycle method will be especially useful when we get React router. 

Continuing, suppose we wanted to do something like the following:

```javascript
componentDidUpdate(prevProps, prevState) {
  const isRaining = this.state.weather.includes('rain');
  if (isRaining) {
    this.setState({
      isRaining: 'Rain rain go away!'
    });
  }
}
```

If it is raining in the city you just received data about, then you just might be the recipient of a really ugly warning:

```
Error: Maximum update depth exceeded. This can happen when a component 
repeatedly calls setState inside componentWillUpdate or componentDidUpdate. 
React limits the number of nested updates to prevent infinite loops.
```

We are not using `componentWillUpdate` so it seems we at least know the likely culprit: How are we repeatedly calling `setState` inside of `componentDidUpdate` though? What happened? This example illustrates why we need `prevProps` and `prevState` in `componentDidUpdate`. Before examining our specific example, let's see what [the docs](https://reactjs.org/docs/react-component.html#componentdidupdate) say about this: "You may call `setState()` immediately in `componentDidUpdate()` but note that it must be wrapped in a condition like in the example above, or you'll cause an infinite loop." And they give the following example:

```javascript
componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

With this in mind, can we now deduce what the issue is with the code we originally had for our own example? It may be most helpful to look at the entire lifecycle in sequence to see why the sequence will never end:

- `constructor` runs
- initial `render` runs
- `componentDidMount` runs (we get our default data)
- `render` runs (user searches for a city where it *is* raining and state is set with new city data)
- `componentDidUpdate` runs (and state is set)
- `render` runs (to reflect new state from `componentDidUpdate` above)
- `componentDidUpdate` runs (because we just updated the DOM; state is set again since *it is still raining* in the searched for city (i.e., we never changed `isRaining` for the searched for city)) 
- `render` runs (to reflect new state (even though it really isn't new) from `componentDidUpdate` above)
- `...`

Hopefully the problem above is clear. We need some way of making sure that we set the state only when we need to within `componentDidUpdate`. And the way we can do this is by comparing previous props/state (i.e., `prevProps/prevState`) with current props/state (i.e., `this.props/this.state`). Specifically, we could do something like the following:

```javascript
componentDidUpdate(prevProps, prevState) {
  if (this.state.weather !== prevState.weather) {
    const isRaining = this.state.weather.includes('rain');
    if (isRaining) {
      this.setState({
        isRaining: 'Rain rain go away!'
      });
    } else {
      this.setState({
        isRaining: ''
      });
    }
  }
}
```

Hence, we will only set state again (raining or not) if the city weather data we have received *after* a render is *different* from the data we received before the render that triggered `componentDidUpdate`. 

Perhaps more clearly: The bottom line is that you need to always *conditionally* set state within `componentDidUpdate`; otherwise, setting state in `componentDidUpdate` triggers a render, which then triggers `componentDidUpdate` which again triggers render because state was set (even if we were setting the state to be the exact same), etc., etc.

### The Lifecycle: `componentWillUnmount()`

As [the docs](https://reactjs.org/docs/react-component.html#componentwillunmount) note: "`componentWillUnmount()` is invoked immediately before a component is unmounted and destroyed (i.e., before it is removed from the DOM). Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in `componentDidMount()`. You should not call `setState()` in `componentWillUnmount()` because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again." 

In our weather application, how could we possibly make use of `componentWillUnmount()`? What if we selectively got rid of the weather data modal and then brought it back somehow (and somehow tied a timer to this somehow as well)? Conditional rendering is one possible case where a component may be mounted one moment and umounted/destroyed the next (i.e., it may be mounted again later but only as a brand *new* component ... the unmounted one never comes back). So this is a very useful hook for cleanup that you need to do. So if you have a heavy workload or series of network requests in the background that need to stop, then this will be the place to do that. 

### Practicing what we know so far: city weather application

Using what we know so far about the different component lifecycle methods, we can make a reasonably decent, however basic, city weather application. I have expanded on some of the notes included so far. You can go to [the repository](https://github.com/daniel-farlow/city-weather) and do an `npm install` and don't forget to create an `.env` file with `REACT_APP_WEATHER_APP=e312dbeb8840e51f92334498a261ca1d` in it or you can go to [the live site](https://daniel-farlow.github.io/city-weather/) to play around with it (demo below):

<p align='center'>
  <img src='https://user-images.githubusercontent.com/52146855/80688366-4920d180-8a91-11ea-8576-ae021c65bb34.gif' />
</p>


There are four files that serve as the core of the application:

1\. `App.js`
2\. `Headers.jsx`
3\. `Modal.jsx`
4\. `UnitedStatesSelectionForm.jsx`

<details><summary> Click to see <code>App.js</code> contents here</summary>

```javascript
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment';
import Headers from './Headers';
import Modal from './Modal';
import UnitedStatesSelectionForm from './UnitedStatesSelectionForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCount: -1,
      genWeatherDesc: '',
      specificWeatherDesc: '',
      temp: '',
      feelsLike: '',
      low: '',
      high: '',
      cityId: '',
      cityName: '',
      cityState: '',
      timezone: '',
      sunrise: '',
      sunset: '',
      icon: '',
      iconURL: '',
      showCityDetailsModal: true,
      sameCityState: false,
      persistentTimeCount: 0
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.cityId !== prevState.cityId) {
      this.setState((prevState, props) => ({
        searchCount: prevState.searchCount + 1
      }));
    }
  }

  componentDidMount() {
    this.persistentTimer = setInterval(() => {
      this.setState((prevState, props) => ({
        persistentTimeCount: prevState.persistentTimeCount + 1
      }));
    }, 1000);

    this.getCityWeather('Nashville', 'TN')
  }

  searchCity = e => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const cityState = document.getElementById('city-state').value;
    this.getCityWeather(city, cityState);
  }

  getCityWeather = async (city, cityState) => {
    if (city === this.state.cityName && cityState === this.state.cityState) {
      alert(`You already have data for ${city}, ${cityState}!`);
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${cityState},us&units=imperial&appid=${process.env.REACT_APP_WEATHER_APP}`;
    let weatherInfo;
    try {
      weatherInfo = await axios.get(url);
    } catch (error) {
      alert(`No data found for the city you entered: "${city}". Please try again!`);
      return;
    }
    let { weather: weatherDesc, main: weatherFacts, name: cityName, sys: { sunrise, sunset }, timezone, id: cityId } = weatherInfo.data;
    let { main: genWeatherDesc, description: specificWeatherDesc, icon } = weatherDesc[0];
    let { temp, feels_like: feelsLike, temp_min: low, temp_max: high } = weatherFacts;

    sunrise = moment.unix(sunrise).utcOffset(timezone / 60).format('h:mm A');
    sunset = moment.unix(sunset).utcOffset(timezone / 60).format('h:mm A');
    let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    let desiredState = { genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, icon, cityState, sunrise, sunset, iconURL, cityId };

    this.setState((prevState, props) => ({
      persistentTimeCount: 0,
      sameCityState: false,
      ...desiredState
    }));
  }

  toggleModal = e => {
    this.setState((prevState, props) => ({
      showCityDetailsModal: !prevState.showCityDetailsModal,
      sameCityState: true
    }));
  }

  render() {
    console.log('render is running...')
    const { genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, cityState, sunrise, sunset, iconURL, showCityDetailsModal, searchCount, cityId, persistentTimeCount, sameCityState } = this.state;

    const headerProps = {temp, specificWeatherDesc, cityName, cityState, searchCount};
    const modalProps = {genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, iconURL, cityState, sunrise, sunset, searchCount, cityId, persistentTimeCount, sameCityState};

    return (
      <div className="App">
        <div className="row">
          <div className="col s6 offset-s3">
            <Headers { ...headerProps } />
            <div className="row center-align">
            {showCityDetailsModal ? <a
              className="waves-effect waves-light btn modal-trigger"
              href="#modal1"
              style={{marginRight: 40 }}
            >See Weather Details
            </a> : ''}
            <button style={{marginLeft: 20}} onClick={this.toggleModal} className='btn'> {showCityDetailsModal ? 'Remove Weather Details and Timer' : 'Add Weather Details and Timer'}</button>
            </div>
            <form onSubmit={this.searchCity}>
              <UnitedStatesSelectionForm />
            </form>
          </div>
        </div>
        {showCityDetailsModal ? <Modal { ...modalProps } /> : ''}
      </div>
    );
  }
}

export default App;
```

</details>

<details><summary> Click to see <code>Headers.jsx</code> contents</summary>

```javascript
import React, { Fragment } from 'react';

const Headers = ({temp, specificWeatherDesc, cityName, cityState, searchCount}) => {
  return (
    <Fragment>
      {searchCount === 0 ? <h2>Search for US City Weather!</h2> : null}
      {searchCount === 0 ? <h3 style={{marginBottom: 30}}>Sample City: {cityName}, {cityState}</h3> 
        : <h2>{cityName}, {cityState}: {Math.round(temp)}{String.fromCharCode(176, 70).toUpperCase()} and {specificWeatherDesc}</h2> }
    </Fragment>
  );
};

export default Headers;
```

</details>

<details><summary> Click to see <code>Modal.jsx</code> contents</summary>

```javascript
import React, { Component, Fragment } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerCount: 0
    };
  }

  componentDidMount() {
    console.log('componentDidMount is running ...')

    const modalElem = document.querySelectorAll('.modal');
    const selectElem = document.querySelectorAll('select');
    window.M.Modal.init(modalElem);
    window.M.FormSelect.init(selectElem);

    this.timer = setInterval(() => {
      this.setState((prevState, props) => ({
        timerCount: prevState.timerCount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Component is about to be history ... (compnentWillUnmount running ...)')
    clearInterval(this.timer);
  }

  componentDidUpdate(prevState, prevProps) {
    console.log('THIS IS YOUR PERSISTENT TIME COUNT: ', this.props.persistentTimeCount)
    console.log('componentDidUpdate is running ... ')
    if( this.props.cityId !== prevState.cityId ) {
      this.setState({
        timerCount: 0
      });
    }
  }

  render() {
    console.log('render is running ...')
    const {genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, iconURL, cityState, sunrise, sunset, sameCityState, persistentTimeCount} = this.props;
    const {timerCount} = this.state;
    console.log(timerCount)
    return (
      <Fragment>
        <h4>How long you have been viewing weather data for {cityName}, {cityState} (seconds): {sameCityState ? persistentTimeCount : timerCount}</h4>
        <div id="modal1" className="modal" style={{ maxWidth: 700 }}>
      <div className="modal-content">
        <table className="striped bordered">
          <thead>
            <tr>
              <th>Descriptor</th>
              <th>Information</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>City</td>
              <td>
                {cityName} ({cityState})
              </td>
            </tr>
            <tr>
              <td>Current Temperature</td>
              <td>{Math.round(temp)} (&#8457;)</td>
            </tr>
            <tr>
              <td>Feels Like</td>
              <td>{Math.round(feelsLike)} (&#8457;)</td>
            </tr>
            <tr>
              <td>High</td>
              <td>{Math.round(high)} (&#8457;)</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>{Math.round(low)} (&#8457;)</td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td>{sunrise}</td>
            </tr>
            <tr>
              <td>Sunset</td>
              <td>{sunset}</td>
            </tr>
            <tr>
              <td>Weather Description</td>
              <td>
                {genWeatherDesc} ({specificWeatherDesc})
              </td>
            </tr>
            <tr>
              <td>Weather Condition</td>
              <td>
                <img src={iconURL} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Cool!
        </a>
      </div>
    </div>
      </Fragment>
    );
  }
}

export default Modal;
```

</details>

<details><summary> Click to see <code>UnitedStatesSelection.jsx</code> contents</summary>

```javascript
import React, { Fragment } from 'react';

const UnitedStatesSelectionForm = () => {
  return (
    <Fragment>
      <div className="input-field col s7">
        <input type="text" id="city" className="validate" required />
        <label htmlFor="city">Enter a City for Weather Data</label>
      </div>
      <div className="input-field col s3">
        <select id="city-state">
          <option value="" disabled defaultValue>
            US State
          </option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <label>State of City</label>
      </div>
      <div className="input-field col s2">
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">cloud</i>
        </button>
      </div>
    </Fragment>
  );
};

export default UnitedStatesSelectionForm;
```

</details>

A couple takeaways:

- [moment.js](https://momentjs.com/): This is *very* useful when dealing with time-related data in JavaScript. This made it possible to report accurate `sunrise` and `sunset` times for a selected city instead of just using, say, your own local time which really wouldn't be accurate for another timezone (the `timezone` given from the `openweathermap` API is supplied as the shift in seconds from UTC). Basically, working with timezones is annoying in JavaScript.
- [Materialize](https://materializecss.com/): Don't forget to initialize!
- [Conditional rendering](https://www.robinwieruch.de/conditional-rendering-react): The linked to article gives a *very* nice overview of conditional rendering in React. He specifies the following ways even though I have just used the ternary way: [if](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-if), [if else](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-if-else), [ternary](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-ternary), [&&](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-), [switch case](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-switch-case), [multiple conditional renderings in React](https://www.robinwieruch.de/conditional-rendering-react#multiple-conditional-renderings-in-react), [nested conditional rendering in React](https://www.robinwieruch.de/conditional-rendering-react#nested-conditional-rendering-in-react), [conditional rendering with higher-order components](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-with-hoc), and finally [if else components in React](https://www.robinwieruch.de/conditional-rendering-react#if-else-components-in-react). Clearly quite a few ways! He provides a nice summary to make it all more palatable: 
  + [if](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-if)
    * most basic conditional rendering
    * use to opt-out early from a rendering (guard pattern)
    * cannot be used within return statement and JSX (except self invoking function)
  + [if-else](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-if-else)
    * use it rarely, because it's verbose
    * instead, use ternary operator or logical && operator
    * cannot be used inside return statement and JSX (except self invoking function)
  + [ternary operator](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-ternary)
    * use it instead of an if-else statement
    * it can be used within JSX and return statement
  + [logical && operator](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-)
    * use it when one side of the ternary operation would return null
    * it can be used inside JSX and return statement
  + [switch case](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-switch-case)
    * avoid using it, because it's too verbose
    * instead, use enums
    * cannot be used within JSX and return (except self invoking function)
  + [enums: multiple conditional renderings](https://www.robinwieruch.de/conditional-rendering-react#multiple-conditional-renderings-in-react)
    * use it for conditional rendering based on multiple states
    * perfect to map more than one condition
  + [nested conditional rendering](https://www.robinwieruch.de/conditional-rendering-react#nested-conditional-rendering-in-react)
    * avoid them for the sake of readability
    * instead, split out components, use if statements, or use HOCs
  + [conditional rendering with higher-order components](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-with-hoc)
    * components can focus on their main purpose
    * use HOC to shield away conditional rendering
    * use multiple composable HOCs to shield away multiple conditional renderings
  + [external templating components: if else components](https://www.robinwieruch.de/conditional-rendering-react#if-else-components-in-react)
    * avoid them and be comfortable with JSX and JS
- [Destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/): Life will be so much easier if you can effectively destructure. 

The last point above deserves another remark in the context of passing props. Depending on your application, you will often want to pass quite a few props. Everything can get out of control quickly if you aren't careful. Instead of passing all of the props individually inside of a component, you can *spread* the props. This makes it possible, for example, to specify what you want your component props to be and then to pass them as needed:

```javascript
const headerProps = {temp, specificWeatherDesc, cityName, cityState, searchCount};
const modalProps = {genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, iconURL, cityState, sunrise, sunset, searchCount, cityId, persistentTimeCount, sameCityState};

<Headers { ...headerProps } />
<Modal { ...modalProps } />
```

Then, inside of the `Model` component, which is a class, we can do the following:

```javascript
const {genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, iconURL, cityState, sunrise, sunset, searchCount, cityId, persistentTimeCount, sameCityState} = this.props;
```

Since `Headers` is a functional component, we can do the following:

```javascript
const Headers = ({temp, specificWeatherDesc, cityName, cityState, searchCount}) => {  }
```

The less you have to type the better!

### Controlled forms: Managing forms with state

So far we have dealt with forms how you might normally deal with forms, namely doing something like the following in a class method (as we did with the city weather application in the above note):

```javascript
searchCity = e => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const cityState = document.getElementById('city-state').value;
  this.getCityWeather(city, cityState);
}
```

Or consider something even more generic (i.e., the `handleSubmit` method below):

```javascript
import React, { Component } from 'react';

class FormPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('form submitted')
    const name = document.getElementById('name').value;
    console.log(name)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-sm-3">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Enter a name" />
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPractice;
```

What we have above is a `value` property that's attached to every `input` box (input text) that's kind of already managing state for us. When we submit the form, we can see that the DOM has already updated the `<input type="text" placeholder="Enter a name" />` element's `value` property to reflect what the value was when we submitted the form. [The docs](https://reactjs.org/docs/forms.html) on forms even note this kind of behavior: "HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state." They then give an example of a form in plain HTML that accepts a single name:

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

They then note: "This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it's convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called *controlled components*." 

What they're saying is we can always do something like `document.getElementById('name').value` as you might normally do with JavaScript, but that is bad. That is not good in React. The main idea in React is that mutable state (anything changing inside of our application, especially data), including `input` box values, is typically kept in the state property of components and only updated with `setState`. 

So you could do things "the vanilla JS way" where you grab the elements using something like `document.getElementById(element).value`, but React wants state to be the single source of truth, meaning the value of the input box is going to be state, not the other way around. Thus, you will often see an `input` element whose `value` attributes reads from state and whose `onChange` attribute is an event handler used to *update* state. Consider this example:

```html
<label>Name (4 to 20 characters) 
<input 
  id='input-name-example'
  onChange={this.handleChange} 
  type='text' 
  name='chosenText' 
  value={this.state.chosenText} 
  minLength='4' 
  maxLength='20' 
  size='30'
/>
</label>
```

It is clear the `value` attribute is the value of the `chosenText` *state* property (if you don't initialize `chosenText`, then React will give you a warning), but you have to update state (specifically `chosenText` if you actually want the new value to be reflected in the input box). How do we do this? Understanding that the following two pieces of code are effectively the same will help:

```javascript
showNameBad = e => {
  const anExample = document.getElementById('input-name-example').value;
  console.log(anExample);
}

showNameGood = e => {
  console.log(e.target.value)
}
```

The `e` referenced in both `showName` methods above *is the change* (which is why `onChange` makes sense in terms of naming what is effectively an event listener). So anytime the `input-name-example` input box changes for any reason, then that is what's going to cause `showName` to fire. The `e` is the change--what is the `target` of the change? It's the `input` element itself, in this case the `input` box with an ID of `input-name-example`. And then, of course, we grab the `value` from the `input` box. To recap:

- `e`: The change itself.
- `target`: The element on which there was a change.
- `value`: The value of the target element on which there was a change.

Notice that the same thing is effectively happening above: 
- `e`: The change itself.
- `document.getElementById('input-name-example')`: The element whose value we suspected to be effected by the change--this element is the `input` box on which we want to manage changes.
- `value`: The value of the target element on which there was a change (or not). 

To make this example useful, we need to modify the `showNameGood` method to update state to reflect the new value (otherwise the input box will never reflect this change and all the user will see is something that looks and feels like they aren't actually typing anything):

```javascript
showNameGood = e => {
  this.setState({
    chosenText: e.target.value  
  });
}
```

So what's really happening here is that the user thinks they are changing the input box but they aren't really the ones changing it. What the user is doing is making some change on the input box that causes the `onChange` event handler to fire, which itself often sets state to update with a new value, and when state was updated the `render` method would run again, and finally React would change the input box. 

In a typical JavaScript application, the DOM would manage this state internally for us, and we would simply pull values from the DOM as needed. But this is not the programming paradigm employed in React. Anything that changes is almost always going to go in state. Hence, for pretty much all form-related inputs, React wants to control them via state. The main exception is the `input` with `type='file'`. These tags are read-only: you can't write to a file field. So those are always going to be uncontrolled components. If you want the value of those, then you will need to get them the old-fashioned way.

The big win here is that we don't need to go and bother the DOM. We don't need to go and fetch an element or any of that. We've already got it saved in state. And it's React's job to make sure this process is efficient. See the next note for efficiently handling situations involving multiples inputs with only one `onChange` event handler.

### Handling multiple inputs with one `onChange` event listener

When accepting multiple inputs from a user via a form, a common pattern starts to crop up in React: many of your `onChange` event handlers will look *very* similar:

```javascript
handleOpinion = e => {
  this.setState({
    userOpinion: e.target.value
  });
}

handleFact = e => {
  this.setState({
    userFact: e.target.value
  });
}
...
```

In [the docs](https://reactjs.org/docs/forms.html#handling-multiple-inputs), React hints at a way to possibly deal with this potential problem (imagine having *numerous* event handlers like the above the event handler was basically doing the same thing every single time): The basic idea is to add a `name` attribute to each element (where `name` on the concerned element typically matches what you have named the state variable associated with the concerned element) and let the handler function choose what to do based on the value of `event.target.name`.

For example, if you have a variable in state such as `userText: 'Boilerplate'`, then an input tag where this value is meant to be effected might generically look like the following:

```html
<input onChange={this.handleChange} type='text' name='userText' value={this.state.userText}  />
```

And then our `onChange` function would very often look like the following: 

```javascript
handleChange = event => {
  let eventName = event.target.name;
  let eventValue = event.target.value;
  this.setState({
    [eventName]: eventValue
  });
}
```

The `[eventName]` syntax simply lets us use a variable for an object key property in JavaScript ([it's an ES6+ feature](https://www.samanthaming.com/tidbits/37-dynamic-property-name-with-es6/)). It's worth nothing that the `handleChange` handler function can get much more sophisticated and can even be useful for situations where `name` on an element may not be what we are after so much as the *type* as is the case for an `input` with `type='checkbox'` (often you simply want to know whether or not a checkbox is checked or not, and this can be assessed by looking at `event.target.checked`, not `event.target.name`). Here's one minor example:

```javascript
handleChange = (event) => {
  const {target: {name: eventName, type: eventType, value: eventValue}} = event;
  switch(eventType) {
    case 'checkbox':
      this.setState((prevState, props) => {
        let {wantedFoods} = this.state;
        let removalIndex = wantedFoods.indexOf(eventValue);
        let newWantedFoods = wantedFoods.includes(eventValue) 
          ? wantedFoods.slice(0, removalIndex).concat(wantedFoods.slice(removalIndex + 1)) 
            : [...wantedFoods, eventValue];
        return ({
          [eventName]: !prevState[eventName],
          wantedFoods: newWantedFoods
        })
      });
      break;
    case 'select-multiple':
      this.setState({
        chosenFruits: Array.from(event.target.selectedOptions, (item) => item.value)
      });
      break;
    default:
      this.setState({
        [eventName]: eventValue
      });
  }
}
```

The overall point is that you can essentially have one robust `handleChange` method (try not to overload it, but it's useful to know what your options are). Read [this article](https://medium.com/@bretdoucette/understanding-this-setstate-name-value-a5ef7b4ea2b4) on Medium for more info.

### Data flows down so pass state up!

The need to so-called "lift state up" (or share state in different components despite not being children of each other) is rather common in React. Much of the need for lifting state up explicitly, as shown [in the docs](https://reactjs.org/docs/lifting-state-up.html), will be mitigated when we start using Redux and/or the Context API. 

"Lifting state up" means we are going from two or more components managing their own state locally to lifting up state to the most common ancestor of all the components that need access to the same piece(s) of state. The components will still have event handlers and the like, but those event handlers will now not be defined locally but passed down as props from the common ancestor so that the event handler changes state in the common ancestor as opposed to changing state in the local component.

In [the example in the docs](https://reactjs.org/docs/lifting-state-up.html), both `TemperatureInput` components will be passed an `onChange` method (specifically named `onTemperatureChange` even though it can be named anything that makes sense) to be used *within* `TemperatureInput` as the `onChange` event handler for an `input`:

```html
<!-- In Calculator.jsx -->
<TemperatureInput scale='f' temperature={fahrenheit}  onTemperatureChange={this.handleTempChange} />

<!-- In TemperatureInput.jsx -->
handleChange = e => {
  const {name: scale, value: temperature} = e.target;
  this.props.onTemperatureChange(temperature, scale);
}

<input name={scale} onChange={this.handleChange} type='number' value={temperature} />
```

As can be seen above, *within* the `TemperatureInput` component, we have an `input` whose `onChange` calls a method available as a prop, `this.props.onTemperatureChange`, where the method made available as a prop changes the state of the common ancestor component instead of changing state locally (`this.props.onTemperatureChange` changes the state of the `Calculator` component and not the `TemperatureInput` component). 

In terms of architecture, when you realize two components are at different levels of the component tree (i.e., one is not the direct child of another) but both need access to the same piece of state, then the common practice is to lift the state to the first common ancestor and pass down through props whatever methods are necessary to change the state of the parent component--the method that actually changes the state of the parent component is called within one of the children components. Thus, essentially, a child component (e.g., `TemperatureInput`) is changing the state of its parent component (e.g., `Calculator`)  by means of a method that lives in its parent component and changes state in its parent component but is called within itself (e.g., `handleTempChange` lives in `Calculator` and sets state in `Calculator` but is called within `TemperatureInput` because it is passed down as a prop). So when the code runs inside either `input` box in `TemperatureInput`, it's not going to manage its own state--it's going to be running its parent's function which is going to update its parent's state.

Here are the three files (somewhat refactored from what appears in the docs) with a subsequent recap of what happens throughout the process:

<details><summary> <code>Calculator.jsx</code></summary>

```javascript
import React, { Component, Fragment } from 'react';
import TemperatureInput from '../TemperatureInput/TemperatureInput'
import BoilingVerdict from '../BoilingVerdict/BoilingVerdict';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleTempChange = (temperature, scale) => {
    switch(scale) {
      case 'c':
        this.setState({
          scale: 'c', 
          temperature
        });
        break;
      case 'f':
        this.setState({
          scale: 'f', 
          temperature
        });
        break;
      default:
        return;
    }
  }

  render() {
    const {scale, temperature} = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <Fragment>
        <TemperatureInput 
          scale='c' 
          temperature={celsius} 
          onTemperatureChange={this.handleTempChange} />
        <TemperatureInput 
          scale='f' 
          temperature={fahrenheit} 
          onTemperatureChange={this.handleTempChange} />
        <BoilingVerdict 
          celsius={parseFloat(celsius)}  />
      </Fragment>
    );
  }
}

export default Calculator;
```

</details>

<details><summary> <code>TemperatureInput.jsx</code></summary>

```javascript
import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends Component {

  handleChange = e => {
    const {name: scale, value: temperature} = e.target;
    this.props.onTemperatureChange(temperature, scale);
  }

  render() {
    const { scale, temperature } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input name={scale} onChange={this.handleChange} type='number' value={temperature} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
```

</details>

<details><summary> <code>BoilingVerdict.jsx</code></summary>

```javascript
import React from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default BoilingVerdict;
```

</details>

**Here's the recap for what happens when you edit an input:**

1\. React calls the function specified as `onChange` on the DOM `<input>`. In our case, this is the `handleChange` method in the `TemperatureInput` component:

```javascript
handleChange = e => {
  const {name: scale, value: temperature} = e.target;
  this.props.onTemperatureChange(temperature, scale);
}
```

2\. The `handleChange` method in the `TemperatureInput` component calls `this.props.onTemperatureChange()` with the new desired value (i.e., `temperature`) and scale. The props for `TemperatureInput`, including `onTemperatureChange` and `scale`, were provided by its parent component, the `Calculator`:

```html
<TemperatureInput 
  scale='c' 
  temperature={celsius} 
  onTemperatureChange={this.handleTempChange} />
<TemperatureInput 
  scale='f' 
  temperature={fahrenheit} 
  onTemperatureChange={this.handleTempChange} />
```

3\. The `handleTempChange` method in `Calculator` 

```javascript
handleTempChange = (temperature, scale) => {
  switch(scale) {
    case 'c':
      this.setState({
        scale: 'c', 
        temperature
      });
      break;
    case 'f':
      this.setState({
        scale: 'f', 
        temperature
      });
      break;
    default:
      return;
  }
}
```

gets called regardless of which `input`

```html
<input name={scale} onChange={this.handleChange} type='number' value={temperature} />
```

was edited within the `TemperatureInput` component. 

4\. Inside the `handleTempChange` method, as seen above, the `Calculator` component asks React to re-render itself by calling `this.setState()` with the new input value and the current scale of the input we just edited.

5\. React calls the `Calculator` component's `render` method 

```javascript
render() {
  const {scale, temperature} = this.state;
  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  return (
    <Fragment>
      <TemperatureInput 
        scale='c' 
        temperature={celsius} 
        onTemperatureChange={this.handleTempChange} />
      <TemperatureInput 
        scale='f' 
        temperature={fahrenheit} 
        onTemperatureChange={this.handleTempChange} />
      <BoilingVerdict 
        celsius={parseFloat(celsius)}  />
    </Fragment>
  );
}
```

to learn what the UI should look like. The values of both inputs are recomputed based on the current temperature and the active scale. The temperature conversion is performed here.

6\. React calls the `render` methods of the individual `TemperatureInput` components 

```javascript
render() {
  const { scale, temperature } = this.props;
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input name={scale} onChange={this.handleChange} type='number' value={temperature} />
    </fieldset>
  );
}
```

with their new props specified by the Calculator. It learns what their UI should look like.

7\. React calls the `render` method of the `BoilingVerdict` component

```javascript
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
```

passing the temperature in Celsius as its props.

8\. React DOM updates the DOM with the boiling verdict and to match the desired input values. The input we just edited receives its current value, and the other input is updated to the temperature after conversion.

### Styling components

If we look at the "style" subsection under "DOM Elements" [in the API reference](https://reactjs.org/docs/dom-elements.html#style), we see that `style` is often used in-line, but that should almost always be used for dynamic styling because in-line styles are often the least performant way to change styles (in-line styles also have a high degree of specificity in relation to other stylesheets and the like). Additionally, as will be seen below from the docs, in-line styles lend themselves well to conditional styling (this falls under "dynamic styling" but should specifically be noted because of how useful it can be). That said, much of what is said in the docs about styling is reproduced below:

Some examples in the documentation use `style` for convenience, but **using the `style` attribute as the primary means of styling elements is generally not recommended**. In most cases, `className` should be used to reference classes defined in an external CSS stylesheet. `style` is most often used in React applications to add dynamically-computed styles at render time. See also [FAQ: Styling and CSS](https://reactjs.org/docs/faq-styling.html).

The `style` attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM `style` JavaScript property, is more efficient, and prevents XSS security holes. For example:

```javascript
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

Note that styles are not autoprefixed. To support older browsers, you need to supply corresponding style properties:

```javascript
const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

function ComponentWithTransition() {
  return <div style={divStyle}>This should work cross-browser</div>;
}
```

Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes from JS (e.g. `node.style.backgroundImage`). Vendor prefixes [other than ms](https://www.andismith.com/blogs/2012/02/modernizr-prefixed/) should begin with a capital letter. This is why `WebkitTransition` has an uppercase “W”.

React will automatically append a “px” suffix to certain numeric inline style properties. If you want to use units other than “px”, specify the value as a string with the desired unit. For example:

```javascript
// Result style: '10px'
<div style={{ height: 10 }}>
  Hello World!
</div>

// Result style: '10%'
<div style={{ height: '10%' }}>
  Hello World!
</div>
```

Not all style properties are converted to pixel strings though. Certain ones remain unitless (e.g., `zoom`, `order`, `flex`). A complete list of unitless properties can be seen [here](https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59).

## React Router

### Introduction to React Router and why you may want to use it

Before jumping into anything concerning React Router, here are some useful links for reference:

- [Official Documentation](https://reacttraining.com/react-router/)
- [Quick Start Docs for React Router on the Web](https://reacttraining.com/react-router/web/guides/quick-start)
- [Philosophy of React Router](https://reacttraining.com/react-router/core/guides/philosophy)
- [GitHub Home for react-router](https://github.com/ReactTraining/react-router)
- [NPM Home for react-router](https://www.npmjs.com/package/react-router)
- [GitHub Home for react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [NPM Home for react-router-dom](https://www.npmjs.com/package/react-router-dom)

And here is the message we are greeted with at the homepage for React Router: "Components are the heart of React's powerful, declarative programming model. React Router is a collection of **navigational components** that compose declaratively with your application. Whether you want to have **bookmarkable URLs** for your web app or a composable way to navigate in **React Native**, React Router works wherever React is rendering--so take your pick!" [Web](https://reacttraining.com/react-router/web/guides/quick-start) | [Native](https://reacttraining.com/react-router/native/guides/quick-start)

Now we get to the important question: Why would you want to use React Router? Well, React Router does a couple things. First of all, as the docs note, it's just a collection of navigational components. So that's how we are going to use React Router. We are going to install it with NPM and they are going to give us a handful of components that we can use and not make for ourselves (e.g., `<Route>`, `<Link>`, etc.), and they allow us to control the URL bar. That's really really big because it does two things:

1. It gives us bookmarkable URLs (or "deep links"). Why does this matter? Well, suppose you wanted to share a story, article, or something else on the web with a friend, but whatever link you gave always rendered the homepage (as would happen right now with the AWS flashcards app done previously). That is obviously not desired behavior. If you send someone a link, then you want the link to point to the resource you are trying to share. Essentially, we need to make sure the user can get back to a given page using the URL.
2. It makes it possible for us to use the forward and backward arrows in the browser. Right now (e.g., in the AWS flashcards app) if we were to use the forward or backward arrows in the browser, then *everything* would be lost. Of course, that is not desirable behavior either!

So React Router's job is to give us the ability to make a "real" single-page application where we are manipulating the DOM we have been with React, but we can use the URL bar. This usefulness of this will become more and more apparent, especially as you manage applications of any size.

### React Router docs reference (for web applications)

Here are the docs links for React Router (for a web application):

- **Announcements**
  + [The Future of React Router](https://reacttraining.com/blog/reach-react-router-future/)
- **Examples**
  + [Basic](https://reacttraining.com/react-router/web/example/basic)
  + [URL Parameters](https://reacttraining.com/react-router/web/example/url-params)
  + [Nesting](https://reacttraining.com/react-router/web/example/nesting)
  + [Redirects (Auth)](https://reacttraining.com/react-router/web/example/auth-workflow)
  + [Custom Link](https://reacttraining.com/react-router/web/example/custom-link)
  + [Preventing Transitions](https://reacttraining.com/react-router/web/example/preventing-transitions)
  + [No Match (404)](https://reacttraining.com/react-router/web/example/no-match)
  + [Recursive Paths](https://reacttraining.com/react-router/web/example/recursive-paths)
  + [Sidebar](https://reacttraining.com/react-router/web/example/sidebar)
  + [Animated Transitions](https://reacttraining.com/react-router/web/example/animated-transitions)
  + [Route Config](https://reacttraining.com/react-router/web/example/route-config)
  + [Modal Gallery](https://reacttraining.com/react-router/web/example/modal-gallery)
  + [StaticRouter Context](https://reacttraining.com/react-router/web/example/static-router)
  + [Query Parameters](https://reacttraining.com/react-router/web/example/query-parameters)
- **Guides**
  + [Quick Start](https://reacttraining.com/react-router/web/guides/quick-start)
  + [Primary Components](https://reacttraining.com/react-router/web/guides/primary-components)
  + [Server Rendering](https://reacttraining.com/react-router/web/guides/server-rendering)
  + [Code Splitting](https://reacttraining.com/react-router/web/guides/code-splitting)
  + [Scroll Restoration](https://reacttraining.com/react-router/web/guides/scroll-restoration)
  + [Philosophy](https://reacttraining.com/react-router/web/guides/philosophy)
  + [Testing](https://reacttraining.com/react-router/web/guides/testing)
  + [Redux Integration](https://reacttraining.com/react-router/web/guides/redux-integration)
  + [Static Routes](https://reacttraining.com/react-router/web/guides/static-routes)
- **API**
  + **[Hooks](https://reacttraining.com/react-router/web/api/Hooks)**
    - [useHistory](https://reacttraining.com/react-router/web/api/Hooks/usehistory)
    - [useLocation](https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    - [useParams](https://reacttraining.com/react-router/web/api/Hooks/useparams)
    - [useRouteMatch](https://reacttraining.com/react-router/web/api/Hooks/useroutematch)
  + **[`<BrowserRouter>`](https://reacttraining.com/react-router/web/api/BrowserRouter)**
    - [basename: string](https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string)
    - [getUserConfirmation: func](https://reacttraining.com/react-router/web/api/BrowserRouter/getuserconfirmation-func)
    - [forceRefresh: bool](https://reacttraining.com/react-router/web/api/BrowserRouter/forcerefresh-bool)
    - [keyLength: number](https://reacttraining.com/react-router/web/api/BrowserRouter/keylength-number)
    - [children: node](https://reacttraining.com/react-router/web/api/BrowserRouter/children-node)
  + **[`<HashRouter>`](https://reacttraining.com/react-router/web/api/HashRouter)**
    - [basename: string](https://reacttraining.com/react-router/web/api/HashRouter/basename-string)
    - [getUserConfirmation: func](https://reacttraining.com/react-router/web/api/HashRouter/getuserconfirmation-func)
    - [hashType: string](https://reacttraining.com/react-router/web/api/HashRouter/hashtype-string)
    - [children: node](https://reacttraining.com/react-router/web/api/HashRouter/children-node)
  + **[`<Link>`](https://reacttraining.com/react-router/web/api/Link)**
    - [to: string](https://reacttraining.com/react-router/web/api/Link/to-string)
    - [to: object](https://reacttraining.com/react-router/web/api/Link/to-object)
    - [to: function](https://reacttraining.com/react-router/web/api/Link/to-function)
    - [replace: bool](https://reacttraining.com/react-router/web/api/Link/replace-bool)
    - [innerRef: function](https://reacttraining.com/react-router/web/api/Link/innerref-function)
    - [innerRef: RefObject](https://reacttraining.com/react-router/web/api/Link/innerref-refobject)
    - [others](https://reacttraining.com/react-router/web/api/Link/others)
  + **[`<NavLink>`](https://reacttraining.com/react-router/web/api/NavLink)**
    - [activeClassName: string](https://reacttraining.com/react-router/web/api/NavLink/activeclassname-string)
    - [activeStyle: object](https://reacttraining.com/react-router/web/api/NavLink/activestyle-object)
    - [exact: bool](https://reacttraining.com/react-router/web/api/NavLink/exact-bool)
    - [strict: bool](https://reacttraining.com/react-router/web/api/NavLink/strict-bool)
    - [isActive: func](https://reacttraining.com/react-router/web/api/NavLink/isactive-func)
    - [location: object](https://reacttraining.com/react-router/web/api/NavLink/location-object)
    - [aria-current: string](https://reacttraining.com/react-router/web/api/NavLink/aria-current-string)
  + **[`<Prompt>`](https://reacttraining.com/react-router/web/api/Prompt)**
  + **[`<MemoryRouter>`](https://reacttraining.com/react-router/web/api/MemoryRouter)**
    - [initialEntries: array](https://reacttraining.com/react-router/web/api/MemoryRouter/initialentries-array)
    - [initialIndex: number](https://reacttraining.com/react-router/web/api/MemoryRouter/initialindex-number)
    - [getUserConfirmation: func](https://reacttraining.com/react-router/web/api/MemoryRouter/getuserconfirmation-func)
    - [keyLength: number](https://reacttraining.com/react-router/web/api/MemoryRouter/keylength-number)
    - [children: node](https://reacttraining.com/react-router/web/api/MemoryRouter/children-node)
  + **[`<Redirect>`](https://reacttraining.com/react-router/web/api/Redirect)**
    - [to: string](https://reacttraining.com/react-router/web/api/Redirect/to-string)
    - [to: object](https://reacttraining.com/react-router/web/api/Redirect/to-object)
    - [push: bool](https://reacttraining.com/react-router/web/api/Redirect/push-bool)
    - [from: string](https://reacttraining.com/react-router/web/api/Redirect/from-string)
    - [exact: bool](https://reacttraining.com/react-router/web/api/Redirect/exact-bool)
    - [strict: bool](https://reacttraining.com/react-router/web/api/Redirect/strict-bool)
    - [sensitive: bool](https://reacttraining.com/react-router/web/api/Redirect/sensitive-bool)
  + **[`<Route>`](https://reacttraining.com/react-router/web/api/Route)**
    - [Route render methods](https://reacttraining.com/react-router/web/api/Route/route-render-methods)
    - [Route props](https://reacttraining.com/react-router/web/api/Route/route-props)
    - [component](https://reacttraining.com/react-router/web/api/Route/component)
    - [render: func](https://reacttraining.com/react-router/web/api/Route/render-func)
    - [children: func](https://reacttraining.com/react-router/web/api/Route/children-func)
    - [path: string | string[]](https://reacttraining.com/react-router/web/api/Route/path-string-string)
    - [exact: bool](https://reacttraining.com/react-router/web/api/Route/exact-bool)
    - [strict: bool](https://reacttraining.com/react-router/web/api/Route/strict-bool)
    - [location: object](https://reacttraining.com/react-router/web/api/Route/location-object)
    - [sensitive: bool](https://reacttraining.com/react-router/web/api/Route/sensitive-bool)
  + **[`<Router>`](https://reacttraining.com/react-router/web/api/Router)**
    - [history: object](https://reacttraining.com/react-router/web/api/Router/history-object)
    - [children: object](https://reacttraining.com/react-router/web/api/Router/children-node)
  + **[`<StaticRouter>`](https://reacttraining.com/react-router/web/api/StaticRouter)**
    - [basename: string](https://reacttraining.com/react-router/web/api/StaticRouter/basename-string)
    - [location: string](https://reacttraining.com/react-router/web/api/StaticRouter/location-string)
    - [location: object](https://reacttraining.com/react-router/web/api/StaticRouter/location-object)
    - [context: object](https://reacttraining.com/react-router/web/api/StaticRouter/context-object)
    - [children: node](https://reacttraining.com/react-router/web/api/StaticRouter/children-node)
  + **[`<Switch>`](https://reacttraining.com/react-router/web/api/Switch)**
    - [location: object](https://reacttraining.com/react-router/web/api/Switch/location-object)
    - [children: node](https://reacttraining.com/react-router/web/api/Switch/children-node)
  + **[`history`](https://reacttraining.com/react-router/web/api/history)**
    - [history is mutable](https://reacttraining.com/react-router/web/api/history/history-is-mutable)
  + **[`location`](https://reacttraining.com/react-router/web/api/location)**
  + **[`match`](https://reacttraining.com/react-router/web/api/match)**
    - [null matches](https://reacttraining.com/react-router/web/api/match/null-matches)
  + **[`matchPath`](https://reacttraining.com/react-router/web/api/matchPath)**
    - [pathname](https://reacttraining.com/react-router/web/api/matchPath/pathname)
    - [props](https://reacttraining.com/react-router/web/api/matchPath/props)
    - [returns](https://reacttraining.com/react-router/web/api/matchPath/returns)
  + **[`withRouter`](https://reacttraining.com/react-router/web/api/withRouter)**
    - [Component.WrappedComponent](https://reacttraining.com/react-router/web/api/withRouter/componentwrappedcomponent)
    - [wrappedComponentRef: func](https://reacttraining.com/react-router/web/api/withRouter/wrappedcomponentref-func)

### Getting started: `Router`, `Route`, and `Link`

The [first basic example](https://reacttraining.com/react-router/web/guides/quick-start/1st-example-basic-routing) in the docs has the following `import` statement:

```javascript
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
```

We will get to `Switch` in due time (a `<Switch>` looks through its children `<Route>s` and renders the first one that matches the current URL), but we will focus on `Router`, `Route`, and `Link` for right now.

**Note:** Before moving on, make sure to note that most of what you will import from `react-router-dom` will be *components*. And the docs spell out more about these components take as props, but everything we have learned about components previously apply just as well to components coming from `react-router-dom`, only we get extra goodies, more sophisticated behavior, etc., due to code someone else wrote (this is just how it is with components you might import from other libraries as well). 

1\. **BrowserRouter:** The first thing to take note of is that the `Router` (we import `BrowserRouter as Router` mostly to keep with how things are done with React Native--it makes the transition from one thing to the next much simpler and smoother) goes around everything that it needs to control. So generally speaking that's going to be at the application level (i.e., you will often find yourself wrapping everything in the `App` component in `Router`):

```javascript
function App() {
  return (
    <Router>
      <div className="App">
        ...
      </div>
    </Router>
  );
}
```

Note that `Router` will be the single DOM element that we are actually going to be exporting. Now, when we get to Redux, or there might be other situations where something is around the `Router`, but every component that the `Router` needs to be able to manage needs to be contained within `Router`. And that's important because we only ever want one instance of the `Router`. We don't ever want more than one `Router` component unless you really know what you're doing--we want to keep it down to just one because we only have one URL bar to work with.

2\. **Route and Switch:** The second thing we need now is an actual route! So this is what we use to determine what happens in our application when we are at a given URL (this will make more sense momentarily). For example:

```javascript
function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
    </Router>
  );
}
```

As with most things, [the docs](https://reacttraining.com/react-router/web/api/Route) give us the most insight as to what is going on underneath the hood. The authors even put in a good note about the importance of understanding the `Route` component and learning how to use it well: "The Route component is perhaps the most important component in React Router to understand and learn to use well. Its most basic responsibility is to render some UI when its path matches the current URL."

In terms of what is shown above, the `path='/'` prop means React Router is going to look to see if the URL has the specified path in it (namely `'/'` in this case), and if it does, then it's going to render the `Home` component. 

**Note:** As noted [in the docs](https://reacttraining.com/react-router/web/api/Route/route-render-methods) concerning `Route` render methods, the authors suggest using `children` elements over `component` or `render` (especially with the addition of Hooks). They note we should only ever use one of the `component`, `render`, or `children` props on a given `Route`. 

In any case, consider the following chunk of code that may give somewhat unexpected results at first:

```javascript
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home/Home.component';
import About from './components/About/About.component';

function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </Router>
  );
}

export default App;
```

If we visited `http://localhost:3000` (or whatever port your application is listening on), then we would just get the `Home` component. Makes sense. If we `http://localhost:3000/about`, however, we would actually get both the `Home` component as well as the `About` component. Why? This has to do with how [path](https://reacttraining.com/react-router/web/api/Route/path-string-string) is treated, specifically in terms of how it uses the [path-to-regexp](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0) library which utilizes *partial* matching by default. Essentially, *both* paths are matched because *both* paths contain `/`. This is clearly undesired behavior, and there are a few ways of going about addressing it (next we discuss use of the [exact](https://reacttraining.com/react-router/web/api/Route/exact-bool) prop which needs to be used with some care, especially if you have nested routes at some point--we will remark on this soon). Might this possible be a chance to use a `Switch` component (recall that a `<Switch>` looks through its children `<Route>s` and renders the first one that matches the current URL)? Would something like

```javascript
function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
}
```

only render the `About` component if we visited `http://localhost:3000/about`? No, only the `Home` component would render! Why? Because the `Home` component was matched *first*, and the `Switch` component effectively results in only considering the *first* `Route` with a `path` whose URL matches the current one. Since both `/` and `/about` match `/about`, but `path='/'` comes *first* above, we end up simply getting the `Home` component. Of course, we could just switch the order of the `Route`s and our problem would be solved. 

As mentioned above, we have to be somewhat careful with using the `exact` prop, especially if our application starts to grow and we want to have `Route`s inside of multiple components. Then you could be looking at a bunch of nested routes, and using the `exact` prop could unintentionally prevent matching for the nested routes. [This answer](https://stackoverflow.com/a/51961213/5209533) on Stack Overflow does a great job of explaining the utility of using the `Switch` component along with *not* using `exact`:

---

Suppose the Home route contains nested `Route`s like the following:

```javascript
const Home = (props) => {
  return ( 
    <Fragment>
      <p>This will always appear in Home :)</p>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route path='/layout' component={Layout}></Route>
    </Fragment>
  );
}
```

So now if you write

```javascript
<Route exact path="/" component={Home} />
```

then when you visit `/dashboard`, the `Dashboard` component you *want* to render cannot be rendered since no Route matches with `/dashboard` at the top level. In order to achieve the desired behavior, you can make use of `Switch` and reorder the routes so that the paths that are prefixes to other paths are at the end:

```javascript
<Switch>
  <Route path='/about' component={About} />
  <Route path='/' component={Home} />
</Switch>
```

---

The effect of the example code above from the SO answer is that we can visit `http://localhost:3000` and *only* have the `Home` component rendered (i.e., without any of its nested `Route`s, specifically `Dashboard` and `Layout`, being rendered). We can visit `http://localhost:3000/about` and have *only* the `About` component rendered (even though `/` is a partial match, since we are inside of `Switch`, only the `About` component will be rendered), as expected. But the great thing happens when we visit `http://localhost:3000/dashboard` or `http://localhost:3000/layout`: Since `/` is a partial match for `/dashboard` and/or `/layout`, we get the `Home` component and also whatever routes inside match the current URL, namely `/dashboard` or `/layout`. The point is that you can use `Switch` along with `exact` in powerful ways--simply don't get carried away with `exact` lest you prevent yourself from useful nested routing.

The awesome thing about all of this is that we are basically getting conditional rendering based on what is in the URL bar, and that is totally awesome!

3\. **Link:** For a [Link](https://reacttraining.com/react-router/web/api/Link), we *do not use anchor tags!* Why? Because that will take us *away* from our application. Think about it like this: When we load up our application for the first time, what loads up is `index.html`. We are using a front-end framework, and if we *leave* `index.html`, then everything has to start back over again. It's not like a back-end framework. As [the docs note](https://reacttraining.com/react-router/web/guides/quick-start/1st-example-basic-routing), behind the scenes, `<Link>` renders an `<a>` with a real `href`, so people using the keyboard for navigation or screen readers will still be able to use the app. Whatever the case, under `Link` [in the docs](https://reacttraining.com/react-router/web/api/Link), the authors make it clear that the `Link` component is intended to provide declarative, accessible navigation around our application (not outside of it!). So how do we use `Link`? 

The most common prop you will use with `Link` is the `to` prop (that actually comes in three forms, namely `to: string`, `to: object`, `to: function`, all of which have varying powers but the most basic and common one is simply `to: string`). And we say where we want to go (among other things sometimes):

```javascript
function App() {
  return (
    <Router>
      <h1>Header!</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <h1>Footer!</h1>
    </Router>
  );
}
```

If we click on the `Link` with "Home", then React Router will send us along to `/`, where the `Home` component is being rendered. React Router is going to keep an eye on the URL, and when it sees that we are now at `/`, then it will load the `Home` component. The same thing goes if we click the `Link` with "About". React Router will send us along to `/about`, whereby React Router will then see that we are supposed to render the `About` component. 

The cool thing with using `Link`s like this is that now we can use the forward and backward arrows in our browser:

<p align='center'>
  <img width='300px' src='https://user-images.githubusercontent.com/52146855/81254271-458ccd80-8ff0-11ea-9dbf-87b70ed215b7.gif' />
</p>

As can be seen above, we have *actual* anchor tags as if we had made them (even though React Router made them for us), but the difference is that as we hop back and forth within the application, we can see the purple blinking which means the DOM is changing, and now we can use the forward and backward arrows without any issue because React Router is doing two things:

1. It's deciding which component to render. 
2. We're not leaving `index.html`. We're not leaving our application. It's not reloading. JavaScript is simply rewriting what's in the URL, and so it makes it *look* like we are reloading our application on different pages, but really we simply conditionally rendering all sorts of different components based on routes that we set up. 

---

**Recap (on the basics of how React Router works):**

1. The `Router` itself is going to be used only one time and it will wrap around everything in our application. 
2. The `Route` can be used anytime we want to render a component(s) based on whatever URL the user happens to be at. 
3. The `Link` is going to be our new substitute for anchor tags--if we want to link internally inside of our application, then we are always going to use `Link`. 

### `NavLink` and making a `NavBar` component

One thing that is rather cool with React is all of the pre-built components people have put together for ease of use. For example, Materialize has an entire sidebar of components (Badges, Buttons, Breadcrumbs, etc.) we can pick and choose from. The one we are interested in right now is the [Navbar](https://materializecss.com/navbar.html) component. For a basic navbar with right-aligned links and a left-aligned logo, we get the following code: 

```html
<nav>
  <div class="nav-wrapper">
    <a href="#" class="brand-logo">Logo</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">JavaScript</a></li>
    </ul>
  </div>
</nav>
```

As is the case when we bring in anything from the outside, we need to be mindful of the particulars of whatever framework we are using if, in fact, we are using one. For example, if we are using React and React Router, as we are right now, then we need to make some modifications to the code above, namely change all of the `a` tags to `Link` tags and all of the `href`s to `to`s and specify where the `Link`s should route to (assuming we want to keep everything within our application). 

To use the resource above, we can get the Materialize CDN and drop it in our `index.html` underneath our `title`:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```

And then we can make a sample `NavBar` component using the code above: 

```javascript
import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return ( 
    <nav className="black">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">AirBnB</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/host">Become a host</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/login">Log in</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
        </ul>
      </div>
    </nav>
  );
}
 
export default NavBar;
```

Then our `App.js` file could look something like the following for a very basic use case (of course, in a real application we would put the components in separate files):

```javascript
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component';

// For demo purposes with router using materialize
const Home = () => <h1>Home</h1>
const Host = () => <h1>Host</h1>
const Help = () => <h1>Help</h1>
const LogIn = () => <h1>Log in</h1>
const SignUp = () => <h1>Sign up</h1>

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/host' component={Host} />
      <Route exact path='/help' component={Help} />
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/signup' component={SignUp} />
    </Router>
  );
}

export default App;
```

To make all of this even cooler, there is a [NavLink](https://reacttraining.com/react-router/web/api/NavLink) component from React Router that we may use, where `NavLink` is, "A special version of the `<Link>` that will add styling attributes to the rendered element when it matches the current URL." They then give several props that make the `NavLink` special and easy to use:

- `activeClassName: string`
- `activeStyle: object`
- `exact: bool`
- `strict: bool`
- `isActive: func`
- `location: object`
- `aria-current: string`

As the authors note for `activeClassName`, this is the class to give the element when it is active. The default given class is `active`. This will be joined with the `className` prop. So you can use the default `active` and style as desired or you can set `activeClassName` manually which may not be such a bad idea (e.g., `activeNavLink`). 

In our situation, we should turn all of the `Link`s in our `NavBar` component to `NavLink`s: 

```javascript
import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
  return ( 
    <nav className="black">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">AirBnB</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/host">Become a host</NavLink></li>
          <li><NavLink to="/help">Help</NavLink></li>
          <li><NavLink to="/login">Log in</NavLink></li>
          <li><NavLink to="/signup">Sign up</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
 
export default NavBar;
```

And now we can watch this in action: 

<p align='center'>
  <img src='https://user-images.githubusercontent.com/52146855/81331371-182f3680-9067-11ea-8deb-8338c399d956.gif' />
</p>

Note that the partial matching is in effect, namely, since we are at `http://localhost:3000`, the `NavLink` with `className='brand-logo'` constantly has `active` as also part of its *joined* `className` since that route is active. Also note how subsequent routes that are visited automatically have a `className` of `active` added to them. As noted previously, `active` is the *default* `className` added when a `NavLink` is active, but we can use the `activeClassName` prop to customize this if we so wish

The upshot of all of this is that we can *selectively* style different navigation links that are active: 

``` CSS
nav .active {
  text-decoration: underline;
}
```

The `NavLink` largely gives you a lot of styling power.

### `Route`s with the `component` prop vs the `render` prop

We are now going to look at another very important prop of the `Route` component, namely `render` (so far we have just been looking at `component`). It should be noted at the outset that [in the Route render methods](https://reacttraining.com/react-router/web/api/Route/route-render-methods) section of the docs that the recommended method of rendering something with a `<Route>` is to use `children` elements (so neither `component` nor `render`). Regardless, only one of `component`, `render`, or `children` should be used on a given `<Route>`. For the `children` prop, the docs note the following: "Sometimes you need to render whether the path matches the location or not. In these cases, you can use the function `children` prop. It works exactly like `render` except that it gets called whether there is a match or not. The `children` render prop receives all the same [route props](https://reacttraining.com/react-router/web/api/Route/route-props) (i.e., the three route props `match`, `location`, and `history` accompany *all* of the render methods) as the `component` and `render` methods, except when a route fails to match the URL, then `match` is `null`. This allows you to dynamically adjust your UI based on whether or not the route matches." 

Returning to our specific situation, what we have done so far is simply look for a route match and then render a single component. Basically, a `<Route>` is just a fancy `if` statement: If the `path` is matched, then render the specified component:

```html
<Route exact path='/' component={Home} />
```

This poses a problem. Why? Because what if we wanted to do something like the following:

```html
<Route exact path='/' component={<Home title='Hello'>} />
```

This is what we have normally done if we want to send down props and the like. But this is not okay to pass the `component` prop. Let's take a look at what the docs say about each render method: [component](https://reacttraining.com/react-router/web/api/Route/component), [render](https://reacttraining.com/react-router/web/api/Route/render-func), and [children](https://reacttraining.com/react-router/web/api/Route/children-func). 

- **component:** A React component to render only when the location matches. It will be rendered with [route props](https://reacttraining.com/react-router/web/api/Route/route-props). When you use `component` (instead of `render` or `children`) the router uses [React.createElement](https://reactjs.org/docs/react-api.html#createelement) to create a new [React element](https://reactjs.org/docs/rendering-elements.html) from the given component. That means if you provide an inline function to the `component` prop, you would create a new component every render. This results in the existing component unmounting and the new component mounting instead of just updating the existing component. When using an inline function for inline rendering, use the `render` or the `children` prop.
- **render (func):** This allows for convenient inline rendering and wrapping without the undesired remounting explained above. Instead of having a new React element created for you using the `component` prop, you can pass in a function to be called when the location matches. The `render` prop function has access to all the same route props (`match`, `location` and `history`) as the `component` render prop. *Note:* `<Route component>` takes precedence over `<Route render>` so don't use both in the same `<Route>`.
- **children (func):** Sometimes you need to render whether the path matches the location or not. In these cases, you can use the function `children` prop. It works exactly like `render` except that it gets called whether there is a match or not. The `children` render prop receives all the same route props as the `component` and `render` methods, except when a route fails to match the URL, then `match` is `null`. This allows you to dynamically adjust your UI based on whether or not the route matches. This could also be useful for animations. *Note:* `<Route children>` takes precedence over both `<Route component>` and `<Route render>` so don't use more than one in the same `<Route>`.

In terms of `render`, we can do something like the following now instead:

```html
<Route exact path='/' render={() => (<Home title='Hello!' />)} />
```

So `render` is very very important because anytime you need to do more than just render a component (e.g., pass certain props and the like), then you'll use `render` (or `children`) instead of `component`. But for anytime when all you need to do is render a component and don't need to pass anything down, then `component` is the right render method to use.

### Nested routes

We are now going to explore the idea of [nested routing](https://reacttraining.com/react-router/web/guides/quick-start/2nd-example-nested-routing). 

Let's say we had multiple things inside of the `Help` component that needed to happen. For instance, maybe we have on the `Help` component a bunch of stuff that loads up at the top. So maybe we always want a header, an image, etc:

```javascript
import React, { Fragment } from 'react';

const Help = (props) => {
  return (
    <Fragment>
      <h1>Help Header</h1>
      <p>An image goes here</p>
      <h3>Footer for help</h3>
    </Fragment>
  );
};

export default Help;
```

So right now the `Help` component would show everything above if we went to `/help`. But maybe there's dynamic content that we need to account for. This is where `Route` can be handy. Our `Help` component could look like the following: 

```javascript
import React, { Fragment } from 'react';
import {Route, Link} from 'react-router-dom';

const HelpCustomer = () => <h1>Help Customer!</h1>
const HelpHost = () => <h1>Help Host!</h1>

const Help = (props) => {
  return (
    <Fragment>
      <div>
        <Link to='/help/customer'>I am a customer</Link> | 
        <Link to='/help/host'>I am a host</Link>
      </div>
      <p>An image goes here</p>
      <Route path='/help/customer' component={HelpCustomer} />
      <Route path='/help/host' component={HelpHost} />
      <h3>Footer for help</h3>
    </Fragment>
  );
};

export default Help;
```

Back in our `App.js`, however, this will not do (for reasons previously addressed in the note concerning `Switch`):

```javascript
function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' render={() => (<Home title='Hello!' />)} />
      <Route exact path='/host' component={Host} />
      <Route exact path='/help' component={Help} />
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/signup' component={SignUp} />
    </Router>
  );
}
```

What's the problem here? Can you see why the `Route`s with `path` props `/help/customer` and `/help/host` would never be matched? This is because only `exact`ly `/help` is currently being matched within `App.js`. The solution is to remove `exact`. Again, as noted previously, be careful with your use of `exact`. It can cause problems when used carelessly, especially in the context of using nested routing. 

### The docs on `Route` component props: `match`, `location`, and `history`

As mentioned [in the docs](https://reacttraining.com/react-router/web/api/Route/route-props), all three render methods on `<Route>` (i.e., `component`, `render`, and `children`) will be passed the same three route props:

- [match](https://reacttraining.com/react-router/web/api/match)
- [location](https://reacttraining.com/react-router/web/api/location)
- [history](https://reacttraining.com/react-router/web/api/history)

Let's consider what the docs have to say about each of these props before exploring them in more detail in the context of our current dummy application (i.e., the AirBnB navbar clone).

#### match

A `match` object contains information about how a `<Route path>` matched the URL. `match` objects contain the following properties:

- `params` (object): Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
- `isExact` (boolean): `true` if the entire URL was matched (no trailing characters)
- `path` (string): The path pattern used to match. Useful for building nested `<Route>`s
- `url` (string): The matched portion of the URL. Useful for building nested `<Link>`s

You'll have access to match objects in various places:
- [Route component](https://reacttraining.com/react-router/web/api/Route/component) as `this.props.match`
- [Route render](https://reacttraining.com/react-router/web/api/Route/render-func) as `({ match }) => ()`
- [Route children](https://reacttraining.com/react-router/web/api/Route/children-func) as `({ match }) => ()`
- [withRouter](https://reacttraining.com/react-router/web/api/withRouter) as `this.props.match`
- [matchPath](https://reacttraining.com/react-router/web/api/matchPath) as the return value

If a Route does not have a `path`, and therefore always matches, you'll get the closest parent match. Same goes for `withRouter`.

##### null matches

A `<Route>` that uses the `children` prop will call its `children` function even when the route's `path` does not match the current location. When this is the case, the `match` will be `null`. Being able to render a `<Route>`'s contents when it does match can be useful, but certain challenges arise from this situation.

The default way to "resolve" URLs is to join the `match.url` string to the "relative" path.

If you attempt to do this when the match is `null`, you will end up with a `TypeError`. This means that it is considered unsafe to attempt to join "relative" paths inside of a `<Route>` when using the `children` prop.

A similar, but more subtle situation occurs when you use a pathless `<Route>` inside of a `<Route>` that generates a `null` match object.

Pathless `<Route>`s inherit their `match` object from their parent. If their parent `match` is `null`, then their `match` will also be `null`. This means that 
- a) any child routes/links will have to be absolute because there is no parent to resolve with and 
- b) a pathless route whose parent `match` can be `null` will need to use the `children` prop to render.

#### location

Locations represent where the app is now, where you want it to go, or even where it was. It looks something like this:

```javascript
{
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere',
  search: '?some=search-string',
  hash: '#howdy',
  state: {
    [userDefined]: true
  }
}
```

The router will provide you with a location object in a few places:

- [Route component](https://reacttraining.com/react-router/web/api/Route/component) as `this.props.location`
- [Route render](https://reacttraining.com/react-router/web/api/Route/render-func) as `({ location }) => ()`
- [Route children](https://reacttraining.com/react-router/web/api/Route/children-func) as `({ location }) => ()`
- [withRouter](https://reacttraining.com/react-router/web/api/withRouter) as `this.props.location`

It is also found on `history.location` but you shouldn't use that because it's mutable. You can read more about that in the [history](https://reacttraining.com/react-router/web/api/history) doc.

A location object is never mutated so you can use it in the lifecycle hooks to determine when navigation happens, this is really useful for data fetching and animation.

You can provide locations instead of strings to the various places that navigate:

- Web [Link to](https://reacttraining.com/react-router/web/api/Link)
- Native [Link to](https://reacttraining.com/react-router/native/api/Link)
- [Redirect to](https://reacttraining.com/react-router/web/api/Redirect)
- [history.push](https://reacttraining.com/react-router/web/api/history/push)
- [history.replace](https://reacttraining.com/react-router/web/api/history)

Normally you just use a string, but if you need to add some "location state" that will be available whenever the app returns to that specific location, you can use a location object instead. This is useful if you want to branch UI based on navigation history instead of just paths (like modals).

Finally, you can pass a location to the following components:

- [Route](https://reacttraining.com/react-router/web/api/Route)
- [Switch](https://reacttraining.com/react-router/web/api/Switch)

This will prevent them from using the actual location in the router's state. This is useful for animation and pending navigation, or any time you want to trick a component into rendering at a different location than the real one.

#### history

The term "history" and "`history` object" in this documentation refers to [the history package](https://github.com/ReactTraining/history), which is one of only 2 major dependencies of React Router (besides React itself), and which provides several different implementations for managing session history in JavaScript in various environments.

The following terms are also used:

- "browser history" - A DOM-specific implementation, useful in web browsers that support the HTML5 history API
- "hash history" - A DOM-specific implementation for legacy web browsers
- "memory history" - An in-memory history implementation, useful in testing and non-DOM environments like React Native

`history` objects typically have the following properties and methods:

- `length` (number): The number of entries in the history stack
- `action` (string): The current action (`PUSH`, `REPLACE`, or `POP`)
- `location` (object): The current location. May have the following properties:
  + `pathname` (string): The path of the URL
  + `search` (string): The URL query string
  + `hash` (string): The URL hash fragment
  + `state` (object): location-specific state that was provided to e.g. `push(path, state)` when this location was pushed onto the stack. Only available in browser and memory history.
- `push(path, [state])` (function): Pushes a new entry onto the history stack
- `replace(path, [state])` (function): Replaces the current entry on the history stack
- `go(n)` (function): Moves the pointer in the history stack by n entries
- `goBack()` (function): Equivalent to `go(-1)`
- `goForward()` (function): Equivalent to `go(1)`
- `block(prompt)` (function): Prevents navigation (see [the history docs](https://github.com/ReactTraining/history))

##### history is mutable

The `history` object is mutable. Therefore it is recommended to access the [location](https://reacttraining.com/react-router/web/api/location) from the render props of `<Route>`, not from `history.location`. This ensures your assumptions about React are correct in lifecycle hooks. For example:

```javascript
class Comp extends React.Component {
  componentDidUpdate(prevProps) {
    // will be true
    const locationChanged =
      this.props.location !== prevProps.location;

    // INCORRECT, will *always* be false because history is mutable.
    const locationChanged =
      this.props.history.location !== prevProps.history.location;
  }
}

<Route component={Comp} />;
```

This is because a new `location` object is generated for every `<Route>` render whereas `history.location` *changes* based on current location (i.e., `history.location` is never generated anew but simply mutates to reflect whereever we are currently). In the example above, `this.props.location !== prevProps.location` gives the desired result because the `location` object for the current prop is different from the `location` object for the previous prop. But `this.props.history.location !== prevProps.history.location` gives a misleading conclusion because `history.location` is *always* the same because it mutates to reflect *current* location; that is, *different* `location` objects are being compared in the `this.props.location !== prevProps.location` comparison whereas `history.location` is the *same* object in the `this.props.history.location !== prevProps.history.location` comparison.

Additional properties may also be present depending on the implementation you're using. Please refer to [the history documentation](https://github.com/ReactTraining/history#properties) for more details.

### Using `Route` component props in our application

We are now going to take a look at the `<Route>` props that React Routers gives us (remarked on more extensively from the docs in the note above): `match`, `location`, and `history`. These props release a lot of the programmatic power we have over the router. 

The first thing to take note of is that a component will only have access to these props if the components is rendered from a `<Route>`. So how can we get something like the `NavBar` component to render from a `<Route>` on every single page? As [the docs](https://reacttraining.com/react-router/web/api/Route/path-string-string) note, `<Route>`s without a path *always* match. So we can simply do something like the following for the time being:

```html
<Route component={NavBar} />
```

If we do this, then we can `console.log(props)` from within `NavBar`, and when the `NavBar` component is rendered, we will have access to all of the render props mentioned above. For example, if we have `http://localhost:3000/help?name=frank&occupation=codeninja#awesome` in the URL bar and enter this, then we will get something like the following in the console:

<p align='center'>
  <img width='700px' src='https://user-images.githubusercontent.com/73953353/99929016-34e44080-2d11-11eb-995f-7e57000d9789.png' />
</p>

This is sort of a shortened version of what you might get in native JavaScript with `window.location`. From the image above, we can *see* a lot of the functions or methods that can be run against the `history` object (see the note above or the docs for more on these methods). 9

It's worth noting that the `history` object is a stack; that is, it is LIFO (last in first out) as opposed to a queue which is FIFO (first in first out). The `length` property on the `history` object shows how many things are on the stack. 

One potential "gotcha" may occur when trying to access `match`, `location`, or `history` from a component rendered by `<Route>`. Specifically, the "gotcha" arises from what render method we are using (i.e., `component`, `render`, or `children`). The following rules generally apply (see [the docs](https://reacttraining.com/react-router/web/api/location)) for accessing these props from the given render method:

- `component`: `this.props.match|location|history`
- `render`: `({ match|location|history }) => ()`
- `children`: `({ match|location|history }) => ()`
- `withRouter`: `this.props.match|location|history`

If you are using either `render` or `children`, then one easy way of getting all of the `<Route>` props easily is to do something like the following: 

```html
<Route exact path='/' render={({...props}) => (<Home title='Hello!' {...props} />)} />
```

This takes advantage of ES6+ syntax and thus if we `console.log(props)` from within the `Home` component we will now get something like the following:

<p align='center'>
  <img width='500px' src='https://user-images.githubusercontent.com/73953353/99929014-331a7d00-2d11-11eb-9aa6-495f97c166e2.png' />
</p>

The `push` object on `history` can be useful when wanting to send the user somewhere for some reason besides just a click event. Because the `history` object is a stack, if we *push* something on to the top of it, then it will make that the first thing to come off of it. So if we wanted to programmatically move someone around (i.e., so far we have been moving someone around only because they have clicked on a link or something like that. but there are times when you are going to want to move the user when they *did not* click on something because something happens such as another event, an AJAX request fulfills, etc.), then `push` lends itself well to this. 

As sort of a dummy example, consider modifying the `Home` component in the following way:

```javascript
import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

const Home = (props) => {
  const {title} = props;
  setTimeout(() => {
    props.history.push('/help')
  }, 2000)
  return ( 
    <Fragment>
      <h1>Home! {title}</h1>
    </Fragment>
  );
}
 
export default Home;
```

Of course, this is not something we would want to leave on for very long because our home page is now useless, but the browser will wait two seconds (per the `setTimeout`), and then it will call the `push` method against our `history` object, and it will push the browser forward to the `/help` route or, rather, set the `/help` route at the top of the stack.

So that's how the stack works: we end up at whatever is at the top of the stack. Going backwards with `goBack` works the same way:

```javascript
setTimeout(() => {
  props.history.goBack()
}, 2000)
```

This would take us to the previous thing in the stack. And `goForward` does just the opposite of `goBack` (so long as there is actually something to `goForward` to). 

It's worth noting that there is a [block](https://github.com/ReactTraining/history/blob/master/docs/Blocking.md) method that may be useful sometimes in the sense that it gives the user the chance to confirm or deny something before leaving a page and/or other stuff firing off. 

### Using the `match` prop on `Route` for dynamic URLs and URL params

What is going to be remarked on now is basically how `req.params` works [in Express](https://expressjs.com/en/4x/api.html#req.params), namely the `match.params` property will be an object containing properties mapped to the [named route parameters](https://expressjs.com/en/guide/routing.html#route-parameters). For example, if we had something like

```html
<Route exact path='/about/:personId/name/:personName' component={About} />
```
 and then visitied `http://localhost:3000/about/7/name/william-wallace`, then `match.params` would look as follows:

 ```javascript
 {
   personId: '7',
   personName: 'william-wallace'
 }
 ```

In any case, this can be very valuable for managing a lot of different content that should really be grouped. 

## Redux

### Redux docs reference

[Here](https://redux.js.org/) is the homepage for Redux and [here](https://github.com/reduxjs/redux) is the GitHub repo. And here are docs links for reference:

- **Introduction**
  + [Getting Started with Redux](https://redux.js.org/introduction/getting-started)
  + [Installation](https://redux.js.org/introduction/installation)
  + [Motivation](https://redux.js.org/introduction/motivation)
  + [Core Concepts](https://redux.js.org/introduction/core-concepts)
  + [Three Principles](https://redux.js.org/introduction/three-principles)
  + [Prior Art](https://redux.js.org/introduction/prior-art)
  + [Learning Resources](https://redux.js.org/introduction/learning-resources)
  + [Ecosystem](https://redux.js.org/introduction/ecosystem)
  + [Examples](https://redux.js.org/introduction/examples)
- **Basic Tutorial**
  + [Basic Tutorial: Intro](https://redux.js.org/basics/basic-tutorial)
  + [Actions](https://redux.js.org/basics/actions)
  + [Reducers](https://redux.js.org/basics/reducers)
  + [Store](https://redux.js.org/basics/store)
  + [Data flow](https://redux.js.org/basics/data-flow)
  + [Usage with React](https://redux.js.org/basics/usage-with-react)
  + [Example: Todo List](https://redux.js.org/basics/example)
- **Advanced Tutorial**
  + [Advanced Tutorial: Intro](https://redux.js.org/advanced/advanced-tutorial)
  + [Async Actions](https://redux.js.org/advanced/async-actions)
  + [Async Flow](https://redux.js.org/advanced/async-flow)
  + [Middleware](https://redux.js.org/advanced/middleware)
  + [Usage with React Router](https://redux.js.org/advanced/usage-with-react-router)
  + [Example: Reddit API](https://redux.js.org/advanced/example-reddit-api)
  + [Next Steps](https://redux.js.org/advanced/next-steps)
- **Recipes**
  + [Recipes: Index](https://redux.js.org/recipes/recipe-index)
  + [Configuring Your Store](https://redux.js.org/recipes/configuring-your-store)
  + [Usage with TypeScript](https://redux.js.org/recipes/usage-with-typescript)
  + [Migrating to Redux](https://redux.js.org/recipes/migrating-to-redux)
  + [Using Object Spread Operator](https://redux.js.org/recipes/using-object-spread-operator)
  + [Reducing Boilerplate](https://redux.js.org/recipes/reducing-boilerplate)
  + [Server Rendering](https://redux.js.org/recipes/server-rendering)
  + [Writing Tests](https://redux.js.org/recipes/writing-tests)
  + [Computing Derived Date](https://redux.js.org/recipes/computing-derived-data)
  + [Implementing Undo History](https://redux.js.org/recipes/implementing-undo-history)
  + [Isolating Redux Sub-Apps](https://redux.js.org/recipes/isolating-redux-sub-apps)
  + [Using Immutable.JS with Redux](https://redux.js.org/recipes/using-immutablejs-with-redux)
  + [Code Splitting](https://redux.js.org/recipes/code-splitting)
  + **Structuring Reducers**
    * [Structuring Reducers](https://redux.js.org/recipes/structuring-reducers/structuring-reducers)
    * [Prerequisite Concepts](https://redux.js.org/recipes/structuring-reducers/prerequisite-concepts)
    * [Basic Reducer Structure](https://redux.js.org/recipes/structuring-reducers/basic-reducer-structure)
    * [Splitting Reducer Logic](https://redux.js.org/recipes/structuring-reducers/splitting-reducer-logic)
    * [Refactoring Reducers Example](https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example)
    * [Using combineReducers](https://redux.js.org/recipes/structuring-reducers/using-combinereducers)
    * [Beyond combineReducers](https://redux.js.org/recipes/structuring-reducers/beyond-combinereducers)
    * [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)
    * [Updating Normalized Data](https://redux.js.org/recipes/structuring-reducers/updating-normalized-data)
    * [Reusing Reducer Logic](https://redux.js.org/recipes/structuring-reducers/reusing-reducer-logic)
    * [Immutable Update Patterns](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns)
    * [Initializing State](https://redux.js.org/recipes/structuring-reducers/initializing-state)
- **FAQ**
  + [FAQ Index](https://redux.js.org/faq)
  + [General](https://redux.js.org/faq/general)
  + [Reducers](https://redux.js.org/faq/reducers)
  + [Organizing State](https://redux.js.org/faq/organizing-state)
  + [Store Setup](https://redux.js.org/faq/store-setup)
  + [Actions](https://redux.js.org/faq/actions)
  + [Immutable Data](https://redux.js.org/faq/immutable-data)
  + [Code Structure](https://redux.js.org/faq/code-structure)
  + [Performance](https://redux.js.org/faq/performance)
  + [Design Decisions](https://redux.js.org/faq/design-decisions)
  + [React Redux](https://redux.js.org/faq/react-redux)
  + [Miscellaneous](https://redux.js.org/faq/miscellaneous)
- **Style Guide**
  + [Style Guide](https://redux.js.org/style-guide/style-guide)
- **Other**
  + [Glossary](https://redux.js.org/glossary)
  + [Troubleshooting](https://redux.js.org/troubleshooting)
- **API Reference**
  + [API Reference](https://redux.js.org/api/api-reference)
  + [createStore](https://redux.js.org/api/createstore)
  + [Store](https://redux.js.org/api/store)
  + [combineReducers](https://redux.js.org/api/combinereducers)
  + [applyMiddleware](https://redux.js.org/api/applymiddleware)
  + [bindActionCreators](https://redux.js.org/api/bindactioncreators)
  + [compose](https://redux.js.org/api/compose)
- **Redux Toolkit**
  + [Redux Toolkit: Overview](https://redux.js.org/redux-toolkit/overview)

### React Redux docs reference

[Here](https://react-redux.js.org/) is the homepage for React Redux and [here](https://github.com/reduxjs/react-redux) is the GitHub repo. And here are docs links for reference:

- **Introduction**
  + [Quick Start](https://react-redux.js.org/introduction/quick-start)
  + [Basic Tutorial](https://react-redux.js.org/introduction/basic-tutorial)
  + [Why Use React Redux?](https://react-redux.js.org/introduction/why-use-react-redux)
- **Using React Redux**
  + [Connect: Extracting Data with mapStateToProps](https://react-redux.js.org/using-react-redux/connect-mapstate)
  + [Connect: Dispatching Actions with mapDispatchToProps](https://react-redux.js.org/using-react-redux/connect-mapdispatch)
  + [Accessing the Store](https://react-redux.js.org/using-react-redux/accessing-store)
  + [Static Typing](https://react-redux.js.org/using-react-redux/static-typing)
- **API Reference**
  + [connect()](https://react-redux.js.org/api/connect)
  + [Provider](https://react-redux.js.org/api/provider)
  + [connectAdvanced()](https://react-redux.js.org/api/connect-advanced)
  + [batch()](https://react-redux.js.org/api/batch)
  + [Hooks](https://react-redux.js.org/api/hooks)
- **Guides**
  + [Troubleshooting](https://react-redux.js.org/troubleshooting)

### Before Redux and React-Redux

If we hop on over to [the Redux homepage](https://redux.js.org/), then we are greeted by the following four prominent messages after the centerpiece message (i.e., Redux - A Predictable State Container for JS Apps):

- **Predictable:** Redux helps you write applications that *behave consistently*, run in different environments (client, server, and native), and are *easy to test*.
- **Centralized:** Centralizing your application's state and logic enables powerful capabilities like *undo/redo*, *state persistence*, and much more.
- **Debuggable:** The [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) make it easy to trace *when*, *where*, *why*, and *how* your application's state changed. Redux's architecture lets you log changes, use "*time-travel debugging*", and even send complete error reports to a server.
- **Flexible:** Redux *works with any UI layer*, and has *a large ecosystem of addons* to fit your needs.

We then see two other things underneath these messages (other libraries from the Redux team):

- [React-Redux](https://react-redux.js.org/): Official React bindings for Redux
- [Redux Toolkit](https://redux-toolkit.js.org/): The official, opinionated, batteries-included toolset for efficient Redux development.

If we go to the React-Redux page (which is where we will spend most of our time), then we are greeted by four more prominent messages:

- **Official:** React Redux is maintained by the Redux team, and *kept up-to-date with the latest APIs from Redux and React*.
- **Predictable:** *Designed to work with React's component mode*l. You define how to extract the values your component needs from Redux, and your component receives them as props.
- **Encapsulated:** Creates wrapper components that *manage the store interaction logic for you*, so you don't have to write it yourself.
- **Optimized:** Automatically implements *complex performance optimizations*, so that your own component only re-renders when the data it needs has actually changed.

### What is Redux?

In the simplest of terms, Redux is a state management tool/library (i.e., a bunch of JavaScript someone else wrote to make your life easier). When used properly, Redux will make your life *much* easier. If used properly. But starting out can be rough. The amount of boilerplate code to get things started can be rather intimidating. In fact, now there is an [official "Redux+JS" template](https://github.com/reduxjs/cra-template-redux) for Create React App to be used like so:

```bash
npx create-react-app my-app --template redux
```

There isn't much said about usage of this in the docs so it's hard to envisage exactly what the template provides. [This video](https://www.youtube.com/watch?v=xbgwyhHmCyU) goes through some of it. 

Returning to our original query, what could a state management tool or library really provide for us? How would using something like Redux differ from what we have done previously? Well, what have we done previously? Thus far, we have done entirely component-based state management. That is, state has always been managed either locally within a single component (e.g., making an AJAX call within `componentDidMount` and then placing the results in local state) or we "lifted state up" so that a child component could pretend to change state in its parent component by using a callback passed down as props from the parent that actually changed the state in the parent. 

Recall why "lifting up state" was necessary in the AWS flashcards application: An action happened in the quizbar component and that event needed to be known by the flashcard component, but these components were not children of each other but lived on other ends of the component hierarchy. We got around this problem by placing the state we needed in both components in the closest common ancestor, which happened to be the `App` component. Nonetheless, we are still only managing state at the component level. This isn't application state at this point because even though it may seem like the `QuizBar` component is changing the `App` state, it's not. `App` manages its own state, and `App` sends down a callback as props to let `QuizBar` know, "Hey, if something happens, run this code. I will change my own state. You don't ever change my state. I change my own state. You just run a little bit of code (the callback I pass down as props), and that will be me updating state. But don't worry about the details. That's not your problem." It's a fantastic solution. But only when the application is small. 

When you get to a company that uses Redux for a very large application, you will have hundreds if not *thousands* of components working in unison, and it will be common for different components to know about a common piece of state (i.e., when something happens in one component that changes state, then another component somewhere else will need to know how state just changed):

<p align='center'>
  <img width='500px' src='https://user-images.githubusercontent.com/73953353/99929070-6230ee80-2d11-11eb-962e-701fc1b666b3.png' />
</p>

In the picture above, you can imagine the pain and torment that would be involved in lifting up state so much. In general, as the application grows and gets much bigger, eventually everything is going to end up living at the very top in `App`. And then `App` is going to get super bloated and be an absolute disaster because you're going to end up sending down callbacks ten layers deep and you're going to be changing state in components where you have no idea what it's doing, and there's no way another developer is going to be able to sit down and understand what's happening. This is where Redux is going to come into play. 

Redux is going to create something called the Store. We will have a Store that is sort of external to our application. Or it's outside of the component structure. And it will create a publication/subscription type model where, say, something happens in one component and then the component where something just happened can push or *publish* out to the store communicating what just happened. Meanwhile, a component elsewhere that needs to know about what just happened in the aforementioned component can *subscribe* to the store and be notified when that thing happens:

<p align='center'>
  <img width='500px' src='https://user-images.githubusercontent.com/73953353/99929064-5e04d100-2d11-11eb-8226-a302dc9d2978.png' />
</p>

This is a super simple overview of how Redux works, but the idea is that Redux is going to work as a sort of global store where we can keep *application* state. Not component state. Because we are still going to use component state as we have, but we are going to start using Redux which will give us the ability to put stuff in a place where any component can use it. The upshot of all this is we can add components in various locations without having to worry about lifting up state to ridiculous levels:

<p align='center'>
  <img width='500px' src='https://user-images.githubusercontent.com/73953353/99929072-62c98500-2d11-11eb-89cf-d98487017986.png' />
</p>

One last thought: Redux is primarily meant for large applications. There is no way we are going to be able to make an applications of this size that *justifies* Redux right now, but we can implement it in a basic fashion to show how it might be used in a larger application. Regardless, it is absolutely phenomenal for managing application state in an easy and maintainable way that can be scaled over a long period of time across a whole bunch of developers because it creates good uniformity for how the whole application manages its state. 

### Redux and React

Probably the worst thing you can do with Redux is to just start coding. There are a *lot* of moving pieces. One of the questions we want to answer is *how* to work with Redux properly, and the problem is that the *how* really needs to be done the right way (as opposed to, "eh, it sort of works") in order to manage the entire application state effectively. So it will feel confusing and somewhat contrived at first possibly. It never gets more complicated than at the very beginning. So you just have to get to that point where you understand all of the moving pieces, why they are the way they are, and then you'll simply redo the same thing over and over and over. So what are the pieces!? We will cover them in two stages:

1. React Redux: We will talk about how Redux works with React through the [react-redux](https://www.npmjs.com/package/react-redux) package just to get a sense of how the puzzle pieces might fit together.
2. Redux: We will talk about how Redux itself works (we *do not* have to be using React to use Redux). 

We will now cover the first piece. In any application using Redux and React, we have a couple of distinct pieces, namely the Redux piece as well as the React piece. Redux has no idea that React exists. It's not going to and it doesn't need to know. Meanwhile, React has no idea that Redux exists. In the same way, it doesn't need to know, and we are going to keep them completely separate. Redux is not meant to work exclusively with React. You could use Redux with Vue, Angular, or simply by itself (just use [the JavaScript](https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.js)), etc. React obviously doesn't need Redux because we haven't been using Redux up until now. So Redux and React are totally distinct from each other. 

The point of all of this is that some of the things we are going to talk about are specific to Redux while some things are specific to React. For example, with Redux, there are actions, reducers, and dispatchers, and all of these things have nothing to do with React, and React will not know that any of them exist. Of course, React has its own state, components, and everything else that makes React what it is, and Redux doesn't know about this stuff. In order to get Redux and React to communicate with each other, we are going to need to have something in the middle, namely something literally called [react-redux](https://react-redux.js.org/introduction/quick-start). This is [the NPM module](https://www.npmjs.com/package/react-redux) we are going to install to in order to get React and Redux to communicate with each other because these things are not made out of the box to work with each other. Essentially, React-Redux will be in the middle to facilitate communication between Redux and React (something we could wire together ourselves with considerable overhead, but the community has already done this for us!). Inside of React-Redux we will get a `Provider` component as well as `connect`. The point is that there will now be some things in our application that will be entirely Redux-specific, entirely React-Redux-specific, and entirely React-specific:

| **Redux** | `react-redux` | **React** |
| --------- | ------------- | --------- |
| actions | `Provider` | state |
| reducers | `connect` | components |
| dispatchers |  | props |

Consider the following picture to illustrate things (explanation follows picture):

<p align='center'>
  <img width='600px' src='https://user-images.githubusercontent.com/73953353/99929074-63621b80-2d11-11eb-9160-3c94894e02a6.png' />
</p>

On the left-hand side we've got the store which is an entirely Redux thing, and we can put as much as we want in there or as little as we want in there. The store is going to be the place that basically any component can go to and either update the store (i.e., "publish" )or get stuff from the store (i.e., "subscribe"). That's the gist. 

On the right-hand side we've got our React app, and our React apps have pretty much all been the same in structure (thanks to `create-react-app`), where we have `index.js` at the very top, `App.js`, directly below it, and then everything else (i.e., our component structure tree). 

Our goal is going to be to make it so any of the components in our React app can be able to talk to the Redux store whatever the components happen to be. And the way that we're going to do that (because Redux and React don't know anything about each other out of the box) is that the `Provider` from React-Redux is going to know about the Redux store, and we are going to take the `Provider` component and we're going to "bear-hug" the entire React application. And by "bear hug" we mean we are going to render the `Provider` component inside of `index.js`. So `index.js` is going to have `Provider` inside of it, and `App.js` is going to have the `Router` (i.e., `BrowserRouter as Router` from `react-router-dom`). So we're going to have both things. That way if any component inside of our React application needs to access something from the store, then it is already inside of the `Provider` component so it will be able to go to the store, and it will do so by means of the `connect` function which will be inside of the component subscribing to the store. So the `connect` function, which is part of React-Redux will be inside of a component that needs to know about Redux, and because that component is inside of the `Provider` it will be able to go to the store. 

The main point in all of this is that React and Redux are not connected in any way by default. Both Redux and React have their own moving parts, and React-Redux is meant to bring these moving parts together in a unifying way. Why? Because we want our components in React to be able to go the store and grab state or update state from *anywhere* in the application in as seamless and trouble-free way as possible. So that's why this whole architecture exists. We're going to use `Provider` and `connect` from React-Redux in order to communicate between React and Redux. 

### How Redux works

Forget about React and React-Redux for a moment. We're just going to think about how Redux does its thing for a moment. Redux has the store. We've got an object inside the store, and *that* makes up our application state. It can be as big or as small as needed. 

The way that Redux works is that the store is informed by a bunch of little functions (as many as you want). These little functions that inform the store are called *reducers*. So you have a bunch of little functions that return a piece of state. And what these functions return can be any data type, but the point is that they are returning a *piece* of state. Every one of them. The logic inside of these reducers can be simply or complex; whatever the case, all of the little reducers return an object and whatever they return is going to *collectively* make up the store. So the store itself--you don't put anything in there. We never mess with the store directly. We never update the store directly. Instead, we use the reducers. They are functions that return a piece of state, and then Redux will handle updating the store (similar to how `this.setState` works in React--we never ever mess with `state` directly in React; we never mess with the store directly in Redux--we use these reducers that return their own little pieces of state and all of those pieces of state aggragate or collectively make up the store). These reducers are not built into Redux--they are functions that we are going to write, that we are responsible for, and there are a couple of rules, and we are going to deal with those rules soon. But the reducers are just tiny functions that we write that return state and that state, all added together, makes up the store. Think of the store as a grocery store where the reducers are like departments: you need all of the departments (e.g., produce, fruits, etc.) individually to create an entire grocery store. So that's what the reducers are.

In order to update the reducers, we have what are called action creators, and we are going to write these as well. And action creators are also little functions. They are little functions that create what you might expect: actions! These are four big terms when it comes to Redux:

- Store
- Reducers
- Action creators
- Actions

An action is simply going to be a little object, and there are rules surrounding the actions, but at the absolute bare minimum, an action *must* have a property of `type`. An action creator is a little function that makes an action object.

So reducers are little functions that return state that gets put in the store, and action creators are little functions that return actions (i.e., an object with at least a property of `type`). That's really all there is to it even though the innerworking can obviously get much much more complex.

The last major piece of Redux is what's a called a "dispatch." And the dispatch is a function that is built into Redux--this one we don't make. We write the reducers entirely ourselves. We write the action creators ourselves and the actions as well. But we con't build the store, and we don't build the dispatch. The dispatch is given to us--it is part of the store. And what the dispatch does is it *dispatches* an action. The action creator will make an action, and when the action (i.e., an object with a `type` property on it) gets triggered it will go to the dispatch, and the dispatch will take that action object and inform *all* of the reducers about it. It will let every reducer know, "Hey! Something happened." If our action were simply something like `{type: 'auth'}`, then it would be, "Hey! I got an object with a `type` of `auth`. I don't know if you care, but I'm just letting you know." And then our reducers will kick into gear, and these reducer functions will need to decide if they care about this action or not. Do they care about the particular `type` that is being passed on (you can already tell how reducer functions will often operate based on what `type` an action has)? Ultimately, most actions will not only have a `type` but also a `payload` (e.g., some sort of data or whatever it might be that a reducer can work with if the reducer decides it cares about the `type` of the action it is informed about). So what will happen is this: The action creator will fire off an action, that action will go to the dispatch, and then the dispatch will send the action to each reducer, and each reducer will have to make a decision about whether or not it cares about the action it is informed about (it makes this decision based on the `type` property of the action object it receives), and if the reducers cares about the action, then it can grab the `payload` and return a different piece of state. If it doesn't care about the action, then it can return the old piece of state. Whatever happens, all of the reducers will get notified every time an action is sent off by an action creator. And *that* is how the store is updated. The reducers return their little pieces of state. Those end up creating one big object in the store. Those individual little reducers will get notified every time an action happens by the dispatcher and then they can update themselves based on the `payload` or whatever, but they'll always know what *type* of action it was because of the `type` property on the action that is sent. 

### Wiring up Redux (all the gory details)

Here is a frame of reference for how everything is supposed to work (you do not have to follow these things in the given order, but it's how some people set things up anyway):

### 1. Use react-redux and wrap the Provider component around everything

```javascript
import { Provider } from 'react-redux'
```

---

In order to wire up a Redux/React app, we need `react-redux`. This is the glue between them. Specifically, we need the `Provider` component to be around *everything*. So you will want to have the following in `index.js`: 

```javascript
import { Provider } from 'react-redux';
```

So you're not just going to render `<App />` like

```javascript
ReactDOM.render(<App />, document.getElementById('root'));
```

in `index.js` as we have normally done right out of the box. We're now going to render the `Provider` component which is coming from `react-redux` and that's going to "bear-hug" our entire React application. It's not going to stay this way (some more configuration is needed, as outlined below), but we can set it up this way:

```javascript
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

If we try to run things right away, then we will get a `TypeError: Cannot read property 'getState' of undefined` error. The reason for this is because the `Provider` component connects the Redux store with the React application. And right now we do not have a store! The above is trying to render a `Provider` *without* a store and that's not okay. 

### 2. Create the store

```javascript
import { createStore } from 'redux'
```

---

Create the Redux store so that Redux exists and the `Provider` has a store to work with:

```javascript
import { createStore } from 'redux'
```

Hopefully this will help you remember where things are coming from: We've got `react-redux` which is the module from which `Provider` comes, and we've got the `redux` module from which `createStore` comes. If you see `redux` as the module you're importing from, then that means React does not know about this thing, and it means `react-redux` does not know about this thing. You could use this in any other framework or just in native JS. This is simply part of `redux`. Now, we're going to give the store to the `Provider`, but at this point `import { createStore } from 'redux'` has nothing to do with anything--it's just pure Redux. 

### 3. Make reducers to populate the store

What makes up the Redux store? If you remember, what makes up the Redux store are little functions that return a piece of state. What we need are *reducers*. So we need reducers to populate the store! The store by itself is just like an empty building. We need reducers to make the store useful. The store is just an aggregate of the reducers. We have to have at least one reducer in order to have any store. And the way that this part works is that we always start with a `rootReducer`. 

What that means is that we are going to make one sort of "master reducer", which may be thought of as the store manager, that will import all of the other reducers. Oftentimes you will have a `reducers` folder inside of `src` in your React application, and inside of `reducers` the `rootReducer` will often be simply called `index.js`, but given how this name can be used all over the place, sometimes it is easiest to just name the `rootReducer` as `rootReducer.js`. 

Inside of that file will be the `rootReducer`. Now, to make a `rootReducer` we will need to get a method from Redux called `combineReducers`, which does exactly what its name implies. Each individual reducer will get combined together into one big store. We can get this method as follows:

```javascript
import { combineReducers } from 'redux';
```

The next thing we will need to do is to actually get each individual reducer. So we'll need to make them and import them into the `rootReducer`. So think back to what a reducer actually is. A reducer is just a function that returns a piece of state. The simplest reducer you might get would be something like

```javascript
export default (state = [], action) => {
  return state;
}
```

Note that all reducers have 2 parameters:

1. Current state (usually provide a default state like the empty array above so if `state` is unset then we will initialize it as an empty array)
2. Info that came from any action

The reducer example given above is totally useless because it will always return an empty array. But it qualifies as a reducer because it's just a function. We could also write the above reducer using non ES6+ syntax (we will use the syntax above but the syntax below is worth knowing and being aware of):

```javascript
function frozen(state = [], action) {
  return state;
}

export default frozen;
```

To get the above reducer into the `rootReducer`, we will call our imports in the `rootReducer.js` file:

```javascript
import frozenReducer from './frozen';
```

We now need to call `combineReducers` and hand it an object. Each key in `combineReducers` will be a piece of state in the Redux store, and each value will be a reducer, and that reducer will return a piece of state (so each value will be the value of that piece of state in the redux store). So for this example we can write something like the following:

```javascript
const rootReducer = combineReducers({
  frozen: frozenReducer
})
```

The above chunk of code means that in our Redux store we will have a little piece of state called `frozen` and the value of `frozen` is going to be whatever the `frozenReducer` function returns. What does it return? Well right now it only ever returns `state` where `state` is an empty array so this is hardly useful, but hopefully the utility of all of this is starting to become apparent. But this is how Redux works is we will add another reducer for the produce and the produce will be another little piece of state inside of Redux. So, in this way, you can add as many new features, remove old ones, access any particular part of the Redux store by grabbing the return value of a little piece of state from the reducer.

From `rootReducer.js`, once we have imported all of the reducers we need and combined them using `combineReducers`, we should `export default rootReducer` the `rootReducer` we set up above. 

We can then import the `rootReducer` in the entry point of our application, `index.js`:

```javascript
import rootReducer from './reducers/rootReducer';
```

We are now actually ready to create the store by passing `createStore` from the `redux` module the `rootReducer` we exported as the default export from `rootReducer.js` and imported as `rootReducer` in `index.js`:

```javascript
const theStore = createStore(rootReducer);
```

Since the `Provider` is the glue between Redux and React, we need to use its `store` prop and give it the value of `theStore` we created above:

```javascript
ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Wiring up Redux (just the necessary pieces with comments)

After creating our React application using `create-react-app`, we should do the following:

```BASH
npm i redux react-redux
```

Then create a `reducers` folder inside of the `src` folder and make two files:

1. `frozen.js` (this is a dummy reducer)
2. `rootReducer.js` (this will be the `rootReducer`; in other codebases you will often see this simply as `index.js`)

To get everything wired up after running `create-react-app` and creating the two files above, our files should look as follows (comments provided to make things easier for reference):

<details><summary> <code>index.js</code> (the top-level index that renders <code>App</code> by default) </summary>

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1. In order to wire up a Redux/React application:
// - We need react-redux so that React and Redux can communicate with each other. We also need redux because react-redux will be useless without redux!
// - We need the Provider component to be around everything or "bear hug" the application. // - So you can start in the terminal with "npm i redux react-redux" and then import the Provider component:

import { Provider } from 'react-redux';

// 2. Create the redux store so that redux exists and the Provider has a store to work with:

import { createStore } from 'redux';

// 3. Provide/create individual reducers to populate the store. All of these reducers will be provided to the store as a single reducer known as rootReducer that may be thought of as the "store manager"

import rootReducer from './reducers/rootReducer';

// 4. Create the store by instantiating a variable with a value equal to the following: createStore(rootReducer):

const theStore = createStore(rootReducer);

// 5. Provider is the glue between React and Redux. Pass the store you created above as the value for Provider's store prop:

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

</details>

<details><summary> <code>rootReducer.js</code></summary>

```javascript
// This is the root reducer! It is the store manager for all the reducers.
// To make a rootReducer:

// 1. Get a method from redux called combineReducers:

import { combineReducers } from 'redux';

// 2. Get each individual reducer:

import frozenReducer from './frozen';
// ... import all the other reducers here ...

// 3. Call combineReducers and hand it an object. 
// - Each key in combineReducers will be a piece of state in the redux store. 
// - Each value will be a reducer, and that reducer will return a piece of state (so each value will be the value of that piece of state in the redux store)

const rootReducer = combineReducers({
  frozen: frozenReducer
})

export default rootReducer;
```

</details>

<details><summary> <code>frozen.js</code></summary>

```javascript
// This is just a dummy reducer!

export default (state = [], action) => {
  return state;
}

// Below is the syntax one would use to avoid ES6+

// function frozen(state = [], action) {
//   return state;
// }

// export default frozen;
```

</details>

That is all that is needed to get things wired up. Of course, nothing is really happening just yet (note how currently `rootReducer` is purely Redux while any component we would normally make is purely React ... we need some way of CONNECTing these ... covered in the next note), but that's what all is needed to get the show on the road as it were.

### CONNECTing Redux and React

We are now going to actually connect what is in our Redux store with an actual component (what good is state in the Redux store unless our components can actually use the state!?). So to recap where we ended previously: 

We have the `Provider`, and the `Provider` has access to `theStore`, where `theStore` is made up of the `rootReducer`, where the `rootReducer` is made up of a bunch of little reducers, and each one of those little reducers returns a piece of state. So the `rootReducer` is the manager of the store. (The store is like an empty building if it doesn't have any reducers.) The `rootReducer` doesn't return any state on its own--it simply collects all the individual reducers. Continuing our metaphor, each individual reducer is like a department in a grocery store. In this case we have the `frozen` department. So we have at least one department for the manager (i.e., the `rootReducer`) to manage. And the manager can hand that to the store. Per our analogy, we currently have a store with just one department in it, the `frozen` department, but we'll add some more departments in just a bit. 

With everything as it currently is in the codebase described previously, we can create a `FrozenDept` component (in a `components` folder inside of the `src` folder) that will connect to and make use of the Redux store (there are a *bunch* of comments in the file below; the next note seeks to condense things a bit):

<details><summary> <code>FrozenDept.jsx</code></summary>

```javascript
import React, { Component } from 'react';

/* Connecting this component with Redux
  - This is the part now where we want to grab from the Redux store a piece of state. So this is that application state kind of thing, where we have a component, FrozenDept, and rather than the component managing the state itself, it's being managed inside of Redux. So ANY COMPONENT can grab it. This is not a practical example that follows because we only have a tiny application, which you would never use Redux for, but it will be useful to see how to finish wiring things up so that we can finish connecting Redux and React so that a component can get something out of the Redux store.
  - We want this component to know about Redux. To do that, we need some help...or some glue.
  - The glue is react-redux! We need the connect function. So we needed Provider up top in order to get everything started, but at the component-level what we need is a connection from React to Redux.
  - If a component needs to know about Redux, then this is what we are going to use EVERY SINGLE TIME: import { connect } from 'react-redux';
  - The export from a component will be a dead giveaway in terms of whether or not you are using Redux. You will not be exporting the default component anymore. Instead, you are going to export default the connect with the component
*/

import { connect } from 'react-redux';

class FrozenDept extends Component {
  state = {

  }

  render() {
    console.log(this.props.frozenData);
    /* What we have managed to accomplish when the above works and reaches into the Redux store:
      - If we go back to App.js, then we see we only call <FrozenDept /> and do not pass props as we normally might: <FrozenDept frozenData={} />
      - Instead of the parent sending down frozenData as props, we are reaching into the Redux store via mapStateToProps and we're mapping a piece of state in the Redux store, namely "frozen" (whose state value is the value returned by the frozenReducer), to this component's props. Even though we only reached out to grab the "frozen" piece of state, we can easily imagine grabbing more than just this one piece of state.
      - We have the "frozen" piece of state from the Redux store mapped to this component as a prop which we locally call "frozenData". This piece of state that has been mapped to this component as a prop can now be accessed using this.props.frozenData or whatever we choose to call this piece of state locally.
      - "export default connect(mapStateToProps)(FrozenDept);" is the Redux part. What we are saying is let's set up a function, mapStateToProps, and go and fetch something from the Redux store, and then let's hand it to the component, FrozenDept.
    */
    
    return (
      <h1>The frozen food department!</h1>
    );
  }
}

// console.log(connect);

/* mapStateToProps (how it works):
  - mapStateToProps takes one argument, "state", and that is the rootReducer/Store
  - mapStateToProps returns an object with:
    + property is the local prop name to this component (so whatever we put on the left is what this component is going to know that thing as)
    + the value will be the property in the rootReducer, that is, a piece of the store
  - We want to return an object and we need one of the properties of the rootReducer. What are the properties of the rootReducer? Well, we've only got one for this example and it is "frozen". So as far as connect is concerned we can return something, and we can call it anything we want--we're going to call it frozenData below.
  - So we've got a function, mapStateToProps, which returns an object, where we are creating a local property, frozenData, to this component that is not being sent down from a parent--it's coming from connect, which is getting it from the store. What does the store have? Well, the store or the rootReducer IS state. What properties do we have as options right now? Well, we only have one right now, namely "frozen" so if we use state.frozen then we are going to get the return value of frozenReducer. What is the return value of frozenReducer? It will be state. What is state? Right now it's always going to be an empty array but not for long.
  - RECAP: mapStateToProps takes state as its argument, where state is the rootReducer. The rootReducer has a property of frozen. We're going to map that state to this component's props, and that prop is going to be called frozenData.
*/

function mapStateToProps(state) {
  return {
    frozenData: state.frozen
  }
}

// export default FrozenDept;
export default connect(mapStateToProps)(FrozenDept);

/* What's happening with connect:
  - connect, somewhere inside of redux, is returning a function
  - The function that connect returns takes an argument which is the component we want to render
*/

/* What connect take as arguments:
  - We can find out by simply running console.log(connect) above.
  - First arg: The first argument is going to map a piece of redux state to this component's props and is going to be called mapStateToProps
*/


/* If the above syntax looks funky, then try to make sense of something like x(1)(2) in JS:  

  function x(n) {
    return (m) => {
      console.log(n+m);
    }
  }

  x(1)(2) // 3

*/

/* NOTES: 
  - Right now this may seem weird and not particularly useful. Why would anyone do this? We still need a bigger project to really make this whole thing shine. But everything above covers this portion of actually connecting React to Redux.
  - Soon we will get an action creator and an action going that will actually give us the ability to update our state. (And we can add a couple more reducers.)
*/

```

</details>

### The absolute most basic use of Redux (no action creator, action, or dispatch just yet)

Consider the following files that outline setting up the absolute most basic use of Redux where we fetch a piece of state from the store in a component (more things will be added soon, but right now we are trying to wrap our heads around the set up; each file's contents will then be remarked on).

`index.js`: This is the entry point for our application and where we render something (typically just the `App` component if we are not using Redux) to the DOM inside of `<div id='root'></div>` in `index.html`. With Redux, however, we want *everything* inside of our `App`lication to be `Provide`d access to the Redux store, but React and Redux don't know anything about each other so we have to *connect* them by means of the `Provider` component from the `react-redux` module. What Redux store are we trying to `Provide` React access to? None unless we actually `createStore` inside of Redux. What is a Redux store comprised or made of? A bunch of reducer functions that individually return tiny pieces of state, where all of the state pieces together collectively make up the store. Hence, `createStore` should create the store by means of *all* of the reducers. Where do all of the reducers live? In the `rootReducer` function from `rootReducer.js` (remarked on more in a later point below). In any case, we create the store by means of a single *master* or *root* reducer that has every single reducer bundled inside of it. Once all of this is done, we can supply the `Provider` component with the created store by means of the `store` prop on the `Provider`:

```javascript
// /src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const theStore = createStore(rootReducer);

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

`App.js`: This is the top component in our component tree (just below the entry point for our application, `index.js`) under which all other components will live. In this basic example, all we want to do is use a component that tries to make use of Redux; thus, for right now at least, `App` will look much as it has before:

```javascript
// /src/App.js
import React from 'react';
import './App.css';

import FrozenDept from './components/FrozenDept/FrozenDept.component';

function App() {
  return (
    <div className="App">
      <FrozenDept />
    </div>
  );
}

export default App;
```

`frozen.js`: In order to not have a completely meaningless, empty store, we need to have at least one reducer that returns a piece of state to live in the store. Below is the absolute most basic reducer you could have--right now it is rather pointless because all it will do is return the default seed data we hand it (sometimes you may want to use a default value of an empty array `[]` or an empty object `{}` or empty string `''`, etc.). But as we will see, you can initialize state in different reducers in helpful ways and often the body of the reducer will have a bunch (or a little) logic to run based on the `type` of the `action` it takes in. But for right now, we will simply have a default state value of some piddly seed data so we at least have *something* to work with:

```javascript
// /src/reducers/frozen.js
const seedData = ['TV Dinners', 'Frozen Veggies', 'Frozen Pizzas'];

export default (state = seedData, action) => {
  return state;
}
```

`rootReducer.js`: When creating and providing the store in `index.js`, we pondered what it actually meant to create the store. What is the store comprised or made of? We know the store consists of a bunch of pieces of state returned from a bunch of individual reducers. But how do we bundle together the pieces of state being returned by the reducers and the reducers themselves? Furthermore, where do the reducers actually live? Well, typically, the reducers will live in a "reducers" folder/directory. As for how we bundle together or combine all of the reducers in order to create the store, we make a *root* or *master* reducer whose sole job is to combine all of the reducers (sometimes people export the root reducer from `index.js` in the `reducers` directory, but we will export the root reducer from `rootReducer.js` to make everything abundantly clear); specifically, we import the `combineReducers` function from the `redux` module, a function that expects a single object, an object that literally consists of key-value pairs where the key *represents* the piece of state being returned by an individual reducer and the value is the individual reducer itself. This may sound confusing at first, but it should make sense upon reflection: since the reducer *returns* a piece of state, essentially what we have is the `key` as the name or label of what we want to call a piece of state being returned by a reducer and the `value` for this key as the reducer itself since the reducer actually returns a piece of state (i.e., the value associated with the key should really not be thought of so much as the reducer itself but the *return value* of the reducer, namely the piece of state being returned; thus, whenever we reference the key, we are getting the value of the reducer associated with it). More concretely, below what we are effectively saying is, "Hey, the `frozenReducer` reducer function returns a piece of state and I want the return value of this function (i.e., the piece of state) to be referenced as `frozen`." As our application grows and we make more use of Redux, our `rootReducer` will grow and grow as we dump more and more into the `combineReducers` function, namely individual pieces of state (i.e., the `value` which comes from the return value of the reducer we are calling) we can reference by name (i.e., the `key`): 

```javascript
// /src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import frozenReducer from './frozen';

const stateLabelsAndReducersReturningState = {
  frozen: frozenReducer
}

const rootReducer = combineReducers(stateLabelsAndReducersReturningState);

export default rootReducer;
```

`FrozenDept.component.jsx` (this file not will require more extensive commentary): This is the component that will use Redux for right now (more will be added to this component later and we will create additional components as well). How can we get this component to actually use Redux? We need some glue. We need some way of *connecting* Redux and React in this component and the `connect` function from `react-redux` is what we will use to accomplish this. We can actually take a look at the `connect` function by inspecting the `react-redux` node module: 

```
node_modules -> react-redux -> lib -> connect -> connect.js
```

What we find is a lot of rather complicated code that is reproduced on click below.

<details><summary> <code>connect.js</code></summary>

```javascript
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createConnect = createConnect;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _connectAdvanced = _interopRequireDefault(require("../components/connectAdvanced"));

var _shallowEqual = _interopRequireDefault(require("../utils/shallowEqual"));

var _mapDispatchToProps = _interopRequireDefault(require("./mapDispatchToProps"));

var _mapStateToProps = _interopRequireDefault(require("./mapStateToProps"));

var _mergeProps = _interopRequireDefault(require("./mergeProps"));

var _selectorFactory = _interopRequireDefault(require("./selectorFactory"));

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */
function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _connectAdvanced["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _shallowEqual["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _shallowEqual["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _shallowEqual["default"] : _ref3$areMergedPropsE,
        extraOptions = (0, _objectWithoutPropertiesLoose2["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);
    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, (0, _extends2["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}

var _default =
/*#__PURE__*/
createConnect();

exports["default"] = _default;
```

</details>

If you take a look at the contents of the file above, then what you will see is that `_default` is being exported where `var _default = createConnect();`. What is the return value of `createConnect()`? It is the following: 

```javascript
return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) { ... }
```

So the `connect` function expects a few arguments even though only `mapStateToProps` is required (we will remark more extensively on `mapStateToProps` and `mapDispatchToProps`, as these will be what are most often used). Worth noting, however, is the `connect` itself returns a function:

```javascript
return connectHOC(selectorFactory, ...);
```

For right now, we can simply read this as, "The `connect` function expects a *component* to actually connect to the Redux store." But just because our component can be *connected* to the Redux store doesn't mean we are actually "subscribed" to the Redux store where we can pull state from it. Also, just because we are connected to the store doesn't mean we can "publish" to it. This is where `mapStateToProps` and `mapDispatchToProps` come in:

- `mapStateToProps`: This is how we will *subscribe* to the store and pull out from it whatever state we need or want to know about. Redux will literally map the application state (i.e., the state in the Redux store) to this component's props.
- `mapDispatchToProps`: This is how we will *publish* to the store and update the state. We still have a way to go before adding the dispatch because we will need action creators and actions that reducers can use to actually update the store. 

Here is what the basic component will look like momentarily:

```javascript
// /src/components/FrozenDept/FrozenDept.component.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';

class FrozenDept extends Component {
  state = {};

  render() {
    console.log(this.props.localNameForStateFromRootReducer);
    return <h1>The frozen food department!</h1>;
  }
}

function mapStateToProps(state) {
  return {
    localNameForStateFromRootReducer: state.frozen,
  };
}

export default connect(mapStateToProps)(FrozenDept);
```

Recap:

- **Connect** (i.e., `import { connect } from 'react-redux';`):
  + We want this component to know about Redux. To do that, we need some help...or some glue.
  + The glue is `react-redux`! We need the `connect` function. So we needed `Provider` up top in `index.js` in order to get everything started, but at the component-level what we need is a connection from React to Redux.
  + If a component needs to know about Redux, then this is what we are going to use EVERY SINGLE TIME: `import { connect } from 'react-redux';`.
  + The export from a component will be a dead giveaway in terms of whether or not you are using Redux. You will not be exporting the default component anymore. Instead, you are going to export default the connect with the component: `export default connect(mapStateToProps)(FrozenDept);`
- **mapStateToProps**
  + `mapStateToProps` takes one argument, `state`, and that represents everything inside of the Redux store (i.e., the entire object fed to `combineReducers` in the root reducer). 
  + `mapStateToProps` returns an object of key-value pairs where the keys and values represent the following:
    * `key`: The local prop name to be used in the calling component. Whatever name is used is how *this* component will locally refer to a piece of state from the Redux store. 
    * `value`: `state.NAME` where `NAME` exists in the `rootReducer` as a key whose value is a piece of state being returned by a reducer. 
    * Concrete illustration in the context of this component: The `mapStateToProps` function in this component brings in `state` as its single argument and returns an object (this object only has one key-value pair right now, but in the future you may have many more). This object has a key of `localNameForStateFromRootReducer`, and we should note that we can use whatever name makes sense. In this example, a better key might be something like `frozenData`. Regardless, what name we use as the key is how we will locally refer to this piece of application state from within our component (e.g., `this.props.localNameForStateFromRootReducer`). The *value* for this key needs to reflect what is in our `rootReducer`; specifically, in our `rootReducer` we have a key name of `frozen` that points to the return value of the `frozenReducer`. With `function mapStateToProps(state) { ... }`, the `state` argument represents the store or the object fed to `combineReducers` in the `rootReducer`. Since that object has a key of `frozen` whose value is `frozenReducer`, we can refer to this value or piece of state being returned from `frozenReducer` via `state.frozen`. 
   + So we've got a function, `mapStateToProps`, which returns an object, where we are creating a local property, `localNameForStateFromRootReducer`, to this component that is *not* being sent down from a parent--it's coming from `connect`, which is getting it from the Redux store. What does the store have? Well, the store or the `rootReducer` IS application state. What properties do we have as options right now? Well, we only have one right now, namely `frozen`--so if we use `state.frozen` then we are going to get the return value of `frozenReducer`. What is the return value of `frozenReducer`? It will be state. What is state? Right now it's always going to be the `seedData` array we defined for default state (or an empty array if that is the default) but not for long.
  + SUMMARY: `mapStateToProps` takes `state` as its argument, where `state` is the `rootReducer`. The `rootReducer` has a property of `frozen`. We're going to map that state to this component's props, and that prop is going to be called localNameForStateFromRootReducer.
- **this.props.localNameForStateFromRootReducer**
  + If we go back to `App.js`, then we see we only call `<FrozenDept />` and do not pass props as we normally might (e.g., `<FrozenDept frozenData={} />`). 
  + Instead of the parent sending down `frozenData` as props, we are reaching into the Redux store via `mapStateToProps` and we're mapping a piece of state in the Redux store, namely `frozen` (whose state value is the value returned by the `frozenReducer`), to this component's props. Even though we only reached out to grab the `frozen` piece of state, we can easily imagine grabbing more than just this one piece of state.
  + We have the `frozen` piece of state from the Redux store mapped to this component as a prop which we locally call `localNameForStateFromRootReducer`. This piece of state that has been mapped to this component as a prop can now be accessed using `this.props.localNameForStateFromRootReducer` or whatever we choose to call this piece of state locally.
  + `export default connect(mapStateToProps)(FrozenDept);` is the Redux part. What we are saying is let's set up a function, `mapStateToProps`, and go and fetch something from the Redux store, and then let's hand it to the component, `FrozenDept`.

### Adding more reducers to our store

Before we take a look at action creators and the dispatch (because that tends to be the most confusing part), we are going to add a couple more reducers and get them into our application. 

One thing to note about naming conventions: It is often not a bad idea to name your reducers `<reducer-name>Reducer.js`. It just gets easier to track things. For example, instead of `frozen.js` in our `reducers` folder, we can rename this as `frozenReducer.js` to make it abundantly clear.

Note that *every* time you add a reducer you have to go to the `rootReducer`, import the new reducer(s), and then specify in the `combineReducers` what you want the little piece of state being returned by the reducer to be called (what you have called this piece of state will be a new key, and the reducer itself will be the value for this key). For example, say we start with

```javascript
import { combineReducers } from 'redux';

import frozenReducer from './frozenReducer';

const rootReducer = combineReducers({
  frozen: frozenReducer
})

export default rootReducer;
```

as our `rootReducer.js` file. Then, after writing two new reducers, `produceReducer` and `meatReducer`, we might want to have something like the following:

```javascript
import { combineReducers } from 'redux';

import frozenReducer from './frozenReducer';
import produceReducer from './produceReducer';
import meatReducer from './meatReducer';

const rootReducer = combineReducers({
  frozen: frozenReducer,
  produce: produceReducer,
  meat: meatReducer
})

export default rootReducer;
```

Note how the new reducers `produceReducer` and `meatReducer` have been imported, and we have called the pieces of state they return in `combineReducers` as `produce` and `meat`, respectively. Then, in whatever component we want to access these new pieces of state we can update our `mapStateToProps`:

```javascript
function mapStateToProps(state) {
  return {
    frozenData: state.frozen
  }
}
```

becomes

```javascript
function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
    meatData: state.meat,
    // only add in here what you want access to--so maybe we don't need access to the produceData
    // produceData: state.produce
  }
}
```

So this is the beauty of Redux. Any time new data is added to the store, any component can have access to it almost instantly. You just have to drop the one line into `mapStateToProps` and suddenly it's accessible. Above, we started with just access to the `frozen` piece of state from the store by accessing it as a prop (hence `mapStateToProps`) and locally calling it `frozenData`. But now maybe we want to access the `meat` piece of state from the store. No problem. Just drop `meatData: state.meat` into the `mapStateToProps` function.

This gives us a ton of flexibility. No longer do we have to rearchitect our entire application by moving state up and creating callbacks at the appropriate level and so on. So this is a huge win.

### Adding an action creator and action

We can *start* to see some of the power of Redux now, namely we do not have to rearchitect our entire application to let components know about different pieces of application state. But all of this is kind of pointless if the state is static. After all, the idea behind state implies some sort of dynamic value. We need to be able to *update* state for Redux to truly be useful. So the question now becomes: How do we update application state (i.e., the store) in Redux? In the context of what we have been doing so far: How do we update the quantity of the different food items? For example, we might want a plus/minus button for "TV Dinners" from the `frozen` state mentioned previously to update the quantity (or we might want to be able to update the quantity for food from any department). In all cases, essentially what we are trying to do is update the state or the store. 

Thus far, we have only interacted with the store and reducers via `mapStateToProps` simply to *get* stuff from the store. But now we want to actually *update* the store. How do we do that? What is the store made of again? The store is made up of a bunch of pieces of state, all of which are returned by individual reducers. Hence, in order to change or update the store, we are going to need to change the reducers. And in order to change the reducers we have `mapDispatchToProps`. 

Recall that the `connect` function from `react-redux` can take more than just the `mapStateToProps` function--it can also take a `mapDispatchToProps` function. But what should the `mapDispatchToProps` function look like and what does it do exactly? The answer behind this is where the increased complexity comes in. We are going to have to not only define a `mapDispatchToProps` function, but we will need to make action creators as well as actions for reducers to receive in order for the `dispatch` from `mapDispatchToProps` to be of any use. The `mapDispatchToProps` function, in its skeletal form, will look as follows: 

```javascript
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    // ...
  }, dispatch)
}
```

Note the use of `bindActionCreators` which comes from the `redux` module (you will need to `import { bindActionCreators } from 'redux';` at the top of your component). Basically, the `dispatch` will take an action and will send it up to each individual reducer (the `type` of the action is how the reducer will decide whether or not the action is of any importance). Actions, however, are created by action creators. For example:

```javascript
export default (operation, index) => {
  return {
    type: 'updateMeat',
    payload: {
      operation,
      index
    }
  }
}
```

Here, the function being exported is the action creator (which expects two arguments, namely `operation` and `index`) while the action itself is what the function returns:

```javascript
{
  type: 'updateMeat',
  payload: {
    operation,
    index
  }
}
```

Note from the above that action creators are just functions. We are now going to make a couple of action creators with a couple of actions. Often you will do this by creating an `actions` folder inside of the `src` folder for your application. Ultimately, what we really want to do is connect our action creator to our component and then send the action that the action creator returns on through the dispatcher so that all the reducers can get notified (this will be much clearer soon). 

There's considerably more going on here! We will walk through all of the steps of actually adding the dispatcher and wiring everything up in the next note.

### Adding the dispatcher

We are now going to connect the dispatcher to our components. We'll start with just using examples as they relate to everything "frozen".

We have the `FrozenDept` component that uses Redux state:

```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateFrozen from '../../actions/frozenInvUpdate';
import { bindActionCreators } from 'redux';

class FrozenDept extends Component {
  state = {};

  increment = (operation, index) => {
    this.props.updateFrozenInv(operation, index)
  }

  render() {
    const { frozenData } = this.props;
    const frozenInventory = frozenData.map((item, i) => (
      <div key={i}>
        <li>{item.food}: {item.quantity}</li>
        <input type="button" onClick={() => this.increment('+', i)} value='+' />
        <input type="button" onClick={() => this.increment('-', i)} value='-' />
      </div>
    ))
    return (
      <div>
        <h1>The frozen food department!</h1>
        <ul>
          {frozenInventory}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    frozenData: state.frozen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateFrozenInv: updateFrozen
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);
```

We've got `frozenInvUpdate.js` which exports the action creator that the `FrozenDept` component is going to want to run if the `increment` function runs in our example:

```javascript
export default (operation, index) => {
  return {
    type: 'updateFrozen',
    payload: {
      operation,
      index
    }
  }
}
```

And the `frozenReducer` is the reducer that returns the state inside of Redux that's informing the `FrozenDept` component:

```javascript
const seedData = [
  {
    food: 'TV Dinners',
    quantity: 10
  },
  {
    food: 'Frozen Veggies',
    quantity: 21
  },
  {
    food: 'Frozen Pizzas',
    quantity: 25
  }
];

export default (state = seedData, action) => {
  // run a bunch of logic if the action has the type we are interested in
  if (action.type === 'updateFrozen') {
    const {operation, index} = action.payload;
    const newState = [...state];
  
    switch(operation) {
      case '+':
        newState[index].quantity++;
        return newState;
      case '-':
        newState[index].quantity--;
        return newState;
      default:
        return state;
    }
  }
  // if the action does not have a type we are interested in, then just return state
  return state;
}
```

This is where everything can get really confusing. There's just a lot going on here because we are attaching absolutely everything now. But soon we will know almost everything that we need to know about Redux with respect to React. There will hardly be anything else that you ever need to do. It's just going to be JS and logic and whatnot. But you'll know all of the moving parts necessary to make Redux work seamlessly with React.

Now, instead of just having a `type` for the action you return from your action creator, you will often want to have a `payload` to update the state in the Redux store. This is the most common object you will pass in Redux, an object with a `type` and a `payload`. You have to have a `type` because we are dealing with an action and what a reducer does *depends on the action type*. And then the other thing you'll usually have is the `payload`, and the payload just contains data or stuff that comes along with the particular type we specify. So you might see something like what we had above for an action creator:

```javascript
export default (operation, index) => {
  return {
    type: 'updateFrozen',
    payload: {
      operation,
      index
    }
  }
}
```

This is great, but we still do not have any connection to Redux. Let's go back to the diagram:

<p align='center'>
  <img width='600px' src='https://user-images.githubusercontent.com/73953353/99928871-a8d21900-2d10-11eb-8a3e-cda1555e9e04.png' />
</p>


This is all Redux stuff. The `FrozenDept` component has no idea that any of this stuff exists. React doesn't know about any of this stuff. React is running a function that has an action, but it's not connected to the dispatch in any way. So we do technically have the action creator and the action it is returning, but it's not really a part of Redux because right now it will never get to a reducer, and reducers make up the aggregate state in the store which is the whole point of Redux. What we need to do is make it so that the component can call the action creator, but we need to change it so that when we call `updateFrozen` it goes to the dispatch. And then from the dispatch it will go to each reducer. That way the reducer can update itself, update the store, and then inside of our `FrozenDept` component, where we are mapping through `frozenData` from the Redux store, we'll be mapping through a new, updated thing, a new piece of state from the Redux store that has been updated by a reducer(s) which has been updated by a dispatcher(s) which was sent an action from an action creator. 

We can do something like the following to see some of the innerworkings of Redux (this will run as soon as we fire off or start up our application):

```javascript
export default (state = seedData, action) => {
  console.log('Frozen reducer is running!');
  console.log(action);
  return state;
}
```

The actions we would see by default are the ones that Redux core runs and passes to the dispatch, something like the following:

```javascript
{ type: "@@redux/PROBE_UNKNOWN_ACTION0.f.w.k.m" }
```

Now we don't care about these actions. But this is how the dispatcher works. We do care about *our* actions however. We want to make it so we can attach *our* action creators to the same dispatch Redux core uses so that all of our reducers can get notified and will update if they need to. So in our case we want to connect our `updateFrozen` action creator to the dispatch. 

How are we going to do this? Well, from before, recall what we got when we looked at the `connect` function from the `react-redux` module. We got something like the following:

```javascript
connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) { ... }
```

We have already experienced and used `mapStateToProps` which allowed us to grab from any component any pieces of state we wanted from the Redux store as props. We will now focus on `mapDispatchToProps`. And it's going to do exactly the same thing that `mapStateToProps` did, where we have something like `this.props.frozenData` which is mapped to the Redux store: 

```javascript
function mapStateToProps(state) {
  return {
    frozenData: state.frozen
  }
}
```

We are about to make a `this.props.updateFrozen` and we're going to map it to the dispatch (this is how we are going to connect the two--we are going to go from having a component that doesn't know about any of the Redux stuff to a component that can pass the function to the dispatcher which will notify each reducer):

Here are some notes about the `default export` from a component when we are using Redux:

- Normal component export when using React:
  + `export default FrozenDept;`
- When applicable (state doesn't need to be updated in the store), just supply `mapStateToProps` as the only argument to `connect`:
  + `export default connect(mapStateToProps)(FrozenDept);`
- When applicable (state DOES need to be updated in the store), supply both `mapStateToProps` as well as `mapDispatchToProps` to `connect` in that order:
  + `export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);`

The point is that now we can do `this.props.updateFrozen(operation, index)` instead of `updateFrozen(operation, index)`. And now the exact same code will run, BUT it will go to the dispatch. And because it goes to the dispatch, it will go to every single reducer. The difference from before when Redux core was doing things by default:

<p align='center'>
  <img width='800px' src='https://user-images.githubusercontent.com/73953353/99928874-aa9bdc80-2d10-11eb-85d9-66c2cace0ebe.png' />
</p>

You can see how our `type` and `payload` will be as we specified previously, and we can see how this is sent to ALL of our reducers (we are using a `console.log` in each reducer to specify that that reducer is running).

So what's the upshot here? Well, we're bringing it home. This is where the magic is finally going to happen. If we go to `frozenReducer`, then we can see it is getting notified by the frozen action that, "Hey, I just happened. A `type` of `updateFrozen` just happened." And not only `frozenReducer` but also the other reducers are getting notified as well. *Every* reducer gets notified when an action happens.

So in our `frozenReducer` we can modify the code to look as follows:

```javascript
export default (state = seedData, action) => {
  console.log('Frozen reducer is running!');
  console.log(action);
  if (action.type === 'updateFrozen') {
    console.log('I care about this action!');
    return state
  } else {
    return state;
  }
}
```

This code will run any time the dispatch sends an action over. (This will be true of all reducers.) Our code as specified is going to let us know that this code is running (the first `console.log` tells us what reducer fires off) and what action just happened (the second `console.log`). IF the action type equals `updateFrozen`, then we are going to tell the console from the `frozenReducer` that we care about that action and we are going to run some logic (to be filled in), and we are going to return state. But otherwise, if the action `type` is not `updateFrozen`, and it won't be on those first three actions that run by Redux core, then we are just going to return state (we won't try to update it in the store in any way). So all we need to do now is just run our logic based on what happens to update the state. We do not want to mutate state directly (just as in React when using `this.setState`) so we will create a *copy* of the state, modify that copy, and then return that copy so that the state will be updated accordingly:

```javascript
const seedData = [
  {
    food: 'TV Dinners',
    quantity: 10
  },
  {
    food: 'Frozen Veggies',
    quantity: 21
  },
  {
    food: 'Frozen Pizzas',
    quantity: 25
  }
];

export default (state = seedData, action) => {
  // run a bunch of logic if the action has the type we are interested in
  if (action.type === 'updateFrozen') {
    const {operation, index} = action.payload;
    const newState = [...state]; // make a copy of state and mutate the copy
  
    switch(operation) {
      case '+':
        newState[index].quantity++;
        return newState;
      case '-':
        newState[index].quantity--;
        return newState;
      default:
        return state;
    }
  }
  // if the action does not have a type we are interested in, then just return state
  return state;
}
```

What's happening above? We create a copy of `state` with `const newState = [...state];`. Note that `state` will start off as the `seedData` specified at the top of the `frozenReducer` file (this `seedData` will often actually be data pulled from a database or something else). Because of how the `updateFrozen` function works, we know what index we are after which is part of the `payload`, and we can modify this part of the array (the `quantity`) based on the `operation` and the `index`. We will then return `newState`. 

To summarize, IF we get the `updateFrozen` action, and the only reason we would get it is because the `frozenInvUpdate` action creator ran, and the only reason that action creator would run is because the `FrozenDept` component called `this.props.updateFrozen`, and it passed over an `operation` and an `index`.

So let's recap and look at the whole roundtrip: We've got an action (returned from the `frozenInvUpdate` action creator) that's connected to the dispatch inside of our component. When we run that code, the dispatch kicks it off to all the reducers. The `meatReducer` doesn't care. The `produceReducer` doesn't care. Ah, but the `frozenReducer` does care. So the `meatReducer` and the `produceReducer` will just return their old state, but the `frozenReducer` will make a copy of state, it updates that state with some new data, it returns that to the store, and our `FrozenDept` React component is looking at the Redux store, and it notices that, "Oh, something just changed. I had better re-render. What changed? The value of the `frozenReducer`."

So what's the upshot of all this? Well, for our application, not a whole lot, but we have access to the entire frozen department *everywhere* in our application. So we can add any feature anytime anywhere and quickly patch in to that application state instead of passing callbacks all over the place. 

### Some review

Our application right now is set up like this: At the very top we have `index.js`. That's not a component--that's where `ReactDOM` renders. Inside of `index.js`, the thing we are rendering immediately, unlike in the past, is no longer just `<App />`. It is now  the `Provider` component (which comes from `react-redux`), with `store` as a prop, wrapped around our `App` component. 

We then have our `<App />` component which branches into three components, the `<FrozenDept />`, `<MeatDept />`, and `<ProduceDept />`. So at that point everything is React/JS with the exception of `Provider` which is coming from `react-redux`--we do not yet have anything that is purely Redux (until we involve the store that is). 

Now, Redux has a store. And what we want is for our components to be able to get stuff from the store, and we also want them to be able to update the store. In order for this to happen, there are all of the other moving pieces that need to be in place. At this point it's not all too complicated. We have our component structure and one sort of odd component with `Provider` and then the store is entirely external. The tricky part comes with the rest of Redux which is the dispatch and the reducers. Getting those two things to cooperate with each other is where most of the confusion seems to come in. 

To actually make the store, we have the `rootReducer` which is just Redux, and it imports a bunch of little reducers (the `frozenReducer`, `meatReducer`, and `produceReducer` in our example). They are all just JS functions that all feed in to the `rootReducer`. The `rootReducer` is about to get passed in to the store, but right now we have three little reducers, each of them sort of like their own little department, just like a grocery store. All of them get tied together in `rootReducer`. And back in `index.js`, we grab the `rootReducer` and make the store. So the store gets created from the `rootReducer`, which is simply a combination of all the little reducers, and then we use that to build the store, and the store gets handed to the `Provider`. So the `Provider` now has the store. 

So what's the store? It's the `rootReducer`, which is just the return value of its composite reducer functions (i.e., the reducers). So this gets the store set up. In order to be able to actually use the store, we add `connect` from `react-redux` to every component that we want to know about Redux (in our case all of the components we had used `connect`). Any component that is `connect`ed can go to the store and grab *whatever* piece of state it wants. In our example, we are grabbing from the `ProduceDept` component the `produce` piece of state (or `state.produce` which we are calling `produceData` when we `mapStateToProps`) which is returned by the `produceReducer` which is part of the `rootReducer` which makes up the store. The same thing is true for the `MeatDept` component: we are grabbing the piece of state returned by `meatReducer`  which is part of the `rootReducer` which makes up the store. And we are doing the same thing with the `FrozenDept` component.

This gets us pretty much up to date with the lecture about connecting Redux and React. That's what we used `conect` for (to let any REACT component know about REDUX so the component could use state from the store as props). The second part involved needing to update the state in store which involved needing to update the reducers (since each reducer returns a piece of state). In order to update the reducers, we need a special mechanism. Redux is all about application state. It manages the state of your application, and we want a very consistent, very predictable way of updating the state of the whole application. When Redux really starts to shine is when you have multiple components all trying to change the same thing at the same time. And then you start crossing wires and things start to go heywire. That's specifically what Redux is designed to help with. 

`connect` not only gives us access to the store but also gives us the ability to use the action creators (`frozenInvUpdate`, `meatInvUpdate`, and `produceInvUpdate` in our example), and those action creators will pass up (i.e., return) to dispatch the action, where each action has a `type` property and often a `payload` property as well. All three of our action creators return actions, and we call those action creators with `connect`, and because we map those functions to the dispatcher, when the function returns its value, it will get sent to the dispatch, and the dispatch is going to send those actions to every single reducer. The reducers make a decision about whether or not they should update themselves (i.e., create a new copy of the old state, modify it in some way based on the action `type`, and then return it) or whether they should just return their old state. They return it to the `rootReducer`, and the `rootReducer` is what makes up the store. And because our components are looking at the store through `connect`, they will get notified of any change and re-render accordingly to reflect the updated pieces of state from the store used as props within the component. 

That is the whole cycle! And it is always the same. Why does it have to be so complicated and difficult? Redux is made to make the process as predictable and easy to manage as possible in the long run so that when you're troubleshooting a bug or you need to update a piece of state in some component, then it can be done in "the right way"; that is, it can be done in a very consistent, very predictable way in order to keep wires from getting crossed. 

So next we are going to add the router which will work just as it has, where the `Provider` is going to render `App` and `App` is going to render the router, and the router is going to render everything else.

### Adding the Router

We are now going to add the React Router to our application. So we've already got Redux, which has pretty much taken over our `index.js`. And while you could put the router around `App` in `index.js`, it's been Rob's experience that `index.js` can get really crowded really fast if you have both the router and all of the Redux setup in the same file because both of them are going to require more and more code. So instead of adding React Router to `index.js`, we are going to add it to `App.js`. This is Rob's convention, but there are several ways to do this; regardless of how you do it, however, you never ever want more than one router. 

So you can immediately do an `npm i react-router-dom` and then import it in your `App.js` file and wrap all of your application in the `BrowserRouter` like so (along with using `Route` to render the components we want to):

```javascript
import React from 'react';
import './App.css';
import FrozenDept from './components/FrozenDept/FrozenDept';
import MeatDept from './components/MeatDept/MeatDept';
import ProduceDept from './components/ProduceDept/ProduceDept';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/frozen-dept" component={FrozenDept} />
        <Route path="/meat-dept" component={MeatDept} />
        <Route path="/produce-dept" component={ProduceDept} />
      </div>
    </Router>
  );
}

export default App;
```

Now we won't see anything upon the application loading because no path currently matches what we have above, but we can fix that. With a `NavBar` component: `<Route path="/" component={NavBar} />`

We want this to be present no matter where we are in our application. Note that the router is not interfering with Redux at all. It's inside of `App` which is inside of the `Provider` which has access to the Redux store. So these two are not in conflict at all.

We can then use `Link` tags within the `NavBar` to link to the appropriate paths. Why do we use `Link` tags instead of `a` tags? Because we do not want to leave the application. Then the `reacte-router-dom` module will manage the JS that will just rewrite the URL instead of actually taking us away from the application. So it will update the DOM for us without taking us away.

So, in our example, we can count up and down and change quantities for different items, then navigate to another component using the Router, hop back, and our changes are still in effect. Note that going from one component to another means we are actually mounting and unmounting, popping components in and out of the main frame of `App.js`, and when the component pops back in, it grabs the data it needs from Redux, and Redux, because it's outside of React, nothing changes. So this is really really handy.

### Getting more from Redux (clearing all the inventory)

Suppose we wanted to see the entire grocery store and the quantity of food items in each department. Furthermore, and more importantly, supposed we wanted a way to clear all the inventory and set all the food quantities back to 0. How could we do this? Normally, without Redux, this would probably be rather painful. We would need access to all of the state from each food department and we would also need to pass down callbacks from each food department in order to make it possible for their state to change. Essentially, some serious rearchitecting of our application would be involved. And who wants to do that? But with Redux it's pretty simple (relatively)!

If we want to display the sum of all the quantities of food items in each food department, then we will certainly need to read from the store all the quantities for each food item in a department; that is, we will need `mapStateToProps`:

```javascript
function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
    produceData: state.produce,
    meatData: state.meat,
  };
}
```

Since we are also going to want to *update* the store (i.e., reset the inventory for all food departments), we are definitely going to need `mapDispatchToProps`:

```javascript
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    // ???
  }, dispatch)
}
```

But what do we pass to `bindActionCreators` inside of `mapDispatchToProps`? Well, clearly an action creator of some sort, but what could we possibly use for our action creator here? It's actually quite simple: we just need an action creator with a `type` of `clearInventory` or some other message that *all* of the reducers can be on the lookout for to see if they need to clear their inventory. So the `clearInventory` action creator can be as simple as the following: 

```javascript
export default () => {
  return {
    type: 'clearInventory'
  }
}
```

Hence, our `mapDispatchToProps` can look like the following:

```javascript
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clearInventory
  }, dispatch)
}
```

We can now fire off the `clearInventory` action creator from within our component by invoking `this.props.clearInventory()`. Where should we invoke this? One very easy way would be to simply have a `button` with an `onClick` event handler and then call the action creator within the event handler:

```html
<button onClick={this.clearInventory}>Reset All Inventory</button>
```

And `clearInventory` would be a class method like this: 

```javascript
clearInventory = () => {
  this.props.clearInventory()
}
```

But so far we haven't actually *cleared* or reset any inventory. We haven't spelled out how to update the store. How do we update the store? By means of reducers. How does everything we have done so far have anything to do with our reducers? Well, when the button referenced above is clicked, what happens? It triggers an action creator that gets sent to the dispatch and the dispatch sends the action returned by the action creator to *all* of the reducers. So what remains now is simply to add conditional logic to the reducers that should care about an action with `type: 'clearInventory'`.

As an example, the `frozerReducer` might be updated as follows (along with the other reducers that need to share this logic):

```javascript
const seedData = [
  {
    food: 'TV Dinners',
    quantity: 10
  },
  {
    food: 'Frozen Veggies',
    quantity: 21
  },
  {
    food: 'Frozen Pizzas',
    quantity: 25
  }
];

export default (state = seedData, action) => {
  // run a bunch of logic if the action has the type we are interested in
  if (action.type === 'updateFrozen') {
    const {operation, index} = action.payload;
    const newState = [...state];
  
    switch(operation) {
      case '+':
        newState[index].quantity++;
        return newState;
      case '-':
        newState[index].quantity--;
        return newState;
      default:
        return state;
    } 
  } else if (action.type === 'clearInventory') {
    const newState = [...state];
    newState.forEach((foodItem) => {
      foodItem.quantity = 0;
    })
    return newState
  }
  // if the action does not have a type we are interested in, then just return state
  return state;
}
```

Notice how the only real addition was the following part:

```javascript
else if (action.type === 'clearInventory') {
  const newState = [...state];
  newState.forEach((foodItem) => {
    foodItem.quantity = 0;
  })
  return newState
}
```

This is *super awesome* because we might have an application where a single action effects 10 different reducers or even more. In this example, we just have one action (i.e., the `clearInventory` one) that effects 3 reducers. But it quickly becomes apparent just how nifty this can be. This basically gives us the ability to add features however we want in our application with simplicity and ease. Need access to some application state? Throw in `mapStateToProps` and grab what you need. Need to be able to *update* state? Throw in `mapDispatchToProps` and whatever action you intend to effect different reducers (and then update the effected reducers). 

We now have immense power over our application state from the very beginning to the maintenance phase of our software. Of course, the real question now becomes how do we do asynchronous things with Redux? Because that is where the true power will be unleashed (e.g., grabbing from databases, making API calls, etc.). We will look at asynchronous action creators next.

In summary, our `Main` component just remarked on might look as follows:

```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clearInventory from '../../actions/clearInventory';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clearInventory = () => {
    this.props.clearInventory()
  }

  render() {
    const { frozenData, meatData, produceData } = this.props;

    return (
      <div>
        <h1>Quantity of items in Frozen Department: {sumInventory(frozenData)}</h1>
        <h1>Quantity of items in Meat Department: {sumInventory(meatData)}</h1>
        <h1>Quantity of items in Produce Department: {sumInventory(produceData)}</h1>
        <button onClick={this.clearInventory}>Reset All Inventory</button>
      </div>
    );
  }
}

function sumInventory(foodDept) {
  return foodDept.reduce((acc, foodItem) => {
    return acc + foodItem.quantity;
  }, 0)
}

function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
    produceData: state.produce,
    meatData: state.meat,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clearInventory
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
```

## Redux Middleware (asynchronous action creators!)

### Introduction

What is middleware in Redux? If we think about it, what we have seen so far does not involve anything asynchronous; that is, all of our action creators thus far have sent a very simple action (like `clearInventory`) or an action that had a payload that included some information supplied by an event triggered by the user (e.g., the `increment` function that supplied an operation and an index). But what if we wanted to update the store with something that involved asynchronous work (e.g., pulling from a database, making an AJAX call, etc.)? 

As [the docs](https://redux.js.org/advanced/middleware) note concerning middleware, if you've used server-side libraries like Express, then you are already at least familiar with the *concept* of middleware. As they note: "In these frameworks, middleware is some code you can put between the framework receiving a request, and the framework generating a response. For example, Express or Koa middleware may add CORS headers, logging, compression, and more. The best feature of middleware is that it's composable in a chain. You can use multiple independent third-party middleware in a single project." The concept of middleware in server-side libraries makes complete sense--we'd like to have a way to patch into the process between receiving a request and sending a response so we could package together as good a response as possible based on what we think the user wants. The concept of middleware is similar in Redux except instead of patching into what goes on between receiving a request and sending a response on a server, we will instead patch into what goes on between dispatching or sending an action and the moment it reaches the reducer (i.e., before the reducer receives the action). 

Think of it like this: 

- Express: `receive request -> MIDDLEWARE -> send response`
- Redux: `dispatch action -> MIDDLEWARE -> (reducer) receives action`

The docs further note that people often use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, etc. 

The basic point is that Redux middleware is absolutely critical to being able to use Redux with React; otherwise, you greatly limit the power of Redux. 

### Review of reducers, actions, action creators, and where we are headed now

First of all, we have React. Often we will use `create-react-app`, and this will give us a ton of pre-loaded stuff to help us out. In particular, we have `index.js` as the entry point to our application, and within `index.js` we render the `App` component, where `App` turns around and renders whatever it needs to render. 

On the other side, we now have Redux. And Redux is not related to React at all. They're totally separate and do not know about each other at all. And Redux is primarily this thing called the store, where state is managed. That is, one big object is maintained inside of that store, and the store is informed by individual functions each of which returns a piece of state. These individual functions are called reducers. Each one of these reducers is in charge of managing a piece of Redux state. 

In order to get our React application to be able to talk with Redux, we had the `react-redux` module as the middleman. This module gives us the `Provider` component, and it also gave us the `connect` function. And the `Provider` component is rendered by `index.js`:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from ''
import { Provider } from 'react-redux';
import {createStore} from 'redux';

const theStore = createStore(rootReducer);

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

So `index.js` grabs the `Provider` component, and then the `Provider` component bear-hugs the `App` component so that everything within `App` has access to all the Redux goodies. For any component that needs access to Redux, we export such a component with the `connect` function. And because we use the `connect` function, this gives us access to the Redux store. So `Provider` makes it *possible* for our components to connect to the store, and invoking the `connect` function with our component activates this possible connection. Hence, essentially, a component can *subscribe* to things that are happening in the store via `connect`. For example, via `mapStateToProps`, our component can subscribe to a piece of state or several pieces of state from the Redux store so that any time something happens inside of Redux, our component will get notified and rerendered with the new prop (remember that React will always rerender a component when it receives new state or new props; since Redux gives us state from the store as `props` via `mapStateToProps`, any piece of state that changes in the Redux store to which our component is subscribed effectively causes a rerender of the subscribed component because the state change in Redux is registered as a component prop change in React). All of this happens through `mapStateToProps` which is passed to `connect`.

The difficult and somewhat confusing part arises when we try to *publish* to the store (i.e., when we try to update state in the store). The wiring up for all of this is rather involved (i.e., making action creators, specifying what `type` of action is returned and the `payload` if applicable, modifying appropriate reducers to listen for relevant `type`s of actions, and then using `mapDispatchToProps` to bring in the relevant action creators we want access to). An action creator, just like a reducer, is nothing more than a regular JavaScript function. And action creators return actions, where an action *must* be an object with at least a `type` property. So the action creator is the function itself, and the action is the object that the function returns. Of course, we don't write them this way out of the box--we write them as regular JavaScript functions. Our action creators really aren't action creators until we had them to `bindActionCreators` from the `redux` module. Recall the example when clearing the food department inventory:

```javascript
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clearInventory
  }, dispatch)
}
```

This is something we do with *all* of our actions; that is, any time we have a `mapDispatchToProps`, we first run our action creators through `bindActionCreators`. That is what takes our action creators from being regular JavaScript functions to being effective action creators that Redux can use.

The other thing we did was we ran our action creators through `connect` by sending them through `mapDispatchToProps`:

```javascript
export default connect(mapStateToProps, mapDispatchToProps)(Main);
```

So the action creators go via `connect` and can be called by our component via `this.props.clearInventory()`. So we can initiate our action creator function from our component through `connect` and because we mapped our action creator to the `dispatch`, once the action creator has returned its action, the action is going to get sent to the `dispatch`, and then the `dispatch` takes the action object returned from the action creator and sends it out to *all* of the reducers. It notifies all of them. The reducers then decide whether or not they want to update, and then they send their information back to the store. 

That is the basic review for all of the moving pieces that go into a React application that uses Redux. We have the glue in the middle (i.e., `react-redux`) that allows React and Redux to communicate. Our React components work as they always have, but since we run them through `connect` from `react-redux`, they're able to grab pieces of state out of the Redux store, and they're able to run action creators that will run through the dispatch when they return their action, and then the store will get updated.

We can simplify this a bit down by just focusing on the Redux part. We've got the store, and each individual reducer informs the store via an individual returned piece of state. And somehow one of our components has called one of our action creators which is just a regular function that returns an object, and that object is going to get sent to the `dispatch`, and the `dispatch` is going to let all the individual reducers know that that action happened and that they can decide to update or not. Meanwhile, any component that has subscribed to the store (or listening to a piece of state) will get notified if and when something happens to the piece of state to which it is subscribed. So the action creator gets called, the action gets returned to the `dispatch`, the `dispatch` informs each reducer, the reducers decide whether to update themselves or not but either way always return some piece of state, and then the components that are subscribed get updated if there is any update to the piece of state to which they are subscribed. 

And here is where middleware comes into play. There are times when we are going to want to interrupt or jump in the middle between when the `dispatch` receives the action and when the action gets sent to the reducers. So we have an action that has been dispatched, and we want to do something before it actually gets to the reducers. Something needs to happen in that process. The most obvious example of when you might want to jump in the middle of this process is when you are making an API call or some sort of asynchronous request where you need to *wait* for something momentarily. So let's say our action creator needs to fetch something from the web. So our action creator needs to make an axios request, and an axios request automatically returns a promise. So the question is whether or not we can do something *after* the axios request to inform the payload of the action that then gets sent to all of the reducers. 

### Trying axios/http without middleware

In the set up for the codebase, the crux of everything is the `fetchWeather` action creator. It may be tempting to try to do something like the following:

```javascript
import axios from 'axios';
const weatherApi = `http://api.openweathermap.org/data/2.5/weather`;
const weatherAPIkey = `6f3f23c0f1a2fcb7edee25d08cb9cf62`;
const scale = `imperial`; 

export default async (city) => {
  const weatherURL = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIkey}`;
  console.log(city);
  console.log(weatherURL);
  const response = await axios.get(weatherURL);
  return {
    type: 'cityUpdate',
    payload: response.data
  }
}
```

But no dice. If we try this, then React will shoot us back an error:

```
Error: Actions must be plain objects. Use custom middleware for async actions.
```

So we can't return something that is not an object. But it looks like we are! But Redux runs synchronously, meaning it *immediately* sends the action to the dispatch, and then the dispatch *immediately* sends the action to the reducers. So we have to somehow stop the process here. We have to do something to cut this off and then dispatch the action when we are ready. And that is exactly where custom middleware comes into the picture.

### Async action creators with `redux-promise`

Let's revisit where we left off previously, namely our action creator that failed because it was trying to do something asynchronous:

```javascript
import axios from 'axios';
const weatherApi = `http://api.openweathermap.org/data/2.5/weather`;
const weatherAPIkey = `6f3f23c0f1a2fcb7edee25d08cb9cf62`;
const scale = `imperial`; 

export default async (city) => {
  const weatherURL = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIkey}`;
  console.log(city);
  console.log(weatherURL);
  const response = await axios.get(weatherURL);
  return {
    type: 'cityUpdate',
    payload: response.data
  }
}
```

The `type` for the returned action is fine--it is simply a string. The problem is with the `payload` which is a *promise*. That's what `response.data` is above. And Redux is made to work as automatically as possible. Redux works synchronously and expects all actions to be dispatched and processed immediately, but our action above can't be because the `payload` is a promise. It won't run until the promise has settled. 

In order to solve this problem, we need to use some middleware. For this specific example right now, the middleware we will use comes from the [redux-promise](https://www.npmjs.com/package/redux-promise) module. This module is incredibly useful in that you don't have to write much code at all to make things work, but the downside is that you don't really have anymore control over things (that's where something like `redux-thunk` might come into play or `redux-saga`). 

[The docs](https://www.npmjs.com/package/redux-promise) for `redux-promise` makes its usage fairly clear: "The default export is a middleware function. If it receives a promise, it will dispatch the resolved value of the promise. It will not dispatch anything if the promise rejects." 

In order to apply middleware from `redux-promise`, we need to go all the way back up to `index.js` where the store is created because that is where the middleware will be applied to the store. So instead of just

```javascript
import { createStore } from 'redux';
```

we will now have 

```javascript
import { createStore, applyMiddleware } from 'redux';
```

where `applyMiddleware` is coming entirely from `redux`. How can we actually apply the middleware from `redux-promise`? Like so:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

The line

```javascript
const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer);
```

looks rather funky. What is going on here? Well, [the docs](https://www.npmjs.com/package/redux-promise) for `redux-promise` tell us that the default export from `redux-promise` (which we are calling `reduxPromise`) is a middleware *function*. So basically `applyMiddleware(reduxPromise)` is just another function expecting another argument, and the argument we want to pass it in this case is `createStore`. Well, `createStore` itself is a function so basically `applyMiddleware(reduxPromise)(createStore)` returns a function that expects the `rootReducer`, and that is what all is happening above. A more cumbersome albeit perhaps slightly clearer way of writing it would be as follows: 

```javascript
const middlewareApplied = applyMiddleware(reduxPromise);
const storeWithMiddleware = middlewareApplied(createStore);
const finalStore = storeWithMiddleware(rootReducer);
```

We will stick with the first way since it is less wordy. The effect of the line 

```javascript
const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer);
```

is that a variable called `theStore` is created that already has our middleware applied to it, where this solves our basic problem.

### Async action creators with `redux-thunk`

We are now going to look at our next piece of middleware: [redux-thunk](https://www.npmjs.com/package/redux-thunk). This is sort of "Step 2" of the middleware process. The `redux-promise` module is nice but it gives us very little power or control over things. 

Redux thunk is going to be more manual than `redux-promise` but the catch is that we will have more control. 

The authors of the `redux-thunk` package give us somewhat of a [mean message](https://www.npmjs.com/package/redux-thunk#why-do-i-need-this) at the outset: "Why do I need this? If you're not sure whether you need it, you probably don't. [Read this for an in-depth introduction to thunks in Redux](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)." This may be kind of annoying but it conveys a true message, namely that you shouldn't try to force this middleware because most of the time you don't need it. But just remember you have it in your back pocket so that when you do get in a situation where you need more direct control over the dispatch or access to the store then you can get it. 

Here's the key part with `redux-thunk`: "Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods `dispatch` and `getState` as parameters."

This is very different from everything we have been doing inside of our action creators so far:

```javascript
import axios from 'axios';
const weatherApi = `http://api.openweathermap.org/data/2.5/weather`;
const weatherAPIkey = `6f3f23c0f1a2fcb7edee25d08cb9cf62`;
const scale = `imperial`; 

export default async (city) => {
  const weatherURL = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIkey}`;
  console.log(city);
  console.log(weatherURL);
  const response = await axios.get(weatherURL);
  return {
    type: 'cityUpdate',
    payload: response.data
  }
}
```

We have always been returning an object from our action creator and never a function. What `redux-thunk` is promising us is that we can take our action creators and instead of returning an action/object, we can return a function. So instead of doing `return { ... }` we can do `return () => {}`. Now why would we want to do this? Well, remember, if you don't know the answer to that question, then you probably don't need `redux-thunk`. But we will see how we can do it anyway!

Sometimes the name of the module can help us out. `redux-promise` gave us an indicate that a `promise` would be involved in some way. Well, `redux-thunk` gives some indication that a `thunk` will be involved in some way. But what the hell is a thunk? [The docs](https://www.npmjs.com/package/redux-thunk#whats-a-thunk) remark on this: "A [thunk](https://en.wikipedia.org/wiki/Thunk) is a function that wraps an expression to delay its evaluation." And they give an example to illustrate this:

```javascript
// calculation of 1 + 2 is immediate
// x === 3
let x = 1 + 2;
 
// calculation of 1 + 2 is delayed
// foo can be called later to perform the calculation
// foo is a thunk!
let foo = () => 1 + 2;
```

So how can we start to use `redux-thunk`? Do we need to get rid of `redux-promise`? No! And this is the really cool part--we can use multiple pieces of middleware in Redux. In `index.js` we can now have the following: 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

const theStore = applyMiddleware(reduxPromise, reduxThunk)(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

So how do we actually use `redux-thunk` now and what's the value? The value comes from the fact that the function we return from our action creator is given two arguments, the `dispatch` and `getState`. So far we have not interact with either of these things at all. It has been entirely `react-redux`'s job to call the `dispatch`. It has been `react-redux`'s job to actually fiddle with the store and grab state out. But with `redux-thunk` we get the power to interact with these objects (below is just a temporary dummy example):

```javascript
export default () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log('I waited for 2 seconds')
      dispatch({
        type: 'testThunk'
      })
    }, 2000)
  }
}
```

The above code snippet shows that, with a thunk, we can *manually* call the dispatch and pass it an action of our choosing. The action right now is just a silly one with a `type` of `'testThunk'`, but you can imagine hown this might be useful. The effect of the code above is that the action creator waits two seconds before sending out the action `{ type: 'testThunk' }`. So we now have the power to manually call the dispatch to send out an action of our choosing to all reducers. 

The other option we have is `getState`. So we can modify our action creator like so: 

```javascript
export default () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const reduxState = getState();
      console.log('Redux state: ', reduxState)
      console.log('I waited for 2 seconds')
      dispatch({
        type: 'testThunk'
      })
    }, 2000)
  }
}
```

The effect of this is that when our action creator gets called, we'll return a function where `setTimeout` will wait two seconds, it will fetch the entire Redux store/state, put it inside of the `reduxState` variable, log it, and then dispatch our action.

So we have access to both the entire Redux store and the dispatch inside of our thunk. What's the value of `getState` here? Well, there might be things going on in your application that you need to know before you actually submit your action to go to all of your reducers. For example, suppose there is a component that is dependent on the user already having grabbed the weather in order to actually update it. Well, we can check to see if something exists and then and only then call the dispatch:

```javascript
export default () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const reduxState = getState();
      console.log('Redux state: ', reduxState)
      console.log('I waited for 2 seconds')
      if (reduxState.weather.main) {
        dispatch({
          type: 'testThunk'
        })
      }
    }, 2000)
  }
}
```

The `if` statement above is kind of silly, but the *concept* is what is important. Maybe it's a very important conditional that we need to consider. Maybe we only want to dispatch only if the store has certain information like authentication details or whatever else there might be. Or it could be that we want to dispatch four different actions all with different information all reliant on something else (you can imagine you could have conditional logic based on Redux state where we dispatch different actions based on what is in the store). 

So we could have something like the following (not the best example but gets the point across):

```javascript
import axios from 'axios';

const weatherApi = `http://api.openweathermap.org/data/2.5/weather`;
const weatherAPIkey = `6f3f23c0f1a2fcb7edee25d08cb9cf62`;
const scale = `imperial`; 

export default (city) => {
  return async (dispatch, getState) => {
    let weatherURL = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIkey}`;
    const reduxState = getState();
    if (!reduxState.weather.main) {
      weatherURL = `${weatherApi}?q=London&units=${scale}&appid=${weatherAPIkey}`
      const response = await axios.get(weatherURL);
      dispatch({
        type: 'cityUpdate',
        payload: response.data
      })
    } else if (reduxState.weather.main) {
      const response = await axios.get(weatherURL);
      if (reduxState.weather.id !== response.data.id) {
        dispatch({
          type: 'cityUpdate',
          payload: response.data
        })
      }
    }
  }
}
```

The important thing here is that the middleware gives us the power to run the thunk function (the example above illustrates how we will only send the dispatch if we get a *new* city). If we go back over to our `index.js` and remove `reduxThink` from our middleware, then we got the error we got previously: 

```
Error: Actions must be plain objects. Use custom middleware for async actions.
```

Why this error? Because we have in our `Weather` component the following:

```javascript
componentDidMount() {
  this.props.testThunk()
}
```

And what does the `testThunk` action creator try to do? It tries to return a *function* as opposed to a plain object. The `reduxThunk` middleware gives us the ability to return functions where we can manually call `dispatch` and `getState` before returning an action object.

So `redux-thunk` is actually very powerful because when you need control inside of an action creator you can get it. As noted above, maybe there are situations where you *do not* want an action dispatched from an action creator. `redux-thunk` gives us all the power to do this. Our thunk is very powerful because we can run whatever code we want inside of it before deciding on whether or not we should dispatch an action to all of our reducers.

## Before Hooks

### Introduction to hooks and whether or not you should use them

As [the docs](https://reactjs.org/docs/hooks-intro.html) say, "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class." They say basically the same thing in [the React changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md#1680-february-6-2019) where we can see Hooks were added on February 6, 2019.

So what does it mean to use state and other React features without writing a class? Well, up until now, every time we have wanted to use state, the word `this` for any reason, or any of the component lifecycle methods (e.g., `componentDidMount`, `componentDidUpdate`, `render`, etc.), then we had to use a class. Functional components were only useful for presentational components. They never managed their own state. The only thing they had was props. Hooks seeks to give you the option of doing it either way (i.e., using state and React features in classes or in functions). 

Before going deep into things, consider the following very simple class-based version of a simple counter:

```javascript
class App extends React.Component {
  state = { counter: 0 }
  updateCounter = () => {
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  }
  render() {
    return(
      <div>
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.updateCounter}>Add One!</button>
      </div>
    )
  }
}
```

Nothing shocking here. Very straightforward. Now consider the following equivalent hooks-based version of the same counter:

```javascript
import React, {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return(
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Add One!</button>
    </div>
  )
}
```

We're doing the exact same thing we were doing before, but now we are doing it without the overhead of a class. It's definitely shorter, less clunky, fewer extra variables, etc., in order to accomplish the same thing with the new system. A couple comments though:

- [The docs](https://reactjs.org/docs/hooks-intro.html#no-breaking-changes) remark on how there are no breaking changes with hooks.
  + Completely opt-in (you can try Hooks without rewriting any existing code): Hooks are the future of React but there's no reason to feel like you have to use them.
  + 100% backwards-compatibile (no breaking changes): So you can use hooks in a class-based application without any problems.
  + Available as of v16.8.0
- **There are no plans to remove classes from React:** This is a huge line. Very important. They tell us we can read more about the gradual adoption strategy for Hooks in [this section](https://reactjs.org/docs/hooks-intro.html#gradual-adoption-strategy). The basic point is that this is a dual strategy by Facebook (by the React team)--they are not planning on getting rid of classes. So you can use both at the moment. That may change eventually, but there are no plans currently to move away from classes. This is important to keep in mind because if you are a new developer, then a lot of times you want to overcommit to whatever the cool/new/shiny thing is, and that's not a good idea. It doesn't mean don't use hooks, but it means don't completely overcommit to hooks and forget about classes forever. You need a *good* reason to go without classes; otherwise, you'll end up in a bad place later on. The industry right now remains object-oriented focused. Whether or not you like it, Java and C# still dominate the software engineering industry and they are class-based and object-oriented.
- **Hooks don't replace your knowledge of React concepts:** "Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine them." This should be good news! All of our hard work with classes will not be for waste at all. If anything, knowing hooks will simply be another powerful tool in our React toolbelt. So React is the same--it's just, "Hey! Here's a new tool." Hooks do not give you new power that you did not already have. It's just a different way to organize your code. It's so difficult to accept that if you are learning a new thing. It's tempting to abandon classes and go straight to hooks, but that is a bad idea. Don't do that! Any large existing codebase is going to be all classes right now. As the React team [notes](https://reactjs.org/docs/hooks-intro.html#gradual-adoption-strategy) in the general adoption strategy section, "Crucially, Hooks work side-by-side with existing code so you can adopt them gradually. There is no rush to migrate to Hooks. We recommend avoiding any “big rewrites”, especially for existing, complex class components. It takes a bit of a mindshift to start “thinking in Hooks”. In our experience, it's best to practice using Hooks in new and non-critical components first, and ensure that everybody on your team feels comfortable with them." They go on, "We intend for Hooks to cover all existing use cases for classes, but we will keep supporting class components for the foreseeable future. At Facebook, we have tens of thousands of components written as classes, and we have absolutely no plans to rewrite them. Instead, we are starting to use Hooks in the new code side by side with classes."
- At the end of the point above, Facebook notes that they have thousands of class-based components and they have no intention of rewriting them with hooks. If that's Facebook's position, then you have to take them seriously. You do not have to go to hooks. They are simply a new tool that can unleash potentially new power in your applications.
- The overall point is that you should not be totally overcommitting and selling out to hooks forgetting about classes and abandoning them completely. Similarly, you should not remain stuck in the mud refusing to learn hooks and only stay with classes. Both hooks and classes are absolutely essential if you are going to be a React developer. Hooks are the intended future of the framework, but classes remain the tried and true way of going about wiring together large applications and they have been used extensively since ES6+. They both do the same thing. They're just two different tools. Don't just carry a hammer. Don't just carry a screwdriver. Carry a hammer and a screwdriver and use the one that you need.

### Using React to explain OOP and functional programming

We are now going to talk about programming paradigms, specificially object-oriented programming (OOP) and functional programming (FP), and we will use React as the landscape in which we discuss the different defining concepts of each paradigm. The reason this is important to talk about in the context of choosing whether or not to use class-based components or function-based components with state (i.e., hooks) is because that is precisely what we are dealing with here. We have classes and we have hooks, and they are in direct competition with each other. They do exactly the same thing. You can use them together, but all that means is you can have a class that has hooks in it, but they do the same thing in that one is managing state at an object level (i.e., classes) and the other is managing it at a functional level (i.e., hooks). And those are two completely different things. The difference between the two is entirely organizational. It is how you organize your code. It does not change what you code does, it changes how your code is organized. So a programming paradigm is for the developer, and you have one whether you know it or not, but it's for the developer not for the machine. The overall point is that classes and hooks are all about how you organize your code. As the React team noted, hooks do not replace any of your existing knowledge--they simply make some of the API access easier and more straightforward. Two of the main programming paradigms are OOP and FP. We will now discuss them in the context of React. Classes use OOP while Hooks use FP. We'll start with classes and OOP since that is what we have been using up until now.

OOP follows a couple of tenants--there are 4 pillars of OOP:

1. **Encapsulation:** This is just a fancy word that means we are going to take all of the data that belongs together and all of the functions that change or mutate that data will be in the same thing. So if you want to change whatever data there is (e.g., an array, an object, etc.), you have to use a method or a function and it has to belong to "me". So the object contains everything. That is exactly how our code has worked so far. For example, we never set state directly--we used an internal class method, `this.setState`, in order to change stuff because the component needs to be encapsulated. We want the data of the object or component (e.g., `this.state.counter` in the previous note) to be managed by the object or component, and we want to do that as much as possible. So we do mutate state, but we do it with setters (e.g., `setState`) and getters specific to the class we are working with. But OOP mutates state on purpose--it just does it in a *controlled* way. 
2. **Abstraction:** The idea of abstraction is that we want to hide everything that we possibly can from the outside world and only expose what we absolutely have to. The components work this way in React because `this.WHATEVER` can't be seen by anybody else because it belongs to that object or component so if we make a `this.updateCounter` or `this.changeName` or something like that, then no other component can use that or even see the state inside of it. Nobody can use those methods and nobody can change that data unless we pass those methods around. So as a quick example, if we have a component that renders another component (e.g., `App` rendering `Counter`), then `App` can have all of its own stuff and `Counter` can have all of its own stuff, and they do not see each other, but if we want `Counter` to be able to use or see something inside of `App`, then we pass this something down as a prop to `Counter`. That prop can show data and it can enable functions. So we can run code inside of `Counter` that's actually written inside of `App`. In the same way, we can access variables inside of `Counter` that are actually written inside of `App`. But all of the variables that we see in `Counter` that are coming from `App`...we can't change them. We can only see the values of them. The code we can run inside of `Counter` that can change the variables in `App` still comes from `App`. So basically you're given an outside look into `App` within `Counter`, but `App` is still changing itself. `Counter` cannot change anything in `App`. `Counter` can only tell `App` to change itself. So, again, there's mutation going on. We're changing variables inside of objects, but we're hiding as much as possible from everybody else in order to keep the encapsulation principle as alive as possible.
3. **Inheritance:** We won't spend much time on this since JavaScript is not an inheritance-based language but a prototype-based language (i.e., JavaScript doesn't actually support real inheritance). But the basic idea is that you can take an existing class and make a new class with pretty much everything that the main one already has. We used this with the `React` object from the `react` module when we did something like `class MyComponent extends React.Component`. So we got all of the super class (i.e., `React.Component`) stuff inside of `MyComponent` by calling `super` within our own class `constructor` method. So we get `componentDidMount`, `componentDidUpdate`, `render`, etc. It's helpful to do this because you can customize and reuse existing code. 
4. **Polymorphism:** This may sound scary but it's really not a big deal at all. Basically, polymorphism means that if you extend a class, like extending `React.Component` into our own `MyComponent` class, then if we want to use the same method from `React.Component`, then we have the ability to overwrite it. We actually do this all the time because `componentDidMount` is defined inside of `React.Component`--we just define it sometimes in `MyComponent`. If we don't define it, then we're using the one that `React.Component` has made for us. If we overwrite it, then we're not using the `React.Component` one anymore--we're using *our* method. That's all polymorphism is. And we have to use it because if we want to our component to be customizable from the extended class, which in this case is `React.Component`, then we have to use polymorphism. 

This is a super brief overview of OOP in the context of React, but the main thing here is that we are keeping everything internal (encapsulation), we're trying to hide everything we can from the outside world (abstraction), we get to use stuff from other classes like `React.Component` (inheritance), and we can overwrite stuff in `React.Component` whenever we want to (polymorphism). Basically what we are doing with all of this is MUTATING state but doing so in a very controlled way. But we're changing state constantly in an OOP approach. But it's okay because we are following the precepts outlined above to make sense out of everything.

For FP, there are two main pillars or tenets: 

1. **Purity:** This means that we do not mutate state. There is no side effect ever of running a pure function. Given a piece of input, a pure function should *always* return the same output. That's not true in OOP because state might be different. If state is different, then given a piece of input, we could get any number of outputs because it depends on what the state of the program is. In a pure function, that is never true; that is, if you give a piece of input, then you will always get the same output. 
2. **Immutability:** We still have state. We just don't ever change it. We simply replace it. So in OOP we're constantly changing the same variable (e.g., `this.state`) in a very controlled way, but in FP we still need the data to change but instead of actually changing a variable, you replace the old variables (hence the immutability). We never change anything, we simply overwrite what used to be there. We have a super awesome example that we have been using, and it is called REDUX. Redux uses FP because there is state (i.e., we do have a store), but what informs the store to decide what is in the store? Well, we have the reducers. Those are what decide what's inside of the store. We have a bunch of little reducers. What do the reducers return? They never ever change a piece of state. They simply return something different. So they never mutate state. They simply update the store with a totally different new variable. This isn't to say we don't change the store. We do. We do it all the time. But we don't mutate the stuff inside of the store. We overwrite what used to be there, and we do this with our reducers which are pure functions. 

As can be seen from the above descriptions of everything from OOP and FP, purity and immutability are very different from the mutation that goes on in OOP. This should give you more context for both paradigms and the merits of both. 

### Paradigm chart

Consider the following programming paradigm chart we will use to guide us through the next few notes:

<p align='center'>
  <img width='400px' src='https://user-images.githubusercontent.com/73953353/99928778-33fedf00-2d10-11eb-854a-68ed674071ee.png' />
</p>

We are now going to continue working through what we started to address in the previous note only in a more "these are the actual ways to program" manner. So before we talked specifically about OOP and FP, but those two aren't actually in competition with each other. They tend to be somewhat these days because programmers from both sides can hate those of the other side. But really these paradigms aren't in competition with each other. 

The chart above has a horizontal access that represents how to do state management and a vertical axis that represents how data and methods are associated in an application. These are the ways we will discover how we want to organize our code and what paradigm we want to use. There are a lot of different ways to look at this particular concept but this is how we will frame things for now and we will subsequently explore and code out each thing listed above. 

The first option for state management is the imperative programming paradigm. In regards to state management, imperative programming means that you simply mutate state. If you want to change the value of a variable, then you change it. There is no shared state. You make a variable and then you change it whenever you need to. This is almost certainly how you learned to program because it's awesome when you have a small problem. You simply get work done and can start coding right away. You don't have to worry about setting up really complicated structures. 

The second option for state management is the functional programming paradigm. In regards to state management, functional programming means we primarily have shared state.

If we now go to how the data and methods are associated with each other, we will have OOP and procedural. 

In procedural programming, that just means there is no association between the data and the methods. 

- **Imperative and Procedural (I + P):** Just like with imperative, we simply mutate state. It's kind of like the wild wild west. Procedural is the same way. If you need a function, then you write it. It doesn't make any difference what data it uses. You can use any data you want and you can declare data anywhere you want. A lot of times this just means you're using a ton of globals, and this is probably where you started programming (i.e., imperative and procedural). 
- **Functional and Procedural (F + P):** This means you are going to manage state very carefully. You will avoid mutating it whenever possible. And the data you are passing around doesn't have to be associated with a particular collection of functions because all of the functions are pure.
- **Imperative and Object-Oriented (I + OOP):** This means we are going to mutate state, but we are going to handle the state in the small, controlled, and encapsulated little objects. We have our little objects to keep all the setters and getters in one place, and we're just going to mutate directly but in a very controlled way.
- **Functional and Object-Oriented (F + OOP):** FP and OOP, as this point illustrates, can work together. That would mean we would try to eliminate state if at all possible, but any time where we have to use state, we'll put it inside of objects. 

## Hooks

### Back to Hooks

If we head back to [the docs](https://reactjs.org/docs/hooks-overview.html) and look at the [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html) section, then we will see material on the [State Hook](https://reactjs.org/docs/hooks-overview.html#state-hook) and the [Effect Hook](https://reactjs.org/docs/hooks-overview.html#effect-hook). These will be the Hooks you use most often and the React docs has [a section on the useState Hook](https://reactjs.org/docs/hooks-state.html) as well as [a section on the useEffect Hook](https://reactjs.org/docs/hooks-effect.html). 

So there are two main Hooks we will use (there are others and we can write some ourselves but these will be the most common): State Hook, Effect Hook. These are the Hook names, and we *use* them like so:

```javascript
import React, { useState, useEffect } from 'react';
```

That is, to use the State Hook and the Effect Hook, you import `useState` and `useEffect`, respectively. Generally, "use" prepends the name of the Hook you will use (e.g., `useContext`, `useReducer`, etc.). [Here](https://reactjs.org/docs/hooks-reference.html) is the Hooks API reference, and we can see the Hooks categorized as Basic and Additional:

- [Basic Hooks](https://reactjs.org/docs/hooks-reference.html#basic-hooks)
  + [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
  + [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  + [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Additional Hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks)
  + [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
  + [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
  + [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
  + [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
  + [useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
  + [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
  + [useDebugValue](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)

The `useState` hook, like we saw before, gives us the ability to interact with or use component-level state just like we always have with our class components but inside of a function component. The `useEffect` hook allows us to use component lifecycle methods. So things like `componentDidMount`, `componentDidUpdate`, `componentWillUmount`, etc., all require us to use the `useEffect` hook. This is because these methods come as a result of *extending* `React.Component` in our class methods. So we need some way to tap into them inside of functional components and the way we do that is with the `useEffect` hook. 

Let's now revisit our super basic counter component that used `useState`: 

```javascript
import React, {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return(
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Add One!</button>
    </div>
  )
}
```

The line

```javascript
const [counter, setCounter] = useState(0);
```

may look somewhat intimidating but it shouldn't be. It's array destructuring and very similar to what have done before with something like 

```javascript
const { name, age } = this.state;
```

where we create variables `name` and `age` from `this.state.name` and `this.state.age`, respectively. We're doing the exact same thing with `const [counter, setCounter] = useState(0);` except when you are talking about arrays you are going to grab things by index. Clearly, then, somehow `useState(0)` must be returning an array. If we drop a little `console.log(useState(0))` below `const [counter, setCounter] = useState(0);` then we can see what this is exactly:

<p align='center'>
  <img width='400px' src='https://user-images.githubusercontent.com/73953353/99928803-4c6ef980-2d10-11eb-99b6-6b2340b1acb7.png' />
</p>

So we can see that calling `useState(0)` returns an array of two elements where the first element is the number `0`, and the second element is a function. We don't need to worry about all the function details right now, but just know React is giving you that. So what just happened? What do the two elements coming from `useState` do exactly? 

Well, whatever we pass to `useState` is going to be the first element in the array. So when we do 

```javascript
const [counter, setCounter] = useState(0);
```

what we are effectively doing is initializing `counter` to be `0`. 

So whatever we pass the `useState` Hook is going to be our initial piece of state; in the example above, the piece of state `counter` will have an initial value of `0`. Now, `setCounter`, on the other hand, is going to be the means by which we interact with our piece of state. So `setCounter` is going to be kind of like calling `this.setState`. 

A couple notes from what we have just discussed:

- The zeroth index of `useState(arg)` is effectively `this.state.arg` in the lens of what we have used previously.
- The first index of `useState(arg)` is effectively `this.setState({ arg })`

Said more concisely and differently:

- `[0]` or `counter` = the `this.state`
- `[1]` or `setCounter` = `this.setState(thing [0])`

And note that the `0` we passed `useState(0)` previously when we ran `const [counter, setCounter] = useState(0);` is effectively equivalent to initializing `this.state = { counter: 0 }` in a class. 

It's worth noting that Hooks *do not* use an object to store state like we have done previously with classes. We're not putting things in objects where we have things like `this.state.WHATEVER`. From now on, inside of the Hooks landscape, we are just using a plain variable. So `counter` contains the value of the state for our counter, and it is not associated with any other piece of state. And it is also not stored inside of an object that we keep track of. It's just its own variable. And really this is just some "frosting"; that is, React state works the same in Hooks as it does when we are using classes. You are not getting any new power--you're just interacting with the React API differently than we have in the past. Exactly the same stuff, same performance, same security, etc. It's just: How do you want to interact with React? Do you want to use the Hooks system and just write functions? Or do you want to use classes? Either way React is going to do the same thing under the hood. 

### The return of the weather widget!

We are now going to tackle making HTTP requests with Hooks because this is one of the most common things you will do with React (you're going to constantly need data from somewhere). And the Hooks system is rather nice in this arena. 

TBD ...

## Supplemental Notes

### Prop Types

#### Prop types (typechecking with `propTypes`)

See [the docs](https://reactjs.org/docs/typechecking-with-proptypes.html) for all the gory details. Most often we will want to ensure prop values are of a certain type (e.g., string, number, etc.) with `static propTypes = { ... }` or as outlined in the docs. We will also occasionally want to supply default values for props using `static defaultProps = { ... }`. 

#### Default prop values

Occasionally, we will want to give default values to certain props for a component (as opposed to using messy destructuring with default values). This note outlines how to do that.

As noted in [the docs](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values), you define default values for your props by assigning to the special `defaultProps` property:

```javascript
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};

// Renders "Hello, Stranger":
ReactDOM.render(
  <Greeting />,
  document.getElementById('example')
);
```

As the docs also note: If you are using a Babel transform like transform-class-properties (which we usually will be), you can also declare `defaultProps` as static property within a React component class. This syntax has not yet been finalized though and will require a compilation step to work within a browser. For more information, see the class fields proposal.

```javascript
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}
```

The `defaultProps` will be used to ensure that `this.props.name` will have a value if it was not specified by the parent component. The `propTypes` typechecking happens after `defaultProps` are resolved, so typechecking will also apply to the `defaultProps`.

#### Converting class component to functional component but keeping default props and prop types

Suppose we wanted to convert the following class component to a functional component but wanted to keep the `defaultProps` as well as the `propTypes`:

```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavBar extends Component {
  static defaultProps = {
    title: 'GitHub Finder',
    icon: ['fab', 'github']
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.array.isRequired
  }

  render() { 
    const {title: navBarTitle, icon} = this.props;
    return (  
      <nav className="navbar bg-primary">
        <h1><FontAwesomeIcon icon={icon} /> {navBarTitle}</h1>
      </nav>
    );
  }
}
 
export default NavBar;
```

Since we have a class, we can use `static defaultProps/propTypes`, but we cannot use the `static` keyword without class. The solution is to simply [follow the example in the docs](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes) like so:

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const NavBar = (props) => {
  const {title: navBarTitle, icon} = props;
  return (  
    <nav className="navbar bg-primary">
      <h1><FontAwesomeIcon icon={icon} /> {navBarTitle}</h1>
    </nav>
  );
}

NavBar.defaultProps = {
  title: 'GitHub Finder',
  icon: ['fab', 'github']
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.array.isRequired
}
 
export default NavBar;
```

Hence, we simply have `ComponentName.propsInvolvedThing = { ... }` outside of the functional component. We can do the same thing in classes if we wanted to [as also illustrated in the docs](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values). 

### Hooks

#### `useEffect` (basic usage, similarity to class lifecycle methods, peculiarities, etc.)

[The docs](https://reactjs.org/docs/hooks-effect.html) are fairly extensive on the `useEffect` Hook, but we can cover some of the essentials here. The first "tip" we encounter is the following from the React team: "If you're familiar with React class lifecycle methods, you can think of `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined." To get a better sense of what this really means, [this Medium article](https://medium.com/javascript-in-plain-english/i-read-the-entire-react-api-here-is-my-advice-to-new-developers-d040507e6c23) points out the following very helpful guide (slightly modified below):

```javascript
// (1) On mount and every render
useEffect (() => { 
  dosomething()
});

// (2) Only on mount (similar to componentDidMount)
useEffect (() => {
  dosomething()
}, []);

// (3) On mount/every time state of count changes (similar to componentDidUpdate)
useEffect (() => {
  dosomething()
}, [count]);

// (4) UseEffect with cleanup (similar to componentWillUnmount)
useEffect (() => {
  dosomething();
  return clearSomething(){};
});
```

As we can see from the above, if we are going to do something like issue AJAX requests, which would typically go inside of `componentDidMount` in a class, then we will do this inside of the following:

```javascript
useEffect (() => {
  dosomething() // e.g., AJAX request(s)
}, []);
```

What happens if we do not include the empty array? For example:

```javascript
useEffect (() => {
  dosomething() // e.g., AJAX request(s)
});
```

This will result in making *infinitely many* requests (i.e., we get stuck in an infinite loop). Why? Well, assuming our AJAX requests are tied to pieces of state (which they inevitably are), then we just changed state which means we get a render. Since no empty array is specified, `useEffect` will fire off again, resulting in another state change (even if the data is the same), which results in another render, etc. Specifying the empty array is similar to putting our AJAX request(s) into `componentDidMount`, and this accomplishes the desired behavior. Unfortunately, with `create-react-app`, not specifying anything in the array can result in a misleading error from the linter:

<p align='center'>
  <img width='600px' src='https://user-images.githubusercontent.com/73953353/99929135-a3290300-2d11-11eb-883f-af28de782733.png' />
</p>

If we follow the advice in some instances (e.g., when making AJAX calls), then we actually end up with the same looping problem. This is similar to the problem you can run into when trying to set state inside of `componentDidUpdate` in a class. As [the docs note](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects), "In some cases, cleaning up or applying the effect after every render might create a performance problem. In class components, we can solve this by writing an extra comparison with `prevProps` or `prevState` inside `componentDidUpdate`":

```javascript
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `You clicked ${this.state.count} times`;
  }
}
```

They go on: "This requirement is common enough that it is built into the `useEffect` Hook API. You can tell React to skip applying an effect if certain values haven't changed between re-renders. To do so, pass an array as an optional second argument to `useEffect`":

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

The problem with doing this with AJAX calls oftentimes is that the data you are using to set state will actually be different on each call, effectively resulting in rerendering infinitely often. We will often want to just treat our initial calls as we might in `componentDidMount`, using only `[]` in `useEffect`. But the eslint error can get really annoying to look at in your console when it's really not an error at all. The low-grade solution (at least for now...a lot of people aren't happy with this fake error) is the following:

```javascript
useEffect (() => {
  dosomething() // e.g., AJAX request(s)
  // eslint-disable-next-line
}, []);
```

This effectively disables the linter for the next line which causes the warning. Not a great fix but it will have to do for now.

### Context

#### Remarks on Hooks and Context API

- [Hooks docs](https://reactjs.org/docs/hooks-intro.html)
- [Context docs](https://reactjs.org/docs/context.html)

Hooks allow us to basically use functional components which are usually slimmer and cleaner than class components. So what exactly are Hooks? They are *functions* that let us hook into React state and component lifecycle features from a function component rather than a class component. Some of the hooks you will see: 

- [useState](https://reactjs.org/docs/hooks-state.html)
- [useEffect](https://reactjs.org/docs/hooks-effect.html) (this lets you mimic lifecycle methods of classes and [this Medium article](https://medium.com/javascript-in-plain-english/i-read-the-entire-react-api-here-is-my-advice-to-new-developers-d040507e6c23) has some nice details on how this is accomplished)
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- The above hooks are some of the more basic hooks React gives us access to via something like, for example, `import { useState, useEffect } from 'react';`. [Here](https://reactjs.org/docs/hooks-reference.html) is the Hooks API reference where other hooks such as `useReducer`, `useCallback`, `useMemo`, `useRef`, etc., can be found. Basically, the `useState` hook gives us the ability to use state within functional components whereas before with classes we had to use `state = { ... }` or `this.state = { ... }` to have access to state. The `useEffect` hook gives us the ability to mimic class lifecycle methods but within functions. The `useContext` and `useReducer` hooks are largely used within the confines of the Context API.

Speaking of the Context API, it does not take long to realize that passing props multiple levels down can get arduous and messy very quickly. This is where something like the [Context API](https://reactjs.org/docs/context.html) can be of use (or Redux). As the React docs say, "Context provides a way to pass data through the component tree without having to pass props down manually at every level. In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree."

Essentially, when state is only used at the component level, then using `state` or `this.state` in a class will do or the `useState` hook in a functional component will do. But if we want our state to possibly be shared by *numerous* components, then it is time to look at having *application-level* state and using a robust state management tool like the Context API or Redux.

Informally, the `useContext` hook makes it possible to very easily bring in your context into any component whereas before there were hooks this was quite difficult and ugly. The `useReducer` hook allows us to create a really nice Redux-like reducer without having to using something as full-blown as Redux. And a reducer is a function that you can basically dispatch actions to in order to manipulate your application-level state where that state will then be sent down to the different components that subscribe to that piece of state.

Here is a diagram to attempt to sort of explain how the Context API works:

<p align='center'>
  <img width='800px' src='https://user-images.githubusercontent.com/73953353/99929133-a1f7d600-2d11-11eb-8635-eecf32c518d9.png' />
</p>

The important thing to keep in mind here is that there is not really a *standardized* way of going about implementing the Context API (at least not right now). The image references how Brad Traversy uses the Context API. 

The Context API allows us to remove what you might otherwise stuff in `App.js` in order to make available to a bunch of other components via prop-drilling. And you can have *multiple* contexts. The larger your application is and the more resources you have, the more contexts you will likely have. Brad mentions having a folder for each context where each folder will have three files, something like the following:

```
contexts
|- GitHub
|--- githubContext.js (initialize Context API here; takes the form: resourceContext.js)
|--- GitHubState.js (GitHub context global state; action creators; exported provider to wrap App so we can easily access state as well as action creators from any component in App without prop-drilling)
|--- githubReducer.js (decides what state looks like after each action creator fires an action)

```

#### Context vs Redux

Without getting too embroiled in the "controversy", Brad Traversy seems to think Redux is great for very *very large* applications while the Context API is great for small- to medium-sized applications where you still want to have application-level state but with not quite as much overhead as fully implementing Redux might require. 
