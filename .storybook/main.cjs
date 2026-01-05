const { join, dirname } = require("path");

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      resolve: {
        alias: {
          "styled-system": join(__dirname, "../styled-system"),
        },
      },
      customLogger: {
        info(...args) {
          if (config.customLogger?.info) {
            config.customLogger.info(...args);
          } else {
            console.info(...args);
          }
        },
        warn(msg, options) {
          // Suppress "Replace fill to stretch" warnings
          if (msg.includes("Replace fill to stretch")) {
            return;
          }
          if (config.customLogger?.warn) {
            config.customLogger.warn(msg, options);
          } else {
            console.warn(msg);
          }
        },
        error(...args) {
          if (config.customLogger?.error) {
            config.customLogger.error(...args);
          } else {
            console.error(...args);
          }
        },
        clearScreen(...args) {
          if (config.customLogger?.clearScreen) {
            config.customLogger.clearScreen(...args);
          }
        },
        hasErrorLogged(...args) {
          if (config.customLogger?.hasErrorLogged) {
            return config.customLogger.hasErrorLogged(...args);
          }
          return false;
        },
        hasWarned: false,
      },
    });
  },
};

module.exports = config;
