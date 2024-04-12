# PizzaShop

## Development notes

Install dependencies. We are going to use Vite, Tailwind, and React.

To process the Tailwind css we are going to use `postcss` and `autoprefixer`.

```sh
npm init -y
npm install vite@latest -D
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install react react-dom react-router-dom
```

Modify `package.json`

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
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

Create a `main.css` and add the basic Tailwind directives.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Modify `index.html` to include tailwind output.css.

```html
<head>
  ...
  <link href="./main.css" rel="stylesheet" />
</head>
```

Now when you run with `npm run dev` the css will automatically be generated.
