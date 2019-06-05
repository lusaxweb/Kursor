# Installation

## CDN

For prototyping or learning purposes, you can use the latest version with:

```html
<script src="https://cdn.jsdelivr.net/npm/kursor"></script>
```

For production, we recommend linking to a specific version number and build to avoid unexpected breakage from newer versions:

```html
<script src="https://cdn.jsdelivr.net/npm/kursor@0.0.14/dist/kursor.js"></script>
```

You can browse the source of the NPM package at [https://www.jsdelivr.com/package/npm/kursor](https://www.jsdelivr.com/package/npm/kursor).

Kursor is also available on [unpkg](https://unpkg.com/kursor) and cdnjs (cdnjs takes some time to sync so the latest release may not be available yet).

## NPM

NPM is the recommended installation method when building large scale applications with Kursor. It pairs nicely with module bundlers such as Webpack or Browserify

```sh
# latest stable
$ npm install kursor
```

## Explanation of Different Builds

In the dist/ directory of the NPM package you will find many different builds of kursor.js. Here’s an overview of the difference between them:

| | UMD |
| --- | --- |
| **Full** | kursor.js |
| **Full (production)** | kursor.min.js |

## Terms
  
  - **Full**: builds that contain both the compiler and the runtime.
  - [UMD](https://github.com/umdjs/umd): UMD builds can be used directly in the browser via a `<script>` tag. The default file from jsDelivr CDN at [https://cdn.jsdelivr.net/npm/kursor](https://cdn.jsdelivr.net/npm/kursor) is the UMD build (`kursor.js`).
