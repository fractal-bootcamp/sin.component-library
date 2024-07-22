import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    style: {
      table: {
        disable: true
      }
    },
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
    icon: {
      control: 'file'
    },
  }
};

const storyDefaults: Partial<ButtonProps> = {
  size: 'medium',
  text: 'Primary',
  disabled: false,
  loading: false,
  width: 0,
  height: 0,
  tooltip: '',
  icon: '',
  iconPosition: 'left',
  iconWidth: 0,
  iconHeight: 0,
}

export const Primary: StoryObj<typeof Button> = {
  args: {
    style: 'primary',
    ...storyDefaults
  }
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    style: 'secondary',
    ...storyDefaults
  }
};

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    style: 'tertiary',
    ...storyDefaults
  }
};

export default meta;