---
title: My new Article
date: 2025-09-23
description : "A test article explaining nothing"
image: /images/test.png
---

# My new Article

This is just a test article with some content.

## Sub section

In this subsection, we want to highlight a code group as part of the formatting that Vitepress provides.

::: code-group
```js [config.js]
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "My awesome blog",
    description: "talking about the future!",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
        ],
        search: {
            provider: 'local'
        }
    }
})
```
:::

## Another sub section

Just to see how this looks.