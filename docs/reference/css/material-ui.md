---
title: Material UI
hide_title: false
sidebar_label: Material UI
description: Material UI notes
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

## Material-UI: What Is It and How to Get Started?

### What Is Material-UI

The [homepage](https://material-ui.com/) quickly notes what Material-UI is all about: "React components for faster and easier web development. Build your own design system, or start with Material Design."

So we can build our own design system and use Material-UI's custom theming (to come later) or we can start with [Material Design](https://material.io/): "Material is a design system – backed by open-source code – that helps teams build high-quality digital experiences."

Essentially, Material-UI is a UI library that allows you to reuse their components, where these components are designed with Material Design. 

### How to Get Started (installation)

Material-UI broadly recommends the following on its [installation page](https://material-ui.com/getting-started/installation/).

Start by installing all of the core functionality of Material-UI as well as the prebuilt SVG Material icons such as those found in the [icon demos](https://material-ui.com/components/icons/).

```
npm install @material-ui/core @material-ui/icons
```

Given that Material-UI was designed with the [Roboto](https://fonts.google.com/specimen/Roboto) font in mind and that we will likely want to use the font `Icon` component, we should add the following `link`s to the `index.html` file in the `public` directory--you can just drop these links right above the `title` in the `head` (this assumes we are using `create-react-app` to spin up a React application):

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

## Theming: the general concept in Material-UI

If we take a look at the [`Button`](https://material-ui.com/components/buttons/) component or the [Button API documentation](https://material-ui.com/api/button/), then we will see that there are some different options for things, namely `color`, where the API documentation indicates the `color` prop for `Button` components can have values of `default`, `inherit`, `primary`, and `secondary`. Where do these colors come from? The answer is that these colors come from a theme, namely the [default theme](https://material-ui.com/customization/default-theme/#default-theme). 

All of the Material-UI components, when they are deciding what colors they should be, how the text spacing should be, the fonts that you use, etc., etc. ... they all come from this thing called a "theme". This is one of the biggest points of interest for Material-UI. You can customize all the themes yourself and overwrite any of the default themes. We should note that Material-UI is responsive out of the box even though you can customize things however you like.

For example, by default, we have the following as breakpoints:

<p align='center'>
  <img width='175' src='https://user-images.githubusercontent.com/73953353/101973629-1336f480-3bff-11eb-91a4-8af2d6c5a1dd.png' />
</p>

We can change this stuff if we want to. We can see there are several other things to look at as well besides just the breakpoints:

<p align='center'>
  <img width='200' src='https://user-images.githubusercontent.com/73953353/101973686-758ff500-3bff-11eb-952b-52e7503fd0c9.png' />
</p>

Specifically, we will often want to pay close attention to the `palette` and `typography` objects:

<p align='center'>
  <img width='200' style={{marginRight: '50px'}} src='https://user-images.githubusercontent.com/73953353/101974839-f51dc400-3bff-11eb-86cd-a280d5a54aec.png' />
  <img width='300' src='https://user-images.githubusercontent.com/73953353/101974847-f5b65a80-3bff-11eb-9c39-ebdbe8e51017.png' />
</p>

Odds are these objects are the ones whose defaults you will want to override the most.

Now, `palette` will essentially show you all of the colors and all of the different hues of those colors set for all the default values. So when we write something like

```html
<Button variant="contained" color="secondary">Secondary</Button>
```

what is really happening is we are using the `main` color associated with the `secondary` object that is part of the larger `palette` object of the default theme.

## Default object for reference

You can go to a page, say the [default theme page](https://material-ui.com/customization/default-theme/#default-theme), open up the console, and you'll see the following line: `Tip: you can access the documentation 'theme' object directly in the console.` If we run `copy(JSON.stringify(theme, null, 2))` in Chrome and paste, then we get the following object:

```json
{
  "breakpoints": {
    "keys": [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    "values": {
      "xs": 0,
      "sm": 600,
      "md": 960,
      "lg": 1280,
      "xl": 1920
    }
  },
  "direction": "ltr",
  "mixins": {
    "toolbar": {
      "minHeight": 56,
      "@media (min-width:0px) and (orientation: landscape)": {
        "minHeight": 48
      },
      "@media (min-width:600px)": {
        "minHeight": 64
      }
    }
  },
  "overrides": {},
  "palette": {
    "common": {
      "black": "#000",
      "white": "#fff"
    },
    "type": "light",
    "primary": {
      "main": "#1976d2",
      "light": "rgb(71, 145, 219)",
      "dark": "rgb(17, 82, 147)",
      "contrastText": "#fff"
    },
    "secondary": {
      "main": "rgb(220, 0, 78)",
      "light": "rgb(227, 51, 113)",
      "dark": "rgb(154, 0, 54)",
      "contrastText": "#fff"
    },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },
    "warning": {
      "light": "#ffb74d",
      "main": "#ff9800",
      "dark": "#f57c00",
      "contrastText": "rgba(0, 0, 0, 0.87)"
    },
    "info": {
      "light": "#64b5f6",
      "main": "#2196f3",
      "dark": "#1976d2",
      "contrastText": "#fff"
    },
    "success": {
      "light": "#81c784",
      "main": "#4caf50",
      "dark": "#388e3c",
      "contrastText": "rgba(0, 0, 0, 0.87)"
    },
    "grey": {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
      "A100": "#d5d5d5",
      "A200": "#aaaaaa",
      "A400": "#303030",
      "A700": "#616161"
    },
    "contrastThreshold": 3,
    "tonalOffset": 0.2,
    "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    },
    "divider": "rgba(0, 0, 0, 0.12)",
    "background": {
      "paper": "#fff",
      "default": "#fff",
      "level2": "#f5f5f5",
      "level1": "#fff"
    },
    "action": {
      "active": "rgba(0, 0, 0, 0.54)",
      "hover": "rgba(0, 0, 0, 0.04)",
      "hoverOpacity": 0.04,
      "selected": "rgba(0, 0, 0, 0.08)",
      "selectedOpacity": 0.08,
      "disabled": "rgba(0, 0, 0, 0.26)",
      "disabledBackground": "rgba(0, 0, 0, 0.12)",
      "disabledOpacity": 0.38,
      "focus": "rgba(0, 0, 0, 0.12)",
      "focusOpacity": 0.12,
      "activatedOpacity": 0.12
    }
  },
  "props": {},
  "shadows": [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
  ],
  "typography": {
    "htmlFontSize": 16,
    "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightBold": 700,
    "h1": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 300,
      "fontSize": "6rem",
      "lineHeight": 1.167,
      "letterSpacing": "-0.01562em"
    },
    "h2": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 300,
      "fontSize": "3.75rem",
      "lineHeight": 1.2,
      "letterSpacing": "-0.00833em"
    },
    "h3": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "3rem",
      "lineHeight": 1.167,
      "letterSpacing": "0em"
    },
    "h4": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "2.125rem",
      "lineHeight": 1.235,
      "letterSpacing": "0.00735em"
    },
    "h5": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "1.5rem",
      "lineHeight": 1.334,
      "letterSpacing": "0em"
    },
    "h6": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 500,
      "fontSize": "1.25rem",
      "lineHeight": 1.6,
      "letterSpacing": "0.0075em"
    },
    "subtitle1": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "1rem",
      "lineHeight": 1.75,
      "letterSpacing": "0.00938em"
    },
    "subtitle2": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 500,
      "fontSize": "0.875rem",
      "lineHeight": 1.57,
      "letterSpacing": "0.00714em"
    },
    "body1": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "1rem",
      "lineHeight": 1.5,
      "letterSpacing": "0.00938em"
    },
    "body2": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "0.875rem",
      "lineHeight": 1.43,
      "letterSpacing": "0.01071em"
    },
    "button": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 500,
      "fontSize": "0.875rem",
      "lineHeight": 1.75,
      "letterSpacing": "0.02857em",
      "textTransform": "uppercase"
    },
    "caption": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "0.75rem",
      "lineHeight": 1.66,
      "letterSpacing": "0.03333em"
    },
    "overline": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "0.75rem",
      "lineHeight": 2.66,
      "letterSpacing": "0.08333em",
      "textTransform": "uppercase"
    }
  },
  "shape": {
    "borderRadius": 4
  },
  "transitions": {
    "easing": {
      "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
      "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
      "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
      "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
    },
    "duration": {
      "shortest": 150,
      "shorter": 200,
      "short": 250,
      "standard": 300,
      "complex": 375,
      "enteringScreen": 225,
      "leavingScreen": 195
    }
  },
  "zIndex": {
    "mobileStepper": 1000,
    "speedDial": 1050,
    "appBar": 1100,
    "drawer": 1200,
    "modal": 1300,
    "snackbar": 1400,
    "tooltip": 1500
  },
  "nprogress": {
    "color": "#000"
  }
}
```

Quite a few things to see for reference! And all of this can be overridden by your own themes.

## Theming: making our own theme

From the above note, it sounds like themes are pretty cool. So how could we create our own theme? [This page](https://material-ui.com/customization/theming/#createmuitheme-options-args-theme) points the way. We will want to use `createMuiTheme(options, ...args) => theme` to generate a theme based on the `options` received (`options` is an *object* which takes an incomplete theme object and adds the missing parts). 

As mentioned in the parentheses above, the way this works is the `options` object takes an incomplete theme object and adds the missing parts. What are the missing parts? Well, the default theme paves the way to figuring this out:

<p align='center'>
  <img width='200' src='https://user-images.githubusercontent.com/73953353/101973686-758ff500-3bff-11eb-952b-52e7503fd0c9.png' />
</p>

You can change the default theme by adding your own theme and overriding any of the values you see in the list. The example provided in the docs is as follows:

```javacript
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
```

Hence, we are targeting the `palette` object and we are overriding the `primary` `main` and `secondary` `main` defaults. 

Now for the important point: how do we actually use a theme we create? The [`ThemeProvider`](https://material-ui.com/customization/theming/#theme-provider) documentation  explains this: If you wish to customize the theme, you need to use the `ThemeProvider` component in order to inject a theme into your application. However, this is optional; Material-UI components come with a default theme (the one shown previously). `ThemeProvider` relies on the [context feature of React](https://reactjs.org/docs/context.html) to pass the theme down to the components, so you need to make sure that `ThemeProvider` is a parent of the components you are trying to customize. You can learn more about this in [the API section](https://material-ui.com/styles/api/#themeprovider).

The [API docs](https://material-ui.com/styles/api/#examples-6) are a good place to start for examples of how to use the `ThemeProvider`. The use of themes is easily one of the coolest and useful things about Material-UI. If you have an *application theme* (i.e., a custom theme you want to apply at all times unless specified otherwise), then you can simply wrap your `<App />` component with the `ThemeProvider` in your `index.js` file:

```jsx
ReactDOM.render(
  <ThemeProvider theme={applicationTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```

But you will likely often have use cases where you want specific themes for different parts of your website. And that's great. You can create as many themes as you want--just make sure `ThemeProvider` with your specified theme is a parent of all the components you want your theme to apply to.

Of course, one of the biggest things is that if you are using Material-UI to build something for a company or a brand, then you can build off of Material-UI components but use your own tailored theming. You can customize just about everything with your own theming. We've already seen how this can be pretty cool with something like when customizing the `palette` object but the `typography` object offers promising opportunities as well.

If we revisit the [default theme](https://material-ui.com/customization/default-theme/#default-theme) page, we will see some interesting stuff for the `typography` object:

```json
"typography": {
    "htmlFontSize": 16,
    "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightBold": 700,
    "h1": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 300,
      "fontSize": "6rem",
      "lineHeight": 1.167,
      "letterSpacing": "-0.01562em"
    },
    "h2": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 300,
      "fontSize": "3.75rem",
      "lineHeight": 1.2,
      "letterSpacing": "-0.00833em"
    },
    "h3": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "3rem",
      "lineHeight": 1.167,
      "letterSpacing": "0em"
    },
    "h4": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "2.125rem",
      "lineHeight": 1.235,
      "letterSpacing": "0.00735em"
    },
    "h5": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "1.5rem",
      "lineHeight": 1.334,
      "letterSpacing": "0em"
    },
    "h6": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 500,
      "fontSize": "1.25rem",
      "lineHeight": 1.6,
      "letterSpacing": "0.0075em"
    },
    "subtitle1": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "1rem",
      "lineHeight": 1.75,
      "letterSpacing": "0.00938em"
    },
    "subtitle2": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 500,
      "fontSize": "0.875rem",
      "lineHeight": 1.57,
      "letterSpacing": "0.00714em"
    },
    "body1": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "1rem",
      "lineHeight": 1.5,
      "letterSpacing": "0.00938em"
    },
    "body2": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "0.875rem",
      "lineHeight": 1.43,
      "letterSpacing": "0.01071em"
    },
    "button": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 500,
      "fontSize": "0.875rem",
      "lineHeight": 1.75,
      "letterSpacing": "0.02857em",
      "textTransform": "uppercase"
    },
    "caption": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "0.75rem",
      "lineHeight": 1.66,
      "letterSpacing": "0.03333em"
    },
    "overline": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "0.75rem",
      "lineHeight": 2.66,
      "letterSpacing": "0.08333em",
      "textTransform": "uppercase"
    }
  }
```

We could override any one of these things. For example, maybe for an `h1` for one of our themes we would like a different `fontFamily`. Or a different `fontSize`. We can change all of this to fit our specific brand.

## The Typography component

One very important component you will likely find yourself using a good bit is the [`Typography`](https://material-ui.com/components/typography/#typography) component. This is essentially where all of your text is going to be. In a traditional application, if you wanted to make a title, then you might make some `h1` tags and call it a day. `Typography` is something that allows you to still do this but in a cleaner, more programmatic way that is in line with your application's typography and font standards.

To use this component, it's as simple as `import { Typography } from '@material-ui/core';` and then something like `<Typography>Some Title</Typography>`. But if this is all we do, then what we get won't look much like a title. If we look at the [`Typography` component API docs](https://material-ui.com/api/typography/), then we will see there is a good bit we can actually customize. For example, we can change the `color` to be that of `primary`. And if everything is wrapped in our own theme, then that color will be whatever we set to `primary` for `color` (if we overwrote the default). In general, the `Typography` component offers us a lot of power especially in light of custom theming. We can do something like `<Typography color='primary' variant='h1'>Hello There</Typography>` to have our primary color and then use our text as an `h1`. So many cool possibilities!

## The makeStyles hook: overriding default Material-UI styles

You can override Material-UI styles by creating your own themes and then using a `ThemeProvider`, as noted above. This is great for instances where we have numerous styles we want to override.

But what if you don't want to create an entire theme but just want to override a few Material-UI styles? A theme seems like overkill. And the creators of Material-UI agree. This is why they gave us the [`makeStyles`](https://material-ui.com/styles/api/#makestyles-styles-options-hook) function: it allows us to link a style sheet with a function component using the hook pattern. The [example](https://material-ui.com/styles/api/#makestyles-styles-options-hook) given in the docs is enlightening:

```jsx
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color: props => props.color,
  },
});

export default function MyComponent(props) {
  const classes = useStyles(props);
  return <div className={classes.root} />;
}
```

As well as another example:

```jsx
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.color.red,
  },
}));

export default function MyComponent {
  const classes = useStyles();
  return <div className={classes.root} />;
}
```

For a more sizable albeit kind of silly example:

```jsx
import { Button, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import buttonTheme from './buttonTheme';

const useStyles = makeStyles({
    helloThereStyle: {
      fontStyle: 'oblique',
      color: buttonTheme.palette.secondary.main
    }
  });

const Buttons = (props) => {
  const classes = useStyles(props);

  return ( 
    <ThemeProvider theme={buttonTheme}>
      <Typography className={classes.helloThereStyle} variant='h1'>Hello There</Typography>
      <Button variant="contained">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </ThemeProvider>
  );
}
 
export default Buttons;
```
