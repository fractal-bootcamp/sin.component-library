import { fn } from "@storybook/test";
import Dropdown from "./Dropdown.tsx";

export const ActionsData = {
    onDefault: fn(),
};

export default {
    component: Dropdown,
    title: 'DropdownComponent',
    args: {
        props: {
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
        },
    }
};
