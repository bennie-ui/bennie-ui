module.exports = {
  plugins: {
    "postcss-import": {},
    "@pandacss/dev/postcss": {},
    autoprefixer: {
      overrideBrowserslist: ['defaults'],
      // Suppress fill->stretch warnings
      ignoreUnknownVersions: true,
    },
  },
};
