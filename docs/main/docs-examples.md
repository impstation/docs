---
sidebar_position: 2
---

# Docs Example Page

This page is used for showing off plugins and styling available in this Docusaurus instance. For more info not listed here, check out the official [Docusaurus markdown features](https://docusaurus.io/docs/markdown-features).

Its best to view the raw markdown source of this page, which you can do [here](https://github.com/mqole/robust-docs/blob/main/docs/meta/docs-examples.md?plain=1).

## Markdown

Markdown is a lightweight language which is great for writing documentation. It supports a lot of basic forms of text styling. The best way to learn Markdown is to experiment with a side-by-side preview. Here's a link to a [Markdown playground](https://markdowncourse.com/playground) where you can try it in action!

Italicized text is `*formatted like this*` and *looks like this*.

Bolded text is `**formatted like this**` and **looks like this**.

You can also use `code snippets`, ~~strikethrough~~, and plenty more! Docusaurus' documentation page has a more [extensive list](https://docusaurus.io/docs/markdown-features).

## Front Matter

Individual docs pages frontload metadata as front matter. Here's what this page's front matter looks like:

```
---
sidebar_position: 2
---
```

This metadata is parsed as `YAML`. In this case, we're telling this page to be at the 2nd position in the sidebar, putting it under the [Guide to Editing Docs](./docs-contributing).

Front matter is used mostly in this site's backend, but feel free to mess around with it. [There's a lot you can use it for.](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)

## Admonitions

Docusaurus supports a few different admonition types.

Admonitions are formatted like this:
```
:::{type}[text you want as title, or leave blank]
description
:::
```

Here are the different types you can use:

:::note
:::

:::tip
:::

:::info
:::

:::warning
:::

:::danger
:::