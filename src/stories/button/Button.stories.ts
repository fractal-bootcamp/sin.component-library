import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

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
    width: {
      description: 'Overrides size preset'
    },
    height: {
      description: 'Overrides size preset'
    }
  }
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    style: 'primary',
    size: 'medium',
    text: 'Primary',
    disabled: false,
    loading: false,
    tooltip: '',
    width: 0,
    height: 0,
    icon: '',
    iconPosition: 'left',
    iconWidth: 0,
    iconHeight: 0,
  }
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    style: 'secondary',
    size: 'medium',
    text: 'Secondary',
    disabled: false,
    loading: false,
    tooltip: '',
    width: 0,
    height: 0,
    icon: '',
    iconPosition: 'left',
    iconWidth: 0,
    iconHeight: 0,
  }
};

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    style: 'tertiary',
    size: 'medium',
    text: 'Tertiary',
    disabled: false,
    loading: false,
    tooltip: '',
    width: 0,
    height: 0,
    icon: '',
    iconPosition: 'left',
    iconWidth: 0,
    iconHeight: 0,
  }
};

export default meta;