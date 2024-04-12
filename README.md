# PizzaShop

## Development notes

Install dependencies

```sh
npm init -y
npm install vite@latest -D
npm install -D tailwindcss
npx tailwindcss init
npm install react react-dom react-router-dom
```

Modify `package.json`

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
```

Modify `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Modify `index.html` to include tailwind output.css.

```html
<head>
  ...
  <link href="./output.css" rel="stylesheet" />
</head>
```

To get Tailwind to compile the CSS you need to run the following.

```sh
npx tailwindcss -i ./input.css -o ./output.css --watch
```
