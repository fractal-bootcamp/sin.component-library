import { fn } from "@storybook/test";
import Dropdown, { DropdownProps, DropdownSelectType } from "./Dropdown.tsx";
import { Meta, StoryObj } from "@storybook/react";

export const ActionsData = {
    onDefault: fn(),
};

const storyDefaults: Partial<DropdownProps> = {
    options: [
        { label: 'Default Option 1', value: 'default1' },
        { label: 'Default Option 2', value: 'default2' },
        { label: 'Default Option 3', value: 'default3' },
        { label: 'Default Option 4', value: 'default4' }
    ],
    defaultText: 'Select an option',
    disabled: false,
};

const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
    title: 'DropdownComponent',
    args: {
        options: [
            { label: 'Default Option 1', value: 'default1' },
            { label: 'Default Option 2', value: 'default2' },
            { label: 'Default Option 3', value: 'default3' },
            { label: 'Default Option 4', value: 'default4' }
        ],
        defaultText: 'Select an option',
        disabled: false,
        // boxStyle: { backgroundColor: 'red' },
        // listStyle: { backgroundColor: 'red' },

    }
};


export const CHECKBOX: StoryObj<typeof Dropdown> = {
    args: {
        ...storyDefaults,
        type: DropdownSelectType.CHECKBOX

    }
}

export const LIST: StoryObj<typeof Dropdown> = {
    args: {
        ...storyDefaults,
        type: DropdownSelectType.LIST

    }
}
export const DISABELED: StoryObj<typeof Dropdown> = {
    args: {
        ...storyDefaults,
        disabled: true

    }
}

export const MANYOPTIONS: StoryObj<typeof Dropdown> = {
    args: {
        ...storyDefaults,
        options: Array.from({ length: 20 }, (_, index) => ({
            label: `Default Option ${index + 1}`,
            value: `default${index + 1}`
        })),
    }
}


export default meta;