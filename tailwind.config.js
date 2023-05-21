module.exports = {
  // ...
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // ...
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'],
}
    }
  }
}
