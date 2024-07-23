import { fn } from "@storybook/test";
import Rating, { RatingProps } from "./Rating";
import { Meta, StoryObj } from "@storybook/react";

export const ActionsData = {
    onDefault: fn(),
};

const storyDefaults: Partial<RatingProps> = {
    totalStars: 5,
    // shape: '\u2605', // Optional prop
    // disabled: false, // Optional prop,
    // readOnly: false,
    // readOnlyValue: 3

};

const meta: Meta<typeof Rating> = {
    component: Rating,
    title: 'Rating',
    args: {
        totalStars: 5,
    }
};


export const MANYSTARS: StoryObj<typeof Rating> = {
    args: {
        ...storyDefaults,

        totalStars: 10
    }
}

export const HEARTSHAPE: StoryObj<typeof Rating> = {
    args: {
        ...storyDefaults,

        shape: '\u2665'
    }
}

export const DISABLED: StoryObj<typeof Rating> = {
    args: {
        ...storyDefaults,
        disabled: true
    }
}

export const READONLYTRUE: StoryObj<typeof Rating> = {
    args: {
        totalStars: 7,
        readOnly: true,
        readOnlyValue: 5
    }
}



export default meta;