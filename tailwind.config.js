module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['Nunito Sans', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        'bug': '#AEDF78',
        'ground': '#b2746c',
        'fire': '#fb6c6c',
        'grass': '#46d1b2',
        'normal': '#b0b3bb',
        'poison': '#7d528d',
        'electric': '#ffcf4a',
        'water': '#77befe',
        'fairy': '#ee99c2',

        'light-bug': '#bfff89',
        'light-water': '#90d2fe',
        'light-ground': '#b99477',
        'light-grass': '#62e1ca',
        'light-fire': '#fc7f7f',
        'light-normal': '#cbcbcb',
        'light-poison': '#9669a7',
        'light-electric': '#ffdb5b',
        'light-fairy': '#eec6d1',
      }
    },
  },
  plugins: [],
}