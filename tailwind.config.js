module.exports = {

  // add groteske as font family


  theme: {
        fontFamily: { 
          'groteske': ['Groteske', 'sans-serif'],
        },
        extend: {
          colors: {
            outer_space: {
              DEFAULT: '#4c5454',
              100: '#0f1111',
              200: '#1e2121',
              300: '#2d3232',
              400: '#3c4242',
              500: '#4c5454',
              600: '#6d7878',
              700: '#909b9b',
              800: '#b5bcbc',
              900: '#dadede',
            },
            bittersweet: {
              DEFAULT: '#ff715b',
              100: '#450900',
              200: '#8b1200',
              300: '#d01c00',
              400: '#ff3516',
              500: '#ff715b',
              600: '#ff8e7c',
              700: '#ffaa9d',
              800: '#ffc6be',
              900: '#ffe3de',
            },
            persian_green: {
              DEFAULT: '#1ea896',
              100: '#06221e',
              200: '#0c443c',
              300: '#12655a',
              400: '#188778',
              500: '#1ea896',
              600: '#2bdac2',
              700: '#60e3d2',
              800: '#95ece1',
              900: '#caf6f0',
            },
            van_dyke: {
              DEFAULT: '#523f38',
              100: '#100d0b',
              200: '#211916',
              300: '#312621',
              400: '#42322d',
              500: '#523f38',
              600: '#7e6156',
              700: '#a5857a',
              800: '#c3aea6',
              900: '#e1d6d3',
            },
          },
        },
      },
    variants: {},
    plugins: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
};