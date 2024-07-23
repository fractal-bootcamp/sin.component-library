import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your text",
    isDisabled: false,
    isPassword: false,
    validationRegex: /^[a-zA-Z0-9]+$/,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Enter your text",
    isDisabled: true,
    isPassword: false,
    validationRegex: /^[a-zA-Z0-9]+$/,
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter your password",
    isDisabled: false,
    isPassword: true,
    validationRegex: /^[a-zA-Z0-9]+$/,
  },
};
