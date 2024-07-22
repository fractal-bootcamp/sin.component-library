import { Meta, StoryObj } from "@storybook/react";
import TooltipStorybook from "./TooltipStorybook";

const meta: Meta<typeof TooltipStorybook> = {
  component: TooltipStorybook,
  argTypes: {
    focused: {
      table: {
        disable: true
      }
    }
  }
};

export const Primary: StoryObj<typeof TooltipStorybook> = {
  args: {
    position: 'bottom',
    text: '',
    maxWidth: 360,
    delay: 500,
    focused: false,
  }
};

export default meta;