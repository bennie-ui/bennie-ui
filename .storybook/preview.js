import * as React from "react";
import { themes } from "@storybook/theming";
import "./panda-generated.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  globalTypes: {
    colorScheme: {
      name: "Color scheme",
      defaultValue: "dark",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark",  title: "Dark",  icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const scheme = context.globals.colorScheme ?? "dark";
      React.useEffect(() => {
        const root = document.documentElement;
        if (scheme === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }, [scheme]);

      return React.createElement(Story);
    },
  ],

  docs: {
    theme: themes.dark,
  },

  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
