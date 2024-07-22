import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onClick: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    iconUrl: {
      control: 'file'
    },
    style: {
      table: {
        disable: true
      }
    }
  }
};

const storyDefaults: Partial<ButtonProps> = {
  disabled: false,
  loading: false,
  size: 'md',
  tooltip: '',
  iconUrl: '',
  iconPosition: 'left',
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    ...storyDefaults,
    style: 'primary',
    text: 'Primary'
  }
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    ...storyDefaults,
    style: 'secondary',
    text: 'Secondary'
  }
};

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    ...storyDefaults,
    style: 'tertiary',
    text: 'Tertiary'
  }
};

export default meta;