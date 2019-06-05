# configuration

Kursor.js is a very simple library to configure, when instantiating the global variable `kursor` as a parameter we pass the options to create the cursor (mouse)

## type

Change the theme of the kursor, as value is of type `Number` and at the moment there are only 5 types of cursors

```js
new Kursor({
  type: 1 /* 1 | 2 | 3 | 4 | 5 */
})
```

## el

By default Kursor is implemented inside the `<body>`, but if you only need the cursor(mouse) inside a specific element you can use the property (**el**)

As a value you need a `String` with the name of the **id** or the **class** an example would be something like this

```html
<div class="myBox"></div>
```

```js
new Kursor({
  el: '.myBox'
})
```

## removeDefaultCursor

Remove the user's default cursor with exceptions in the input elements and some others

```js
new Kursor({
  removeDefaultCursor: true
})
```

## color

Change the color of the theme to the one provided, changing all its modalities to that color as (`hover`,` mousedown`)

:::warning
  Solo estan permitidos los colores **RGB** y **HEX** por ejemplo

  - `rgb(0,0,0)`
  - `#fff`
:::

```js
new Kursor({
  color: 'rgba(200,145,54)'
})

// OR

new Kursor({
  color: '#476582'
})
```

