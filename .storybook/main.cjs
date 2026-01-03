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
          "@bennie-ui/button": join(__dirname, "../components/primitives/button/src"),
          "@bennie-ui/section": join(__dirname, "../components/primitives/section/src"),
          "@bennie-ui/text": join(__dirname, "../components/primitives/text/src"),
          "@bennie-ui/icons": join(__dirname, "../components/primitives/icons/src"),
          "@bennie-ui/inputs": join(__dirname, "../components/composites/forms/inputs/src"),
          "@bennie-ui/toast": join(__dirname, "../components/composites/feedback/toast/src"),
          "@bennie-ui/constants": join(__dirname, "../libraries/constants/src"),
          "@bennie-ui/types": join(__dirname, "../libraries/types/src"),
          "styled-system": join(__dirname, "../styled-system"),
        },
      },
      customLogger: {
        ...config.customLogger,
        warn(msg, options) {
          // Suppress "Replace fill to stretch" warnings
          if (msg.includes('Replace fill to stretch')) {
            return;
          }
          if (config.customLogger?.warn) {
            config.customLogger.warn(msg, options);
          } else {
            console.warn(msg);
          }
        }
      }
    });
  },
};

module.exports = config;
