import { fn } from "@storybook/test";
import Alert, { AlertProps, TypeEnum } from "./Alert.tsx";
import { Meta, StoryObj } from "@storybook/react";

export const ActionsData = {
    onDefault: fn(),
};

const storyDefaults: Partial<AlertProps> = {
    type: TypeEnum.INFO,
    message: 'hello there',
    dismissible: false,
    timeout: 3000,
    displayMultiple: true
};

const meta: Meta<typeof Alert> = {
    component: Alert,
    title: 'AlertComponent',
    args: {
        type: TypeEnum.INFO,
        message: 'hello there',
        dismissible: false,
        timeout: 3000,
        displayMultiple: true
    }
};


export const DISMISSIBLE: StoryObj<typeof Alert> = {
    args: {
        ...storyDefaults,
        dismissible: true
    }
}

export const DISPLAYONE: StoryObj<typeof Alert> = {
    args: {
        ...storyDefaults,
        displayMultiple: false
    }
}

export const DISPLAYMULTIPLE: StoryObj<typeof Alert> = {
    args: {
        ...storyDefaults,
        displayMultiple: true
    }
}

export const INFO: StoryObj<typeof Alert> = {
    args: {
        ...storyDefaults,
        type: TypeEnum.INFO
    }
}

export const SUCCESS: StoryObj<typeof Alert> = {
    args: {
        ...storyDefaults,
        type: TypeEnum.SUCCESS
    }
}
export const WARNING: StoryObj<typeof Alert> = {
    args: {
        ...storyDefaults,
        type: TypeEnum.WARNING
    }
}

export const ERROR: StoryObj<typeof Alert> = {
    args: {
        ...storyDefaults,
        type: TypeEnum.ERROR
    }
}
export default meta;