# Getting Started

The easiest way to try out Kursor.js is using the [JSFiddle Hello World example](https://jsfiddle.net/luisdanielroviracontreras/01xsk2fq/9/). Feel free to open it in another tab and follow along as we go through some basic examples. Or, you can create an index.html file and include Kursor with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css">
</head>
<body>
    <div id="app">
        <p>hello Kursor.js</p>
    </div>
</body>
    <script src="https://unpkg.com/kursor"></script>
    <script>
        new kursor({
            type: 1
        })
    </script>
</html>
```

## Using Next.js

The previous implementation may be different depending on the framework or library you are using.

From Next's perspective (either SSG or SSR) you should create a file called [_document.js](https://nextjs.org/docs/advanced-features/custom-document) in the `pages` folder with the following code:

```js
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="en" charSet="utf-8">
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="https://unpkg.com/kursor"></script>
        <script dangerouslySetInnerHTML={{__html:`new kursor({ type: 1, removeDefaultCursor: true })`}} />
      </Html>
    )
  }
}

export default MyDocument
```
