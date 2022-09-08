---
title: CSS Diner
hide_title: false
sidebar_label: CSS Diner
description: CSS Diner notes
draft: false
tags: [css]
keywords: [css]
image: https://github.com/farlowdw.png
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

**Note:** Everything in this document is based off of the [CSS Diner](http://flukeout.github.io/) game intended to help developers become more familiar with CSS selectors. This "companion" is simply meant to be used as a supplement/reference.

**Goal of game:** Select the "wiggling items" using CSS selectors.

**Selectors:** Go to the [CSS selector descriptions and examples](#css-selector-descriptions-and-examples) section to refresh your memory on a variety of CSS selectors.

**Usage:** For any given level, you are provided with a `.gif` illustrating what you are trying to select. Here is how you should go about using this companion if you do not simply go [the site](http://flukeout.github.io/) hosting the game:
1. **Watch:** Watch the `.gif` to see what is wiggling.
2. **HTML Viewer:** Open (i.e., click) the `HTML Viewer` to see what HTML actually makes up the `.gif` you saw in Step 1. This will be important because you will be trying to target or select *named* elements, and you may need to see the HTML to deduce these elements' names, what classes or attributes they may have, etc.
3. **Hint:** Click the `Hint` if you need a nudge in the right direction. What you find in the hint will often be phraseology that more or less points you to a specific part of the [CSS selector descriptions and examples](#css-selector-descriptions-and-examples) section.
4. **CSS Viewer:** Click the `CSS Viewer` to see one (or more) potential solutions. You may come up with completely different solutions! If so, consider making a pull request to this repo with your additional solution formatted as seen in the provided solution(s). 

## 1 - Type

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-1.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A
```

Selects all elements of type `A`. Type refers to the type of tag, so `<div>`, `<p>`, and `<ul>` are all different element types. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
div {
    /* style all <div> elements */
}

p {
    /* style all <p> elements */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate />
    <plate />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

In the HTML, we see that each plate is represented by `<plate />`. How can we select an element by type?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate
```

</TabItem>
</Tabs>

---

## 2 - Type

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-2.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A
```

Selects all elements of type `A`. Type refers to the type of tag, so `<div>`, `<p>`, and `<ul>` are all different element types. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
div {
    /* style all <div> elements */
}

p {
    /* style all <p> elements */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <bento />
    <plate />
    <bento />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Note how each bento box is represented by `<bento />` in the HTML. Is there a way to select elements by type?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
bento
```

</TabItem>
</Tabs>

---

## 3 - ID Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-3.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
#id
```

Selects an element with a specific `id`. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

#cool {
    /* style the element with id="cool" */
}

/* you can also combine the ID selector with the type selector */

ul#long {
    /* style the element <ul id="long"> */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate id="fancy" />
    <plate />
    <bento />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Only one element in an HTML document should have a given `id`. How can you select an element by its `id`?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
/* solution 1 */
#fancy /* select any element with id="fancy" */

/* solution 2 */
plate#fancy /* select the plate element with id="fancy" */
```

</TabItem>
</Tabs>

---

## 4 - Descendant Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-4.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A B
```

Selects all elements `B` that are children of `A`; that is, `A B` is how you select an element(s) `B` that is inside another element `A`.

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

p strong {
    /* style <strong> elements that are children of <p> elements */
}

#fancy span {
    /* style any <span> elements that are inside of the element with id="fancy" */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <bento />
    <plate>
        <apple />
    </plate>
    <apple />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

The apple is on the plate, and this implies that the apple is a descendent of the plate. How can you select a descendant `B` of an element `A`?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate apple
```

</TabItem>
</Tabs>

---

## 5 - Combine Descendant and ID Selectors

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-5.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
#id A
```

You can combine any selector with the descendant selector.

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLE */

#cool span {
    /* style all <span> elements that are inside of the element with id="cool" */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <bento>
        <orange />
    </bento>
    <plate id="fancy">
        <pickle />
    </plate>
    <plate>
        <pickle />
    </plate>
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

The HTML shows that the pickle is a descendant of the plate with `id=fancy`. 

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
#fancy pickle
```

</TabItem>
</Tabs>

---

## 6 - Class Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-6.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
.classname
```

Select elements by their class. The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLE */

.neato {
    /* style all elements with class="neato" */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <apple />
    <apple class="small" />
    <plate>
        <apple class="small" />
    </plate>
    <plate />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Do the small apples share a common class name?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
apple.small
```

</TabItem>
</Tabs>

---

## 7 - Combining the Class Selector with Other Selectors

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-7.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A.className
```

You can combine the class selector with other selectors, like the type selector.

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

ul.important {
    /* style <ul> elements that have class="important" */
}

#big.wide {
    /* style the element with id="big" that also has class="wide" */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <apple />
    <apple class="small" />
    <bento>
        <orange class="small" />
    </bento>
    <plate>
        <orange />
    </plate>
    <plate>
        <orange class="small" />
    </plate>
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

We do not want to select all objects with a class of `small`. Can we select only the oranges that have a class of `small` though?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
orange.small
```

</TabItem>
</Tabs>

---

## 8 - Levels 1-7 Overview

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-8.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

None (this level is a simple overview of lessons learned in the previous lessons).

</TabItem>
<TabItem value="examples" label="Examples">

None (this level is a simple overview of lessons learned in the previous lessons).

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <bento>
        <orange />
    </bento>
    <orange class="small" />
    <bento>
        <orange class="small" />
    </bento>
    <bento>
        <apple class="small" />
    </bento>
    <bento>
        <orange class="small" />
    </bento>
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

We want the small oranges on bentos. How can we target what is on a bento? How can we target properties of what are on bentos? 

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
bento orange.small
```

</TabItem>
</Tabs>

---

## 9 - Combining Selectors with Commas

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-9.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A, B
```

You can select all `A` and `B` elements (or all `A`, `B`, and `C` elements with `A, B, C`, etc.). 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

p, .fun {
    /* style all <p> elements as well as all elements with class="fun" */
}

a, p, div {
    /* style all <a>, <p>, and <div> elements */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <pickle class="small" />
    <pickle />
    <plate>
        <pickle />
    </plate>
    <bento>
        <pickle />
    </bento>
    <plate>
        <pickle />
    </plate>
    <pickle />
    <pickle class="small" />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

How can we select multiple elements at once?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate, bento
```

</TabItem>
</Tabs>

---

## 10 - Universal Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-10.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
*
```

You can select all elements with the universal selector `*` (also known as a wildcard).

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

p * {
    /* style all elements inside of all <p> elements */
}

ul.fancy * {
    /* style every element inside all <ul class="fancy"> elements */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <apple />
    <plate>
        <orange class="small" />
    </plate>
    <bento />
    <bento>
        <orange />
    </bento>
    <plate id="fancy" />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible for us to select everything at once?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
*
```

</TabItem>
</Tabs>

---

## 11 - Combine the Universal Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-11.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A *
```

This selects all elements inside of `A`.

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

p * {
    /* style all elements inside of all <p> elements */
}

ul.fancy * {
    /* style every element inside all <ul class="fancy"> elements */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate id="fancy">
        <orange class="small" />
    </plate>
    <plate>
        <pickle />
    </plate>
    <apple class="small" />
    <plate>
        <apple />
    </plate>
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

How can we select all of the children of an element?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate *
```

</TabItem>
</Tabs>

---

## 12 - Adjacent Sibling Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-12.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A + B
```

This selects all `B` elements that direct follow `A` elements. Elements that follow one another are called siblings. They're on the same level or depth. In the HTML markup, elements that are siblings should have the same indentation level. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

p + .intro {
    /* styles every element with class="intro" that directly follows a <p> */
}

div + a {
    /* style every <a> element that directly follows a <div> */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <bento>
        <apple class="small" />
    </bento>
    <plate />
    <apple class="small" />
    <plate />
    <apple />
    <apple class="small" />
    <apple class="small" />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

How can we select each `apple` that is directly adjacent to a `plate`?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate + apple
```

</TabItem>
</Tabs>

---

## 13 - General Sibling Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-13.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A ~ B
```

Selects all elements `B` that follow an element `A`; that is, you can select all siblings of an element that follow it. This is sort of like the adjacent sibling selector (i.e., `A + B`) except `A ~ B` gets *all* of the following sibling elements instead of just the direct next one.  

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLE */

div.main-intro ~ p {
    /* style all elements <p> after <div class="main-intro"> that are on the same level as the div */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <pickle />
    <bento>
        <orange class="small" />
    </bento>
    <pickle class="small" />
    <pickle />
    <plate>
        <pickle />
    </plate>
    <plate>
        <pickle class="small" />
    </plate>
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

We want to select *all* of the `pickle` siblings after the `bento`.

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
bento ~ pickle
```

</TabItem>
</Tabs>

---

## 14 - Child Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-14.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A > B
```

Selects all `B` that are direct children of `A`. You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. Elements that are nested deeper than that are called descendant elements. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLE */

div#container > ul {
    /* style all <ul> elements that are children of <div id="container"> */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate>
        <bento>
            <apple />
        </bento>
    </plate>
    <plate>
        <apple />
    </plate>
    <plate />
    <apple />
    <apple class="small" />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

We do not want to select just any apple that is on a plate--we want to select the apple that is *directly* on the plate.

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate > apple
```

</TabItem>
</Tabs>

---

## 15 - First Child Pseudo-selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-15.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A:first-child
```

Selects all first-child elements that are of type `A`. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

:first-child {
    /* style all first child elements */
}

p:first-child {
    /* style all first child <p> elements  */
}

div p:first-child {
    /* style all first child <p> elements that are in a <div> */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <bento />
    <plate />
    <plate>
        <orange />
        <orange />
        <orange />
    </plate>
    <pickle class="small" />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

We know we want to select the `orange` that is the *first child* of the *plate*. A pseudo-selector may be appropriate here ....

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate orange:first-child
```

</TabItem>
</Tabs>

---

## 16 - Only Child Pseudo-selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-16.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A:only-child
```

Selects any element `A` that is the only element inside of another one. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

span:only-child {
    /* style the <span> elements that are the only child of some other element */
}

div p:only-child {
    /* style the <p> inside any <div> so long as the <p> is the only one of its kind */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate>
        <apple />
    </plate>
    <plate>
        <pickle />
    </plate>
    <bento>
        <pickle />
    </bento>
    <plate>
        <orange class="small" />
        <orange />
    </plate>
    <pickle class="small" />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

How can we select multiple things at once? How can we select the *only* child of an element?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate apple:only-child, plate pickle:only-child
```

</TabItem>
</Tabs>

---

## 17 - Last Child Pseudo-selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-17.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A:last-child
```

Selects any element `A` that is the last child of another element. You can use this selector to select an element that is the last child element inside of another element. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
:last-child {
    /* style all last-child elements */
}

span:last-child {
    /* style all last-child <span> elements */
}

ul li:last-child {
    /* style the last <li> element inside every <ul> */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate id="fancy">
        <apple class="small" />
    </plate>
    <plate />
    <plate>
        <orange class="small" />
        <orange />
    </plate>
    <pickle class="small" />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

There are multiple ways to do this. One somewhat contrived way is to think that the `apple` is the *last child* of the fancy `plate` and that the `pickle` is also, in some sense, the *last child* of its kind.

Alternatively, we really just want the child of the fancy `plate` that is an `apple` that is `small` as well as the `pickle` that is `small`.

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
/* Solution 1 */
plate#fancy apple:last-child, pickle:last-child /* contrived */

/* Solution 2 */
#fancy apple.small, pickle.small /* realistic */
```

</TabItem>
</Tabs>

---

## 18 - Nth Child Pseudo-selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-18.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
:nth-child(A)
```

Selects the nth (i.e., 1st, 3rd, 12th, etc.) child element in another element. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

:nth-child(8) {
    /* style every element that is the 8th child of another element */
}

div p:nth-child(2) {
    /* style the second <p> in every <div> */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate />
    <plate />
    <plate />
    <plate id="fancy" />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible for us to select a specific child of a certain element?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate:nth-child(3)
```

</TabItem>
</Tabs>

---

## 19 - Nth Last Child Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-19.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
:nth-last-child(A)
```

Selects the children from the bottom of the parent. This is like nth-child but counting from the back.  

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLE */

:nth-last-child(2) {
    /* styles all second-to-last child elements */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate />
    <bento />
    <plate>
        <orange />
        <orange />
        <orange />
    </plate>
    <bento />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

It may be obvious to use `bento:first-of-type` here, but can we conjure up a more contrived solution such as counting from the back? For example, counting from the last `bento`, we see that the `bento` we want to select is really the third child. How can we select this `bento` in terms of "last children"?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
bento:nth-last-child(3)
```

</TabItem>
</Tabs>

---

## 20 - First of Type Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-20.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A:first-of-type
```

Selects the first element of type `A` within another element. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES*/

span:first-of-type {
    /* style the first <span> in any element */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <orange class="small" />
    <apple />
    <apple class="small" />
    <apple />
    <apple class="small" />
    <plate>
        <orange class="small" />
        <orange />
    </plate>
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible for us to select the first element that is of a certain type?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
apple:first-of-type
```

</TabItem>
</Tabs>

---

## 21 - Nth of Type

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-21.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A:nth-of-type(num)
```

Selects an element of type `A` based on its order in another element (or `even` or `odd` instances of that element). 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

div:nth-of-type(2) {
    /* style the second instance of a <div> */
}

.example:nth-of-type(odd) {
    /* style all odd instances of elements with class="example" */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate />
    <plate />
    <plate />
    <plate />
    <plate id="fancy" />
    <plate />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

How can we use the pseduo-selector `nth-of-type` to our advantage here? What kinds of parameters does this pseudo-selector accept?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate:nth-of-type(even)
```

</TabItem>
</Tabs>

---

## 22 - Nth of Type Selector with Formula

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-22.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
:nth-of-type(An+B)
```

The nth-of-type formula selects every nth element, starting the count at a specific instance of that element. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLE */

span:nth-of-type(6n+2) {
    /* style every 6th instance of a <span>, starting from (and including) the second instance */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate />
    <plate>
        <pickle class="small" />
    </plate>
    <plate>
        <apple class="small" />
    </plate>
    <plate />
    <plate>
        <apple />
    </plate>
    <plate />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Can we specify a selection pattern for certain types? That is, can we do something of the following sort: "Select every 4th instance of `plate`, starting at instance 2?" 

Way we would write the above is `plate:nth-of-type(4n+2)`

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate:nth-of-type(2n+3)
```

</TabItem>
</Tabs>

---

## 23 - Only of Type

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-23.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
:only-of-type
```

Selects the only element of its type within another element. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLE */

p span:only-of-type {
    /* selects a <span> within any <p> if it is the only <span> in there */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate id="fancy">
        <apple class="small" />
        <apple />
    </plate>
    <plate>
        <apple class="small" />
    </plate>
    <plate>
        <pickle />
    </plate>
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible to select a plate that only has a *single* child of the `apple` type?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate > apple:only-of-type
```

</TabItem>
</Tabs>

---

## 24 - Last of Type

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-24.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
:last-of-type
```

Selects each last element of that type within another element. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

div:last-of-type {
    /* styles the last <div> in every element */
}

p span:last-of-type {
    /* styles the last <span> in every <p> */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <orange class="small" />
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

How can we select multiple elements that are the last of their type?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
orange:last-of-type, apple:last-of-type
```

</TabItem>
</Tabs>

---

## 25 - Empty

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-25.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
:empty
```

Selects elements that don't have any other elements inside of them. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLE */

div:empty {
    /* style all empty <div> elements */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <bento />
    <bento>
        <pickle class="small" />
    </bento>
    <plate />
    <bento />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible for us to select all types of an element that do not have children (i.e., are empty)?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
bento:empty
```

</TabItem>
</Tabs>

---

## 26 - Negation Pseudo-class

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-26.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
:not(X)
```

Selects all elements that do not match the negation selector. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

:not(#fancy) {
    /* style all elements that do not have id="fancy" */
}

div:not(:first-child) {
    /* style every <div> that is not a first child */
}

:not(.big, .medium) {
    /* style all elements that do not have class="big" or class="medium" */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate id="fancy">
        <apple class="small" />
    </plate>
    <plate>
        <apple />
    </plate>
    <apple />
    <plate>
        <orange class="small" />
    </plate>
    <pickle class="small" />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible to select an element type that does *not* have a certain class?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
apple:not(.small)
```

</TabItem>
</Tabs>

---

## 27 - Attribute Selector (general)

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-27.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
[attribute]
```

Selects all elements that have a specific attribute. Attributes appear inside the opening tag of an element. For example: `<span attribute="value"></span>`. An attribute does not always have a value, it can be blank. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

a[href] {
    /* style all <a> elements that have an href attribute */
}

[type] {
    /* style all elements that have a type attribute */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <bento>
        <apple class="small" />
    </bento>
    <apple for="Ethan" />
    <plate for="Alice">
        <pickle />
    </plate>
    <bento for="Clara">
        <orange />
    </bento>
    <pickle />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible to select general elements based on whether or not those elements have certain attributes?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
[for]
```

</TabItem>
</Tabs>

---

## 28 - Attribute Selector (specific)

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-28.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
A[attribute]
```

Selects all elements `A` that have a specific attribute.  

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

[value] {
    /* style all elements that have a value attribute */
}

a[href] {
    /* style all <a> elements that have an href attribute */
}

input[disabled] {
    /* styles all <input> elements with the disabled attribute */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate for="Sarah">
        <pickle />
    </plate>
    <plate for="Luke">
        <apple />
    </plate>
    <plate />
    <bento for="Steve">
        <orange />
    </bento>
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible to select only specific elements that have certain attributes?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
plate[for]
```

</TabItem>
</Tabs>

---

## 29 - Attribute Value Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-29.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
[attribute="value"]
```

Selects all elements that have a specific attribute value. Attribute selectors are case sensitive.  

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLE */

input[type="checkbox"] {
    /* style all <input> elements with type="checkbox" */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <apple for="Alexei" />
    <bento for="Albina">
        <apple />
    </bento>
    <bento for="Vitaly">
        <orange />
    </bento>
    <pickle />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible to select an element not only based on it having a certain attribute but also the value of that attribute?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
bento[for="Vitaly"]
```

</TabItem>
</Tabs>

---

## 30 - Attribute Starts With Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-30.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
[attribute^="value"]
```

Selects all elements with an attribute value that starts with specific characters. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLE */

.toy[category^="Swim"] {
    /* style elements with class toy and with attribute category="Swim[...]" */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <plate for="Sam">
        <pickle />
    </plate>
    <bento for="Sarah">
        <apple class="small" />
    </bento>
    <bento for="Mary">
        <orange />
    </bento>
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible to select elements that have an attribute whose value *starts* with a specified set of characters?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
*[for^="Sa"]
```

</TabItem>
</Tabs>

---

## 31 - Attribute Ends with Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-31.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
[attribute$="value"]
```

Selects all elements with an attribute value that ends with specific characters. 

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLE */

img[src$=".jpg"] {
    /* style all images with a .jpg extension */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <apple class="small" />
    <bento for="Hayato">
        <pickle />
    </bento>
    <apple for="Ryota" />
    <plate for="Minato">
        <orange />
    </plate>
    <pickle class="small" />
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible to select elements that have an attribute whose value *ends* with a specified set of characters?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
*[for$="ato"]
```

</TabItem>
</Tabs>

---

## 32 - Attribute Wildcard Selector

<Tabs>
<TabItem value="animation" label="Animation">

<img src={require('@site/static/img/css-diner/level-32.gif').default}/>

</TabItem>
<TabItem value="description" label="Description" default>

```css
[attribute*="value"]
```

Selects all elements with an attribute value that contains specific characters.  

</TabItem>
<TabItem value="examples" label="Examples">

```css
/* EXAMPLES */

img[src*="/thumbnails/"] {
    /* style all image elements that show images from the "thumbnails" folder */
}

[class="heading"] {
    /* style all elements with "heading" in their class, like class="main-heading" and class="sub-heading" */
}
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="table">
    <bento for="Robbie">
        <apple />
    </bento>
    <bento for="Timmy">
        <pickle />
    </bento>
    <bento for="Bobby">
        <orange />
    </bento>
</div>
```

</TabItem>
<TabItem value="hint" label="Hint">

Is it possible to select elements that have an attribute whose value *contains* a specified set of characters?

</TabItem>
<TabItem value="css-answer" label="CSS (Answer)">

```css
bento[for*="obb"]
```

</TabItem>
</Tabs>