import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundColor: "red",
    progressColor: "green",
    linearOrCircular: "linear",
    isStriped: false,
  },
};

export const Circular: Story = {
  args: {
    backgroundColor: "red",
    progressColor: "green",
    linearOrCircular: "circular",
    isStriped: false,
  },
};

export const Striped: Story = {
  args: {
    backgroundColor: "red",
    progressColor: "green",
    linearOrCircular: "linear",
    isStriped: true,
  },
};
