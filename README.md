<p align="center">
  <img src="https://raw.githubusercontent.com/lusaxweb/kursor/master/assets/Kursorjs.gif" alt="vuesax" />
</p>

# Kursorjs

New library to facilitate the creation of custom cursors, which are in trend with the new web pages

## In Beta

Is a new library and in (**BETA**) you can use it for projects in production if you are an adventurer

## Documents

Soon they will update and create the documents ...

## Use

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="./dist/kursor.css">

  <style>
    body {
      height: 100vh;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      padding: 15px;
      border: 0px;
      border: 2px solid rgb(0, 100, 200);
      color: rgb(0, 100, 200);
      transition: all .25s ease;
      background: transparent
    }

    button:hover {
      background: rgb(0, 100, 200);
      color: rgb(255,255,255);
    }
  </style>
</head>
<body>

  <button class="button k-hover1">Hello World</button>

</body>

<script src="./dist/kursor.js"></script>

<script>
  var kursorx = new kursor({
    type: 1,
  })
</script>
</html>
```
