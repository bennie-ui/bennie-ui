import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx,mdx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  globalCss: {
    'html, body': {
      color: 'black',
      backgroundColor: 'white',
      _dark: {
        color: 'white',
        backgroundColor: 'black'
      }
    }
  },

  // Enable dark mode
  // The output directory for your css system
  outdir: "styled-system",
});
