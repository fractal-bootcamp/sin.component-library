import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion
};

export const Primary: StoryObj<typeof Accordion> = {
  args: {
    header: 'Accordion menu',
    content: 'Accordion content'
  }
}

export const Nested: StoryObj<typeof Accordion> = {
  args: {
    header: 'Accordion menu',
    content: [
      {
        header: 'Nested menu 1',
        content: 'Nested content 1'
      },
      {
        header: 'Nested menu 2',
        content: [
          {
            header: 'Secret menu',
            content: 'Secret content'
          }
        ]
      }
    ]
  }
}

export default meta;