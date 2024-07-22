import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
};

export default preview;
